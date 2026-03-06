/**
 * Organize project: move slides to slides/, save all text to text/, update project.json.
 * Run from repo root: node canva-projects/organize-slides-and-text.js
 */
const fs = require('fs');
const path = require('path');

const PROJECT_DIR = path.join(__dirname, 'Sahil-new-company-profile');
const SLIDES_DIR = path.join(PROJECT_DIR, 'slides');
const TEXT_DIR = path.join(PROJECT_DIR, 'text');
const IMAGES_DIR = path.join(PROJECT_DIR, 'images');

// Create folders
if (!fs.existsSync(SLIDES_DIR)) fs.mkdirSync(SLIDES_DIR, { recursive: true });
if (!fs.existsSync(TEXT_DIR)) fs.mkdirSync(TEXT_DIR, { recursive: true });

// 1) Move images/*.png -> slides/*.png
if (fs.existsSync(IMAGES_DIR)) {
  const files = fs.readdirSync(IMAGES_DIR).filter((f) => f.endsWith('.png'));
  for (const f of files) {
    const src = path.join(IMAGES_DIR, f);
    const dest = path.join(SLIDES_DIR, f);
    fs.renameSync(src, dest);
    console.log('Moved', f, '-> slides/');
  }
  // Remove images dir if empty
  if (fs.readdirSync(IMAGES_DIR).length === 0) fs.rmdirSync(IMAGES_DIR);
}

// 2) Load project.json and extracted-text.json
const projectPath = path.join(PROJECT_DIR, 'project.json');
const extractedPath = path.join(PROJECT_DIR, 'extracted-text.json');
const project = JSON.parse(fs.readFileSync(projectPath, 'utf8'));
const extracted = JSON.parse(fs.readFileSync(extractedPath, 'utf8'));

// 3) Save full design text (from API)
const fullTextPath = path.join(TEXT_DIR, 'full-design-text.txt');
fs.writeFileSync(fullTextPath, project.text_content || '', 'utf8');
console.log('Saved text/full-design-text.txt');

// 4) Save per-slide text (from OCR)
for (let i = 1; i <= 55; i++) {
  const num = String(i).padStart(3, '0');
  const text = extracted[String(i)] ?? '';
  const slidePath = path.join(TEXT_DIR, `slide-${num}.txt`);
  fs.writeFileSync(slidePath, text, 'utf8');
}
console.log('Saved text/slide-001.txt ... slide-055.txt');

// 5) Update project.json: image_file -> slides/, add text_file per page
project.pages = project.pages.map((p, i) => {
  const num = String(p.index).padStart(3, '0');
  return {
    ...p,
    image_file: `slides/page-${num}.png`,
    text_file: `text/slide-${num}.txt`,
  };
});
project.text_files = {
  full_design: 'text/full-design-text.txt',
  per_slide: 'text/slide-XXX.txt',
};
fs.writeFileSync(projectPath, JSON.stringify(project, null, 2), 'utf8');
console.log('Updated project.json');

// 6) Update root projects.json pages paths
const rootProjectsPath = path.join(__dirname, 'projects.json');
const rootData = JSON.parse(fs.readFileSync(rootProjectsPath, 'utf8'));
const proj = rootData.projects.find((p) => p.id === project.id);
if (proj) {
  proj.pages = proj.pages.map((p, i) => {
    const num = String(p.index).padStart(3, '0');
    return { ...p, image_file: `slides/page-${num}.png`, text_file: `text/slide-${num}.txt` };
  });
  proj.text_files = { full_design: 'text/full-design-text.txt', per_slide: 'text/slide-XXX.txt' };
  fs.writeFileSync(rootProjectsPath, JSON.stringify(rootData, null, 2), 'utf8');
  console.log('Updated canva-projects/projects.json');
}

console.log('Done. Structure: Sahil-new-company-profile/slides/, text/ (full + per-slide).');
