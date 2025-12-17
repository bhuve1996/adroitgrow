'use client'

import { motion } from 'framer-motion'
import { type ProcessStep } from '@/types'
import { Section, SectionHeader } from '@/components/ui'
import { MessageCircle, Ruler, Hammer, CheckCircle } from 'lucide-react'

interface ProcessStepsProps {
  title: string
  subtitle?: string
  steps: ProcessStep[]
}

const iconMap: Record<string, React.ReactNode> = {
  'message-circle': <MessageCircle className="h-6 w-6" />,
  'pencil-ruler': <Ruler className="h-6 w-6" />,
  hammer: <Hammer className="h-6 w-6" />,
  'check-circle': <CheckCircle className="h-6 w-6" />,
}

export function ProcessSteps({ title, subtitle, steps }: ProcessStepsProps) {
  return (
    <Section>
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute left-0 right-0 top-24 hidden h-0.5 bg-gradient-to-r from-transparent via-border-dark to-transparent lg:block" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {/* Step Number & Icon */}
              <div className="relative mb-6 inline-flex flex-col items-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-border-dark bg-surface-card text-brand-yellow transition-colors group-hover:bg-brand-yellow group-hover:text-surface-dark">
                  {step.icon && iconMap[step.icon] ? (
                    iconMap[step.icon]
                  ) : (
                    <span className="text-2xl font-bold">{step.step}</span>
                  )}
                </div>
                <div className="absolute -bottom-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold text-surface-dark">
                  {step.step}
                </div>
              </div>

              <h3 className="mb-2 mt-4 text-lg font-semibold text-text-primary">{step.title}</h3>
              <p className="text-sm text-text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
