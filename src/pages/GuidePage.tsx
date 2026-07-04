import { Navigate, useParams } from 'react-router-dom';
import GuideLayout from '../components/GuideLayout';
import SEO from '../components/SEO';
import { siteConfig } from '../data/config';
import { findCountryBySlug, getCountryPath } from '../data/countries';
import { findGuide } from '../data/guides';
import { languageCodes } from '../data/i18n';
import { getGuidePath, resolveTopicFromSlug } from '../data/routes';

export default function GuidePage() {
  const params = useParams();
  const language = languageCodes.find((code) => code === params.language);
  if (!language || !params.countrySlug || !params.topicSlug) return <Navigate to="/en" replace />;

  const country = findCountryBySlug(language, params.countrySlug);
  const topic = resolveTopicFromSlug(language, params.topicSlug);
  if (!country || !topic) return <Navigate to={`/${language}`} replace />;

  const guide = findGuide(language, country.key, topic);
  if (!guide) return <Navigate to={getCountryPath(language, country)} replace />;

  const canonicalPath = getGuidePath(language, country.content[language].slug, topic);
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <SEO
        title={guide.title}
        description={guide.description}
        canonical={`${siteConfig.baseUrl}${canonicalPath}`}
        alternates={languageCodes.map((alternateLanguage) => ({
          hrefLang: alternateLanguage,
          href: `${siteConfig.baseUrl}${getGuidePath(alternateLanguage, country.content[alternateLanguage].slug, topic)}`,
        }))}
        jsonLd={faqJsonLd}
      />
      <GuideLayout guide={guide} country={country} language={language} />
    </>
  );
}
