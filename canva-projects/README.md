# Canva projects export

This folder stores exported Canva design data and images, **project-wise**.

## How images are stored

### What we can do (current)

- **One image per page/slide**  
  Each slide is exported as a **single PNG** (full slide). So for a 55-page
  design you get 55 files: `page-001.png` … `page-055.png`.  
  If a slide has multiple photos/graphics, they are all in that one PNG
  (composite image of the whole slide).

- **Project-wise layout**
  - `projects.json` – list of all projects with metadata and text content.
  - `/<project-slug>/` – one folder per project (e.g.
    `Sahil-new-company-profile/`).
  - `/<project-slug>/project.json` – that project’s metadata, pages, and paths
    to slides/text.
  - `/<project-slug>/slides/` – one PNG per page: `page-001.png`,
    `page-002.png`, …
  - `/<project-slug>/text/` – extracted text: `full-design-text.txt` (API),
    `slide-001.txt` … `slide-055.txt` (OCR), `complete-extracted-text.txt` (all
    OCR in one file).

### What we can’t do (API limit)

- **Multiple images per slide**  
  The **Canva Connect API** (used by the Canva MCP) does **not** expose:
  - elements/layers inside a page, or
  - separate image/asset URLs per slide.

  So we **cannot** download “each image in this slide” as separate files. We
  only get:
  - full-page export (one PNG per slide), or
  - full-document export (e.g. one PDF).

- **Element-level access**  
  The Design Editing API (Canva Apps SDK) can read elements per page, but it
  runs **inside** the Canva editor, not via the Connect/MCP integration. So with
  the current MCP setup we cannot list or download individual images within a
  slide.

## Ungrouping slides and getting individual elements

**Can we ungroup slides and then export individual elements?**

- **Ungroup** and **per-element access** (images, shapes, text) exist in Canva,
  but only in the **Canva Apps SDK** (Design Editing API). That runs as an app
  **inside** the Canva editor (e.g. “Group/ungroup”, “session.page” with
  elements).
- The **Canva Connect API** (what the MCP uses) does **not** expose:
  - `start-editing-transaction` (referenced in some docs but not in this MCP),
  - ungroup / group,
  - or a list of elements per page.

So with the current **Cursor + Canva MCP** setup we **cannot** “first ungroup
the slides and then try individual elements.” To do that you’d need a **Canva
App** (Apps SDK) that runs inside Canva, opens the design, and uses the Design
Editing API to ungroup and read/export elements—that’s a different integration
(in-editor app), not the Connect/MCP integration.

## If you need “one file per image on a slide”

Options:

1. **Use full-page PNGs**  
   Keep one image per slide (current approach). You can later crop or split that
   image with your own tooling if needed.

2. **Build a Canva App (Apps SDK)**  
   For ungroup + individual elements: build an app that runs inside the Canva
   editor, uses the Design Editing API to ungroup and read elements, then export
   or send element data/assets to your backend. This is separate from the
   Connect/MCP flow.

3. **Ask Canva for more API**  
   Request a Connect API that returns “elements (or assets) per page” with
   download URLs; then we could add a different download flow (e.g.
   `/<project>/pages/<page>/elements/`).

4. **Manual export**  
   In Canva, export individual assets from the Uploads tab or download specific
   elements manually.

## Extracting text from slide images (OCR)

After you have full-page PNGs in a project's `slides/` folder, you can run
**OCR** to get text per slide:

- **Script:** `canva-projects/extract-text-from-slides.js` (run from repo root:
  `node canva-projects/extract-text-from-slides.js`)
- **Uses:** [Tesseract.js](https://www.npmjs.com/package/tesseract.js) (English)
- **Output:** `extracted-text.json` in the project folder; then use **organize**
  to save text into `text/` (see below). Page 19 is empty if that image was
  missing/corrupt.
- **Note:** OCR can misread fonts or layout; you also have full design text from
  the API in `text/full-design-text.txt`.

**Cleaning OCR text for readability:** Run
`node canva-projects/clean-slide-text.js` (from repo root). It reads
`extracted-text.json`, strips symbol noise and garbage lines, fixes common typos
(e.g. approva→approval, ARCHITECTURIAL→ARCHITECTURAL), and overwrites
`text/slide-001.txt` … `text/slide-055.txt` and rebuilds
`text/complete-extracted-text.txt`.

## Organizing slides and text into folders

To move slide images into `slides/`, save all text into `text/`, and update
paths:

- **Script:** `canva-projects/organize-slides-and-text.js` (run from repo root:
  `node canva-projects/organize-slides-and-text.js`)
- **Requires:** Project folder with `images/` (or `slides/`), `project.json`,
  and `extracted-text.json`.
- **Result:**
  - `slides/` – all page PNGs (`page-001.png` … `page-055.png`).
  - `text/full-design-text.txt` – complete design text from the Canva API.
  - `text/slide-001.txt` … `text/slide-055.txt` – OCR text per slide.
  - `text/complete-extracted-text.txt` – all OCR text in one file (with
    `--- Slide N ---` separators).
  - `project.json` and `projects.json` updated with `image_file` → `slides/…`,
    `text_file` → `text/slide-XXX.txt`.

## Summary

| What                      | Supported? | How                                                                                 |
| ------------------------- | ---------- | ----------------------------------------------------------------------------------- |
| One image per slide       | Yes        | Export design as PNG with `pages: [1], [2], …` and save as `slides/page-NNN.png`.   |
| Multiple images per slide | No         | Connect API doesn’t expose per-page elements or per-element URLs.                   |
| Text content              | Yes        | `get-design-content` (richtexts) stored in `project.json` / `projects.json`.        |
| Project metadata + pages  | Yes        | `get-design`, `get-design-pages` in `projects.json` and per-project `project.json`. |

Current structure is **project-wise**: **slides** in `slides/`, **text** (API +
OCR) in `text/`, and **one exported image per page**; multiple images inside a
single slide are not downloadable separately via this integration.

## Finalized projects (Site Pictures + Canva text)

A single folder per **site project** with **max 3 images** and matched Canva
text:

- **Source:** `public/Site Pictures/` — one folder per project (see
  `PROJECT-FOLDERS-ANALYSIS.md` for the full list).
- **Build:** From repo root run
  `node canva-projects/build-finalized-projects.js`.
- **Output:** `canva-projects/finalized-projects/<slug>/` with:
  - `images/1.jpg`, `2.jpg`, `3.jpg` (up to 3 images copied from Site Pictures),
  - `text.txt` (extracted Canva slide text for that project, when a slide match
    exists).
- **Index:** `finalized-projects/index.json` lists all projects with `slug`,
  `name`, `imageCount`, `hasText`, `slide`.

## Using finalized projects in the frontend

The app reads projects from `src/content/projects.json`. To regenerate that file
from finalized projects (and copy images into `public/images/projects/`):

- **Generate FE data:** `node canva-projects/generate-fe-projects.js` (from repo
  root).
- **Backup:** The previous projects list is kept as
  `src/content/projects.backup.json`. To revert, copy it over `projects.json`.
