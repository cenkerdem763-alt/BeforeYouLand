import { ExternalLink, FileCheck2, ShieldCheck } from 'lucide-react';
import type { OfficialSource, VisaResidenceItem } from '../data/visaResidenceInsurance';

type VisaResidenceInsuranceSectionProps = {
  title: string;
  officialSourcesTitle: string;
  items: VisaResidenceItem[];
  disclaimer: string;
  sources: OfficialSource[];
};

export default function VisaResidenceInsuranceSection({
  title,
  officialSourcesTitle,
  items,
  disclaimer,
  sources,
}: VisaResidenceInsuranceSectionProps) {
  return (
    <section className="mt-12 rounded-[1.5rem] border border-blue-600/15 bg-blue-50/70 p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white shadow-sm">
          <ShieldCheck className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{title}</h2>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-xl border border-blue-600/10 bg-white p-4">
            <div className="flex items-start gap-3">
              <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
              <div>
                <h3 className="font-bold leading-snug">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-4 rounded-xl border border-amber-600/15 bg-amber-50 p-4 text-sm leading-6 text-slate-700">
        {disclaimer}
      </p>

      <div className="mt-4">
        <h3 className="text-sm font-bold text-ink">{officialSourcesTitle}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {sources.map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-blue-600/15 bg-white px-3 py-2 text-xs font-bold text-blue-700 transition hover:border-blue-600/35 hover:bg-blue-50"
            >
              {source.label}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
