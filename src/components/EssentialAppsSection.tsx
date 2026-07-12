import {
  Banknote,
  CarTaxiFront,
  ChevronDown,
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
  openCategories: Set<EssentialCategoryKey>;
  onToggleCategory: (categoryKey: EssentialCategoryKey) => void;
};

const icons: Record<EssentialCategoryKey, typeof Smartphone> = {
  taxiTransport: CarTaxiFront,
  simInternet: Smartphone,
  housing: Home,
  foodGrocery: Utensils,
  mapsNavigation: Map,
  bankingMoney: Banknote,
};

const categoryDescriptions: Record<EssentialCategoryKey, Record<Language, string>> = {
  taxiTransport: {
    en: 'Ride-hailing, public transport and arrival-day movement.',
    tr: 'Taksi, toplu taşıma ve ilk gün ulaşımı.',
    ru: 'Такси, общественный транспорт и первые поездки.',
  },
  simInternet: {
    en: 'Mobile operators, data packages and home internet checks.',
    tr: 'Mobil operatörler, internet paketleri ve ev interneti kontrolü.',
    ru: 'Операторы, мобильный интернет и домашний интернет.',
  },
  housing: {
    en: 'Rental listings, local groups and neighborhood comparison.',
    tr: 'Kiralık ilanları, yerel gruplar ve semt karşılaştırması.',
    ru: 'Аренда, местные группы и сравнение районов.',
  },
  foodGrocery: {
    en: 'Food delivery, groceries and small local deliveries.',
    tr: 'Yemek, market ve küçük yerel teslimatlar.',
    ru: 'Доставка еды, продукты и небольшие заказы.',
  },
  mapsNavigation: {
    en: 'Maps, reviews, walking routes and offline backups.',
    tr: 'Haritalar, yorumlar, yürüyüş rotaları ve offline seçenekler.',
    ru: 'Карты, отзывы, маршруты и офлайн-запас.',
  },
  bankingMoney: {
    en: 'Banks, cards, transfers and money-management basics.',
    tr: 'Banka, kart, transfer ve para yönetimi temelleri.',
    ru: 'Банки, карты, переводы и базовые денежные вопросы.',
  },
};

export default function EssentialAppsSection({
  country,
  language,
  openCategories,
  onToggleCategory,
}: EssentialAppsSectionProps) {
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
          const isOpen = openCategories.has(category.key);
          const panelId = `${country.key}-${category.key}-apps-panel`;

          return (
            <div
              key={category.key}
              id={`apps-${category.key}`}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:border-blue-100 hover:shadow-md"
              style={{ scrollMarginTop: '6rem' }}
            >
              <button
                type="button"
                className="focus-ring grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 p-4 text-left transition hover:bg-slate-50 sm:p-5"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => onToggleCategory(category.key)}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-base font-bold">
                    {essentialCategoryLabels[category.key][language]}
                  </span>
                  <span className="mt-1 block text-sm leading-5 text-muted">
                    {categoryDescriptions[category.key][language]}
                  </span>
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-muted">
                  <ChevronDown
                    className={`h-4 w-4 transition ${isOpen ? 'rotate-180 text-blue-700' : ''}`}
                    aria-hidden="true"
                  />
                </span>
              </button>

              {isOpen ? (
                <div id={panelId} className="border-t border-line bg-slate-50/80 p-3 sm:p-4">
                  <div className="grid gap-2">
                    {category.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring group grid grid-cols-[1fr_auto] gap-3 rounded-xl border border-line bg-white p-3 transition hover:border-blue-600 hover:shadow-sm"
                      >
                        <span>
                          <span className="inline-flex items-center gap-2 text-sm font-bold text-ink">
                            <ShoppingBag className="h-4 w-4 text-green-700" aria-hidden="true" />
                            {item.name}
                          </span>
                          <span className="mt-1 block text-sm leading-5 text-muted">
                            {item.description[language]}
                          </span>
                        </span>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-muted transition group-hover:bg-blue-50 group-hover:text-blue-700">
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
