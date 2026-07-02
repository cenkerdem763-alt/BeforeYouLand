import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, MapPin, WalletCards } from 'lucide-react';
import type { Country } from '../data/countries';
import { topicLabels, ui, type Language } from '../data/i18n';
import { getCountryPath } from '../data/countries';
import Badge from './Badge';

type CountryCardProps = {
  country: Country;
  language: Language;
};

export default function CountryCard({ country, language }: CountryCardProps) {
  const content = country.content[language];
  const capitalLabel = language === 'en' ? 'Capital' : 'Başkent';
  const currencyLabel = language === 'en' ? 'Currency' : 'Para birimi';

  return (
    <Link
      to={getCountryPath(language, country)}
      className="focus-ring group relative flex h-full min-h-[360px] overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-soft transition hover:-translate-y-1 hover:border-blue-600"
    >
      <div className={`absolute inset-x-0 top-0 h-28 ${country.accent === 'green' ? 'bg-green-50' : 'bg-blue-50'}`} />
      <div className="relative flex h-full w-full flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="flex items-center justify-between gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-lg font-black shadow-sm ring-1 ring-black/5">
              {country.flag}
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-muted shadow-sm ring-1 ring-black/5 transition group-hover:translate-x-1 group-hover:text-blue-600">
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <Badge tone={country.accent}>{content.bestFor}</Badge>
            <h3 className="mt-4 text-3xl font-bold">{content.name}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{content.summary}</p>
          </div>
        </div>

        <div className="mt-7">
          <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-4">
              <MapPin className="h-4 w-4 text-blue-600" aria-hidden="true" />
              <p className="mt-2 font-semibold text-ink">{capitalLabel}</p>
              <p className="text-muted">{content.capital}</p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-4">
              <WalletCards className="h-4 w-4 text-green-700" aria-hidden="true" />
              <p className="mt-2 font-semibold text-ink">{currencyLabel}</p>
              <p className="text-muted">{content.currency}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {(['sim-card', 'esim', 'bank-account'] as const).map((topic) => (
              <span key={topic} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-muted">
                {topicLabels[language][topic]}
              </span>
            ))}
          </div>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            {ui[language].home.cardCta}
          </p>
        </div>
      </div>
    </Link>
  );
}
