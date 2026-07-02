import { Navigate, useParams } from 'react-router-dom';
import GuideLayout from '../components/GuideLayout';
import SEO from '../components/SEO';
import { siteConfig } from '../data/config';
import { findCountryBySlug } from '../data/countries';
import { findGuide } from '../data/guides';
import { type Language } from '../data/i18n';
import { getGuidePath, resolveTopicFromSlug } from '../data/routes';

export default function GuidePage() {
  const params = useParams();
  const language = params.language === 'tr' ? 'tr' : params.language === 'en' ? 'en' : undefined;
  if (!language || !params.countrySlug || !params.topicSlug) return <Navigate to="/en" replace />;

  const country = findCountryBySlug(language, params.countrySlug);
  const topic = resolveTopicFromSlug(language, params.topicSlug);
  if (!country || !topic) return <Navigate to={`/${language}`} replace />;

  const guide = findGuide(language, country.key, topic);
  if (!guide) return <Navigate to={`/${language}/${country.content[language].slug}`} replace />;

  const otherLanguage: Language = language === 'en' ? 'tr' : 'en';
  const canonicalPath = getGuidePath(language, country.content[language].slug, topic);
  const alternatePath = getGuidePath(otherLanguage, country.content[otherLanguage].slug, topic);
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
        alternates={[
          { hrefLang: language, href: `${siteConfig.baseUrl}${canonicalPath}` },
          { hrefLang: otherLanguage, href: `${siteConfig.baseUrl}${alternatePath}` },
        ]}
        jsonLd={faqJsonLd}
      />
      <GuideLayout guide={guide} country={country} language={language} />
    </>
  );
}
