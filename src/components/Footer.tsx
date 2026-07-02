import { Link, useLocation } from 'react-router-dom';
import { routeList } from '../data/routes';
import { ui, type Language } from '../data/i18n';

export default function Footer() {
  const location = useLocation();
  const language: Language = location.pathname.startsWith('/tr') ? 'tr' : 'en';
  const visibleRoutes = routeList.filter((route) => route.startsWith(`/${language}`)).slice(0, 7);
  const copy = ui[language].footer;

  return (
    <footer className="mt-20 border-t border-line bg-slate-50">
      <div className="container-shell py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-bold">BeforeYouLand</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted">
              {copy.description}
            </p>
            <p className="mt-4 max-w-2xl rounded-2xl border border-line bg-white p-4 text-xs font-semibold leading-5 text-muted">
              {copy.disclaimer}
            </p>
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
