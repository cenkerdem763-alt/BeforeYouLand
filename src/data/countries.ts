import type { Language } from './i18n';

export type CountryKey = 'georgia' | 'serbia';

export type Country = {
  key: CountryKey;
  flag: string;
  accent: 'blue' | 'green';
  emergency: Record<Language, string[]>;
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
    emergency: {
      en: ['112 emergency services', 'Police, ambulance and fire through 112'],
      tr: ['112 acil yardım', 'Polis, ambulans ve itfaiye için 112'],
      ru: ['112 экстренная помощь', 'Полиция, скорая и пожарная служба через 112'],
    },
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
      ru: {
        name: 'Грузия',
        slug: 'gruziya',
        summary: 'Практичный стартовый гид для Тбилиси, Батуми и первой недели в Грузии.',
        capital: 'Тбилиси',
        currency: 'Грузинский лари (GEL)',
        bestFor: 'Гибкое пребывание, удалённая работа и поездки по региону',
        overview:
          'Грузия обычно понятна для коротких поездок, но регистрация SIM-карты, депозиты за жильё и требования банков могут отличаться по провайдеру и городу.',
      },
    },
  },
  {
    key: 'serbia',
    flag: 'RS',
    accent: 'blue',
    emergency: {
      en: ['112 general emergency', '192 police', '194 ambulance', '193 fire'],
      tr: ['112 genel acil', '192 polis', '194 ambulans', '193 itfaiye'],
      ru: ['112 общий экстренный номер', '192 полиция', '194 скорая помощь', '193 пожарная служба'],
    },
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
      ru: {
        name: 'Сербия',
        slug: 'serbiya',
        summary: 'Главное для приезда в Белград, Нови-Сад и первой недели в Сербии.',
        capital: 'Белград',
        currency: 'Сербский динар (RSD)',
        bestFor: 'Городская жизнь, региональные поездки и более долгие остановки',
        overview:
          'В Сербии хорошая городская инфраструктура, но для банков, аренды и долгого пребывания часто нужно больше документов. Проверяйте требования заранее.',
      },
    },
  },
];

export const findCountryBySlug = (language: Language, slug: string) =>
  countries.find((country) => country.content[language].slug === slug);

export const getCountryPath = (language: Language, country: Country) =>
  `/${language}/${country.content[language].slug}`;
