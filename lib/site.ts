// Single source of truth for SEO. When a custom domain is added, set
// NEXT_PUBLIC_SITE_URL in Vercel (no code change needed) and add 301 redirects.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://amit-portfolio-dark-theme.vercel.app'
).replace(/\/$/, '');

export const SITE = {
  name: 'Amit Kumar',
  jobTitle: 'Senior Team Lead - React JS / Senior Frontend Engineer',
  defaultTitle: 'Amit Kumar | Senior Frontend Engineer - React, Next.js, TypeScript',
  description:
    'Senior Frontend Engineer and React team lead with 5+ years in React, Next.js and TypeScript. Open to full-time roles, remote or on-site across India.',
  locale: 'en_IN',
  // Only profiles confirmed from the resume. Add GitHub/X here once verified.
  sameAs: ['https://linkedin.com/in/amitkumar'],
  // Bump when page content changes materially (used for sitemap / ProfilePage).
  lastUpdated: '2026-11-22',
};

export const HIRE_LINKS = [
  { slug: 'react-developer', label: 'React Developer' },
  { slug: 'nextjs-developer', label: 'Next.js Developer' },
  { slug: 'frontend-developer', label: 'Frontend Developer' },
];
