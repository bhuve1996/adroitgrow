import { type Metadata } from 'next'
import { pageSEO } from '@/config/seo'
import { generatePageMetadata, JsonLd } from '@/lib/seo'
import contactContent from '@/content/contact.json'
import { Hero, ContactForm } from '@/components/sections'
import { Section } from '@/components/ui'
import { Breadcrumbs } from '@/components/layout'
import { Mail, Phone, MapPin, Clock, Linkedin } from 'lucide-react'
import { type HeroContent, type FormField } from '@/types'

export const metadata: Metadata = generatePageMetadata(pageSEO.contact)

const iconMap: Record<string, React.ReactNode> = {
  mail: <Mail className="h-6 w-6" />,
  phone: <Phone className="h-6 w-6" />,
  linkedin: <Linkedin className="h-6 w-6" />,
}

export default function ContactPage() {
  const heroContent: HeroContent = {
    ...contactContent.hero,
    cta: [],
  }

  const formFields: FormField[] = contactContent.form.fields.map((field) => ({
    ...field,
    type: field.type as FormField['type'],
  }))

  return (
    <>
      <JsonLd schema={pageSEO.contact.schema!} />

      {/* Hero Section */}
      <Hero content={heroContent} />

      {/* Breadcrumbs */}
      <Section className="!py-0" noPadding>
        <Breadcrumbs />
      </Section>

      {/* Main Content */}
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl border border-border-muted bg-surface-card p-8 lg:p-10">
              <ContactForm
                description={contactContent.form.description}
                fields={formFields}
                submitText={contactContent.form.submitText}
                title={contactContent.form.title}
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-1 space-y-8 lg:order-2">
            {/* Quick Contact */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-text-primary">
                {contactContent.quickContact.title}
              </h3>
              <div className="space-y-4">
                {contactContent.quickContact.items.map((item, index) => (
                  <a
                    key={index}
                    className="group flex items-center gap-4 rounded-xl border border-border-muted bg-surface-card p-4 transition-colors hover:border-brand-yellow/30"
                    href={item.href}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow transition-colors group-hover:bg-brand-yellow group-hover:text-surface-dark">
                      {iconMap[item.icon]}
                    </div>
                    <div>
                      <span className="block text-sm text-text-muted">{item.label}</span>
                      <span className="font-medium text-text-primary">{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-text-primary">
                {contactContent.offices.title}
              </h3>
              {contactContent.offices.locations.map((office, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border-muted bg-surface-card p-6"
                >
                  <h4 className="mb-4 font-semibold text-text-primary">{office.name}</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-text-secondary">
                      <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-text-secondary">
                      <Phone className="h-5 w-5 text-brand-yellow" />
                      <a
                        className="transition-colors hover:text-brand-yellow"
                        href={`tel:${office.phone}`}
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-text-secondary">
                      <Mail className="h-5 w-5 text-brand-yellow" />
                      <a
                        className="transition-colors hover:text-brand-yellow"
                        href={`mailto:${office.email}`}
                      >
                        {office.email}
                      </a>
                    </div>
                    {office.hours && (
                      <div className="flex items-center gap-3 text-text-secondary">
                        <Clock className="h-5 w-5 text-brand-yellow" />
                        <span>{office.hours}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section dark noPadding>
        <div className="aspect-[21/9] lg:aspect-[21/6]">
          <iframe
            allowFullScreen
            className="grayscale transition-all duration-500 hover:grayscale-0"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={contactContent.map.embedUrl}
            style={{ border: 0 }}
            title="Office Location Map"
            width="100%"
          />
        </div>
      </Section>
    </>
  )
}
