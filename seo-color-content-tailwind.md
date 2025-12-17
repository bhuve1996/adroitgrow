Perfect — here is **everything you asked for**:

# ✅ **1. Full SEO JSON (For Every Page)**

# ✅ **2. Component Mapping for All Pages**

# ✅ **3. Tailwind Color Tokens (Configured from Your Design System)**

This is production-ready and can be copied directly into your project.

---

# ----------------------------------------------------

# 🎯 **1. FULL SEO JSON FOR ENTIRE WEBSITE**

# ----------------------------------------------------

Below is the complete `/seo` folder structure with JSON files.

## 📁 `/seo/home.json`

```json
{
  "title": "Industrial Architecture, Engineering & Project Management | AdroitGrow",
  "description": "AdroitGrow is a leading industrial architectural and engineering firm providing turnkey design, project management and corporate interiors with 20+ years expertise.",
  "keywords": [
    "industrial architecture",
    "engineering design",
    "project management",
    "factory layout design",
    "corporate interiors",
    "industrial construction"
  ],
  "canonical": "https://www.adroitgrow.com/",
  "schema": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AdroitGrow Private Limited",
    "url": "https://www.adroitgrow.com/",
    "description": "Industrial architectural and engineering design firm specializing in turnkey project solutions.",
    "founder": "Manish Bhatnagar",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 15 Part-II, Basement",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    }
  }
}
```

---

## 📁 `/seo/about.json`

```json
{
  "title": "About Us | AdroitGrow – Industrial Architecture & Engineering Firm",
  "description": "AdroitGrow is a progressive engineering and architectural firm led by industry veteran Manish Bhatnagar with 20+ years of industrial project expertise.",
  "keywords": [
    "about AdroitGrow",
    "industrial engineering company",
    "architecture firm",
    "project management experts"
  ],
  "canonical": "https://www.adroitgrow.com/about",
  "schema": {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About AdroitGrow",
    "publisher": {
      "@type": "Organization",
      "name": "AdroitGrow Private Limited"
    }
  }
}
```

---

## 📁 `/seo/services.json`

```json
{
  "title": "Services | Industrial Design, Engineering & Project Management",
  "description": "Explore AdroitGrow’s industrial architectural design, engineering services, project management and corporate interior solutions.",
  "keywords": [
    "industrial services",
    "engineering services",
    "project management",
    "interior design"
  ],
  "canonical": "https://www.adroitgrow.com/services",
  "schema": {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Industrial Architectural & Engineering Services"
  }
}
```

---

### 📁 **Individual Service SEO JSON**

These go under: `/seo/services/<slug>.json`

#### Industrial Architecture & Engineering

```json
{
  "title": "Industrial Architectural & Engineering Design Services | AdroitGrow",
  "description": "Specialized industrial engineering, factory layouts, PEB integration, utility planning and architectural design services.",
  "keywords": [
    "industrial engineering design",
    "factory design",
    "PEB building design",
    "industrial planning"
  ],
  "canonical": "https://www.adroitgrow.com/services/industrial-architectural-engineering-design"
}
```

#### Project Management

```json
{
  "title": "Construction & Industrial Project Management | AdroitGrow",
  "description": "Multidisciplinary coordination across civil, structural, HVAC, electrical, plumbing and safety for industrial projects.",
  "keywords": [
    "industrial project management",
    "construction management",
    "MEP coordination"
  ],
  "canonical": "https://www.adroitgrow.com/services/project-management"
}
```

#### Interior Design

```json
{
  "title": "Corporate Interior Design & Fitout Services | AdroitGrow",
  "description": "Office interiors, space planning, material selection and end-to-end execution.",
  "keywords": ["corporate interiors", "office design", "workspace planning"],
  "canonical": "https://www.adroitgrow.com/services/interior-design"
}
```

#### Design-Build

```json
{
  "title": "Turnkey Design-Build Solutions for Industries | AdroitGrow",
  "description": "Single-window responsibility from concept, engineering, procurement, construction to handover.",
  "keywords": ["design-build", "turnkey industrial projects"],
  "canonical": "https://www.adroitgrow.com/services/design-build"
}
```

---

## 📁 `/seo/projects.json`

```json
{
  "title": "Industrial & Corporate Projects | AdroitGrow",
  "description": "Explore our industrial plant design, engineering projects and corporate interior works across India.",
  "keywords": [
    "industrial projects",
    "corporate interior projects",
    "engineering projects"
  ],
  "canonical": "https://www.adroitgrow.com/projects"
}
```

---

### 📁 **Per Project SEO JSON Template**

You will generate one per project:

```json
{
  "title": "Helious Specialty Gases – Ghiloth | Industrial Project",
  "description": "Industrial architectural and engineering design services for Helious Specialty Gases at Ghiloth.",
  "keywords": ["industrial gas plant design", "engineering project", "helious"],
  "canonical": "https://www.adroitgrow.com/projects/helious-specialty-gases-ghiloth"
}
```

---

## 📁 `/seo/contact.json`

```json
{
  "title": "Contact AdroitGrow | Industrial Architecture & Engineering",
  "description": "Reach out for industrial design, engineering, project management and interior solutions. Located in Gurugram, Haryana.",
  "keywords": ["contact AdroitGrow", "architectural firm contact"],
  "canonical": "https://www.adroitgrow.com/contact"
}
```

---

# ----------------------------------------------------

# 🎯 **2. COMPONENT MAPPING FOR ALL PAGES**

# ----------------------------------------------------

Below is the **final production-ready mapping** of pages → components.

---

# 🏠 **HOME PAGE**

```
<Hero />
<LogoStrip />
<AboutSnapshot />
<ServiceGrid />
<FeaturedProjects />
<WhyChooseUs />
<ProcessSteps />
<Testimonials />
<Stats />
<CTASection />
```

---

# 🧑‍💼 **ABOUT PAGE**

```
<PageHero />
<CompanyIntro />
<VisionMission />
<ValuesGrid />
<LeadershipGrid />
<CompanyTimeline />
<ApproachSection />
<CTASection />
```

---

# 🛠 **SERVICES PAGE**

```
<PageHero />
<ServiceCategoryGrid />
<CapabilitiesOverview />
<IndustriesServed />
<WhyChooseUs />
<CTASection />
```

---

# 🛠 **SERVICE DETAIL PAGE**

```
<ServiceHero />
<ServiceOverview />
<CapabilitiesList />
<ProcessSteps />
<ServiceGallery />
<RelatedProjects />
<FAQAccordion />
<CTASection />
```

---

# 🧱 **PROJECTS PAGE**

```
<PageHero />
<ProjectFilters />
<ProjectGrid />
<CTASection />
```

---

# 🧱 **PROJECT DETAIL PAGE**

```
<ProjectHero />
<ProjectOverview />
<ProjectScope />
<ProjectStats />
<ProjectGallery />
<ChallengesSolutions />
<RelatedProjects />
```

---

# 🧑‍💻 **CAREERS PAGE**

```
<PageHero />
<JobList />
<CultureShowcase />
<BenefitsGrid />
<ApplyCTA />
```

---

# 📞 **CONTACT PAGE**

```
<PageHero />
<ContactForm />
<ContactDetails />
<MapSection />
<OfficeLocations />
```

---

# ----------------------------------------------------

# 🎯 **3. TAILWIND COLOR TOKEN CONFIG (BASED ON YOUR DESIGN SYSTEM)**

# ----------------------------------------------------

Add this to: **`tailwind.config.js`**

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        tkc: {
          bg: '#fd0',
          overlay: 'rgba(17,20,23,0.63)',
          mobile: 'rgba(17,20,23,0.85)',
          dark: '#0b1020',
          text: '#fff',
          yellow: '#fd0',
          muted: '#4b5563',
          border: '#e5e7eb',
        },
      },
      maxWidth: {
        tkc: '1408px',
      },
      spacing: {
        'gap-lg': '48px',
        'gap-md': '24px',
        'gap-sm': '16px',
      },
    },
  },
}
```

---

# ⭐ **EVERYTHING IS NOW READY FOR DEVELOPMENT**

If you want, I can now generate:

### ✅ `/content/*.json` page data files

### ✅ Component folder structure (React/Next.js)

### ✅ Tailwind utility classes cheat-sheet

### ✅ Auto-generated sitemap + robots.txt

### ✅ Figma wireframe templates

Just tell me: **→ Do you want the full `/content` JSON files next?**
