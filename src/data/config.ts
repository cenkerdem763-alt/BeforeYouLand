const contactEmail = 'hello@firstweekguide.com';

export const siteConfig = {
  siteName: 'First Week Guide',
  siteUrl: 'https://firstweekguide.com',
  baseUrl: 'https://firstweekguide.com',
  contact: {
    telegramUrl: 'https://t.me/firstweekguide',
    telegramUsername: '@firstweekguide',
    email: contactEmail,
    emailHref: `mailto:${contactEmail}`,
    advertisingHref: `mailto:${contactEmail}?subject=Advertising%20and%20partnership%20with%20First%20Week%20Guide`,
  },
  homepageTitles: {
    en: 'First Week Guide | First Week Abroad Country Guides',
    tr: 'First Week Guide | Yurt Dışında İlk Hafta Ülke Rehberleri',
    ru: 'First Week Guide | Гайды по странам для первой недели за границей',
  },
  defaultDescriptions: {
    en: 'Practical country guides for your first week abroad. Learn about SIM cards, transport, housing, banking, useful apps and first-week checklists for Georgia, Serbia and more.',
    tr: 'Yurt dışındaki ilk haftan için pratik ülke rehberleri. Gürcistan, Sırbistan ve daha fazlası için SIM kart, ulaşım, ev, banka, gerekli uygulamalar ve checklist bilgileri.',
    ru: 'Практичные гайды по странам для первой недели за границей: SIM-карты, транспорт, жильё, банки, полезные приложения и чеклисты для Грузии, Сербии и других стран.',
  },
} as const;
