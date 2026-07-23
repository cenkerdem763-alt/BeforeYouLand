import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import {
  AlertTriangle,
  AppWindow,
  CarTaxiFront,
  CheckCircle2,
  ChevronDown,
  FileText,
  Home,
  Landmark,
  PhoneCall,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import Badge from '../components/Badge';
import CommonMistakesSection from '../components/CommonMistakesSection';
import ComparisonLinkCard from '../components/ComparisonLinkCard';
import EssentialAppsSection from '../components/EssentialAppsSection';
import FAQSection from '../components/FAQSection';
import LastUpdated from '../components/LastUpdated';
import SEO from '../components/SEO';
import { siteConfig } from '../data/config';
import TopicCard from '../components/TopicCard';
import VisaResidenceInsuranceSection from '../components/VisaResidenceInsuranceSection';
import { findCountryBySlug, getCountryPath } from '../data/countries';
import type { EssentialCategoryKey } from '../data/essentialApps';
import {
  firstWeekChecklists,
  type ChecklistCategoryKey,
} from '../data/firstWeekChecklist';
import { languageCodes, topicLabels, ui } from '../data/i18n';
import { getGuidePath, topicKeys } from '../data/routes';
import { countryFaqs } from '../data/countryFaqs';
import { commonMistakes } from '../data/commonMistakes';
import { visaResidenceInsurance } from '../data/visaResidenceInsurance';

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

const overviewHintLabel = {
  en: 'Open a topic for a quick first-week checklist.',
  tr: 'Kısa kontrol listesini görmek için ihtiyacınız olan başlığı açın.',
  ru: 'Откройте нужную тему, чтобы увидеть краткий чек-лист.',
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
  const faqs = countryFaqs[country.key][language];
  const mistakes = commonMistakes[country.key][language];
  const visaContent = visaResidenceInsurance[country.key][language];
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

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
        jsonLd={faqJsonLd}
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
              <div className="mt-5">
                <LastUpdated language={language} inverse />
              </div>
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
            <div className="mt-5">
              <LastUpdated language={language} />
            </div>
          </div>
        ) : null}

        <section className="mt-10">
          <div>
            <h2 id="arrival-essentials-title" className="text-2xl font-bold">
              {labels.overview}
            </h2>
            <p className="mt-1.5 text-sm leading-6 text-muted">
              {overviewHintLabel[language]}
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {overview.map((item) => {
              const Icon = item.icon;
              const category = checklistByKey.get(item.checklistCategory);
              const isOpen = openOverviewCategories.has(item.checklistCategory);
              const detailsId = `overview-${country.key}-${item.checklistCategory}`;

              return (
                <article
                  key={item.checklistCategory}
                  className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition ${
                    isOpen
                      ? 'border-green-600/30 shadow-md ring-1 ring-green-600/10'
                      : 'border-slate-200/80 hover:-translate-y-0.5 hover:border-green-600/25 hover:shadow-md'
                  }`}
                >
                  <button
                    type="button"
                    className="focus-ring group flex w-full items-center gap-3 p-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={detailsId}
                    aria-label={`${item.label}: ${
                      isOpen ? hideDetailsLabel[language] : viewDetailsLabel[language]
                    }`}
                    onClick={() => toggleOverviewCategory(item.checklistCategory)}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${
                        isOpen
                          ? 'bg-green-700 text-white'
                          : 'bg-slate-100 text-blue-700 group-hover:bg-green-50 group-hover:text-green-700'
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-bold leading-snug text-ink">{item.label}</span>
                      <span className="mt-1 block text-sm leading-5 text-muted">{item.value}</span>
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition ${
                        isOpen
                          ? 'border-green-600/20 bg-green-50 text-green-700'
                          : 'border-line bg-slate-50 text-muted group-hover:border-green-600/20 group-hover:text-green-700'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>
                  {isOpen && category ? (
                    <div id={detailsId} className="px-4 pb-4">
                      <ul className="space-y-2 border-t border-line pt-3">
                        {category.items.map((checklistItem) => (
                          <li
                            key={checklistItem[language]}
                            className="flex gap-2.5 rounded-xl bg-slate-50/90 p-3 text-sm leading-5 text-muted"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-5 w-5 shrink-0 text-green-700"
                              aria-hidden="true"
                            />
                            <span>{checklistItem[language]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
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

        <CommonMistakesSection title={labels.commonMistakes} items={mistakes} />

        <VisaResidenceInsuranceSection
          title={labels.visaResidenceInsurance}
          officialSourcesTitle={labels.officialSources}
          items={visaContent.items}
          disclaimer={visaContent.disclaimer}
          sources={visaContent.sources}
        />

        <FAQSection title={ui[language].guide.faq} items={faqs} className="mt-12" />

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

        <ComparisonLinkCard language={language} className="mt-8" />

      </section>
    </div>
  );
}
