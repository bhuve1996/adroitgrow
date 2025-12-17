import { type Metadata } from 'next'
import { pageSEO } from '@/config/seo'
import { generatePageMetadata } from '@/lib/seo'
import { siteConfig } from '@/config/site'
import { Section, SectionHeader } from '@/components/ui'
import { Breadcrumbs } from '@/components/layout'

export const metadata: Metadata = generatePageMetadata(pageSEO.privacy)

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <Section className="pb-16 pt-32">
        <Breadcrumbs />
        <SectionHeader
          title="Privacy Policy"
          subtitle={`Last updated: ${new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}`}
        />
      </Section>

      {/* Content */}
      <Section className="!pt-0">
        <div className="prose prose-invert prose-lg mx-auto max-w-3xl">
          <p className="lead text-text-secondary">
            At {siteConfig.name}, we are committed to protecting your privacy and ensuring the
            security of your personal information. This Privacy Policy explains how we collect, use,
            and safeguard your data when you visit our website or use our services.
          </p>

          <h2 className="text-text-primary">Information We Collect</h2>
          <p className="text-text-secondary">We may collect the following types of information:</p>
          <ul className="text-text-secondary">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and company
              name when you contact us or submit an inquiry.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with our website,
              including pages visited, time spent, and navigation patterns.
            </li>
            <li>
              <strong>Device Information:</strong> Browser type, operating system, and IP address
              for analytics and security purposes.
            </li>
          </ul>

          <h2 className="text-text-primary">How We Use Your Information</h2>
          <p className="text-text-secondary">We use the collected information to:</p>
          <ul className="text-text-secondary">
            <li>Respond to your inquiries and provide requested services</li>
            <li>Improve our website and user experience</li>
            <li>Send relevant communications about our services (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-text-primary">Information Sharing</h2>
          <p className="text-text-secondary">
            We do not sell, trade, or rent your personal information to third parties. We may share
            information with trusted service providers who assist us in operating our website,
            conducting our business, or servicing you, as long as they agree to keep this
            information confidential.
          </p>

          <h2 className="text-text-primary">Data Security</h2>
          <p className="text-text-secondary">
            We implement appropriate security measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction. However, no method of
            transmission over the internet is 100% secure.
          </p>

          <h2 className="text-text-primary">Cookies</h2>
          <p className="text-text-secondary">
            Our website may use cookies to enhance your browsing experience. You can choose to
            disable cookies through your browser settings, though this may affect some features of
            our website.
          </p>

          <h2 className="text-text-primary">Your Rights</h2>
          <p className="text-text-secondary">You have the right to:</p>
          <ul className="text-text-secondary">
            <li>Access your personal data we hold</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2 className="text-text-primary">Contact Us</h2>
          <p className="text-text-secondary">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul className="text-text-secondary">
            <li>Email: {siteConfig.email}</li>
            <li>Phone: {siteConfig.phone}</li>
            <li>
              Address: {siteConfig.address.street}, {siteConfig.address.city},{' '}
              {siteConfig.address.state} {siteConfig.address.postalCode}
            </li>
          </ul>

          <h2 className="text-text-primary">Changes to This Policy</h2>
          <p className="text-text-secondary">
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot;
            date.
          </p>
        </div>
      </Section>
    </>
  )
}
