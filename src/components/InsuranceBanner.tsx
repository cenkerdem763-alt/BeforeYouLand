import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { insuranceBannerText } from '../data/insuranceContent';
import type { Language } from '../data/i18n';
import { getInsurancePath } from '../data/routes';

type InsuranceBannerProps = {
  language: Language;
};

export default function InsuranceBanner({ language }: InsuranceBannerProps) {
  const copy = insuranceBannerText[language];

  return (
    <Link
      to={getInsurancePath(language)}
      className="focus-ring group my-8 block rounded-[1.75rem] bg-gradient-to-r from-blue-600 to-blue-700 p-5 text-white shadow-sm transition hover:from-blue-700 hover:to-slate-900 hover:shadow-md sm:p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-lg font-bold">{copy.title}</p>
            <p className="mt-1 text-sm leading-6 text-blue-100">{copy.subtitle}</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-blue-700">
          {copy.cta}
          <ArrowUpRight
            className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
