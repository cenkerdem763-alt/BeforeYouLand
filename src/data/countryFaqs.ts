import type { CountryKey } from './countries';
import type { Language } from './i18n';

export type FAQItem = {
  question: string;
  answer: string;
};

export const countryFaqs: Record<CountryKey, Record<Language, FAQItem[]>> = {
  georgia: {
    en: [
      {
        question: 'Which apps are useful during the first week in Georgia?',
        answer:
          'Preparing a few apps for taxis, maps, food, housing and mobile internet can make the first week easier. Bolt, Yandex Go, Google Maps, Wolt or Glovo, and local housing websites are commonly checked.',
      },
      {
        question: 'Where can I buy a SIM card in Georgia?',
        answer:
          'You can check official stores and sales points for operators such as Magti, Silknet and Cellfie. Packages and requirements can change, so confirm the current details before buying.',
      },
      {
        question: 'Which taxi apps are commonly used in Tbilisi?',
        answer:
          'Bolt, Yandex Go and Maxim are commonly checked for transport in Tbilisi. App availability and fares can change over time.',
      },
      {
        question: 'What should I check when looking for housing in Georgia?',
        answer:
          'Check the location, transport links, deposit, contract terms and listing source carefully. MyHome.ge, SS.ge and local groups can be useful starting points.',
      },
      {
        question: 'How long can I stay in Georgia?',
        answer:
          'The permitted stay may depend on your nationality, passport and reason for travel. Check current official sources before making travel or residence decisions.',
      },
    ],
    tr: [
      {
        question: "Gürcistan'da ilk hafta hangi uygulamalar gerekir?",
        answer:
          'Taksi, harita, yemek, konaklama ve mobil internet için birkaç temel uygulama hazırlamak ilk haftayı kolaylaştırabilir. Bolt, Yandex Go, Google Maps, Wolt veya Glovo ve yerel konaklama siteleri kontrol edilebilir.',
      },
      {
        question: "Gürcistan'da SIM kart nereden alınır?",
        answer:
          'SIM kart seçenekleri için Magti, Silknet ve Cellfie gibi operatörlerin resmi mağazaları veya satış noktaları kontrol edilebilir. Paketler ve şartlar değişebileceği için almadan önce güncel bilgileri kontrol etmek önemlidir.',
      },
      {
        question: "Tiflis'te taksi için hangi uygulamalar kullanılır?",
        answer:
          "Bolt, Yandex Go ve Maxim gibi uygulamalar Tiflis'te ulaşım için kontrol edilebilir. Uygulama uygunluğu ve fiyatlar zamana göre değişebilir.",
      },
      {
        question: "Gürcistan'da ev ararken nelere dikkat edilmeli?",
        answer:
          'Konum, ulaşım, depozito, sözleşme şartları ve ilan kaynağı dikkatlice kontrol edilmelidir. MyHome.ge, SS.ge ve yerel gruplar başlangıç için incelenebilir.',
      },
      {
        question: "Gürcistan'da ne kadar kalabilirim?",
        answer:
          'Kalış süresi vatandaşlık, pasaport ve geliş amacına göre değişebilir. Seyahat veya oturum kararı vermeden önce resmi kaynakları kontrol etmek gerekir.',
      },
    ],
    ru: [
      {
        question: 'Какие приложения пригодятся в первую неделю в Грузии?',
        answer:
          'Полезно заранее установить приложения для такси, карт, доставки еды, жилья и мобильного интернета. Обычно проверяют Bolt, Yandex Go, Google Maps, Wolt или Glovo и местные сайты жилья.',
      },
      {
        question: 'Где купить SIM-карту в Грузии?',
        answer:
          'Можно проверить официальные магазины и точки продаж Magti, Silknet и Cellfie. Пакеты и условия могут меняться, поэтому перед покупкой уточните актуальную информацию.',
      },
      {
        question: 'Какие приложения такси используют в Тбилиси?',
        answer:
          'Для поездок в Тбилиси часто проверяют Bolt, Yandex Go и Maxim. Доступность приложений и стоимость поездок могут меняться.',
      },
      {
        question: 'Что проверить при поиске жилья в Грузии?',
        answer:
          'Внимательно проверьте район, транспорт, депозит, условия договора и источник объявления. Для начала можно сравнить MyHome.ge, SS.ge и местные группы.',
      },
      {
        question: 'Как долго я могу находиться в Грузии?',
        answer:
          'Допустимый срок может зависеть от гражданства, паспорта и цели поездки. Перед решением о поездке или проживании проверьте актуальные официальные источники.',
      },
    ],
  },
  serbia: {
    en: [
      {
        question: 'Which apps are useful during the first week in Serbia?',
        answer:
          'It can help to prepare apps for taxis, public transport, maps, food and housing. Yandex Go, Moovit, Google Maps, Wolt or Glovo, and local property websites are good to compare.',
      },
      {
        question: 'Which mobile operators can I check in Serbia?',
        answer:
          'Yettel Serbia, A1 Serbia and mts are common starting points. Packages and requirements can change, so verify current details with the operator.',
      },
      {
        question: 'Which transport apps can I use in Belgrade?',
        answer:
          'Moovit, Google Maps and current local transport sources can help with route planning. For taxis, you can compare Yandex Go, CarGo and local taxi options.',
      },
      {
        question: 'Which websites can I check for housing in Serbia?',
        answer:
          '4zida, Halo Oglasi, Nekretnine.rs and local Facebook groups can be useful starting points. Check listing details, location and contract terms carefully.',
      },
      {
        question: 'How long can I stay in Serbia?',
        answer:
          'The permitted stay may depend on your nationality, passport and reason for travel. Check current official visa and residence information for your situation.',
      },
    ],
    tr: [
      {
        question: "Sırbistan'da ilk hafta hangi uygulamalar gerekir?",
        answer:
          'Taksi, toplu taşıma, harita, yemek ve konaklama için temel uygulamaları önceden hazırlamak faydalı olabilir. Yandex Go, Moovit, Google Maps, Wolt veya Glovo ve emlak siteleri kontrol edilebilir.',
      },
      {
        question: "Sırbistan'da SIM kart için hangi operatörler var?",
        answer:
          'Yettel Serbia, A1 Serbia ve mts gibi operatörler başlangıç için kontrol edilebilir. Paketler ve şartlar değişebileceği için güncel bilgileri operatörlerden doğrulamak önemlidir.',
      },
      {
        question: "Belgrad'da ulaşım için hangi uygulamalar kullanılabilir?",
        answer:
          'Moovit, Google Maps ve yerel toplu taşıma kaynakları rota planlama için yardımcı olabilir. Taksi için Yandex Go, CarGo veya yerel taksi seçenekleri kontrol edilebilir.',
      },
      {
        question: "Sırbistan'da ev aramak için hangi siteler kullanılabilir?",
        answer:
          '4zida, Halo Oglasi, Nekretnine.rs ve yerel Facebook grupları başlangıç için incelenebilir. İlan detayları, konum ve sözleşme şartları dikkatlice kontrol edilmelidir.',
      },
      {
        question: "Sırbistan'da ne kadar kalabilirim?",
        answer:
          'Kalış süresi vatandaşlık, pasaport ve geliş amacına göre değişebilir. Güncel vize ve oturum bilgileri için resmi kaynakları kontrol etmek gerekir.',
      },
    ],
    ru: [
      {
        question: 'Какие приложения пригодятся в первую неделю в Сербии?',
        answer:
          'Полезно заранее установить приложения для такси, транспорта, карт, еды и жилья. Можно сравнить Yandex Go, Moovit, Google Maps, Wolt или Glovo и местные сайты недвижимости.',
      },
      {
        question: 'Каких мобильных операторов проверить в Сербии?',
        answer:
          'Для начала можно проверить Yettel Serbia, A1 Serbia и mts. Пакеты и требования могут меняться, поэтому уточните актуальные условия у оператора.',
      },
      {
        question: 'Какие транспортные приложения использовать в Белграде?',
        answer:
          'Для маршрутов могут помочь Moovit, Google Maps и актуальные местные транспортные источники. Для такси можно сравнить Yandex Go, CarGo и местные службы.',
      },
      {
        question: 'На каких сайтах искать жильё в Сербии?',
        answer:
          'Для начала можно посмотреть 4zida, Halo Oglasi, Nekretnine.rs и местные группы Facebook. Внимательно проверяйте объявление, район и условия договора.',
      },
      {
        question: 'Как долго я могу находиться в Сербии?',
        answer:
          'Допустимый срок может зависеть от гражданства, паспорта и цели поездки. Проверьте актуальную официальную информацию о визе и проживании для вашей ситуации.',
      },
    ],
  },
};
