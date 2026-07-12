import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppWindow,
  ArrowRight,
  Bus,
  CheckCircle2,
  Home,
  Landmark,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import CountryCard from '../components/CountryCard';
import LeadCTA from '../components/LeadCTA';
import PartnerCTA from '../components/PartnerCTA';
import Search from '../components/Search';
import SEO from '../components/SEO';
import SupportCTA from '../components/SupportCTA';
import TopicCard from '../components/TopicCard';
import { countries, getCountryPath } from '../data/countries';
import { siteConfig } from '../data/config';
import { languageCodes, languages, topicLabels, ui, type Language } from '../data/i18n';
import { getGuidePath, topicKeys } from '../data/routes';

type HomePageProps = {
  language: Language;
};

export default function HomePage({ language }: HomePageProps) {
  const [query, setQuery] = useState('');
  const copy = ui[language].home;
  const heroFeatures = [
    { label: topicLabels[language]['sim-card'], icon: Smartphone },
    { label: topicLabels[language].transport, icon: Bus },
    { label: topicLabels[language]['rent-apartment'], icon: Home },
    { label: topicLabels[language]['bank-account'], icon: Landmark },
    { label: ui[language].country.usefulApps, icon: AppWindow },
  ];
  const filteredCountries = useMemo(
    () =>
      countries.filter((country) =>
        country.content[language].name.toLowerCase().includes(query.toLowerCase().trim()),
      ),
    [language, query],
  );
  const georgia = countries.find((country) => country.key === 'georgia') ?? countries[0];
  const georgiaPath = getCountryPath(language, georgia);

  return (
    <>
      <SEO
        title={siteConfig.siteName}
        description={siteConfig.defaultDescriptions[language]}
        canonical={`${siteConfig.baseUrl}/${language}`}
        alternates={[
          ...languageCodes.map((alternateLanguage) => ({
            hrefLang: alternateLanguage,
            href: `${siteConfig.baseUrl}/${alternateLanguage}`,
          })),
          { hrefLang: 'x-default', href: `${siteConfig.baseUrl}/en` },
        ]}
      />
      <section className="border-b border-line bg-[radial-gradient(circle_at_top_left,#dff3ff_0%,#f7fbff_38%,#ffffff_78%)]">
        <div className="container-shell grid gap-10 py-10 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-green-600/15 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-green-700 shadow-sm">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              {copy.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.05] text-ink sm:text-6xl">
              {copy.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{copy.subtitle}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {copy.trustItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold text-muted shadow-sm ring-1 ring-line"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-700" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-5">
              {heroFeatures.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-line bg-white/90 p-3 shadow-sm"
                  >
                    <Icon className="h-4 w-4 text-blue-600" aria-hidden="true" />
                    <p className="mt-2 text-sm font-bold leading-5 text-ink">{item.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 max-w-2xl rounded-[1.75rem] border border-line bg-white p-4 shadow-soft sm:p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-xl font-bold">{copy.searchTitle}</h2>
                  <p className="text-sm text-muted">{copy.searchPlaceholder}</p>
                </div>
              </div>
              <Search value={query} onChange={setQuery} placeholder={copy.searchPlaceholder} />
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {filteredCountries.map((country) => (
                  <Link
                    key={country.key}
                    to={getCountryPath(language, country)}
                  className="focus-ring flex items-center justify-between rounded-2xl border border-line bg-slate-50 px-4 py-3 text-sm font-bold transition hover:border-blue-600 hover:bg-white hover:shadow-sm"
                >
                    <span>{country.content[language].name}</span>
                    <ArrowRight className="h-4 w-4 text-muted" aria-hidden="true" />
                  </Link>
                ))}
              </div>
              {filteredCountries.length === 0 ? (
                <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-muted">
                  {copy.noResults}
                </p>
              ) : null}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to={georgiaPath}
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
              >
                {copy.startWithGeorgia}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              {languageCodes
                .filter((alternateLanguage) => alternateLanguage !== language)
                .map((alternateLanguage) => (
                  <Link
                    key={alternateLanguage}
                    to={`/${alternateLanguage}`}
                    className="focus-ring rounded-full border border-line bg-white px-5 py-3 text-sm font-bold text-ink shadow-sm transition hover:border-blue-600"
                  >
                    {languages[alternateLanguage].label}
                  </Link>
                ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-line bg-white p-4 shadow-soft sm:p-5">
            <div className="rounded-[1.5rem] bg-ink p-5 text-white shadow-sm">
              <p className="text-sm font-bold text-green-200">{copy.featureLabel}</p>
              <p className="mt-3 text-3xl font-bold leading-tight">{copy.featureTitle}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{copy.featureDescription}</p>
            </div>
            <div className="mt-3 grid gap-3">
              {countries.map((country) => (
                <Link
                  key={country.key}
                  to={getCountryPath(language, country)}
                  className="focus-ring rounded-2xl border border-line bg-slate-50 p-4 transition hover:border-blue-600 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold">{country.content[language].name}</p>
                      <p className="mt-1 text-sm text-muted">{country.content[language].bestFor}</p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-black shadow-sm">
                      {country.flag}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-3">
              <LeadCTA country={georgia} language={language} compact />
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-12 sm:py-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold">{copy.countries}</h2>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {filteredCountries.map((country) => (
            <CountryCard key={country.key} country={country} language={language} />
          ))}
        </div>
        {filteredCountries.length === 0 ? (
          <p className="mt-6 rounded-2xl bg-slate-50 p-5 text-muted">{copy.noResults}</p>
        ) : null}
      </section>

      <section className="container-shell pb-8">
        <h2 className="text-2xl font-bold">{copy.popularTopics}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {topicKeys.map((topic) => (
            <TopicCard
              key={topic}
              topic={topic}
              language={language}
              to={getGuidePath(language, georgia.content[language].slug, topic)}
            />
          ))}
        </div>
      </section>

      <section className="container-shell pb-14">
        <LeadCTA country={georgia} language={language} />
      </section>

      <section className="container-shell grid gap-4 pb-14 lg:grid-cols-2">
        <SupportCTA language={language} />
        <PartnerCTA language={language} />
      </section>
    </>
  );
}
