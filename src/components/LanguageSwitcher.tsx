import { Link, useLocation } from 'react-router-dom';
import { Languages } from 'lucide-react';
import { languageCodes, languages, type Language } from '../data/i18n';
import { countries, findCountryBySlug, getCountryPath } from '../data/countries';
import { resolveTopicFromSlug, getGuidePath } from '../data/routes';

const getLanguage = (pathname: string): Language =>
  languageCodes.find((language) => pathname.startsWith(`/${language}`)) ?? 'en';

const counterpart = (pathname: string, nextLanguage: Language) => {
  const parts = pathname.split('/').filter(Boolean);
  const currentLanguage = languageCodes.find((language) => language === parts[0]) ?? 'en';

  if (parts.length === 1) return `/${nextLanguage}`;

  const country = findCountryBySlug(currentLanguage, parts[1]);
  if (!country) return `/${nextLanguage}`;

  if (parts.length === 2) return getCountryPath(nextLanguage, country);

  const topic = resolveTopicFromSlug(currentLanguage, parts[2]);
  if (!topic) return getCountryPath(nextLanguage, country);

  return getGuidePath(nextLanguage, country.content[nextLanguage].slug, topic);
};

export default function LanguageSwitcher() {
  const location = useLocation();
  const currentLanguage = getLanguage(location.pathname);
  const nextLanguages = languageCodes.filter((language) => language !== currentLanguage);

  return (
    <div className="flex items-center gap-2">
      <Languages className="hidden h-4 w-4 text-muted sm:block" aria-hidden="true" />
      {nextLanguages.map((nextLanguage) => (
        <Link
          key={nextLanguage}
          to={counterpart(location.pathname, nextLanguage)}
          className="focus-ring rounded-full border border-line bg-white px-3 py-2 text-sm font-semibold text-ink shadow-sm transition hover:border-blue-600"
        >
          {languages[nextLanguage].shortLabel}
        </Link>
      ))}
      <span className="sr-only">
        {countries.length} countries available in {languages[currentLanguage].label}
      </span>
    </div>
  );
}
