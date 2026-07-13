import { countries, getCountryPath } from './countries';
import { languageCodes, type Language } from './i18n';

export const topicSlugs = {
  en: {
    'sim-card': 'sim-card',
    esim: 'esim',
    'bank-account': 'bank-account',
    'rent-apartment': 'rent-apartment',
    transport: 'transport',
  },
  tr: {
    'sim-card': 'sim-kart',
    esim: 'esim',
    'bank-account': 'banka-hesabi',
    'rent-apartment': 'ev-kiralama',
    transport: 'ulasim',
  },
  ru: {
    'sim-card': 'sim-karta',
    esim: 'esim',
    'bank-account': 'bankovskiy-schet',
    'rent-apartment': 'arenda-zhilya',
    transport: 'transport',
  },
} as const;

export type TopicKey = keyof typeof topicSlugs.en;

export const topicKeys = Object.keys(topicSlugs.en) as TopicKey[];

export const comparisonSlugs: Record<Language, string> = {
  en: 'georgia-vs-serbia',
  tr: 'gurcistan-mi-sirbistan-mi',
  ru: 'gruziya-ili-serbiya',
};

export const getComparisonPath = (language: Language) =>
  `/${language}/${comparisonSlugs[language]}`;

export const getGuidePath = (
  language: Language,
  countrySlug: string,
  topic: TopicKey,
) => `/${language}/${countrySlug}/${topicSlugs[language][topic]}`;

export const resolveTopicFromSlug = (language: Language, slug: string) =>
  topicKeys.find((topic) => topicSlugs[language][topic] === slug);

export const routeList = [
  ...languageCodes.map((language) => `/${language}`),
  ...languageCodes.map((language) => getComparisonPath(language)),
  ...countries.flatMap((country) =>
    languageCodes.flatMap((language) => [
      getCountryPath(language, country),
      ...topicKeys.map((topic) =>
        getGuidePath(language, country.content[language].slug, topic),
      ),
    ]),
  ),
];
