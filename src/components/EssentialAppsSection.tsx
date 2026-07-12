import {
  Banknote,
  CarTaxiFront,
  ExternalLink,
  Home,
  Map,
  PanelsTopLeft,
  ShoppingBag,
  Smartphone,
  Utensils,
} from 'lucide-react';
import type { Country } from '../data/countries';
import {
  essentialApps,
  essentialCategoryLabels,
  type EssentialCategoryKey,
} from '../data/essentialApps';
import { ui, type Language } from '../data/i18n';

type EssentialAppsSectionProps = {
  country: Country;
  language: Language;
};

const icons: Record<EssentialCategoryKey, typeof Smartphone> = {
  taxiTransport: CarTaxiFront,
  simInternet: Smartphone,
  housing: Home,
  foodGrocery: Utensils,
  mapsNavigation: Map,
  bankingMoney: Banknote,
};

export default function EssentialAppsSection({ country, language }: EssentialAppsSectionProps) {
  const copy = ui[language].essentialApps;
  const categories = essentialApps[country.key];

  return (
    <section className="mt-12">
      <div className="flex max-w-3xl items-start gap-3">
        <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
          <PanelsTopLeft className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-2xl font-bold">{copy.title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{copy.note}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {categories.map((category) => {
          const Icon = icons[category.key];

          return (
            <div
              key={category.key}
              className="rounded-2xl border border-line bg-white p-4 shadow-sm sm:p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-bold">
                  {essentialCategoryLabels[category.key][language]}
                </h3>
              </div>
              <div className="mt-4 grid gap-3">
                {category.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring group rounded-2xl border border-line bg-slate-50 p-4 transition hover:border-blue-600 hover:bg-white hover:shadow-sm"
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="inline-flex items-center gap-2 font-bold text-ink">
                        <ShoppingBag className="h-4 w-4 text-green-700" aria-hidden="true" />
                        {item.name}
                      </span>
                      <ExternalLink
                        className="mt-0.5 h-4 w-4 shrink-0 text-muted transition group-hover:text-blue-600"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-muted">
                      {item.description[language]}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
