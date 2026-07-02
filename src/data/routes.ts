import { countries, getCountryPath } from './countries';
import type { Language } from './i18n';

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
} as const;

export type TopicKey = keyof typeof topicSlugs.en;

export const topicKeys = Object.keys(topicSlugs.en) as TopicKey[];

export const getGuidePath = (
  language: Language,
  countrySlug: string,
  topic: TopicKey,
) => `/${language}/${countrySlug}/${topicSlugs[language][topic]}`;

export const resolveTopicFromSlug = (language: Language, slug: string) =>
  topicKeys.find((topic) => topicSlugs[language][topic] === slug);

export const routeList = [
  '/en',
  '/tr',
  ...countries.flatMap((country) =>
    (['en', 'tr'] as Language[]).flatMap((language) => [
      getCountryPath(language, country),
      ...topicKeys.map((topic) =>
        getGuidePath(language, country.content[language].slug, topic),
      ),
    ]),
  ),
];
