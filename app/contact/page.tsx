import PageHeader from '../../components/PageHeader';
import Contact from '../../components/Contact';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata({
  title: 'Contact - Hire a Senior Frontend Engineer',
  description:
    'Get in touch with Amit Kumar about full-time senior frontend, React or Next.js roles. Available remote or on-site across India.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Amit Kumar"
        intro="Hiring for a senior frontend, React or Next.js role? Send a message."
        crumbs={[{ name: 'Contact', href: '/contact' }]}
      />
      <Contact />
    </>
  );
}
