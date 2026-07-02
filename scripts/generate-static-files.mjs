import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const configSource = readFileSync('src/data/config.ts', 'utf8');
const baseUrlMatch = configSource.match(/baseUrl:\s*['"]([^'"]+)['"]/);

if (!baseUrlMatch) {
  throw new Error('Could not find siteConfig.baseUrl in src/data/config.ts');
}

const baseUrl = baseUrlMatch[1].replace(/\/$/, '');

const routePairs = [
  ['/en', '/tr'],
  ['/en/georgia', '/tr/gurcistan'],
  ['/en/georgia/sim-card', '/tr/gurcistan/sim-kart'],
  ['/en/georgia/esim', '/tr/gurcistan/esim'],
  ['/en/georgia/bank-account', '/tr/gurcistan/banka-hesabi'],
  ['/en/georgia/rent-apartment', '/tr/gurcistan/ev-kiralama'],
  ['/en/georgia/transport', '/tr/gurcistan/ulasim'],
  ['/en/serbia', '/tr/sirbistan'],
  ['/en/serbia/sim-card', '/tr/sirbistan/sim-kart'],
  ['/en/serbia/esim', '/tr/sirbistan/esim'],
  ['/en/serbia/bank-account', '/tr/sirbistan/banka-hesabi'],
  ['/en/serbia/rent-apartment', '/tr/sirbistan/ev-kiralama'],
  ['/en/serbia/transport', '/tr/sirbistan/ulasim'],
];

const urls = routePairs.flatMap(([enPath, trPath], index) => {
  const xDefault = index === 0
    ? `<xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${enPath}" />`
    : '';

  return [
    `  <url><loc>${baseUrl}${enPath}</loc><xhtml:link rel="alternate" hreflang="tr" href="${baseUrl}${trPath}" />${xDefault}</url>`,
    `  <url><loc>${baseUrl}${trPath}</loc><xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${enPath}" /></url>`,
  ];
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

mkdirSync('public', { recursive: true });
writeFileSync('public/sitemap.xml', sitemap);
writeFileSync('public/robots.txt', robots);
