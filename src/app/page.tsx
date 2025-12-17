import { type Metadata } from 'next'
import { pageSEO } from '@/config/seo'
import { generatePageMetadata, JsonLd } from '@/lib/seo'
import homeContent from '@/content/home.json'
import servicesContent from '@/content/services.json'
import projectsContent from '@/content/projects.json'
import {
  Hero,
  Stats,
  ProcessSteps,
  Testimonials,
  CTASection,
  ServicesGrid,
  ProjectsGrid,
  WhyChooseUs,
} from '@/components/sections'
import { type HeroContent, type CTAButton, type ProjectItem } from '@/types'

export const metadata: Metadata = generatePageMetadata(pageSEO.home)

export default function HomePage() {
  const heroContent: HeroContent = {
    ...homeContent.hero,
    cta: homeContent.hero.cta.map((c) => ({
      ...c,
      variant: c.variant as CTAButton['variant'],
    })),
  }

  const ctaButton: CTAButton = {
    ...homeContent.ctaSection.cta,
    variant: homeContent.ctaSection.cta.variant as CTAButton['variant'],
  }

  return (
    <>
      <JsonLd schema={pageSEO.home.schema!} />

      {/* Hero Section */}
      <Hero content={heroContent} variant="home" />

      {/* Stats Section */}
      <Stats stats={homeContent.stats} />

      {/* Services Overview */}
      <ServicesGrid
        services={servicesContent.services.map((s) => ({
          title: s.title,
          shortDescription: s.shortDescription,
          slug: s.slug,
          icon: s.icon,
        }))}
        subtitle={homeContent.servicesSection.subtitle}
        title={homeContent.servicesSection.title}
      />

      {/* Featured Projects */}
      <ProjectsGrid
        limit={6}
        projects={projectsContent.projects as unknown as ProjectItem[]}
        showViewAll
        subtitle={homeContent.featuredProjects.subtitle}
        title={homeContent.featuredProjects.title}
      />

      {/* Why Choose Us */}
      <WhyChooseUs
        points={homeContent.whyChooseUs.points}
        subtitle={homeContent.whyChooseUs.subtitle}
        title={homeContent.whyChooseUs.title}
      />

      {/* Process Steps */}
      <ProcessSteps
        steps={homeContent.processSection.steps}
        subtitle={homeContent.processSection.subtitle}
        title={homeContent.processSection.title}
      />

      {/* Testimonials */}
      <Testimonials
        testimonials={homeContent.testimonials.items}
        title={homeContent.testimonials.title}
      />

      {/* CTA Section */}
      <CTASection
        cta={ctaButton}
        description={homeContent.ctaSection.description}
        title={homeContent.ctaSection.title}
      />
    </>
  )
}
