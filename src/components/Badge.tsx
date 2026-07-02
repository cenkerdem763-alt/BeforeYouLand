type BadgeProps = {
  tone?: 'blue' | 'green' | 'neutral';
  children: React.ReactNode;
};

export default function Badge({ tone = 'neutral', children }: BadgeProps) {
  const classes = {
    blue: 'bg-blue-50 text-blue-700 ring-blue-600/15',
    green: 'bg-green-50 text-green-700 ring-green-600/15',
    neutral: 'bg-slate-100 text-slate-700 ring-slate-500/15',
  };

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${classes[tone]}`}>
      {children}
    </span>
  );
}
