import type { Language } from './i18n';

export type CountryKey = 'georgia' | 'serbia';

export type Country = {
  key: CountryKey;
  flag: string;
  accent: 'blue' | 'green';
  emergency: string[];
  apps: string[];
  content: Record<
    Language,
    {
      name: string;
      slug: string;
      summary: string;
      capital: string;
      currency: string;
      bestFor: string;
      overview: string;
    }
  >;
};

export const countries: Country[] = [
  {
    key: 'georgia',
    flag: 'GE',
    accent: 'green',
    emergency: ['112 emergency services', 'Police, ambulance and fire through 112'],
    apps: ['Bolt', 'Yandex Go', 'Wolt', 'Glovo', 'TBC Bank / Bank of Georgia apps'],
    content: {
      en: {
        name: 'Georgia',
        slug: 'georgia',
        summary: 'A practical starter guide for Tbilisi, Batumi and first-week setup in Georgia.',
        capital: 'Tbilisi',
        currency: 'Georgian lari (GEL)',
        bestFor: 'Flexible stays, remote workers and regional travel',
        overview:
          'Georgia is relatively straightforward for short stays, but SIM registration, housing deposits and bank requirements can still vary by provider and city.',
      },
      tr: {
        name: 'Gürcistan',
        slug: 'gurcistan',
        summary: 'Tiflis, Batum ve Gürcistan’daki ilk hafta kurulumu için pratik başlangıç rehberi.',
        capital: 'Tiflis',
        currency: 'Gürcistan larisi (GEL)',
        bestFor: 'Esnek konaklama, uzaktan çalışma ve bölgesel seyahat',
        overview:
          'Gürcistan kısa kalışlar için genelde kolaydır; yine de SIM kaydı, kira depozitoları ve banka şartları sağlayıcıya ve şehre göre değişebilir.',
      },
    },
  },
  {
    key: 'serbia',
    flag: 'RS',
    accent: 'blue',
    emergency: ['112 general emergency', '192 police', '194 ambulance', '193 fire'],
    apps: ['Yandex Go', 'CarGo', 'Moovit', 'Glovo', 'Wolt', 'eUprava'],
    content: {
      en: {
        name: 'Serbia',
        slug: 'serbia',
        summary: 'Arrival essentials for Belgrade, Novi Sad and getting set up in Serbia.',
        capital: 'Belgrade',
        currency: 'Serbian dinar (RSD)',
        bestFor: 'City living, regional connections and longer stays',
        overview:
          'Serbia has strong city infrastructure, but paperwork can be more formal for banking, rentals and longer stays. Check provider requirements before arrival.',
      },
      tr: {
        name: 'Sırbistan',
        slug: 'sirbistan',
        summary: 'Belgrad, Novi Sad ve Sırbistan’da yerleşme süreci için varış temel bilgileri.',
        capital: 'Belgrad',
        currency: 'Sırp dinarı (RSD)',
        bestFor: 'Şehir yaşamı, bölgesel bağlantılar ve uzun kalışlar',
        overview:
          'Sırbistan şehir altyapısı güçlü bir ülkedir; ancak banka, kira ve uzun kalış işlemlerinde evrak süreçleri daha resmi olabilir.',
      },
    },
  },
];

export const findCountryBySlug = (language: Language, slug: string) =>
  countries.find((country) => country.content[language].slug === slug);

export const getCountryPath = (language: Language, country: Country) =>
  `/${language}/${country.content[language].slug}`;
