import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import careersContent from '@/content/careers.json'
import { Hero, CTASection } from '@/components/sections'
import { Section, SectionHeader, Button } from '@/components/ui'
import { Breadcrumbs } from '@/components/layout'
import { MapPin, Briefcase, Building, ArrowLeft, CheckCircle } from 'lucide-react'

interface JobPageProps {
  params: Promise<{ id: string }>
}

// Generate static params for all jobs
export async function generateStaticParams() {
  return careersContent.jobs.map((job) => ({
    id: job.id,
  }))
}

// Generate metadata for each job page
export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { id } = await params
  const job = careersContent.jobs.find((j) => j.id === id)
  if (!job) return {}

  return {
    title: `${job.title} - Careers at ${siteConfig.shortName}`,
    description: job.description,
    openGraph: {
      title: `${job.title} - Careers at ${siteConfig.shortName}`,
      description: job.description,
    },
  }
}

export default async function JobPage({ params }: JobPageProps) {
  const { id } = await params
  const job = careersContent.jobs.find((j) => j.id === id)

  if (!job) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <Hero
        content={{
          title: job.title,
          subtitle: 'Career Opportunity',
          description: `${job.location} · ${job.type} · ${job.department}`,
          backgroundImage: '/images/hero/careers-hero.jpg',
          cta: [],
        }}
      />

      {/* Breadcrumbs */}
      <Section noPadding className="!py-0">
        <Breadcrumbs />
      </Section>

      {/* Back Link */}
      <Section noPadding className="!py-4">
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-text-secondary transition-colors hover:text-brand-yellow"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all positions
        </Link>
      </Section>

      {/* Job Details */}
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-10 lg:col-span-2">
            {/* Overview */}
            <div>
              <SectionHeader title="About the Role" centered={false} className="mb-6" />
              <p className="text-lg text-text-secondary">{job.description}</p>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-text-primary">Key Responsibilities</h3>
              <ul className="space-y-3">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-text-primary">Requirements</h3>
              <ul className="space-y-3">
                {job.requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-yellow" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Job Info Card */}
              <div className="rounded-2xl border border-border-muted bg-surface-card p-6">
                <h3 className="mb-4 text-lg font-semibold text-text-primary">Job Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-text-secondary">
                    <MapPin className="h-5 w-5 text-brand-yellow" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <Briefcase className="h-5 w-5 text-brand-yellow" />
                    <span className="capitalize">{job.type}</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <Building className="h-5 w-5 text-brand-yellow" />
                    <span>{job.department}</span>
                  </div>
                </div>
              </div>

              {/* Apply CTA */}
              <div className="rounded-2xl border border-brand-yellow/30 bg-brand-yellow/10 p-6">
                <h3 className="mb-2 text-lg font-semibold text-text-primary">Ready to Apply?</h3>
                <p className="mb-4 text-sm text-text-secondary">
                  Send your resume and portfolio to our careers team.
                </p>
                <Button
                  href={`mailto:careers@adroitgrow.com?subject=Application for ${job.title}`}
                  className="w-full"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Have Questions?"
        description="Feel free to reach out to our HR team for any queries about this position."
        cta={{ label: 'Contact HR', href: 'mailto:careers@adroitgrow.com', variant: 'secondary' }}
      />
    </>
  )
}
