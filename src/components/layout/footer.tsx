import Link from 'next/link'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUpRight,
} from 'lucide-react'
import { siteConfig } from '@/config/site'
import { footerNavigation } from '@/config/navigation'
import { Button } from '@/components/ui'

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-muted bg-surface-darker">
      {/* Main Footer */}
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow">
                <span className="text-2xl font-bold text-surface-dark">A</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-text-primary">
                  {siteConfig.shortName}
                </span>
                <span className="block text-xs text-text-muted">Architecture & Engineering</span>
              </div>
            </Link>
            <p className="mb-6 max-w-sm text-text-secondary">{siteConfig.description}</p>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-text-secondary transition-colors hover:text-brand-yellow"
              >
                <Mail className="h-5 w-5" />
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-text-secondary transition-colors hover:text-brand-yellow"
              >
                <Phone className="h-5 w-5" />
                <span>{siteConfig.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-text-secondary">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state}{' '}
                  {siteConfig.address.postalCode}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {footerNavigation.slice(0, 3).map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold text-text-primary">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-text-secondary transition-colors hover:text-brand-yellow"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 -translate-y-1 translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter / CTA Section */}
        <div className="mt-16 border-t border-border-muted pt-12">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-text-primary">
                Ready to Start Your Project?
              </h3>
              <p className="text-text-secondary">Get in touch for a free consultation and quote.</p>
            </div>
            <Button href="/contact" icon>
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-muted">
        <div className="mx-auto max-w-container px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-text-muted">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {Object.entries(siteConfig.socialLinks).map(([platform, url]) => {
                if (!url) return null
                const Icon = socialIcons[platform as keyof typeof socialIcons]
                if (!Icon) return null
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-dark bg-surface-card text-text-muted transition-colors hover:border-brand-yellow/50 hover:text-brand-yellow"
                    aria-label={`Follow us on ${platform}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
