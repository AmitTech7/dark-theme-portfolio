import Link from 'next/link';
import { HIRE_LINKS } from '../lib/site';

const company = [
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/live-projects', label: 'Live Projects' },
  { href: '/contact', label: 'Contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-white font-semibold mb-2">Amit Kumar</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Senior Team Lead - React JS / Senior Frontend Engineer. Open to full-time roles,
              remote or on-site across India.
            </p>
          </div>
          <nav aria-label="Site">
            <p className="text-white font-semibold mb-2">Explore</p>
            <ul className="space-y-1 text-sm">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Hire">
            <p className="text-white font-semibold mb-2">Hire</p>
            <ul className="space-y-1 text-sm">
              {HIRE_LINKS.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/hire/${l.slug}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Hire a {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="text-center text-gray-500 text-sm">
          © {currentYear} Amit Kumar. Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
