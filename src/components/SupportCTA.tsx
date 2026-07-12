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
    <section className="rounded-[1.5rem] border border-green-600/20 bg-[linear-gradient(135deg,#ecfbf2_0%,#ffffff_85%)] p-5 shadow-sm sm:p-6">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-700 text-white shadow-sm">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">{copy.title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{copy.text}</p>
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">
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
      <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-green-700">
        <a
          href={siteConfig.contact.telegramUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-ring rounded-full bg-white px-3 py-2 ring-1 ring-green-600/15 transition hover:text-green-600"
        >
          {contactLabels.telegram}: {siteConfig.contact.telegramUsername}
        </a>
        <a
          href={siteConfig.contact.emailHref}
          className="focus-ring rounded-full bg-white px-3 py-2 ring-1 ring-green-600/15 transition hover:text-green-600"
        >
          {contactLabels.email}: {siteConfig.contact.email}
        </a>
      </div>
    </section>
  );
}
