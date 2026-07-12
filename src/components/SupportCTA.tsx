import { Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/config';
import { ui, type Language } from '../data/i18n';

type SupportCTAProps = {
  language: Language;
};

export default function SupportCTA({ language }: SupportCTAProps) {
  const copy = ui[language].support;
  const contactLabels = ui[language].contact;

  return (
    <section className="flex h-full flex-col rounded-[1.5rem] border border-emerald-300/15 bg-[linear-gradient(135deg,#0b2b29_0%,#102a32_100%)] p-5 text-white shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-6 lg:p-7">
      <div className="flex h-full flex-col">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-700 text-white shadow-sm">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">{copy.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{copy.text}</p>
          </div>
        </div>
        <div className="mt-auto pt-5">
          <div className="grid gap-3 sm:flex sm:flex-wrap">
            <a
              href={siteConfig.contact.telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-green-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-green-600"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {copy.primaryButton}
            </a>
            <a
              href={siteConfig.contact.emailHref}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-bold text-ink shadow-sm transition hover:border-green-600"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {copy.secondaryButton}
            </a>
          </div>
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
