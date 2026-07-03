export type Language = 'en' | 'tr';

export const languages: Record<Language, { label: string; shortLabel: string }> = {
  en: { label: 'English', shortLabel: 'EN' },
  tr: { label: 'Turkish', shortLabel: 'TR' },
};

export const ui = {
  en: {
    home: {
      heroTitle: 'Your first week abroad, made simple.',
      subtitle:
        'Simple country guides for SIM cards, internet, banking, transport, housing basics and first-week essentials.',
      eyebrow: 'Simple country guides',
      searchTitle: 'Where are you going?',
      searchPlaceholder: 'Search countries',
      popularTopics: 'Popular topics',
      countries: 'Countries',
      startWithGeorgia: 'Start with Georgia',
      noResults: 'No countries found.',
      trustItems: ['No login required', 'Free starter guides', 'Updated when possible'],
      cardCta: 'Explore country',
      featureLabel: 'First Week Guide',
      featureTitle: 'Your first-week essentials, simplified.',
      featureDescription:
        'Simple country guides for SIM cards, internet, banking, transport, housing basics and first-week essentials.',
    },
    country: {
      overview: 'Arrival essentials',
      guides: 'Guides',
      capital: 'Capital',
      currency: 'Currency',
      usefulApps: 'Useful Apps',
      emergencyNumbers: 'Emergency Numbers',
      readGuide: 'Read guide',
      seoTitle: 'first-week guide',
    },
    guide: {
      quickAnswer: 'Quick answer',
      bestOption: 'Best option by traveler type',
      whereToGet: 'Where to get it',
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
      verificationNote: 'Last updated and verification note',
      ctaTitle: 'Get a free personal SIM/eSIM recommendation',
      ctaText:
        'Tell us your destination, travel duration, phone model and data needs. We’ll help you find suitable SIM or eSIM options for free.',
      ctaButton: 'Get free recommendation',
      ctaEyebrow: 'Free help',
      ctaNote:
        'No purchase required. Information may change, so always verify with the operator or eSIM provider.',
      ctaSoonNote: 'Use the button to jump to the contact section below.',
      simCtaTitle: 'Get a free personal SIM/eSIM recommendation',
      simCtaText:
        'Tell us your destination, travel duration, phone model and data needs. We’ll help you find suitable SIM or eSIM options for free.',
      simCtaNote:
        'No purchase required. Information may change, so always verify with the operator or eSIM provider.',
      simCtaSoonNote: 'Use the button to jump to the contact section below.',
    },
    notFound: {
      title: 'Page not found',
      heading: 'Page not found',
      text: 'The guide you are looking for may have moved.',
      button: 'Back home',
    },
    nav: {
      brandTagline: 'First-week country guides',
      home: 'Home',
    },
    footer: {
      description:
        'First Week Guide helps you understand the basics before and after you land.',
      disclaimer:
        'Information can change. Always verify with official providers before purchasing or applying.',
    },
  },
  tr: {
    home: {
      heroTitle: 'Yurt dışındaki ilk haftanı kolaylaştır.',
      subtitle:
        'SIM kart, internet, banka, ulaşım, ev bulma ve ilk hafta ihtiyaçları için basit ülke rehberleri.',
      eyebrow: 'Basit ülke rehberleri',
      searchTitle: 'Nereye gidiyorsun?',
      searchPlaceholder: 'Ülke ara',
      popularTopics: 'Popüler konular',
      countries: 'Ülkeler',
      startWithGeorgia: 'Gürcistan ile başla',
      noResults: 'Ülke bulunamadı.',
      trustItems: ['Kayıt gerekmez', 'Ücretsiz başlangıç rehberleri', 'Mümkün oldukça güncellenir'],
      cardCta: 'Ülkeyi incele',
      featureLabel: 'First Week Guide',
      featureTitle: 'İlk hafta ihtiyaçlarını kolayca öğren.',
      featureDescription:
        'SIM kart, internet, banka, ulaşım, ev bulma ve ilk hafta ihtiyaçları için basit ülke rehberleri.',
    },
    country: {
      overview: 'Varış için temel bilgiler',
      guides: 'Rehberler',
      capital: 'Başkent',
      currency: 'Para birimi',
      usefulApps: 'Faydalı Uygulamalar',
      emergencyNumbers: 'Acil Numaralar',
      readGuide: 'Rehberi oku',
      seoTitle: 'ilk hafta rehberi',
    },
    guide: {
      quickAnswer: 'Kısa cevap',
      bestOption: 'Seyahat tipine göre en iyi seçenek',
      whereToGet: 'Nereden alınır?',
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
      verificationNote: 'Son güncelleme ve doğrulama notu',
      ctaTitle: 'Ücretsiz kişisel SIM/eSIM önerisi al',
      ctaText:
        'Gideceğin ülke, kalış süren, telefon modelin ve internet ihtiyacına göre sana uygun SIM veya eSIM seçeneklerini bulmana ücretsiz yardımcı olalım.',
      ctaButton: 'Ücretsiz öneri al',
      ctaEyebrow: 'Ücretsiz destek',
      ctaNote:
        'Satın alma zorunluluğu yok. Bilgiler değişebileceği için operatör veya eSIM sağlayıcısını kontrol etmeni öneririz.',
      ctaSoonNote: 'Buton seni aşağıdaki iletişim bölümüne götürür.',
      simCtaTitle: 'Ücretsiz kişisel SIM/eSIM önerisi al',
      simCtaText:
        'Gideceğin ülke, kalış süren, telefon modelin ve internet ihtiyacına göre sana uygun SIM veya eSIM seçeneklerini bulmana ücretsiz yardımcı olalım.',
      simCtaNote:
        'Satın alma zorunluluğu yok. Bilgiler değişebileceği için operatör veya eSIM sağlayıcısını kontrol etmeni öneririz.',
      simCtaSoonNote: 'Buton seni aşağıdaki iletişim bölümüne götürür.',
    },
    notFound: {
      title: 'Sayfa bulunamadı',
      heading: 'Sayfa bulunamadı',
      text: 'Aradığın rehber taşınmış olabilir.',
      button: 'Ana sayfaya dön',
    },
    nav: {
      brandTagline: 'İlk hafta ülke rehberleri',
      home: 'Ana sayfa',
    },
    footer: {
      description:
        'First Week Guide, gitmeden önce ve indikten sonra temel ihtiyaçlarını anlamana yardımcı olur.',
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

export const confidenceLabels = {
  en: {
    High: 'High',
    Medium: 'Medium',
  },
  tr: {
    High: 'Yüksek',
    Medium: 'Orta',
  },
} as const;
