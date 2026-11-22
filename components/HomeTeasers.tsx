import Link from 'next/link';
import { portfolioData } from '../data/portfolio';
import { hirePages } from '../data/hire';
import { truncate } from '../lib/seo';

// Home page below the hero: short summary + internal links to every important page.
const HomeTeasers = () => {
  const { stats, projects, personal } = portfolioData;
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Senior frontend engineer, <span className="text-cyan-400">team lead</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">{personal.bio}</p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-gray-900/50 rounded-xl">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          <Link href="/about" className="text-cyan-400 hover:underline font-medium">
            More about Amit Kumar →
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            Featured <span className="text-cyan-400">work</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {truncate(project.description, 170)}
                </p>
                <span className="text-cyan-400 text-sm font-medium">Read the case study →</span>
              </Link>
            ))}
          </div>
          <Link href="/projects" className="text-cyan-400 hover:underline font-medium">
            All projects →
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Looking to <span className="text-cyan-400">hire</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl">
            I am open to full-time roles, remote or on-site across India. Pick the role you are
            hiring for to see the work that matches.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {hirePages.map((page) => (
              <Link
                key={page.slug}
                href={`/hire/${page.slug}`}
                className="block bg-gray-900/50 rounded-xl p-5 border border-gray-700/50 hover:border-cyan-400/30 transition-colors"
              >
                <span className="text-white font-semibold">Hire a {page.navLabel}</span>
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeTeasers;
