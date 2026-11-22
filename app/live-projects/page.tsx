import LiveProjects from '../../components/LiveProjects';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata({
  title: 'Live Projects - Deployed Apps',
  description:
    'Deployed web applications built by Amit Kumar, with links to the live sites and the technologies behind each project.',
  path: '/live-projects',
});

export default function LiveProjectsPage() {
  return <LiveProjects />;
}
