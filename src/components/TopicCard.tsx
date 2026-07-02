import { Link } from 'react-router-dom';
import { Banknote, Bus, Home, Landmark, Smartphone, Wifi } from 'lucide-react';
import type { TopicKey } from '../data/routes';
import { topicLabels, type Language } from '../data/i18n';

const icons = {
  'sim-card': Smartphone,
  esim: Wifi,
  'bank-account': Landmark,
  'rent-apartment': Home,
  transport: Bus,
};

type TopicCardProps = {
  topic: TopicKey | 'costs';
  language: Language;
  to: string;
};

export default function TopicCard({ topic, language, to }: TopicCardProps) {
  const Icon = topic === 'costs' ? Banknote : icons[topic];
  const label = topic === 'costs' ? (language === 'en' ? 'First-week costs' : 'İlk hafta maliyetleri') : topicLabels[language][topic];

  return (
    <Link
      to={to}
      className="focus-ring flex min-h-28 items-start gap-4 rounded-2xl border border-line bg-white p-4 shadow-sm transition hover:border-green-600 hover:shadow-soft"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="pt-1 text-base font-semibold">{label}</span>
    </Link>
  );
}
