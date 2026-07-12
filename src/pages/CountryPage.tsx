import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import {
  AlertTriangle,
  AppWindow,
  CarTaxiFront,
  Home,
  Landmark,
  PhoneCall,
  Smartphone,
} from 'lucide-react';
import Badge from '../components/Badge';
import EssentialAppsSection from '../components/EssentialAppsSection';
import FirstWeekChecklistSection from '../components/FirstWeekChecklistSection';
import LeadCTA from '../components/LeadCTA';
import PartnerCTA from '../components/PartnerCTA';
import SEO from '../components/SEO';
import SupportCTA from '../components/SupportCTA';
import { siteConfig } from '../data/config';
import TopicCard from '../components/TopicCard';
import { findCountryBySlug, getCountryPath } from '../data/countries';
import type { EssentialCategoryKey } from '../data/essentialApps';
import { languageCodes, topicLabels, ui } from '../data/i18n';
import { getGuidePath, topicKeys } from '../data/routes';

const viewDetailsLabel = {
  en: 'View details',
  tr: 'Bilgileri gör',
  ru: 'Смотреть',
} as const;

export default function CountryPage() {
  const [openAppCategories, setOpenAppCategories] = useState<Set<EssentialCategoryKey>>(
    () => new Set(),
  );
  const params = useParams();
  const language = languageCodes.find((code) => code === params.language);
  if (!language || !params.countrySlug) return <Navigate to="/en" replace />;

  const country = findCountryBySlug(language, params.countrySlug);
  if (!country) return <Navigate to={`/${language}`} replace />;

  const labels = ui[language].country;
  const countryPath = getCountryPath(language, country);
  const hasGeorgiaHero = country.key === 'georgia';

  const overview: {
    label: string;
    value: string;
    icon: typeof PhoneCall;
    appCategory?: EssentialCategoryKey;
  }[] = [
    {
      label: 'SIM / eSIM',
      value: topicKeys.slice(0, 2).map((topic) => topicLabels[language][topic]).join(' + '),
      icon: Smartphone,
      appCategory: 'simInternet',
    },
    {
      label: topicLabels[language]['bank-account'],
      value: country.content[language].currency,
      icon: Landmark,
      appCategory: 'bankingMoney',
    },
    {
      label: topicLabels[language]['rent-apartment'],
      value: country.content[language].bestFor,
      icon: Home,
      appCategory: 'housing',
    },
    {
      label: topicLabels[language].transport,
      value: country.content[language].capital,
      icon: CarTaxiFront,
      appCategory: 'taxiTransport',
    },
    {
      label: labels.usefulApps,
      value: country.apps.join(', '),
      icon: AppWindow,
      appCategory: 'mapsNavigation',
    },
    {
      label: labels.emergencyNumbers,
      value: country.emergency[language].join(', '),
      icon: AlertTriangle,
    },
  ];

  const openAppCategory = (categoryKey: EssentialCategoryKey) => {
    setOpenAppCategories((current) => new Set(current).add(categoryKey));
    window.setTimeout(() => {
      document.getElementById(`apps-${categoryKey}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 0);
  };

  const toggleAppCategory = (categoryKey: EssentialCategoryKey) => {
    setOpenAppCategories((current) => {
      const next = new Set(current);

      if (next.has(categoryKey)) {
        next.delete(categoryKey);
      } else {
        next.add(categoryKey);
      }

      return next;
    });
  };

  return (
    <div className={hasGeorgiaHero ? 'georgia-country-page' : undefined}>
      <SEO
        title={`${country.content[language].name} ${labels.seoTitle}`}
        description={country.content[language].summary}
        canonical={`${siteConfig.baseUrl}${countryPath}`}
        alternates={languageCodes.map((alternateLanguage) => ({
          hrefLang: alternateLanguage,
          href: `${siteConfig.baseUrl}${getCountryPath(alternateLanguage, country)}`,
        }))}
      />
      {hasGeorgiaHero ? (
        <section className="georgia-country-hero bg-slate-900 py-14 sm:py-20">
          <div className="container-shell">
            <div className="max-w-3xl">
              <Badge tone={country.accent}>{country.flag}</Badge>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
                {country.content[language].name}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-100 sm:max-w-2xl">
                {country.content[language].overview}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <section
        className={`container-shell ${hasGeorgiaHero ? 'georgia-country-content py-10 sm:py-14' : 'py-10 sm:py-14'}`}
      >
        {!hasGeorgiaHero ? (
          <div className="max-w-3xl">
            <Badge tone={country.accent}>{country.flag}</Badge>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              {country.content[language].name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              {country.content[language].overview}
            </p>
          </div>
        ) : null}

        <div className="mt-8">
          <LeadCTA country={country} language={language} />
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">{labels.overview}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {overview.map((item) => {
              const Icon = item.icon;
              const cardContent = (
                <>
                  <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  <h3 className="mt-4 font-bold">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.value}</p>
                  {item.appCategory ? (
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-green-700">
                      {viewDetailsLabel[language]}
                      <span aria-hidden="true">→</span>
                    </span>
                  ) : null}
                </>
              );

              if (!item.appCategory) {
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-line bg-white p-5 shadow-sm"
                  >
                    {cardContent}
                  </div>
                );
              }

              const appCategory = item.appCategory;

              return (
                <button
                  key={item.label}
                  type="button"
                  className="focus-ring rounded-2xl border border-line bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-green-200 hover:shadow-md"
                  onClick={() => openAppCategory(appCategory)}
                >
                  {cardContent}
                </button>
              );
            })}
          </div>
        </section>

        <EssentialAppsSection
          country={country}
          language={language}
          openCategories={openAppCategories}
          onToggleCategory={toggleAppCategory}
        />

        <FirstWeekChecklistSection country={country} language={language} />

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

        <section className="mt-12 grid gap-4 lg:grid-cols-2">
          <SupportCTA language={language} />
          <PartnerCTA language={language} />
        </section>
      </section>
    </div>
  );
}
