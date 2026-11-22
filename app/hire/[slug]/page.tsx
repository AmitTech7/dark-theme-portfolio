import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '../../../components/PageHeader';
import { getHirePage, hirePages } from '../../../data/hire';
import { portfolioData } from '../../../data/portfolio';
import { pageMetadata } from '../../../lib/seo';

export function generateStaticParams() {
  return hirePages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = getHirePage(params.slug);
  if (!page) return {};
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/hire/${page.slug}`,
  });
}

export default function HirePage({ params }: { params: { slug: string } }) {
  const page = getHirePage(params.slug);
  if (!page) notFound();

  const projects = portfolioData.projects.filter((p) => page.projectSlugs.includes(p.slug));
  const related = hirePages.filter((p) => page.relatedHire.includes(p.slug));

  return (
    <>
      <PageHeader
        title={page.h1}
        intro={page.intro}
        crumbs={[
          { name: 'Hire', href: '/hire' },
          { name: page.navLabel, href: `/hire/${page.slug}` },
        ]}
      />
      <div className="pb-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-white mb-4">{section.heading}</h2>
              <ul className="space-y-3 text-gray-300">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <span className="text-cyan-400 mr-3">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Core skills</h2>
            <ul className="flex flex-wrap gap-2">
              {page.skills.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-600"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Relevant work</h2>
            <ul className="space-y-3">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-cyan-400 hover:underline font-medium"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Availability</h2>
            <p className="text-gray-300 leading-relaxed">
              Based in Chandigarh, India. I am open to full-time senior roles, working remotely or
              on-site anywhere in India. You can also{' '}
              <a href="/resume.pdf" className="text-cyan-400 hover:underline">
                download my resume
              </a>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Contact Amit
              </Link>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/hire/${r.slug}`}
                  className="inline-flex px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-200"
                >
                  Hire a {r.navLabel}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
