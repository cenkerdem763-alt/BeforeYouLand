export type Language = 'en' | 'tr';

export const languages: Record<Language, { label: string; shortLabel: string }> = {
  en: { label: 'English', shortLabel: 'EN' },
  tr: { label: 'Turkish', shortLabel: 'TR' },
};

export const ui = {
  en: {
    home: {
      heroTitle: 'Know what you need before you land.',
      subtitle:
        'SIM cards, eSIMs, bank accounts, rent, transport and local essentials for every country.',
      eyebrow: 'Practical arrival intelligence',
      searchTitle: 'Where are you going?',
      searchPlaceholder: 'Search countries',
      popularTopics: 'Popular topics',
      countries: 'Countries',
      startWithGeorgia: 'Start with Georgia',
      noResults: 'No countries found.',
      trustItems: ['Static and fast', 'No login required', 'Editable country data'],
      cardCta: 'Explore country',
    },
    country: {
      overview: 'Arrival essentials',
      guides: 'Guides',
      usefulApps: 'Useful Apps',
      emergencyNumbers: 'Emergency Numbers',
      readGuide: 'Read guide',
    },
    guide: {
      quickAnswer: 'Quick answer',
      steps: 'Step-by-step guide',
      documents: 'Required documents',
      costs: 'Cost notes',
      mistakes: 'Common mistakes',
      links: 'Useful links',
      faq: 'FAQ',
      lastUpdated: 'Last updated',
      confidence: 'Confidence',
      disclaimer:
        'Information can change quickly. Verify details with official sources, providers or local professionals before making decisions.',
      ctaTitle: 'Get a free personal SIM/eSIM recommendation',
      ctaText:
        'Tell us your destination, travel duration, phone model and data needs. We’ll help you find suitable SIM or eSIM options for free.',
      ctaButton: 'Get free recommendation',
      ctaEyebrow: 'Free help',
      ctaNote:
        'No purchase required. Information may change, so always verify with the operator or eSIM provider.',
      ctaSoonNote: 'Free recommendation form will be available soon.',
      simCtaTitle: 'Get a free personal SIM/eSIM recommendation',
      simCtaText:
        'Tell us your destination, travel duration, phone model and data needs. We’ll help you find suitable SIM or eSIM options for free.',
      simCtaNote:
        'No purchase required. Information may change, so always verify with the operator or eSIM provider.',
      simCtaSoonNote: 'Free recommendation form will be available soon.',
    },
    nav: {
      brandTagline: 'Country starter guides',
      home: 'Home',
    },
    footer: {
      description:
        'Practical, editable starter guides for first arrivals. No accounts, no noise, just the essentials.',
      disclaimer:
        'Information can change. Always verify with official providers before purchasing or applying.',
    },
  },
  tr: {
    home: {
      heroTitle: 'Gitmeden önce ihtiyacın olan her şeyi bil.',
      subtitle:
        'SIM kart, eSIM, banka hesabı, ev kiralama, ulaşım ve ülkeye özel başlangıç bilgileri.',
      eyebrow: 'Pratik varış rehberi',
      searchTitle: 'Nereye gidiyorsun?',
      searchPlaceholder: 'Ülke ara',
      popularTopics: 'Popüler konular',
      countries: 'Ülkeler',
      startWithGeorgia: 'Gürcistan ile başla',
      noResults: 'Ülke bulunamadı.',
      trustItems: ['Statik ve hızlı', 'Üyelik gerekmez', 'Düzenlenebilir ülke verisi'],
      cardCta: 'Ülkeyi incele',
    },
    country: {
      overview: 'Varış için temel bilgiler',
      guides: 'Rehberler',
      usefulApps: 'Faydalı Uygulamalar',
      emergencyNumbers: 'Acil Numaralar',
      readGuide: 'Rehberi oku',
    },
    guide: {
      quickAnswer: 'Kısa cevap',
      steps: 'Adım adım rehber',
      documents: 'Gerekli belgeler',
      costs: 'Maliyet notları',
      mistakes: 'Sık yapılan hatalar',
      links: 'Faydalı linkler',
      faq: 'SSS',
      lastUpdated: 'Son güncelleme',
      confidence: 'Güven seviyesi',
      disclaimer:
        'Bilgiler hızlı değişebilir. Karar vermeden önce resmi kaynaklar, hizmet sağlayıcılar veya yerel uzmanlarla doğrulayın.',
      ctaTitle: 'Ücretsiz kişisel SIM/eSIM önerisi al',
      ctaText:
        'Gideceğin ülke, kalış süren, telefon modelin ve internet ihtiyacına göre sana uygun SIM veya eSIM seçeneklerini bulmana ücretsiz yardımcı olalım.',
      ctaButton: 'Ücretsiz öneri al',
      ctaEyebrow: 'Ücretsiz destek',
      ctaNote:
        'Satın alma zorunluluğu yok. Bilgiler değişebileceği için operatör veya eSIM sağlayıcısını kontrol etmeni öneririz.',
      ctaSoonNote: 'Ücretsiz öneri formu yakında aktif olacak.',
      simCtaTitle: 'Ücretsiz kişisel SIM/eSIM önerisi al',
      simCtaText:
        'Gideceğin ülke, kalış süren, telefon modelin ve internet ihtiyacına göre sana uygun SIM veya eSIM seçeneklerini bulmana ücretsiz yardımcı olalım.',
      simCtaNote:
        'Satın alma zorunluluğu yok. Bilgiler değişebileceği için operatör veya eSIM sağlayıcısını kontrol etmeni öneririz.',
      simCtaSoonNote: 'Ücretsiz öneri formu yakında aktif olacak.',
    },
    nav: {
      brandTagline: 'Ülke başlangıç rehberleri',
      home: 'Ana sayfa',
    },
    footer: {
      description:
        'İlk varış için pratik ve düzenlenebilir başlangıç rehberleri. Üyelik yok, kalabalık yok, sadece gereken bilgiler.',
      disclaimer:
        'Bilgiler değişebilir. Satın almadan veya başvuru yapmadan önce her zaman resmi sağlayıcılardan doğrulayın.',
    },
  },
} as const;

export const topicLabels = {
  en: {
    'sim-card': 'SIM card',
    esim: 'eSIM',
    'bank-account': 'Bank account',
    'rent-apartment': 'Renting',
    transport: 'Transport',
  },
  tr: {
    'sim-card': 'SIM kart',
    esim: 'eSIM',
    'bank-account': 'Banka hesabı',
    'rent-apartment': 'Ev kiralama',
    transport: 'Ulaşım',
  },
} as const;
