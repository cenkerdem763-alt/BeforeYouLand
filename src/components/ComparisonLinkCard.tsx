import { ArrowRightLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { comparisonContent } from '../data/comparison';
import { getComparisonPath } from '../data/routes';
import type { Language } from '../data/i18n';

type ComparisonLinkCardProps = {
  language: Language;
  className?: string;
};

export default function ComparisonLinkCard({
  language,
  className = '',
}: ComparisonLinkCardProps) {
  const copy = comparisonContent[language].linkCard;

  return (
    <Link
      to={getComparisonPath(language)}
      className={`focus-ring group flex items-center justify-between gap-5 rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 text-white shadow-sm transition hover:-translate-y-0.5 hover:border-green-400/60 hover:shadow-soft ${className}`}
    >
      <span className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green-300">
          <ArrowRightLeft className="h-5 w-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block font-bold">{copy.title}</span>
          <span className="mt-1 block text-sm leading-5 text-slate-300">{copy.text}</span>
        </span>
      </span>
      <span className="hidden shrink-0 text-sm font-bold text-green-300 sm:inline">
        {copy.button} →
      </span>
    </Link>
  );
}
