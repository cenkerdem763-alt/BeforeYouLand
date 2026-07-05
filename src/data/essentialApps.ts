import type { CountryKey } from './countries';
import type { Language } from './i18n';

export type EssentialCategoryKey =
  | 'taxiTransport'
  | 'simInternet'
  | 'housing'
  | 'foodGrocery'
  | 'mapsNavigation'
  | 'bankingMoney';

type LocalizedText = Record<Language, string>;

export type EssentialAppItem = {
  name: string;
  url: string;
  description: LocalizedText;
};

export type EssentialCategory = {
  key: EssentialCategoryKey;
  items: EssentialAppItem[];
};

export const essentialCategoryLabels: Record<EssentialCategoryKey, LocalizedText> = {
  taxiTransport: {
    en: 'Taxi & transport',
    tr: 'Taksi ve ulaşım',
    ru: 'Такси и транспорт',
  },
  simInternet: {
    en: 'SIM & internet',
    tr: 'SIM ve internet',
    ru: 'SIM и интернет',
  },
  housing: {
    en: 'Housing',
    tr: 'Ev ve konaklama',
    ru: 'Жильё',
  },
  foodGrocery: {
    en: 'Food & grocery',
    tr: 'Yemek ve market',
    ru: 'Еда и продукты',
  },
  mapsNavigation: {
    en: 'Maps & navigation',
    tr: 'Harita ve navigasyon',
    ru: 'Карты и навигация',
  },
  bankingMoney: {
    en: 'Banking & money',
    tr: 'Banka ve para',
    ru: 'Банк и деньги',
  },
};

export const essentialApps = {
  georgia: [
    {
      key: 'taxiTransport',
      items: [
        {
          name: 'Bolt',
          url: 'https://bolt.eu/en-ge/',
          description: {
            en: 'Commonly used for city rides and airport transfers.',
            tr: 'Şehir içi yolculuklar ve havalimanı transferleri için sık kullanılır.',
            ru: 'Часто используют для поездок по городу и трансфера из аэропорта.',
          },
        },
        {
          name: 'Yandex Go',
          url: 'https://go.yandex.com/',
          description: {
            en: 'Useful to compare ride options and availability.',
            tr: 'Araç seçeneklerini ve müsaitliği karşılaştırmak için işe yarar.',
            ru: 'Полезно для сравнения вариантов поездки и доступности машин.',
          },
        },
        {
          name: 'Maxim',
          url: 'https://taximaxim.com/ge/',
          description: {
            en: 'Good to check as another taxi option in some areas.',
            tr: 'Bazı bölgelerde ek bir taksi seçeneği olarak kontrol edilebilir.',
            ru: 'Можно проверить как дополнительный вариант такси в некоторых районах.',
          },
        },
        {
          name: 'Tbilisi Transport / TTC',
          url: 'https://ttc.com.ge/en',
          description: {
            en: 'Useful for public transport routes and local transit updates.',
            tr: 'Toplu taşıma hatları ve yerel ulaşım bilgileri için faydalıdır.',
            ru: 'Полезно для маршрутов общественного транспорта и местных обновлений.',
          },
        },
      ],
    },
    {
      key: 'simInternet',
      items: [
        {
          name: 'Magti',
          url: 'https://www.magticom.ge/en',
          description: {
            en: 'Good to check for mobile SIM, data packages and home internet.',
            tr: 'Mobil SIM, internet paketleri ve ev interneti için kontrol edilebilir.',
            ru: 'Стоит проверить для SIM-карт, пакетов интернета и домашнего интернета.',
          },
        },
        {
          name: 'Silknet',
          url: 'https://silknet.com',
          description: {
            en: 'Can help with mobile plans, home internet and TV bundles.',
            tr: 'Mobil paketler, ev interneti ve TV paketleri için yardımcı olabilir.',
            ru: 'Может пригодиться для мобильных тарифов, домашнего интернета и ТВ-пакетов.',
          },
        },
        {
          name: 'Cellfie',
          url: 'https://cellfie.ge/en',
          description: {
            en: 'Useful to compare mobile data and prepaid options.',
            tr: 'Mobil internet ve ön ödemeli seçenekleri karşılaştırmak için faydalıdır.',
            ru: 'Полезно для сравнения мобильного интернета и предоплатных вариантов.',
          },
        },
      ],
    },
    {
      key: 'housing',
      items: [
        {
          name: 'MyHome.ge',
          url: 'https://www.myhome.ge/en/',
          description: {
            en: 'Commonly used to browse rentals and compare neighborhoods.',
            tr: 'Kiralıkları görmek ve semtleri karşılaştırmak için sık kullanılır.',
            ru: 'Часто используют для поиска аренды и сравнения районов.',
          },
        },
        {
          name: 'SS.ge',
          url: 'https://ss.ge/en/',
          description: {
            en: 'Useful for checking apartment listings and market examples.',
            tr: 'Daire ilanlarını ve piyasa örneklerini kontrol etmek için faydalıdır.',
            ru: 'Полезно для просмотра объявлений и примеров цен на рынке.',
          },
        },
        {
          name: 'Facebook Groups',
          url: 'https://www.facebook.com/groups/search/groups/?q=Georgia%20expats%20housing',
          description: {
            en: 'Can help with local leads, but verify owners and terms carefully.',
            tr: 'Yerel ilan bulmaya yardımcı olabilir; ev sahibi ve şartları dikkatle doğrula.',
            ru: 'Может помочь найти местные варианты, но проверяйте владельца и условия.',
          },
        },
      ],
    },
    {
      key: 'foodGrocery',
      items: [
        {
          name: 'Wolt',
          url: 'https://wolt.com/en/geo',
          description: {
            en: 'Commonly used for food delivery and some grocery options.',
            tr: 'Yemek teslimatı ve bazı market seçenekleri için sık kullanılır.',
            ru: 'Часто используют для доставки еды и некоторых продуктов.',
          },
        },
        {
          name: 'Glovo',
          url: 'https://glovoapp.com/ge/en/',
          description: {
            en: 'Useful for food, grocery and small local deliveries.',
            tr: 'Yemek, market ve küçük yerel teslimatlar için faydalıdır.',
            ru: 'Полезно для еды, продуктов и небольших локальных доставок.',
          },
        },
      ],
    },
    {
      key: 'mapsNavigation',
      items: [
        {
          name: 'Google Maps',
          url: 'https://www.google.com/maps',
          description: {
            en: 'Useful for places, reviews, walking routes and transit checks.',
            tr: 'Mekanlar, yorumlar, yürüyüş rotaları ve ulaşım kontrolü için faydalıdır.',
            ru: 'Полезно для мест, отзывов, пеших маршрутов и проверки транспорта.',
          },
        },
        {
          name: 'Yandex Maps',
          url: 'https://yandex.com/maps',
          description: {
            en: 'Good to compare navigation results and local search details.',
            tr: 'Navigasyon sonuçlarını ve yerel arama bilgilerini karşılaştırmak için iyidir.',
            ru: 'Подходит для сравнения маршрутов и локального поиска.',
          },
        },
        {
          name: 'Organic Maps or Maps.me',
          url: 'https://organicmaps.app/',
          description: {
            en: 'Useful for offline maps before longer walks or regional trips.',
            tr: 'Uzun yürüyüşler veya şehir dışı geziler öncesi çevrimdışı harita için faydalıdır.',
            ru: 'Полезно для офлайн-карт перед долгими прогулками или поездками по региону.',
          },
        },
      ],
    },
    {
      key: 'bankingMoney',
      items: [
        {
          name: 'Bank of Georgia',
          url: 'https://bankofgeorgia.ge/en',
          description: {
            en: 'Good to check for account, card and mobile banking requirements.',
            tr: 'Hesap, kart ve mobil bankacılık şartlarını kontrol etmek için iyidir.',
            ru: 'Стоит проверить требования к счёту, карте и мобильному банку.',
          },
        },
        {
          name: 'TBC Bank',
          url: 'https://tbcbank.ge/en',
          description: {
            en: 'Useful to compare banking options and app-based services.',
            tr: 'Banka seçeneklerini ve uygulama üzerinden hizmetleri karşılaştırmak için faydalıdır.',
            ru: 'Полезно для сравнения банковских вариантов и сервисов в приложении.',
          },
        },
        {
          name: 'Wise',
          url: 'https://wise.com/',
          description: {
            en: 'Can help with international transfers and currency checks.',
            tr: 'Uluslararası transferler ve kur kontrolü için yardımcı olabilir.',
            ru: 'Может помочь с международными переводами и проверкой курсов.',
          },
        },
      ],
    },
  ],
  serbia: [
    {
      key: 'taxiTransport',
      items: [
        {
          name: 'Yandex Go',
          url: 'https://go.yandex.com/',
          description: {
            en: 'Commonly used to request rides and compare availability.',
            tr: 'Araç çağırmak ve müsaitliği karşılaştırmak için sık kullanılır.',
            ru: 'Часто используют для заказа поездок и сравнения доступности.',
          },
        },
        {
          name: 'CarGo',
          url: 'https://appcargo.com/',
          description: {
            en: 'Useful to check as another app-based ride option.',
            tr: 'Uygulama üzerinden ek bir ulaşım seçeneği olarak kontrol edilebilir.',
            ru: 'Можно проверить как дополнительный вариант поездок через приложение.',
          },
        },
        {
          name: 'Pink Taxi',
          url: 'https://pinktaxi.info/',
          description: {
            en: 'Good to keep as a local taxi option in Belgrade.',
            tr: 'Belgrad’da yerel taksi seçeneği olarak elde tutmak iyi olabilir.',
            ru: 'Можно держать под рукой как местный вариант такси в Белграде.',
          },
        },
        {
          name: 'Public Transport Belgrade',
          url: 'https://www.gsp.rs/',
          description: {
            en: 'Useful for checking public transport routes and local updates.',
            tr: 'Toplu taşıma hatları ve yerel güncellemeleri kontrol etmek için faydalıdır.',
            ru: 'Полезно для проверки маршрутов общественного транспорта и обновлений.',
          },
        },
        {
          name: 'Moovit',
          url: 'https://moovitapp.com/',
          description: {
            en: 'Useful for route planning with buses, trams and walking connections.',
            tr: 'Otobüs, tramvay ve yürüyüş bağlantılarıyla rota planlamak için faydalıdır.',
            ru: 'Полезно для планирования маршрутов на автобусах, трамваях и пешком.',
          },
        },
      ],
    },
    {
      key: 'simInternet',
      items: [
        {
          name: 'Yettel Serbia',
          url: 'https://www.yettel.rs/',
          description: {
            en: 'Good to check for SIM cards, data packages and home internet.',
            tr: 'SIM kart, internet paketleri ve ev interneti için kontrol edilebilir.',
            ru: 'Стоит проверить для SIM-карт, пакетов интернета и домашнего интернета.',
          },
        },
        {
          name: 'A1 Serbia',
          url: 'https://www.a1.rs/',
          description: {
            en: 'Useful to compare prepaid, mobile data and store options.',
            tr: 'Ön ödemeli paketleri, mobil interneti ve mağaza seçeneklerini karşılaştırmak için faydalıdır.',
            ru: 'Полезно для сравнения предоплатных тарифов, мобильного интернета и магазинов.',
          },
        },
        {
          name: 'mts',
          url: 'https://mts.rs/',
          description: {
            en: 'Can help with mobile, internet and TV package checks.',
            tr: 'Mobil, internet ve TV paketlerini kontrol etmek için yardımcı olabilir.',
            ru: 'Может пригодиться для проверки мобильных, интернет- и ТВ-пакетов.',
          },
        },
      ],
    },
    {
      key: 'housing',
      items: [
        {
          name: '4zida',
          url: 'https://www.4zida.rs/',
          description: {
            en: 'Commonly used to browse rentals and compare neighborhoods.',
            tr: 'Kiralıkları görmek ve semtleri karşılaştırmak için sık kullanılır.',
            ru: 'Часто используют для поиска аренды и сравнения районов.',
          },
        },
        {
          name: 'Halo Oglasi',
          url: 'https://www.halooglasi.com/nekretnine',
          description: {
            en: 'Useful for checking apartment listings and price examples.',
            tr: 'Daire ilanlarını ve fiyat örneklerini kontrol etmek için faydalıdır.',
            ru: 'Полезно для просмотра объявлений и примеров цен.',
          },
        },
        {
          name: 'Nekretnine.rs',
          url: 'https://www.nekretnine.rs/',
          description: {
            en: 'Good to check for another view of the rental market.',
            tr: 'Kiralık piyasasını farklı bir açıdan görmek için kontrol edilebilir.',
            ru: 'Стоит проверить для дополнительного обзора рынка аренды.',
          },
        },
        {
          name: 'Facebook Groups',
          url: 'https://www.facebook.com/groups/search/groups/?q=Serbia%20expats%20housing',
          description: {
            en: 'Can help with local leads, but verify owners and terms carefully.',
            tr: 'Yerel ilan bulmaya yardımcı olabilir; ev sahibi ve şartları dikkatle doğrula.',
            ru: 'Может помочь найти местные варианты, но проверяйте владельца и условия.',
          },
        },
      ],
    },
    {
      key: 'foodGrocery',
      items: [
        {
          name: 'Wolt',
          url: 'https://wolt.com/en/srb',
          description: {
            en: 'Commonly used for food delivery and some grocery options.',
            tr: 'Yemek teslimatı ve bazı market seçenekleri için sık kullanılır.',
            ru: 'Часто используют для доставки еды и некоторых продуктов.',
          },
        },
        {
          name: 'Glovo',
          url: 'https://glovoapp.com/rs/en/',
          description: {
            en: 'Useful for food, grocery and small local deliveries.',
            tr: 'Yemek, market ve küçük yerel teslimatlar için faydalıdır.',
            ru: 'Полезно для еды, продуктов и небольших локальных доставок.',
          },
        },
      ],
    },
    {
      key: 'mapsNavigation',
      items: [
        {
          name: 'Google Maps',
          url: 'https://www.google.com/maps',
          description: {
            en: 'Useful for places, reviews, walking routes and transit checks.',
            tr: 'Mekanlar, yorumlar, yürüyüş rotaları ve ulaşım kontrolü için faydalıdır.',
            ru: 'Полезно для мест, отзывов, пеших маршрутов и проверки транспорта.',
          },
        },
        {
          name: 'Moovit',
          url: 'https://moovitapp.com/',
          description: {
            en: 'Useful for public transport planning in Belgrade.',
            tr: 'Belgrad’da toplu taşıma planlamak için faydalıdır.',
            ru: 'Полезно для планирования общественного транспорта в Белграде.',
          },
        },
        {
          name: 'Yandex Maps',
          url: 'https://yandex.com/maps',
          description: {
            en: 'Good to compare navigation results and local search details.',
            tr: 'Navigasyon sonuçlarını ve yerel arama bilgilerini karşılaştırmak için iyidir.',
            ru: 'Подходит для сравнения маршрутов и локального поиска.',
          },
        },
      ],
    },
    {
      key: 'bankingMoney',
      items: [
        {
          name: 'Raiffeisen Bank Serbia',
          url: 'https://www.raiffeisenbank.rs/',
          description: {
            en: 'Good to check for account, card and mobile banking requirements.',
            tr: 'Hesap, kart ve mobil bankacılık şartlarını kontrol etmek için iyidir.',
            ru: 'Стоит проверить требования к счёту, карте и мобильному банку.',
          },
        },
        {
          name: 'Banca Intesa',
          url: 'https://www.bancaintesa.rs/',
          description: {
            en: 'Useful to compare banking options and branch requirements.',
            tr: 'Banka seçeneklerini ve şube şartlarını karşılaştırmak için faydalıdır.',
            ru: 'Полезно для сравнения банковских вариантов и требований отделений.',
          },
        },
        {
          name: 'OTP banka',
          url: 'https://www.otpbanka.rs/',
          description: {
            en: 'Good to check as another banking option for newcomers.',
            tr: 'Yeni gelenler için başka bir banka seçeneği olarak kontrol edilebilir.',
            ru: 'Стоит проверить как ещё один банковский вариант для новых приезжих.',
          },
        },
        {
          name: 'Wise',
          url: 'https://wise.com/',
          description: {
            en: 'Can help with international transfers and currency checks.',
            tr: 'Uluslararası transferler ve kur kontrolü için yardımcı olabilir.',
            ru: 'Может помочь с международными переводами и проверкой курсов.',
          },
        },
      ],
    },
  ],
} satisfies Record<CountryKey, EssentialCategory[]>;
