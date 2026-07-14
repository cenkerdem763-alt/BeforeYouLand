export type Language = 'en' | 'tr' | 'ru';

export const languageCodes = ['en', 'tr', 'ru'] as const satisfies readonly Language[];

export const languages: Record<Language, { label: string; shortLabel: string }> = {
  en: { label: 'English', shortLabel: 'EN' },
  tr: { label: 'Turkish', shortLabel: 'TR' },
  ru: { label: 'Русский', shortLabel: 'RU' },
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
      aboutTrust: {
        title: 'About First Week Guide',
        description:
          'First Week Guide is a practical guide project for newcomers, students, expats and remote workers who want to understand the basics of a new country before and during their first week. We focus on useful first-week topics such as SIM cards, transport, housing, banking, essential apps, common mistakes and official-source reminders.',
        points: [
          'Practical first-week information',
          'No login required',
          'Free starter guides',
          'Updated when possible',
          'Official sources linked when needed',
        ],
        disclaimer:
          'First Week Guide is not an official government, legal, immigration, banking or insurance service. Information can change. Always verify important decisions with official sources or qualified professionals.',
      },
    },
    country: {
      overview: 'Arrival essentials',
      guides: 'Guides',
      capital: 'Capital',
      currency: 'Currency',
      usefulApps: 'Useful Apps',
      emergencyNumbers: 'Emergency Numbers',
      commonMistakes: 'Common first-week mistakes',
      visaResidenceInsurance: 'Visa, residence & insurance basics',
      officialSources: 'Official sources',
      readGuide: 'Read guide',
      seoTitle: 'first-week guide',
    },
    essentialApps: {
      title: 'Essential apps & websites',
      note:
        'Apps and availability can change. Always check the latest details before you rely on a service.',
    },
    firstWeekChecklist: {
      title: 'First-week checklist',
      note: 'Use this as a simple starting list, then confirm details locally when you arrive.',
    },
    support: {
      title: 'Need help with your first week?',
      text: 'Ask us about SIM cards, transport, housing, banking or useful apps.',
      primaryButton: 'Message on Telegram',
      secondaryButton: 'Send an email',
    },
    partner: {
      title: 'Advertise or partner with First Week Guide',
      text:
        'Do you offer services for newcomers, expats, students or remote workers? Contact us to discuss advertising, listings or partnership opportunities.',
      button: 'Contact us',
    },
    contact: {
      telegram: 'Telegram',
      email: 'Email',
    },
    guide: {
      quickAnswer: 'Quick answer',
      bestOption: 'Best option by traveler type',
      simOptions: 'Common SIM options',
      whereToGet: 'Where to get it',
      steps: 'Step-by-step guide',
      simFirstWeekTips: 'Setup and first-week tips',
      documents: 'Required documents',
      costs: 'Cost notes',
      simPackageChecks: 'Things to check before buying',
      mobileInternetTips: 'Mobile internet basics',
      simOrEsim: 'eSIM or physical SIM?',
      physicalSim: 'Physical SIM',
      mistakes: 'Common mistakes',
      links: 'Useful links',
      relatedGuides: 'Related first-week guides',
      countryGuide: 'Country guide',
      usefulAppsSection: 'Useful apps and mobile operators',
      faq: 'Frequently asked questions',
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
      contactTitle: 'Contact',
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
      aboutTrust: {
        title: 'First Week Guide hakkında',
        description:
          "First Week Guide; yeni bir ülkeye giden kişiler, öğrenciler, expat'lar ve uzaktan çalışanlar için hazırlanmış pratik bir rehber projesidir. SIM kart, ulaşım, ev arama, banka, gerekli uygulamalar, yaygın hatalar ve resmi kaynakları kontrol etme gibi ilk hafta ihtiyaçlarına odaklanır.",
        points: [
          'Pratik ilk hafta bilgileri',
          'Kayıt gerekmez',
          'Ücretsiz başlangıç rehberleri',
          'Mümkün oldukça güncellenir',
          'Gerektiğinde resmi kaynaklara yönlendirir',
        ],
        disclaimer:
          'First Week Guide resmi bir devlet, hukuk, göçmenlik, banka veya sigorta hizmeti değildir. Bilgiler değişebilir. Önemli kararlar almadan önce resmi kaynakları veya yetkili uzmanları kontrol et.',
      },
    },
    country: {
      overview: 'Varış için temel bilgiler',
      guides: 'Rehberler',
      capital: 'Başkent',
      currency: 'Para birimi',
      usefulApps: 'Faydalı Uygulamalar',
      emergencyNumbers: 'Acil Numaralar',
      commonMistakes: 'İlk hafta yapılan yaygın hatalar',
      visaResidenceInsurance: 'Vize, oturum ve sağlık sigortası',
      officialSources: 'Resmi kaynaklar',
      readGuide: 'Rehberi oku',
      seoTitle: 'ilk hafta rehberi',
    },
    essentialApps: {
      title: 'Gerekli uygulamalar ve siteler',
      note:
        'Uygulamalar ve hizmetler zamanla değişebilir. Kullanmadan önce güncel bilgileri kontrol et.',
    },
    firstWeekChecklist: {
      title: 'İlk hafta checklist’i',
      note: 'Bunu basit bir başlangıç listesi olarak kullan; vardığında detayları yerelde doğrula.',
    },
    support: {
      title: 'İlk hafta için yardıma mı ihtiyacın var?',
      text: 'SIM kart, ulaşım, ev, banka veya gerekli uygulamalar hakkında bize yaz.',
      primaryButton: 'Telegram’dan yaz',
      secondaryButton: 'E-posta gönder',
    },
    partner: {
      title: 'First Week Guide’da reklam veya işbirliği yapın',
      text:
        'Yeni gelenlere, expat’lara, öğrencilere veya uzaktan çalışanlara hizmet veriyorsanız reklam, listeleme veya işbirliği için bizimle iletişime geçin.',
      button: 'İletişime geç',
    },
    contact: {
      telegram: 'Telegram',
      email: 'E-posta',
    },
    guide: {
      quickAnswer: 'Kısa cevap',
      bestOption: 'Seyahat tipine göre en iyi seçenek',
      simOptions: 'Yaygın SIM seçenekleri',
      whereToGet: 'Nereden alınır?',
      steps: 'Adım adım rehber',
      simFirstWeekTips: 'Kurulum ve ilk hafta ipuçları',
      documents: 'Gerekli belgeler',
      costs: 'Maliyet notları',
      simPackageChecks: 'Paket almadan önce kontrol edilecekler',
      mobileInternetTips: 'Mobil internet temelleri',
      simOrEsim: 'eSIM mi fiziksel SIM mi?',
      physicalSim: 'Fiziksel SIM',
      mistakes: 'Sık yapılan hatalar',
      links: 'Faydalı linkler',
      relatedGuides: 'İlgili ilk hafta rehberleri',
      countryGuide: 'Ülke rehberi',
      usefulAppsSection: 'Faydalı uygulamalar ve mobil operatörler',
      faq: 'Sık sorulan sorular',
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
      contactTitle: 'İletişim',
      disclaimer:
        'Bilgiler değişebilir. Satın almadan veya başvuru yapmadan önce her zaman resmi sağlayıcılardan doğrulayın.',
    },
  },
  ru: {
    home: {
      heroTitle: 'Первая неделя за границей — проще.',
      subtitle:
        'Простые гиды по странам: SIM-карта, интернет, банк, транспорт, жильё и всё важное для первой недели.',
      eyebrow: 'Простые гиды по странам',
      searchTitle: 'Куда вы едете?',
      searchPlaceholder: 'Поиск страны',
      popularTopics: 'Популярные темы',
      countries: 'Страны',
      startWithGeorgia: 'Начать с Грузии',
      noResults: 'Страны не найдены.',
      trustItems: ['Без регистрации', 'Бесплатные стартовые гиды', 'Обновляется по возможности'],
      cardCta: 'Открыть страну',
      featureLabel: 'First Week Guide',
      featureTitle: 'Всё важное для первой недели — просто.',
      featureDescription:
        'Простые гиды по странам: SIM-карта, интернет, банк, транспорт, жильё и всё важное для первой недели.',
      aboutTrust: {
        title: 'О First Week Guide',
        description:
          'First Week Guide — это практический проект с гайдами для новичков, студентов, экспатов и удалённых работников, которые хотят разобраться с базовыми вопросами в новой стране до приезда и в первую неделю. Мы фокусируемся на SIM-картах, транспорте, жилье, банках, полезных приложениях, частых ошибках и напоминаниях проверять официальные источники.',
        points: [
          'Практичная информация для первой недели',
          'Регистрация не требуется',
          'Бесплатные стартовые гайды',
          'Обновляется по возможности',
          'При необходимости даются ссылки на официальные источники',
        ],
        disclaimer:
          'First Week Guide не является официальной государственной, юридической, иммиграционной, банковской или страховой службой. Информация может меняться. Перед важными решениями проверяйте официальные источники или обращайтесь к квалифицированным специалистам.',
      },
    },
    country: {
      overview: 'Главное после приезда',
      guides: 'Гиды',
      capital: 'Столица',
      currency: 'Валюта',
      usefulApps: 'Полезные приложения',
      emergencyNumbers: 'Экстренные номера',
      commonMistakes: 'Частые ошибки в первую неделю',
      visaResidenceInsurance: 'Виза, ВНЖ и медицинская страховка',
      officialSources: 'Официальные источники',
      readGuide: 'Читать гид',
      seoTitle: 'гид для первой недели',
    },
    essentialApps: {
      title: 'Нужные приложения и сайты',
      note:
        'Приложения и услуги могут меняться. Перед использованием проверьте актуальную информацию.',
    },
    firstWeekChecklist: {
      title: 'Чеклист на первую неделю',
      note: 'Используйте это как простой стартовый список, а детали уточняйте на месте.',
    },
    support: {
      title: 'Нужна помощь с первой неделей?',
      text: 'Спросите нас про SIM-карту, транспорт, жильё, банк или полезные приложения.',
      primaryButton: 'Написать в Telegram',
      secondaryButton: 'Отправить email',
    },
    partner: {
      title: 'Реклама и партнёрство с First Week Guide',
      text:
        'Если вы предлагаете услуги для новичков, экспатов, студентов или удалённых работников, свяжитесь с нами для рекламы, размещения или партнёрства.',
      button: 'Связаться',
    },
    contact: {
      telegram: 'Telegram',
      email: 'Email',
    },
    guide: {
      quickAnswer: 'Короткий ответ',
      bestOption: 'Лучший вариант по типу поездки',
      simOptions: 'Основные варианты SIM-карт',
      whereToGet: 'Где оформить',
      steps: 'Пошаговый гид',
      simFirstWeekTips: 'Настройка и советы на первую неделю',
      documents: 'Необходимые документы',
      costs: 'Заметки о расходах',
      simPackageChecks: 'Что проверить перед покупкой',
      mobileInternetTips: 'Основы мобильного интернета',
      simOrEsim: 'eSIM или физическая SIM-карта?',
      physicalSim: 'Физическая SIM-карта',
      mistakes: 'Частые ошибки',
      links: 'Полезные ссылки',
      relatedGuides: 'Другие гайды для первой недели',
      countryGuide: 'Гид по стране',
      usefulAppsSection: 'Полезные приложения и мобильные операторы',
      faq: 'Часто задаваемые вопросы',
      lastUpdated: 'Последнее обновление',
      confidence: 'Уровень уверенности',
      disclaimer:
        'Информация может быстро меняться. Проверяйте важные детали у официальных источников, провайдеров или местных специалистов.',
      verificationNote: 'Обновление и заметка о проверке',
      ctaTitle: 'Получить бесплатную рекомендацию по SIM/eSIM',
      ctaText:
        'Расскажите страну, срок поездки, модель телефона и потребность в интернете. Мы поможем подобрать подходящие варианты SIM или eSIM бесплатно.',
      ctaButton: 'Получить рекомендацию',
      ctaEyebrow: 'Бесплатная помощь',
      ctaNote:
        'Покупка не обязательна. Информация может меняться, поэтому всегда проверяйте условия у оператора или eSIM-провайдера.',
      ctaSoonNote: 'Кнопка ведёт к блоку контакта ниже.',
      simCtaTitle: 'Получить бесплатную рекомендацию по SIM/eSIM',
      simCtaText:
        'Расскажите страну, срок поездки, модель телефона и потребность в интернете. Мы поможем подобрать подходящие варианты SIM или eSIM бесплатно.',
      simCtaNote:
        'Покупка не обязательна. Информация может меняться, поэтому всегда проверяйте условия у оператора или eSIM-провайдера.',
      simCtaSoonNote: 'Кнопка ведёт к блоку контакта ниже.',
    },
    notFound: {
      title: 'Страница не найдена',
      heading: 'Страница не найдена',
      text: 'Гид, который вы ищете, мог быть перемещён.',
      button: 'На главную',
    },
    nav: {
      brandTagline: 'Гиды по странам для первой недели',
      home: 'Главная',
    },
    footer: {
      description:
        'First Week Guide помогает разобраться с базовыми вопросами до и после приезда.',
      contactTitle: 'Контакты',
      disclaimer:
        'Информация может меняться. Всегда проверяйте детали у официальных провайдеров перед покупкой или заявкой.',
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
  ru: {
    'sim-card': 'SIM-карта',
    esim: 'eSIM',
    'bank-account': 'Банковский счёт',
    'rent-apartment': 'Жильё',
    transport: 'Транспорт',
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
  ru: {
    High: 'Высокий',
    Medium: 'Средний',
  },
} as const;
