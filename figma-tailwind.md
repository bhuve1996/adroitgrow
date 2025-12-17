Great — below are **ready-to-use Figma wireframe templates** (in text-to-Figma
format) AND a **Tailwind utility class cheat-sheet** based fully on your design
tokens and component system.

---

# 🎨 **1. FIGMA WIREFRAME TEMPLATES (COPY → PASTE INTO FIGMA)**

These are written in **Figma-structured frames**, so you can paste into
FigJam/Figma directly and components will organize cleanly.

---

# 🏠 **A. HOME PAGE — WIREFRAME TEMPLATE**

```
Frame: Home Page (1440)

▣ Section: Hero
   - Full-width background (Image/Video)
   - Overlay: tkc-overlay
   - Title (Bold, 64px)
   - Subtitle (32px)
   - CTA Buttons (Primary, Secondary)

▣ Section: Client Logo Strip
   - Row of 6–8 grayscale logos
   - Auto Layout, horizontal spacing: 48px

▣ Section: About Snapshot
   - 2-column layout
     Left: Short paragraph + founder intro
     Right: Image
   - Button: "Know More"

▣ Section: Service Grid
   - 3×2 Grid
   - Card:
       Icon placeholder
       Title
       Short description
       → Link

▣ Section: Featured Projects Carousel
   - 3 sliding cards
   - Each card:
       Image
       Title
       Location

▣ Section: Why Choose Us
   - 4 Key points (Icon + label + description)

▣ Section: Process Steps
   - Step 1 → Step 4 horizontal timeline
   - Each step = numbered circle + title + text

▣ Section: Testimonials Slider
   - Avatar
   - Name + role
   - Testimonial

▣ Section: Stats
   - 4 big stat blocks:
       ✓ Years of experience
       ✓ Projects
       ✓ Clients
       ✓ Locations served

▣ Section: CTA
   - Dark background (tkc-dark)
   - Bold headline
   - "Contact Us" button
```

---

# 📄 **B. ABOUT PAGE — WIREFRAME TEMPLATE**

```
Frame: About Page (1440)

▣ Section: Page Hero
   - Title
   - Subtitle
   - Background image w/ overlay

▣ Section: Company Intro
   - 2 columns: Text + Image

▣ Section: Vision & Mission
   - Two cards side-by-side

▣ Section: Leadership Grid
   - 3 per row
   - Each:
       Photo placeholder
       Name
       Title
       Short bio

▣ Section: Values
   - 6 icon cards in grid

▣ Section: Company Timeline
   - Vertical timeline
   - Year → Event

▣ Section: CTA
   - Contact or Explore Services button
```

---

# 🛠 **C. SERVICES PAGE — WIREFRAME**

```
Frame: Services Page

▣ Page Hero

▣ Services Grid (4 cards)
   - Icon
   - Title
   - Short description
   - Learn more

▣ Capabilities Section
   - List of expanded bullet points

▣ Industries Served
   - Icons: industrial, commercial, interiors…

▣ Why Choose Us
   - Horizontal cards

▣ CTA Section
```

---

# 🏗 **D. SERVICE DETAIL PAGE — WIREFRAME**

```
Frame: Service Detail Page

▣ Hero Banner
   - Service name
   - 1-line pitch

▣ Overview Section
   - Long text block
   - Supporting image

▣ Capabilities List
   - Bullet list

▣ Process Steps (Timeline)

▣ Case Studies / Related Projects

▣ FAQs

▣ CTA
```

---

# 🧱 **E. PROJECTS PAGE — WIREFRAME**

```
Frame: Projects Page

▣ Page Hero

▣ Filters
   - Dropdown: Industry
   - Dropdown: Location
   - Dropdown: Service

▣ Project Grid
   - 3 columns
   - Project Card:
       Thumbnail
       Project name
       Location
       Tag

▣ CTA
```

---

# 🧱 **F. PROJECT DETAIL PAGE — WIREFRAME**

```
Frame: Project Detail Page

▣ Hero Image
   - Project title
   - Location tag

▣ Overview / Intro

▣ Scope of Work

▣ Project Stats
   - Area
   - Duration
   - Type
   - Tech used (optional)

▣ Image Gallery (Lightbox capable)

▣ Challenges & Solutions Section

▣ Related Projects
```

---

# 🧑‍💼 **G. CAREERS PAGE — WIREFRAME**

```
Frame: Careers Page

▣ Page Hero

▣ Job Listing Grid
   - Title
   - Experience
   - Location

▣ Culture Section
   - 3 images + text

▣ Benefits Grid

▣ Apply CTA
```

---

# 📞 **H. CONTACT PAGE — WIREFRAME**

```
Frame: Contact Page

▣ Hero

▣ Contact Form
   - Name
   - Email
   - Phone
   - Message

▣ Details Block
   - Email
   - Phone
   - Address

▣ Map Embed

▣ CTA
```

---

# ----------------------------------------------------

# 🎨 **2. TAILWIND UTILITY CLASSES (BASED ON YOUR TOKENS)**

# ----------------------------------------------------

These classes map directly to your design system.

---

# 🎨 **A. Background Utilities**

```txt
bg-tkc-bg
bg-tkc-dark
bg-tkc-overlay
bg-tkc-mobile
```

---

# 🎨 **B. Text Utilities**

```txt
text-tkc-text
text-tkc-yellow
text-tkc-muted
```

---

# 🎨 **C. Border Utilities**

```txt
border-tkc-border
```

---

# 🎛 **D. Layout & Spacing Utilities**

(Use these instead of random px values → consistent design!)

```txt
max-w-tkc     → max-width: 1408px;

gap-gap-lg    → gap: 48px;
gap-gap-md    → gap: 24px;
gap-gap-sm    → gap: 16px;

p-gap-lg
p-gap-md
p-gap-sm

py-gap-md
px-gap-md
```

---

# 🔳 **E. Component Utilities**

### Buttons

```txt
btn-primary:
  bg-tkc-yellow text-black px-6 py-3 font-semibold rounded-md

btn-secondary:
  bg-tkc-dark text-tkc-yellow border border-tkc-border px-6 py-3
```

### Cards

```txt
card:
  bg-tkc-dark p-gap-md rounded-lg shadow-md border border-tkc-border
```

### Section Title

```txt
section-title:
  text-4xl font-bold text-tkc-text mb-gap-md
```

---

# 🌟 **F. Reusable Layout Utilities**

```txt
section-wrapper:
  max-w-tkc mx-auto px-gap-md py-gap-lg

grid-3:
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gap-lg

grid-2:
  grid grid-cols-1 md:grid-cols-2 gap-gap-lg
```

---

# ----------------------------------------------------

# 🎯 **3. OPTIONAL: I CAN ALSO GENERATE**

# ----------------------------------------------------

If you want:

### ✅ **Full Figma components (AutoLayout-ready)**

### ✅ **Tailwind component classes (buttons, cards, etc.)**

### ✅ **React + Next.js folder structure**

### ✅ **Full JSON `/content` templates**

### ✅ **Agency-level Figma mockups** (can generate objects you paste into Figma)

---

# ❓ Would you like:

### **A) Full Figma Component Library (atoms, molecules, organisms)**

or

### **B) Full `/content` JSON files (home.json, about.json, etc.)**
