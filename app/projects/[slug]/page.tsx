import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '../../../components/PageHeader';
import { portfolioData } from '../../../data/portfolio';
import { hirePages } from '../../../data/hire';
import { pageMetadata, truncate } from '../../../lib/seo';

const projects = portfolioData.projects;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.shortTitle ?? project.title} - Case Study`,
    description: truncate(project.description),
    path: `/projects/${project.slug}`,
  });
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const related = hirePages.filter((h) => h.projectSlugs.includes(project.slug));

  return (
    <>
      <PageHeader
        title={project.title}
        intro={project.description}
        crumbs={[
          { name: 'Projects', href: '/projects' },
          { name: project.title, href: `/projects/${project.slug}` },
        ]}
      />
      <article className="pb-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Technologies</h2>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-600"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </section>

          {project.highlights && (
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">What I built</h2>
              <ul className="space-y-3 text-gray-300">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-cyan-400 mr-3">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Related</h2>
            <ul className="space-y-2">
              {related.map((h) => (
                <li key={h.slug}>
                  <Link href={`/hire/${h.slug}`} className="text-cyan-400 hover:underline">
                    Hire a {h.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/projects" className="text-cyan-400 hover:underline">
                  All projects
                </Link>
              </li>
            </ul>
          </section>

          <Link
            href="/contact"
            className="inline-flex px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
          >
            Discuss a role with Amit
          </Link>
        </div>
      </article>
    </>
  );
}
