Below is a **ready-to-use full prompt + a complete `TODO.md` file** that you can
use to build the entire website. Everything is **component-based**,
**SEO-mapped**, **JSON/Content-driven**, and uses **your provided color
system**.

You can copy–paste this file directly into your repo as `TODO.md`.

---

# ✅ **FULL WEBSITE TODO.md — Components + SEO + JSON-Driven Architecture + Color System**

````md
# 🚧 FULL WEBSITE TODO – COMPONENT & SEO CHECKLIST

Modern Construction / Industrial Architecture Website  
All components must be **JSON-driven** and **configurable via constants**.

---

# 🎨 GLOBAL DESIGN TOKENS (Use as CSS Variables)

```css
:root {
  --tkc-bg: #fd0;
  --tkc-bg-overlay: rgba(17, 20, 23, 0.63);
  --tkc-bg-mobile: rgba(17, 20, 23, 0.85);
  --tkc-bg-dark: #0b1020;

  --tkc-text: #fff;
  --tkc-text-yellow: #fd0;
  --tkc-text-muted: #4b5563;

  --tkc-border: #e5e7eb;

  --tkc-max-w: 1408px;
  --tkc-gap-lg: 48px;
  --tkc-gap-md: 24px;
  --tkc-gap-sm: 16px;

  --tkc-header-offset: 88px;
}
```
````

All UI components must consume these variables.

---

# 📁 **1. PROJECT STRUCTURE (JSON / CONTENT-DRIVEN)**

```
/content
  /home.json
  /about.json
  /services/*.json
  /projects/*.json
  /seo/*.json
  /team.json
  /contact.json

/constants
  colors.js
  layout.js
  metadata.js
```

---

# 🟦 2. GLOBAL COMPONENTS (Mandatory)

## [ ] Header

- JSON-driven menu
- Sticky header
- Mobile overlay using `--tkc-bg-mobile`

## [ ] Footer

- Company info
- Dynamic menus
- Socials
- Copyright text from JSON

## [ ] Breadcrumbs

- Auto generated via pathname structure

## [ ] Global CTA Button

- Large / Medium / Small variants
- Accepts “theme=yellow/dark/light”

## [ ] Section Wrapper

- max-width: var(--tkc-max-w)
- gap: var(--tkc-gap-lg)

## [ ] SEO Head Component

Reads from `/seo/page.json`

- title
- description
- keywords
- og:image
- schema
- canonical

---

# 🟧 3. HOMEPAGE COMPONENTS

## [ ] Hero Banner

Data from home.json

- title
- subtitle
- backgroundImage
- ctaButtons[] Supports video or image Overlay uses: `--tkc-bg-overlay`

## [ ] Client Logo Strip

JSON array of logos

## [ ] Service Overview Grid

- 3×2 or 4×grid
- Icon + title + link
- JSON: services.json

## [ ] Featured Projects Carousel

- card: image + title + category
- JSON: projects.json

## [ ] Why Choose Us ("Capabilities")

- Icon cards
- JSON-driven

## [ ] Process Steps

- Step number
- Title
- Description
- Optional illustration

## [ ] Testimonials slider

- name
- company
- testimonial
- image

## [ ] Stats Section

- projects_completed
- years_experience
- clients_served
- states_covered

## [ ] CTA → Contact

- title
- button
- background pattern

---

# 🟩 4. ABOUT PAGE COMPONENTS

## [ ] Company Introduction

- title
- description
- highlight points

## [ ] Mission, Vision, Values

JSON arrays

## [ ] Leadership Grid

- name
- designation
- bio
- profileImage

## [ ] Company Timeline

- year
- highlight
- milestone

## [ ] Our Philosophy

- bullet list
- supporting image

---

# 🟪 5. SERVICES (Dynamic Templates)

Each service = `/services/<slug>.json`

## Template Components:

## [ ] Service Hero

## [ ] Overview

## [ ] Detailed capabilities list

## [ ] Architecture / Engineering diagrams section

## [ ] Process steps

## [ ] FAQs

## [ ] Related projects

---

# 🟫 6. PROJECTS SECTION

## [ ] Project Listing Page

- filters:
  - by industry
  - by service
  - by location

## [ ] Project Card

- image
- title
- location
- category

## [ ] Project Detail Page

### Components:

- Hero
- Problem Statement
- Scope of Work
- Project Stats (timeline, size, cost if allowed)
- Image Gallery
- Before/After slider (optional)
- Related Projects

---

# 🟨 7. CONTACT PAGE

## [ ] Contact Form

- name
- phone
- email
- message
- enquiry type Submit via API

## [ ] Google Map Embed

## [ ] Office Locations

## [ ] Quick Contact Cards

---

# 🟫 8. CAREERS PAGE

## [ ] Job Grid

## [ ] Job Detail Template

## [ ] Apply Form

## [ ] Culture Section (gallery + content)

---

# 🔵 9. REUSABLE UTILITY COMPONENTS

## [ ] Accordion

## [ ] Tabs

## [ ] Modal / Lightbox

## [ ] Image Gallery

## [ ] Testimonials Carousel

## [ ] IconCard component

## [ ] Stepper row

## [ ] SectionTitle component

## [ ] LinkButton / PrimaryButton / SecondaryButton

---

# 🟥 10. FULL SEO CHECKLIST (Per Page)

SEO JSON example:

```json
{
  "title": "Industrial Architecture & Design | Adroit Grow",
  "description": "Turnkey industrial architecture and engineering firm delivering...",
  "keywords": ["industrial project", "factory planning", "PEB structures"],
  "canonical": "https://domain.com/services/industrial",
  "schema": {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Industrial Architectural Design"
  }
}
```

## Mandatory:

- [ ] Title (60 chars)
- [ ] Meta Description (155 chars)
- [ ] Keywords
- [ ] Canonical
- [ ] OG tags
- [ ] JSON-LD Schema
- [ ] H1 → H2 hierarchy
- [ ] ALT text on all images
- [ ] URL slugs (SEO optimized)
- [ ] Internal linking

---

# 🟩 11. TECHNICAL SEO

## [ ] Sitemap.xml

## [ ] Robots.txt

## [ ] Image optimization (WebP/AVIF)

## [ ] Lazy loading

## [ ] Optimize JS & CSS

## [ ] Lighthouse score > 90

## [ ] Mobile-friendly layout

## [ ] Page speed < 2.5s

---

# 🟦 12. CLIENT INFORMATION REQUIRED

## Company Information

- [ ] Updated company profile
- [ ] Leadership bios
- [ ] High-quality images

## Services

- [ ] Detailed scope
- [ ] Engineering capabilities
- [ ] Tools & methodologies

## Projects

For each:

- [ ] Title
- [ ] Location
- [ ] Year
- [ ] Images (high quality)
- [ ] Scope
- [ ] Challenges
- [ ] Deliverables
- [ ] Testimonial (optional)

## Contact

- [ ] Emails
- [ ] Phone numbers
- [ ] Office addresses

## SEO

- [ ] Target locations
- [ ] Competitors
- [ ] Priority keywords
- [ ] Brand guidelines

---

# 🎯 FINAL NOTES

- Every section **must** be content-driven (JSON only).
- All UI controlled via **design tokens** above.
- Each component should be reusable, dependency-free, and SEO friendly.

```

---

# ✅ Ready for Next Step
I can generate **all JSON structures**, **React component architecture**, or a **full Figma wireframe** next.

Just tell me:

### → Do you want **JSON templates** for all pages?
### → Or **React/Next.js folder structure**?
### → Or a **Figma-ready layout plan**?
```

Great — I’ve **compiled extracted content from both websites** (AdroitGrow & The
Korte Company) into **structured JSON** and also included a **recommended tech
stack** for your project.

Some content (like project details) isn’t fully accessible via crawling — I’ve
extracted what _is visible from search crawls and site structure_. If you want
full copy (page by page), I can continue fetching individual pages too.

---

## ✅ **1. Technology Stack (Recommended)**

Your website should use a **modern, JSON-driven, SEO-optimized fullstack**,
e.g.:

### 💻 **Frontend**

```json
{
  "framework": "React",
  "kit": "Next.js (app/router)",
  "styling": {
    "css_in_js": "TailwindCSS (configured with your design tokens)",
    "animation": "Framer Motion (optional)"
  },
  "state": "React Context or Zustand",
  "images": "next/image",
  "i18n": "optional if multiple locales",
  "lint": "ESLint + Prettier"
}
```

### 📦 **Backend**

```json
{
  "API": "Next.js API routes",
  "DB (optional)": "Sanity / Strapi / Contentful / Supabase",
  "auth": "None unless needed (signup/careers)",
  "forms": "FormSubmission API (e.g. Netlify / Custom API + SMTP)"
}
```

### 📊 **SEO & Analytics**

```json
{
  "seo": "next-seo or built-in Head in Next.js",
  "schema": "JSON-LD",
  "analytics": "Google Analytics + GTM",
  "sitemap": "auto-generated",
  "robots": "robots.txt"
}
```

### 🧰 **DevOps**

```json
{
  "hosting": "Vercel / Netlify / Cloudflare Pages",
  "cdn": "CDN built-in (Vercel/Netlify)",
  "image_opt": "next/image + WebP/AVIF",
  "perf": "Lighthouse target: >90"
}
```

---

## ✅ **2. Extracted Content JSON**

Below are the JSON structures representing site content that _can be extracted
from both sites_.

---

### 📘 **A. AdroitGrow (Basic Extracted)**

```json
{
  "company": {
    "name": "Adroit Grow Private Limited",
    "founder": "Mr. Manish Bhatnagar",
    "description": "Progressive Architectural and Engineering firm specializing in Industrial project, Project Management & Corporate Interiors providing high-quality services for both the Industrial and commercial sectors. Single window one-stop solution with emphasis on cost control & value additions using current technologies.",
    "founded": "2019",
    "location": "Gurugram, Haryana, India",
    "email": "manish.bhatnagar@adroitgrow.com",
    "website": "https://www.adroitgrow.com",
    "industry": "Architecture and Planning",
    "experience_years": 25,
    "services_highlights": [
      "Industrial Architectural & Engineering Design",
      "Project Management",
      "Office & Interior Design",
      "Design-Build Solutions"
    ]
  },
  "services": [
    {
      "title": "Industrial, Architectural & Engineering Design"
    },
    {
      "title": "Project Management"
    },
    {
      "title": "Interior / Office Design"
    },
    {
      "title": "Design-Build"
    }
  ],
  "projects": [
    {
      "title": "Helious Specialty Gases – Ghiloth"
    },
    {
      "title": "Unique Bimetal – Ghiloth"
    },
    {
      "title": "Grindlays Engine Parts – Ghiloth"
    },
    {
      "title": "Ample Auto Tech – IMT Manesar"
    },
    {
      "title": "Ajay Air Products – IMT Faridabad"
    },
    {
      "title": "JMD Scientific Equipment – Met Reliance"
    }
  ],
  "contact": {
    "email": "manish.bhatnagar@adroitgrow.com",
    "phone": "Not publicly listed (visible)",
    "locations": ["Gurugram, Haryana, India"]
  }
}
```

_(Data based on search and site structure; more can be pulled if needed.)_
([adroitgrow.com][1])

---

### 📗 **B. The Korte Company (Korteco)**

```json
{
  "company": {
    "name": "The Korte Company",
    "slogan": "The Job is the Boss®",
    "tagline": "Build Smart®",
    "description": "Design-Build construction company providing design, construction management, general contracting, architectural and interior design, emergency services, assessments, surveying.",
    "founded": "1958",
    "headquarters": [
      {
        "city": "St. Louis, Missouri, USA",
        "address": "5700 Oakland Avenue, Suite 275, St. Louis, MO 63110",
        "phone": "314-231-3700"
      },
      {
        "city": "Highland, IL, USA",
        "address": "12441 US Highway 40, PO Box 146, Highland, IL 62249",
        "phone": "618-654-8611"
      },
      {
        "city": "Las Vegas, NV, USA",
        "address": "9225 W. Flamingo Road, Suite 100, Las Vegas, NV 89147",
        "phone": "702-228-9551"
      }
    ],
    "total_projects": "4000+ across the US"
  },
  "services": [
    "Architectural Design",
    "Assessments",
    "Construction Management",
    "Design-Build",
    "Emergency Services",
    "General Contracting",
    "Interior Design",
    "Small Construction",
    "Surveying"
  ],
  "markets": [
    "Centers of Worship",
    "Distribution Centers",
    "Education",
    "Entertainment",
    "Financial",
    "Food & Beverage",
    "Hangars",
    "Healthcare",
    "Housing",
    "Industrial",
    "Military",
    "Municipal/Government",
    "Office",
    "Recreation",
    "Renovations & Additions",
    "Retail",
    "Senior Living"
  ],
  "unique_points": [
    "90% work is design-build",
    "Single-source responsibility",
    "4,000+ projects",
    "Built on passion and integrity"
  ]
}
```

_(Structured from menu + content visible on homepage and service listing.)_
([The Korte Company -][2])

---

## ✅ **3. Combined JSON (Recommended CMS Input)**

Here’s a **unified content model** you can directly import into your CMS or
content JSON files:

```json
{
  "siteConfig": {
    "name": "AdroitGrow by [YourBrand]",
    "themeColors": {
      "bg": "#fd0",
      "text": "#fff",
      "textMuted": "#4b5563",
      "bgDark": "#0b1020",
      "bgOverlay": "rgba(17,20,23,0.63)",
      "bgMobile": "rgba(17,20,23,0.85)"
    },
    "logo": "/images/logo.png",
    "favicon": "/favicon.ico"
  },
  "seoDefaults": {
    "titleTemplate": "%s | Industrial Architecture & Design",
    "openGraph": {
      "siteName": "AdroitGrow",
      "locale": "en_US",
      "type": "website"
    }
  },
  "navbar": {
    "links": [
      { "label": "Home", "href": "/" },
      { "label": "About", "href": "/about" },
      { "label": "Services", "href": "/services" },
      { "label": "Projects", "href": "/projects" },
      { "label": "Contact", "href": "/contact" }
    ]
  },
  "footer": {
    "company": "Adroit Grow Private Limited",
    "links": ["About", "Services", "Projects", "Contact"],
    "contact": {
      "email": "manish.bhatnagar@adroitgrow.com"
    }
  },
  "home": {
    "hero": {
      "title": "Industrial & Architectural Design Experts",
      "subtitle": "Engineering solutions from concept to execution",
      "cta": [
        { "label": "Our Projects", "href": "/projects" },
        { "label": "Contact Us", "href": "/contact" }
      ]
    },
    "services": [
      {
        "title": "Industrial & Engineering Design",
        "href": "/services/industrial-architectural-engineering-design"
      },
      { "title": "Project Management", "href": "/services/project-management" },
      {
        "title": "Interior & Office Design",
        "href": "/services/interior-design"
      }
    ],
    "projects": [{ "title": "Sample Project", "image": "/images/sample.jpg" }]
  },
  "projects": [
    {
      "title": "Helious Specialty Gases – Ghiloth",
      "slug": "helious-specialty-gases-ghiloth",
      "location": "Ghiloth",
      "description": "Industrial architectural design project."
    }
  ]
}
```

---

## 📌 Notes

### ❗ **Why Some Content Is Basic**

The current sites don’t expose full structured text via crawling — especially
individual project pages. To fill out richer JSON (like full project
descriptions and images), I can crawl more pages if you want.

### 📌 **Next Steps**

If you want, I can produce:

✅ Full **JSON templates for About / Services** ✅ **Detailed SEO JSON** per
page ✅ **React page templates** based on this JSON ✅ **CMS import scripts**
(Strapi/Sanity)

Just tell me what format you want next!

[1]: https://www.adroitgrow.com/?utm_source=chatgpt.com 'Adroit Grow'
[2]:
  https://www.korteco.com/?utm_source=chatgpt.com
  'The Korte Company: Green Design-Build Construction'
