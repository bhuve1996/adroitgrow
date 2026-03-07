'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, Mail, Linkedin } from 'lucide-react'
import { type TeamMember } from '@/types'

interface TeamMemberModalProps {
  member: TeamMember | null
  onClose: () => void
}

export function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  useEffect(() => {
    if (!member) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [member, onClose])

  if (!member) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-member-name"
    >
      <div
        className="absolute inset-0 bg-surface-dark/90 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Enter' && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-hidden rounded-2xl border border-border-muted bg-surface-card shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-text-muted transition-colors hover:bg-surface-darker hover:text-text-primary"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative aspect-[3/2] w-full overflow-hidden sm:aspect-[2/1]">
          <Image
            src={member.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 512px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/20 to-transparent" />
        </div>
        <div className="p-6 sm:p-8">
          <h2 id="team-member-name" className="text-2xl font-bold text-text-primary">
            {member.name}
          </h2>
          <p className="mt-1 text-brand-yellow">{member.role}</p>
          <div className="mt-4 space-y-3 text-text-secondary">
            {member.bio.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-brand-yellow"
              >
                <Mail className="h-4 w-4" />
                {member.email}
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-brand-yellow"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
