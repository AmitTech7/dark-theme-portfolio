import type { Metadata } from 'next';
import { SITE } from './site';

export function truncate(text: string, max = 155): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[.,;:\s-]+$/, '') + '…';
}

interface PageMetaInput {
  title: string; // appended with " | Amit Kumar" by the layout title template
  description: string;
  path: string; // e.g. "/about"
}

// Per-page metadata with canonical + Open Graph + Twitter, resolved against metadataBase.
export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const fullTitle = `${title} | ${SITE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      locale: SITE.locale,
      title: fullTitle,
      description,
      url: path,
      images: ['/opengraph-image'],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/opengraph-image'],
    },
  };
}
