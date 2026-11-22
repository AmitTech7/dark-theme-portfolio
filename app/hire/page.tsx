import Link from 'next/link';
import PageHeader from '../../components/PageHeader';
import { hirePages } from '../../data/hire';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata({
  title: 'Hire a React, Next.js & Frontend Developer',
  description:
    'Hire a senior React, Next.js or frontend developer. Amit Kumar is open to full-time roles, remote or on-site across India.',
  path: '/hire',
});

export default function HireIndexPage() {
  return (
    <>
      <PageHeader
        title="Hire Amit Kumar"
        intro="Open to full-time senior roles, remote or on-site across India. Choose the role you are hiring for."
        crumbs={[{ name: 'Hire', href: '/hire' }]}
      />
      <section className="pb-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {hirePages.map((page) => (
            <Link
              key={page.slug}
              href={`/hire/${page.slug}`}
              className="block bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-colors"
            >
              <h2 className="text-xl font-semibold text-white mb-2">Hire a {page.navLabel}</h2>
              <p className="text-gray-300 text-sm leading-relaxed">{page.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
