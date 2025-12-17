import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { serviceSEO } from '@/config/seo'
import { generatePageMetadata, JsonLd, getServiceSchema } from '@/lib/seo'
import { siteConfig } from '@/config/site'
import servicesContent from '@/content/services.json'
import projectsContent from '@/content/projects.json'
import { Hero, ProcessSteps, ProjectsGrid, CTASection } from '@/components/sections'
import { Section, SectionHeader, Accordion } from '@/components/ui'
import { Breadcrumbs } from '@/components/layout'
import { CheckCircle } from 'lucide-react'
import { type HeroContent, type CTAButton, type ProjectItem } from '@/types'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all services
export async function generateStaticParams() {
  return servicesContent.services.map((service) => ({
    slug: service.slug,
  }))
}

// Generate metadata for each service page
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const seo = serviceSEO[slug]
  if (!seo) {
    return {}
  }
  return generatePageMetadata(seo)
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = servicesContent.services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const seo = serviceSEO[slug]
  const schema = getServiceSchema({
    name: service.title,
    description: service.shortDescription,
    url: `${siteConfig.url}/services/${slug}`,
  })

  // Get related projects based on service category
  const relatedProjects = projectsContent.projects
    .filter((p) => p.category.toLowerCase().includes(service.title.toLowerCase().split(' ')[0]))
    .slice(0, 3)

  const heroContent: HeroContent = {
    title: service.title,
    subtitle: 'Our Services',
    description: service.shortDescription,
    backgroundImage: service.image,
    cta: [{ label: 'Get a Quote', href: '/contact', variant: 'primary' as const }],
  }

  const ctaButton: CTAButton = {
    label: 'Request a Quote',
    href: '/contact',
    variant: 'primary' as const,
  }

  return (
    <>
      {seo && <JsonLd schema={seo.schema || schema} />}

      {/* Hero Section */}
      <Hero content={heroContent} />

      {/* Breadcrumbs */}
      <Section className="!py-0" noPadding>
        <Breadcrumbs />
      </Section>

      {/* Service Overview */}
      <Section>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader centered={false} className="mb-6" title="Overview" />
            <div className="prose prose-invert prose-lg max-w-none">
              {service.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:sticky lg:top-32">
            <Image alt={service.title} className="object-cover" fill src={service.image} />
          </div>
        </div>
      </Section>

      {/* Features / Capabilities */}
      <Section dark>
        <SectionHeader subtitle="Key Features" title="What We Deliver" />
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl border border-border-muted bg-surface-card p-5"
            >
              <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-brand-yellow" />
              <span className="text-text-primary">{feature}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Steps */}
      {service.process && service.process.length > 0 && (
        <ProcessSteps
          steps={service.process}
          subtitle="How we deliver results"
          title="Our Process"
        />
      )}

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <Section dark>
          <SectionHeader title="Frequently Asked Questions" />
          <div className="mx-auto max-w-3xl">
            <Accordion items={service.faqs} />
          </div>
        </Section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <ProjectsGrid
          projects={relatedProjects as unknown as ProjectItem[]}
          subtitle="See our work in action"
          title="Related Projects"
        />
      )}

      {/* CTA */}
      <CTASection
        cta={ctaButton}
        description={`Let us help you with your ${service.title.toLowerCase()} needs.`}
        title="Ready to Get Started?"
      />
    </>
  )
}
