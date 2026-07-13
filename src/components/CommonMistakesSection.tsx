import { AlertTriangle } from 'lucide-react';
import type { CommonMistake } from '../data/commonMistakes';

type CommonMistakesSectionProps = {
  title: string;
  items: CommonMistake[];
};

export default function CommonMistakesSection({ title, items }: CommonMistakesSectionProps) {
  return (
    <section className="mt-12">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-600/15">
          <AlertTriangle className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {items.map((item, index) => (
          <article
            key={item.title}
            className="flex gap-3 rounded-xl border border-amber-900/10 bg-white p-4 shadow-sm"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-xs font-bold text-amber-800">
              {index + 1}
            </span>
            <div>
              <h3 className="font-bold leading-snug">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
