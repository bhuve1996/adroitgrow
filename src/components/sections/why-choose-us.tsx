'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader, IconCard } from '@/components/ui'
import {
  Building2,
  Award,
  TrendingDown,
  Clock,
  ShieldCheck,
  Lightbulb,
  Star,
  Shield,
  Users,
  Leaf,
  Target,
} from 'lucide-react'

interface WhyChooseUsProps {
  title: string
  subtitle?: string
  points: {
    title: string
    description: string
    icon: string
  }[]
}

const iconMap: Record<string, React.ReactNode> = {
  'building-2': <Building2 className="h-6 w-6" />,
  award: <Award className="h-6 w-6" />,
  'trending-down': <TrendingDown className="h-6 w-6" />,
  clock: <Clock className="h-6 w-6" />,
  'shield-check': <ShieldCheck className="h-6 w-6" />,
  lightbulb: <Lightbulb className="h-6 w-6" />,
  star: <Star className="h-6 w-6" />,
  shield: <Shield className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  leaf: <Leaf className="h-6 w-6" />,
  target: <Target className="h-6 w-6" />,
}

export function WhyChooseUs({ title, subtitle, points }: WhyChooseUsProps) {
  return (
    <Section dark>
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <IconCard
              title={point.title}
              description={point.description}
              icon={iconMap[point.icon] || <Star className="h-6 w-6" />}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
