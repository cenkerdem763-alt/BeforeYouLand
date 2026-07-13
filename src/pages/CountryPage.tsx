import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import {
  AlertTriangle,
  AppWindow,
  CarTaxiFront,
  CheckCircle2,
  FileText,
  Home,
  Landmark,
  PhoneCall,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import Badge from '../components/Badge';
import EssentialAppsSection from '../components/EssentialAppsSection';
import LeadCTA from '../components/LeadCTA';
import SEO from '../components/SEO';
import { siteConfig } from '../data/config';
import TopicCard from '../components/TopicCard';
import { findCountryBySlug, getCountryPath } from '../data/countries';
import type { EssentialCategoryKey } from '../data/essentialApps';
import {
  firstWeekChecklists,
  type ChecklistCategoryKey,
} from '../data/firstWeekChecklist';
import { languageCodes, topicLabels, ui } from '../data/i18n';
import { getGuidePath, topicKeys } from '../data/routes';

const viewDetailsLabel = {
  en: 'View details',
  tr: 'Bilgileri gör',
  ru: 'Смотреть',
} as const;

const hideDetailsLabel = {
  en: 'Hide details',
  tr: 'Bilgileri gizle',
  ru: 'Скрыть',
} as const;

const practicalInfoLabel = {
  en: 'practical tips',
  tr: 'pratik bilgi',
  ru: 'практических совета',
} as const;

export default function CountryPage() {
  const [openAppCategories, setOpenAppCategories] = useState<Set<EssentialCategoryKey>>(
    () => new Set(),
  );
  const [openOverviewCategories, setOpenOverviewCategories] = useState<
    Set<ChecklistCategoryKey>
  >(() => new Set());
  const params = useParams();
  const language = languageCodes.find((code) => code === params.language);
  if (!language || !params.countrySlug) return <Navigate to="/en" replace />;

  const country = findCountryBySlug(language, params.countrySlug);
  if (!country) return <Navigate to={`/${language}`} replace />;

  const labels = ui[language].country;
  const countryPath = getCountryPath(language, country);
  const hasGeorgiaHero = country.key === 'georgia';
  const checklist = firstWeekChecklists[country.key];
  const checklistByKey = new Map(checklist.map((category) => [category.key, category]));

  const overview: {
    label: string;
    value: string;
    icon: typeof PhoneCall;
    checklistCategory: ChecklistCategoryKey;
  }[] = [
    {
      label: 'SIM / eSIM',
      value: topicKeys.slice(0, 2).map((topic) => topicLabels[language][topic]).join(' + '),
      icon: Smartphone,
      checklistCategory: 'simMobile',
    },
    {
      label: topicLabels[language]['bank-account'],
      value: country.content[language].currency,
      icon: Landmark,
      checklistCategory: 'bankingMoney',
    },
    {
      label: topicLabels[language]['rent-apartment'],
      value: country.content[language].bestFor,
      icon: Home,
      checklistCategory: 'housing',
    },
    {
      label: topicLabels[language].transport,
      value: country.content[language].capital,
      icon: CarTaxiFront,
      checklistCategory: 'taxiTransport',
    },
    {
      label: labels.usefulApps,
      value: country.apps.join(', '),
      icon: AppWindow,
      checklistCategory: 'usefulApps',
    },
    {
      label: labels.emergencyNumbers,
      value: country.emergency[language].join(', '),
      icon: AlertTriangle,
      checklistCategory: 'emergencyNumbers',
    },
    {
      label: checklistByKey.get('documents')?.title[language] ?? '',
      value: `${checklistByKey.get('documents')?.items.length ?? 0} ${practicalInfoLabel[language]}`,
      icon: FileText,
      checklistCategory: 'documents',
    },
    {
      label: checklistByKey.get('safetyTips')?.title[language] ?? '',
      value: `${checklistByKey.get('safetyTips')?.items.length ?? 0} ${practicalInfoLabel[language]}`,
      icon: ShieldCheck,
      checklistCategory: 'safetyTips',
    },
  ];

  const toggleOverviewCategory = (categoryKey: ChecklistCategoryKey) => {
    setOpenOverviewCategories((current) => {
      const next = new Set(current);

      if (next.has(categoryKey)) {
        next.delete(categoryKey);
      } else {
        next.add(categoryKey);
      }

      return next;
    });
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
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {overview.map((item) => {
              const Icon = item.icon;
              const category = checklistByKey.get(item.checklistCategory);
              const isOpen = openOverviewCategories.has(item.checklistCategory);

              return (
                <button
                  key={item.checklistCategory}
                  type="button"
                  className="focus-ring group flex h-full flex-col rounded-xl border border-slate-200/80 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-green-600/30 hover:shadow-md"
                  aria-expanded={isOpen}
                  onClick={() => toggleOverviewCategory(item.checklistCategory)}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-blue-700 transition group-hover:bg-green-50 group-hover:text-green-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-bold leading-snug">{item.label}</h3>
                  <p className="mt-1.5 text-sm leading-5 text-muted">{item.value}</p>
                  <span
                    className={`mt-4 inline-flex w-fit items-center gap-2 rounded-full px-3 py-2 text-xs font-bold text-white transition ${isOpen ? 'bg-green-700' : 'bg-slate-800 group-hover:bg-green-700'}`}
                  >
                    {isOpen ? hideDetailsLabel[language] : viewDetailsLabel[language]}
                    <span
                      className={`transition-transform ${isOpen ? 'rotate-90' : ''}`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </span>
                  {isOpen && category ? (
                    <ul className="mt-4 space-y-2 border-t border-line pt-3">
                      {category.items.map((checklistItem) => (
                        <li
                          key={checklistItem[language]}
                          className="flex gap-2.5 rounded-lg bg-slate-50/90 p-3 text-sm leading-5 text-muted"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-5 w-5 shrink-0 text-green-700"
                            aria-hidden="true"
                          />
                          <span>{checklistItem[language]}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
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
    </div>
  );
}
