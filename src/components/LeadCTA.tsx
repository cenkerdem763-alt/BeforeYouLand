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
  const title = {
    en: `Need help with your first week in ${countryName}?`,
    tr: `${countryName} için ilk hafta yardıma mı ihtiyacın var?`,
    ru: `Нужна помощь с первой неделей в ${countryName}?`,
  }[language];
  const description = {
    en: 'Get a simple checklist for SIM card, internet, banking, transport and housing basics.',
    tr: 'SIM kart, internet, banka, ulaşım ve ev bulma gibi temel ihtiyaçları kolayca öğren.',
    ru: 'Получите простой чеклист: SIM-карта, интернет, банк, транспорт и жильё.',
  }[language];
  const button = {
    en: 'Message us',
    tr: 'Mesaj gönder',
    ru: 'Написать',
  }[language];
  const eyebrow = {
    en: 'First-week help',
    tr: 'İlk hafta desteği',
    ru: 'Помощь в первую неделю',
  }[language];

  return (
    <section
      id={compact ? undefined : 'contact'}
      className={`rounded-[1.5rem] border border-green-600/20 bg-[linear-gradient(135deg,#ecfbf2_0%,#ffffff_82%)] p-5 shadow-sm ${compact ? '' : 'sm:p-6'}`}
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
          className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-green-600"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          {button}
        </a>
      </div>
    </section>
  );
}
