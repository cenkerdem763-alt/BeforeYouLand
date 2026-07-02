import { Link, useLocation } from 'react-router-dom';
import { Languages } from 'lucide-react';
import { languages, type Language } from '../data/i18n';
import { countries, findCountryBySlug } from '../data/countries';
import { resolveTopicFromSlug, getGuidePath } from '../data/routes';

const counterpart = (pathname: string, nextLanguage: Language) => {
  const parts = pathname.split('/').filter(Boolean);
  const currentLanguage = parts[0] === 'tr' ? 'tr' : 'en';

  if (parts.length === 1) return `/${nextLanguage}`;

  const country = findCountryBySlug(currentLanguage, parts[1]);
  if (!country) return `/${nextLanguage}`;

  if (parts.length === 2) return `/${nextLanguage}/${country.content[nextLanguage].slug}`;

  const topic = resolveTopicFromSlug(currentLanguage, parts[2]);
  if (!topic) return `/${nextLanguage}/${country.content[nextLanguage].slug}`;

  return getGuidePath(nextLanguage, country.content[nextLanguage].slug, topic);
};

export default function LanguageSwitcher() {
  const location = useLocation();
  const currentLanguage: Language = location.pathname.startsWith('/tr') ? 'tr' : 'en';
  const nextLanguage: Language = currentLanguage === 'en' ? 'tr' : 'en';

  return (
    <div className="flex items-center gap-2">
      <Languages className="hidden h-4 w-4 text-muted sm:block" aria-hidden="true" />
      <Link
        to={counterpart(location.pathname, nextLanguage)}
        className="focus-ring rounded-full border border-line bg-white px-3 py-2 text-sm font-semibold text-ink shadow-sm transition hover:border-blue-600"
      >
        {languages[nextLanguage].shortLabel}
      </Link>
      <span className="sr-only">
        {countries.length} countries available in {languages[currentLanguage].label}
      </span>
    </div>
  );
}
