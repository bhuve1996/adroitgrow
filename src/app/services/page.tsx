import { type Metadata } from 'next'
import { pageSEO } from '@/config/seo'
import { generatePageMetadata, JsonLd } from '@/lib/seo'
import servicesContent from '@/content/services.json'
import { Hero, ServicesGrid, CTASection } from '@/components/sections'
import { Section, SectionHeader } from '@/components/ui'
import { Breadcrumbs } from '@/components/layout'
import { Factory, Car, Pill, UtensilsCrossed, Wind, Building, Warehouse, Store } from 'lucide-react'
import { type HeroContent, type CTAButton } from '@/types'

export const metadata: Metadata = generatePageMetadata(pageSEO.services)

const industryIcons: Record<string, React.ReactNode> = {
  factory: <Factory className="h-8 w-8" />,
  car: <Car className="h-8 w-8" />,
  pill: <Pill className="h-8 w-8" />,
  utensils: <UtensilsCrossed className="h-8 w-8" />,
  wind: <Wind className="h-8 w-8" />,
  building: <Building className="h-8 w-8" />,
  warehouse: <Warehouse className="h-8 w-8" />,
  store: <Store className="h-8 w-8" />,
}

export default function ServicesPage() {
  const heroContent: HeroContent = {
    ...servicesContent.hero,
    cta: servicesContent.hero.cta.map((c) => ({
      ...c,
      variant: c.variant as CTAButton['variant'],
    })),
  }

  const ctaButton: CTAButton = {
    ...servicesContent.cta.cta,
    variant: servicesContent.cta.cta.variant as CTAButton['variant'],
  }

  return (
    <>
      <JsonLd schema={pageSEO.services.schema!} />

      {/* Hero Section */}
      <Hero content={heroContent} />

      {/* Breadcrumbs */}
      <Section className="!py-0" noPadding>
        <Breadcrumbs />
      </Section>

      {/* Services Grid */}
      <ServicesGrid
        services={servicesContent.services.map((s) => ({
          title: s.title,
          shortDescription: s.shortDescription,
          slug: s.slug,
          icon: s.icon,
        }))}
        subtitle="Comprehensive solutions for your projects"
        title="What We Offer"
      />

      {/* Capabilities */}
      <Section dark>
        <SectionHeader title={servicesContent.capabilities.title} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {servicesContent.capabilities.items.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-border-muted bg-surface-card p-4 text-center transition-colors hover:border-brand-yellow/30"
            >
              <span className="text-sm text-text-primary">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section>
        <SectionHeader title={servicesContent.industries.title} />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {servicesContent.industries.items.map((industry, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border-muted bg-surface-card p-6 text-center transition-all hover:border-brand-yellow/30"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-yellow/10 text-brand-yellow transition-colors group-hover:bg-brand-yellow group-hover:text-surface-dark">
                {industryIcons[industry.icon] || <Factory className="h-8 w-8" />}
              </div>
              <span className="font-medium text-text-primary">{industry.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        cta={ctaButton}
        description={servicesContent.cta.description}
        title={servicesContent.cta.title}
      />
    </>
  )
}
