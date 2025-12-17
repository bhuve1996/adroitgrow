// ============================================
// SITE CONFIGURATION TYPES
// ============================================

export interface SiteConfig {
  readonly name: string
  readonly shortName: string
  readonly description: string
  readonly url: string
  readonly ogImage: string
  readonly logo?: string
  readonly icons?: SiteIcons
  readonly founder: string
  readonly foundedYear: number
  readonly email: string
  readonly phone: string
  readonly address: Address
  readonly socialLinks: SocialLinks
}

export interface SiteIcons {
  readonly favicon: string
  readonly faviconSvg?: string
  readonly appleTouchIcon: string
  readonly androidChrome192: string
  readonly androidChrome512: string
}

export interface Address {
  readonly street: string
  readonly city: string
  readonly state: string
  readonly postalCode: string
  readonly country: string
  readonly countryCode: string
}

export interface SocialLinks {
  readonly linkedin?: string
  readonly twitter?: string
  readonly facebook?: string
  readonly instagram?: string
  readonly youtube?: string
}

// ============================================
// NAVIGATION TYPES
// ============================================

export interface NavItem {
  readonly label: string
  readonly href: string
  readonly description?: string
  readonly children?: NavItem[]
}

export interface FooterSection {
  readonly title: string
  readonly links: NavItem[]
}

// ============================================
// SEO TYPES
// ============================================

export interface SEOConfig {
  readonly title: string
  readonly description: string
  readonly keywords: string[]
  readonly canonical?: string
  readonly noIndex?: boolean
  readonly openGraph?: OpenGraphConfig
  readonly schema?: SchemaConfig
}

export interface OpenGraphConfig {
  readonly title?: string
  readonly description?: string
  readonly type?: 'website' | 'article' | 'profile'
  readonly image?: string
  readonly locale?: string
  readonly siteName?: string
}

export interface SchemaConfig {
  readonly '@context': string
  readonly '@type': string
  readonly [key: string]: unknown
}

// ============================================
// CONTENT TYPES
// ============================================

export interface HeroContent {
  readonly title: string
  readonly subtitle: string
  readonly description?: string
  readonly backgroundImage?: string
  readonly backgroundVideo?: string
  readonly cta: CTAButton[]
}

export interface CTAButton {
  readonly label: string
  readonly href: string
  readonly variant?: 'primary' | 'secondary' | 'outline'
}

export interface ServiceItem {
  readonly id: string
  readonly title: string
  readonly slug: string
  readonly shortDescription: string
  readonly description: string
  readonly icon: string
  readonly image: string
  readonly features: string[]
  readonly process?: ProcessStep[]
  readonly faqs?: FAQ[]
}

export interface ProjectItem {
  readonly id: string
  readonly title: string
  readonly slug: string
  readonly location: string
  readonly year: number
  readonly category: string
  readonly industry: string
  readonly description: string
  readonly shortDescription: string
  readonly image: string
  readonly gallery: string[]
  readonly scope: string[]
  readonly stats?: ProjectStats
  readonly testimonial?: Testimonial
}

export interface ProjectStats {
  readonly area?: string
  readonly duration?: string
  readonly type?: string
  readonly value?: string
}

export interface ProcessStep {
  readonly step: number
  readonly title: string
  readonly description: string
  readonly icon?: string
}

export interface FAQ {
  readonly question: string
  readonly answer: string
}

export interface Testimonial {
  readonly name: string
  readonly company: string
  readonly role: string
  readonly content: string
  readonly image?: string
}

export interface TeamMember {
  readonly id: string
  readonly name: string
  readonly role: string
  readonly bio: string
  readonly image: string
  readonly linkedin?: string
  readonly email?: string
}

export interface Stat {
  readonly value: string
  readonly label: string
  readonly suffix?: string
  readonly prefix?: string
}

export interface TimelineEvent {
  readonly year: string
  readonly title: string
  readonly description: string
}

export interface ClientLogo {
  readonly name: string
  readonly image: string
  readonly url?: string
}

export interface JobListing {
  readonly id: string
  readonly title: string
  readonly location: string
  readonly type: 'full-time' | 'part-time' | 'contract'
  readonly department: string
  readonly description: string
  readonly requirements: string[]
  readonly responsibilities: string[]
}

// ============================================
// PAGE CONTENT TYPES
// ============================================

export interface HomePageContent {
  readonly hero: HeroContent
  readonly aboutSnapshot: {
    readonly title: string
    readonly description: string
    readonly highlights: string[]
    readonly cta: CTAButton
  }
  readonly servicesSection: {
    readonly title: string
    readonly subtitle: string
    readonly services: ServiceItem[]
  }
  readonly featuredProjects: {
    readonly title: string
    readonly subtitle: string
    readonly projects: ProjectItem[]
  }
  readonly whyChooseUs: {
    readonly title: string
    readonly subtitle: string
    readonly points: {
      readonly title: string
      readonly description: string
      readonly icon: string
    }[]
  }
  readonly processSection: {
    readonly title: string
    readonly subtitle: string
    readonly steps: ProcessStep[]
  }
  readonly testimonials: {
    readonly title: string
    readonly items: Testimonial[]
  }
  readonly stats: Stat[]
  readonly ctaSection: {
    readonly title: string
    readonly description: string
    readonly cta: CTAButton
  }
  readonly clientLogos: ClientLogo[]
}

export interface AboutPageContent {
  readonly hero: HeroContent
  readonly company: {
    readonly title: string
    readonly description: string
    readonly highlights: string[]
    readonly image: string
  }
  readonly vision: {
    readonly title: string
    readonly description: string
  }
  readonly mission: {
    readonly title: string
    readonly description: string
  }
  readonly values: {
    readonly title: string
    readonly items: {
      readonly title: string
      readonly description: string
      readonly icon: string
    }[]
  }
  readonly leadership: {
    readonly title: string
    readonly subtitle: string
    readonly members: TeamMember[]
  }
  readonly timeline: {
    readonly title: string
    readonly events: TimelineEvent[]
  }
  readonly philosophy: {
    readonly title: string
    readonly points: string[]
    readonly image: string
  }
}

export interface ServicesPageContent {
  readonly hero: HeroContent
  readonly services: ServiceItem[]
  readonly capabilities: {
    readonly title: string
    readonly items: string[]
  }
  readonly industries: {
    readonly title: string
    readonly items: {
      readonly name: string
      readonly icon: string
    }[]
  }
  readonly cta: {
    readonly title: string
    readonly description: string
    readonly cta: CTAButton
  }
}

export interface ProjectsPageContent {
  readonly hero: HeroContent
  readonly filters: {
    readonly industries: string[]
    readonly locations: string[]
    readonly services: string[]
  }
  readonly projects: ProjectItem[]
}

export interface ContactPageContent {
  readonly hero: HeroContent
  readonly form: {
    readonly title: string
    readonly description: string
    readonly fields: FormField[]
    readonly submitText: string
  }
  readonly offices: {
    readonly title: string
    readonly locations: OfficeLocation[]
  }
  readonly map: {
    readonly embedUrl: string
    readonly coordinates: {
      readonly lat: number
      readonly lng: number
    }
  }
}

export interface FormField {
  readonly name: string
  readonly label: string
  readonly type: 'text' | 'email' | 'phone' | 'textarea' | 'select'
  readonly placeholder?: string
  readonly required?: boolean
  readonly options?: string[]
}

export interface OfficeLocation {
  readonly name: string
  readonly address: string
  readonly phone: string
  readonly email: string
  readonly hours?: string
}

export interface CareersPageContent {
  readonly hero: HeroContent
  readonly culture: {
    readonly title: string
    readonly description: string
    readonly images: string[]
  }
  readonly benefits: {
    readonly title: string
    readonly items: {
      readonly title: string
      readonly description: string
      readonly icon: string
    }[]
  }
  readonly jobs: JobListing[]
}

// ============================================
// UTILITY TYPES
// ============================================

/** Make all properties in T mutable (removes readonly) */
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

/** Deep partial type */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

/** Extract the element type from an array */
export type ArrayElement<T> = T extends readonly (infer U)[] ? U : never

/** Make specific properties required */
export type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>

/** Make specific properties optional */
export type OptionalFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
