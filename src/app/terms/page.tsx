import { type Metadata } from 'next'
import { pageSEO } from '@/config/seo'
import { generatePageMetadata } from '@/lib/seo'
import { siteConfig } from '@/config/site'
import { Section, SectionHeader } from '@/components/ui'
import { Breadcrumbs } from '@/components/layout'

export const metadata: Metadata = generatePageMetadata(pageSEO.terms)

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <Section className="pb-16 pt-32">
        <Breadcrumbs />
        <SectionHeader
          title="Terms of Service"
          subtitle={`Last updated: ${new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}`}
        />
      </Section>

      {/* Content */}
      <Section className="!pt-0">
        <div className="prose prose-invert prose-lg mx-auto max-w-3xl">
          <p className="lead text-text-secondary">
            Welcome to {siteConfig.name}. By accessing and using our website and services, you agree
            to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-text-primary">1. Acceptance of Terms</h2>
          <p className="text-text-secondary">
            By accessing or using our website and services, you acknowledge that you have read,
            understood, and agree to be bound by these Terms of Service. If you do not agree with
            any part of these terms, you may not use our services.
          </p>

          <h2 className="text-text-primary">2. Services</h2>
          <p className="text-text-secondary">
            {siteConfig.name} provides architectural, engineering, and project management services
            for industrial and commercial projects. The specific scope, deliverables, and terms for
            each project will be defined in separate agreements.
          </p>

          <h2 className="text-text-primary">3. Use of Website</h2>
          <p className="text-text-secondary">
            You agree to use our website only for lawful purposes and in accordance with these
            Terms. You agree not to:
          </p>
          <ul className="text-text-secondary">
            <li>Use the website in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to any part of the website</li>
            <li>Use any automated system to access the website without our permission</li>
            <li>Transmit any viruses, malware, or harmful code</li>
          </ul>

          <h2 className="text-text-primary">4. Intellectual Property</h2>
          <p className="text-text-secondary">
            All content on this website, including text, graphics, logos, images, and software, is
            the property of {siteConfig.name} and is protected by intellectual property laws. You
            may not reproduce, distribute, or create derivative works without our written consent.
          </p>

          <h2 className="text-text-primary">5. Project Agreements</h2>
          <p className="text-text-secondary">
            Any architectural, engineering, or project management services provided by us will be
            governed by separate project agreements. These agreements will specify the scope of
            work, fees, timelines, and other relevant terms.
          </p>

          <h2 className="text-text-primary">6. Limitation of Liability</h2>
          <p className="text-text-secondary">
            To the fullest extent permitted by law, {siteConfig.name} shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising out of your
            use of our website or services.
          </p>

          <h2 className="text-text-primary">7. Indemnification</h2>
          <p className="text-text-secondary">
            You agree to indemnify and hold harmless {siteConfig.name}, its officers, directors,
            employees, and agents from any claims, damages, losses, or expenses arising from your
            use of our website or violation of these Terms.
          </p>

          <h2 className="text-text-primary">8. Third-Party Links</h2>
          <p className="text-text-secondary">
            Our website may contain links to third-party websites. We are not responsible for the
            content, privacy practices, or terms of service of these external sites.
          </p>

          <h2 className="text-text-primary">9. Modifications</h2>
          <p className="text-text-secondary">
            We reserve the right to modify these Terms of Service at any time. Changes will be
            effective immediately upon posting on this page. Your continued use of the website
            constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-text-primary">10. Governing Law</h2>
          <p className="text-text-secondary">
            These Terms shall be governed by and construed in accordance with the laws of India. Any
            disputes arising from these Terms shall be subject to the exclusive jurisdiction of the
            courts in {siteConfig.address.city}, {siteConfig.address.state}.
          </p>

          <h2 className="text-text-primary">11. Contact Information</h2>
          <p className="text-text-secondary">
            For any questions regarding these Terms of Service, please contact us at:
          </p>
          <ul className="text-text-secondary">
            <li>Email: {siteConfig.email}</li>
            <li>Phone: {siteConfig.phone}</li>
            <li>
              Address: {siteConfig.address.street}, {siteConfig.address.city},{' '}
              {siteConfig.address.state} {siteConfig.address.postalCode}
            </li>
          </ul>
        </div>
      </Section>
    </>
  )
}
