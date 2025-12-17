import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface CardProps {
  children: React.ReactNode
  className?: string
  href?: string
  hover?: boolean
}

export function Card({ children, className, href, hover = true }: CardProps) {
  const baseClasses = cn(
    'overflow-hidden rounded-2xl border border-border-muted bg-surface-card',
    hover &&
      'transition-all duration-300 hover:border-brand-yellow/30 hover:shadow-xl hover:shadow-brand-yellow/5',
    className
  )

  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, 'group block')}>
        {children}
      </Link>
    )
  }

  return <div className={baseClasses}>{children}</div>
}

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Card href={href} className="p-6 lg:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-yellow/10 text-brand-yellow transition-colors duration-300 group-hover:bg-brand-yellow group-hover:text-surface-dark">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="mb-2 text-lg font-semibold text-text-primary transition-colors group-hover:text-brand-yellow">
            {title}
          </h3>
          <p className="line-clamp-2 text-sm text-text-secondary">{description}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 text-text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-yellow" />
      </div>
    </Card>
  )
}

interface ProjectCardProps {
  title: string
  location: string
  category: string
  image: string
  href: string
}

export function ProjectCard({ title, location, category, image, href }: ProjectCardProps) {
  return (
    <Card href={href} className="overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-brand-yellow px-3 py-1 text-xs font-semibold text-surface-dark">
          {category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="mb-1 line-clamp-1 text-lg font-semibold text-text-primary transition-colors group-hover:text-brand-yellow">
          {title}
        </h3>
        <p className="text-sm text-text-secondary">{location}</p>
      </div>
    </Card>
  )
}

interface StatCardProps {
  value: string
  label: string
  prefix?: string
  suffix?: string
}

export function StatCard({ value, label, prefix, suffix }: StatCardProps) {
  return (
    <div className="p-6 text-center">
      <div className="mb-2 text-4xl font-bold text-brand-yellow lg:text-5xl">
        {prefix}
        {value}
        {suffix}
      </div>
      <div className="text-sm uppercase tracking-wider text-text-secondary">{label}</div>
    </div>
  )
}

interface TeamCardProps {
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
}

export function TeamCard({ name, role, bio, image, linkedin }: TeamCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="mb-1 text-xl font-semibold text-text-primary">{name}</h3>
        <p className="mb-3 text-sm font-medium text-brand-yellow">{role}</p>
        <p className="line-clamp-3 text-sm text-text-secondary">{bio}</p>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-brand-yellow"
          >
            Connect on LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </Card>
  )
}

interface IconCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export function IconCard({ title, description, icon }: IconCardProps) {
  return (
    <div className="group rounded-2xl border border-border-muted bg-surface-card p-6 transition-all duration-300 hover:border-brand-yellow/30">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-yellow/10 text-brand-yellow transition-colors duration-300 group-hover:bg-brand-yellow group-hover:text-surface-dark">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-text-primary">{title}</h3>
      <p className="text-sm text-text-secondary">{description}</p>
    </div>
  )
}
