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
  defaultDescriptions: {
    en: 'Simple country guides for your first week abroad.',
    tr: 'Yurt dışındaki ilk haftan için basit ülke rehberleri.',
    ru: 'Простые гиды по странам для вашей первой недели за границей.',
  },
} as const;
