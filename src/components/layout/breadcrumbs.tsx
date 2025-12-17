'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { JsonLd, getBreadcrumbSchema } from '@/lib/seo'
import { siteConfig } from '@/config/site'

function formatBreadcrumb(segment: string): string {
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function Breadcrumbs() {
  const pathname = usePathname()

  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)

  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    ...segments.map((segment, index) => ({
      name: formatBreadcrumb(segment),
      url: `${siteConfig.url}/${segments.slice(0, index + 1).join('/')}`,
    })),
  ]

  return (
    <>
      <JsonLd schema={getBreadcrumbSchema(breadcrumbs)} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center text-text-muted transition-colors hover:text-brand-yellow"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {segments.map((segment, index) => {
            const href = `/${segments.slice(0, index + 1).join('/')}`
            const isLast = index === segments.length - 1

            return (
              <li key={segment} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-text-muted" />
                {isLast ? (
                  <span className="font-medium text-brand-yellow">{formatBreadcrumb(segment)}</span>
                ) : (
                  <Link
                    href={href}
                    className="text-text-muted transition-colors hover:text-brand-yellow"
                  >
                    {formatBreadcrumb(segment)}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
