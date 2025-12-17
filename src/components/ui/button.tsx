'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  icon?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const variants = {
  primary:
    'bg-brand-yellow text-surface-dark hover:bg-yellow-400 shadow-lg shadow-brand-yellow/20 hover:shadow-brand-yellow/30',
  secondary:
    'bg-surface-card text-text-primary border border-border-dark hover:bg-surface-card-hover hover:border-brand-yellow/50',
  outline:
    'bg-transparent text-brand-yellow border-2 border-brand-yellow hover:bg-brand-yellow hover:text-surface-dark',
  ghost: 'bg-transparent text-text-primary hover:bg-surface-card hover:text-brand-yellow',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled,
  loading,
  icon = false,
  type = 'button',
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:ring-offset-2 focus:ring-offset-surface-dark',
    'disabled:cursor-not-allowed disabled:opacity-50',
    variants[variant],
    sizes[size],
    className
  )

  const content = (
    <>
      {loading ? (
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        children
      )}
      {icon && !loading && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, 'group')}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(baseClasses, 'group')}
    >
      {content}
    </button>
  )
}
