'use client'

import { motion } from 'framer-motion'
import { type HeroContent } from '@/types'
import { Button } from '@/components/ui'

interface HeroProps {
  content: HeroContent
  variant?: 'home' | 'page'
}

export function Hero({ content, variant = 'page' }: HeroProps) {
  const { title, subtitle, description, cta, backgroundImage } = content
  const isHome = variant === 'home'

  return (
    <section
      className="relative flex min-h-[60vh] items-center lg:min-h-[80vh]"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-pattern" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(253, 208, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(253, 208, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative mx-auto max-w-container px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={isHome ? 'max-w-4xl' : 'max-w-3xl'}
        >
          {subtitle && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-yellow"
            >
              {subtitle}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`mb-6 font-display font-bold text-text-primary ${
              isHome
                ? 'text-4xl sm:text-5xl lg:text-display-lg'
                : 'text-3xl sm:text-4xl lg:text-display-md'
            }`}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8 max-w-2xl text-lg text-text-secondary lg:text-xl"
            >
              {description}
            </motion.p>
          )}

          {cta && cta.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {cta.map((button, index) => (
                <Button
                  key={index}
                  href={button.href}
                  variant={button.variant || (index === 0 ? 'primary' : 'secondary')}
                  size="lg"
                  icon={index === 0}
                >
                  {button.label}
                </Button>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Decorative Elements */}
        {isHome && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute bottom-20 right-10 hidden xl:block"
          >
            <div className="h-32 w-32 rounded-full border-2 border-brand-yellow/20" />
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-yellow/10" />
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      {isHome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-text-muted">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-yellow"
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}
