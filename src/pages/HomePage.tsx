import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import CountryCard from '../components/CountryCard';
import Search from '../components/Search';
import SEO from '../components/SEO';
import TopicCard from '../components/TopicCard';
import { countries, getCountryPath } from '../data/countries';
import { siteConfig } from '../data/config';
import { ui, type Language } from '../data/i18n';
import { getGuidePath, topicKeys } from '../data/routes';

type HomePageProps = {
  language: Language;
};

export default function HomePage({ language }: HomePageProps) {
  const [query, setQuery] = useState('');
  const copy = ui[language].home;
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
        title={language === 'en' ? 'Country starter guides' : 'Ülke başlangıç rehberleri'}
        description={copy.subtitle}
        canonical={`${siteConfig.baseUrl}/${language}`}
        alternates={[
          { hrefLang: 'en', href: `${siteConfig.baseUrl}/en` },
          { hrefLang: 'tr', href: `${siteConfig.baseUrl}/tr` },
          { hrefLang: 'x-default', href: `${siteConfig.baseUrl}/en` },
        ]}
      />
      <section className="border-b border-line bg-[linear-gradient(180deg,#edf7ff_0%,#ffffff_72%)]">
        <div className="container-shell grid gap-10 py-10 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-green-600/15 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-green-700 shadow-sm">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              {copy.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
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
                    className="focus-ring flex items-center justify-between rounded-2xl border border-line bg-slate-50 px-4 py-3 text-sm font-bold transition hover:border-blue-600 hover:bg-white"
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
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                {copy.startWithGeorgia}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to={language === 'en' ? '/tr' : '/en'}
                className="focus-ring rounded-full border border-line bg-white px-5 py-3 text-sm font-bold text-ink shadow-sm transition hover:border-blue-600"
              >
                {language === 'en' ? 'Türkçe' : 'English'}
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-line bg-white p-4 shadow-soft sm:p-5">
            <div className="rounded-[1.5rem] bg-ink p-5 text-white">
              <p className="text-sm font-bold text-green-200">BeforeYouLand MVP</p>
              <p className="mt-3 text-3xl font-bold leading-tight">
                {language === 'en' ? 'Answer the first week faster.' : 'İlk haftanın cevapları daha hızlı.'}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {language === 'en'
                  ? 'Country-specific cards, practical guide pages and source-first disclaimers built for quick decisions.'
                  : 'Hızlı kararlar için ülkeye özel kartlar, pratik rehber sayfaları ve doğrulama odaklı uyarılar.'}
              </p>
            </div>
            <div className="mt-3 grid gap-3">
              {countries.map((country) => (
                <Link
                  key={country.key}
                  to={getCountryPath(language, country)}
                  className="focus-ring rounded-2xl border border-line bg-slate-50 p-4 transition hover:border-blue-600 hover:bg-white"
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
    </>
  );
}
