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
  steps: string[];
  documents: string[];
  costs: string[];
  mobileInternetTips?: string[];
  simComparison?: { physicalSim: string; esim: string };
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

export const guides: Guide[] = [
  georgiaSimEn,
  georgiaEsimEn,
  enGuide('georgia', 'bank-account', 'Medium', 'Bank accounts are possible for many visitors, but requirements vary. Expect passport checks and possible proof of address, income or purpose.', ['Shortlist major banks before arrival.', 'Book time for an in-branch visit.', 'Bring printed or digital supporting documents.', 'Ask about monthly fees, card issuance and foreign transfers.', 'Activate online banking before leaving the branch.'], ['Passport', 'Phone number', 'Local address', 'Proof of income or purpose if requested'], ['Monthly account and card fees may apply.', 'International transfer fees vary widely.', 'Premium packages are not always necessary.'], ['Arriving without a local phone number.', 'Not asking about account maintenance fees.', 'Assuming rules are identical across branches.']),
  enGuide('georgia', 'rent-apartment', 'Medium', 'For first arrival, book temporary housing first, then inspect long-term apartments in person before paying a deposit.', ['Use temporary accommodation for the first week.', 'Compare neighborhoods by commute and noise.', 'Inspect heating, water pressure, internet and building access.', 'Confirm deposit, utilities and contract term in writing.', 'Avoid paying large sums before meeting the owner or agent.'], ['Passport copy may be requested', 'Deposit funds', 'Written lease or message trail'], ['Deposits are often one month, sometimes more.', 'Utilities may be separate from rent.', 'Agent fees depend on the arrangement.'], ['Signing without checking utilities.', 'Paying before seeing the apartment.', 'Ignoring winter heating quality.']),
  enGuide('georgia', 'transport', 'High', 'Use ride-hailing for simple arrivals and a transport card or contactless payment for regular city travel where supported.', ['Install ride-hailing apps before arrival.', 'Check airport pickup zones.', 'For public transport, buy or configure the local payment method.', 'Keep small cash for backup outside central areas.'], ['Payment card', 'Phone with data', 'Transport card if needed'], ['Airport rides cost more than city trips.', 'Public transport remains the cheapest daily option.', 'Intercity marshrutka and train prices vary by route.'], ['Accepting unofficial taxi offers without agreeing price.', 'Assuming card payment works everywhere.', 'Not checking last departure times.']),
  serbiaSimEn,
  serbiaEsimEn,
  enGuide('serbia', 'bank-account', 'Medium', 'Banking can require more paperwork in Serbia. Prepare passport, local registration details and a clear reason for opening the account.', ['Compare banks that serve non-residents.', 'Ask what documents are required before visiting.', 'Bring proof of address or stay registration if available.', 'Review account, card and transfer fees.', 'Test mobile banking and card activation.'], ['Passport', 'Local phone number', 'Address or white card if available', 'Employment, income or purpose documents if requested'], ['Maintenance fees and transfer fees vary.', 'Card issuance may take several days.', 'Some banks charge more for non-resident services.'], ['Going without an appointment when the branch is busy.', 'Not asking about non-resident restrictions.', 'Leaving before mobile banking is fully active.']),
  enGuide('serbia', 'rent-apartment', 'Medium', 'Start with short-term accommodation, then inspect apartments and clarify registration, utilities and deposit terms before committing.', ['Pick temporary accommodation near your target area.', 'View apartments in daylight if possible.', 'Ask whether the landlord can support address registration.', 'Confirm utilities, internet and building costs.', 'Put deposit and move-in terms in writing.'], ['Passport', 'Deposit funds', 'Lease or written agreement', 'Stay registration details for longer stays'], ['Deposits commonly equal one month of rent.', 'Utilities and building fees may be separate.', 'Prices vary strongly by Belgrade neighborhood.'], ['Not discussing address registration.', 'Underestimating winter utility costs.', 'Sending deposit before verifying ownership or agency details.']),
  enGuide('serbia', 'transport', 'High', 'Belgrade is easy to navigate with buses, trams, walking and ride-hailing. Check current ticketing rules locally because systems can change.', ['Install map and ride-hailing apps.', 'Check public transport payment rules for your city.', 'Use official airport transfer or app-based rides on arrival.', 'For intercity travel, compare bus and train schedules.'], ['Phone with data', 'Payment card or local payment option', 'ID for intercity tickets when requested'], ['City transport is usually low cost.', 'Airport transfers and app rides cost more.', 'Intercity buses can be faster than trains on some routes.'], ['Using outdated ticketing advice.', 'Boarding intercity transport without checking platform changes.', 'Taking unofficial airport taxi offers.']),
  georgiaSimTr,
  georgiaEsimTr,
  trGuide('georgia', 'bank-account', 'Medium', 'Birçok ziyaretçi için banka hesabı mümkün olabilir; pasaport kontrolü ve adres, gelir veya amaç belgesi istenebilir.', ['Gelmeden önce büyük bankaları listeleyin.', 'Şube ziyareti için zaman ayırın.', 'Destekleyici belgeleri dijital veya basılı hazırlayın.', 'Aylık ücret, kart çıkarma ve yurtdışı transfer ücretlerini sorun.', 'Şubeden ayrılmadan internet bankacılığını aktive edin.'], ['Pasaport', 'Telefon numarası', 'Yerel adres', 'İstenirse gelir veya amaç belgesi'], ['Aylık hesap ve kart ücretleri olabilir.', 'Uluslararası transfer ücretleri ciddi değişir.', 'Premium paket her zaman gerekli değildir.'], ['Yerel telefon numarası olmadan gitmek.', 'Hesap işletim ücretini sormamak.', 'Tüm şubelerde kurallar aynı sanmak.']),
  trGuide('georgia', 'rent-apartment', 'Medium', 'İlk varışta geçici konaklama ayarlayın, uzun dönem evi depozito ödemeden önce yerinde görün.', ['İlk hafta için geçici konaklama kullanın.', 'Semtleri ulaşım ve gürültüye göre karşılaştırın.', 'Isıtma, su basıncı, internet ve bina girişini kontrol edin.', 'Depozito, faturalar ve kontrat süresini yazılı netleştirin.', 'Ev sahibi veya emlakçıyla görüşmeden yüksek ödeme yapmayın.'], ['Pasaport kopyası istenebilir', 'Depozito bütçesi', 'Yazılı kira sözleşmesi veya mesaj kaydı'], ['Depozito genelde bir ay, bazen daha fazladır.', 'Faturalar kiradan ayrı olabilir.', 'Emlakçı ücreti anlaşmaya bağlıdır.'], ['Faturaları kontrol etmeden imzalamak.', 'Evi görmeden ödeme yapmak.', 'Kış ısınma kalitesini önemsememek.']),
  trGuide('georgia', 'transport', 'High', 'Varışta uygulama taksileri pratik; şehir içinde desteklenen yerlerde ulaşım kartı veya temassız ödeme kullanın.', ['Ulaşım uygulamalarını gelmeden kurun.', 'Havalimanı araç çağırma noktalarını kontrol edin.', 'Toplu taşıma için yerel ödeme yöntemini alın veya ayarlayın.', 'Merkez dışı bölgeler için az miktar nakit tutun.'], ['Ödeme kartı', 'İnternetli telefon', 'Gerekiyorsa ulaşım kartı'], ['Havalimanı yolculukları şehir içinden pahalıdır.', 'Günlük kullanımda toplu taşıma en ucuz seçenektir.', 'Şehirler arası minibüs ve tren fiyatları rotaya göre değişir.'], ['Fiyat konuşmadan resmi olmayan taksiye binmek.', 'Her yerde kart geçtiğini varsaymak.', 'Son sefer saatlerini kontrol etmemek.']),
  serbiaSimTr,
  serbiaEsimTr,
  trGuide('serbia', 'bank-account', 'Medium', 'Sırbistan’da bankacılık daha fazla evrak gerektirebilir. Pasaport, yerel kayıt bilgisi ve hesap açma amacınızı hazırlayın.', ['Yabancılarla çalışan bankaları karşılaştırın.', 'Şubeye gitmeden önce belge listesini sorun.', 'Varsa adres veya konaklama kayıt belgesini getirin.', 'Hesap, kart ve transfer ücretlerini inceleyin.', 'Mobil bankacılık ve kart aktivasyonunu test edin.'], ['Pasaport', 'Yerel telefon numarası', 'Varsa adres veya white card', 'İstenirse iş, gelir veya amaç belgeleri'], ['Hesap işletim ve transfer ücretleri değişir.', 'Kart basımı birkaç gün sürebilir.', 'Bazı bankalar yabancılar için daha yüksek ücret alabilir.'], ['Yoğun şubeye randevusuz gitmek.', 'Yabancı müşteri kısıtlarını sormamak.', 'Mobil bankacılık aktif olmadan ayrılmak.']),
  trGuide('serbia', 'rent-apartment', 'Medium', 'Kısa dönem konaklamayla başlayın; daireleri yerinde görün ve kayıt, faturalar, depozito şartlarını netleştirin.', ['Hedef bölgenize yakın geçici konaklama seçin.', 'Mümkünse daireyi gündüz görün.', 'Ev sahibinin adres kaydına destek verip vermediğini sorun.', 'Faturalar, internet ve bina giderlerini netleştirin.', 'Depozito ve taşınma şartlarını yazılı tutun.'], ['Pasaport', 'Depozito bütçesi', 'Kira sözleşmesi veya yazılı anlaşma', 'Uzun kalış için kayıt bilgileri'], ['Depozito çoğu zaman bir aylık kiradır.', 'Faturalar ve bina giderleri ayrı olabilir.', 'Belgrad semtlerine göre fiyatlar çok değişir.'], ['Adres kaydını konuşmamak.', 'Kış fatura maliyetini düşük tahmin etmek.', 'Mülk veya emlakçı bilgilerini doğrulamadan depozito göndermek.']),
  trGuide('serbia', 'transport', 'High', 'Belgrad’da otobüs, tramvay, yürüyüş ve araç çağırma uygulamalarıyla ulaşım kolaydır. Bilet sistemi değişebileceği için güncel kuralları yerelde kontrol edin.', ['Harita ve araç çağırma uygulamalarını kurun.', 'Bulunduğunuz şehir için toplu taşıma ödeme kurallarını kontrol edin.', 'Varışta resmi havalimanı transferi veya uygulama aracı kullanın.', 'Şehirler arası için otobüs ve tren saatlerini karşılaştırın.'], ['İnternetli telefon', 'Ödeme kartı veya yerel ödeme seçeneği', 'Şehirler arası bilet için istenirse kimlik'], ['Şehir içi ulaşım genelde düşük maliyetlidir.', 'Havalimanı transferleri ve uygulama yolculukları daha pahalıdır.', 'Bazı rotalarda şehirler arası otobüs trenden hızlı olabilir.'], ['Eski bilet bilgisine güvenmek.', 'Peron değişikliklerini kontrol etmeden binmek.', 'Resmi olmayan havalimanı taksisine binmek.']),
  georgiaSimRu,
  ruGuide('georgia', 'esim', 'High', 'eSIM удобна, если телефон её поддерживает и нужен интернет сразу после посадки. Для местного номера или долгого пребывания сравните её с физической SIM-картой.', ['Проверьте поддержку eSIM в телефоне.', 'Купите и установите eSIM до вылета по Wi-Fi.', 'Сохраните QR-код или инструкцию активации.', 'После посадки включите eSIM и передачу данных.', 'Проверьте карты и мессенджеры до выхода из аэропорта.'], ['Телефон с поддержкой eSIM', 'Wi-Fi для установки', 'Банковская карта', 'Инструкция от провайдера'], ['Пакеты eSIM часто стоят дороже местной SIM.', 'Некоторые eSIM дают только интернет без местного номера.', 'Срок действия может начинаться при установке или первом подключении.'], ['Покупать eSIM без проверки совместимости телефона.', 'Удалять eSIM до конца поездки.', 'Не проверять, когда начинается срок действия.']),
  ruGuide('georgia', 'bank-account', 'Medium', 'Открыть счёт возможно для многих приезжих, но требования отличаются по банку и отделению. Готовьте паспорт, местный номер и объяснение цели счёта.', ['Сравните крупные банки до визита.', 'Выделите время на посещение отделения.', 'Подготовьте паспорт, номер телефона и адрес.', 'Спросите про комиссии, карту и переводы.', 'Активируйте онлайн-банк до ухода из отделения.'], ['Паспорт', 'Местный номер телефона', 'Местный адрес', 'Документы о доходе или цели, если попросят'], ['Могут быть ежемесячные комиссии.', 'Стоимость карты и переводов отличается.', 'Премиальные пакеты не всегда нужны.'], ['Идти без местного номера.', 'Не спрашивать про комиссии.', 'Думать, что правила одинаковые во всех отделениях.']),
  ruGuide('georgia', 'rent-apartment', 'Medium', 'На первую неделю лучше взять временное жильё, а долгосрочную квартиру смотреть лично до оплаты депозита.', ['Забронируйте временное жильё на первые дни.', 'Сравните районы по транспорту и шуму.', 'Проверьте отопление, воду, интернет и вход в дом.', 'Запишите депозит, коммунальные и срок аренды.', 'Не переводите крупные суммы до просмотра и проверки владельца.'], ['Паспорт или копия паспорта', 'Деньги на депозит', 'Договор или переписка с условиями'], ['Депозит часто равен одному месяцу.', 'Коммунальные могут оплачиваться отдельно.', 'Комиссия агента зависит от ситуации.'], ['Подписывать без проверки коммунальных.', 'Платить до просмотра квартиры.', 'Не учитывать качество отопления зимой.']),
  ruGuide('georgia', 'transport', 'High', 'Для приезда удобны приложения такси, а для регулярных поездок пригодятся транспортная карта или бесконтактная оплата там, где она доступна.', ['Установите приложения такси до приезда.', 'Проверьте зоны посадки в аэропорту.', 'Уточните способ оплаты общественного транспорта.', 'Держите немного наличных для районов вне центра.', 'Сравните варианты междугородних поездок заранее.'], ['Телефон с интернетом', 'Банковская карта', 'Транспортная карта, если нужна'], ['Поездки из аэропорта дороже городских.', 'Общественный транспорт обычно самый дешёвый.', 'Междугородние цены зависят от маршрута.'], ['Садиться в неофициальное такси без цены.', 'Думать, что карта работает везде.', 'Не проверять последние рейсы.']),
  serbiaSimRu,
  ruGuide('serbia', 'esim', 'High', 'eSIM подходит, если нужен интернет сразу после приезда и телефон поддерживает eSIM. Для местного номера лучше сравнить с физической SIM-картой.', ['Проверьте поддержку eSIM.', 'Купите eSIM до поездки и установите по Wi-Fi.', 'Сохраните инструкцию активации.', 'После посадки включите линию eSIM.', 'Проверьте карты и мессенджеры.'], ['Телефон с поддержкой eSIM', 'Wi-Fi для установки', 'Банковская карта', 'Инструкция провайдера'], ['eSIM часто дороже местной SIM.', 'Многие eSIM дают только интернет.', 'Срок действия зависит от условий пакета.'], ['Не проверять совместимость телефона.', 'Удалять eSIM во время поездки.', 'Не уточнять срок действия.']),
  ruGuide('serbia', 'bank-account', 'Medium', 'Банк в Сербии может попросить больше документов. Подготовьте паспорт, местную регистрацию или адрес и понятную цель открытия счёта.', ['Сравните банки для нерезидентов.', 'Уточните список документов до визита.', 'Возьмите паспорт, номер телефона и адрес.', 'Спросите про обслуживание, карту и переводы.', 'Проверьте мобильный банк перед уходом.'], ['Паспорт', 'Местный номер телефона', 'Адрес или регистрация, если есть', 'Документы о доходе или цели, если попросят'], ['Комиссии отличаются по банкам.', 'Выпуск карты может занять несколько дней.', 'Для нерезидентов условия могут быть дороже.'], ['Идти без уточнения документов.', 'Не спрашивать про ограничения для нерезидентов.', 'Уходить до активации мобильного банка.']),
  ruGuide('serbia', 'rent-apartment', 'Medium', 'Начните с краткосрочного жилья, затем смотрите квартиры лично и заранее уточняйте регистрацию, коммунальные и депозит.', ['Выберите временное жильё рядом с нужным районом.', 'Смотрите квартиры при дневном свете.', 'Спросите, поможет ли владелец с регистрацией адреса.', 'Уточните коммунальные, интернет и расходы дома.', 'Запишите депозит и условия заезда.'], ['Паспорт', 'Деньги на депозит', 'Договор или письменные условия', 'Данные регистрации для долгого пребывания'], ['Депозит часто равен одному месяцу.', 'Коммунальные и расходы дома могут быть отдельно.', 'Цены сильно зависят от района Белграда.'], ['Не обсуждать регистрацию адреса.', 'Недооценить зимние коммунальные.', 'Отправлять депозит без проверки владельца.']),
  ruGuide('serbia', 'transport', 'High', 'В Белграде удобно передвигаться автобусами, трамваями, пешком и через приложения такси. Проверяйте актуальные правила оплаты транспорта на месте.', ['Установите карты и приложения такси.', 'Проверьте правила оплаты транспорта в своём городе.', 'Из аэропорта используйте официальный трансфер или приложение.', 'Для поездок между городами сравните автобусы и поезда.', 'Держите телефон с интернетом под рукой.'], ['Телефон с интернетом', 'Банковская карта или местный способ оплаты', 'Документ для междугородних билетов, если попросят'], ['Городской транспорт обычно недорогой.', 'Аэропорт и поездки через приложения стоят дороже.', 'Автобусы иногда быстрее поездов.'], ['Пользоваться старой информацией о билетах.', 'Не проверять платформу и расписание.', 'Садиться в неофициальное такси в аэропорту.']),
];

export const findGuide = (language: Language, country: CountryKey, topic: TopicKey) =>
  guides.find((guide) => guide.language === language && guide.country === country && guide.topic === topic);
