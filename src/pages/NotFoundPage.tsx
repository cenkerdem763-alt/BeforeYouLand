import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { siteConfig } from '../data/config';
import type { Language } from '../data/i18n';

export default function NotFoundPage({ language }: { language: Language }) {
  return (
    <section className="container-shell py-20">
      <SEO
        title="Page not found"
        description="This BeforeYouLand page could not be found."
        canonical={`${siteConfig.baseUrl}/${language}`}
      />
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-muted">The guide you are looking for may have moved.</p>
      <Link
        to={`/${language}`}
        className="focus-ring mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
      >
        Back home
      </Link>
    </section>
  );
}
