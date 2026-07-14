import type { CountryKey } from './countries';
import type { Language } from './i18n';
import type { TopicKey } from './routes';

export type Confidence = 'High' | 'Medium';

export type Guide = {
  country: CountryKey;
  topic: TopicKey;
  language: Language;
  title: string;
  description: string;
  summary: string;
  lastUpdated: string;
  confidence: Confidence;
  quickAnswer: string;
  travelerOptions?: { label: string; recommendation: string }[];
  whereToGet?: { label: string; details: string }[];
  housingSources?: { label: string; details: string }[];
  housingChecks?: string[];
  locationTransportTips?: string[];
  steps: string[];
  documents: string[];
  costs: string[];
  mobileInternetTips?: string[];
  simComparison?: { physicalSim: string; esim: string };
  transportApps?: { label: string; details: string }[];
  publicTransportTips?: string[];
  airportToCityTips?: string[];
  navigationApps?: { label: string; details: string }[];
  mistakes: string[];
  verificationNote?: string;
  links: { label: string; url: string }[];
  faq: { question: string; answer: string }[];
};

const countryNames = {
  en: { georgia: 'Georgia', serbia: 'Serbia' },
  tr: { georgia: 'Gürcistan', serbia: 'Sırbistan' },
  ru: { georgia: 'Грузия', serbia: 'Сербия' },
} as const;

const topicNames = {
  en: {
    'sim-card': 'SIM card',
    esim: 'eSIM',
    'bank-account': 'bank account',
    'rent-apartment': 'renting',
    transport: 'transport',
  },
  tr: {
    'sim-card': 'SIM kart',
    esim: 'eSIM',
    'bank-account': 'banka hesabı',
    'rent-apartment': 'ev kiralama',
    transport: 'ulaşım',
  },
  ru: {
    'sim-card': 'SIM-карта',
    esim: 'eSIM',
    'bank-account': 'банковский счёт',
    'rent-apartment': 'жильё',
    transport: 'транспорт',
  },
} as const;

const enGuide = (
  country: CountryKey,
  topic: TopicKey,
  confidence: Confidence,
  quickAnswer: string,
  steps: string[],
  documents: string[],
  costs: string[],
  mistakes: string[],
): Guide => {
  const countryName = countryNames.en[country];
  const topicName = topicNames.en[topic];

  return {
    country,
    topic,
    language: 'en',
    title: `${countryName} ${topicName} guide`,
    description: `A practical arrival guide to ${topicName} in ${countryName}, including documents, costs, common mistakes and useful links.`,
    summary: `Use this editable guide as a first-pass checklist for ${topicName} in ${countryName}. Requirements can vary by provider and city.`,
    lastUpdated: '2026-07-02',
    confidence,
    quickAnswer,
    steps,
    documents,
    costs,
    mistakes,
    links: [
      { label: 'Government portal', url: country === 'georgia' ? 'https://my.gov.ge/en-us' : 'https://www.srbija.gov.rs/' },
      { label: 'Tourism information', url: country === 'georgia' ? 'https://georgia.travel/' : 'https://www.serbia.travel/' },
      { label: 'Airport arrivals', url: country === 'georgia' ? 'https://tbilisiairport.com/' : 'https://beg.aero/' },
    ],
    faq: [
      {
        question: `Can I arrange ${topicName} before landing in ${countryName}?`,
        answer:
          'Some steps can be prepared online, but final activation or paperwork may require local identity checks, a local address or an in-person visit.',
      },
      {
        question: 'Should I rely on this as legal or financial advice?',
        answer:
          'No. Treat it as practical orientation and verify anything important with official sources or the provider you plan to use.',
      },
    ],
  };
};

const trGuide = (
  country: CountryKey,
  topic: TopicKey,
  confidence: Confidence,
  quickAnswer: string,
  steps: string[],
  documents: string[],
  costs: string[],
  mistakes: string[],
): Guide => {
  const countryName = countryNames.tr[country];
  const topicName = topicNames.tr[topic];

  return {
    country,
    topic,
    language: 'tr',
    title: `${countryName} ${topicName} rehberi`,
    description: `${countryName} için ${topicName} konusunda belgeler, maliyetler, sık hatalar ve faydalı linkler içeren pratik varış rehberi.`,
    summary: `Bu düzenlenebilir rehberi ${countryName} için ${topicName} konusunda ilk kontrol listesi olarak kullanın. Şartlar sağlayıcıya ve şehre göre değişebilir.`,
    lastUpdated: '2026-07-02',
    confidence,
    quickAnswer,
    steps,
    documents,
    costs,
    mistakes,
    links: [
      { label: 'Resmi devlet portalı', url: country === 'georgia' ? 'https://my.gov.ge/en-us' : 'https://www.srbija.gov.rs/' },
      { label: 'Turizm bilgileri', url: country === 'georgia' ? 'https://georgia.travel/' : 'https://www.serbia.travel/' },
      { label: 'Havalimanı bilgileri', url: country === 'georgia' ? 'https://tbilisiairport.com/' : 'https://beg.aero/' },
    ],
    faq: [
      {
        question: `${countryName} için ${topicName} işlemini gelmeden önce yapabilir miyim?`,
        answer:
          'Bazı adımlar çevrim içi hazırlanabilir; ancak son aktivasyon veya evrak işlemleri yerel kimlik kontrolü, adres ya da yüz yüze ziyaret gerektirebilir.',
      },
      {
        question: 'Bu içerik hukuki veya finansal tavsiye midir?',
        answer:
          'Hayır. Pratik başlangıç bilgisi olarak değerlendirin ve önemli kararları resmi kaynaklardan veya kullanacağınız sağlayıcıdan doğrulayın.',
      },
    ],
  };
};

const ruGuide = (
  country: CountryKey,
  topic: TopicKey,
  confidence: Confidence,
  quickAnswer: string,
  steps: string[],
  documents: string[],
  costs: string[],
  mistakes: string[],
): Guide => {
  const countryName = countryNames.ru[country];
  const topicName = topicNames.ru[topic];

  return {
    country,
    topic,
    language: 'ru',
    title: `${countryName}: ${topicName} — гид`,
    description: `Практичный гид по теме ${topicName} в стране ${countryName}: документы, расходы, частые ошибки и полезные ссылки.`,
    summary: `Используйте этот гид как первый чеклист по теме ${topicName} в стране ${countryName}. Требования могут отличаться по провайдеру, банку, району или городу.`,
    lastUpdated: '2026-07-02',
    confidence,
    quickAnswer,
    steps,
    documents,
    costs,
    mistakes,
    links: [
      { label: 'Государственный портал', url: country === 'georgia' ? 'https://my.gov.ge/en-us' : 'https://www.srbija.gov.rs/' },
      { label: 'Туристическая информация', url: country === 'georgia' ? 'https://georgia.travel/' : 'https://www.serbia.travel/' },
      { label: 'Аэропорт и прилёт', url: country === 'georgia' ? 'https://tbilisiairport.com/' : 'https://beg.aero/' },
    ],
    faq: [
      {
        question: `Можно ли подготовить ${topicName} до приезда в ${countryName}?`,
        answer:
          'Часть шагов можно подготовить онлайн, но финальная активация или документы часто требуют местной проверки личности, адреса или личного визита.',
      },
      {
        question: 'Можно ли считать это юридической или финансовой консультацией?',
        answer:
          'Нет. Это практичная стартовая информация. Перед важными решениями проверяйте детали у официальных источников или выбранного провайдера.',
      },
    ],
  };
};

const georgiaSimEn: Guide = {
  ...enGuide(
    'georgia',
    'sim-card',
    'High',
    'A Georgia SIM card from an official operator store can provide setup help, mobile internet and a local number. In Tbilisi, compare airport availability with city stores and confirm current package details before buying.',
    [
      'Decide whether you need only mobile data or also a local Georgian phone number for calls, deliveries, banking appointments or accommodation contacts.',
      'Compare prepaid or visitor packages from Magti, Silknet and Cellfie, then check the current price, validity and included services before buying.',
      'Bring your passport and an unlocked phone to an airport counter, city center branch or official store.',
      'Ask the staff to activate the SIM card, confirm the data allowance, validity period, hotspot/tethering rules and top-up method.',
      'Test mobile internet in Georgia before leaving the counter: open a website, check balance and make sure the provider app or USSD code works.',
    ],
    ['Passport', 'Unlocked phone', 'Payment card or Georgian lari cash', 'Hotel name or local address if requested'],
    [
      'Check current price at the operator or official store before buying; package names, data limits and validity can change.',
      'Airport SIM card counters are convenient for arrival day, but city center stores may give you more time to compare plans.',
      'If you stay longer than a short trip, ask about top-ups, monthly bundles and whether unused data carries over.',
    ],
    [
      'Buying a SIM before checking that your phone is unlocked.',
      'Choosing only by advertised data size without checking network coverage for Tbilisi, Batumi, mountain areas or your route.',
      'Leaving the counter before activation, data and top-up are tested.',
      'Assuming every tourist SIM includes a local phone number, calls or SMS.',
      'Using unofficial resellers when an official operator store is available nearby.',
    ],
  ),
  title: 'Georgia SIM Card Guide',
  lastUpdated: '2026-07-14',
  description:
    'Compare Georgia SIM card options, where to buy one in Tbilisi, required documents, mobile internet setup and current package details.',
  summary:
    'A local Georgia SIM card can provide mobile internet and a Georgian phone number. Compare Magti, Silknet and Cellfie packages, then confirm coverage, validity and activation details before buying.',
  mobileInternetTips: [
    'Test mobile data, balance checks and top-ups before leaving the sales point.',
    'Check coverage for Tbilisi, Batumi and any mountain or regional routes you plan to visit.',
    'Confirm validity, renewal, speed limits, fair-use rules and whether hotspot use is allowed.',
    'Keep access to your primary SIM if you still need verification SMS from home-country services.',
  ],
  simComparison: {
    physicalSim:
      'Useful when you need a Georgian number, calls, SMS or in-store setup support. Registration commonly requires a passport.',
    esim:
      'Useful for quick data on a compatible unlocked phone. Many travel eSIMs are data-only, so check whether a local number is included.',
  },
  travelerOptions: [
    {
      label: 'Short trip',
      recommendation:
        'A prepaid package from the airport or a central Tbilisi store can cover maps and messaging. Prioritize simple activation, enough data and a clear validity period.',
    },
    {
      label: 'Long stay',
      recommendation:
        'Visit an official city store and compare prepaid bundles or monthly-style options. Ask how top-ups work and whether the same number can be kept for future visits.',
    },
    {
      label: 'Heavy data user',
      recommendation:
        'Look for large data allowances, hotspot permission and good coverage where you will actually travel. Do not rely only on headline data size; verify fair-use rules and speed limits.',
    },
    {
      label: 'Needs local phone number',
      recommendation:
        'Choose a physical SIM from a local operator rather than a data-only travel eSIM. Confirm that calls and SMS are included if you need delivery apps, banks or local contacts.',
    },
  ],
  whereToGet: [
    {
      label: 'Airport',
      details:
        'Useful when you need mobile internet as soon as you land. Check current price and package validity because airport offers can differ from city stores.',
    },
    {
      label: 'City center',
      details:
        'Tbilisi and Batumi city center branches usually give you more time to compare packages and ask setup questions.',
    },
    {
      label: 'Official stores',
      details:
        'Official Magti, Silknet and Cellfie stores are the safest places for registration, activation support and package verification.',
    },
    {
      label: 'eSIM providers',
      details:
        'If you do not need a Georgian phone number, compare an eSIM for Georgia before arrival. For a local number, use a physical SIM or confirm local eSIM details with the operator.',
    },
  ],
  verificationNote:
    'Last updated: 2026-07-14. Operator packages, ID requirements and coverage can change. Verify current details with Magti, Silknet, Cellfie or the provider before buying.',
  links: [
    { label: 'Magti', url: 'https://www.magticom.ge/en' },
    { label: 'Silknet', url: 'https://silknet.com/' },
    { label: 'Cellfie', url: 'https://cellfie.ge/' },
  ],
  faq: [
    {
      question: 'Where can I buy a SIM card in Georgia?',
      answer:
        'Official Magti, Silknet and Cellfie stores or authorized sales points are useful places to check. Package details can change, so confirm the current terms before buying.',
    },
    {
      question: 'Can I buy a SIM card at Tbilisi Airport?',
      answer:
        'SIM options may be available at the airport, but it can also help to compare official stores in the city center. Price, package and identity requirements may differ.',
    },
    {
      question: 'Do I need a passport for a Georgia SIM card?',
      answer:
        'A passport is commonly requested for local SIM registration. Requirements can change, so check with the operator before purchasing.',
    },
    {
      question: 'Which mobile operators are commonly checked in Georgia?',
      answer:
        'Magti, Silknet and Cellfie are commonly compared. Coverage, package validity, hotspot rules and included services may vary by operator and location.',
    },
    {
      question: 'Can I use an eSIM in Georgia?',
      answer:
        'An eSIM can be useful when you need data quickly and have a compatible unlocked phone. Check whether the plan is data-only and whether you need a local Georgian number.',
    },
    {
      question: 'What should I check before buying mobile internet in Georgia?',
      answer:
        'Compare coverage for your route, data allowance, validity, speed or fair-use limits, hotspot support, top-up options and whether calls or SMS are included.',
    },
  ],
};

const georgiaEsimEn: Guide = {
  ...enGuide(
    'georgia',
    'esim',
    'Medium',
    'A Georgia eSIM is the easiest way to have mobile internet in Georgia immediately after landing, especially for short trips. For long stays or when you need a local phone number, compare it with a physical Georgia SIM card from a local operator.',
    [
      'Confirm that your phone supports eSIM and is carrier-unlocked before buying any eSIM for Georgia.',
      'Compare travel eSIM providers by data allowance, validity, network partner, hotspot rules and whether the plan is data-only.',
      'Install the Georgia eSIM while you still have stable Wi-Fi, but check whether validity starts at purchase, installation or first network connection.',
      'Keep your primary SIM active if you need SMS codes from your bank, airline or home-country services.',
      'After landing, turn on the eSIM line, enable data roaming if the provider requires it and test mobile internet before leaving the airport.',
    ],
    ['eSIM-compatible unlocked phone', 'Stable Wi-Fi for installation', 'Payment card', 'Passport only if buying a local operator eSIM that requires registration'],
    [
      'Check current price with the eSIM provider before buying; plans and network partners can change.',
      'Travel eSIMs are convenient but may cost more per GB than a local Georgia SIM card.',
      'Some eSIM for Georgia plans are data-only and do not include a Georgian phone number, calls or SMS.',
    ],
    [
      'Buying an eSIM before checking phone compatibility.',
      'Activating too early when the validity period starts immediately.',
      'Deleting the QR code or installation email before the eSIM is working.',
      'Assuming a data-only Georgia eSIM can receive local SMS.',
      'Not keeping airport Wi-Fi or a backup connection available for troubleshooting.',
    ],
  ),
  title: 'Georgia eSIM guide for travelers',
  description:
    'How to choose an eSIM for Georgia, compare it with a Georgia SIM card, avoid common mistakes and verify current provider packages.',
  summary:
    'A Georgia eSIM is useful for instant mobile internet in Georgia without visiting a store. It is usually best for short trips and data-only needs, while a physical SIM is better if you need a local phone number.',
  travelerOptions: [
    {
      label: 'Short trip',
      recommendation:
        'A travel eSIM for Georgia is often the fastest option. Buy before departure, install on Wi-Fi and use it for maps, messaging and ride-hailing after landing.',
    },
    {
      label: 'Long stay',
      recommendation:
        'Use an eSIM for arrival day, then compare local Georgia SIM card packages in an official store if you need better long-term value or a local number.',
    },
    {
      label: 'Heavy data user',
      recommendation:
        'Compare total data, speed policy, hotspot support and validity. For very high usage, check current price against local operator SIM packages.',
    },
    {
      label: 'Needs local phone number',
      recommendation:
        'Most travel eSIMs are data-only. If you need a Georgian number for calls, SMS or local services, choose a local SIM or verify local operator eSIM options directly.',
    },
  ],
  whereToGet: [
    {
      label: 'Airport',
      details:
        'You usually do not need an airport counter for a travel eSIM, but airport Wi-Fi can help if you need to finish activation after landing.',
    },
    {
      label: 'City center',
      details:
        'If the eSIM does not meet your needs, visit a Tbilisi or Batumi operator store and compare local SIM packages.',
    },
    {
      label: 'Official stores',
      details:
        'Ask Magti, Silknet or Cellfie directly if you want a local operator eSIM, local number or in-person troubleshooting.',
    },
    {
      label: 'eSIM providers',
      details:
        'Travel eSIM marketplaces are convenient for pre-arrival setup. Verify coverage, network partner, refund rules and current package terms before buying.',
    },
  ],
  verificationNote:
    'Last updated: 2026-07-02. Georgia eSIM plans, prices, validity and network partners can change quickly. Verify updated packages with the eSIM provider or local operator before buying.',
  links: [
    { label: 'Magti', url: 'https://www.magticom.ge/en' },
    { label: 'Silknet', url: 'https://silknet.com/' },
    { label: 'Cellfie', url: 'https://cellfie.ge/' },
  ],
  faq: [
    {
      question: 'Is an eSIM for Georgia good for tourists?',
      answer:
        'Yes, if your phone supports eSIM and you mainly need data. A Georgia eSIM is convenient for maps, messaging and ride-hailing immediately after landing.',
    },
    {
      question: 'Does a Georgia eSIM include a local phone number?',
      answer:
        'Many travel eSIM plans are data-only and do not include calls, SMS or a local Georgian number. Check the provider details before buying.',
    },
    {
      question: 'Should I choose a Georgia eSIM or tourist SIM Georgia package?',
      answer:
        'Choose eSIM for convenience and arrival-day data. Choose a physical tourist SIM Georgia package if you need a local number, in-store help or potentially better long-stay value.',
    },
    {
      question: 'Can I install my Georgia eSIM before departure?',
      answer:
        'Usually yes, but check when validity starts. Some plans begin when installed, while others begin at first network connection.',
    },
  ],
};

const georgiaSimTr: Guide = {
  ...trGuide(
    'georgia',
    'sim-card',
    'High',
    'Çoğu ziyaretçi için resmi operatör mağazasından alınan Gürcistan sim kart, fiyat, kurulum desteği ve Gürcistan mobil internet güvenilirliği açısından en dengeli seçenektir. Tiflis sim kart şehir merkezinde kolayca alınabilir; havalimanı ise inişten hemen sonra internete ihtiyaç duyanlar için pratiktir.',
    [
      'Sadece internet mi, yoksa arama ve SMS için yerel Gürcistan numarası da mı gerektiğine karar verin.',
      'Magti, Silknet ve Cellfie gibi resmi operatörlerde hazır kart veya ziyaretçi paketlerini karşılaştırın; güncel fiyatı, süreyi ve dahil hizmetleri kontrol edin.',
      'Pasaportunuzu ve SIM kilidi olmayan telefonunuzu havalimanı standına, şehir merkezi şubesine veya resmi mağazaya götürün.',
      'Paketin internet kotasını, süresini, hotspot kullanımını ve yükleme yöntemini görevliye teyit ettirin.',
      'Mağazadan ayrılmadan Gürcistan mobil internet bağlantısını test edin; bir web sitesi açın, bakiyeyi kontrol edin ve uygulama ya da USSD kodunun çalıştığından emin olun.',
    ],
    ['Pasaport', 'SIM kilidi olmayan telefon', 'Ödeme kartı veya Gürcistan larisi nakit', 'İstenirse otel adı veya yerel adres'],
    [
      'Satın almadan önce operatörden güncel fiyatı kontrol edin; paket adları, internet limitleri ve süreler değişebilir.',
      'Havalimanı SIM noktaları pratiktir; şehir merkezi mağazalarında paket karşılaştırmak için daha fazla zamanınız olabilir.',
      'Uzun kalacaksanız yükleme seçeneklerini, aylık paketleri ve numaranın korunup korunmadığını sorun.',
    ],
    [
      'Telefonun SIM kilidi olup olmadığını kontrol etmeden paket almak.',
      'Tiflis, Batum, dağ bölgeleri veya gideceğiniz rota için kapsama alanını kontrol etmeden sadece internet kotasına bakmak.',
      'Aktivasyon, internet ve yükleme yöntemini test etmeden mağazadan ayrılmak.',
      'Her turist sim kart paketinde yerel numara, arama veya SMS olduğunu varsaymak.',
      'Yakında resmi operatör mağazası varken belirsiz satıcılardan almak.',
    ],
  ),
  title: 'Gürcistan SIM Kart Rehberi',
  lastUpdated: '2026-07-14',
  description:
    'Gürcistan SIM kart seçeneklerini, Tiflis’te nereden alınacağını, gerekli belgeleri, mobil internet kurulumunu ve paket detaylarını karşılaştır.',
  summary:
    'Yerel Gürcistan SIM kart, mobil internetle birlikte Gürcistan telefon numarası sağlayabilir. Magti, Silknet ve Cellfie paketlerini karşılaştırıp kapsama, süre ve aktivasyon ayrıntılarını doğrula.',
  mobileInternetTips: [
    'Satış noktasından ayrılmadan mobil interneti, bakiye sorgulamayı ve yükleme yöntemini test et.',
    'Tiflis, Batum ve gideceğin dağlık veya bölgesel rotalar için kapsama alanını kontrol et.',
    'Geçerlilik, yenileme, hız sınırı, adil kullanım ve hotspot kurallarını doğrula.',
    'Kendi ülkendeki servislerden doğrulama SMS’i alacaksan ana SIM’ine erişimi koru.',
  ],
  simComparison: {
    physicalSim:
      'Gürcistan numarası, arama, SMS veya mağazada kurulum desteği gerekiyorsa kullanışlıdır. Kayıt için genellikle pasaport istenir.',
    esim:
      'Uyumlu ve kilitsiz telefonda hızlı internet için pratiktir. Birçok seyahat eSIM’i sadece internet sunar; yerel numarayı kontrol et.',
  },
  travelerOptions: [
    {
      label: 'Kısa seyahat',
      recommendation:
        'Havalimanından veya merkezi Tiflis mağazasından alınan hazır kart paketi harita ve mesajlaşma ihtiyacını karşılayabilir. Kolay aktivasyon, yeterli internet ve net geçerlilik süresine bakın.',
    },
    {
      label: 'Uzun kalış',
      recommendation:
        'Resmi şehir mağazasına gidip hazır kart veya aylık benzeri paketleri karşılaştırın. Yükleme yöntemini ve aynı numarayı daha sonra kullanıp kullanamayacağınızı sorun.',
    },
    {
      label: 'Yoğun internet kullanımı',
      recommendation:
        'Yüksek internet kotası, hotspot izni ve seyahat edeceğiniz bölgelerde kapsama alanına bakın. Sadece görünen kota değil, adil kullanım ve hız sınırlarını da kontrol edin.',
    },
    {
      label: 'Yerel telefon numarası gerekli',
      recommendation:
        'Data-only seyahat eSIM yerine yerel operatörden fiziksel SIM tercih edin. Teslimat, banka veya yerel iletişim için arama ve SMS’in dahil olduğunu teyit edin.',
    },
  ],
  whereToGet: [
    {
      label: 'Havalimanı',
      details:
        'İnişten hemen sonra internete ihtiyaç duyuyorsanız pratiktir. Havalimanı teklifleri şehir mağazalarından farklı olabileceği için güncel fiyat ve süreyi kontrol edin.',
    },
    {
      label: 'Şehir merkezi',
      details:
        'Tiflis ve Batum merkez şubelerinde paketleri karşılaştırmak ve kurulum soruları sormak genellikle daha rahattır.',
    },
    {
      label: 'Resmi mağazalar',
      details:
        'Magti, Silknet ve Cellfie resmi mağazaları kayıt, aktivasyon desteği ve paket doğrulama için en güvenli noktalardır.',
    },
    {
      label: 'eSIM sağlayıcıları',
      details:
        'Yerel numaraya ihtiyacınız yoksa gelmeden önce Gürcistan eSIM seçeneklerini karşılaştırabilirsiniz. Yerel numara için fiziksel SIM veya operatör eSIM şartlarını doğrudan kontrol edin.',
    },
  ],
  verificationNote:
    'Son güncelleme: 2026-07-14. Operatör paketleri, kimlik şartları ve kapsama değişebilir. Satın almadan önce Magti, Silknet, Cellfie veya ilgili sağlayıcıdan güncel detayları doğrula.',
  links: [
    { label: 'Magti', url: 'https://www.magticom.ge/en' },
    { label: 'Silknet', url: 'https://silknet.com/' },
    { label: 'Cellfie', url: 'https://cellfie.ge/' },
  ],
  faq: [
    {
      question: "Gürcistan'da SIM kart nereden alınır?",
      answer:
        'Magti, Silknet ve Cellfie gibi operatörlerin resmi mağazaları veya yetkili satış noktaları kontrol edilebilir. Paketler değişebileceği için almadan önce güncel detayları doğrulamak önemlidir.',
    },
    {
      question: "Tiflis Havalimanı'nda SIM kart alınır mı?",
      answer:
        'Havalimanında seçenekler bulunabilir; ancak şehir merkezindeki resmi mağazaları da karşılaştırmak faydalı olabilir. Fiyat, paket ve kimlik gereklilikleri değişebilir.',
    },
    {
      question: 'Gürcistan SIM kart için pasaport gerekir mi?',
      answer:
        'Yerel SIM kaydı için genellikle pasaport istenir. Şartlar değişebileceği için satın almadan önce operatörle doğrulayın.',
    },
    {
      question: "Gürcistan'da hangi mobil operatörler kontrol edilebilir?",
      answer:
        'Magti, Silknet ve Cellfie yaygın olarak karşılaştırılır. Kapsama, paket süresi, hotspot kuralları ve dahil hizmetler operatöre ve bölgeye göre değişebilir.',
    },
    {
      question: "Gürcistan'da eSIM kullanılır mı?",
      answer:
        'Cihazı uyumlu ve kilitsiz olan kullanıcılar eSIM seçeneklerini değerlendirebilir. Paketin sadece internet sunup sunmadığını ve yerel numaraya ihtiyaç duyup duymadığını kontrol et.',
    },
    {
      question: 'Gürcistan internet hattı alırken neye dikkat edilmeli?',
      answer:
        'Gideceğin bölgedeki kapsama alanını, internet kotasını, geçerlilik süresini, hız veya adil kullanım sınırlarını, hotspot desteğini ve yükleme seçeneklerini karşılaştır.',
    },
  ],
};

const georgiaEsimTr: Guide = {
  ...trGuide(
    'georgia',
    'esim',
    'Medium',
    'Gürcistan eSIM, özellikle kısa seyahatlerde inişten hemen sonra Gürcistan mobil internet kullanmak için en pratik yoldur. Uzun kalışta veya yerel telefon numarası gerekiyorsa fiziksel Gürcistan sim kart seçenekleriyle karşılaştırın.',
    [
      'Gürcistan eSIM satın almadan önce telefonunuzun eSIM desteklediğini ve operatör kilidi olmadığını kontrol edin.',
      'Seyahat eSIM sağlayıcılarını internet kotası, geçerlilik süresi, bağlı olduğu yerel ağ, hotspot kuralları ve paketin data-only olup olmadığına göre karşılaştırın.',
      'Gürcistan eSIM kurulumunu stabil Wi-Fi varken yapın; ancak geçerliliğin satın alma, kurulum veya ilk bağlantıda başlayıp başlamadığını kontrol edin.',
      'Banka, havayolu veya kendi ülkenizdeki servislerden SMS kodu almanız gerekiyorsa ana SIM’inizi aktif tutun.',
      'İnişten sonra eSIM hattını açın, sağlayıcı istiyorsa data roaming’i etkinleştirin ve havalimanından ayrılmadan interneti test edin.',
    ],
    ['eSIM destekli ve kilitsiz telefon', 'Kurulum için stabil Wi-Fi', 'Ödeme kartı', 'Yerel operatör eSIM’i alınıyorsa istenirse pasaport'],
    [
      'Satın almadan önce eSIM sağlayıcısından güncel fiyatı kontrol edin; paketler ve bağlı ağlar değişebilir.',
      'Seyahat eSIM’leri pratiktir ancak GB başına yerel Gürcistan sim kart paketlerinden pahalı olabilir.',
      'Bazı Gürcistan eSIM paketleri sadece internet sunar; yerel numara, arama veya SMS içermez.',
    ],
    [
      'Telefon uyumluluğunu kontrol etmeden eSIM satın almak.',
      'Geçerlilik süresi hemen başlıyorsa paketi çok erken aktive etmek.',
      'eSIM çalışmadan QR kodunu veya kurulum e-postasını silmek.',
      'Data-only Gürcistan eSIM ile yerel SMS alınabileceğini varsaymak.',
      'Sorun çözmek için havalimanı Wi-Fi veya yedek bağlantı bırakmamak.',
    ],
  ),
  title: 'Gürcistan eSIM rehberi',
  description:
    'Gürcistan eSIM seçimi, Gürcistan sim kart karşılaştırması, yaygın hatalar, seyahat tipi önerileri ve güncel paket doğrulama notları.',
  summary:
    'Gürcistan eSIM, mağazaya gitmeden hızlı Gürcistan mobil internet kullanmak isteyenler için uygundur. Kısa seyahat ve data-only ihtiyaçlarda pratiktir; yerel numara gerekiyorsa fiziksel SIM daha doğru olabilir.',
  travelerOptions: [
    {
      label: 'Kısa seyahat',
      recommendation:
        'Gürcistan eSIM çoğu zaman en hızlı seçenektir. Yola çıkmadan satın alıp Wi-Fi üzerinden kurabilir, inişte harita, mesajlaşma ve araç çağırma uygulamaları için kullanabilirsiniz.',
    },
    {
      label: 'Uzun kalış',
      recommendation:
        'Varış günü için eSIM kullanıp daha sonra resmi mağazada yerel Gürcistan sim kart paketlerini karşılaştırın. Uzun vadede yerel paketler daha uygun olabilir.',
    },
    {
      label: 'Yoğun internet kullanımı',
      recommendation:
        'Toplam internet kotası, hız politikası, hotspot desteği ve geçerlilik süresini karşılaştırın. Çok yüksek kullanım için güncel fiyatı yerel operatör SIM paketleriyle kıyaslayın.',
    },
    {
      label: 'Yerel telefon numarası gerekli',
      recommendation:
        'Çoğu seyahat eSIM’i data-only çalışır. Gürcistan numarası, arama veya SMS gerekiyorsa yerel SIM alın ya da operatör eSIM şartlarını doğrudan doğrulayın.',
    },
  ],
  whereToGet: [
    {
      label: 'Havalimanı',
      details:
        'Seyahat eSIM için genellikle havalimanı standına gerek yoktur; ancak aktivasyonu tamamlamak gerekirse havalimanı Wi-Fi yedek bağlantı sağlar.',
    },
    {
      label: 'Şehir merkezi',
      details:
        'eSIM ihtiyacınızı karşılamazsa Tiflis veya Batum’daki operatör mağazalarına gidip yerel SIM paketlerini karşılaştırabilirsiniz.',
    },
    {
      label: 'Resmi mağazalar',
      details:
        'Yerel operatör eSIM’i, yerel numara veya yüz yüze destek istiyorsanız Magti, Silknet veya Cellfie mağazalarına doğrudan sorun.',
    },
    {
      label: 'eSIM sağlayıcıları',
      details:
        'Seyahat eSIM pazar yerleri gelmeden kurulum için pratiktir. Satın almadan önce kapsama, yerel ağ, iade şartları ve güncel paket detaylarını doğrulayın.',
    },
  ],
  verificationNote:
    'Son güncelleme: 2026-07-02. Gürcistan eSIM paketleri, fiyatları, geçerlilik süresi ve bağlı ağları hızlı değişebilir. Satın almadan önce eSIM sağlayıcısı veya yerel operatörden güncel paketi doğrulayın.',
  links: [
    { label: 'Magti', url: 'https://www.magticom.ge/en' },
    { label: 'Silknet', url: 'https://silknet.com/' },
    { label: 'Cellfie', url: 'https://cellfie.ge/' },
  ],
  faq: [
    {
      question: 'Gürcistan eSIM turistler için iyi mi?',
      answer:
        'Telefonunuz eSIM destekliyorsa ve temel ihtiyacınız internetse evet. Gürcistan eSIM, inişten hemen sonra harita, mesajlaşma ve ulaşım uygulamaları için pratiktir.',
    },
    {
      question: 'Gürcistan eSIM yerel telefon numarası verir mi?',
      answer:
        'Birçok seyahat eSIM paketi sadece internet sunar; arama, SMS veya yerel Gürcistan numarası içermez. Satın almadan önce sağlayıcı detaylarını kontrol edin.',
    },
    {
      question: 'Gürcistan eSIM mi turist sim kart Gürcistan paketi mi?',
      answer:
        'Kolaylık ve inişte hızlı internet için eSIM seçin. Yerel numara, mağaza desteği veya uzun kalışta daha iyi değer istiyorsanız fiziksel turist sim kart Gürcistan paketi daha uygun olabilir.',
    },
    {
      question: 'Gürcistan eSIM yola çıkmadan kurulabilir mi?',
      answer:
        'Genellikle kurulabilir; fakat geçerlilik süresinin ne zaman başladığını kontrol edin. Bazı paketlerde süre kurulumda, bazılarında ilk ağ bağlantısında başlar.',
    },
  ],
};

const serbiaSimEn: Guide = {
  ...enGuide(
    'serbia',
    'sim-card',
    'High',
    'For most visitors, a Serbia SIM card from an official operator store is the most practical way to get reliable mobile internet in Serbia and a local phone number. A Belgrade SIM card is easy to arrange in the city, while airport or arrival-area options are useful if you need data immediately.',
    [
      'Decide whether you need only mobile data or also a Serbian phone number for calls, SMS, delivery apps, apartment viewings or bank appointments.',
      'Compare prepaid and visitor packages from Yettel Serbia, A1 Serbia and mts, then check the current price, validity and included services before buying.',
      'Bring your passport and an unlocked phone to an official store, airport counter or trusted city center sales point.',
      'Ask staff to activate the SIM, confirm the data allowance, validity period, hotspot/tethering rules, top-up method and whether calls/SMS are included.',
      'Before leaving the counter, test mobile internet in Serbia by opening a website, checking balance and confirming that the operator app or top-up method works.',
    ],
    ['Passport', 'Unlocked phone', 'Payment card or Serbian dinar cash', 'Local address or hotel name if requested'],
    [
      'Check current price directly with Yettel Serbia, A1 Serbia or mts Telekom Srbija before buying; package names, data limits and validity can change.',
      'Airport or arrival-area SIM options are convenient, but city center official stores usually give more time to compare plans.',
      'For longer stays, ask about recurring prepaid bundles, top-ups, number validity and whether the plan supports hotspot use.',
    ],
    [
      'Buying before checking that your phone is unlocked.',
      'Choosing only by advertised data size without checking coverage for Belgrade, Novi Sad, mountain areas or your travel route.',
      'Leaving the store before activation, mobile data and top-up are tested.',
      'Assuming every visitor package includes a local phone number, calls or SMS.',
      'Using unclear resellers when an official operator store is available nearby.',
    ],
  ),
  title: 'Serbia SIM Card Guide',
  lastUpdated: '2026-07-14',
  description:
    'Compare Serbia SIM card options, where to buy one in Belgrade, required documents, mobile internet setup and current package details.',
  summary:
    'A local Serbia SIM card can provide mobile internet and a Serbian phone number. Compare Yettel Serbia, A1 Serbia and mts packages, then confirm coverage, validity and activation details before buying.',
  mobileInternetTips: [
    'Test mobile data, balance checks and the top-up method before leaving the sales point.',
    'Check coverage for Belgrade, Novi Sad and any regional routes on your plan.',
    'Confirm validity, renewal, speed or fair-use limits and whether hotspot use is supported.',
    'Ask how long the number stays active if you plan to top up or return later.',
  ],
  simComparison: {
    physicalSim:
      'Useful when you need a Serbian number, calls, SMS or in-store setup support. Registration commonly requires a passport.',
    esim:
      'Useful for quick data on a compatible unlocked phone. Check whether the plan is data-only or includes a Serbian number.',
  },
  travelerOptions: [
    {
      label: 'Short trip',
      recommendation:
        'A prepaid starter package can cover maps, messaging and ride-hailing. Prioritize simple activation, enough data and a clear validity period.',
    },
    {
      label: 'Long stay',
      recommendation:
        'Visit an official city store in Belgrade, Novi Sad or your base city. Ask about top-up rules, recurring prepaid bundles and how long the number stays active.',
    },
    {
      label: 'Heavy data user',
      recommendation:
        'Compare large data bundles, hotspot permission, coverage and speed policy. Do not rely only on headline data size; ask about fair-use rules and check current price.',
    },
    {
      label: 'Needs local phone number',
      recommendation:
        'Choose a local physical SIM from an operator rather than a data-only travel eSIM. Confirm that calls and SMS are included if you need local services.',
    },
  ],
  whereToGet: [
    {
      label: 'Airport',
      details:
        'Useful if you need mobile internet immediately after landing. Check current price, included data and validity because airport offers can differ from city stores.',
    },
    {
      label: 'City center',
      details:
        'A Belgrade SIM card is usually easy to arrange in central stores or shopping centers, where you can compare packages more calmly.',
    },
    {
      label: 'Official stores',
      details:
        'Official Yettel Serbia, A1 Serbia and mts Telekom Srbija stores are the safest places for registration, activation support and package verification.',
    },
    {
      label: 'eSIM providers',
      details:
        'If you do not need a Serbian phone number, compare an eSIM for Serbia before arrival. For a local number, verify local operator options directly.',
    },
  ],
  verificationNote:
    'Last updated: 2026-07-14. Operator packages, registration rules and coverage can change. Verify current details with Yettel Serbia, A1 Serbia, mts or the provider before buying.',
  links: [
    { label: 'Yettel Serbia', url: 'https://www.yettel.rs/' },
    { label: 'A1 Serbia', url: 'https://www.a1.rs/' },
    { label: 'mts Telekom Srbija', url: 'https://mts.rs/' },
  ],
  faq: [
    {
      question: 'Where can I buy a SIM card in Serbia?',
      answer:
        'Official Yettel Serbia, A1 Serbia and mts stores or authorized sales points are useful places to check. Confirm current package and registration details before buying.',
    },
    {
      question: 'Where can I buy a SIM card in Belgrade?',
      answer:
        'Operator stores and authorized sales points in central areas or shopping centers can be practical. Arrival-area options may also exist, but availability can change.',
    },
    {
      question: 'Do I need a passport for a Serbia SIM card?',
      answer:
        'A passport is commonly requested for local SIM registration. Requirements can change, so check with the operator before purchasing.',
    },
    {
      question: 'Which mobile operators are commonly checked in Serbia?',
      answer:
        'Yettel Serbia, A1 Serbia and mts are commonly compared. Coverage, package validity, hotspot rules and included services may differ.',
    },
    {
      question: 'Can I use an eSIM in Serbia?',
      answer:
        'An eSIM can be useful for quick data if your phone is compatible and unlocked. Check whether the plan includes only data or also a Serbian number, calls or SMS.',
    },
    {
      question: 'What should I check for mobile internet in Serbia?',
      answer:
        'Compare coverage, data allowance, validity, renewal rules, speed or fair-use limits, hotspot support and top-up options. Longer stays may need a different package.',
    },
  ],
};

const serbiaEsimEn: Guide = {
  ...enGuide(
    'serbia',
    'esim',
    'Medium',
    'A Serbia eSIM is convenient if you want mobile internet in Serbia before you visit a store. It is often best for short trips and data-only use, while a physical Serbia SIM card is usually better for a local phone number or longer stays.',
    [
      'Confirm that your phone supports eSIM and is carrier-unlocked before buying any eSIM for Serbia.',
      'Compare travel eSIM providers by data allowance, validity, network partner, hotspot rules, refund policy and whether the plan is data-only.',
      'Install the Serbia eSIM while you have stable Wi-Fi, but check whether validity starts at purchase, installation or first network connection.',
      'Keep your primary SIM available if you need SMS codes from banks, airlines or home-country services.',
      'After landing, enable the eSIM line, turn on data roaming if required by the provider and test mobile internet before leaving the airport.',
    ],
    ['eSIM-compatible unlocked phone', 'Stable Wi-Fi for installation', 'Payment card', 'Passport only if buying a local operator eSIM that requires registration'],
    [
      'Check current price with the eSIM provider before buying; data allowances, validity and network partners can change.',
      'Travel eSIMs are convenient but may cost more per GB than a local Serbia SIM card.',
      'Many eSIM for Serbia plans are data-only and do not include a Serbian phone number, calls or SMS.',
    ],
    [
      'Buying before checking eSIM compatibility.',
      'Activating too early when the validity period starts immediately.',
      'Deleting the QR code or installation email before the eSIM is working.',
      'Assuming a data-only Serbia eSIM can receive local SMS.',
      'Not keeping airport Wi-Fi or another backup connection for troubleshooting.',
    ],
  ),
  title: 'Serbia eSIM guide for travelers',
  description:
    'How to choose a Serbia eSIM or eSIM for Serbia, compare it with a Serbia SIM card, avoid common mistakes and verify current provider packages.',
  summary:
    'A Serbia eSIM is useful for instant mobile internet in Serbia without visiting a store. It is usually best for short trips and data-only needs; choose a physical SIM if you need a local number.',
  travelerOptions: [
    {
      label: 'Short trip',
      recommendation:
        'A travel eSIM for Serbia is often the quickest option. Buy before departure, install on Wi-Fi and use it for maps, messaging and ride-hailing after landing.',
    },
    {
      label: 'Long stay',
      recommendation:
        'Use an eSIM for arrival-day data, then compare local Serbia SIM card packages from Yettel Serbia, A1 Serbia and mts Telekom Srbija for longer-term use.',
    },
    {
      label: 'Heavy data user',
      recommendation:
        'Compare total data, speed policy, hotspot support and validity. For very high usage, check current price against local operator prepaid packages.',
    },
    {
      label: 'Needs local phone number',
      recommendation:
        'Most travel eSIMs are data-only. If you need a Serbian phone number for calls, SMS or local services, choose a physical SIM or verify operator eSIM rules directly.',
    },
  ],
  whereToGet: [
    {
      label: 'Airport',
      details:
        'You usually do not need an airport counter for a travel eSIM, but airport Wi-Fi can help if installation or activation needs troubleshooting.',
    },
    {
      label: 'City center',
      details:
        'If the eSIM does not fit your needs, visit a Belgrade or Novi Sad operator store and compare local SIM packages.',
    },
    {
      label: 'Official stores',
      details:
        'Ask Yettel Serbia, A1 Serbia or mts Telekom Srbija directly if you want a local operator eSIM, Serbian number or in-person support.',
    },
    {
      label: 'eSIM providers',
      details:
        'Travel eSIM marketplaces are useful for pre-arrival setup. Verify coverage, network partner, refund rules and current package terms before buying.',
    },
  ],
  verificationNote:
    'Last updated: 2026-07-02. Serbia eSIM plans, prices, validity and network partners can change quickly. Verify updated packages with the eSIM provider or local operator before buying.',
  links: [
    { label: 'Yettel Serbia', url: 'https://www.yettel.rs/' },
    { label: 'A1 Serbia', url: 'https://www.a1.rs/' },
    { label: 'mts Telekom Srbija', url: 'https://mts.rs/' },
  ],
  faq: [
    {
      question: 'Is an eSIM for Serbia good for tourists?',
      answer:
        'Yes, if your phone supports eSIM and you mainly need data. A Serbia eSIM is convenient for maps, messaging and ride-hailing immediately after landing.',
    },
    {
      question: 'Does a Serbia eSIM include a local phone number?',
      answer:
        'Many travel eSIM plans are data-only and do not include calls, SMS or a local Serbian number. Check the provider details before buying.',
    },
    {
      question: 'Should I choose a Serbia eSIM or tourist SIM Serbia package?',
      answer:
        'Choose eSIM for convenience and arrival-day data. Choose a physical tourist SIM Serbia package if you need a local number, in-store help or potentially better long-stay value.',
    },
    {
      question: 'Can I install my Serbia eSIM before departure?',
      answer:
        'Usually yes, but check when validity starts. Some plans begin when installed, while others begin at first network connection.',
    },
  ],
};

const serbiaSimTr: Guide = {
  ...trGuide(
    'serbia',
    'sim-card',
    'High',
    'Çoğu ziyaretçi için resmi operatör mağazasından alınan Sırbistan sim kart, güvenilir Sırbistan mobil internet ve yerel telefon numarası için en pratik seçenektir. Belgrad sim kart şehir merkezinde kolayca alınabilir; inişte hemen internete ihtiyaç varsa havalimanı veya varış noktası seçenekleri işe yarar.',
    [
      'Sadece internet mi, yoksa arama, SMS, teslimat uygulamaları, ev görüşmeleri veya banka randevuları için Sırp telefon numarası da mı gerektiğine karar verin.',
      'Yettel Serbia, A1 Serbia ve mts üzerinden hazır kart veya ziyaretçi paketlerini karşılaştırın; güncel fiyatı, süreyi ve dahil hizmetleri kontrol edin.',
      'Pasaportunuzu ve SIM kilidi olmayan telefonunuzu resmi mağazaya, havalimanı noktasına veya güvenilir şehir merkezi satış noktasına götürün.',
      'SIM’in aktive edildiğini, Sırbistan internet paketi kotasını, geçerlilik süresini, hotspot kurallarını, yükleme yöntemini ve arama/SMS dahil olup olmadığını teyit edin.',
      'Mağazadan ayrılmadan Sırbistan mobil internet bağlantısını test edin; bir web sitesi açın, bakiyeyi kontrol edin ve operatör uygulaması ya da yükleme yönteminin çalıştığından emin olun.',
    ],
    ['Pasaport', 'SIM kilidi olmayan telefon', 'Ödeme kartı veya Sırp dinarı nakit', 'İstenirse yerel adres veya otel adı'],
    [
      'Satın almadan önce Yettel Serbia, A1 Serbia veya mts Telekom Srbija üzerinden güncel fiyatı kontrol edin; paket adları, internet limitleri ve süreler değişebilir.',
      'Havalimanı veya varış noktası SIM seçenekleri pratiktir; şehir merkezi resmi mağazalarında paket karşılaştırmak genellikle daha rahattır.',
      'Uzun kalacaksanız düzenli hazır kart paketlerini, yükleme kurallarını, numara geçerliliğini ve hotspot desteğini sorun.',
    ],
    [
      'Telefonun SIM kilidini kontrol etmeden paket almak.',
      'Belgrad, Novi Sad, dağ bölgeleri veya seyahat rotası için kapsama alanını kontrol etmeden sadece internet kotasına bakmak.',
      'Aktivasyon, mobil internet ve yükleme yöntemini test etmeden mağazadan ayrılmak.',
      'Her ziyaretçi paketinde yerel numara, arama veya SMS olduğunu varsaymak.',
      'Yakında resmi operatör mağazası varken belirsiz satıcılardan almak.',
    ],
  ),
  title: 'Sırbistan SIM Kart Rehberi',
  lastUpdated: '2026-07-14',
  description:
    'Sırbistan SIM kart seçeneklerini, Belgrad’da nereden alınacağını, gerekli belgeleri, mobil internet kurulumunu ve paket detaylarını karşılaştır.',
  summary:
    'Yerel Sırbistan SIM kart, mobil internetle birlikte Sırp telefon numarası sağlayabilir. Yettel Serbia, A1 Serbia ve mts paketlerini karşılaştırıp kapsama, süre ve aktivasyon ayrıntılarını doğrula.',
  mobileInternetTips: [
    'Satış noktasından ayrılmadan mobil interneti, bakiye sorgulamayı ve yükleme yöntemini test et.',
    'Belgrad, Novi Sad ve planındaki bölgesel rotalar için kapsama alanını kontrol et.',
    'Geçerlilik, yenileme, hız veya adil kullanım sınırları ve hotspot desteğini doğrula.',
    'Uzun kalacak veya tekrar geleceksen numaranın ne kadar süre aktif kaldığını sor.',
  ],
  simComparison: {
    physicalSim:
      'Sırp numarası, arama, SMS veya mağazada kurulum desteği gerekiyorsa kullanışlıdır. Kayıt için genellikle pasaport istenir.',
    esim:
      'Uyumlu ve kilitsiz telefonda hızlı internet için pratiktir. Paketin sadece internet mi sunduğunu, Sırp numarası içerip içermediğini kontrol et.',
  },
  travelerOptions: [
    {
      label: 'Kısa seyahat',
      recommendation:
        'Hazır kart başlangıç paketi harita, mesajlaşma ve ulaşım uygulamaları için yeterli olabilir. Kolay aktivasyon, yeterli internet ve net geçerlilik süresine bakın.',
    },
    {
      label: 'Uzun kalış',
      recommendation:
        'Belgrad, Novi Sad veya kalacağınız şehirde resmi mağazaya gidin. Yükleme kurallarını, düzenli hazır kart paketlerini ve numaranın ne kadar süre aktif kalacağını sorun.',
    },
    {
      label: 'Yoğun internet kullanımı',
      recommendation:
        'Büyük internet paketlerini, hotspot iznini, kapsama alanını ve hız politikasını karşılaştırın. Sadece görünen kotaya bakmayın; adil kullanım kurallarını ve güncel fiyatı kontrol edin.',
    },
    {
      label: 'Yerel telefon numarası gerekli',
      recommendation:
        'Data-only seyahat eSIM yerine operatörden yerel fiziksel SIM alın. Yerel servisler için arama ve SMS’in dahil olduğunu teyit edin.',
    },
  ],
  whereToGet: [
    {
      label: 'Havalimanı',
      details:
        'İnişten hemen sonra internete ihtiyacınız varsa pratiktir. Havalimanı teklifleri şehir mağazalarından farklı olabileceği için güncel fiyat, internet kotası ve süreyi kontrol edin.',
    },
    {
      label: 'Şehir merkezi',
      details:
        'Belgrad sim kart merkezi mağazalarda veya alışveriş merkezlerinde kolayca alınabilir; paketleri daha sakin karşılaştırabilirsiniz.',
    },
    {
      label: 'Resmi mağazalar',
      details:
        'Yettel Serbia, A1 Serbia ve mts Telekom Srbija resmi mağazaları kayıt, aktivasyon desteği ve paket doğrulama için en güvenli noktalardır.',
    },
    {
      label: 'eSIM sağlayıcıları',
      details:
        'Sırp telefon numarasına ihtiyacınız yoksa gelmeden önce Sırbistan eSIM seçeneklerini karşılaştırın. Yerel numara gerekiyorsa operatör şartlarını doğrudan doğrulayın.',
    },
  ],
  verificationNote:
    'Son güncelleme: 2026-07-14. Operatör paketleri, kayıt kuralları ve kapsama değişebilir. Satın almadan önce Yettel Serbia, A1 Serbia, mts veya ilgili sağlayıcıdan güncel detayları doğrula.',
  links: [
    { label: 'Yettel Serbia', url: 'https://www.yettel.rs/' },
    { label: 'A1 Serbia', url: 'https://www.a1.rs/' },
    { label: 'mts Telekom Srbija', url: 'https://mts.rs/' },
  ],
  faq: [
    {
      question: "Sırbistan'da SIM kart için hangi operatörler var?",
      answer:
        'Yettel Serbia, A1 Serbia ve mts gibi operatörler başlangıç için kontrol edilebilir. Paketler ve şartlar değişebileceği için güncel bilgileri operatörlerden doğrulamak önemlidir.',
    },
    {
      question: "Belgrad'da SIM kart nereden alınır?",
      answer:
        'Belgrad’da operatör mağazaları, yetkili satış noktaları ve bazı alışveriş merkezi şubeleri kontrol edilebilir. Pasaport veya kimlik gereklilikleri değişebilir.',
    },
    {
      question: 'Sırbistan SIM kart için pasaport gerekir mi?',
      answer:
        'Yerel SIM kaydı için genellikle pasaport istenir. Şartlar değişebileceği için satın almadan önce operatörle doğrulayın.',
    },
    {
      question: "Sırbistan'da eSIM kullanılabilir mi?",
      answer:
        'Uyumlu ve kilitsiz telefonlarda eSIM hızlı internet için değerlendirilebilir. Paketin yalnızca internet sunup sunmadığını ve Sırp telefon numarası içerip içermediğini kontrol et.',
    },
    {
      question: "Sırbistan'da mobil internet için neye dikkat edilmeli?",
      answer:
        'İlk hafta için kapsama alanı, internet paketi, kullanım süresi, yenileme şartları, hotspot desteği ve yükleme seçenekleri karşılaştırılabilir.',
    },
    {
      question: 'Havalimanından mı, şehirden mi SIM kart alınmalı?',
      answer:
        'Havalimanı veya varış noktası hemen bağlantı için pratik olabilir. Şehirdeki resmi mağazalar ise paketleri daha sakin karşılaştırmaya yardımcı olabilir; bulunabilirlik değişebilir.',
    },
  ],
};

const serbiaEsimTr: Guide = {
  ...trGuide(
    'serbia',
    'esim',
    'Medium',
    'Sırbistan eSIM, mağazaya gitmeden önce Sırbistan mobil internet kullanmak isteyenler için pratiktir. Kısa seyahat ve sadece internet ihtiyacında iyi bir seçenek olabilir; yerel numara veya uzun kalış için fiziksel Sırbistan sim kart genellikle daha uygundur.',
    [
      'Sırbistan eSIM satın almadan önce telefonunuzun eSIM desteklediğini ve operatör kilidi olmadığını kontrol edin.',
      'Seyahat eSIM sağlayıcılarını internet kotası, geçerlilik süresi, bağlı olduğu yerel ağ, hotspot kuralları, iade politikası ve paketin data-only olup olmadığına göre karşılaştırın.',
      'Sırbistan eSIM kurulumunu stabil Wi-Fi varken yapın; geçerliliğin satın alma, kurulum veya ilk ağ bağlantısında başlayıp başlamadığını kontrol edin.',
      'Banka, havayolu veya kendi ülkenizdeki servislerden SMS kodu almanız gerekiyorsa ana SIM’inizi erişilebilir tutun.',
      'İnişten sonra eSIM hattını açın, sağlayıcı istiyorsa data roaming’i etkinleştirin ve havalimanından ayrılmadan interneti test edin.',
    ],
    ['eSIM destekli ve kilitsiz telefon', 'Kurulum için stabil Wi-Fi', 'Ödeme kartı', 'Yerel operatör eSIM’i alınıyorsa istenirse pasaport'],
    [
      'Satın almadan önce eSIM sağlayıcısından güncel fiyatı kontrol edin; internet kotası, geçerlilik ve bağlı ağlar değişebilir.',
      'Seyahat eSIM’leri pratiktir ancak GB başına yerel Sırbistan sim kart paketlerinden pahalı olabilir.',
      'Birçok Sırbistan eSIM paketi sadece internet sunar; Sırp numarası, arama veya SMS içermez.',
    ],
    [
      'Telefonun eSIM uyumluluğunu kontrol etmeden satın almak.',
      'Geçerlilik süresi hemen başlıyorsa paketi çok erken aktive etmek.',
      'eSIM çalışmadan QR kodunu veya kurulum e-postasını silmek.',
      'Data-only Sırbistan eSIM ile yerel SMS alınabileceğini varsaymak.',
      'Sorun çözmek için havalimanı Wi-Fi veya yedek bağlantı bırakmamak.',
    ],
  ),
  title: 'Sırbistan eSIM rehberi',
  description:
    'Sırbistan eSIM seçimi, Sırbistan sim kart karşılaştırması, yaygın hatalar, seyahat tipi önerileri ve güncel paket doğrulama notları.',
  summary:
    'Sırbistan eSIM, mağazaya gitmeden hızlı Sırbistan mobil internet kullanmak isteyenler için uygundur. Kısa seyahat ve data-only ihtiyaçlarda pratiktir; yerel numara gerekiyorsa fiziksel SIM daha doğru olabilir.',
  travelerOptions: [
    {
      label: 'Kısa seyahat',
      recommendation:
        'Sırbistan eSIM çoğu zaman en hızlı seçenektir. Yola çıkmadan satın alıp Wi-Fi üzerinden kurabilir, inişte harita, mesajlaşma ve ulaşım uygulamaları için kullanabilirsiniz.',
    },
    {
      label: 'Uzun kalış',
      recommendation:
        'Varış günü için eSIM kullanıp daha sonra Yettel Serbia, A1 Serbia ve mts Telekom Srbija yerel Sırbistan sim kart paketlerini karşılaştırın.',
    },
    {
      label: 'Yoğun internet kullanımı',
      recommendation:
        'Toplam internet kotası, hız politikası, hotspot desteği ve geçerlilik süresini karşılaştırın. Çok yüksek kullanım için güncel fiyatı yerel operatör paketleriyle kıyaslayın.',
    },
    {
      label: 'Yerel telefon numarası gerekli',
      recommendation:
        'Çoğu seyahat eSIM’i data-only çalışır. Sırp numarası, arama veya SMS gerekiyorsa fiziksel SIM alın ya da operatör eSIM şartlarını doğrudan doğrulayın.',
    },
  ],
  whereToGet: [
    {
      label: 'Havalimanı',
      details:
        'Seyahat eSIM için genellikle havalimanı standına gerek yoktur; ancak kurulum veya aktivasyonda sorun olursa havalimanı Wi-Fi yardımcı olabilir.',
    },
    {
      label: 'Şehir merkezi',
      details:
        'eSIM ihtiyacınızı karşılamazsa Belgrad veya Novi Sad’daki operatör mağazalarına gidip yerel Sırbistan internet paketi seçeneklerini karşılaştırabilirsiniz.',
    },
    {
      label: 'Resmi mağazalar',
      details:
        'Yerel operatör eSIM’i, Sırp numarası veya yüz yüze destek istiyorsanız Yettel Serbia, A1 Serbia veya mts Telekom Srbija mağazalarına doğrudan sorun.',
    },
    {
      label: 'eSIM sağlayıcıları',
      details:
        'Seyahat eSIM pazar yerleri gelmeden kurulum için pratiktir. Satın almadan önce kapsama, yerel ağ, iade şartları ve güncel paket detaylarını doğrulayın.',
    },
  ],
  verificationNote:
    'Son güncelleme: 2026-07-02. Sırbistan eSIM paketleri, fiyatları, geçerlilik süresi ve bağlı ağları hızlı değişebilir. Satın almadan önce eSIM sağlayıcısı veya yerel operatörden güncel paketi doğrulayın.',
  links: [
    { label: 'Yettel Serbia', url: 'https://www.yettel.rs/' },
    { label: 'A1 Serbia', url: 'https://www.a1.rs/' },
    { label: 'mts Telekom Srbija', url: 'https://mts.rs/' },
  ],
  faq: [
    {
      question: 'Sırbistan eSIM turistler için iyi mi?',
      answer:
        'Telefonunuz eSIM destekliyorsa ve temel ihtiyacınız internetse evet. Sırbistan eSIM, inişten hemen sonra harita, mesajlaşma ve ulaşım uygulamaları için pratiktir.',
    },
    {
      question: 'Sırbistan eSIM yerel telefon numarası verir mi?',
      answer:
        'Birçok seyahat eSIM paketi sadece internet sunar; arama, SMS veya yerel Sırp numarası içermez. Satın almadan önce sağlayıcı detaylarını kontrol edin.',
    },
    {
      question: 'Sırbistan eSIM mi turist sim kart Sırbistan paketi mi?',
      answer:
        'Kolaylık ve inişte hızlı internet için eSIM seçin. Yerel numara, mağaza desteği veya uzun kalışta daha iyi değer istiyorsanız fiziksel turist sim kart Sırbistan paketi daha uygun olabilir.',
    },
    {
      question: 'Sırbistan eSIM yola çıkmadan kurulabilir mi?',
      answer:
        'Genellikle kurulabilir; fakat geçerlilik süresinin ne zaman başladığını kontrol edin. Bazı paketlerde süre kurulumda, bazılarında ilk ağ bağlantısında başlar.',
    },
  ],
};

const georgiaSimRu: Guide = {
  ...ruGuide(
    'georgia',
    'sim-card',
    'High',
    'SIM-карту в Грузии удобно покупать в официальном салоне оператора. В Тбилиси и Батуми можно сравнить Magti, Silknet и Cellfie, уточнить условия пакета и проверить мобильный интернет до ухода из салона.',
    [
      'Решите, нужен ли вам только мобильный интернет или также грузинский номер для звонков, SMS и местных сервисов.',
      'Сравните актуальные пакеты Magti, Silknet и Cellfie по покрытию, сроку действия и включённым услугам.',
      'Возьмите паспорт и разблокированный телефон в официальный салон, городскую точку продаж или стойку в аэропорту.',
      'Попросите сотрудника активировать SIM-карту и объяснить пополнение, проверку баланса и условия раздачи интернета.',
      'До ухода откройте сайт, проверьте баланс и убедитесь, что мобильный интернет работает.',
    ],
    ['Паспорт', 'Разблокированный телефон', 'Банковская карта или наличные в лари', 'Адрес отеля или проживания, если попросят'],
    [
      'Перед покупкой уточните объём интернета, срок действия и правила продления — пакеты могут меняться.',
      'Проверьте покрытие не только в Тбилиси, но и в других местах по вашему маршруту.',
      'Уточните наличие местного номера, звонков, SMS, раздачи интернета и удобного способа пополнения.',
    ],
    [
      'Покупать SIM-карту, не проверив блокировку телефона.',
      'Выбирать пакет только по объёму трафика, не проверяя покрытие и срок действия.',
      'Уходить до активации и проверки мобильного интернета.',
      'Считать, что любой пакет включает местный номер, звонки и SMS.',
      'Покупать у случайного продавца, когда рядом есть официальный салон.',
    ],
  ),
  title: 'SIM-карта в Грузии',
  description:
    'Как купить SIM-карту в Грузии и Тбилиси: операторы, документы, аэропорт или город, мобильный интернет, eSIM и советы на первую неделю.',
  summary:
    'Местная SIM-карта может дать мобильный интернет в Грузии и грузинский номер. Сравните Magti, Silknet и Cellfie, затем уточните покрытие, срок действия и активацию.',
  mobileInternetTips: [
    'До ухода из точки продаж проверьте интернет, баланс и способ пополнения.',
    'Уточните покрытие в Тбилиси, Батуми и на горных или региональных маршрутах.',
    'Проверьте срок действия, продление, ограничения скорости и возможность раздачи интернета.',
    'Сохраните доступ к основной SIM-карте, если нужны коды из банков или сервисов вашей страны.',
  ],
  simComparison: {
    physicalSim:
      'Подходит, если нужны грузинский номер, звонки, SMS или помощь в салоне. Для регистрации обычно нужен паспорт.',
    esim:
      'Подходит для быстрого интернета на совместимом разблокированном телефоне. Многие туристические eSIM работают только с передачей данных.',
  },
  lastUpdated: '2026-07-14',
  travelerOptions: [
    {
      label: 'Короткая поездка',
      recommendation:
        'Для карт, мессенджеров и такси может хватить предоплаченного пакета с понятным сроком действия. Сравните актуальные условия перед покупкой.',
    },
    {
      label: 'Долгое пребывание',
      recommendation:
        'В официальном салоне уточните регулярные пакеты, способы пополнения и срок активности номера.',
    },
    {
      label: 'Много мобильного интернета',
      recommendation:
        'Сравните объём трафика, покрытие по маршруту, ограничения скорости, раздачу интернета и правила справедливого использования.',
    },
    {
      label: 'Нужен местный номер',
      recommendation:
        'Физическая SIM-карта местного оператора может быть удобнее туристической eSIM. Уточните, входят ли звонки и SMS.',
    },
  ],
  whereToGet: [
    {
      label: 'Аэропорт',
      details:
        'Подходит, если интернет нужен сразу после прилёта. Ассортимент и условия могут отличаться от городских салонов.',
    },
    {
      label: 'Центр города',
      details:
        'В Тбилиси и Батуми обычно проще спокойно сравнить пакеты и получить помощь с настройкой.',
    },
    {
      label: 'Официальные салоны',
      details:
        'Салоны Magti, Silknet и Cellfie удобны для регистрации, активации и проверки актуальных условий.',
    },
    {
      label: 'eSIM',
      details:
        'eSIM может подойти для быстрого доступа к интернету. Проверьте совместимость телефона, наличие местного номера и условия пакета.',
    },
  ],
  verificationNote:
    'Обновлено: 2026-07-14. Пакеты, требования к документам и покрытие могут меняться. Перед покупкой проверьте актуальные условия у Magti, Silknet, Cellfie или выбранного провайдера.',
  links: [
    { label: 'Magti', url: 'https://www.magticom.ge/en' },
    { label: 'Silknet', url: 'https://silknet.com/' },
    { label: 'Cellfie', url: 'https://cellfie.ge/' },
  ],
  faq: [
    {
      question: 'Где купить SIM-карту в Грузии?',
      answer:
        'Можно проверить официальные салоны и авторизованные точки Magti, Silknet и Cellfie. Перед покупкой уточните актуальный пакет и условия регистрации.',
    },
    {
      question: 'Можно ли купить SIM-карту в аэропорту Тбилиси?',
      answer:
        'В аэропорту могут быть точки продаж, но полезно также сравнить официальные салоны в городе. Цена, набор услуг и требования к документам могут отличаться.',
    },
    {
      question: 'Нужен ли паспорт для SIM-карты в Грузии?',
      answer:
        'Для регистрации местной SIM-карты обычно просят паспорт. Требования могут меняться, поэтому уточните их у оператора.',
    },
    {
      question: 'Каких операторов обычно сравнивают в Грузии?',
      answer:
        'Часто сравнивают Magti, Silknet и Cellfie. Покрытие, срок действия, раздача интернета и включённые услуги могут различаться.',
    },
    {
      question: 'Можно ли использовать eSIM в Грузии?',
      answer:
        'eSIM может быть удобна для быстрого подключения, если телефон совместим и разблокирован. Проверьте, нужен ли вам местный номер или достаточно передачи данных.',
    },
    {
      question: 'Что проверить перед покупкой мобильного интернета в Грузии?',
      answer:
        'Сравните покрытие по маршруту, объём трафика, срок действия, ограничения скорости, раздачу интернета, пополнение и наличие звонков или SMS.',
    },
  ],
};

const serbiaSimRu: Guide = {
  ...ruGuide(
    'serbia',
    'sim-card',
    'High',
    'SIM-карту в Сербии удобно покупать в официальном салоне оператора. В Белграде и Нови-Саде можно сравнить Yettel Serbia, A1 Serbia и mts, уточнить регистрацию и проверить мобильный интернет на месте.',
    [
      'Решите, нужен ли только интернет или также сербский номер для звонков, SMS, доставки и местных сервисов.',
      'Сравните актуальные пакеты Yettel Serbia, A1 Serbia и mts по покрытию, сроку действия и включённым услугам.',
      'Возьмите паспорт и разблокированный телефон в официальный салон или авторизованную точку продаж.',
      'Попросите активировать SIM-карту и объяснить пополнение, продление, проверку баланса и раздачу интернета.',
      'До ухода проверьте мобильный интернет, баланс и способ пополнения.',
    ],
    ['Паспорт', 'Разблокированный телефон', 'Банковская карта или наличные в динарах', 'Адрес проживания, если попросят'],
    [
      'Уточните объём интернета, срок действия, продление и правила сохранения номера — условия могут меняться.',
      'Проверьте покрытие в Белграде, Нови-Саде и других местах по вашему маршруту.',
      'Сравните раздачу интернета, ограничения скорости, звонки, SMS и способы пополнения.',
    ],
    [
      'Покупать SIM-карту, не проверив блокировку телефона.',
      'Выбирать пакет без проверки покрытия и срока действия.',
      'Уходить до активации и теста мобильного интернета.',
      'Считать, что любой пакет включает местный номер, звонки и SMS.',
      'Покупать у неясного продавца вместо официальной точки.',
    ],
  ),
  title: 'SIM-карта в Сербии',
  description:
    'Как купить SIM-карту в Сербии и Белграде: операторы, документы, аэропорт или город, мобильный интернет, eSIM и советы на первую неделю.',
  summary:
    'Местная SIM-карта может дать мобильный интернет в Сербии и сербский номер. Сравните Yettel Serbia, A1 Serbia и mts, затем уточните покрытие, срок действия и активацию.',
  mobileInternetTips: [
    'До ухода из точки продаж проверьте интернет, баланс и способ пополнения.',
    'Уточните покрытие в Белграде, Нови-Саде и на региональных маршрутах.',
    'Проверьте срок действия, продление, ограничения скорости и возможность раздачи интернета.',
    'Если планируете долгое пребывание или повторный приезд, спросите о сроке активности номера.',
  ],
  simComparison: {
    physicalSim:
      'Подходит, если нужны сербский номер, звонки, SMS или помощь в салоне. Для регистрации обычно нужен паспорт.',
    esim:
      'Подходит для быстрого интернета на совместимом разблокированном телефоне. Проверьте, включает ли пакет сербский номер или только передачу данных.',
  },
  lastUpdated: '2026-07-14',
  travelerOptions: [
    {
      label: 'Короткая поездка',
      recommendation:
        'Для карт, мессенджеров и такси может хватить предоплаченного стартового пакета. Проверьте объём интернета и срок действия.',
    },
    {
      label: 'Долгое пребывание',
      recommendation:
        'В официальном салоне уточните регулярные предоплаченные пакеты, пополнение и срок активности номера.',
    },
    {
      label: 'Много мобильного интернета',
      recommendation:
        'Сравните объём трафика, покрытие, ограничения скорости, раздачу интернета и правила справедливого использования.',
    },
    {
      label: 'Нужен местный номер',
      recommendation:
        'Физическая SIM-карта местного оператора может быть удобнее туристической eSIM. Проверьте наличие звонков и SMS.',
    },
  ],
  whereToGet: [
    {
      label: 'Аэропорт или зона прилёта',
      details:
        'Может быть удобно для подключения сразу после прилёта, но доступность и условия стоит проверить заранее.',
    },
    {
      label: 'Белград',
      details:
        'В центре города и торговых центрах можно найти салоны операторов и спокойно сравнить пакеты.',
    },
    {
      label: 'Официальные салоны',
      details:
        'Салоны Yettel Serbia, A1 Serbia и mts удобны для регистрации, активации и проверки актуальных условий.',
    },
    {
      label: 'eSIM',
      details:
        'eSIM может подойти для быстрого интернета. Проверьте совместимость телефона и наличие сербского номера, звонков или SMS.',
    },
  ],
  verificationNote:
    'Обновлено: 2026-07-14. Пакеты, правила регистрации и покрытие могут меняться. Перед покупкой проверьте актуальные условия у Yettel Serbia, A1 Serbia, mts или выбранного провайдера.',
  links: [
    { label: 'Yettel Serbia', url: 'https://www.yettel.rs/' },
    { label: 'A1 Serbia', url: 'https://www.a1.rs/' },
    { label: 'mts', url: 'https://mts.rs/' },
  ],
  faq: [
    {
      question: 'Где купить SIM-карту в Сербии?',
      answer:
        'Можно проверить официальные салоны и авторизованные точки Yettel Serbia, A1 Serbia и mts. Уточните актуальные пакеты и правила регистрации.',
    },
    {
      question: 'Где купить SIM-карту в Белграде?',
      answer:
        'Салоны операторов и авторизованные точки есть в центральных районах и торговых центрах. Доступность конкретных пакетов может меняться.',
    },
    {
      question: 'Нужен ли паспорт для SIM-карты в Сербии?',
      answer:
        'Для регистрации местной SIM-карты обычно просят паспорт. Перед покупкой лучше уточнить актуальные требования у оператора.',
    },
    {
      question: 'Каких операторов обычно сравнивают в Сербии?',
      answer:
        'Часто сравнивают Yettel Serbia, A1 Serbia и mts. Покрытие, срок действия, раздача интернета и включённые услуги могут различаться.',
    },
    {
      question: 'Можно ли использовать eSIM в Сербии?',
      answer:
        'eSIM может быть удобна для быстрого подключения на совместимом разблокированном телефоне. Проверьте, включает ли пакет только интернет или также сербский номер.',
    },
    {
      question: 'Что проверить при выборе мобильного интернета в Сербии?',
      answer:
        'Сравните покрытие, объём трафика, срок действия, продление, ограничения скорости, раздачу интернета и способы пополнения.',
    },
  ],
};

const georgiaTransportEn: Guide = {
  ...enGuide(
    'georgia',
    'transport',
    'High',
    'For a practical first week in Georgia, set up mobile data, save your accommodation address and keep more than one taxi and map app available. In Tbilisi, compare Bolt, Yandex Go and Maxim, and check current TTC information for public transport.',
    [
      'Install taxi, public transport and map apps while you still have reliable Wi-Fi.',
      'Save your accommodation address in Georgian and English, plus a map pin for the entrance.',
      'Check airport pickup zones and current public transport options before landing.',
      'Confirm how tickets or contactless payments work in the city you are visiting.',
      'Download an offline map and keep a backup payment method for the first day.',
    ],
    ['Phone with mobile data', 'Accommodation address and map pin', 'Payment card plus a small cash backup', 'Offline map or saved route'],
    [
      'App availability, pickup zones and accepted payment methods can change; check them before each important trip.',
      'Public transport schedules and ticket rules may differ by city and time of day.',
      'For regional or late-night journeys, check the return route and last departure before leaving.',
    ],
    [
      'Accepting an unmetered or unofficial taxi without checking the route and expected fare.',
      'Relying on only one ride or navigation app when availability changes.',
      'Leaving the airport without confirming the correct pickup point or accommodation pin.',
      'Assuming the same ticket or payment method works across every Georgian city.',
      'Starting a late journey without checking the final public transport departure.',
    ],
  ),
  title: 'Georgia Transport Guide',
  description:
    'Georgia transport guide for Tbilisi taxi apps, public transport, airport-to-city options, maps and practical first-week travel tips.',
  summary:
    'Getting around Georgia is easier when mobile internet, taxi apps and offline navigation are ready before arrival. Compare current options for Tbilisi and each city on your route.',
  lastUpdated: '2026-07-14',
  transportApps: [
    {
      label: 'Bolt',
      details:
        'Commonly used for city rides and airport transfers. Check the pickup point, route, payment method and current fare in the app.',
    },
    {
      label: 'Yandex Go',
      details:
        'Useful as another app-based ride option. Availability and payment methods can vary by city and account.',
    },
    {
      label: 'Maxim',
      details:
        'Can be compared as an additional taxi app in some areas. Confirm the vehicle and route before starting the trip.',
    },
  ],
  publicTransportTips: [
    'Tbilisi Transport Company (TTC) is useful for checking local routes and transport updates.',
    'Metro, bus and other payment rules can change, so confirm current ticket or contactless options locally.',
    'Service frequency may be lower late at night, on holidays or outside central areas.',
  ],
  airportToCityTips: [
    'Before landing, save the exact accommodation address and check the airport pickup area for your chosen app.',
    'Compare app-based rides, official airport options and current public transport information before deciding.',
    'If you arrive without mobile data, use airport Wi-Fi long enough to confirm the route and meeting point.',
  ],
  navigationApps: [
    {
      label: 'Google Maps',
      details: 'Useful for places, walking routes and general route planning. Transit details should be checked against current local information.',
    },
    {
      label: 'Yandex Maps',
      details: 'Helpful for comparing local search results, traffic and navigation options.',
    },
    {
      label: 'Organic Maps',
      details: 'Useful for downloadable offline maps when mobile coverage is limited.',
    },
    {
      label: 'Maps.me',
      details: 'Another offline-map option to prepare before arrival; check downloaded regions before leaving Wi-Fi.',
    },
  ],
  verificationNote:
    'Last updated: 2026-07-14. App availability, pickup zones, schedules and ticket rules can change. Check TTC, the airport, your chosen app and current local sources before travelling.',
  links: [
    { label: 'Tbilisi Transport / TTC', url: 'https://ttc.com.ge/en' },
    { label: 'Tbilisi Airport', url: 'https://tbilisiairport.com/' },
    { label: 'Bolt Georgia', url: 'https://bolt.eu/en-ge/' },
  ],
  faq: [
    {
      question: 'Which taxi apps are commonly used in Tbilisi?',
      answer:
        'Bolt, Yandex Go and Maxim are commonly checked for rides in Tbilisi. Availability, pickup points and fares can change, so compare the current app details.',
    },
    {
      question: 'What should I prepare for transport in my first week in Georgia?',
      answer:
        'Prepare mobile internet, your accommodation address, at least two map or taxi apps, an offline map and a backup payment method.',
    },
    {
      question: 'How can I get from Tbilisi Airport to the city?',
      answer:
        'Check app-based taxis, official airport options and current public transport information before arrival. Confirm the pickup point and exact destination first.',
    },
    {
      question: 'How does public transport work in Tbilisi?',
      answer:
        'Tbilisi has metro and bus services, but payment and ticket details can change. TTC and current local information are useful places to verify routes and rules.',
    },
    {
      question: 'Which map apps can help in Georgia?',
      answer:
        'Google Maps and Yandex Maps can help with navigation, while Organic Maps or Maps.me can provide an offline backup. Compare routes when details matter.',
    },
    {
      question: 'Is mobile internet important for transport in Georgia?',
      answer:
        'It can help with ride requests, route checks, translations and messages. Downloading an offline map is still useful when coverage or data is limited.',
    },
  ],
};

const serbiaTransportEn: Guide = {
  ...enGuide(
    'serbia',
    'transport',
    'High',
    'For a practical first week in Serbia, prepare mobile data, save your address and check both ride apps and public transport options. In Belgrade, compare Yandex Go, CarGo and local taxi services such as Pink Taxi.',
    [
      'Install ride, public transport and map apps before arrival.',
      'Save your accommodation address, entrance details and a map pin.',
      'Check current Belgrade Airport pickup, taxi and public transport information.',
      'Verify local ticket and payment rules instead of relying on older travel advice.',
      'Download an offline map and check the return route before late or regional trips.',
    ],
    ['Phone with mobile data', 'Accommodation address and map pin', 'Payment card plus a cash backup', 'Offline map or saved route'],
    [
      'Ride-app availability, airport meeting points and payment methods can change.',
      'Belgrade public transport routes and ticket rules should be checked with current local sources.',
      'For intercity trips, verify the station, platform, schedule and return option before departure.',
    ],
    [
      'Taking an unofficial airport taxi without checking the vehicle, route or fare method.',
      'Using old information about public transport payment or ticket rules.',
      'Relying on only one ride or navigation app when availability changes.',
      'Confusing the airport pickup point or entering an incomplete accommodation address.',
      'Starting an intercity or late-night trip without checking the return schedule.',
    ],
  ),
  title: 'Serbia Transport Guide',
  description:
    'Serbia transport guide for Belgrade taxi apps, public transport, airport-to-city options, maps and practical first-week travel tips.',
  summary:
    'Getting around Serbia is easier when mobile internet, current Belgrade transport information and backup navigation are ready before arrival.',
  lastUpdated: '2026-07-14',
  transportApps: [
    {
      label: 'Yandex Go',
      details:
        'Commonly checked for app-based rides. Confirm the pickup point, route, payment method and current fare in the app.',
    },
    {
      label: 'CarGo',
      details:
        'Useful as another app-based option in Belgrade. Availability and account requirements can change.',
    },
    {
      label: 'Pink Taxi',
      details:
        'A local taxi service that can be kept as another option. Confirm current booking methods and vehicle details.',
    },
  ],
  publicTransportTips: [
    'Public Transport Belgrade and current city sources can help verify routes and service updates.',
    'Moovit may help with bus, tram and walking connections, but important journeys should be checked against current local information.',
    'Ticket and payment rules can change, so avoid relying on screenshots or older articles.',
  ],
  airportToCityTips: [
    'Save your accommodation address and check the current airport pickup or meeting point before landing.',
    'Compare app-based rides, official taxi arrangements, transfers and available public transport.',
    'Use airport Wi-Fi to confirm the vehicle, route and destination if your mobile data is not ready.',
  ],
  navigationApps: [
    {
      label: 'Google Maps',
      details: 'Useful for places, walking and general route planning. Check public transport details against current local sources.',
    },
    {
      label: 'Yandex Maps',
      details: 'Helpful for comparing local search, traffic and navigation results.',
    },
    {
      label: 'Moovit',
      details: 'Useful for planning Belgrade public transport connections and walking segments.',
    },
  ],
  verificationNote:
    'Last updated: 2026-07-14. App availability, airport arrangements, schedules and ticket rules can change. Check Belgrade Airport, city transport sources and your chosen app before travelling.',
  links: [
    { label: 'Public Transport Belgrade', url: 'https://www.gsp.rs/' },
    { label: 'Belgrade Airport', url: 'https://beg.aero/' },
    { label: 'CarGo', url: 'https://appcargo.com/' },
  ],
  faq: [
    {
      question: 'Which transport apps can help in Belgrade?',
      answer:
        'Moovit, Google Maps and current local transport sources can help with routes. For rides, Yandex Go, CarGo and local taxi services such as Pink Taxi can be checked.',
    },
    {
      question: 'What should I prepare for transport in my first week in Serbia?',
      answer:
        'Prepare mobile internet, your accommodation address, map and ride apps, an offline backup and current public transport information.',
    },
    {
      question: 'How can I get from Belgrade Airport to the city?',
      answer:
        'Compare current taxi, ride-app, transfer and public transport options before arrival. Confirm the pickup point, vehicle and destination before leaving.',
    },
    {
      question: 'How does public transport work in Belgrade?',
      answer:
        'Belgrade uses buses, trams and other city services. Routes, payment and ticket rules can change, so verify them with current local sources.',
    },
    {
      question: 'Which taxi services are commonly checked in Serbia?',
      answer:
        'Yandex Go, CarGo and local taxi services such as Pink Taxi are commonly checked in Belgrade. Availability and booking methods can vary.',
    },
    {
      question: 'Which map apps can help in Serbia?',
      answer:
        'Google Maps, Yandex Maps and Moovit can help with navigation and route planning. Keeping an offline map is useful as a backup.',
    },
  ],
};

const georgiaTransportTr: Guide = {
  ...trGuide(
    'georgia',
    'transport',
    'High',
    "Gürcistan'daki ilk hafta için mobil interneti hazırla, konaklama adresini kaydet ve birden fazla taksi ile harita uygulaması bulundur. Tiflis'te Bolt, Yandex Go ve Maxim seçeneklerini karşılaştır; toplu taşıma için güncel TTC bilgilerini kontrol et.",
    [
      'Taksi, toplu taşıma ve harita uygulamalarını güvenilir Wi-Fi varken kur.',
      'Konaklama adresini Gürcüce ve İngilizce olarak, bina girişinin harita piniyle birlikte kaydet.',
      'İnmeden önce havalimanı biniş noktalarını ve güncel toplu taşıma seçeneklerini kontrol et.',
      'Bulunduğun şehirde bilet veya temassız ödeme sisteminin nasıl çalıştığını doğrula.',
      'Çevrimdışı harita indir ve ilk gün için yedek ödeme yöntemi bulundur.',
    ],
    ['Mobil internetli telefon', 'Konaklama adresi ve harita pini', 'Ödeme kartı ve küçük nakit yedeği', 'Çevrimdışı harita veya kayıtlı rota'],
    [
      'Uygulama uygunluğu, biniş noktaları ve ödeme yöntemleri değişebilir; önemli yolculuklardan önce kontrol et.',
      'Toplu taşıma saatleri ve bilet kuralları şehre ve günün saatine göre farklı olabilir.',
      'Bölgesel veya gece yolculuklarında dönüş rotasını ve son seferi önceden doğrula.',
    ],
    [
      'Rotayı ve ücret yöntemini kontrol etmeden resmi olmayan taksiye binmek.',
      'Müsaitlik değiştiğinde yalnızca tek bir taksi veya harita uygulamasına güvenmek.',
      'Doğru biniş noktasını ve konaklama pinini netleştirmeden havalimanından ayrılmak.',
      'Aynı bilet veya ödeme yönteminin tüm Gürcistan şehirlerinde çalıştığını varsaymak.',
      'Son toplu taşıma seferini kontrol etmeden geç saatte yola çıkmak.',
    ],
  ),
  title: 'Gürcistan Ulaşım Rehberi',
  description:
    'Tiflis ulaşım ve taksi uygulamaları, toplu taşıma, havalimanından merkeze ulaşım, haritalar ve ilk hafta ipuçları için Gürcistan ulaşım rehberi.',
  summary:
    'Gürcistan ulaşımını kolaylaştırmak için mobil interneti, taksi uygulamalarını ve çevrimdışı haritayı gelmeden hazırla. Tiflis ve rotandaki şehirler için güncel seçenekleri karşılaştır.',
  lastUpdated: '2026-07-14',
  transportApps: [
    {
      label: 'Bolt',
      details:
        'Şehir içi ve havalimanı yolculuklarında sık kullanılır. Biniş noktasını, rotayı, ödeme yöntemini ve uygulamadaki güncel ücreti kontrol et.',
    },
    {
      label: 'Yandex Go',
      details:
        'Ek bir uygulamalı ulaşım seçeneği olarak karşılaştırılabilir. Müsaitlik ve ödeme yöntemleri şehre ve hesaba göre değişebilir.',
    },
    {
      label: 'Maxim',
      details:
        'Bazı bölgelerde ek bir taksi uygulaması olarak kontrol edilebilir. Yolculuk başlamadan araç ve rotayı doğrula.',
    },
  ],
  publicTransportTips: [
    'Tbilisi Transport Company (TTC), yerel hatları ve ulaşım güncellemelerini kontrol etmek için kullanılabilir.',
    'Metro, otobüs ve diğer ödeme kuralları değişebileceği için güncel bilet veya temassız ödeme seçeneklerini yerelde doğrula.',
    'Gece, tatil günleri ve merkez dışı bölgelerde sefer sıklığı azalabilir.',
  ],
  airportToCityTips: [
    'İnmeden önce konaklama adresini kaydet ve kullanacağın uygulamanın havalimanı biniş alanını kontrol et.',
    'Uygulama araçlarını, resmi havalimanı seçeneklerini ve güncel toplu taşıma bilgisini karşılaştır.',
    'Mobil internetin hazır değilse rota ve buluşma noktasını doğrulamak için havalimanı Wi-Fi bağlantısını kullan.',
  ],
  navigationApps: [
    {
      label: 'Google Maps',
      details: 'Mekanlar, yürüyüş ve genel rota planı için faydalıdır. Toplu taşıma detaylarını güncel yerel bilgilerle karşılaştır.',
    },
    {
      label: 'Yandex Maps',
      details: 'Yerel arama, trafik ve navigasyon sonuçlarını karşılaştırmaya yardımcı olabilir.',
    },
    {
      label: 'Organic Maps',
      details: 'Mobil kapsamanın sınırlı olduğu yerler için indirilebilir çevrimdışı harita sunar.',
    },
    {
      label: 'Maps.me',
      details: 'Gelmeden hazırlanabilecek başka bir çevrimdışı harita seçeneğidir; Wi-Fi’dan ayrılmadan bölgeyi indir.',
    },
  ],
  verificationNote:
    'Son güncelleme: 2026-07-14. Uygulama uygunluğu, biniş alanları, seferler ve bilet kuralları değişebilir. Yola çıkmadan TTC, havalimanı, seçtiğin uygulama ve güncel yerel kaynakları kontrol et.',
  links: [
    { label: 'Tbilisi Transport / TTC', url: 'https://ttc.com.ge/en' },
    { label: 'Tiflis Havalimanı', url: 'https://tbilisiairport.com/' },
    { label: 'Bolt Gürcistan', url: 'https://bolt.eu/en-ge/' },
  ],
  faq: [
    {
      question: "Tiflis'te taksi için hangi uygulamalar kullanılır?",
      answer:
        "Bolt, Yandex Go ve Maxim gibi uygulamalar Tiflis'te ulaşım için kontrol edilebilir. Uygunluk, biniş noktaları ve ücretler zamana göre değişebilir.",
    },
    {
      question: "Gürcistan'da ilk hafta ulaşım için ne hazırlamalıyım?",
      answer:
        'Mobil internet, konaklama adresi, birkaç taksi ve harita uygulaması, çevrimdışı harita ve yedek ödeme yöntemi hazırlamak faydalı olabilir.',
    },
    {
      question: "Tiflis Havalimanı'ndan merkeze nasıl gidilir?",
      answer:
        'Gelmeden önce uygulamalı taksi, resmi havalimanı ve güncel toplu taşıma seçeneklerini karşılaştır. Biniş noktasını ve tam adresi doğrula.',
    },
    {
      question: "Tiflis'te toplu taşıma nasıl kullanılır?",
      answer:
        'Tiflis’te metro ve otobüs hizmetleri bulunur. Bilet ve ödeme ayrıntıları değişebileceği için TTC ve güncel yerel kaynaklardan doğrulama yap.',
    },
    {
      question: "Gürcistan'da hangi harita uygulamaları kullanılabilir?",
      answer:
        'Google Maps ve Yandex Maps navigasyona yardımcı olabilir. Organic Maps veya Maps.me ise çevrimdışı yedek olarak kullanılabilir.',
    },
    {
      question: "Gürcistan'da ulaşım için mobil internet gerekli mi?",
      answer:
        'Araç çağırma, rota, çeviri ve mesajlaşma için mobil internet yardımcı olabilir. Kapsama veya internet sınırlıysa çevrimdışı harita faydalıdır.',
    },
  ],
};

const serbiaTransportTr: Guide = {
  ...trGuide(
    'serbia',
    'transport',
    'High',
    "Sırbistan'daki ilk hafta için mobil interneti hazırla, adresini kaydet ve hem araç çağırma hem toplu taşıma seçeneklerini kontrol et. Belgrad'da Yandex Go, CarGo ve Pink Taxi gibi yerel seçenekler karşılaştırılabilir.",
    [
      'Araç çağırma, toplu taşıma ve harita uygulamalarını gelmeden kur.',
      'Konaklama adresini, bina girişini ve harita pinini kaydet.',
      'Belgrad Havalimanı için güncel biniş, taksi ve toplu taşıma bilgilerini kontrol et.',
      'Eski gezi yazılarına güvenmek yerine güncel bilet ve ödeme kurallarını doğrula.',
      'Çevrimdışı harita indir; gece veya şehirler arası yolculuklarda dönüş rotasını kontrol et.',
    ],
    ['Mobil internetli telefon', 'Konaklama adresi ve harita pini', 'Ödeme kartı ve nakit yedeği', 'Çevrimdışı harita veya kayıtlı rota'],
    [
      'Araç uygulaması müsaitliği, havalimanı buluşma noktaları ve ödeme yöntemleri değişebilir.',
      'Belgrad toplu taşıma hatları ve bilet kuralları güncel yerel kaynaklardan kontrol edilmelidir.',
      'Şehirler arası yolculukta istasyonu, peronu, seferi ve dönüş seçeneğini doğrula.',
    ],
    [
      'Aracı, rotayı veya ücret yöntemini kontrol etmeden resmi olmayan havalimanı taksisine binmek.',
      'Toplu taşıma ödeme ve bilet sistemi için eski bilgilere güvenmek.',
      'Müsaitlik değiştiğinde yalnızca tek bir taksi veya navigasyon uygulamasına güvenmek.',
      'Havalimanı biniş noktasını karıştırmak veya eksik konaklama adresi girmek.',
      'Dönüş seferini kontrol etmeden gece veya şehirler arası yolculuğa başlamak.',
    ],
  ),
  title: 'Sırbistan Ulaşım Rehberi',
  description:
    'Belgrad ulaşım ve taksi uygulamaları, toplu taşıma, havalimanından merkeze ulaşım, haritalar ve ilk hafta ipuçları için Sırbistan ulaşım rehberi.',
  summary:
    'Sırbistan ulaşımını kolaylaştırmak için mobil interneti, güncel Belgrad ulaşım bilgisini ve yedek navigasyonu gelmeden hazırla.',
  lastUpdated: '2026-07-14',
  transportApps: [
    {
      label: 'Yandex Go',
      details:
        'Uygulamalı yolculuklar için sık kontrol edilir. Biniş noktasını, rotayı, ödeme yöntemini ve güncel ücreti uygulamada doğrula.',
    },
    {
      label: 'CarGo',
      details:
        'Belgrad’da ek bir uygulamalı seçenek olarak kullanılabilir. Müsaitlik ve hesap şartları değişebilir.',
    },
    {
      label: 'Pink Taxi',
      details:
        'Yerel taksi seçeneği olarak elde tutulabilir. Güncel rezervasyon yöntemini ve araç bilgilerini doğrula.',
    },
  ],
  publicTransportTips: [
    'Public Transport Belgrade ve güncel şehir kaynakları hatları ve sefer değişikliklerini doğrulamaya yardımcı olabilir.',
    'Moovit otobüs, tramvay ve yürüyüş bağlantıları için kullanılabilir; önemli yolculukları güncel yerel bilgilerle karşılaştır.',
    'Bilet ve ödeme kuralları değişebileceği için eski ekran görüntülerine veya yazılara güvenme.',
  ],
  airportToCityTips: [
    'İnmeden önce konaklama adresini kaydet ve güncel havalimanı biniş veya buluşma noktasını kontrol et.',
    'Uygulama araçlarını, resmi taksi düzenini, transferleri ve mevcut toplu taşımayı karşılaştır.',
    'Mobil internet hazır değilse araç, rota ve adresi doğrulamak için havalimanı Wi-Fi bağlantısını kullan.',
  ],
  navigationApps: [
    {
      label: 'Google Maps',
      details: 'Mekanlar, yürüyüş ve genel rota planı için faydalıdır. Toplu taşıma detaylarını güncel yerel kaynaklarla karşılaştır.',
    },
    {
      label: 'Yandex Maps',
      details: 'Yerel arama, trafik ve navigasyon sonuçlarını karşılaştırmaya yardımcı olabilir.',
    },
    {
      label: 'Moovit',
      details: 'Belgrad toplu taşıma bağlantılarını ve yürüyüş bölümlerini planlamak için kullanılabilir.',
    },
  ],
  verificationNote:
    'Son güncelleme: 2026-07-14. Uygulama uygunluğu, havalimanı düzeni, seferler ve bilet kuralları değişebilir. Yola çıkmadan Belgrad Havalimanı, şehir ulaşım kaynakları ve seçtiğin uygulamayı kontrol et.',
  links: [
    { label: 'Public Transport Belgrade', url: 'https://www.gsp.rs/' },
    { label: 'Belgrad Havalimanı', url: 'https://beg.aero/' },
    { label: 'CarGo', url: 'https://appcargo.com/' },
  ],
  faq: [
    {
      question: "Belgrad'da ulaşım için hangi uygulamalar kullanılabilir?",
      answer:
        'Moovit, Google Maps ve güncel yerel toplu taşıma kaynakları rota planına yardımcı olabilir. Taksi için Yandex Go, CarGo veya Pink Taxi kontrol edilebilir.',
    },
    {
      question: "Sırbistan'da ilk hafta ulaşım için ne hazırlamalıyım?",
      answer:
        'Mobil internet, konaklama adresi, harita ve araç uygulamaları, çevrimdışı yedek ve güncel toplu taşıma bilgisi hazırlamak faydalı olabilir.',
    },
    {
      question: "Belgrad Havalimanı'ndan merkeze nasıl gidilir?",
      answer:
        'Gelmeden önce güncel taksi, araç uygulaması, transfer ve toplu taşıma seçeneklerini karşılaştır. Aracı, biniş noktasını ve adresi doğrula.',
    },
    {
      question: "Belgrad'da toplu taşıma nasıl kullanılır?",
      answer:
        'Belgrad’da otobüs, tramvay ve diğer şehir hizmetleri bulunur. Hatlar, ödeme ve bilet kuralları değişebileceği için güncel yerel kaynakları kontrol et.',
    },
    {
      question: "Sırbistan'da hangi taksi hizmetleri kontrol edilebilir?",
      answer:
        'Belgrad’da Yandex Go, CarGo ve Pink Taxi gibi yerel seçenekler karşılaştırılabilir. Müsaitlik ve rezervasyon yöntemleri değişebilir.',
    },
    {
      question: "Sırbistan'da hangi harita uygulamaları kullanılabilir?",
      answer:
        'Google Maps, Yandex Maps ve Moovit rota planına yardımcı olabilir. Çevrimdışı harita bulundurmak da faydalıdır.',
    },
  ],
};

const georgiaTransportRu: Guide = {
  ...ruGuide(
    'georgia',
    'transport',
    'High',
    'Для первой недели в Грузии подготовьте мобильный интернет, сохраните адрес жилья и установите несколько приложений такси и карт. В Тбилиси можно сравнить Bolt, Yandex Go и Maxim, а маршруты транспорта проверить через актуальные данные TTC.',
    [
      'Установите приложения такси, транспорта и карт при стабильном Wi-Fi.',
      'Сохраните адрес жилья на грузинском и английском, а также точку входа на карте.',
      'До прилёта проверьте зоны посадки в аэропорту и актуальные варианты транспорта.',
      'Уточните действующие правила билетов и бесконтактной оплаты в нужном городе.',
      'Загрузите офлайн-карту и подготовьте запасной способ оплаты.',
    ],
    ['Телефон с мобильным интернетом', 'Адрес жилья и точка на карте', 'Банковская карта и небольшой запас наличных', 'Офлайн-карта или сохранённый маршрут'],
    [
      'Доступность приложений, зоны посадки и способы оплаты могут меняться.',
      'Расписание и правила билетов зависят от города и времени суток.',
      'Перед поздней или региональной поездкой проверьте обратный маршрут и последний рейс.',
    ],
    [
      'Садиться в неофициальное такси без проверки маршрута и способа расчёта.',
      'Полагаться только на одно приложение такси или навигации.',
      'Уезжать из аэропорта, не уточнив место посадки и точный адрес.',
      'Считать, что один способ оплаты работает во всех городах Грузии.',
      'Начинать позднюю поездку, не проверив последний транспорт.',
    ],
  ),
  title: 'Транспорт в Грузии',
  description:
    'Транспорт в Грузии и Тбилиси: приложения такси, общественный транспорт, дорога из аэропорта, карты и советы на первую неделю.',
  summary:
    'Перед приездом подготовьте мобильный интернет, приложения такси и офлайн-навигацию. Для Тбилиси и других городов по маршруту проверяйте актуальные условия.',
  lastUpdated: '2026-07-14',
  transportApps: [
    {
      label: 'Bolt',
      details:
        'Часто используют для городских поездок и трансфера из аэропорта. Проверьте место посадки, маршрут, оплату и текущую стоимость в приложении.',
    },
    {
      label: 'Yandex Go',
      details:
        'Можно сравнить как дополнительный вариант поездки. Доступность и способы оплаты зависят от города и аккаунта.',
    },
    {
      label: 'Maxim',
      details:
        'Может быть дополнительным приложением такси в некоторых районах. До поездки проверьте автомобиль и маршрут.',
    },
  ],
  publicTransportTips: [
    'Tbilisi Transport Company (TTC) помогает проверять городские маршруты и обновления.',
    'Правила оплаты метро и автобусов могут меняться — уточняйте актуальные билеты и бесконтактную оплату.',
    'Поздно вечером, в праздники и за пределами центра интервалы могут быть больше.',
  ],
  airportToCityTips: [
    'До прилёта сохраните адрес жилья и проверьте зону посадки выбранного приложения.',
    'Сравните поездки через приложения, официальные варианты аэропорта и актуальный общественный транспорт.',
    'Если мобильный интернет ещё не работает, используйте Wi-Fi аэропорта для проверки маршрута и места встречи.',
  ],
  navigationApps: [
    {
      label: 'Google Maps',
      details: 'Подходит для поиска мест, пеших маршрутов и общего планирования. Транспортные детали сверяйте с местными данными.',
    },
    {
      label: 'Yandex Maps',
      details: 'Полезно для сравнения локального поиска, пробок и навигации.',
    },
    {
      label: 'Organic Maps',
      details: 'Позволяет заранее скачать офлайн-карту для мест с нестабильной связью.',
    },
    {
      label: 'Maps.me',
      details: 'Ещё один вариант офлайн-карт; загрузите нужный регион до выхода из Wi-Fi.',
    },
  ],
  verificationNote:
    'Обновлено: 2026-07-14. Доступность приложений, зоны посадки, расписание и правила билетов могут меняться. Проверяйте TTC, аэропорт, выбранное приложение и актуальные местные источники.',
  links: [
    { label: 'Tbilisi Transport / TTC', url: 'https://ttc.com.ge/en' },
    { label: 'Аэропорт Тбилиси', url: 'https://tbilisiairport.com/' },
    { label: 'Bolt Georgia', url: 'https://bolt.eu/en-ge/' },
  ],
  faq: [
    {
      question: 'Какие приложения такси используют в Тбилиси?',
      answer:
        'В Тбилиси часто проверяют Bolt, Yandex Go и Maxim. Доступность машин, зоны посадки и стоимость могут меняться.',
    },
    {
      question: 'Что подготовить для поездок в первую неделю в Грузии?',
      answer:
        'Подготовьте мобильный интернет, адрес жилья, несколько приложений такси и карт, офлайн-карту и запасной способ оплаты.',
    },
    {
      question: 'Как добраться из аэропорта Тбилиси в центр?',
      answer:
        'До прилёта сравните такси через приложения, официальные варианты аэропорта и актуальный общественный транспорт. Уточните место посадки и адрес.',
    },
    {
      question: 'Как пользоваться общественным транспортом в Тбилиси?',
      answer:
        'В Тбилиси работают метро и автобусы. Маршруты, билеты и способы оплаты могут меняться, поэтому проверяйте TTC и местные источники.',
    },
    {
      question: 'Какие карты пригодятся в Грузии?',
      answer:
        'Google Maps и Yandex Maps помогают с навигацией, а Organic Maps или Maps.me можно использовать как офлайн-запас.',
    },
    {
      question: 'Нужен ли мобильный интернет для транспорта в Грузии?',
      answer:
        'Он помогает заказывать поездки, проверять маршруты, переводить адреса и писать сообщения. Офлайн-карта пригодится при слабой связи.',
    },
  ],
};

const serbiaTransportRu: Guide = {
  ...ruGuide(
    'serbia',
    'transport',
    'High',
    'Для первой недели в Сербии подготовьте мобильный интернет, сохраните адрес и проверьте приложения для поездок и общественного транспорта. В Белграде можно сравнить Yandex Go, CarGo и местные службы, например Pink Taxi.',
    [
      'Установите приложения поездок, транспорта и карт до приезда.',
      'Сохраните адрес жилья, данные входа и точку на карте.',
      'Проверьте актуальные зоны посадки, такси и транспорт в аэропорту Белграда.',
      'Уточните действующие билеты и оплату вместо старых советов из интернета.',
      'Загрузите офлайн-карту и проверьте обратный маршрут для поздних или междугородних поездок.',
    ],
    ['Телефон с мобильным интернетом', 'Адрес жилья и точка на карте', 'Банковская карта и запас наличных', 'Офлайн-карта или сохранённый маршрут'],
    [
      'Доступность приложений, места встречи в аэропорту и способы оплаты могут меняться.',
      'Маршруты и правила билетов в Белграде проверяйте по актуальным городским источникам.',
      'Для междугородней поездки уточните вокзал, платформу, расписание и обратный рейс.',
    ],
    [
      'Садиться в неофициальное такси в аэропорту без проверки машины, маршрута и оплаты.',
      'Пользоваться устаревшей информацией о билетах и оплате транспорта.',
      'Полагаться только на одно приложение поездок или навигации.',
      'Перепутать место посадки в аэропорту или указать неполный адрес.',
      'Начинать позднюю или междугороднюю поездку без проверки обратного расписания.',
    ],
  ),
  title: 'Транспорт в Сербии',
  description:
    'Транспорт в Сербии и Белграде: приложения такси, общественный транспорт, дорога из аэропорта, карты и советы на первую неделю.',
  summary:
    'Перед приездом подготовьте мобильный интернет, актуальные данные транспорта Белграда и запасную навигацию.',
  lastUpdated: '2026-07-14',
  transportApps: [
    {
      label: 'Yandex Go',
      details:
        'Часто проверяют для поездок через приложение. Уточните место посадки, маршрут, оплату и текущую стоимость.',
    },
    {
      label: 'CarGo',
      details:
        'Можно использовать как дополнительный вариант в Белграде. Доступность и требования аккаунта могут меняться.',
    },
    {
      label: 'Pink Taxi',
      details:
        'Местная служба такси, которую можно держать как запасной вариант. Проверьте актуальный способ заказа и данные машины.',
    },
  ],
  publicTransportTips: [
    'Public Transport Belgrade и актуальные городские источники помогают проверять маршруты и изменения.',
    'Moovit может помочь с автобусами, трамваями и пешими пересадками, но важный маршрут лучше сверить.',
    'Правила билетов и оплаты могут меняться — не полагайтесь на старые статьи и скриншоты.',
  ],
  airportToCityTips: [
    'До прилёта сохраните адрес жилья и проверьте актуальное место посадки или встречи.',
    'Сравните поездки через приложения, официальное такси, трансфер и доступный общественный транспорт.',
    'Если мобильный интернет не готов, используйте Wi-Fi аэропорта для проверки машины, маршрута и адреса.',
  ],
  navigationApps: [
    {
      label: 'Google Maps',
      details: 'Подходит для мест, пеших маршрутов и общего планирования. Транспортные детали сверяйте с местными источниками.',
    },
    {
      label: 'Yandex Maps',
      details: 'Полезно для сравнения локального поиска, пробок и навигации.',
    },
    {
      label: 'Moovit',
      details: 'Помогает планировать общественный транспорт Белграда и пешие участки маршрута.',
    },
  ],
  verificationNote:
    'Обновлено: 2026-07-14. Доступность приложений, правила аэропорта, расписание и билеты могут меняться. Проверяйте аэропорт Белграда, городские источники и выбранное приложение.',
  links: [
    { label: 'Public Transport Belgrade', url: 'https://www.gsp.rs/' },
    { label: 'Аэропорт Белграда', url: 'https://beg.aero/' },
    { label: 'CarGo', url: 'https://appcargo.com/' },
  ],
  faq: [
    {
      question: 'Какие приложения для транспорта пригодятся в Белграде?',
      answer:
        'Для маршрутов можно проверить Moovit, Google Maps и местные источники. Для поездок — Yandex Go, CarGo и местные службы вроде Pink Taxi.',
    },
    {
      question: 'Что подготовить для поездок в первую неделю в Сербии?',
      answer:
        'Подготовьте мобильный интернет, адрес жилья, приложения карт и поездок, офлайн-запас и актуальные данные общественного транспорта.',
    },
    {
      question: 'Как добраться из аэропорта Белграда в центр?',
      answer:
        'До прилёта сравните актуальные варианты такси, приложений, трансфера и общественного транспорта. Проверьте место посадки, машину и адрес.',
    },
    {
      question: 'Как пользоваться общественным транспортом в Белграде?',
      answer:
        'В городе работают автобусы, трамваи и другие маршруты. Правила оплаты и билетов могут меняться, поэтому сверяйтесь с актуальными источниками.',
    },
    {
      question: 'Какие службы такси обычно проверяют в Сербии?',
      answer:
        'В Белграде часто сравнивают Yandex Go, CarGo и местные службы вроде Pink Taxi. Доступность и способы заказа могут различаться.',
    },
    {
      question: 'Какие карты пригодятся в Сербии?',
      answer:
        'Google Maps, Yandex Maps и Moovit помогают планировать маршруты. Офлайн-карта пригодится как запасной вариант.',
    },
  ],
};

const georgiaHousingEn: Guide = {
  ...enGuide(
    'georgia',
    'rent-apartment',
    'Medium',
    'For your first week, start with flexible short-term accommodation and compare long-term listings only after checking the apartment, neighborhood, transport and written terms.',
    [
      'Book a flexible place for the first few days so you can view longer-term options without rushing.',
      'Compare MyHome.ge, SS.ge and relevant local Facebook groups to understand current availability.',
      'Shortlist homes by commute, nearby transport, heating, internet and building access—not photos alone.',
      'View the property, confirm who you are dealing with and ask for all payment and move-in terms in writing.',
      'Keep copies of the listing, messages and any agreement, and check current details before paying.',
    ],
    ['Passport or ID copy if requested', 'A realistic move-in budget', 'A written list of questions', 'Translation help if the terms are unclear'],
    [
      'Confirm the deposit amount, return conditions and payment method in writing before agreeing.',
      'Ask which utilities, internet or building charges are included and how bills are calculated.',
      'Clarify the rental term, notice expectations, move-in date and any agent fee; arrangements can vary.',
      'Use a message trail or written agreement and review every term you do not understand.',
    ],
    [
      'Paying before viewing the apartment or verifying the owner or agent.',
      'Choosing from photos without checking heating, water, noise and building access.',
      'Ignoring the daily route to work, study or central transport connections.',
      'Leaving deposit, utilities, notice or move-in conditions as verbal promises only.',
      'Relying on one listing source or assuming an old listing is still available.',
    ],
  ),
  title: 'Georgia Housing Guide',
  description: 'A practical Georgia housing guide covering rental websites, Tbilisi apartment searches, viewing checks, deposits, contracts and first-week tips.',
  summary: 'Renting in Georgia is easier when you compare several housing websites, inspect homes in person and confirm the deposit, bills and rental terms in writing. Start flexibly, then choose a location that works for your daily travel.',
  lastUpdated: '2026-07-15',
  travelerOptions: [
    { label: 'Short-term stay', recommendation: 'Useful for the first days while you learn the area and arrange viewings. Check cancellation, check-in and extension terms.' },
    { label: 'Longer rental', recommendation: 'Can suit a settled routine, but inspect the home and neighborhood first and review the written terms carefully.' },
  ],
  housingSources: [
    { label: 'MyHome.ge', details: 'A commonly checked property website in Georgia. Compare listing dates, map locations, details and contact information.' },
    { label: 'SS.ge', details: 'Another commonly checked source for housing listings. Availability and terms can change, so confirm them directly.' },
    { label: 'Facebook groups', details: 'Local and newcomer groups may have direct listings. Check how recent the post is and verify the person and property carefully.' },
    { label: 'Local agents or direct listings', details: 'These can provide more options, but clarify who the agent represents, any fee and the written terms before paying.' },
  ],
  housingChecks: [
    'Confirm the exact address and view the apartment in person or through a live viewing you trust.',
    'Test heating or cooling, hot water, water pressure, windows, locks, appliances and internet options.',
    'Ask about typical utility and building charges, what is included and whether any previous balance remains.',
    'Check the condition of furniture and equipment and record agreed repairs or inventory in writing.',
  ],
  locationTransportTips: [
    'In Tbilisi, compare the walk to a metro station or bus connection with the actual commute you expect to make.',
    'Check daytime and evening access, nearby groceries and street or building noise before deciding.',
    'A lower-cost-looking listing farther away may add travel time; compare the full daily routine, not only the address.',
  ],
  verificationNote: 'Last updated: 2026-07-15. Listings, availability, fees and rental terms can change. Recheck the current advertisement and written conditions before making a decision.',
  links: [
    { label: 'MyHome.ge', url: 'https://www.myhome.ge/en/' },
    { label: 'SS.ge', url: 'https://home.ss.ge/en/real-estate' },
    { label: 'Facebook Groups', url: 'https://www.facebook.com/groups/' },
  ],
  faq: [
    { question: 'Where should I start looking for housing in Georgia?', answer: 'MyHome.ge, SS.ge and relevant local Facebook groups are useful starting points. Compare listing details, location, transport access and terms, then confirm current availability directly.' },
    { question: 'What should I check when looking for an apartment in Tbilisi?', answer: 'Check the neighborhood, daily transport, heating, water, internet, utilities, deposit and written rental terms. Verify who is offering the property and avoid rushing into payment.' },
    { question: 'Is a short-term stay or longer rental more practical in Georgia?', answer: 'A short-term stay can give you flexibility during the first week. If you plan a longer rental, viewing the area and comparing written terms first can help.' },
    { question: 'Can I use local agents or direct listings?', answer: 'Yes, they are commonly checked options, but clarify identity, any agent fee, payment expectations and rental terms. Keep the important details in writing.' },
  ],
};

const serbiaHousingEn: Guide = {
  ...enGuide(
    'serbia',
    'rent-apartment',
    'Medium',
    'Start with flexible accommodation, then compare Serbian housing websites and inspect longer-term options before agreeing to a deposit or rental terms.',
    [
      'Use short-term accommodation for your first days so you can compare neighborhoods without pressure.',
      'Check 4zida, Halo Oglasi, Nekretnine.rs and relevant local Facebook groups for current listings.',
      'Shortlist homes by commute, public transport, building condition, heating and total household costs.',
      'View the property, verify the person or agency and clarify registration-related questions for your situation.',
      'Put the deposit, bills, move-in condition and other important terms in writing before paying.',
    ],
    ['Passport or ID copy if requested', 'A realistic move-in budget', 'A written list of questions', 'Translation help if the terms are unclear'],
    [
      'Confirm the deposit, return conditions and payment method in writing; arrangements differ.',
      'Ask how utilities, internet, heating and building charges are calculated and paid.',
      'Clarify the rental period, notice expectations, move-in date and any agency fee before agreeing.',
      'If address registration matters for your stay, ask what the owner can provide and verify current requirements separately.',
    ],
    [
      'Sending money before viewing the home or checking the owner or agency details.',
      'Focusing on photos while overlooking heating, building condition, bills or noise.',
      'Choosing a Belgrade neighborhood without testing the daily transport route.',
      'Leaving the deposit, utilities, registration discussion or notice terms unwritten.',
      'Relying on one website or assuming an older advertisement is still current.',
    ],
  ),
  title: 'Serbia Housing Guide',
  description: 'A practical Serbia housing guide covering rental websites, Belgrade apartment searches, viewing checks, deposits, contracts and first-week tips.',
  summary: 'Renting in Serbia is easier when you compare several housing websites, inspect the apartment and building, and confirm bills, deposits and rental terms in writing. Check how the location fits your daily route before committing.',
  lastUpdated: '2026-07-15',
  travelerOptions: [
    { label: 'Short-term stay', recommendation: 'Offers flexibility while you compare Belgrade neighborhoods or other locations. Review check-in, cancellation and extension terms.' },
    { label: 'Longer rental', recommendation: 'May suit a stable routine, but check the apartment, building, total costs and written conditions before agreeing.' },
  ],
  housingSources: [
    { label: '4zida', details: 'A commonly checked Serbian property website. Compare dates, map locations, listing details and contact information.' },
    { label: 'Halo Oglasi', details: 'A broad classifieds website with housing listings. Confirm that the advertisement and its terms are still current.' },
    { label: 'Nekretnine.rs', details: 'Another commonly checked housing source. Compare the same area across several listings for context.' },
    { label: 'Facebook groups and local contacts', details: 'Groups, agents and direct listings can add options, but verify identities, fees, property details and written terms carefully.' },
  ],
  housingChecks: [
    'Confirm the address and view the apartment and shared building areas before agreeing.',
    'Check heating, hot water, windows, locks, appliances, internet options and signs of damp or damage.',
    'Ask for a clear explanation of utilities, heating and building charges and whether old balances exist.',
    'Record furniture condition, meter readings and any agreed repair or move-in detail in writing.',
  ],
  locationTransportTips: [
    'In Belgrade, test the route to work, study or the center at the time you expect to travel.',
    'Check nearby bus, tram or other current transport connections and the walking conditions around the building.',
    'Compare groceries, evening access, noise and the full commute rather than choosing by district name alone.',
  ],
  verificationNote: 'Last updated: 2026-07-15. Listings, availability, fees, registration procedures and rental terms can change. Verify current details before deciding.',
  links: [
    { label: '4zida', url: 'https://www.4zida.rs/' },
    { label: 'Halo Oglasi', url: 'https://www.halooglasi.com/nekretnine' },
    { label: 'Nekretnine.rs', url: 'https://www.nekretnine.rs/' },
  ],
  faq: [
    { question: 'Where should I start looking for housing in Serbia?', answer: '4zida, Halo Oglasi, Nekretnine.rs and relevant local Facebook groups are commonly checked starting points. Compare location, transport, deposit and written terms.' },
    { question: 'What should I check when looking for an apartment in Belgrade?', answer: 'Check the neighborhood, transport, building condition, heating, bills, deposit and rental terms. View the property and verify the person or agency before paying.' },
    { question: 'Can I use Facebook groups for rentals in Serbia?', answer: 'Local groups can be useful for finding leads, but check whether the post is current and verify the person, property, fees and terms carefully.' },
    { question: 'Should I ask about address registration before renting?', answer: 'If registration is relevant to your stay, ask what documentation or cooperation the owner can provide. Requirements can vary, so verify current rules with an official source.' },
  ],
};

const georgiaHousingTr: Guide = {
  ...trGuide(
    'georgia',
    'rent-apartment',
    'Medium',
    'İlk hafta için esnek bir konaklama ayarlayıp uzun dönem Gürcistan kiralık ev ilanlarını; evi, semti, ulaşımı ve yazılı şartları kontrol ettikten sonra değerlendirmek daha güvenli bir başlangıç olabilir.',
    [
      'İlk günler için esnek bir konaklama ayarlayarak uzun dönem seçenekleri acele etmeden yerinde görün.',
      'Güncel ilanları anlamak için MyHome.ge, SS.ge ve ilgili yerel Facebook gruplarını karşılaştırın.',
      'Evleri yalnızca fotoğraflara göre değil; ulaşım, ısınma, internet, gürültü ve bina girişine göre eleyin.',
      'Evi görün, görüştüğünüz kişi veya emlakçıyı kontrol edin ve ödeme ile taşınma şartlarını yazılı isteyin.',
      'İlanın, mesajların ve anlaşmanın kopyalarını saklayın; ödeme öncesinde güncel detayları tekrar doğrulayın.',
    ],
    ['İstenirse pasaport veya kimlik kopyası', 'Gerçekçi bir taşınma bütçesi', 'Yazılı soru listesi', 'Şartlar anlaşılmıyorsa çeviri desteği'],
    [
      'Depozito tutarını, iade şartlarını ve ödeme yöntemini anlaşmadan önce yazılı netleştirin.',
      'Fatura, internet ve bina giderlerinden hangilerinin dahil olduğunu ve nasıl hesaplandığını sorun.',
      'Kira süresi, bildirim beklentisi, taşınma tarihi ve varsa emlakçı ücretini netleştirin; uygulamalar değişebilir.',
      'Önemli şartları mesaj veya sözleşmeyle kayda alın ve anlamadığınız maddeleri dikkatlice inceleyin.',
    ],
    [
      'Evi görmeden veya ev sahibi ya da emlakçı bilgisini doğrulamadan ödeme yapmak.',
      'Isınma, su, gürültü ve bina erişimini kontrol etmeden fotoğraflara göre karar vermek.',
      'İş, okul veya merkezi ulaşım noktalarına günlük rotayı hesaba katmamak.',
      'Depozito, faturalar, bildirim ve taşınma şartlarını yalnızca sözlü bırakmak.',
      'Tek bir ilan kaynağına güvenmek veya eski bir ilanın hâlâ uygun olduğunu varsaymak.',
    ],
  ),
  title: 'Gürcistan Ev Kiralama Rehberi',
  description: 'Gürcistan ev kiralama ve Tiflis ev arama rehberi: kiralık ev siteleri, konum, ulaşım, ev kontrolü, depozito, sözleşme ve ilk hafta ipuçları.',
  summary: 'Gürcistan ev kiralama sürecinde birkaç ilan kaynağını karşılaştırmak, evi yerinde görmek ve depozito, faturalar ile kira şartlarını yazılı netleştirmek faydalıdır. Önce esnek konaklayıp günlük ulaşımınıza uygun bölgeyi seçin.',
  lastUpdated: '2026-07-15',
  travelerOptions: [
    { label: 'Kısa süreli konaklama', recommendation: 'İlk günlerde bölgeyi tanımak ve evleri görmek için esneklik sağlar. İptal, giriş ve uzatma şartlarını kontrol edin.' },
    { label: 'Uzun dönem kiralama', recommendation: 'Düzenli yaşam için uygun olabilir; anlaşmadan önce evi, semti, toplam giderleri ve yazılı şartları inceleyin.' },
  ],
  housingSources: [
    { label: 'MyHome.ge', details: 'Gürcistan’da yaygın kontrol edilen emlak sitelerinden biridir. İlan tarihini, harita konumunu, detayları ve iletişim bilgisini karşılaştırın.' },
    { label: 'SS.ge', details: 'Konut ilanları için sık kontrol edilen başka bir kaynaktır. İlanın güncelliğini ve şartlarını doğrudan doğrulayın.' },
    { label: 'Facebook grupları', details: 'Yerel ve yeni gelenlere yönelik gruplarda doğrudan ilanlar olabilir. Gönderinin güncelliğini ve kişiyi dikkatlice kontrol edin.' },
    { label: 'Yerel emlakçılar veya doğrudan ilanlar', details: 'Daha fazla seçenek sağlayabilir; ödeme öncesinde emlakçı rolünü, varsa ücreti ve yazılı şartları netleştirin.' },
  ],
  housingChecks: [
    'Açık adresi teyit edin ve evi yerinde ya da güvendiğiniz canlı bir görüntülü görüşmeyle görün.',
    'Isıtma veya soğutma, sıcak su, su basıncı, pencere, kilit, cihazlar ve internet seçeneklerini kontrol edin.',
    'Fatura ve bina giderlerinin nasıl hesaplandığını, nelerin dahil olduğunu ve eski borç bulunup bulunmadığını sorun.',
    'Eşya durumunu ve kararlaştırılan tamir ya da envanter detaylarını yazılı kayda alın.',
  ],
  locationTransportTips: [
    'Tiflis ev kiralama seçeneklerinde metro veya otobüs durağına yürüyüşü, yapacağınız gerçek günlük rotayla birlikte değerlendirin.',
    'Karar vermeden önce gündüz ve akşam erişimini, yakındaki marketleri, sokak ve bina gürültüsünü kontrol edin.',
    'Uzaktaki bir ilan yolculuk süresini artırabilir; yalnızca adrese değil bütün günlük düzene bakın.',
  ],
  verificationNote: 'Son güncelleme: 2026-07-15. İlanlar, müsaitlik, ücretler ve kiralama şartları değişebilir. Karar vermeden önce güncel ilanı ve yazılı koşulları yeniden kontrol edin.',
  links: [
    { label: 'MyHome.ge', url: 'https://www.myhome.ge/en/' },
    { label: 'SS.ge', url: 'https://home.ss.ge/en/real-estate' },
    { label: 'Facebook Grupları', url: 'https://www.facebook.com/groups/' },
  ],
  faq: [
    { question: 'Gürcistan’da ev kiralamaya nereden başlanır?', answer: 'MyHome.ge, SS.ge ve yerel Facebook grupları başlangıç için kontrol edilebilir. İlan detaylarını, konumu, ulaşımı ve şartları dikkatlice karşılaştırmak faydalıdır.' },
    { question: 'Tiflis’te ev ararken nelere dikkat edilmeli?', answer: 'Konum, ulaşım erişimi, ısınma, depozito, sözleşme şartları, faturalar ve ilanı veren kişinin bilgileri kontrol edilmelidir. Acele karar vermemek daha güvenli olabilir.' },
    { question: 'Gürcistan’da kısa süreli konaklama mı uzun süreli kiralama mı daha mantıklı?', answer: 'İlk hafta için kısa süreli konaklama daha esnek olabilir. Uzun süreli kiralama düşünüyorsanız bölgeyi görüp şartları karşılaştırmak faydalıdır.' },
    { question: 'Yerel emlakçı veya doğrudan ilan kullanılabilir mi?', answer: 'Bu seçenekler değerlendirilebilir; ancak kişi veya kurum bilgilerini, varsa emlakçı ücretini, ödeme beklentisini ve yazılı kira şartlarını dikkatlice kontrol etmek gerekir.' },
  ],
};

const serbiaHousingTr: Guide = {
  ...trGuide(
    'serbia',
    'rent-apartment',
    'Medium',
    'İlk günlerde esnek konaklayın; ardından Sırbistan kiralık ev sitelerini karşılaştırıp uzun dönem evi, binayı, ulaşımı ve yazılı şartları kontrol ederek karar verin.',
    [
      'Semtleri baskı altında kalmadan karşılaştırmak için ilk günlerde kısa süreli konaklama kullanın.',
      'Güncel ilanlar için 4zida, Halo Oglasi, Nekretnine.rs ve ilgili yerel Facebook gruplarını kontrol edin.',
      'Evleri günlük ulaşım, bina durumu, ısınma, internet ve toplam giderlere göre eleyin.',
      'Evi görün, kişi veya emlakçı bilgisini kontrol edin ve durumunuza göre adres kaydıyla ilgili soruları sorun.',
      'Ödeme öncesinde depozito, faturalar, taşınma durumu ve diğer önemli şartları yazılı hale getirin.',
    ],
    ['İstenirse pasaport veya kimlik kopyası', 'Gerçekçi bir taşınma bütçesi', 'Yazılı soru listesi', 'Şartlar anlaşılmıyorsa çeviri desteği'],
    [
      'Depozitoyu, iade şartlarını ve ödeme yöntemini yazılı netleştirin; uygulamalar değişebilir.',
      'Faturaların, internetin, ısınmanın ve bina giderlerinin nasıl hesaplanıp ödendiğini sorun.',
      'Kira süresi, bildirim beklentisi, taşınma tarihi ve varsa emlakçı ücretini anlaşmadan önce netleştirin.',
      'Adres kaydı sizin için gerekliyse ev sahibinin ne sağlayabileceğini sorun ve güncel şartları ayrıca doğrulayın.',
    ],
    [
      'Evi görmeden veya ev sahibi ya da emlakçı bilgisini kontrol etmeden para göndermek.',
      'Isınma, bina durumu, faturalar ve gürültü yerine yalnızca fotoğraflara odaklanmak.',
      'Belgrad’da günlük ulaşım rotasını denemeden semt seçmek.',
      'Depozito, faturalar, kayıt konuşması veya bildirim şartlarını yazısız bırakmak.',
      'Tek bir siteye güvenmek veya eski bir ilanın hâlâ güncel olduğunu varsaymak.',
    ],
  ),
  title: 'Sırbistan Ev Kiralama Rehberi',
  description: 'Sırbistan ev kiralama ve Belgrad ev arama rehberi: konut siteleri, konum, ulaşım, ev kontrolü, depozito, sözleşme ve ilk hafta ipuçları.',
  summary: 'Sırbistan ev kiralama sürecinde birkaç konut sitesini karşılaştırmak, daireyi ve binayı görmek, fatura, depozito ve kira şartlarını yazılı netleştirmek faydalıdır. Karar vermeden önce konumun günlük rotanıza uygunluğunu kontrol edin.',
  lastUpdated: '2026-07-15',
  travelerOptions: [
    { label: 'Kısa süreli konaklama', recommendation: 'Belgrad semtlerini veya diğer bölgeleri karşılaştırırken esneklik sağlar. Giriş, iptal ve uzatma şartlarını inceleyin.' },
    { label: 'Uzun dönem kiralama', recommendation: 'Düzenli yaşam için uygun olabilir; evi, binayı, toplam giderleri ve yazılı koşulları kontrol ederek karar verin.' },
  ],
  housingSources: [
    { label: '4zida', details: 'Sırbistan’da yaygın kontrol edilen emlak sitelerinden biridir. Tarih, harita konumu, ilan detayları ve iletişim bilgisini karşılaştırın.' },
    { label: 'Halo Oglasi', details: 'Konut ilanları da bulunan geniş bir ilan sitesidir. İlanın ve şartların hâlâ güncel olduğunu teyit edin.' },
    { label: 'Nekretnine.rs', details: 'Sık kontrol edilen başka bir konut kaynağıdır. Aynı bölgedeki farklı ilanları karşılaştırmak faydalı olabilir.' },
    { label: 'Facebook grupları ve yerel bağlantılar', details: 'Gruplar, emlakçılar ve doğrudan ilanlar seçenek sağlayabilir; kişi, ücret, ev ve yazılı şartları dikkatlice doğrulayın.' },
  ],
  housingChecks: [
    'Açık adresi doğrulayın; daireyi ve binanın ortak alanlarını anlaşmadan önce görün.',
    'Isıtma, sıcak su, pencere, kilit, cihazlar, internet seçenekleri ile nem veya hasar izlerini kontrol edin.',
    'Fatura, ısınma ve bina giderlerinin açık dökümünü ve eski borç bulunup bulunmadığını sorun.',
    'Eşya durumunu, sayaçları ve kararlaştırılan tamir ya da taşınma detaylarını yazılı kayda alın.',
  ],
  locationTransportTips: [
    'Belgrad ev kiralama seçeneklerinde işe, okula veya merkeze rotayı yolculuk yapacağınız saatlerde kontrol edin.',
    'Yakındaki otobüs, tramvay veya diğer güncel ulaşım bağlantılarını ve bina çevresindeki yürüyüş koşullarını inceleyin.',
    'Yalnızca semt adına göre karar vermek yerine market, akşam erişimi, gürültü ve toplam yolculuğu karşılaştırın.',
  ],
  verificationNote: 'Son güncelleme: 2026-07-15. İlanlar, müsaitlik, ücretler, kayıt uygulamaları ve kira şartları değişebilir. Karar vermeden önce güncel detayları doğrulayın.',
  links: [
    { label: '4zida', url: 'https://www.4zida.rs/' },
    { label: 'Halo Oglasi', url: 'https://www.halooglasi.com/nekretnine' },
    { label: 'Nekretnine.rs', url: 'https://www.nekretnine.rs/' },
  ],
  faq: [
    { question: 'Sırbistan’da ev kiralamaya nereden başlanır?', answer: '4zida, Halo Oglasi, Nekretnine.rs ve yerel Facebook grupları başlangıç için incelenebilir. Konum, ulaşım, depozito ve sözleşme şartlarını kontrol etmek önemlidir.' },
    { question: 'Belgrad’da ev ararken nelere dikkat edilmeli?', answer: 'Mahalle, ulaşım, bina durumu, ısınma, fatura detayları, depozito ve kira şartları dikkatlice kontrol edilmelidir. İlan detaylarını karşılaştırmak faydalı olabilir.' },
    { question: 'Sırbistan’da kiralık ev için Facebook grupları kullanılabilir mi?', answer: 'Yerel gruplar başlangıç için faydalı olabilir; ancak ilanların güncelliğini, şartları ve kişi veya kurum bilgilerini dikkatlice kontrol etmek gerekir.' },
    { question: 'Ev kiralamadan önce adres kaydı sorulmalı mı?', answer: 'Kalış durumunuz için adres kaydı önemliyse ev sahibinin sağlayabileceği belge veya desteği sorun. Şartlar değişebileceğinden güncel resmi bilgileri ayrıca kontrol edin.' },
  ],
};

const georgiaHousingRu: Guide = {
  ...ruGuide(
    'georgia',
    'rent-apartment',
    'Medium',
    'На первую неделю удобно выбрать гибкое краткосрочное жильё, а долгосрочную аренду рассматривать после проверки квартиры, района, транспорта и письменных условий.',
    [
      'Забронируйте гибкое жильё на первые дни, чтобы смотреть долгосрочные варианты без спешки.',
      'Сравните актуальные объявления на MyHome.ge, SS.ge и в подходящих местных группах Facebook.',
      'Отбирайте квартиры не только по фото, но и по дороге, отоплению, интернету, шуму и доступу в дом.',
      'Осмотрите жильё, проверьте владельца или агента и запросите условия оплаты и въезда в письменном виде.',
      'Сохраните объявление, переписку и соглашение, а перед оплатой повторно проверьте актуальные детали.',
    ],
    ['Копия паспорта или ID, если попросят', 'Реалистичный бюджет на въезд', 'Письменный список вопросов', 'Помощь с переводом непонятных условий'],
    [
      'До согласия письменно уточните сумму депозита, условия возврата и способ оплаты.',
      'Спросите, какие коммунальные, интернет и расходы дома включены и как рассчитываются счета.',
      'Уточните срок аренды, порядок уведомления, дату въезда и комиссию агента, если она есть.',
      'Сохраняйте важные условия в переписке или договоре и внимательно разбирайте непонятные пункты.',
    ],
    [
      'Платить до просмотра квартиры или проверки владельца либо агента.',
      'Выбирать по фото, не проверив отопление, воду, шум и доступ в дом.',
      'Не учитывать ежедневный маршрут до работы, учёбы или транспорта.',
      'Оставлять депозит, счета, уведомление и условия въезда только на словах.',
      'Полагаться на один сайт или считать старое объявление актуальным.',
    ],
  ),
  title: 'Аренда жилья в Грузии',
  description: 'Практичный гид по аренде жилья в Грузии: сайты аренды, поиск квартиры в Тбилиси, проверка района, депозит, договор и советы на первую неделю.',
  summary: 'Аренда жилья в Грузии проще, если сравнивать несколько сайтов, лично осматривать квартиру и письменно уточнять депозит, счета и условия. Сначала выберите гибкое жильё, затем оцените район с учётом ежедневных поездок.',
  lastUpdated: '2026-07-15',
  travelerOptions: [
    { label: 'Краткосрочное жильё', recommendation: 'Даёт гибкость в первые дни, пока вы изучаете районы и ходите на просмотры. Проверьте условия отмены, въезда и продления.' },
    { label: 'Долгосрочная аренда', recommendation: 'Подходит для стабильного быта, но сначала осмотрите жильё и район и внимательно прочитайте письменные условия.' },
  ],
  housingSources: [
    { label: 'MyHome.ge', details: 'Один из часто проверяемых сайтов жилья в Грузии. Сравнивайте дату, расположение на карте, детали и контакты.' },
    { label: 'SS.ge', details: 'Ещё один распространённый источник объявлений. Наличие и условия могут меняться — уточняйте их напрямую.' },
    { label: 'Группы Facebook', details: 'В местных группах бывают прямые объявления. Проверяйте дату публикации, человека и объект особенно внимательно.' },
    { label: 'Местные агенты и прямые объявления', details: 'Могут расширить выбор, но до оплаты уточните роль агента, комиссию и все письменные условия.' },
  ],
  housingChecks: [
    'Подтвердите точный адрес и осмотрите квартиру лично либо по видеосвязи с человеком, которому доверяете.',
    'Проверьте отопление или охлаждение, горячую воду, напор, окна, замки, технику и варианты интернета.',
    'Узнайте, как рассчитываются коммунальные и расходы дома, что включено и нет ли старой задолженности.',
    'Зафиксируйте состояние мебели, согласованный ремонт и список имущества письменно.',
  ],
  locationTransportTips: [
    'При аренде квартиры в Тбилиси сравните путь до метро или автобуса с реальным ежедневным маршрутом.',
    'Проверьте доступ днём и вечером, ближайшие магазины, шум улицы и дома.',
    'Удалённое объявление может увеличить время в пути — оценивайте весь распорядок, а не только адрес.',
  ],
  verificationNote: 'Последнее обновление: 2026-07-15. Объявления, наличие, комиссии и условия аренды могут меняться. Перед решением заново проверьте объявление и письменные условия.',
  links: [
    { label: 'MyHome.ge', url: 'https://www.myhome.ge/en/' },
    { label: 'SS.ge', url: 'https://home.ss.ge/en/real-estate' },
    { label: 'Группы Facebook', url: 'https://www.facebook.com/groups/' },
  ],
  faq: [
    { question: 'Где начать поиск жилья в Грузии?', answer: 'Для начала можно проверить MyHome.ge, SS.ge и подходящие местные группы Facebook. Сравнивайте описание, расположение, транспорт и условия и уточняйте актуальное наличие.' },
    { question: 'Что проверить при аренде квартиры в Тбилиси?', answer: 'Проверьте район, транспорт, отопление, воду, интернет, коммунальные, депозит и письменные условия. До оплаты также важно проверить владельца или агента.' },
    { question: 'Что выбрать в Грузии: краткосрочное жильё или долгосрочную аренду?', answer: 'Краткосрочное жильё может дать больше гибкости на первую неделю. Для долгосрочной аренды полезно сначала увидеть район и сравнить письменные условия.' },
    { question: 'Можно ли искать через местных агентов или прямые объявления?', answer: 'Да, но внимательно проверяйте человека или компанию, возможную комиссию, порядок оплаты и письменные условия аренды.' },
  ],
};

const serbiaHousingRu: Guide = {
  ...ruGuide(
    'serbia',
    'rent-apartment',
    'Medium',
    'Начните с гибкого краткосрочного жилья, затем сравните сербские сайты и осмотрите долгосрочные варианты до согласия на депозит и условия аренды.',
    [
      'На первые дни выберите краткосрочное жильё, чтобы сравнить районы без спешки.',
      'Проверяйте актуальные объявления на 4zida, Halo Oglasi, Nekretnine.rs и в местных группах Facebook.',
      'Отбирайте варианты по дороге, транспорту, состоянию дома, отоплению и общим расходам.',
      'Осмотрите объект, проверьте человека или агентство и задайте важные для вас вопросы о регистрации адреса.',
      'До оплаты запишите депозит, счета, состояние при въезде и другие важные условия.',
    ],
    ['Копия паспорта или ID, если попросят', 'Реалистичный бюджет на въезд', 'Письменный список вопросов', 'Помощь с переводом непонятных условий'],
    [
      'Письменно уточните депозит, условия возврата и способ оплаты — договорённости отличаются.',
      'Спросите, как рассчитываются и оплачиваются коммунальные, интернет, отопление и расходы дома.',
      'До согласия уточните срок аренды, порядок уведомления, дату въезда и комиссию агентства, если она есть.',
      'Если для вашего пребывания важна регистрация адреса, спросите, что может предоставить владелец, и отдельно проверьте актуальные требования.',
    ],
    [
      'Переводить деньги до просмотра жилья или проверки владельца либо агентства.',
      'Смотреть только на фото, пропуская отопление, состояние дома, счета и шум.',
      'Выбирать район Белграда, не проверив ежедневный транспортный маршрут.',
      'Не записывать депозит, счета, обсуждение регистрации или порядок уведомления.',
      'Полагаться на один сайт или считать старое объявление актуальным.',
    ],
  ),
  title: 'Аренда жилья в Сербии',
  description: 'Практичный гид по аренде жилья в Сербии: сайты аренды, поиск квартиры в Белграде, проверка дома, депозит, договор и советы на первую неделю.',
  summary: 'Аренда жилья в Сербии проще, если сравнивать несколько сайтов, осматривать квартиру и дом и письменно уточнять счета, депозит и условия. До решения проверьте, подходит ли расположение для ежедневных поездок.',
  lastUpdated: '2026-07-15',
  travelerOptions: [
    { label: 'Краткосрочное жильё', recommendation: 'Даёт гибкость, пока вы сравниваете районы Белграда или другие места. Проверьте въезд, отмену и продление.' },
    { label: 'Долгосрочная аренда', recommendation: 'Может подойти для стабильного быта, но сначала проверьте квартиру, дом, общие расходы и письменные условия.' },
  ],
  housingSources: [
    { label: '4zida', details: 'Один из часто проверяемых сайтов недвижимости в Сербии. Сравнивайте дату, карту, описание и контакты.' },
    { label: 'Halo Oglasi', details: 'Крупный сайт объявлений с разделом жилья. Подтвердите, что объявление и его условия ещё актуальны.' },
    { label: 'Nekretnine.rs', details: 'Ещё один распространённый источник жилья. Сравнивайте несколько объявлений в одном районе.' },
    { label: 'Группы Facebook и местные контакты', details: 'Группы, агенты и прямые объявления расширяют выбор, но тщательно проверяйте человека, комиссию, жильё и письменные условия.' },
  ],
  housingChecks: [
    'Подтвердите адрес и осмотрите квартиру и общие части дома до согласия.',
    'Проверьте отопление, горячую воду, окна, замки, технику, интернет, следы сырости или повреждений.',
    'Попросите объяснить коммунальные, отопление и расходы дома и уточните, нет ли старой задолженности.',
    'Письменно зафиксируйте состояние мебели, показания счётчиков и согласованный ремонт.',
  ],
  locationTransportTips: [
    'При аренде квартиры в Белграде проверьте дорогу до работы, учёбы или центра в нужное время суток.',
    'Посмотрите ближайшие автобусные, трамвайные и другие актуальные маршруты и удобство подхода к дому.',
    'Сравните магазины, вечерний доступ, шум и всю дорогу, а не только название района.',
  ],
  verificationNote: 'Последнее обновление: 2026-07-15. Объявления, наличие, комиссии, регистрационные процедуры и условия аренды могут меняться. Проверяйте актуальные детали.',
  links: [
    { label: '4zida', url: 'https://www.4zida.rs/' },
    { label: 'Halo Oglasi', url: 'https://www.halooglasi.com/nekretnine' },
    { label: 'Nekretnine.rs', url: 'https://www.nekretnine.rs/' },
  ],
  faq: [
    { question: 'Где начать поиск жилья в Сербии?', answer: 'Для начала часто проверяют 4zida, Halo Oglasi, Nekretnine.rs и подходящие местные группы Facebook. Сравнивайте расположение, транспорт, депозит и письменные условия.' },
    { question: 'Что проверить при аренде квартиры в Белграде?', answer: 'Проверьте район, транспорт, состояние дома, отопление, счета, депозит и условия аренды. Осмотрите жильё и проверьте человека или агентство до оплаты.' },
    { question: 'Можно ли искать аренду в Сербии через группы Facebook?', answer: 'Местные группы могут быть полезны, но важно проверить актуальность публикации, человека или компанию, объект, комиссии и условия.' },
    { question: 'Нужно ли спрашивать о регистрации адреса до аренды?', answer: 'Если регистрация важна для вашего пребывания, спросите, какие документы или помощь может предоставить владелец. Актуальные требования проверяйте по официальным источникам.' },
  ],
};

export const guides: Guide[] = [
  georgiaSimEn,
  georgiaEsimEn,
  enGuide('georgia', 'bank-account', 'Medium', 'Bank accounts are possible for many visitors, but requirements vary. Expect passport checks and possible proof of address, income or purpose.', ['Shortlist major banks before arrival.', 'Book time for an in-branch visit.', 'Bring printed or digital supporting documents.', 'Ask about monthly fees, card issuance and foreign transfers.', 'Activate online banking before leaving the branch.'], ['Passport', 'Phone number', 'Local address', 'Proof of income or purpose if requested'], ['Monthly account and card fees may apply.', 'International transfer fees vary widely.', 'Premium packages are not always necessary.'], ['Arriving without a local phone number.', 'Not asking about account maintenance fees.', 'Assuming rules are identical across branches.']),
  georgiaHousingEn,
  georgiaTransportEn,
  serbiaSimEn,
  serbiaEsimEn,
  enGuide('serbia', 'bank-account', 'Medium', 'Banking can require more paperwork in Serbia. Prepare passport, local registration details and a clear reason for opening the account.', ['Compare banks that serve non-residents.', 'Ask what documents are required before visiting.', 'Bring proof of address or stay registration if available.', 'Review account, card and transfer fees.', 'Test mobile banking and card activation.'], ['Passport', 'Local phone number', 'Address or white card if available', 'Employment, income or purpose documents if requested'], ['Maintenance fees and transfer fees vary.', 'Card issuance may take several days.', 'Some banks charge more for non-resident services.'], ['Going without an appointment when the branch is busy.', 'Not asking about non-resident restrictions.', 'Leaving before mobile banking is fully active.']),
  serbiaHousingEn,
  serbiaTransportEn,
  georgiaSimTr,
  georgiaEsimTr,
  trGuide('georgia', 'bank-account', 'Medium', 'Birçok ziyaretçi için banka hesabı mümkün olabilir; pasaport kontrolü ve adres, gelir veya amaç belgesi istenebilir.', ['Gelmeden önce büyük bankaları listeleyin.', 'Şube ziyareti için zaman ayırın.', 'Destekleyici belgeleri dijital veya basılı hazırlayın.', 'Aylık ücret, kart çıkarma ve yurtdışı transfer ücretlerini sorun.', 'Şubeden ayrılmadan internet bankacılığını aktive edin.'], ['Pasaport', 'Telefon numarası', 'Yerel adres', 'İstenirse gelir veya amaç belgesi'], ['Aylık hesap ve kart ücretleri olabilir.', 'Uluslararası transfer ücretleri ciddi değişir.', 'Premium paket her zaman gerekli değildir.'], ['Yerel telefon numarası olmadan gitmek.', 'Hesap işletim ücretini sormamak.', 'Tüm şubelerde kurallar aynı sanmak.']),
  georgiaHousingTr,
  georgiaTransportTr,
  serbiaSimTr,
  serbiaEsimTr,
  trGuide('serbia', 'bank-account', 'Medium', 'Sırbistan’da bankacılık daha fazla evrak gerektirebilir. Pasaport, yerel kayıt bilgisi ve hesap açma amacınızı hazırlayın.', ['Yabancılarla çalışan bankaları karşılaştırın.', 'Şubeye gitmeden önce belge listesini sorun.', 'Varsa adres veya konaklama kayıt belgesini getirin.', 'Hesap, kart ve transfer ücretlerini inceleyin.', 'Mobil bankacılık ve kart aktivasyonunu test edin.'], ['Pasaport', 'Yerel telefon numarası', 'Varsa adres veya white card', 'İstenirse iş, gelir veya amaç belgeleri'], ['Hesap işletim ve transfer ücretleri değişir.', 'Kart basımı birkaç gün sürebilir.', 'Bazı bankalar yabancılar için daha yüksek ücret alabilir.'], ['Yoğun şubeye randevusuz gitmek.', 'Yabancı müşteri kısıtlarını sormamak.', 'Mobil bankacılık aktif olmadan ayrılmak.']),
  serbiaHousingTr,
  serbiaTransportTr,
  georgiaSimRu,
  ruGuide('georgia', 'esim', 'High', 'eSIM удобна, если телефон её поддерживает и нужен интернет сразу после посадки. Для местного номера или долгого пребывания сравните её с физической SIM-картой.', ['Проверьте поддержку eSIM в телефоне.', 'Купите и установите eSIM до вылета по Wi-Fi.', 'Сохраните QR-код или инструкцию активации.', 'После посадки включите eSIM и передачу данных.', 'Проверьте карты и мессенджеры до выхода из аэропорта.'], ['Телефон с поддержкой eSIM', 'Wi-Fi для установки', 'Банковская карта', 'Инструкция от провайдера'], ['Пакеты eSIM часто стоят дороже местной SIM.', 'Некоторые eSIM дают только интернет без местного номера.', 'Срок действия может начинаться при установке или первом подключении.'], ['Покупать eSIM без проверки совместимости телефона.', 'Удалять eSIM до конца поездки.', 'Не проверять, когда начинается срок действия.']),
  ruGuide('georgia', 'bank-account', 'Medium', 'Открыть счёт возможно для многих приезжих, но требования отличаются по банку и отделению. Готовьте паспорт, местный номер и объяснение цели счёта.', ['Сравните крупные банки до визита.', 'Выделите время на посещение отделения.', 'Подготовьте паспорт, номер телефона и адрес.', 'Спросите про комиссии, карту и переводы.', 'Активируйте онлайн-банк до ухода из отделения.'], ['Паспорт', 'Местный номер телефона', 'Местный адрес', 'Документы о доходе или цели, если попросят'], ['Могут быть ежемесячные комиссии.', 'Стоимость карты и переводов отличается.', 'Премиальные пакеты не всегда нужны.'], ['Идти без местного номера.', 'Не спрашивать про комиссии.', 'Думать, что правила одинаковые во всех отделениях.']),
  georgiaHousingRu,
  georgiaTransportRu,
  serbiaSimRu,
  ruGuide('serbia', 'esim', 'High', 'eSIM подходит, если нужен интернет сразу после приезда и телефон поддерживает eSIM. Для местного номера лучше сравнить с физической SIM-картой.', ['Проверьте поддержку eSIM.', 'Купите eSIM до поездки и установите по Wi-Fi.', 'Сохраните инструкцию активации.', 'После посадки включите линию eSIM.', 'Проверьте карты и мессенджеры.'], ['Телефон с поддержкой eSIM', 'Wi-Fi для установки', 'Банковская карта', 'Инструкция провайдера'], ['eSIM часто дороже местной SIM.', 'Многие eSIM дают только интернет.', 'Срок действия зависит от условий пакета.'], ['Не проверять совместимость телефона.', 'Удалять eSIM во время поездки.', 'Не уточнять срок действия.']),
  ruGuide('serbia', 'bank-account', 'Medium', 'Банк в Сербии может попросить больше документов. Подготовьте паспорт, местную регистрацию или адрес и понятную цель открытия счёта.', ['Сравните банки для нерезидентов.', 'Уточните список документов до визита.', 'Возьмите паспорт, номер телефона и адрес.', 'Спросите про обслуживание, карту и переводы.', 'Проверьте мобильный банк перед уходом.'], ['Паспорт', 'Местный номер телефона', 'Адрес или регистрация, если есть', 'Документы о доходе или цели, если попросят'], ['Комиссии отличаются по банкам.', 'Выпуск карты может занять несколько дней.', 'Для нерезидентов условия могут быть дороже.'], ['Идти без уточнения документов.', 'Не спрашивать про ограничения для нерезидентов.', 'Уходить до активации мобильного банка.']),
  serbiaHousingRu,
  serbiaTransportRu,
];

export const findGuide = (language: Language, country: CountryKey, topic: TopicKey) =>
  guides.find((guide) => guide.language === language && guide.country === country && guide.topic === topic);
