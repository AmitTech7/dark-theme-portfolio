import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { SITE, SITE_URL } from '../lib/site';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE.defaultTitle, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: `${SITE.name} - Portfolio`,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: SITE.locale,
    title: SITE.defaultTitle,
    description: SITE.description,
    url: '/',
  },
  twitter: { card: 'summary_large_image', title: SITE.defaultTitle, description: SITE.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-900 min-h-screen">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
