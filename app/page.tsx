import Hero from '../components/Hero';
import HomeTeasers from '../components/HomeTeasers';
import { JsonLd, websiteJsonLd } from '../lib/jsonld';

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <Hero />
      <HomeTeasers />
    </>
  );
}
