import { type SEOConfig } from '@/types'
import { siteConfig } from './site'

// Default SEO configuration
export const defaultSEO: SEOConfig = {
  title: `${siteConfig.shortName} | Industrial Architecture & Engineering`,
  description: siteConfig.description,
  keywords: [
    'industrial architecture',
    'engineering design',
    'project management',
    'factory layout design',
    'corporate interiors',
    'industrial construction',
    'PEB structures',
    'turnkey projects',
    'Gurugram architect',
    'industrial consultant India',
  ],
  canonical: siteConfig.url,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    image: siteConfig.ogImage,
  },
}

// SEO configurations for all pages
export const pageSEO: Record<string, SEOConfig> = {
  home: {
    title: 'Industrial Architecture, Engineering & Project Management | AdroitGrow',
    description:
      'AdroitGrow is a leading industrial architectural and engineering firm providing turnkey design, project management and corporate interiors with 20+ years expertise.',
    keywords: [
      'industrial architecture',
      'engineering design',
      'project management',
      'factory layout design',
      'corporate interiors',
      'industrial construction',
    ],
    canonical: siteConfig.url,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      founder: {
        '@type': 'Person',
        name: siteConfig.founder,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.countryCode,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: 'customer service',
      },
      sameAs: Object.values(siteConfig.socialLinks).filter(Boolean),
    },
  },

  about: {
    title: 'About Us | AdroitGrow – Industrial Architecture & Engineering Firm',
    description:
      'AdroitGrow is a progressive engineering and architectural firm led by industry veteran Manish Bhatnagar with 20+ years of industrial project expertise.',
    keywords: [
      'about AdroitGrow',
      'industrial engineering company',
      'architecture firm',
      'project management experts',
      'Manish Bhatnagar',
    ],
    canonical: `${siteConfig.url}/about`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About AdroitGrow',
      description: 'Learn about AdroitGrow, our vision, mission, and leadership team.',
      publisher: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    },
  },

  services: {
    title: 'Services | Industrial Design, Engineering & Project Management',
    description:
      "Explore AdroitGrow's industrial architectural design, engineering services, project management and corporate interior solutions.",
    keywords: [
      'industrial services',
      'engineering services',
      'project management',
      'interior design',
      'design-build',
    ],
    canonical: `${siteConfig.url}/services`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Industrial Architectural & Engineering Services',
      provider: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    },
  },

  projects: {
    title: 'Industrial & Corporate Projects | AdroitGrow',
    description:
      'Explore our industrial plant design, engineering projects and corporate interior works across India.',
    keywords: [
      'industrial projects',
      'corporate interior projects',
      'engineering projects',
      'portfolio',
    ],
    canonical: `${siteConfig.url}/projects`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Projects Portfolio',
      description: 'Collection of industrial and corporate projects by AdroitGrow',
    },
  },

  contact: {
    title: 'Contact AdroitGrow | Industrial Architecture & Engineering',
    description:
      'Reach out for industrial design, engineering, project management and interior solutions. Located in Gurugram, Haryana.',
    keywords: ['contact AdroitGrow', 'architectural firm contact', 'industrial consultant'],
    canonical: `${siteConfig.url}/contact`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Us',
      description: 'Get in touch with AdroitGrow for your industrial and commercial projects.',
    },
  },

  careers: {
    title: 'Careers at AdroitGrow | Join Our Team',
    description:
      'Explore career opportunities at AdroitGrow. Join our team of architects, engineers, and project managers.',
    keywords: ['careers', 'jobs', 'architect jobs', 'engineer jobs', 'project manager jobs'],
    canonical: `${siteConfig.url}/careers`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Careers',
      description: 'Career opportunities at AdroitGrow',
    },
  },

  privacy: {
    title: 'Privacy Policy | AdroitGrow',
    description:
      "AdroitGrow's privacy policy explaining how we collect, use, and protect your personal information.",
    keywords: ['privacy policy', 'data protection'],
    canonical: `${siteConfig.url}/privacy-policy`,
  },

  terms: {
    title: 'Terms of Service | AdroitGrow',
    description: 'Terms and conditions for using AdroitGrow services and website.',
    keywords: ['terms of service', 'terms and conditions'],
    canonical: `${siteConfig.url}/terms`,
  },
}

// Service-specific SEO
export const serviceSEO: Record<string, SEOConfig> = {
  'industrial-architectural-engineering-design': {
    title: 'Industrial Architectural & Engineering Design Services | AdroitGrow',
    description:
      'Specialized industrial engineering, factory layouts, PEB integration, utility planning and architectural design services.',
    keywords: [
      'industrial engineering design',
      'factory design',
      'PEB building design',
      'industrial planning',
      'plant layout',
    ],
    canonical: `${siteConfig.url}/services/industrial-architectural-engineering-design`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Industrial Architectural & Engineering Design',
      provider: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    },
  },

  'project-management': {
    title: 'Construction & Industrial Project Management | AdroitGrow',
    description:
      'Multidisciplinary coordination across civil, structural, HVAC, electrical, plumbing and safety for industrial projects.',
    keywords: [
      'industrial project management',
      'construction management',
      'MEP coordination',
      'project delivery',
    ],
    canonical: `${siteConfig.url}/services/project-management`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Project Management',
      provider: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    },
  },

  'interior-design': {
    title: 'Corporate Interior Design & Fitout Services | AdroitGrow',
    description: 'Office interiors, space planning, material selection and end-to-end execution.',
    keywords: ['corporate interiors', 'office design', 'workspace planning', 'interior fitout'],
    canonical: `${siteConfig.url}/services/interior-design`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Interior Design',
      provider: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    },
  },

  'design-build': {
    title: 'Turnkey Design-Build Solutions for Industries | AdroitGrow',
    description:
      'Single-window responsibility from concept, engineering, procurement, construction to handover.',
    keywords: [
      'design-build',
      'turnkey industrial projects',
      'EPC contractor',
      'single-point delivery',
    ],
    canonical: `${siteConfig.url}/services/design-build`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Design-Build',
      provider: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    },
  },
}

// Helper function to generate project SEO
export function generateProjectSEO(project: {
  title: string
  slug: string
  location: string
  shortDescription: string
  category: string
}): SEOConfig {
  return {
    title: `${project.title} | ${project.category} Project | AdroitGrow`,
    description: project.shortDescription,
    keywords: [
      project.category.toLowerCase(),
      'industrial project',
      project.location.toLowerCase(),
      'engineering project',
    ],
    canonical: `${siteConfig.url}/projects/${project.slug}`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.title,
      description: project.shortDescription,
      locationCreated: {
        '@type': 'Place',
        name: project.location,
      },
      creator: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    },
  }
}
