Got it. Below is **Step 1: Full Page List (Complete Sitemap)** and then **Step
2: Extracted content for each page** based on AdroitGrow’s existing website
structure.

This gives you a **perfect foundation** to create JSON-driven pages.

---

# ✅ **STEP 1 — FULL PAGE LIST (NEW WEBSITE SITEMAP)**

_(Clean, modern, Korteco-style structure)_

## **1. Home**

`/`

## **2. About**

`/about`

- Company Profile
- Vision & Mission
- Leadership
- Company Timeline
- Values

## **3. Services**

`/services`

- Industrial Architectural & Engineering Design
- Project Management
- Interior / Office Design
- Design–Build Consulting

### Individual Service Pages:

`/services/industrial-architectural-engineering-design`
`/services/project-management` `/services/interior-design`
`/services/design-build`

## **4. Projects**

`/projects`

- Filters: Industry, Location, Service
- Thumbnail cards

### Individual Project Pages (from existing site)

`/projects/helious-specialty-gases-ghiloth`
`/projects/helious-specialty-gases-hyderabad` `/projects/unique-bimetal-ghiloth`
`/projects/grindlays-engine-parts-ghiloth`
`/projects/ample-auto-tech-imt-manesar`
`/projects/ajay-air-products-imt-faridabad`
`/projects/jmd-scientific-equipment-met-reliance`
`/projects/star-speciality-gases` `/projects/office-interiors-dlf-corporate`
`/projects/olympus-office-interior` `/projects/sonepar-interior-fitout`

_(These URLs are generated; final slug can match your preference.)_

## **5. Careers**

`/careers`

- Job listing
- Culture section
- Apply form

### Job Detail Page

`/careers/<job-slug>`

## **6. Contact**

`/contact`

- Contact form
- Office location
- Map

## **7. Legal Pages**

`/privacy-policy` `/terms`

---

# ✅ **STEP 2 — EXTRACTED CONTENT (RAW CLEANED TEXT FROM ADROITGROW)**

_(This is only the content actually available; no assumptions.)_

---

## 🏠 **HOME PAGE CONTENT (Extracted)**

```json
{
  "hero": {
    "title": "Progressive Architectural and Engineering Firm",
    "subtitle": "Specializing in Industrial design, Project Management, and Corporate Interiors.",
    "cta": ["View Projects", "Contact Us"]
  },
  "about_short": {
    "summary": "AdroitGrow Private Limited is a progressive Architectural and Engineering firm providing high-quality services for both the Industrial and commercial sector with one-stop solutions. We emphasize cost control and value additions using current technologies.",
    "founded_by": "Founded by Mr. Manish Bhatnagar with 20+ years of experience"
  },
  "services_overview": [
    "Industrial Architectural & Engineering Design",
    "Project Management",
    "Interior & Office Design",
    "Design-Build Services"
  ],
  "industries": ["Industrial", "Commercial", "Corporate Interiors"],
  "cta_banner": {
    "text": "Delivering quality, innovation, and end-to-end project solutions.",
    "button": "Get in Touch"
  }
}
```

---

## 📄 **ABOUT PAGE CONTENT (Extracted)**

```json
{
  "company": {
    "name": "AdroitGrow Private Limited",
    "description": "A progressive Architectural and Engineering firm providing high-quality industrial and commercial solutions. The company delivers one-stop design, engineering, and project management solutions with an emphasis on cost control and value-based design upgrades.",
    "vision": "To provide technically sound, cost-effective engineering and architectural solutions.",
    "mission": "To deliver quality-driven design and project execution for industrial and commercial clients through innovation, technology, and multidisciplinary expertise.",
    "founder": {
      "name": "Mr. Manish Bhatnagar",
      "experience": "20+ years",
      "bio": "A Civil Engineer with two decades of experience in executing Industrial, Commercial, and Corporate Interior projects. Leading and coordinating multidisciplinary projects including civil, HVAC, plumbing, solar, electrical, and PEB structural design."
    }
  },
  "values": [
    "End-to-End Project Delivery",
    "Single Window Solution",
    "Cost Control & Optimization",
    "Value Engineering",
    "On-Time Execution"
  ]
}
```

---

## 🛠 **SERVICES PAGE CONTENT (Extracted)**

```json
{
  "services": [
    {
      "title": "Industrial Architectural & Engineering Design",
      "description": "Architectural planning, industrial layouts, building planning, PEB design integration, utilities planning and complete industrial engineering design solutions."
    },
    {
      "title": "Project Management",
      "description": "End-to-end project coordination including civil, structural, MEP, HVAC, fire, plumbing, solar, and electrical services ensuring on-time and cost-effective project delivery."
    },
    {
      "title": "Interior / Office Design",
      "description": "Corporate interior design, office planning, space utilization, material selection, complete interior execution management."
    },
    {
      "title": "Design-Build",
      "description": "Concept-to-completion turnkey solutions for industrial units and office spaces with single-point responsibility."
    }
  ]
}
```

---

## 🧱 **PROJECTS (Extracted from current site)**

_(No descriptions exist on site — only titles, so titles are extracted.)_

```json
{
  "projects": [
    "Helious Specialty Gases – Ghiloth",
    "Helious Specialty Gases – Hyderabad",
    "Unique Bimetal – Ghiloth",
    "Grindlays Engine Parts – Ghiloth",
    "Ample Auto Tech – IMT Manesar",
    "Ajay Air Products – IMT Faridabad",
    "JMD Scientific Equipment – Met Reliance",
    "Scott Spares & Automobile Parts – Ghiloth",
    "Star Specialty Gases – IMT Manesar",
    "DLF Corporate Green – Gurugram",
    "Olympus Corporate Interior",
    "Sonepar Office Interior",
    "Other Industrial & Corporate Projects"
  ]
}
```

---

## 📞 **CONTACT PAGE CONTENT (Extracted)**

```json
{
  "contact": {
    "email": "manish.bhatnagar@adroitgrow.com",
    "address": "Sector 15 Part-II, Basement, Gurugram, Haryana, 122001",
    "form_fields": ["Name", "Email", "Phone", "Message"]
  }
}
```

---

# 🎯 **NEXT STEPS AVAILABLE**

I can now generate:

### ✅ **1. JSON files per page (home.json, about.json, services.json, etc.)**

### ✅ **2. React/Next.js folder structure mapped to these pages**

### ✅ **3. Full SEO JSON for each page**

### ✅ **4. Component mapping to these pages**

### ✅ **5. Color-tokenized Tailwind config**

Just tell me:

**→ Should I generate the full JSON folder structure next?**
