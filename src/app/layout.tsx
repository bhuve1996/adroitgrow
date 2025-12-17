import type { Metadata, Viewport } from 'next'
import { Inter, Syne } from 'next/font/google'
import { Header, Footer } from '@/components/layout'
import { JsonLd, getOrganizationSchema, getLocalBusinessSchema } from '@/lib/seo'
import { siteConfig } from '@/config/site'
import { defaultSEO } from '@/config/seo'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultSEO.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: defaultSEO.description,
  keywords: [...defaultSEO.keywords],
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: defaultSEO.title,
    description: defaultSEO.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultSEO.title,
    description: defaultSEO.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteConfig.url,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fd0' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1020' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <JsonLd schema={getOrganizationSchema()} />
        <JsonLd schema={getLocalBusinessSchema()} />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-20 lg:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
