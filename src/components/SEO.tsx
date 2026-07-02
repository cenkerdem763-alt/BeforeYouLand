import { Helmet } from 'react-helmet-async';

type Alternate = {
  hrefLang: string;
  href: string;
};

type SEOProps = {
  title: string;
  description: string;
  canonical: string;
  alternates?: Alternate[];
  jsonLd?: object;
};

export default function SEO({ title, description, canonical, alternates = [], jsonLd }: SEOProps) {
  const fullTitle = `${title} | BeforeYouLand`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {alternates.map((alternate) => (
        <link
          key={alternate.hrefLang}
          rel="alternate"
          hrefLang={alternate.hrefLang}
          href={alternate.href}
        />
      ))}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="BeforeYouLand" />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
