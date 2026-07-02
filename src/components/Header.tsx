import { Link, useLocation } from 'react-router-dom';
import { Plane } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { ui, type Language } from '../data/i18n';

const getLanguage = (pathname: string): Language => (pathname.startsWith('/tr') ? 'tr' : 'en');

export default function Header() {
  const location = useLocation();
  const language = getLanguage(location.pathname);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/92 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <Link to={`/${language}`} className="focus-ring flex items-center gap-3 rounded-md">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white">
            <Plane className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-base font-bold tracking-normal">BeforeYouLand</span>
            <span className="hidden text-xs text-muted sm:block">{ui[language].nav.brandTagline}</span>
          </span>
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
