import { Link } from 'react-router-dom';
import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  HelpCircle,
  MapPin,
  ShieldCheck,
  WalletCards,
} from 'lucide-react';
import Badge from './Badge';
import CTABox from './CTABox';
import LeadCTA from './LeadCTA';
import { getCountryPath, type Country } from '../data/countries';
import type { Guide } from '../data/guides';
import { siteConfig } from '../data/config';
import { confidenceLabels, ui, type Language } from '../data/i18n';

type GuideLayoutProps = {
  guide: Guide;
  country: Country;
  language: Language;
};

const Section = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section className="rounded-[1.5rem] border border-line bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-blue-700">
        {icon}
      </span>
      <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
    </div>
    <div className="mt-4">{children}</div>
  </section>
);

export default function GuideLayout({ guide, country, language }: GuideLayoutProps) {
  const labels = ui[language].guide;
  const countryLabels = ui[language].country;
  const countryPath = getCountryPath(language, country);
  const isSimGuide = guide.topic === 'sim-card' || guide.topic === 'esim';
  const ctaTitle = isSimGuide ? labels.simCtaTitle : labels.ctaTitle;
  const ctaText = isSimGuide ? labels.simCtaText : labels.ctaText;
  const ctaNote = isSimGuide ? labels.simCtaNote : labels.ctaNote;
  const ctaSoonNote = isSimGuide ? labels.simCtaSoonNote : labels.ctaSoonNote;
  const confidenceTone = guide.confidence === 'High' ? 'green' : 'blue';
  const confidenceLabel = confidenceLabels[language][guide.confidence];

  return (
    <article className="container-shell py-10 sm:py-14">
      <nav className="text-sm text-muted" aria-label="Breadcrumb">
        <Link to={`/${language}`} className="hover:text-ink">
          {siteConfig.siteName}
        </Link>
        <span className="px-2">/</span>
        <Link to={countryPath} className="hover:text-ink">
          {country.content[language].name}
        </Link>
      </nav>

      <header className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone={country.accent}>{country.flag}</Badge>
          <Badge tone="neutral">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              {labels.lastUpdated}: {guide.lastUpdated}
            </span>
          </Badge>
          <Badge tone={confidenceTone}>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              {labels.confidence}: {confidenceLabel}
            </span>
          </Badge>
        </div>
        <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">{guide.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted">{guide.summary}</p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-9">
          {isSimGuide ? (
            <CTABox
              title={ctaTitle}
              text={ctaText}
              button={labels.ctaButton}
              note={ctaNote}
              soonNote={ctaSoonNote}
              eyebrow={labels.ctaEyebrow}
            />
          ) : null}

          <section className="rounded-[1.5rem] border border-blue-600/20 bg-blue-50 p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-blue-700">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="text-xl font-bold">{labels.quickAnswer}</h2>
            </div>
            <p className="mt-3 leading-7 text-muted">{guide.quickAnswer}</p>
          </section>

          {guide.travelerOptions ? (
            <Section title={labels.bestOption} icon={<CheckCircle2 className="h-5 w-5" aria-hidden="true" />}>
              <div className="grid gap-3 sm:grid-cols-2">
                {guide.travelerOptions.map((option) => (
                  <div key={option.label} className="rounded-2xl border border-line bg-slate-50 p-4">
                    <h3 className="font-bold">{option.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{option.recommendation}</p>
                  </div>
                ))}
              </div>
            </Section>
          ) : null}

          {guide.whereToGet ? (
            <Section title={labels.whereToGet} icon={<MapPin className="h-5 w-5" aria-hidden="true" />}>
              <div className="grid gap-3 sm:grid-cols-2">
                {guide.whereToGet.map((place) => (
                  <div key={place.label} className="rounded-2xl border border-line p-4">
                    <h3 className="font-bold">{place.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{place.details}</p>
                  </div>
                ))}
              </div>
            </Section>
          ) : null}

          <Section title={labels.steps} icon={<ClipboardList className="h-5 w-5" aria-hidden="true" />}>
            <ol className="space-y-3">
              {guide.steps.map((step, index) => (
                <li key={step} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-muted">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="leading-7">{step}</span>
                </li>
              ))}
            </ol>
          </Section>

          <Section title={labels.documents} icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {guide.documents.map((item) => (
                <li key={item} className="rounded-2xl border border-line p-4 text-sm font-semibold">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title={labels.costs} icon={<WalletCards className="h-5 w-5" aria-hidden="true" />}>
            <ul className="space-y-3 text-muted">
              {guide.costs.map((item) => (
                <li key={item} className="rounded-2xl bg-slate-50 p-4 leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title={labels.mistakes} icon={<AlertCircle className="h-5 w-5" aria-hidden="true" />}>
            <ul className="space-y-3 text-muted">
              {guide.mistakes.map((item) => (
                <li key={item} className="rounded-2xl border border-line p-4 leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title={labels.links} icon={<ExternalLink className="h-5 w-5" aria-hidden="true" />}>
            <div className="grid gap-3 sm:grid-cols-3">
              {guide.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring flex items-center justify-between gap-3 rounded-2xl border border-line p-4 text-sm font-semibold hover:border-blue-600"
                >
                  {link.label}
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted" />
                </a>
              ))}
            </div>
          </Section>

          <Section title={labels.faq} icon={<HelpCircle className="h-5 w-5" aria-hidden="true" />}>
            <div className="space-y-3">
              {guide.faq.map((item) => (
                <details key={item.question} className="group rounded-2xl border border-line bg-slate-50 p-4 open:bg-white open:shadow-sm">
                  <summary className="cursor-pointer font-semibold">{item.question}</summary>
                  <p className="mt-3 leading-7 text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
          </Section>

          {guide.verificationNote ? (
            <Section title={labels.verificationNote} icon={<CalendarDays className="h-5 w-5" aria-hidden="true" />}>
              <p className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-muted">
                {guide.verificationNote}
              </p>
            </Section>
          ) : null}

          <p className="rounded-2xl bg-slate-100 p-4 text-sm leading-6 text-muted">{labels.disclaimer}</p>
          {!isSimGuide ? (
            <CTABox
              title={ctaTitle}
              text={ctaText}
              button={labels.ctaButton}
              note={ctaNote}
              soonNote={ctaSoonNote}
              eyebrow={labels.ctaEyebrow}
            />
          ) : null}

          <LeadCTA country={country} language={language} />
        </div>

        <aside className="h-fit rounded-2xl border border-line bg-white p-5 shadow-soft lg:sticky lg:top-24">
          <div className="flex flex-wrap gap-2">
            <Badge tone="neutral">{labels.lastUpdated}: {guide.lastUpdated}</Badge>
            <Badge tone={confidenceTone}>{labels.confidence}: {confidenceLabel}</Badge>
          </div>
          <p className="text-sm font-bold">{country.content[language].name}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{country.content[language].overview}</p>
          <dl className="mt-5 space-y-3 text-sm">
            <div>
              <dt className="font-semibold">{countryLabels.capital}</dt>
              <dd className="text-muted">{country.content[language].capital}</dd>
            </div>
            <div>
              <dt className="font-semibold">{countryLabels.currency}</dt>
              <dd className="text-muted">{country.content[language].currency}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </article>
  );
}
