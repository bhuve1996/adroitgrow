import { type Metadata } from 'next'
import { type SEOConfig, type SchemaConfig } from '@/types'
import { siteConfig } from '@/config/site'
import { defaultSEO } from '@/config/seo'

// Generate metadata for Next.js pages
export function generatePageMetadata(seo: Partial<SEOConfig>): Metadata {
  const config = { ...defaultSEO, ...seo }

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords ? [...config.keywords] : undefined,
    authors: [{ name: siteConfig.founder }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: config.noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: config.canonical,
    },
    openGraph: {
      title: config.openGraph?.title || config.title,
      description: config.openGraph?.description || config.description,
      url: config.canonical || siteConfig.url,
      siteName: config.openGraph?.siteName || siteConfig.name,
      images: [
        {
          url: config.openGraph?.image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      locale: config.openGraph?.locale || 'en_IN',
      type: config.openGraph?.type || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [config.openGraph?.image || siteConfig.ogImage],
    },
  }
}

// JSON-LD Schema Component
interface JsonLdProps {
  schema: SchemaConfig
}

export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Organization Schema
export function getOrganizationSchema(): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    founder: {
      '@type': 'Person',
      name: siteConfig.founder,
    },
    foundingDate: siteConfig.foundedYear.toString(),
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
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: Object.values(siteConfig.socialLinks).filter(Boolean),
  }
}

// Breadcrumb Schema
export function getBreadcrumbSchema(items: { name: string; url: string }[]): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Service Schema
export function getServiceSchema(service: {
  name: string
  description: string
  url: string
}): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  }
}

// Local Business Schema
export function getLocalBusinessSchema(): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    image: `${siteConfig.url}/images/logo.png`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.47,
      longitude: 77.02,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
  }
}
