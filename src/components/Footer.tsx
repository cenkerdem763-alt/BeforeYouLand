import { Link, useLocation } from 'react-router-dom';
import { countries, findCountryBySlug, getCountryPath } from '../data/countries';
import { getGuidePath, topicKeys } from '../data/routes';
import { siteConfig } from '../data/config';
import { languageCodes, topicLabels, ui, type Language } from '../data/i18n';
import PartnerCTA from './PartnerCTA';
import SupportCTA from './SupportCTA';

export default function Footer() {
  const location = useLocation();
  const language: Language =
    languageCodes.find((languageCode) => location.pathname.startsWith(`/${languageCode}`)) ?? 'en';
  const pathParts = location.pathname.split('/').filter(Boolean);
  const isCountryPage = pathParts.length === 2;
  const currentCountry = pathParts[1] ? findCountryBySlug(language, pathParts[1]) : undefined;
  const copy = ui[language].footer;
  const footerLinks = currentCountry
    ? [
        { to: `/${language}`, label: ui[language].nav.home },
        {
          to: getCountryPath(language, currentCountry),
          label: currentCountry.content[language].name,
        },
        ...topicKeys.map((topic) => ({
          to: getGuidePath(language, currentCountry.content[language].slug, topic),
          label: topicLabels[language][topic],
        })),
      ]
    : [
        { to: `/${language}`, label: ui[language].nav.home },
        ...countries.map((country) => ({
          to: getCountryPath(language, country),
          label: country.content[language].name,
        })),
      ];

  return (
    <footer className="mt-20 border-t border-white/10 bg-[linear-gradient(180deg,#0b1722_0%,#071018_100%)] text-white">
      <div className="container-shell py-8">
        {isCountryPage ? (
          <div className="mb-7 grid items-stretch gap-3 lg:grid-cols-2">
            <SupportCTA language={language} />
            <PartnerCTA language={language} />
          </div>
        ) : null}
        <div className="flex flex-col gap-6 border-t border-white/10 pt-7 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <p className="text-lg font-bold">{siteConfig.siteName}</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
              {copy.description}
            </p>
            <p className="mt-5 border-l-2 border-green-400/40 pl-3 text-xs font-medium leading-5 text-slate-400">
              {copy.disclaimer}
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-300 sm:grid-cols-3">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="font-medium transition hover:text-green-300">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
