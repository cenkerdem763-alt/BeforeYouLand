import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import { siteConfig } from '../data/config';
import {
  insuranceContent,
  SAFETYWING_AFFILIATE_URL,
} from '../data/insuranceContent';
import { languageCodes, type Language } from '../data/i18n';
import { getInsurancePath } from '../data/routes';

type InsurancePageProps = {
  language: Language;
};

export default function InsurancePage({ language }: InsurancePageProps) {
  const content = insuranceContent[language];

  return (
    <>
      <SEO
        title={content.seoTitle}
        description={content.metaDescription}
        canonical={`${siteConfig.baseUrl}${getInsurancePath(language)}`}
        exactTitle
        alternates={[
          ...languageCodes.map((alternateLanguage) => ({
            hrefLang: alternateLanguage,
            href: `${siteConfig.baseUrl}${getInsurancePath(alternateLanguage)}`,
          })),
          {
            hrefLang: 'x-default',
            href: `${siteConfig.baseUrl}${getInsurancePath('en')}`,
          },
        ]}
      />

      <section className="border-b border-slate-700 bg-[radial-gradient(circle_at_top_right,#173b46_0%,#0f273f_42%,#08131f_100%)] text-white">
        <div className="container-shell py-12 sm:py-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-green-300/20 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.15em] text-green-200">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            {content.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            {content.h1}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{content.intro}</p>
        </div>
      </section>

      <div className="container-shell max-w-4xl py-10 sm:py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-2xl font-bold">{content.whyTitle}</h2>
            <ul className="mt-5 space-y-3">
              {content.whyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-muted">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-green-700"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-2xl font-bold">{content.whatTitle}</h2>
            <ul className="mt-5 space-y-3">
              {content.whatPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-muted">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-8 rounded-[1.75rem] border border-line bg-slate-50 p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">{content.pickTitle}</h2>
          <p className="mt-3 leading-7 text-muted">{content.pickText}</p>
          <a
            href={SAFETYWING_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            {content.ctaText}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="mt-4 text-xs font-semibold leading-5 text-muted">
            {content.affiliateDisclosure}
          </p>
        </section>

        <aside className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-xs font-medium leading-5 text-amber-950">
          {content.disclaimer}
        </aside>
      </div>
    </>
  );
}
