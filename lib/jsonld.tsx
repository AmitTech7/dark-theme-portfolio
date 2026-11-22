import { SITE, SITE_URL } from './site';

// Structured data must match what is visible on the page. Phone/email are
// deliberately omitted to avoid scraping.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

export const personNode = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: SITE.name,
  jobTitle: SITE.jobTitle,
  url: SITE_URL,
  sameAs: SITE.sameAs,
  address: { '@type': 'PostalAddress', addressLocality: 'Chandigarh', addressCountry: 'IN' },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'T.R. Abhilashi Memorial Institute of Engineering & Technology',
  },
  knowsAbout: [
    'React.js',
    'Next.js',
    'TypeScript',
    'Redux Toolkit',
    'TanStack Query',
    'Tailwind CSS',
    'Zustand',
    'Jest',
    'React Testing Library',
  ],
};

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personNode,
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${SITE.name} - Portfolio`,
        inLanguage: 'en',
        publisher: { '@id': `${SITE_URL}/#person` },
      },
    ],
  };
}

export function profilePageJsonLd(path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: `${SITE_URL}${path}`,
    dateModified: SITE.lastUpdated,
    mainEntity: personNode,
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}
