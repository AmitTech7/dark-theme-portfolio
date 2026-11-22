import PageHeader from '../../components/PageHeader';
import Skills from '../../components/Skills';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata({
  title: 'Skills: React, Next.js, TypeScript',
  description:
    'Skills of Amit Kumar: React, Next.js, TypeScript, Redux Toolkit, Zustand, TanStack Query, Tailwind CSS, Jest, SonarQube and agentic AI tooling.',
  path: '/skills',
});

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        title="Skills & Tech Stack"
        intro="The frontend, state management, testing and tooling I use to build enterprise SaaS products."
        crumbs={[{ name: 'Skills', href: '/skills' }]}
      />
      <Skills />
    </>
  );
}
