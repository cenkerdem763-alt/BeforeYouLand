import { MessageCircle } from 'lucide-react';
import type { Country } from '../data/countries';
import type { Language } from '../data/i18n';

type LeadCTAProps = {
  country: Country;
  language: Language;
  compact?: boolean;
};

export default function LeadCTA({ country, language, compact = false }: LeadCTAProps) {
  const countryName = country.content[language].name;
  const title =
    language === 'en'
      ? `Need help with your first week in ${countryName}?`
      : `${countryName} için ilk hafta yardıma mı ihtiyacın var?`;
  const description =
    language === 'en'
      ? 'Get a simple checklist for SIM card, internet, banking, transport and housing basics.'
      : 'SIM kart, internet, banka, ulaşım ve ev bulma gibi temel ihtiyaçları kolayca öğren.';
  const button = language === 'en' ? 'Message us' : 'Mesaj gönder';
  const eyebrow = language === 'en' ? 'First-week help' : 'İlk hafta desteği';

  return (
    <section
      id={compact ? undefined : 'contact'}
      className={`rounded-[1.5rem] border border-green-600/20 bg-green-50 p-5 shadow-sm ${compact ? '' : 'sm:p-6'}`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-2 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-green-700 ring-1 ring-green-600/15">
            {eyebrow}
          </p>
          <h2 className={`${compact ? 'text-lg' : 'text-xl sm:text-2xl'} font-bold`}>{title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
        </div>
        <a
          href="#contact"
          className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-600"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          {button}
        </a>
      </div>
    </section>
  );
}
