import Breadcrumbs, { Crumb } from './Breadcrumbs';

interface PageHeaderProps {
  title: string;
  intro?: string;
  crumbs: Crumb[];
}

// Top of every inner page: breadcrumbs + the page's single H1. Padding clears the fixed nav.
const PageHeader = ({ title, intro, crumbs }: PageHeaderProps) => (
  <header className="pt-28 pb-8 bg-gray-900">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={crumbs} />
      <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">{title}</h1>
      {intro && <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-3xl">{intro}</p>}
    </div>
  </header>
);

export default PageHeader;
