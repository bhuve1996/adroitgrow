'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { type TeamMember } from '@/types'
import { Section, SectionHeader } from '@/components/ui'

interface TeamGraphProps {
  title: string
  subtitle?: string
  members: TeamMember[]
  onMemberClick?: (member: TeamMember) => void
}

function buildTree(members: TeamMember[]) {
  const byLevel = new Map<number, TeamMember[]>()
  const childrenOf = new Map<string, TeamMember[]>()
  for (const m of members) {
    const level = m.level ?? (m.reportsTo ? 1 : 0)
    const levelList = byLevel.get(level) ?? []
    if (!byLevel.has(level)) byLevel.set(level, levelList)
    levelList.push(m)
    if (m.reportsTo) {
      const children = childrenOf.get(m.reportsTo) ?? []
      if (!childrenOf.has(m.reportsTo)) childrenOf.set(m.reportsTo, children)
      children.push(m)
    }
  }
  const levels = Array.from(byLevel.keys()).sort((a, b) => a - b)
  return { byLevel, childrenOf, levels }
}

export function TeamGraph({ title, subtitle, members, onMemberClick }: TeamGraphProps) {
  if (!members.length) return null

  const { byLevel, childrenOf, levels } = buildTree(members)

  return (
    <Section id="team-graph" dark>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="mx-auto max-w-4xl">
        {levels.map((level, levelIndex) => (
          <motion.div
            key={level}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: levelIndex * 0.1 }}
            className="flex flex-wrap justify-center gap-6 gap-y-10 pb-10 last:pb-0 md:gap-8 lg:gap-12"
            style={{
              position: 'relative',
            }}
          >
            {(byLevel.get(level) ?? []).map((member) => (
              <TeamGraphNode
                key={member.id}
                member={member}
                hasChildren={!!childrenOf.get(member.id)?.length}
                childCount={childrenOf.get(member.id)?.length ?? 0}
                onMemberClick={onMemberClick}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function TeamGraphNode({
  member,
  hasChildren,
  onMemberClick,
}: {
  member: TeamMember
  hasChildren: boolean
  childCount: number
  onMemberClick?: (member: TeamMember) => void
}) {
  const content = (
    <>
      <div className="relative mb-3 h-24 w-24 overflow-hidden rounded-full border-2 border-brand-yellow/30 ring-2 ring-surface-darker transition-all duration-300 group-hover:border-brand-yellow group-hover:ring-brand-yellow/20 md:h-28 md:w-28">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 96px, 112px"
        />
      </div>
      <h3 className="text-base font-semibold text-text-primary md:text-lg">{member.name}</h3>
      <p className="mt-0.5 max-w-[180px] text-xs font-medium text-brand-yellow md:text-sm">
        {member.role}
      </p>
      {onMemberClick && <span className="mt-1 text-xs text-text-muted">View full profile</span>}
    </>
  )

  return (
    <motion.div whileHover={{ scale: 1.02 }} className="relative flex flex-col items-center">
      {onMemberClick ? (
        <button
          type="button"
          onClick={() => onMemberClick(member)}
          className="group flex flex-col items-center text-center"
        >
          {content}
        </button>
      ) : member.linkedin ? (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center text-center"
        >
          {content}
        </a>
      ) : (
        <div className="group flex flex-col items-center text-center">{content}</div>
      )}
      {hasChildren && (
        <div
          className="absolute -bottom-5 left-1/2 h-4 w-px -translate-x-1/2 bg-gradient-to-b from-brand-yellow/40 to-transparent"
          aria-hidden
        />
      )}
    </motion.div>
  )
}
