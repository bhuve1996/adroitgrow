'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { type Testimonial } from '@/types'
import { Section, SectionHeader } from '@/components/ui'
import { cn, getInitials } from '@/lib/utils'

interface TestimonialsProps {
  title: string
  testimonials: Testimonial[]
}

export function Testimonials({ title, testimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const testimonial = testimonials[current]

  return (
    <Section dark>
      <SectionHeader title={title} />

      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-3xl border border-border-muted bg-surface-card p-8 lg:p-12">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow">
              <Quote className="h-6 w-6 text-surface-dark" />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote className="mb-8 text-lg leading-relaxed text-text-primary lg:text-xl">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                {testimonial.image ? (
                  <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow/20 font-semibold text-brand-yellow">
                    {getInitials(testimonial.name)}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-text-primary">{testimonial.name}</div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {testimonials.length > 1 && (
            <div className="mt-8 flex items-center justify-between border-t border-border-muted pt-8">
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={cn(
                      'h-2 w-2 rounded-full transition-all',
                      index === current
                        ? 'w-8 bg-brand-yellow'
                        : 'bg-border-dark hover:bg-border-muted'
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-dark text-text-muted transition-colors hover:border-brand-yellow hover:text-brand-yellow"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-dark text-text-muted transition-colors hover:border-brand-yellow hover:text-brand-yellow"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
