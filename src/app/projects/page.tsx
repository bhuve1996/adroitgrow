import { type Metadata } from 'next'
import { pageSEO } from '@/config/seo'
import { generatePageMetadata, JsonLd } from '@/lib/seo'
import projectsContent from '@/content/projects/data.json'
import { Hero, ProjectsGrid, CTASection } from '@/components/sections'
import { Section } from '@/components/ui'
import { Breadcrumbs } from '@/components/layout'

export const metadata: Metadata = generatePageMetadata(pageSEO.projects)

export default function ProjectsPage() {
  return (
    <>
      {pageSEO.projects.schema && <JsonLd schema={pageSEO.projects.schema} />}

      {/* Hero Section */}
      <Hero content={projectsContent.hero} />

      {/* Breadcrumbs */}
      <Section noPadding className="!py-0">
        <Breadcrumbs />
      </Section>

      {/* Projects Grid with Filters */}
      <ProjectsGrid
        projects={projectsContent.projects}
        filters={projectsContent.filters}
        showFilters
      />

      {/* CTA */}
      <CTASection
        title="Have a Project in Mind?"
        description="Let's discuss how we can bring your vision to life."
        cta={{ label: 'Start Your Project', href: '/contact', variant: 'primary' }}
      />
    </>
  )
}
