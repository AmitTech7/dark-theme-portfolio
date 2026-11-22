import Link from 'next/link';
import { JsonLd, breadcrumbJsonLd } from '../lib/jsonld';

export interface Crumb {
  name: string;
  href: string;
}

const Breadcrumbs = ({ items }: { items: Crumb[] }) => {
  const all: Crumb[] = [{ name: 'Home', href: '/' }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(all)} />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
        <ol className="flex flex-wrap items-center gap-2">
          {all.map((item, i) => (
            <li key={item.href} className="flex items-center gap-2">
              {i < all.length - 1 ? (
                <Link href={item.href} className="hover:text-cyan-400 transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-gray-300" aria-current="page">
                  {item.name}
                </span>
              )}
              {i < all.length - 1 && <span aria-hidden="true">/</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
