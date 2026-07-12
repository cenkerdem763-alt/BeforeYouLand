import { Link, useLocation } from 'react-router-dom';
import { routeList } from '../data/routes';
import { siteConfig } from '../data/config';
import { languageCodes, ui, type Language } from '../data/i18n';
import PartnerCTA from './PartnerCTA';
import SupportCTA from './SupportCTA';

export default function Footer() {
  const location = useLocation();
  const language: Language =
    languageCodes.find((languageCode) => location.pathname.startsWith(`/${languageCode}`)) ?? 'en';
  const visibleRoutes = routeList.filter((route) => route.startsWith(`/${language}`)).slice(0, 7);
  const isCountryPage = location.pathname.split('/').filter(Boolean).length === 2;
  const copy = ui[language].footer;
  const contactLabels = ui[language].contact;

  return (
    <footer className="mt-20 border-t border-line bg-slate-50">
      <div className="container-shell py-10">
        {isCountryPage ? (
          <div className="mb-10 space-y-4">
            <SupportCTA language={language} />
            <PartnerCTA language={language} />
          </div>
        ) : null}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-bold">{siteConfig.siteName}</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted">
              {copy.description}
            </p>
            <p className="mt-4 max-w-2xl rounded-2xl border border-line bg-white p-4 text-xs font-semibold leading-5 text-muted">
              {copy.disclaimer}
            </p>
            <div className="mt-4 rounded-2xl border border-line bg-white p-4 text-sm shadow-sm">
              <p className="font-bold text-ink">{copy.contactTitle}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-muted">
                <a
                  href={siteConfig.contact.telegramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring rounded-full bg-slate-50 px-3 py-2 transition hover:text-blue-700"
                >
                  {contactLabels.telegram}: {siteConfig.contact.telegramUsername}
                </a>
                <a
                  href={siteConfig.contact.emailHref}
                  className="focus-ring rounded-full bg-slate-50 px-3 py-2 transition hover:text-blue-700"
                >
                  {contactLabels.email}: {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
          <nav className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted sm:grid-cols-3">
            {visibleRoutes.map((route) => (
              <Link key={route} to={route} className="hover:text-ink">
                {route}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
