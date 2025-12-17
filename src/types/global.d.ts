// Global type declarations

// Environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly NEXT_PUBLIC_SITE_URL: string
    readonly CONTACT_API_URL?: string
    readonly CONTACT_API_KEY?: string
    readonly NEXT_PUBLIC_GA_ID?: string
    readonly NEXT_PUBLIC_GTM_ID?: string
    readonly NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?: string
  }
}

// CSS Module declarations
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

// Image declarations
declare module '*.svg' {
  import type { FC, SVGProps } from 'react'
  const content: FC<SVGProps<SVGElement>>
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.gif' {
  const content: string
  export default content
}

declare module '*.webp' {
  const content: string
  export default content
}

declare module '*.ico' {
  const content: string
  export default content
}

// JSON imports with type safety
declare module '*.json' {
  const value: unknown
  export default value
}

// Window extensions
declare interface Window {
  gtag?: (
    command: 'config' | 'event' | 'js',
    targetId: string,
    config?: Record<string, unknown>
  ) => void
  dataLayer?: unknown[]
}
