/**
 * Ensure each project has raster files under public/projects/media/<id>/,
 * then set image + gallery in data.json from disk.
 * Empty folders get a copy of /images/hero/projects-hero.jpg as <id>-01.jpg.
 *
 * Run: node scripts/sync-all-projects-media.js
 */
const fs = require('fs')
const path = require('path')

const REPO = path.join(__dirname, '..')
const DATA_JSON = path.join(REPO, 'src', 'content', 'projects', 'data.json')
const MEDIA_ROOT = path.join(REPO, 'public', 'projects', 'media')
const HERO = path.join(REPO, 'public', 'images', 'hero', 'projects-hero.jpg')

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'])

function walkImages(dir) {
  const out = []
  if (!fs.existsSync(dir)) return out
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith('.')) continue
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) out.push(...walkImages(full))
    else if (IMAGE_EXT.has(path.extname(ent.name).toLowerCase())) out.push(full)
  }
  return out.sort((a, b) => a.localeCompare(b, 'en'))
}

function ensureMedia(projectId) {
  const destDir = path.join(MEDIA_ROOT, projectId)
  const existing = walkImages(destDir)
  if (existing.length > 0) return { action: 'kept', count: existing.length }

  fs.mkdirSync(destDir, { recursive: true })

  if (fs.existsSync(HERO)) {
    const dest = path.join(destDir, `${projectId}-01.jpg`)
    fs.copyFileSync(HERO, dest)
    return { action: 'copied-hero-fallback', count: 1 }
  }

  return { action: 'empty', count: 0 }
}

function toUrl(projectId, filePath) {
  const rel = path.relative(path.join(MEDIA_ROOT, projectId), filePath)
  const parts = rel.split(path.sep).map((p) => encodeURIComponent(p))
  return `/projects/media/${projectId}/${parts.join('/')}`
}

function main() {
  const data = JSON.parse(fs.readFileSync(DATA_JSON, 'utf8'))
  const log = []

  for (const p of data.projects) {
    const r = ensureMedia(p.id)
    log.push(`${p.id}: ${r.action} (${r.count})`)
    const files = walkImages(path.join(MEDIA_ROOT, p.id))
    if (files.length === 0) {
      p.image = '/images/hero/projects-hero.jpg'
      p.gallery = []
      log.push(`  -> no files, hero URL only`)
      continue
    }
    const urls = files.map((f) => toUrl(p.id, f))
    p.image = urls[0]
    p.gallery = urls
  }

  fs.writeFileSync(DATA_JSON, JSON.stringify(data, null, 2) + '\n', 'utf8')
  console.log(log.join('\n'))
  console.log('\nWrote', DATA_JSON)
}

main()
