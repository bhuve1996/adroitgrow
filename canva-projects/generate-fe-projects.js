/**
 * Generate src/content/projects.json from finalized-projects for the frontend.
 * Copies up to 3 images per project to public/images/projects/.
 * Run from repo root: node canva-projects/generate-fe-projects.js
 */
const fs = require('fs')
const path = require('path')

const REPO_ROOT = path.resolve(__dirname, '..')
const FINALIZED_DIR = path.join(__dirname, 'finalized-projects')
const PUBLIC_PROJECTS_IMAGES = path.join(REPO_ROOT, 'public', 'images', 'projects')
const BACKUP_JSON = path.join(REPO_ROOT, 'src', 'content', 'projects.backup.json')
const OUT_JSON = path.join(REPO_ROOT, 'src', 'content', 'projects.json')

function parseLocationYear(text) {
  const locationMatch = text.match(/Location\s*[-:]\s*([^\n]+)/i)
  const yearMatch = text.match(/Year\s*[-:]\s*(\d{4})/i)
  const plotMatch = text.match(/Plot Area\s*[-:]\s*([^\n]+)/i)
  return {
    location: locationMatch ? locationMatch[1].replace(/\s+/g, ' ').trim().slice(0, 80) : 'India',
    year: yearMatch ? parseInt(yearMatch[1], 10) : new Date().getFullYear(),
    plotArea: plotMatch ? plotMatch[1].replace(/\s+/g, ' ').trim().slice(0, 60) : undefined,
  }
}

function descriptionFromText(text) {
  const lines = text
    .split(/\n/)
    .map((l) => l.trim())
    .filter(Boolean)
  const contentLines = lines.filter(
    (l) => !/^PROJECTS\s*$/i.test(l) && !/^[\d\s\|=—\-]+$/.test(l) && l.length > 10
  )
  const desc = contentLines.slice(0, 8).join(' ').replace(/\s+/g, ' ').trim()
  return desc.slice(0, 500) || 'Industrial and commercial project by Adroit Grow.'
}

function shortDescriptionFromText(text) {
  const lines = text
    .split(/\n/)
    .map((l) => l.trim())
    .filter(Boolean)
  for (const l of lines) {
    if (l.length > 20 && l.length < 160 && !/^PROJECTS\s*$/i.test(l)) return l.slice(0, 120)
  }
  return descriptionFromText(text).slice(0, 120)
}

function main() {
  const backup = JSON.parse(fs.readFileSync(BACKUP_JSON, 'utf8'))
  const index = JSON.parse(fs.readFileSync(path.join(FINALIZED_DIR, 'index.json'), 'utf8'))

  if (!fs.existsSync(PUBLIC_PROJECTS_IMAGES))
    fs.mkdirSync(PUBLIC_PROJECTS_IMAGES, { recursive: true })

  const projects = []

  for (const p of index.projects) {
    const slug = p.slug
    const textPath = path.join(FINALIZED_DIR, slug, 'text.txt')
    let text = ''
    if (fs.existsSync(textPath)) text = fs.readFileSync(textPath, 'utf8').trim()
    const { location, year } = parseLocationYear(text)
    const description = text ? descriptionFromText(text) : `${p.name} – project by Adroit Grow.`
    const shortDescription = text ? shortDescriptionFromText(text) : description.slice(0, 120)

    const imagesDir = path.join(FINALIZED_DIR, slug, 'images')
    const gallery = []
    if (fs.existsSync(imagesDir)) {
      const files = fs.readdirSync(imagesDir).sort()
      files.forEach((file, i) => {
        const ext = path.extname(file)
        const destName = i === 0 ? `${slug}${ext}` : `${slug}-${i}${ext}`
        const src = path.join(imagesDir, file)
        const dest = path.join(PUBLIC_PROJECTS_IMAGES, destName)
        fs.copyFileSync(src, dest)
        const url = `/images/projects/${destName}`
        if (i === 0) gallery.unshift(url)
        else gallery.push(url)
      })
    }
    const image = gallery.length > 0 ? gallery[0] : '/images/hero/projects-hero.jpg'
    const galleryRest = gallery.slice(1)

    projects.push({
      id: slug,
      title: p.name,
      slug,
      location,
      year,
      category: 'Industrial Design',
      industry: 'Manufacturing',
      description,
      shortDescription,
      image,
      gallery: galleryRest,
      scope: ['Design & Project Management', 'Industrial building design'],
      stats: { type: 'Industrial' },
    })
  }

  const output = {
    hero: backup.hero,
    filters: backup.filters,
    projects,
  }

  fs.writeFileSync(OUT_JSON, JSON.stringify(output, null, 2), 'utf8')
  console.log('Wrote', OUT_JSON, 'with', projects.length, 'projects')
  console.log('Images copied to public/images/projects/')
}

main()
