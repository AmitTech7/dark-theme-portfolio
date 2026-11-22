import PageHeader from '../../components/PageHeader';
import About from '../../components/About';
import { JsonLd, profilePageJsonLd } from '../../lib/jsonld';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata({
  title: 'About - Senior Frontend Engineer & Team Lead',
  description:
    'Senior Team Lead and Frontend Engineer in Chandigarh, India: 5+ years in React, Next.js and TypeScript. Open to remote or on-site full-time roles.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={profilePageJsonLd('/about')} />
      <PageHeader
        title="About Amit Kumar"
        intro="Senior Team Lead - React JS and Senior Frontend Engineer building enterprise SaaS platforms in healthcare, EdTech and FinTech."
        crumbs={[{ name: 'About', href: '/about' }]}
      />
      <About />
    </>
  );
}
