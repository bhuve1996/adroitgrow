import { type SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'AdroitGrow Private Limited',
  shortName: 'AdroitGrow',
  description:
    'Progressive Architectural and Engineering firm specializing in Industrial design, Project Management & Corporate Interiors. Single window one-stop solution with emphasis on cost control & value additions.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adroitgrow.com',
  ogImage: '/images/og-image.jpg',
  founder: 'Manish Bhatnagar',
  foundedYear: 2019,
  email: 'info@adroitgrow.com',
  phone: '+91 98765 43210',
  address: {
    street: 'Sector 15 Part-II, Basement',
    city: 'Gurugram',
    state: 'Haryana',
    postalCode: '122001',
    country: 'India',
    countryCode: 'IN',
  },
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/adroitgrow',
    twitter: 'https://twitter.com/adroitgrow',
    facebook: 'https://facebook.com/adroitgrow',
    instagram: 'https://instagram.com/adroitgrow',
  },
}

// Company statistics - easily updateable
export const companyStats = {
  yearsExperience: 20,
  projectsCompleted: 100,
  clientsServed: 50,
  statesOperated: 10,
}

// Industries served
export const industries = [
  'Industrial Manufacturing',
  'Automotive',
  'Pharmaceuticals',
  'Food & Beverage',
  'Specialty Gases',
  'Corporate Offices',
  'Warehousing & Logistics',
  'Commercial Retail',
]

// Key differentiators
export const differentiators = [
  {
    title: 'Single Window Solution',
    description: 'End-to-end project delivery from concept to completion',
    icon: 'building',
  },
  {
    title: '20+ Years Expertise',
    description: 'Two decades of industrial and commercial project experience',
    icon: 'award',
  },
  {
    title: 'Cost Optimization',
    description: 'Value engineering and cost-effective solutions',
    icon: 'trending-down',
  },
  {
    title: 'On-Time Delivery',
    description: 'Committed timelines with efficient project management',
    icon: 'clock',
  },
]
