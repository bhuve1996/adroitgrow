import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { generateProjectSEO } from '@/config/seo'
import { generatePageMetadata, JsonLd } from '@/lib/seo'
import projectsContent from '@/content/projects.json'
import { Hero, ProjectsGrid, Testimonials, CTASection } from '@/components/sections'
import { Section, SectionHeader, StatCard } from '@/components/ui'
import { Breadcrumbs } from '@/components/layout'
import { MapPin, Calendar, Ruler, Clock } from 'lucide-react'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projectsContent.projects.map((project) => ({
    slug: project.slug,
  }))
}

// Generate metadata for each project page
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projectsContent.projects.find((p) => p.slug === slug)
  if (!project) return {}

  const seo = generateProjectSEO({
    title: project.title,
    slug: project.slug,
    location: project.location,
    shortDescription: project.shortDescription,
    category: project.category,
  })
  return generatePageMetadata(seo)
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projectsContent.projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const seo = generateProjectSEO({
    title: project.title,
    slug: project.slug,
    location: project.location,
    shortDescription: project.shortDescription,
    category: project.category,
  })

  // Get related projects (same category, excluding current)
  const relatedProjects = projectsContent.projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3)

  return (
    <>
      <JsonLd schema={seo.schema!} />

      {/* Hero Section */}
      <Hero
        content={{
          title: project.title,
          subtitle: project.category,
          description: project.shortDescription,
          backgroundImage: project.image,
          cta: [],
        }}
      />

      {/* Breadcrumbs */}
      <Section noPadding className="!py-0">
        <Breadcrumbs />
      </Section>

      {/* Project Info Strip */}
      <Section dark noPadding>
        <div className="border-y border-border-muted py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-brand-yellow" />
              <div>
                <span className="block text-xs uppercase text-text-muted">Location</span>
                <span className="font-medium text-text-primary">{project.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-brand-yellow" />
              <div>
                <span className="block text-xs uppercase text-text-muted">Year</span>
                <span className="font-medium text-text-primary">{project.year}</span>
              </div>
            </div>
            {project.stats?.area && (
              <div className="flex items-center gap-3">
                <Ruler className="h-5 w-5 text-brand-yellow" />
                <div>
                  <span className="block text-xs uppercase text-text-muted">Area</span>
                  <span className="font-medium text-text-primary">{project.stats.area}</span>
                </div>
              </div>
            )}
            {project.stats?.duration && (
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-brand-yellow" />
                <div>
                  <span className="block text-xs uppercase text-text-muted">Duration</span>
                  <span className="font-medium text-text-primary">{project.stats.duration}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Project Description */}
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeader title="About the Project" centered={false} className="mb-6" />
            <p className="text-lg leading-relaxed text-text-secondary">{project.description}</p>
          </div>
          <div>
            <SectionHeader title="Scope of Work" centered={false} className="mb-6" />
            <ul className="space-y-3">
              {project.scope.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-yellow" />
                  <span className="text-text-primary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Project Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <Section dark>
          <SectionHeader title="Project Gallery" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Project Stats */}
      {project.stats && (
        <Section>
          <div className="grid grid-cols-2 gap-6 rounded-2xl border border-border-muted bg-surface-card p-8 md:grid-cols-4">
            {project.stats.area && (
              <StatCard
                value={project.stats.area.replace(/[^0-9,]/g, '')}
                label="Built-up Area"
                suffix=" sq.ft."
              />
            )}
            {project.stats.duration && (
              <StatCard
                value={project.stats.duration.replace(/[^0-9]/g, '')}
                label="Project Duration"
                suffix=" months"
              />
            )}
            {project.stats.type && <StatCard value={project.stats.type} label="Project Type" />}
          </div>
        </Section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <Testimonials title="Client Feedback" testimonials={[project.testimonial]} />
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <ProjectsGrid
          title="Related Projects"
          subtitle="Explore similar projects"
          projects={relatedProjects}
        />
      )}

      {/* CTA */}
      <CTASection
        title="Have a Similar Project?"
        description="Let's discuss how we can help with your project requirements."
        cta={{ label: 'Get in Touch', href: '/contact', variant: 'primary' }}
      />
    </>
  )
}
