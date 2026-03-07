'use client'

import { useState } from 'react'
import { type TeamMember } from '@/types'
import { Section, SectionHeader, TeamCard } from '@/components/ui'
import { TeamGraph } from './team-graph'
import { TeamMemberModal } from './team-member-modal'

interface AboutTeamSectionProps {
  leadershipTitle: string
  leadershipSubtitle: string
  teamGraphTitle: string
  teamGraphSubtitle: string
  members: TeamMember[]
}

export function AboutTeamSection({
  leadershipTitle,
  leadershipSubtitle,
  teamGraphTitle,
  teamGraphSubtitle,
  members,
}: AboutTeamSectionProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const leadershipOnly = members.filter((m) => m.level === 0)

  return (
    <>
      <Section id="leadership">
        <SectionHeader title={leadershipTitle} subtitle={leadershipSubtitle} />
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {leadershipOnly.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              onViewProfile={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </Section>

      <TeamGraph
        title={teamGraphTitle}
        subtitle={teamGraphSubtitle}
        members={members}
        onMemberClick={(member) => setSelectedMember(member)}
      />

      <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </>
  )
}
