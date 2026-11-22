import PageHeader from '../../components/PageHeader';
import Experience from '../../components/Experience';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata({
  title: 'Experience: Senior Team Lead, React JS',
  description:
    'Experience of Amit Kumar: Senior Team Lead of the React JS team and Senior React/Next.js developer at Ditstek Innovations; earlier a freelance web developer.',
  path: '/experience',
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        title="Work Experience"
        intro="From freelance web developer to Senior Team Lead leading a React frontend team."
        crumbs={[{ name: 'Experience', href: '/experience' }]}
      />
      <Experience />
    </>
  );
}
