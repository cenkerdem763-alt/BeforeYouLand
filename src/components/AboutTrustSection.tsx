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
    <section className="overflow-hidden rounded-[1.75rem] border border-line bg-[linear-gradient(135deg,#f7fbff_0%,#ffffff_55%,#ecfbf2_100%)] p-5 shadow-sm sm:p-7">
      <div className="grid gap-7 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-start">
        <div>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-white shadow-sm">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">
            {description}
          </p>
        </div>

        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 rounded-xl border border-white bg-white/85 px-4 py-3 text-sm font-semibold text-ink shadow-sm"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-green-700" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-600/10 bg-white/80 p-4 text-sm leading-6 text-muted">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
        <p>{disclaimer}</p>
      </div>
    </section>
  );
}
