'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { mainNavigation, ctaButtons } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border-muted bg-surface-dark/95 shadow-lg backdrop-blur-lg'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-10 w-10 lg:h-12 lg:w-12">
              <Image
                src="/images/logo.svg"
                alt={siteConfig.shortName}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="block text-lg font-bold tracking-tight text-text-primary lg:text-xl">
                {siteConfig.shortName}
              </span>
              <span className="-mt-0.5 block text-xs text-text-muted">
                Architecture & Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {mainNavigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                    isActive(item.href)
                      ? 'text-brand-yellow'
                      : 'text-text-primary hover:bg-surface-card hover:text-brand-yellow'
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        activeDropdown === item.href && 'rotate-180'
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 w-72 overflow-hidden rounded-xl border border-border-dark bg-surface-card shadow-xl"
                      >
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group block rounded-lg px-4 py-3 transition-colors hover:bg-surface-card-hover"
                            >
                              <span className="block text-sm font-medium text-text-primary group-hover:text-brand-yellow">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="mt-0.5 block text-xs text-text-muted">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-text-secondary transition-colors hover:text-brand-yellow"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">{siteConfig.phone}</span>
            </a>
            <Button href={ctaButtons.primary.href} size="sm">
              {ctaButtons.primary.label}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text-primary transition-colors hover:text-brand-yellow lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border-muted bg-surface-dark lg:hidden"
          >
            <div className="mx-auto max-w-container space-y-2 px-4 py-6">
              {mainNavigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                      isActive(item.href)
                        ? 'bg-surface-card text-brand-yellow'
                        : 'text-text-primary hover:bg-surface-card hover:text-brand-yellow'
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-text-secondary transition-colors hover:text-brand-yellow"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-border-dark pt-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 px-4 py-3 text-text-secondary"
                >
                  <Phone className="h-4 w-4" />
                  <span>{siteConfig.phone}</span>
                </a>
                <Button href={ctaButtons.primary.href} className="mt-2 w-full">
                  {ctaButtons.primary.label}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
