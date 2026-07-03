import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { siteConfig } from '../data/config';
import { ui, type Language } from '../data/i18n';

export default function NotFoundPage({ language }: { language: Language }) {
  const copy = ui[language].notFound;

  return (
    <section className="container-shell py-20">
      <SEO
        title={copy.title}
        description={siteConfig.defaultDescriptions[language]}
        canonical={`${siteConfig.baseUrl}/${language}`}
      />
      <h1 className="text-4xl font-bold">{copy.heading}</h1>
      <p className="mt-4 text-muted">{copy.text}</p>
      <Link
        to={`/${language}`}
        className="focus-ring mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
      >
        {copy.button}
      </Link>
    </section>
  );
}
