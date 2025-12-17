# AdroitGrow Website

A modern, SEO-optimized, fully config-driven website for AdroitGrow Private
Limited - an Industrial Architecture and Engineering firm.

## 🚀 Features

- **Next.js 14** with App Router
- **100% Config-Driven** - All content from JSON files
- **SEO Optimized** - Meta tags, Open Graph, JSON-LD Schema
- **Automatic Sitemap** - Dynamic sitemap.xml generation
- **Robots.txt** - Search engine friendly
- **Responsive Design** - Mobile-first approach
- **Tailwind CSS** - Custom design tokens
- **Framer Motion** - Smooth animations
- **TypeScript** - Strict type safety with comprehensive types
- **ESLint** - Comprehensive linting with TypeScript, React, and Tailwind rules
- **Prettier** - Code formatting with Tailwind class sorting
- **Husky** - Git hooks for pre-commit validation
- **lint-staged** - Run linters on staged files only

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services pages (dynamic)
│   ├── projects/          # Projects pages (dynamic)
│   ├── careers/           # Careers pages (dynamic)
│   ├── contact/           # Contact page
│   ├── privacy-policy/    # Legal pages
│   ├── terms/
│   ├── sitemap.ts         # Auto-generated sitemap
│   └── robots.ts          # Robots.txt config
├── components/
│   ├── layout/            # Header, Footer, Breadcrumbs
│   ├── sections/          # Page sections (Hero, Stats, etc.)
│   └── ui/                # Reusable UI components
├── config/
│   ├── site.ts            # Site-wide configuration
│   ├── navigation.ts      # Navigation menu config
│   └── seo.ts             # SEO configurations
├── content/               # JSON content files
│   ├── home.json
│   ├── about.json
│   ├── services.json
│   ├── projects.json
│   ├── contact.json
│   └── careers.json
├── lib/
│   ├── utils.ts           # Utility functions
│   └── seo.tsx            # SEO helpers & JSON-LD
└── types/                 # TypeScript interfaces
```

## ⚙️ Configuration

### Site Configuration (`src/config/site.ts`)

Update company details, contact info, and social links:

```typescript
export const siteConfig = {
  name: 'Your Company Name',
  email: 'contact@yourcompany.com',
  phone: '+91 98765 43210',
  // ... more settings
}
```

### Navigation (`src/config/navigation.ts`)

Customize the navigation menu and footer links.

### SEO (`src/config/seo.ts`)

Configure SEO metadata for all pages including:

- Title templates
- Meta descriptions
- Keywords
- JSON-LD schemas

### Content (`src/content/*.json`)

Update JSON files to change page content without touching code:

- `home.json` - Homepage sections
- `about.json` - About page content
- `services.json` - Service offerings
- `projects.json` - Project portfolio
- `contact.json` - Contact information
- `careers.json` - Job listings

## 🎨 Design System

### Colors (Tailwind)

```css
brand-yellow: #fd0
surface-dark: #0b1020
surface-darker: #070a14
text-primary: #ffffff
text-secondary: #9ca3af
```

### Fonts (Google Fonts - Auto-loaded)

- **Display:** Syne (headings)
- **Body:** Geist Sans
- **Mono:** Geist Mono

## 🛠️ Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment:**

   ```bash
   cp .env.example .env.local
   ```

3. **Add images:** Add your images to `public/images/` following the structure

4. **Run development server:**

   ```bash
   npm run dev
   ```

5. **Initialize Husky:**

   ```bash
   npm run prepare
   ```

6. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 📱 Pages

| Page           | Route              | Description                    |
| -------------- | ------------------ | ------------------------------ |
| Home           | `/`                | Landing page with all sections |
| About          | `/about`           | Company info, team, timeline   |
| Services       | `/services`        | Service listing                |
| Service Detail | `/services/[slug]` | Individual service page        |
| Projects       | `/projects`        | Project portfolio with filters |
| Project Detail | `/projects/[slug]` | Individual project page        |
| Careers        | `/careers`         | Job listings                   |
| Job Detail     | `/careers/[id]`    | Individual job page            |
| Contact        | `/contact`         | Contact form & info            |
| Privacy Policy | `/privacy-policy`  | Legal page                     |
| Terms          | `/terms`           | Legal page                     |

## 🔍 SEO Features

- **Meta Tags:** Title, description, keywords per page
- **Open Graph:** Social media sharing optimization
- **Twitter Cards:** Twitter-specific metadata
- **JSON-LD Schema:** Structured data for:
  - Organization
  - LocalBusiness
  - Service
  - BreadcrumbList
  - CreativeWork (projects)
- **Sitemap:** Auto-generated `sitemap.xml`
- **Robots.txt:** Search engine crawling rules
- **Canonical URLs:** Prevent duplicate content
- **Alt Text:** Image accessibility

## 🛠️ Development Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors
npm run lint:strict      # Strict lint (zero warnings)
npm run format           # Format with Prettier
npm run format:check     # Check formatting
npm run typecheck        # TypeScript type check
npm run validate         # Run all checks

# Git Hooks (auto-configured)
npm run prepare          # Setup Husky hooks
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the static export or deploy the Next.js server.

## 📄 License

Private - All rights reserved.

## 👤 Author

Built for AdroitGrow Private Limited
