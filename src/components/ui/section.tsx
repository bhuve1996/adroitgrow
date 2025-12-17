import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  id?: string
  dark?: boolean
  noPadding?: boolean
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  dark = false,
  noPadding = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative',
        dark ? 'bg-surface-darker' : 'bg-surface-dark',
        !noPadding && 'py-section-md lg:py-section-lg',
        className
      )}
    >
      <div className={cn('mx-auto max-w-container px-4 sm:px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 lg:mb-16', centered && 'text-center', className)}>
      {subtitle && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand-yellow">
          {subtitle}
        </span>
      )}
      <h2 className="mb-4 font-display text-display-sm font-bold text-text-primary lg:text-display-md">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-lg text-text-secondary">{description}</p>
      )}
    </div>
  )
}
