import {
  Banknote,
  CarTaxiFront,
  CheckCircle2,
  ClipboardList,
  FileText,
  Home,
  Map,
  Phone,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import type { Country } from '../data/countries';
import {
  firstWeekChecklists,
  type ChecklistCategoryKey,
} from '../data/firstWeekChecklist';
import { ui, type Language } from '../data/i18n';

type FirstWeekChecklistSectionProps = {
  country: Country;
  language: Language;
};

const icons: Record<ChecklistCategoryKey, typeof Smartphone> = {
  simMobile: Smartphone,
  taxiTransport: CarTaxiFront,
  housing: Home,
  bankingMoney: Banknote,
  usefulApps: Map,
  documents: FileText,
  emergencyNumbers: Phone,
  safetyTips: ShieldCheck,
};

export default function FirstWeekChecklistSection({
  country,
  language,
}: FirstWeekChecklistSectionProps) {
  const copy = ui[language].firstWeekChecklist;
  const checklist = firstWeekChecklists[country.key];

  return (
    <section className="mt-12">
      <div className="flex max-w-3xl items-start gap-3">
        <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-700">
          <ClipboardList className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-2xl font-bold">{copy.title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{copy.note}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {checklist.map((category) => {
          const Icon = icons[category.key];

          return (
            <div key={category.key} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold">{category.title[language]}</h3>
                  <ul className="mt-3 space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item[language]}
                        className="flex gap-3 rounded-xl bg-slate-50 p-3 text-sm leading-6 text-muted"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-green-600/25 bg-white text-green-700">
                          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <span>{item[language]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
