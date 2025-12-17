import { type Metadata } from 'next'
import Image from 'next/image'
import { pageSEO } from '@/config/seo'
import { generatePageMetadata, JsonLd } from '@/lib/seo'
import aboutContent from '@/content/about.json'
import { Hero, WhyChooseUs, Timeline, CTASection } from '@/components/sections'
import { Section, SectionHeader, TeamCard } from '@/components/ui'
import { Breadcrumbs } from '@/components/layout'

export const metadata: Metadata = generatePageMetadata(pageSEO.about)

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={pageSEO.about.schema!} />

      {/* Hero Section */}
      <Hero content={aboutContent.hero} />

      {/* Breadcrumbs */}
      <Section noPadding className="!py-0">
        <Breadcrumbs />
      </Section>

      {/* Company Introduction */}
      <Section>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader title={aboutContent.company.title} centered={false} className="mb-6" />
            <div className="prose prose-invert prose-lg max-w-none">
              {aboutContent.company.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="mt-8 space-y-3">
              {aboutContent.company.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-yellow" />
                  <span className="text-text-primary">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={aboutContent.company.image}
              alt="Adroit Grow Company"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-surface-dark/50 to-transparent" />
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section dark>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border-muted bg-surface-card p-8 lg:p-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-yellow/10">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-text-primary">
              {aboutContent.vision.title}
            </h3>
            <p className="text-text-secondary">{aboutContent.vision.description}</p>
          </div>
          <div className="rounded-2xl border border-border-muted bg-surface-card p-8 lg:p-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-yellow/10">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-text-primary">
              {aboutContent.mission.title}
            </h3>
            <p className="text-text-secondary">{aboutContent.mission.description}</p>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <WhyChooseUs title={aboutContent.values.title} points={aboutContent.values.items} />

      {/* Leadership */}
      <Section id="leadership">
        <SectionHeader
          title={aboutContent.leadership.title}
          subtitle={aboutContent.leadership.subtitle}
        />
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {aboutContent.leadership.members.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </Section>

      {/* Company Timeline */}
      <Timeline title={aboutContent.timeline.title} events={aboutContent.timeline.events} />

      {/* Our Approach */}
      <Section dark>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={aboutContent.philosophy.image}
              alt="Our Approach"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeader title={aboutContent.philosophy.title} centered={false} />
            <ul className="space-y-4">
              {aboutContent.philosophy.points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10 font-bold text-brand-yellow">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-text-secondary">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Ready to Work With Us?"
        description="Let's discuss how our expertise can help bring your project to life."
        cta={{ label: 'Contact Us', href: '/contact', variant: 'primary' }}
      />
    </>
  )
}
