'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { type FormField } from '@/types'
import { Section, Button, Input, Textarea, Select } from '@/components/ui'

interface ContactFormProps {
  title: string
  description?: string
  fields: FormField[]
  submitText: string
}

export function ContactForm({ title, description, fields, submitText }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({})
    }, 3000)
  }

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (isSubmitted) {
    return (
      <Section>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto max-w-xl py-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          <h3 className="mb-3 text-2xl font-bold text-text-primary">Message Sent!</h3>
          <p className="text-text-secondary">
            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>
      </Section>
    )
  }

  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-text-primary lg:text-3xl">{title}</h2>
          {description && <p className="text-text-secondary">{description}</p>}
        </div>

        <motion.form
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {fields.map((field) => {
              if (field.type === 'textarea') {
                return null
              }
              if (field.type === 'select') {
                return (
                  <Select
                    key={field.name}
                    label={field.label}
                    options={field.options || []}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.name] || ''}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                )
              }
              return (
                <Input
                  key={field.name}
                  label={field.label}
                  placeholder={field.placeholder}
                  required={field.required}
                  type={field.type}
                  value={formData[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
              )
            })}
          </div>

          {fields
            .filter((f) => f.type === 'textarea')
            .map((field) => (
              <Textarea
                key={field.name}
                label={field.label}
                placeholder={field.placeholder}
                required={field.required}
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            ))}

          <Button className="w-full md:w-auto" loading={isSubmitting} type="submit">
            <Send className="h-4 w-4" />
            {submitText}
          </Button>
        </motion.form>
      </div>
    </Section>
  )
}
