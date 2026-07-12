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
    <section className="flex h-full flex-col rounded-[1.5rem] border border-ink bg-[linear-gradient(135deg,#102033_0%,#173653_100%)] p-5 text-white shadow-soft sm:p-6 lg:p-7">
      <div className="flex h-full flex-col">
        <div>
          <p className="mb-2 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-green-200 ring-1 ring-white/10">
            First Week Guide
          </p>
          <h2 className="text-xl font-bold leading-tight sm:text-2xl">{copy.title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">{copy.text}</p>
        </div>
        <div className="mt-auto pt-5">
          <a
            href={siteConfig.contact.advertisingHref}
            className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink shadow-sm transition hover:bg-blue-50"
          >
            <Handshake className="h-4 w-4" aria-hidden="true" />
            {copy.button}
          </a>
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-green-100">
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
      </div>
    </section>
  );
}
