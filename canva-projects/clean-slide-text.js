/**
 * Clean OCR output for readability: remove noise lines, strip trailing junk, fix common typos.
 * Run from repo root: node canva-projects/clean-slide-text.js
 */
const fs = require('fs')
const path = require('path')

const PROJECT_DIR = path.join(__dirname, 'Sahil-new-company-profile')
const TEXT_DIR = path.join(PROJECT_DIR, 'text')

// Strip from end of line: trailing symbols and " single_letter" repeated
function stripTrailingNoise(s) {
  let t = s
  const trailRe = /[\s=\|~—\\\/\[\]\-\<\>\.\,;:'"]+([a-zA-Z][\s=\|~—\\\/\[\]\-]*)?$/
  for (let i = 0; i < 8; i++) {
    const prev = t
    t = t.replace(/\s+[=\|~—\\\/\[\]\-\<\>\.\,\;\:\'\"]+$/, '')
    t = t.replace(/\s+[a-zA-Z]\s*[=\|~—\\\/\[\]\s\-\.]*$/, '')
    t = t.replace(/\s+\\\s*$/, '') // trailing backslash
    t = t.replace(/\s+[a-zA-Z]\s+[a-zA-Z]\s*=\s*[a-zA-Z]*\s*$/, '') // " = pl", " s 2 = Es el"
    t = t.replace(trailRe, '')
    if (t === prev) break
  }
  return t.trim()
}

// Strip from start of line
function stripLeadingNoise(s) {
  return s.replace(/^[=\|~—\\\/\[\]\-\<\>\s\.\,\;\:\'\"]+/, '').trim()
}

// Whether line looks like content (has at least one real word or known pattern)
function isContentLine(line) {
  if (!line || line.length < 2) return false
  if (/^[\s=\|~—\\\/\[\]\-\<\>\.\,\;\:\'\"\d]+$/.test(line)) return false
  // Real word 4+ letters (avoids keeping "At", "or", "il", "Er" garbage lines)
  if (/\b[A-Za-z]{4,}\b/.test(line)) return true
  if (/\b(PEB|RCC|PMC|IMT|NCR|HVAC|VR|3D)\b/i.test(line)) return true
  if (/\b(sqm|sqmtr|Acre|Cr|Year|Phase|Plot|Area|Scope|Work|Location)\b/i.test(line)) return true
  if (/\d+\s*(Acre|sqm|sqmtr|Phase)/i.test(line)) return true
  return false
}

const WORD_FIXES = {
  planningng: 'planning',
  approvalls: 'approval',
  planni: 'planning',
  approva: 'approval',
  eration: 'operation',
  fety: 'safety',
  ARCHITECTURIAL: 'ARCHITECTURAL',
  Liasioning: 'Liaisoning',
  Develooment: 'Development',
  sgqmtr: 'sqmtr',
  sqqmtr: 'sqmtr',
  'As buil ': 'As built ',
  'awi operation': 'operation',
  'eri ation': 'operation',
  BENE: '',
  'BTS 3m: SER': '',
  berm: '',
  'STEER yy Eh': '',
  Frsmenomet: 'Furniture', // slide 41 TUSKER TECH AUTO
}

function applyWordFixes(line) {
  let out = line
  for (const [from, to] of Object.entries(WORD_FIXES)) {
    const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
    out = out.replace(re, to)
  }
  return out.replace(/\s+/g, ' ').trim()
}

// Remove trailing junk that looks like ", a a ~ == Ix" or " er —— a" or " SN = 9"
function stripTrailingClauseJunk(s) {
  return s
    .replace(/,?\s+[a-zA-Z]\s+[a-zA-Z]\s*[=\|~—\s]+[a-zA-Z]*\s*$/, '')
    .replace(/\s+[a-zA-Z]\s+[=\|~—]+[\s a-zA-Z]*$/, '')
    .replace(/\s+[a-z]\s*[=\|~—]\s*["']?\s*$/, '')
    .replace(/\s+[A-Z]{2}\s*=\s*\d+\s*$/, '') // " SN = 9"
    .replace(/\s+i\s+By\s*$/, '')
    .replace(/\s+\|\s*a\s+NS\s*$/, '')
    .replace(/\s+\|\s*TRS\s*$/, '')
    .trim()
}

function cleanLine(line) {
  let s = line.trim()
  s = stripLeadingNoise(s)
  s = stripTrailingNoise(s)
  s = stripTrailingClauseJunk(s)
  s = s.replace(/\s+/g, ' ')
  s = applyWordFixes(s)
  return s
}

function cleanText(content) {
  const lines = content.split(/\r?\n/)
  const out = []
  let prevBlank = false
  for (const raw of lines) {
    const line = cleanLine(raw)
    if (!line) {
      if (!prevBlank) out.push('')
      prevBlank = true
      continue
    }
    if (!isContentLine(line)) continue // skip garbage lines
    prevBlank = false
    out.push(line)
  }
  // Trim trailing blanks
  while (out.length && out[out.length - 1] === '') out.pop()
  return out.join('\n').trimEnd()
}

function main() {
  const extractedPath = path.join(PROJECT_DIR, 'extracted-text.json')
  const fromJson = fs.existsSync(extractedPath)
  const extracted = {}

  if (fromJson) {
    const data = JSON.parse(fs.readFileSync(extractedPath, 'utf8'))
    for (let i = 1; i <= 55; i++) {
      const raw = data[String(i)] || ''
      extracted[i] = cleanText(raw)
    }
    for (let i = 1; i <= 55; i++) {
      const num = String(i).padStart(3, '0')
      const filePath = path.join(TEXT_DIR, `slide-${num}.txt`)
      fs.writeFileSync(filePath, extracted[i] ? extracted[i] + '\n' : '', 'utf8')
      console.log('Cleaned slide-' + num + '.txt (from OCR)')
    }
  } else {
    const slideFiles = fs.readdirSync(TEXT_DIR).filter((f) => /^slide-\d{3}\.txt$/.test(f))
    slideFiles.sort()
    for (const f of slideFiles) {
      const filePath = path.join(TEXT_DIR, f)
      const content = fs.readFileSync(filePath, 'utf8')
      const cleaned = cleanText(content)
      fs.writeFileSync(filePath, cleaned ? cleaned + '\n' : '', 'utf8')
      console.log('Cleaned', f)
    }
    for (let i = 1; i <= 55; i++) {
      const num = String(i).padStart(3, '0')
      const filePath = path.join(TEXT_DIR, `slide-${num}.txt`)
      extracted[i] = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8').trim() : ''
    }
  }

  const lines = []
  for (let i = 1; i <= 55; i++) {
    lines.push('--- Slide ' + i + ' ---')
    lines.push(extracted[i] || '')
    lines.push('')
  }
  fs.writeFileSync(
    path.join(TEXT_DIR, 'complete-extracted-text.txt'),
    lines.join('\n').trimEnd() + '\n',
    'utf8'
  )
  console.log('Updated complete-extracted-text.txt')
  console.log('Done.')
}

main()
