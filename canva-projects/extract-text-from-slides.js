/**
 * Extract text from Canva slide images using OCR (Tesseract.js).
 * Run from repo root: node canva-projects/extract-text-from-slides.js
 *
 * Output: canva-projects/Sahil-new-company-profile/extracted-text.json
 *   { "1": "text from page 1", "2": "...", ... }
 */
const path = require('path')
const fs = require('fs')
const { createWorker } = require('tesseract.js')

const PROJECT_DIR = path.join(__dirname, 'Sahil-new-company-profile')
const SLIDES_DIR = path.join(PROJECT_DIR, 'slides')
const IMAGES_DIR = fs.existsSync(SLIDES_DIR) ? SLIDES_DIR : path.join(PROJECT_DIR, 'images')
const OUTPUT_FILE = path.join(PROJECT_DIR, 'extracted-text.json')
const PAGE_COUNT = 55

async function main() {
  const worker = await createWorker('eng', 1, {
    logger: (m) => {
      if (m.status === 'recognizing text')
        process.stdout.write(`\r  ${m.progress?.toFixed(0) ?? 0}%`)
    },
  })

  const result = {}

  for (let i = 1; i <= PAGE_COUNT; i++) {
    const num = String(i).padStart(3, '0')
    const imagePath = path.join(IMAGES_DIR, `page-${num}.png`)
    if (!fs.existsSync(imagePath)) {
      console.log(`\nSkip page ${i}: file not found`)
      result[String(i)] = ''
      continue
    }
    process.stdout.write(`\nPage ${i}/${PAGE_COUNT} ... `)
    const stat = fs.statSync(imagePath)
    if (stat.size < 1000) {
      console.log('skip (file too small/corrupt)')
      result[String(i)] = ''
      continue
    }
    try {
      const { data } = await worker.recognize(imagePath)
      const text = (data?.text ?? '').trim()
      result[String(i)] = text
      console.log(`${text.length} chars`)
    } catch (err) {
      console.log(`error: ${err.message}`)
      result[String(i)] = ''
    }
  }

  await worker.terminate()

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2), 'utf8')
  console.log(`\nWrote ${OUTPUT_FILE}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
