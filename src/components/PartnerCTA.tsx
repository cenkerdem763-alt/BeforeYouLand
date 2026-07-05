import { Handshake } from 'lucide-react';
import { siteConfig } from '../data/config';
import { ui, type Language } from '../data/i18n';

type PartnerCTAProps = {
  language: Language;
};

export default function PartnerCTA({ language }: PartnerCTAProps) {
  const copy = ui[language].partner;
  const contactLabels = ui[language].contact;

  return (
    <section className="rounded-[1.5rem] border border-ink bg-ink p-5 text-white shadow-soft sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-2 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-green-200 ring-1 ring-white/10">
            First Week Guide
          </p>
          <h2 className="text-xl font-bold sm:text-2xl">{copy.title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">{copy.text}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-green-100">
            <a
              href={siteConfig.contact.telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/10 transition hover:bg-white/15"
            >
              {contactLabels.telegram}: {siteConfig.contact.telegramUsername}
            </a>
            <a
              href={siteConfig.contact.emailHref}
              className="focus-ring rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/10 transition hover:bg-white/15"
            >
              {contactLabels.email}: {siteConfig.contact.email}
            </a>
          </div>
        </div>
        <a
          href={siteConfig.contact.advertisingHref}
          className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-blue-50"
        >
          <Handshake className="h-4 w-4" aria-hidden="true" />
          {copy.button}
        </a>
      </div>
    </section>
  );
}
