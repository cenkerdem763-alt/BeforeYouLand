import type { Language } from './i18n';

export type ComparisonCategoryKey =
  | 'firstWeek'
  | 'simInternet'
  | 'transport'
  | 'housing'
  | 'banking'
  | 'apps'
  | 'dailyLife'
  | 'bestFit';

type ComparisonCategory = {
  key: ComparisonCategoryKey;
  title: string;
  georgia: string;
  serbia: string;
};

type ComparisonContent = {
  eyebrow: string;
  title: string;
  metaDescription: string;
  intro: string;
  sectionTitle: string;
  georgiaLabel: string;
  serbiaLabel: string;
  sharedReminder: string;
  relatedTitle: string;
  relatedLinks: {
    georgiaSim: string;
    serbiaSim: string;
    georgiaTransport: string;
    serbiaTransport: string;
  };
  categories: ComparisonCategory[];
  cta: {
    title: string;
    text: string;
    georgiaButton: string;
    serbiaButton: string;
  };
  linkCard: {
    title: string;
    text: string;
    button: string;
  };
};

export const comparisonContent: Record<Language, ComparisonContent> = {
  en: {
    eyebrow: 'Country comparison',
    title: 'Georgia vs Serbia for newcomers',
    metaDescription:
      'Compare Georgia and Serbia for your first week abroad: SIM cards, transport, housing, banking, useful apps and practical newcomer basics.',
    intro:
      'Georgia and Serbia can both be interesting options for newcomers, students, expats and remote workers. This page compares practical first-week topics so you can understand which country may fit your needs better.',
    sectionTitle: 'First-week comparison',
    georgiaLabel: 'Georgia',
    serbiaLabel: 'Serbia',
    sharedReminder:
      'For both countries, visa, stay, banking and insurance details can change. Check official and current sources for your own situation before making decisions.',
    relatedTitle: 'Continue with practical guides',
    relatedLinks: {
      georgiaSim: 'Georgia SIM card guide',
      serbiaSim: 'Serbia SIM card guide',
      georgiaTransport: 'Georgia transport guide',
      serbiaTransport: 'Serbia transport guide',
    },
    categories: [
      {
        key: 'firstWeek',
        title: 'First-week setup',
        georgia:
          'Tbilisi and Batumi can offer a compact start where mobile internet, app-based transport and daily essentials are often quick to organize.',
        serbia:
          'Belgrade and Novi Sad offer broader city infrastructure. It can help to plan airport transport, your first address and local registration needs before arrival.',
      },
      {
        key: 'simInternet',
        title: 'SIM card & mobile internet',
        georgia:
          'Operator shops are common in larger cities, and setting up mobile data early can make transport and housing searches easier. Registration requirements may vary.',
        serbia:
          'Prepaid options are widely used, but the available packages and registration process can change. Checking operator stores and current requirements is a good start.',
      },
      {
        key: 'transport',
        title: 'Taxi & transport apps',
        georgia:
          'Bolt, Yandex Go and Maxim can help with price and route checks. Public transport options depend on the city and should be checked locally.',
        serbia:
          'Yandex Go and CarGo can be useful in Belgrade, while Moovit may help with public transport planning. Airport pickup arrangements are good to check in advance.',
      },
      {
        key: 'housing',
        title: 'Housing search',
        georgia:
          'MyHome.ge, SS.ge and local groups can provide a useful overview. Check the neighborhood, transport access, owner details and deposit terms before committing.',
        serbia:
          '4zida, Halo Oglasi and Nekretnine.rs can help you compare listings. Neighborhood choice and commuting time may matter more in a larger city.',
      },
      {
        key: 'banking',
        title: 'Banking & money basics',
        georgia:
          'Card use is common in cities, but keeping some local currency can help. Bank account requirements may depend on the bank and your status.',
        serbia:
          'The Serbian dinar is used for daily spending. Banking paperwork and eligibility can depend on your documents, residence status and the chosen bank.',
      },
      {
        key: 'apps',
        title: 'Useful apps and websites',
        georgia:
          'Taxi, delivery, maps and housing apps can cover many first-week tasks. Keeping more than one option installed can be useful when availability changes.',
        serbia:
          'Transport, housing and delivery services are well represented online, especially around Belgrade. Local websites can be as useful as mobile apps.',
      },
      {
        key: 'dailyLife',
        title: 'Language and daily life',
        georgia:
          'Georgian is the local language, while English or Russian may help in some urban settings. A translation app can make everyday tasks easier.',
        serbia:
          'Serbian uses both Cyrillic and Latin scripts. English may be available in larger cities, but learning basic local phrases can help with daily routines.',
      },
      {
        key: 'bestFit',
        title: 'Who each country may suit better',
        georgia:
          'Georgia may suit people looking for a compact experience, a quick app-supported start and flexible regional travel, depending on their situation.',
        serbia:
          'Serbia may suit people focused on Belgrade, larger-city infrastructure and connections across the region, depending on their plans and documents.',
      },
    ],
    cta: {
      title: 'Still deciding between Georgia and Serbia?',
      text: 'Start with the country guide that feels closer to your plan.',
      georgiaButton: 'Georgia guide',
      serbiaButton: 'Serbia guide',
    },
    linkCard: {
      title: 'Georgia or Serbia?',
      text: 'Compare first-week setup, transport, housing, banking and daily life.',
      button: 'Compare countries',
    },
  },
  tr: {
    eyebrow: 'Ülke karşılaştırması',
    title: 'Gürcistan mı Sırbistan mı?',
    metaDescription:
      "Gürcistan ve Sırbistan'ı ilk hafta ihtiyaçları açısından karşılaştır: SIM kart, ulaşım, ev, banka, gerekli uygulamalar ve pratik başlangıç bilgileri.",
    intro:
      "Gürcistan ve Sırbistan; yeni bir ülkeye gitmek isteyenler, öğrenciler, expat'lar ve uzaktan çalışanlar için farklı avantajlara sahip olabilir. Bu sayfa, ilk hafta ihtiyaçlarını karşılaştırarak hangi ülkenin sana daha uygun olabileceğini anlamana yardımcı olur.",
    sectionTitle: 'İlk hafta karşılaştırması',
    georgiaLabel: 'Gürcistan',
    serbiaLabel: 'Sırbistan',
    sharedReminder:
      'Her iki ülkede de vize, kalış süresi, banka ve sigorta ayrıntıları değişebilir. Karar vermeden önce kendi durumun için güncel ve resmi kaynakları kontrol et.',
    relatedTitle: 'Pratik rehberlerle devam et',
    relatedLinks: {
      georgiaSim: 'Gürcistan SIM kart rehberi',
      serbiaSim: 'Sırbistan SIM kart rehberi',
      georgiaTransport: 'Gürcistan ulaşım rehberi',
      serbiaTransport: 'Sırbistan ulaşım rehberi',
    },
    categories: [
      {
        key: 'firstWeek',
        title: 'İlk hafta başlangıcı',
        georgia:
          'Tiflis ve Batum; mobil internet, uygulamalı ulaşım ve günlük ihtiyaçların çoğunu kompakt bir düzende kurmayı kolaylaştırabilir.',
        serbia:
          'Belgrad ve Novi Sad daha geniş şehir altyapısı sunar. Havalimanı ulaşımını, ilk adresini ve olası yerel kayıt ihtiyaçlarını gelmeden planlamak işe yarayabilir.',
      },
      {
        key: 'simInternet',
        title: 'SIM kart ve mobil internet',
        georgia:
          'Büyük şehirlerde operatör mağazaları yaygındır. Ulaşım ve ev aramasını kolaylaştırmak için mobil interneti erken kurmak pratik olabilir; kayıt şartları değişebilir.',
        serbia:
          'Ön ödemeli seçenekler yaygındır; ancak paketler ve kayıt süreci değişebilir. Operatör mağazalarını ve güncel şartları kontrol etmek iyi bir başlangıçtır.',
      },
      {
        key: 'transport',
        title: 'Taksi ve ulaşım uygulamaları',
        georgia:
          'Bolt, Yandex Go ve Maxim fiyat ve rota kontrolüne yardımcı olabilir. Toplu taşıma seçenekleri şehre göre değişir ve yerel olarak kontrol edilmelidir.',
        serbia:
          "Belgrad'da Yandex Go ve CarGo, toplu taşıma planında ise Moovit işe yarayabilir. Havalimanı biniş noktalarını önceden kontrol etmek faydalıdır.",
      },
      {
        key: 'housing',
        title: 'Ev arama',
        georgia:
          'MyHome.ge, SS.ge ve yerel gruplar genel bir fikir verebilir. Karar vermeden önce bölgeyi, ulaşımı, ev sahibini ve depozito şartlarını kontrol et.',
        serbia:
          '4zida, Halo Oglasi ve Nekretnine.rs ilanları karşılaştırmaya yardımcı olabilir. Daha büyük şehirlerde semt seçimi ve ulaşım süresi daha önemli olabilir.',
      },
      {
        key: 'banking',
        title: 'Banka ve para temelleri',
        georgia:
          'Şehirlerde kart kullanımı yaygındır; yine de bir miktar yerel nakit faydalı olabilir. Hesap açma şartları bankaya ve statüne bağlıdır.',
        serbia:
          'Günlük harcamalarda Sırp dinarı kullanılır. Banka evrakları ve uygunluk; belgelerine, oturum durumuna ve seçilen bankaya göre değişebilir.',
      },
      {
        key: 'apps',
        title: 'Gerekli uygulamalar ve siteler',
        georgia:
          'Taksi, teslimat, harita ve ev uygulamaları ilk haftadaki birçok işi karşılayabilir. Erişilebilirlik değişirse diye birden fazla seçenek bulundurmak faydalıdır.',
        serbia:
          "Özellikle Belgrad'da ulaşım, ev ve teslimat hizmetlerinin çevrim içi seçenekleri geniştir. Yerel internet siteleri mobil uygulamalar kadar yararlı olabilir.",
      },
      {
        key: 'dailyLife',
        title: 'Dil ve günlük yaşam',
        georgia:
          'Yerel dil Gürcücedir; bazı şehir ortamlarında İngilizce veya Rusça yardımcı olabilir. Çeviri uygulaması günlük işleri kolaylaştırabilir.',
        serbia:
          'Sırpçada Kiril ve Latin alfabeleri kullanılır. Büyük şehirlerde İngilizceye rastlanabilir; temel yerel ifadeler günlük yaşamda yardımcı olur.',
      },
      {
        key: 'bestFit',
        title: 'Hangi ülke kime daha uygun olabilir?',
        georgia:
          'Gürcistan; daha kompakt bir deneyim, uygulamalarla hızlı başlangıç ve esnek bölgesel seyahat arayanlara durumlarına bağlı olarak uygun olabilir.',
        serbia:
          'Sırbistan; Belgrad odağı, daha büyük şehir altyapısı ve bölgesel bağlantılar isteyenlere plan ve belgelerine bağlı olarak uygun olabilir.',
      },
    ],
    cta: {
      title: 'Gürcistan ve Sırbistan arasında mı kaldın?',
      text: 'Planına daha yakın gelen ülke rehberiyle başla.',
      georgiaButton: 'Gürcistan rehberi',
      serbiaButton: 'Sırbistan rehberi',
    },
    linkCard: {
      title: 'Gürcistan mı Sırbistan mı?',
      text: 'İlk hafta başlangıcını, ulaşımı, evi, bankayı ve günlük yaşamı karşılaştır.',
      button: 'Ülkeleri karşılaştır',
    },
  },
  ru: {
    eyebrow: 'Сравнение стран',
    title: 'Грузия или Сербия для переезда?',
    metaDescription:
      'Сравните Грузию и Сербию для первой недели: SIM-карты, транспорт, жильё, банки, полезные приложения и базовые советы для новичков.',
    intro:
      'Грузия и Сербия могут быть интересными вариантами для новичков, студентов, экспатов и удалённых работников. Эта страница сравнивает практичные темы первой недели, чтобы помочь понять, какая страна может лучше подойти под ваши задачи.',
    sectionTitle: 'Сравнение первой недели',
    georgiaLabel: 'Грузия',
    serbiaLabel: 'Сербия',
    sharedReminder:
      'В обеих странах правила по визам, срокам пребывания, банкам и страховке могут меняться. Перед важными решениями проверяйте актуальные официальные источники с учётом своей ситуации.',
    relatedTitle: 'Перейти к практическим гайдам',
    relatedLinks: {
      georgiaSim: 'SIM-карты в Грузии',
      serbiaSim: 'SIM-карты в Сербии',
      georgiaTransport: 'Транспорт в Грузии',
      serbiaTransport: 'Транспорт в Сербии',
    },
    categories: [
      {
        key: 'firstWeek',
        title: 'Обустройство в первую неделю',
        georgia:
          'В Тбилиси и Батуми многие базовые задачи — мобильный интернет, поездки через приложения и бытовые покупки — можно организовать довольно компактно.',
        serbia:
          'Белград и Нови-Сад предлагают более масштабную городскую инфраструктуру. Полезно заранее продумать дорогу из аэропорта, первый адрес и возможную регистрацию.',
      },
      {
        key: 'simInternet',
        title: 'SIM-карта и мобильный интернет',
        georgia:
          'В крупных городах легко найти офисы операторов. Раннее подключение интернета упростит поездки и поиск жилья, но правила регистрации могут различаться.',
        serbia:
          'Предоплаченные тарифы распространены, однако пакеты и порядок регистрации могут меняться. Лучше свериться с актуальными условиями операторов.',
      },
      {
        key: 'transport',
        title: 'Такси и транспортные приложения',
        georgia:
          'Bolt, Yandex Go и Maxim помогают сравнить цену и маршрут. Возможности общественного транспорта зависят от города — их стоит уточнять на месте.',
        serbia:
          'В Белграде могут пригодиться Yandex Go и CarGo, а для общественного транспорта — Moovit. Точки посадки в аэропорту лучше проверить заранее.',
      },
      {
        key: 'housing',
        title: 'Поиск жилья',
        georgia:
          'MyHome.ge, SS.ge и местные группы дают общее представление о рынке. До сделки проверьте район, транспорт, владельца и условия депозита.',
        serbia:
          'Сравнивать объявления можно на 4zida, Halo Oglasi и Nekretnine.rs. В большом городе особенно важны район и время в пути.',
      },
      {
        key: 'banking',
        title: 'Банки и деньги',
        georgia:
          'В городах часто принимают карты, но немного наличных в местной валюте может пригодиться. Условия открытия счёта зависят от банка и вашего статуса.',
        serbia:
          'Для повседневных расходов используется сербский динар. Список документов и доступность счёта зависят от банка, статуса пребывания и вашей ситуации.',
      },
      {
        key: 'apps',
        title: 'Полезные приложения и сайты',
        georgia:
          'Приложения для такси, доставки, карт и жилья закрывают многие задачи первой недели. Полезно иметь несколько вариантов на случай изменений.',
        serbia:
          'Особенно в Белграде есть много онлайн-сервисов для транспорта, жилья и доставки. Местные сайты могут быть не менее полезны, чем приложения.',
      },
      {
        key: 'dailyLife',
        title: 'Язык и повседневная жизнь',
        georgia:
          'Основной язык — грузинский; в некоторых городских ситуациях помогут английский или русский. Приложение-переводчик упростит бытовые задачи.',
        serbia:
          'Сербский язык использует кириллицу и латиницу. В крупных городах часто можно объясниться по-английски, но базовые местные фразы пригодятся.',
      },
      {
        key: 'bestFit',
        title: 'Кому может подойти каждая страна',
        georgia:
          'Грузия может подойти тем, кому важны компактная среда, быстрый старт с приложениями и гибкие поездки по региону — с учётом личной ситуации.',
        serbia:
          'Сербия может подойти тем, кто ориентируется на Белград, инфраструктуру большого города и региональные связи — в зависимости от планов и документов.',
      },
    ],
    cta: {
      title: 'Выбираете между Грузией и Сербией?',
      text: 'Начните с гайда по стране, которая ближе к вашему плану.',
      georgiaButton: 'Гид по Грузии',
      serbiaButton: 'Гид по Сербии',
    },
    linkCard: {
      title: 'Грузия или Сербия?',
      text: 'Сравните первые шаги, транспорт, жильё, банки и повседневную жизнь.',
      button: 'Сравнить страны',
    },
  },
};
