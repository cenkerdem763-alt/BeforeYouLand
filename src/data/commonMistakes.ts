import type { CountryKey } from './countries';
import type { Language } from './i18n';

export type CommonMistake = {
  title: string;
  text: string;
};

export const commonMistakes: Record<CountryKey, Record<Language, CommonMistake[]>> = {
  georgia: {
    en: [
      {
        title: 'Taking random taxis too quickly',
        text: 'Before choosing a taxi, it can help to compare app prices and routes. Bolt, Yandex Go or Maxim are useful starting points.',
      },
      {
        title: 'Waiting to set up mobile internet',
        text: 'Having data early can help with maps, transport and messages. Compare current packages from Magti, Silknet and Cellfie.',
      },
      {
        title: 'Renting before checking the area',
        text: 'Check the neighborhood, transport access, deposit and contract terms before committing to housing.',
      },
      {
        title: 'Relying on only one app',
        text: 'Taxi, map and housing results can differ. Comparing two or more commonly used services can give you better context.',
      },
      {
        title: 'Putting important documents out of reach',
        text: 'Keep your passport, entry stamp and useful document copies secure but accessible when you may need them.',
      },
      {
        title: 'Skipping current stay-rule checks',
        text: 'Visa and stay rules can change and may depend on your nationality or situation. Check current official sources.',
      },
      {
        title: 'Paying without comparing options',
        text: 'Exchange rates and payment conditions can vary. Compare current options before exchanging money or making larger payments.',
      },
    ],
    tr: [
      {
        title: 'Rastgele taksiye binmek',
        text: "Tiflis'te taksiye binmeden önce uygulama fiyatlarını ve rotayı kontrol etmek daha güvenli bir başlangıç olabilir. Bolt, Yandex Go veya Maxim karşılaştırılabilir.",
      },
      {
        title: 'Mobil interneti geciktirmek',
        text: 'İnterneti erken kurmak harita, ulaşım ve mesajlaşmada yardımcı olabilir. Magti, Silknet ve Cellfie paketlerini güncel haliyle karşılaştırın.',
      },
      {
        title: 'Bölgeyi kontrol etmeden ev kiralamak',
        text: 'Konaklama kararı vermeden önce semti, ulaşım bağlantılarını, depozitoyu ve sözleşme şartlarını kontrol etmek faydalıdır.',
      },
      {
        title: 'Tek bir uygulamaya güvenmek',
        text: 'Taksi, harita ve konaklama sonuçları değişebilir. Yaygın kullanılan birkaç hizmeti karşılaştırmak daha iyi fikir verebilir.',
      },
      {
        title: 'Önemli belgeleri erişilemez tutmak',
        text: 'Pasaport, giriş damgası ve gerekli belge kopyalarını güvenli ama ihtiyaç halinde erişilebilir bir yerde tutun.',
      },
      {
        title: 'Güncel kalış kurallarını kontrol etmemek',
        text: 'Vize ve kalış kuralları değişebilir ve durumunuza göre farklılık gösterebilir. Güncel resmi kaynakları kontrol edin.',
      },
      {
        title: 'Seçenekleri karşılaştırmadan ödeme yapmak',
        text: 'Döviz kurları ve ödeme şartları farklı olabilir. Para bozdurmadan veya büyük ödeme yapmadan önce güncel seçenekleri karşılaştırın.',
      },
    ],
    ru: [
      {
        title: 'Садиться в случайное такси без проверки',
        text: 'Перед поездкой полезно сравнить цены и маршрут в приложениях. Bolt, Yandex Go или Maxim могут быть хорошей отправной точкой.',
      },
      {
        title: 'Откладывать подключение мобильного интернета',
        text: 'Мобильный интернет пригодится для карт, транспорта и сообщений. Сравните актуальные пакеты Magti, Silknet и Cellfie.',
      },
      {
        title: 'Арендовать жильё без проверки района',
        text: 'До аренды проверьте район, транспорт, депозит и условия договора. Это поможет избежать неудобного варианта.',
      },
      {
        title: 'Полагаться только на одно приложение',
        text: 'Результаты в сервисах такси, карт и жилья могут отличаться. Полезно сравнить несколько популярных вариантов.',
      },
      {
        title: 'Хранить важные документы в недоступном месте',
        text: 'Храните паспорт, въездной штамп и копии важных документов безопасно, но так, чтобы они были доступны при необходимости.',
      },
      {
        title: 'Не сверяться с актуальными правилами пребывания',
        text: 'Правила визы и пребывания могут меняться и зависеть от вашей ситуации. Сверяйтесь с актуальной информацией на официальных ресурсах.',
      },
      {
        title: 'Оплачивать без сравнения вариантов',
        text: 'Курсы обмена и условия оплаты могут отличаться. Сравните актуальные варианты до обмена денег или крупного платежа.',
      },
    ],
  },
  serbia: {
    en: [
      {
        title: 'Arriving without checking transport',
        text: 'Checking airport, public transport and taxi options before reaching Belgrade can make your arrival easier.',
      },
      {
        title: 'Waiting to get mobile internet',
        text: 'Early internet access can help with routes and messages. Compare current packages from Yettel Serbia, A1 Serbia and mts.',
      },
      {
        title: 'Choosing housing before checking the area',
        text: 'Check the neighborhood, commute, transport access and contract terms before choosing a place to stay.',
      },
      {
        title: 'Using only one housing source',
        text: 'Listings can differ across websites and local groups. Comparing several sources can help you understand the market.',
      },
      {
        title: 'Putting important documents out of reach',
        text: 'Keep your passport, registration documents and useful copies secure but accessible when needed.',
      },
      {
        title: 'Skipping current stay-rule checks',
        text: 'Visa and stay rules can change and may depend on your nationality or situation. Check current official sources.',
      },
      {
        title: 'Assuming every requirement is the same',
        text: 'Banking and residence requirements may depend on your documents and situation. Confirm details with official sources or the provider.',
      },
    ],
    tr: [
      {
        title: 'Ulaşımı kontrol etmeden gelmek',
        text: "Belgrad'a varmadan önce havalimanı, toplu taşıma ve taksi seçeneklerini kontrol etmek ilk günü kolaylaştırabilir.",
      },
      {
        title: 'Mobil interneti geciktirmek',
        text: 'İnterneti erken kurmak rota ve mesajlaşmada yardımcı olabilir. Yettel Serbia, A1 Serbia ve mts paketlerini güncel haliyle karşılaştırın.',
      },
      {
        title: 'Bölgeyi kontrol etmeden ev seçmek',
        text: 'Konaklama seçmeden önce semti, günlük ulaşımı, toplu taşıma bağlantılarını ve sözleşme şartlarını kontrol edin.',
      },
      {
        title: 'Tek bir konaklama kaynağına güvenmek',
        text: 'İlanlar site ve yerel gruplara göre değişebilir. Birkaç kaynağı karşılaştırmak piyasayı anlamaya yardımcı olabilir.',
      },
      {
        title: 'Önemli belgeleri erişilemez tutmak',
        text: 'Pasaport, kayıt belgeleri ve gerekli kopyaları güvenli ama ihtiyaç halinde erişilebilir bir yerde tutun.',
      },
      {
        title: 'Güncel kalış kurallarını kontrol etmemek',
        text: 'Vize ve kalış kuralları değişebilir ve durumunuza göre farklılık gösterebilir. Güncel resmi kaynakları kontrol edin.',
      },
      {
        title: 'Şartların herkes için aynı olduğunu düşünmek',
        text: 'Banka ve oturum şartları belgelere ve durumunuza göre değişebilir. Ayrıntıları resmi kaynaklardan veya sağlayıcıdan doğrulayın.',
      },
    ],
    ru: [
      {
        title: 'Приезжать, не проверив транспорт',
        text: 'До прибытия в Белград полезно проверить варианты из аэропорта, общественный транспорт и такси.',
      },
      {
        title: 'Откладывать подключение мобильного интернета',
        text: 'Мобильный интернет поможет с маршрутами и сообщениями. Сравните актуальные пакеты Yettel Serbia, A1 Serbia и mts.',
      },
      {
        title: 'Выбирать жильё без проверки района',
        text: 'До выбора жилья проверьте район, дорогу, транспорт и условия договора. Это поможет избежать неудобного варианта.',
      },
      {
        title: 'Использовать только один источник жилья',
        text: 'Объявления на сайтах и в местных группах могут отличаться. Сравнение нескольких источников поможет понять рынок.',
      },
      {
        title: 'Хранить важные документы в недоступном месте',
        text: 'Храните паспорт, регистрационные документы и нужные копии безопасно, но доступно при необходимости.',
      },
      {
        title: 'Не сверяться с актуальными правилами пребывания',
        text: 'Правила визы и пребывания могут меняться и зависеть от вашей ситуации. Сверяйтесь с актуальной информацией на официальных ресурсах.',
      },
      {
        title: 'Считать требования одинаковыми для всех',
        text: 'Банковские и регистрационные требования могут зависеть от документов и вашей ситуации. Уточняйте детали официально или у провайдера.',
      },
    ],
  },
};
