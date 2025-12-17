'use client'

import { motion } from 'framer-motion'
import { type CTAButton } from '@/types'
import { Section, Button } from '@/components/ui'

interface CTASectionProps {
  title: string
  description?: string
  cta: CTAButton
}

export function CTASection({ title, description, cta }: CTASectionProps) {
  return (
    <Section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 via-transparent to-brand-yellow/10" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(253, 208, 0, 0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <h2 className="mb-4 font-display text-3xl font-bold text-text-primary lg:text-display-sm">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mb-8 max-w-2xl text-lg text-text-secondary">{description}</p>
        )}
        <Button href={cta.href} variant={cta.variant || 'primary'} size="lg" icon>
          {cta.label}
        </Button>
      </motion.div>
    </Section>
  )
}
