/**
 * Build finalized projects: one folder per Site Pictures project,
 * max 3 images from Site Pictures, text matched from Canva extracted slides.
 * Run from repo root: node canva-projects/build-finalized-projects.js
 */
const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const SITE_PICTURES = path.join(REPO_ROOT, 'public', 'Site Pictures');
const CANVA_TEXT_DIR = path.join(__dirname, 'Sahil-new-company-profile', 'text');
const OUT_DIR = path.join(__dirname, 'finalized-projects');
const MAX_IMAGES = 3;

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.bmp']);

// Site Pictures folder name → Canva slide number (first slide that describes this project)
const NAME_TO_SLIDE = {
  'yakohama': 8,
  'neoperl': 10,
  'helious specilities gases ghiloth': 11,
  'helious hyderabad': 12,
  'domino': 13,
  'ashirvad': 14,
  'jmd': 25,
  'urban grove': 16,
  'semicon': 17,
  'tegaman safety': 18,
  'grinid tech': 20,
  'jackson & company': 21,
  's.b packaging': 22,
  'rang mahal': 23,
  'py india': 24,
  'tranc ancr': 26,
  'ajay air product': 27,
  'ultima mesha': 28,
  'unique bimetal': 29,
  'tusker': 41,
  'atek': 30,
  'precious electrochem': 32,
  'd h lighting': 33,
  'bharat polyzone': 34,
  'p 38 rama krishna': 36,
  'p09 virat export': 37,
  'unipex': 38,
  'supreme filatech': 39,
  'polyplastic': 40,
  'los angeles': 42,
  'kapriwas warehouse': 31,
  'appex ghiloth': 21,
  'b.l international': 4,
  'scott spares': 4,
  'rahul wire': 5,
  'tecno polychem': 5,
  'egro space p32': 35,
  'senrom': 17,
  'takaru gomu': 15,
  'inox': 13,
  'office interior': 9,
  'p11jaedi greenpack': 37,
};

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getSlideForProject(folderName) {
  const key = folderName.toLowerCase().trim();
  if (NAME_TO_SLIDE[key] != null) return NAME_TO_SLIDE[key];
  for (const [k, slide] of Object.entries(NAME_TO_SLIDE)) {
    if (key.includes(k) || k.includes(key)) return slide;
  }
  return null;
}

function isImageFile(name) {
  const ext = path.extname(name).toLowerCase();
  return IMAGE_EXT.has(ext);
}

function main() {
  if (!fs.existsSync(SITE_PICTURES)) {
    console.error('Missing:', SITE_PICTURES);
    process.exit(1);
  }

  const folderNames = fs.readdirSync(SITE_PICTURES).filter((name) => {
    const full = path.join(SITE_PICTURES, name);
    return fs.statSync(full).isDirectory() || (fs.statSync(full).isFile() && !name.endsWith('.skp'));
  });
  const projectFolders = folderNames.filter((name) => {
    const full = path.join(SITE_PICTURES, name);
    return fs.statSync(full).isDirectory();
  });

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const index = { projects: [], builtAt: new Date().toISOString() };

  for (const folderName of projectFolders) {
    const slug = slugify(folderName);
    if (!slug) continue;
    const projectOut = path.join(OUT_DIR, slug);
    const imagesOut = path.join(projectOut, 'images');
    if (!fs.existsSync(imagesOut)) fs.mkdirSync(imagesOut, { recursive: true });

    const sourceDir = path.join(SITE_PICTURES, folderName);
    const allFiles = fs.readdirSync(sourceDir);
    const imageFiles = allFiles.filter(isImageFile).sort();
    const toCopy = imageFiles.slice(0, MAX_IMAGES);

    let imageCount = 0;
    toCopy.forEach((file, i) => {
      const src = path.join(sourceDir, file);
      const ext = path.extname(file).toLowerCase();
      const destName = `${i + 1}${ext}`;
      const dest = path.join(imagesOut, destName);
      fs.copyFileSync(src, dest);
      imageCount++;
    });

    const slideNum = getSlideForProject(folderName);
    let hasText = false;
    if (slideNum != null) {
      const num = String(slideNum).padStart(3, '0');
      const slidePath = path.join(CANVA_TEXT_DIR, `slide-${num}.txt`);
      if (fs.existsSync(slidePath)) {
        const text = fs.readFileSync(slidePath, 'utf8').trim();
        if (text) {
          fs.writeFileSync(path.join(projectOut, 'text.txt'), text, 'utf8');
          hasText = true;
        }
      }
    }

    index.projects.push({
      slug,
      name: folderName,
      imageCount,
      hasText,
      slide: slideNum ?? undefined,
    });
    console.log(slug, '-', imageCount, 'images', hasText ? ', text' : '');
  }

  fs.writeFileSync(path.join(OUT_DIR, 'index.json'), JSON.stringify(index, null, 2), 'utf8');
  console.log('\nWrote', OUT_DIR + '/index.json');
}

main();
