'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { type Stat } from '@/types'
import { Section } from '@/components/ui'

interface StatsProps {
  stats: Stat[]
}

function AnimatedNumber({
  value,
  suffix,
  prefix,
}: {
  value: string
  suffix?: string
  prefix?: string
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const numericValue = parseInt(value, 10)

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = numericValue / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= numericValue) {
          setDisplayValue(numericValue)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
    return undefined
  }, [isInView, numericValue])

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}

export function Stats({ stats }: StatsProps) {
  return (
    <Section className="bg-surface-darker" noPadding>
      <div className="border-y border-border-muted py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="mb-2 text-4xl font-bold text-brand-yellow lg:text-5xl xl:text-6xl">
                <AnimatedNumber prefix={stat.prefix} suffix={stat.suffix} value={stat.value} />
              </div>
              <div className="text-sm uppercase tracking-wider text-text-secondary lg:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
