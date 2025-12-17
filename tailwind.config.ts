import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        brand: {
          yellow: '#fd0',
          dark: '#0b1020',
          overlay: 'rgba(17, 20, 23, 0.63)',
          'overlay-mobile': 'rgba(17, 20, 23, 0.85)',
        },
        // Text colors
        text: {
          primary: '#ffffff',
          secondary: '#4b5563',
          muted: '#9ca3af',
          accent: '#fd0',
        },
        // Background colors
        surface: {
          dark: '#0b1020',
          darker: '#070a14',
          card: '#111827',
          'card-hover': '#1f2937',
        },
        // Border colors
        border: {
          DEFAULT: '#e5e7eb',
          dark: '#374151',
          muted: '#1f2937',
        },
      },
      maxWidth: {
        container: '1408px',
      },
      spacing: {
        'section-lg': '96px',
        'section-md': '64px',
        'section-sm': '48px',
        'gap-lg': '48px',
        'gap-md': '24px',
        'gap-sm': '16px',
        'header-offset': '88px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        counter: 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern':
          'linear-gradient(135deg, rgba(11, 16, 32, 0.95) 0%, rgba(11, 16, 32, 0.8) 100%)',
      },
    },
  },
  plugins: [],
}

export default config
