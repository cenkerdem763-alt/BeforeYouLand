import {
  AppWindow,
  ArrowRight,
  Bus,
  CircleDollarSign,
  Globe2,
  Home,
  MapPinned,
  Smartphone,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { comparisonContent, type ComparisonCategoryKey } from '../data/comparison';
import { countries, getCountryPath } from '../data/countries';
import { siteConfig } from '../data/config';
import { languageCodes, type Language } from '../data/i18n';
import { getComparisonPath, getGuidePath } from '../data/routes';

type ComparisonPageProps = {
  language: Language;
};

const categoryIcons = {
  firstWeek: MapPinned,
  simInternet: Smartphone,
  transport: Bus,
  housing: Home,
  banking: CircleDollarSign,
  apps: AppWindow,
  dailyLife: Globe2,
  bestFit: Users,
} satisfies Record<ComparisonCategoryKey, typeof MapPinned>;

export default function ComparisonPage({ language }: ComparisonPageProps) {
  const copy = comparisonContent[language];
  const georgia = countries.find((country) => country.key === 'georgia') ?? countries[0];
  const serbia = countries.find((country) => country.key === 'serbia') ?? countries[1];
  const relatedLinks = [
    {
      label: copy.relatedLinks.georgiaSim,
      to: getGuidePath(language, georgia.content[language].slug, 'sim-card'),
    },
    {
      label: copy.relatedLinks.serbiaSim,
      to: getGuidePath(language, serbia.content[language].slug, 'sim-card'),
    },
    {
      label: copy.relatedLinks.georgiaTransport,
      to: getGuidePath(language, georgia.content[language].slug, 'transport'),
    },
    {
      label: copy.relatedLinks.serbiaTransport,
      to: getGuidePath(language, serbia.content[language].slug, 'transport'),
    },
  ];

  return (
    <>
      <SEO
        title={copy.title}
        description={copy.metaDescription}
        canonical={`${siteConfig.baseUrl}${getComparisonPath(language)}`}
        alternates={[
          ...languageCodes.map((alternateLanguage) => ({
            hrefLang: alternateLanguage,
            href: `${siteConfig.baseUrl}${getComparisonPath(alternateLanguage)}`,
          })),
          { hrefLang: 'x-default', href: `${siteConfig.baseUrl}${getComparisonPath('en')}` },
        ]}
      />

      <section className="border-b border-slate-700 bg-[radial-gradient(circle_at_top_right,#173b46_0%,#0f273f_42%,#08131f_100%)] text-white">
        <div className="container-shell py-12 sm:py-16">
          <p className="inline-flex rounded-full border border-green-300/20 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.15em] text-green-200">
            {copy.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{copy.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to={getCountryPath(language, georgia)}
              className="focus-ring rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-green-100"
            >
              {copy.cta.georgiaButton}
            </Link>
            <Link
              to={getCountryPath(language, serbia)}
              className="focus-ring rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
            >
              {copy.cta.serbiaButton}
            </Link>
          </div>
        </div>
      </section>

      <div className="container-shell py-10 sm:py-14">
        <section>
          <h2 className="text-2xl font-bold sm:text-3xl">{copy.sectionTitle}</h2>
          <div className="mt-6 space-y-4">
            {copy.categories.map((category) => {
              const Icon = categoryIcons[category.key];

              return (
                <article
                  key={category.key}
                  className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
                >
                  <div className="flex items-center gap-3 border-b border-line bg-slate-50 px-5 py-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>
                  <div className="grid md:grid-cols-2">
                    <div className="p-5 md:border-r md:border-line">
                      <p className="text-xs font-black uppercase tracking-[0.12em] text-green-700">
                        GE · {copy.georgiaLabel}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted">{category.georgia}</p>
                    </div>
                    <div className="border-t border-line p-5 md:border-t-0">
                      <p className="text-xs font-black uppercase tracking-[0.12em] text-blue-700">
                        RS · {copy.serbiaLabel}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted">{category.serbia}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <aside className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-medium leading-6 text-amber-950">
          {copy.sharedReminder}
        </aside>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">{copy.relatedTitle}</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {relatedLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="focus-ring group flex items-center justify-between gap-4 rounded-xl border border-line bg-white px-4 py-4 font-bold shadow-sm transition hover:border-green-600 hover:shadow-md"
              >
                {link.label}
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-green-700 transition group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.75rem] bg-slate-900 p-6 text-white shadow-soft sm:p-8">
          <h2 className="text-2xl font-bold sm:text-3xl">{copy.cta.title}</h2>
          <p className="mt-3 text-slate-300">{copy.cta.text}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={getCountryPath(language, georgia)}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-500"
            >
              {copy.cta.georgiaButton}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to={getCountryPath(language, serbia)}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
            >
              {copy.cta.serbiaButton}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
