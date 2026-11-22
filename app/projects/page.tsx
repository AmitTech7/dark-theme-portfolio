import PageHeader from '../../components/PageHeader';
import Projects from '../../components/Projects';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata({
  title: 'React & Next.js Project Case Studies',
  description:
    'Case studies by Amit Kumar: healthcare credentialing (Next.js, TypeScript, TanStack Query), remote patient monitoring, SaaS rental POS, an EdTech lesson builder and more.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="React & Next.js Project Case Studies"
        intro="Enterprise SaaS products across healthcare, EdTech, insurance and retail."
        crumbs={[{ name: 'Projects', href: '/projects' }]}
      />
      <Projects />
    </>
  );
}
