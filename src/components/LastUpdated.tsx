import { CalendarDays } from 'lucide-react';
import type { Language } from '../data/i18n';

const copy = {
  en: 'Last updated: July 2026',
  tr: 'Son güncelleme: Temmuz 2026',
  ru: 'Последнее обновление: июль 2026',
} as const;

type LastUpdatedProps = {
  language: Language;
  inverse?: boolean;
};

export default function LastUpdated({ language, inverse = false }: LastUpdatedProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${
        inverse
          ? 'bg-white/10 text-slate-100 ring-white/20 backdrop-blur-sm'
          : 'bg-slate-100 text-slate-700 ring-slate-500/15'
      }`}
    >
      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
      {copy[language]}
    </span>
  );
}
