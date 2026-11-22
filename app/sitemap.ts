import type { MetadataRoute } from 'next';
import { SITE, SITE_URL } from '../lib/site';
import { portfolioData } from '../data/portfolio';
import { hirePages } from '../data/hire';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.lastUpdated);
  const staticRoutes = [
    { path: '', priority: 1 },
    { path: '/about', priority: 0.9 },
    { path: '/hire', priority: 0.9 },
    { path: '/projects', priority: 0.8 },
    { path: '/skills', priority: 0.7 },
    { path: '/experience', priority: 0.7 },
    { path: '/live-projects', priority: 0.6 },
    { path: '/contact', priority: 0.6 },
  ];

  return [
    ...staticRoutes.map((r) => ({ url: `${SITE_URL}${r.path}`, lastModified, priority: r.priority })),
    ...hirePages.map((p) => ({ url: `${SITE_URL}/hire/${p.slug}`, lastModified, priority: 0.9 })),
    ...portfolioData.projects.map((p) => ({
      url: `${SITE_URL}/projects/${p.slug}`,
      lastModified,
      priority: 0.7,
    })),
  ];
}
