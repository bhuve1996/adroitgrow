import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { pageSEO } from '@/config/seo'
import { generatePageMetadata, JsonLd } from '@/lib/seo'
import careersContent from '@/content/careers.json'
import { Hero, WhyChooseUs, CTASection } from '@/components/sections'
import { Section, SectionHeader } from '@/components/ui'
import { Breadcrumbs } from '@/components/layout'
import { MapPin, Briefcase, ArrowRight } from 'lucide-react'
import { type HeroContent, type CTAButton } from '@/types'

export const metadata: Metadata = generatePageMetadata(pageSEO.careers)

export default function CareersPage() {
  const heroContent: HeroContent = {
    ...careersContent.hero,
    cta: careersContent.hero.cta.map((c) => ({
      ...c,
      variant: c.variant as CTAButton['variant'],
    })),
  }

  const ctaButton: CTAButton = {
    label: 'Send Your Resume',
    href: 'mailto:careers@adroitgrow.com',
    variant: 'primary' as const,
  }

  return (
    <>
      <JsonLd schema={pageSEO.careers.schema!} />

      {/* Hero Section */}
      <Hero content={heroContent} />

      {/* Breadcrumbs */}
      <Section className="!py-0" noPadding>
        <Breadcrumbs />
      </Section>

      {/* Culture Section */}
      <Section>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader centered={false} className="mb-6" title={careersContent.culture.title} />
            <p className="text-lg text-text-secondary">{careersContent.culture.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {careersContent.culture.images.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl ${
                  index === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
                }`}
              >
                <Image
                  alt={`Office Culture ${index + 1}`}
                  className="object-cover"
                  fill
                  src={image}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <WhyChooseUs points={careersContent.benefits.items} title={careersContent.benefits.title} />

      {/* Job Listings */}
      <Section id="jobs">
        <SectionHeader subtitle="Join our growing team" title="Open Positions" />
        <div className="mx-auto max-w-4xl space-y-4">
          {careersContent.jobs.map((job) => (
            <div
              key={job.id}
              className="group rounded-2xl border border-border-muted bg-surface-card p-6 transition-all hover:border-brand-yellow/30"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary transition-colors group-hover:text-brand-yellow">
                    {job.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-text-secondary">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-text-secondary">
                      <Briefcase className="h-4 w-4" />
                      {job.type}
                    </span>
                    <span className="rounded-full bg-brand-yellow/10 px-3 py-1 text-xs font-medium text-brand-yellow">
                      {job.department}
                    </span>
                  </div>
                </div>
                <Link
                  className="inline-flex items-center gap-2 font-medium text-brand-yellow transition-all hover:gap-3"
                  href={`/careers/${job.id}`}
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-4 line-clamp-2 text-text-secondary">{job.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Application Process */}
      <Section dark>
        <SectionHeader
          subtitle="Simple steps to join us"
          title={careersContent.applicationProcess.title}
        />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {careersContent.applicationProcess.steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow/10 text-2xl font-bold text-brand-yellow">
                {step.step}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">{step.title}</h3>
              <p className="text-sm text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        cta={ctaButton}
        description="Send us your resume anyway. We're always looking for talented individuals to join our team."
        title="Don't See a Perfect Fit?"
      />
    </>
  )
}
