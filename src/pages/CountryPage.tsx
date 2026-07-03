import { Navigate, useParams } from 'react-router-dom';
import { AlertTriangle, AppWindow, Landmark, PhoneCall } from 'lucide-react';
import Badge from '../components/Badge';
import LeadCTA from '../components/LeadCTA';
import SEO from '../components/SEO';
import { siteConfig } from '../data/config';
import TopicCard from '../components/TopicCard';
import { findCountryBySlug, getCountryPath } from '../data/countries';
import { topicLabels, ui, type Language } from '../data/i18n';
import { getGuidePath, topicKeys } from '../data/routes';

export default function CountryPage() {
  const params = useParams();
  const language = params.language === 'tr' ? 'tr' : params.language === 'en' ? 'en' : undefined;
  if (!language || !params.countrySlug) return <Navigate to="/en" replace />;

  const country = findCountryBySlug(language, params.countrySlug);
  if (!country) return <Navigate to={`/${language}`} replace />;

  const labels = ui[language].country;
  const otherLanguage: Language = language === 'en' ? 'tr' : 'en';
  const countryPath = getCountryPath(language, country);
  const alternateCountryPath = getCountryPath(otherLanguage, country);

  const overview = [
    { label: 'SIM / eSIM', value: topicKeys.slice(0, 2).map((topic) => topicLabels[language][topic]).join(' + ') },
    { label: topicLabels[language]['bank-account'], value: country.content[language].currency },
    { label: topicLabels[language]['rent-apartment'], value: country.content[language].bestFor },
    { label: topicLabels[language].transport, value: country.content[language].capital },
    { label: labels.usefulApps, value: country.apps.join(', ') },
    { label: labels.emergencyNumbers, value: country.emergency[language].join(', ') },
  ];

  return (
    <>
      <SEO
        title={`${country.content[language].name} ${labels.seoTitle}`}
        description={country.content[language].summary}
        canonical={`${siteConfig.baseUrl}${countryPath}`}
        alternates={[
          { hrefLang: language, href: `${siteConfig.baseUrl}${countryPath}` },
          { hrefLang: otherLanguage, href: `${siteConfig.baseUrl}${alternateCountryPath}` },
        ]}
      />
      <section className="container-shell py-10 sm:py-14">
        <div className="max-w-3xl">
          <Badge tone={country.accent}>{country.flag}</Badge>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
            {country.content[language].name}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">{country.content[language].overview}</p>
        </div>

        <div className="mt-8">
          <LeadCTA country={country} language={language} />
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">{labels.overview}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {overview.map((item, index) => {
              const Icon = [PhoneCall, Landmark, AlertTriangle, PhoneCall, AppWindow, AlertTriangle][index];
              return (
                <div key={item.label} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
                  <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  <h3 className="mt-4 font-bold">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.value}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">{labels.guides}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {topicKeys.map((topic) => (
              <TopicCard
                key={topic}
                topic={topic}
                language={language}
                to={getGuidePath(language, country.content[language].slug, topic)}
              />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
