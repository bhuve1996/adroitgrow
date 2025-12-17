import { type NavItem, type FooterSection } from '@/types'

export const mainNavigation: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
    description: 'Learn about our company, vision, and leadership',
  },
  {
    label: 'Services',
    href: '/services',
    description: 'Explore our comprehensive service offerings',
    children: [
      {
        label: 'Industrial Architecture & Engineering',
        href: '/services/industrial-architectural-engineering-design',
        description: 'Complete industrial design solutions',
      },
      {
        label: 'Project Management',
        href: '/services/project-management',
        description: 'End-to-end project coordination',
      },
      {
        label: 'Interior Design',
        href: '/services/interior-design',
        description: 'Corporate interior solutions',
      },
      {
        label: 'Design-Build',
        href: '/services/design-build',
        description: 'Turnkey project delivery',
      },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    description: 'View our portfolio of completed projects',
  },
  {
    label: 'Careers',
    href: '/careers',
    description: 'Join our team',
  },
  {
    label: 'Contact',
    href: '/contact',
    description: 'Get in touch with us',
  },
]

export const footerNavigation: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about#leadership' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Industrial Design', href: '/services/industrial-architectural-engineering-design' },
      { label: 'Project Management', href: '/services/project-management' },
      { label: 'Interior Design', href: '/services/interior-design' },
      { label: 'Design-Build', href: '/services/design-build' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Manufacturing', href: '/projects?industry=manufacturing' },
      { label: 'Automotive', href: '/projects?industry=automotive' },
      { label: 'Pharmaceuticals', href: '/projects?industry=pharmaceuticals' },
      { label: 'Corporate', href: '/projects?industry=corporate' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

// CTA buttons configuration
export const ctaButtons = {
  primary: {
    label: 'Get a Quote',
    href: '/contact',
  },
  secondary: {
    label: 'View Projects',
    href: '/projects',
  },
  phone: {
    label: 'Call Us',
    href: 'tel:+919876543210',
  },
}
