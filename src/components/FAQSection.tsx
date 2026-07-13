import { HelpCircle } from 'lucide-react';
import type { FAQItem } from '../data/countryFaqs';

type FAQSectionProps = {
  title: string;
  items: FAQItem[];
  className?: string;
};

export default function FAQSection({ title, items, className = '' }: FAQSectionProps) {
  return (
    <section className={`rounded-[1.5rem] border border-line bg-white p-5 shadow-sm sm:p-6 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-blue-700">
          <HelpCircle className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
      </div>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-line bg-slate-50 p-4 open:bg-white open:shadow-sm"
          >
            <summary className="cursor-pointer font-semibold marker:text-green-700">
              {item.question}
            </summary>
            <p className="mt-3 leading-7 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
