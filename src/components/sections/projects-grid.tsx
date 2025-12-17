'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { type ProjectItem } from '@/types'
import { Section, SectionHeader, ProjectCard, Button } from '@/components/ui'
import { cn } from '@/lib/utils'

interface ProjectsGridProps {
  title?: string
  subtitle?: string
  projects: ProjectItem[]
  filters?: {
    industries: string[]
    locations: string[]
    services: string[]
  }
  showFilters?: boolean
  limit?: number
  showViewAll?: boolean
}

export function ProjectsGrid({
  title,
  subtitle,
  projects,
  showFilters = false,
  limit,
  showViewAll = false,
}: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState('All')

  const allCategories = ['All', ...new Set(projects.map((p) => p.category))]

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects

  return (
    <Section>
      {title && <SectionHeader subtitle={subtitle} title={title} />}

      {/* Filters */}
      {showFilters && (
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {allCategories.map((category) => (
            <button
              key={category}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all',
                activeFilter === category
                  ? 'bg-brand-yellow text-surface-dark'
                  : 'border border-border-dark bg-surface-card text-text-secondary hover:border-brand-yellow/50 hover:text-brand-yellow'
              )}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" layout>
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.9 }}
              layout
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <ProjectCard
                category={project.category}
                href={`/projects/${project.slug}`}
                image={project.image}
                location={project.location}
                title={project.title}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View All Button */}
      {showViewAll && filteredProjects.length > (limit || 0) && (
        <div className="mt-12 text-center">
          <Button href="/projects" icon variant="outline">
            View All Projects
          </Button>
        </div>
      )}
    </Section>
  )
}
