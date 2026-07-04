import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const configSource = readFileSync('src/data/config.ts', 'utf8');
const baseUrlMatch = configSource.match(/baseUrl:\s*['"]([^'"]+)['"]/);

if (!baseUrlMatch) {
  throw new Error('Could not find siteConfig.baseUrl in src/data/config.ts');
}

const baseUrl = baseUrlMatch[1].replace(/\/$/, '');

const languageOrder = ['en', 'tr', 'ru'];

const routeGroups = [
  ['/en', '/tr', '/ru'],
  ['/en/georgia', '/tr/gurcistan', '/ru/gruziya'],
  ['/en/georgia/sim-card', '/tr/gurcistan/sim-kart', '/ru/gruziya/sim-karta'],
  ['/en/georgia/esim', '/tr/gurcistan/esim', '/ru/gruziya/esim'],
  ['/en/georgia/bank-account', '/tr/gurcistan/banka-hesabi', '/ru/gruziya/bankovskiy-schet'],
  ['/en/georgia/rent-apartment', '/tr/gurcistan/ev-kiralama', '/ru/gruziya/arenda-zhilya'],
  ['/en/georgia/transport', '/tr/gurcistan/ulasim', '/ru/gruziya/transport'],
  ['/en/serbia', '/tr/sirbistan', '/ru/serbiya'],
  ['/en/serbia/sim-card', '/tr/sirbistan/sim-kart', '/ru/serbiya/sim-karta'],
  ['/en/serbia/esim', '/tr/sirbistan/esim', '/ru/serbiya/esim'],
  ['/en/serbia/bank-account', '/tr/sirbistan/banka-hesabi', '/ru/serbiya/bankovskiy-schet'],
  ['/en/serbia/rent-apartment', '/tr/sirbistan/ev-kiralama', '/ru/serbiya/arenda-zhilya'],
  ['/en/serbia/transport', '/tr/sirbistan/ulasim', '/ru/serbiya/transport'],
];

const urls = routeGroups.flatMap((paths, groupIndex) => {
  return paths.map((path, pathIndex) => {
    const language = languageOrder[pathIndex];
    const alternates = paths
      .map((alternatePath, alternateIndex) => {
        const alternateLanguage = languageOrder[alternateIndex];
        return `<xhtml:link rel="alternate" hreflang="${alternateLanguage}" href="${baseUrl}${alternatePath}" />`;
      })
      .join('');
    const xDefault = groupIndex === 0 && language === 'en'
      ? `<xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${path}" />`
      : '';

    return `  <url><loc>${baseUrl}${path}</loc>${alternates}${xDefault}</url>`;
  });
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
