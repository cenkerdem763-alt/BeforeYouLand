import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/config';

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
  const fullTitle =
    title === siteConfig.siteName ? siteConfig.siteName : `${title} | ${siteConfig.siteName}`;

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
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
