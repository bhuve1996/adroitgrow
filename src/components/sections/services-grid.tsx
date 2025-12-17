'use client'

import { motion } from 'framer-motion'
import { type ServiceItem } from '@/types'
import { Section, SectionHeader, ServiceCard } from '@/components/ui'
import { Factory, ClipboardList, Layout, Home } from 'lucide-react'

interface ServicesGridProps {
  title: string
  subtitle?: string
  services: Pick<ServiceItem, 'title' | 'shortDescription' | 'slug' | 'icon'>[]
}

const iconMap: Record<string, React.ReactNode> = {
  factory: <Factory className="h-6 w-6" />,
  'clipboard-list': <ClipboardList className="h-6 w-6" />,
  layout: <Layout className="h-6 w-6" />,
  home: <Home className="h-6 w-6" />,
}

export function ServicesGrid({ title, subtitle, services }: ServicesGridProps) {
  return (
    <Section>
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              title={service.title}
              description={service.shortDescription}
              icon={iconMap[service.icon] || <Factory className="h-6 w-6" />}
              href={`/services/${service.slug}`}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
