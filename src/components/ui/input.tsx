'use client'

import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type = 'text', ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-text-primary">
            {label}
            {props.required && <span className="ml-1 text-red-400">*</span>}
          </label>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            'w-full rounded-lg border border-border-dark bg-surface-card px-4 py-3',
            'text-text-primary placeholder:text-text-muted',
            'focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/50',
            'transition-all duration-200',
            error && 'border-red-400 focus:ring-red-400/50',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-text-primary">
            {label}
            {props.required && <span className="ml-1 text-red-400">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full rounded-lg border border-border-dark bg-surface-card px-4 py-3',
            'text-text-primary placeholder:text-text-muted',
            'focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/50',
            'min-h-[120px] resize-none transition-all duration-200',
            error && 'border-red-400 focus:ring-red-400/50',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: string[]
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, placeholder, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-text-primary">
            {label}
            {props.required && <span className="ml-1 text-red-400">*</span>}
          </label>
        )}
        <select
          ref={ref}
          className={cn(
            'w-full rounded-lg border border-border-dark bg-surface-card px-4 py-3',
            'text-text-primary',
            'focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/50',
            'transition-all duration-200',
            error && 'border-red-400 focus:ring-red-400/50',
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" className="text-text-muted">
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'
