import { Link } from 'react-router-dom';
import {
  AlertCircle,
  ArrowRight,
  Bus,
  CalendarDays,
  CarTaxiFront,
  Building2,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  Luggage,
  Map,
  MapPin,
  PlaneLanding,
  ShieldCheck,
  Smartphone,
  WalletCards,
  Wifi,
} from 'lucide-react';
import Badge from './Badge';
import CTABox from './CTABox';
import FAQSection from './FAQSection';
import LastUpdated from './LastUpdated';
import LeadCTA from './LeadCTA';
import { getCountryPath, type Country } from '../data/countries';
import type { Guide } from '../data/guides';
import { siteConfig } from '../data/config';
import { confidenceLabels, topicLabels, ui, type Language } from '../data/i18n';
import { getGuidePath } from '../data/routes';

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
  const isPhysicalSimGuide = guide.topic === 'sim-card';
  const isEsimGuide = guide.topic === 'esim';
  const isTransportGuide = guide.topic === 'transport';
  const isHousingGuide = guide.topic === 'rent-apartment';
  const isBankingGuide = guide.topic === 'bank-account';
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
          <LastUpdated language={language} />
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

          {isEsimGuide && guide.esimBasics ? (
            <Section title={labels.whatIsEsim} icon={<Wifi className="h-5 w-5" aria-hidden="true" />}>
              <p className="rounded-2xl bg-slate-50 p-4 leading-7 text-muted">{guide.esimBasics}</p>
            </Section>
          ) : null}

          {isEsimGuide && guide.simComparison ? (
            <Section title={labels.simOrEsim} icon={<Smartphone className="h-5 w-5" aria-hidden="true" />}>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-line p-4">
                  <h3 className="font-bold">eSIM</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{guide.simComparison.esim}</p>
                </div>
                <div className="rounded-2xl border border-line p-4">
                  <h3 className="font-bold">{labels.physicalSim}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{guide.simComparison.physicalSim}</p>
                </div>
              </div>
            </Section>
          ) : null}

          {isHousingGuide && guide.housingSources ? (
            <Section title={labels.housingWhereToSearch} icon={<Building2 className="h-5 w-5" aria-hidden="true" />}>
              <div className="grid gap-3 sm:grid-cols-2">
                {guide.housingSources.map((source) => (
                  <div key={source.label} className="rounded-2xl border border-line p-4">
                    <h3 className="font-bold">{source.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{source.details}</p>
                  </div>
                ))}
              </div>
            </Section>
          ) : null}

          {isBankingGuide && guide.bankingOptions ? (
            <Section title={labels.bankingBasics} icon={<Building2 className="h-5 w-5" aria-hidden="true" />}>
              <div className="grid gap-3 sm:grid-cols-2">
                {guide.bankingOptions.map((option) => (
                  <div key={option.label} className="rounded-2xl border border-line p-4">
                    <h3 className="font-bold">{option.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{option.details}</p>
                  </div>
                ))}
              </div>
            </Section>
          ) : null}

          {guide.travelerOptions ? (
            <Section title={isEsimGuide ? labels.esimWhenUseful : isHousingGuide ? labels.shortVsLongHousing : isPhysicalSimGuide ? labels.simOptions : labels.bestOption} icon={<CheckCircle2 className="h-5 w-5" aria-hidden="true" />}>
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
            <Section title={isEsimGuide ? labels.esimConnectionOptions : labels.whereToGet} icon={<MapPin className="h-5 w-5" aria-hidden="true" />}>
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

          {isEsimGuide && guide.esimPurchaseChecks ? (
            <Section title={labels.esimPurchaseChecks} icon={<CheckCircle2 className="h-5 w-5" aria-hidden="true" />}>
              <ul className="space-y-3 text-muted">
                {guide.esimPurchaseChecks.map((item) => (
                  <li key={item} className="rounded-2xl bg-slate-50 p-4 leading-7">{item}</li>
                ))}
              </ul>
            </Section>
          ) : null}

          {isEsimGuide && guide.esimActivationTips ? (
            <Section title={labels.esimActivationCompatibility} icon={<Smartphone className="h-5 w-5" aria-hidden="true" />}>
              <ul className="space-y-3 text-muted">
                {guide.esimActivationTips.map((item) => (
                  <li key={item} className="rounded-2xl border border-line p-4 leading-7">{item}</li>
                ))}
              </ul>
            </Section>
          ) : null}

          {isTransportGuide && guide.transportApps ? (
            <Section title={labels.transportApps} icon={<CarTaxiFront className="h-5 w-5" aria-hidden="true" />}>
              <div className="grid gap-3 sm:grid-cols-2">
                {guide.transportApps.map((app) => (
                  <div key={app.label} className="rounded-2xl border border-line p-4">
                    <h3 className="font-bold">{app.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{app.details}</p>
                  </div>
                ))}
              </div>
            </Section>
          ) : null}

          {isTransportGuide && guide.publicTransportTips ? (
            <Section title={labels.publicTransportBasics} icon={<Bus className="h-5 w-5" aria-hidden="true" />}>
              <ul className="space-y-3 text-muted">
                {guide.publicTransportTips.map((tip) => (
                  <li key={tip} className="rounded-2xl bg-slate-50 p-4 leading-7">{tip}</li>
                ))}
              </ul>
            </Section>
          ) : null}

          {isTransportGuide && guide.airportToCityTips ? (
            <Section title={labels.airportToCity} icon={<PlaneLanding className="h-5 w-5" aria-hidden="true" />}>
              <ul className="space-y-3 text-muted">
                {guide.airportToCityTips.map((tip) => (
                  <li key={tip} className="rounded-2xl border border-line p-4 leading-7">{tip}</li>
                ))}
              </ul>
            </Section>
          ) : null}

          {isTransportGuide && guide.navigationApps ? (
            <Section title={labels.mapsNavigation} icon={<Map className="h-5 w-5" aria-hidden="true" />}>
              <div className="grid gap-3 sm:grid-cols-2">
                {guide.navigationApps.map((app) => (
                  <div key={app.label} className="rounded-2xl border border-line p-4">
                    <h3 className="font-bold">{app.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{app.details}</p>
                  </div>
                ))}
              </div>
            </Section>
          ) : null}

          {!isBankingGuide ? (
            <Section title={isEsimGuide ? labels.esimFirstWeekTips : isHousingGuide ? labels.housingFirstWeekTips : isPhysicalSimGuide ? labels.simFirstWeekTips : isTransportGuide ? labels.transportFirstWeekTips : labels.steps} icon={<ClipboardList className="h-5 w-5" aria-hidden="true" />}>
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
          ) : null}

          {isHousingGuide && guide.housingChecks ? (
            <Section title={labels.housingChecks} icon={<CheckCircle2 className="h-5 w-5" aria-hidden="true" />}>
              <ul className="space-y-3 text-muted">
                {guide.housingChecks.map((item) => (
                  <li key={item} className="rounded-2xl bg-slate-50 p-4 leading-7">{item}</li>
                ))}
              </ul>
            </Section>
          ) : null}

          {isHousingGuide && guide.locationTransportTips ? (
            <Section title={labels.housingLocationTransport} icon={<MapPin className="h-5 w-5" aria-hidden="true" />}>
              <ul className="space-y-3 text-muted">
                {guide.locationTransportTips.map((item) => (
                  <li key={item} className="rounded-2xl border border-line p-4 leading-7">{item}</li>
                ))}
              </ul>
            </Section>
          ) : null}

          <Section title={isEsimGuide ? labels.esimWhatYouNeed : isBankingGuide ? labels.bankingDocuments : isHousingGuide ? labels.housingPrepare : isTransportGuide ? labels.prepareBeforeArrival : labels.documents} icon={isTransportGuide ? <Luggage className="h-5 w-5" aria-hidden="true" /> : <ShieldCheck className="h-5 w-5" aria-hidden="true" />}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {guide.documents.map((item) => (
                <li key={item} className="rounded-2xl border border-line p-4 text-sm font-semibold">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          {isBankingGuide && guide.bankQuestions ? (
            <Section title={labels.bankingQuestions} icon={<CheckCircle2 className="h-5 w-5" aria-hidden="true" />}>
              <ul className="space-y-3 text-muted">
                {guide.bankQuestions.map((item) => (
                  <li key={item} className="rounded-2xl bg-slate-50 p-4 leading-7">{item}</li>
                ))}
              </ul>
            </Section>
          ) : null}

          {isBankingGuide && guide.paymentBasics ? (
            <Section title={labels.paymentBasics} icon={<WalletCards className="h-5 w-5" aria-hidden="true" />}>
              <ul className="space-y-3 text-muted">
                {guide.paymentBasics.map((item) => (
                  <li key={item} className="rounded-2xl border border-line p-4 leading-7">{item}</li>
                ))}
              </ul>
            </Section>
          ) : null}

          {isBankingGuide && guide.currencyTransferTips ? (
            <Section title={labels.currencyTransfer} icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}>
              <ul className="space-y-3 text-muted">
                {guide.currencyTransferTips.map((item) => (
                  <li key={item} className="rounded-2xl bg-slate-50 p-4 leading-7">{item}</li>
                ))}
              </ul>
            </Section>
          ) : null}

          {isBankingGuide ? (
            <Section title={labels.bankingFirstWeekTips} icon={<ClipboardList className="h-5 w-5" aria-hidden="true" />}>
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
          ) : null}

          <Section title={isEsimGuide ? labels.esimCoveragePackage : isBankingGuide ? labels.bankingFeesDetails : isHousingGuide ? labels.housingContractBasics : isPhysicalSimGuide ? labels.simPackageChecks : isTransportGuide ? labels.transportChecks : labels.costs} icon={<WalletCards className="h-5 w-5" aria-hidden="true" />}>
            <ul className="space-y-3 text-muted">
              {guide.costs.map((item) => (
                <li key={item} className="rounded-2xl bg-slate-50 p-4 leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          {isPhysicalSimGuide && guide.mobileInternetTips ? (
            <Section title={labels.mobileInternetTips} icon={<Smartphone className="h-5 w-5" aria-hidden="true" />}>
              <ul className="space-y-3 text-muted">
                {guide.mobileInternetTips.map((tip) => (
                  <li key={tip} className="flex gap-3 rounded-2xl bg-slate-50 p-4 leading-7">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </Section>
          ) : null}

          {isPhysicalSimGuide && guide.simComparison ? (
            <Section title={labels.simOrEsim} icon={<Wifi className="h-5 w-5" aria-hidden="true" />}>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-line p-4">
                  <h3 className="font-bold">{labels.physicalSim}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{guide.simComparison.physicalSim}</p>
                </div>
                <div className="rounded-2xl border border-line p-4">
                  <h3 className="font-bold">eSIM</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{guide.simComparison.esim}</p>
                </div>
              </div>
            </Section>
          ) : null}

          <Section title={labels.mistakes} icon={<AlertCircle className="h-5 w-5" aria-hidden="true" />}>
            <ul className="space-y-3 text-muted">
              {guide.mistakes.map((item) => (
                <li key={item} className="rounded-2xl border border-line p-4 leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          {isPhysicalSimGuide ? (
            <Section title={labels.relatedGuides} icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    to: countryPath,
                    label: `${country.content[language].name} · ${labels.countryGuide}`,
                  },
                  {
                    to: getGuidePath(language, country.content[language].slug, 'esim'),
                    label: topicLabels[language].esim,
                  },
                  {
                    to: getGuidePath(language, country.content[language].slug, 'transport'),
                    label: topicLabels[language].transport,
                  },
                  {
                    to: `${countryPath}#apps-simInternet`,
                    label: labels.usefulAppsSection,
                  },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="focus-ring group flex items-center justify-between gap-3 rounded-2xl border border-line p-4 text-sm font-semibold transition hover:border-blue-600"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </Section>
          ) : null}

          {isEsimGuide ? (
            <Section title={labels.relatedGuides} icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    to: countryPath,
                    label: `${country.content[language].name} · ${labels.countryGuide}`,
                  },
                  {
                    to: getGuidePath(language, country.content[language].slug, 'sim-card'),
                    label: topicLabels[language]['sim-card'],
                  },
                  {
                    to: getGuidePath(language, country.content[language].slug, 'transport'),
                    label: topicLabels[language].transport,
                  },
                  {
                    to: `${countryPath}#apps-simInternet`,
                    label: labels.usefulAppsSection,
                  },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="focus-ring group flex items-center justify-between gap-3 rounded-2xl border border-line p-4 text-sm font-semibold transition hover:border-blue-600"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </Section>
          ) : null}

          {isTransportGuide ? (
            <Section title={labels.relatedGuides} icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    to: countryPath,
                    label: `${country.content[language].name} · ${labels.countryGuide}`,
                  },
                  {
                    to: getGuidePath(language, country.content[language].slug, 'sim-card'),
                    label: topicLabels[language]['sim-card'],
                  },
                  {
                    to: getGuidePath(language, country.content[language].slug, 'rent-apartment'),
                    label: topicLabels[language]['rent-apartment'],
                  },
                  {
                    to: `${countryPath}#apps-taxiTransport`,
                    label: labels.transportAppsSection,
                  },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="focus-ring group flex items-center justify-between gap-3 rounded-2xl border border-line p-4 text-sm font-semibold transition hover:border-blue-600"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </Section>
          ) : null}

          {isHousingGuide ? (
            <Section title={labels.relatedGuides} icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    to: countryPath,
                    label: `${country.content[language].name} · ${labels.countryGuide}`,
                  },
                  {
                    to: getGuidePath(language, country.content[language].slug, 'transport'),
                    label: topicLabels[language].transport,
                  },
                  {
                    to: getGuidePath(language, country.content[language].slug, 'sim-card'),
                    label: topicLabels[language]['sim-card'],
                  },
                  {
                    to: getGuidePath(language, country.content[language].slug, 'bank-account'),
                    label: topicLabels[language]['bank-account'],
                  },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="focus-ring group flex items-center justify-between gap-3 rounded-2xl border border-line p-4 text-sm font-semibold transition hover:border-blue-600"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </Section>
          ) : null}

          {isBankingGuide ? (
            <Section title={labels.relatedGuides} icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    to: countryPath,
                    label: `${country.content[language].name} · ${labels.countryGuide}`,
                  },
                  {
                    to: getGuidePath(language, country.content[language].slug, 'sim-card'),
                    label: topicLabels[language]['sim-card'],
                  },
                  {
                    to: getGuidePath(language, country.content[language].slug, 'transport'),
                    label: topicLabels[language].transport,
                  },
                  {
                    to: getGuidePath(language, country.content[language].slug, 'rent-apartment'),
                    label: topicLabels[language]['rent-apartment'],
                  },
                  {
                    to: `${countryPath}#visa-residence-insurance`,
                    label: countryLabels.visaResidenceInsurance,
                  },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="focus-ring group flex items-center justify-between gap-3 rounded-2xl border border-line p-4 text-sm font-semibold transition hover:border-blue-600"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </Section>
          ) : null}

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

          <FAQSection title={labels.faq} items={guide.faq} />

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
            <LastUpdated language={language} />
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
