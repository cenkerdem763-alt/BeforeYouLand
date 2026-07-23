import { CheckCircle2, Info, ShieldCheck } from 'lucide-react';

type AboutTrustSectionProps = {
  title: string;
  description: string;
  trustPoints: readonly string[];
  disclaimer: string;
};

export default function AboutTrustSection({
  title,
  description,
  trustPoints,
  disclaimer,
}: AboutTrustSectionProps) {
  return (
    <section className="overflow-hidden rounded-[1.5rem] border border-line bg-[linear-gradient(135deg,#f7fbff_0%,#ffffff_55%,#ecfbf2_100%)] p-5 shadow-sm sm:p-6">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(440px,1fr)] lg:items-start">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-white shadow-sm">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
            {description}
          </p>
        </div>

        <ul className="grid gap-2 sm:grid-cols-2">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2.5 rounded-xl border border-white bg-white/85 px-3 py-2.5 text-sm font-semibold leading-5 text-ink shadow-sm"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-green-700" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-blue-600/10 bg-white/80 px-3 py-2.5 text-xs leading-5 text-muted sm:text-sm">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
        <p>{disclaimer}</p>
      </div>
    </section>
  );
}
