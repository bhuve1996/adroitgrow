'use client'

import { motion } from 'framer-motion'
import { type TimelineEvent } from '@/types'
import { Section, SectionHeader } from '@/components/ui'

interface TimelineProps {
  title: string
  events: TimelineEvent[]
}

export function Timeline({ title, events }: TimelineProps) {
  return (
    <Section>
      <SectionHeader title={title} />

      <div className="relative mx-auto max-w-3xl">
        {/* Vertical Line */}
        <div className="absolute bottom-0 left-8 top-0 w-0.5 bg-gradient-to-b from-brand-yellow via-border-dark to-transparent md:left-1/2" />

        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative flex items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Year Badge */}
              <div className="absolute left-8 z-10 -translate-x-1/2 transform md:left-1/2">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border-dark bg-surface-card">
                  <span className="font-bold text-brand-yellow">{event.year}</span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`w-full md:w-[calc(50%-4rem)] ${
                  index % 2 === 0
                    ? 'pl-24 md:pl-0 md:pr-8 md:text-right'
                    : 'pl-24 md:pl-8 md:text-left'
                }`}
              >
                <h3 className="mb-2 text-lg font-semibold text-text-primary">{event.title}</h3>
                <p className="text-sm text-text-secondary">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
