import type { CountryKey } from './countries';
import type { Language } from './i18n';

export type ChecklistCategoryKey =
  | 'simMobile'
  | 'taxiTransport'
  | 'housing'
  | 'bankingMoney'
  | 'usefulApps'
  | 'documents'
  | 'emergencyNumbers'
  | 'safetyTips';

type LocalizedText = Record<Language, string>;

export type ChecklistCategory = {
  key: ChecklistCategoryKey;
  title: LocalizedText;
  items: LocalizedText[];
};

const sharedTitles: Record<ChecklistCategoryKey, LocalizedText> = {
  simMobile: {
    en: 'SIM card & mobile internet',
    tr: 'SIM kart ve mobil internet',
    ru: 'SIM-карта и мобильный интернет',
  },
  taxiTransport: {
    en: 'Taxi and transport apps',
    tr: 'Taksi ve ulaşım uygulamaları',
    ru: 'Такси и транспортные приложения',
  },
  housing: {
    en: 'Housing websites and local groups',
    tr: 'Ev siteleri ve yerel gruplar',
    ru: 'Сайты жилья и местные группы',
  },
  bankingMoney: {
    en: 'Banking and money basics',
    tr: 'Banka ve para temel bilgileri',
    ru: 'Банк и деньги: основы',
  },
  usefulApps: {
    en: 'Useful apps for maps, food and delivery',
    tr: 'Harita, yemek ve teslimat için uygulamalar',
    ru: 'Полезные приложения для карт, еды и доставки',
  },
  documents: {
    en: 'Important documents',
    tr: 'Önemli belgeler',
    ru: 'Важные документы',
  },
  emergencyNumbers: {
    en: 'Local emergency/useful numbers placeholder',
    tr: 'Yerel acil/faydalı numara alanı',
    ru: 'Местные экстренные/полезные номера',
  },
  safetyTips: {
    en: 'First-week safety/common sense tips',
    tr: 'İlk hafta güvenlik ve pratik dikkat noktaları',
    ru: 'Безопасность и здравый смысл в первую неделю',
  },
};

const category = (
  key: ChecklistCategoryKey,
  items: LocalizedText[],
): ChecklistCategory => ({
  key,
  title: sharedTitles[key],
  items,
});

export const firstWeekChecklists = {
  georgia: [
    category('simMobile', [
      {
        en: 'Bring your passport and check SIM activation before leaving the store.',
        tr: 'Pasaportunu yanında götür ve mağazadan çıkmadan SIM aktivasyonunu kontrol et.',
        ru: 'Возьмите паспорт и проверьте активацию SIM до выхода из магазина.',
      },
      {
        en: 'Save your provider app or top-up page while you still have Wi-Fi.',
        tr: 'Wi-Fi varken operatör uygulamasını veya yükleme sayfasını kaydet.',
        ru: 'Сохраните приложение оператора или страницу пополнения, пока есть Wi-Fi.',
      },
    ]),
    category('taxiTransport', [
      {
        en: 'Install Bolt or Yandex Go before arrival and add a payment card if you can.',
        tr: 'Gelmeden önce Bolt veya Yandex Go kur; mümkünse ödeme kartı ekle.',
        ru: 'Установите Bolt или Yandex Go до приезда и добавьте карту, если возможно.',
      },
      {
        en: 'For Tbilisi public transport, check TTC routes before your first long ride.',
        tr: 'Tiflis toplu taşıması için ilk uzun yolculuktan önce TTC hatlarını kontrol et.',
        ru: 'Для транспорта в Тбилиси проверьте маршруты TTC перед первой длинной поездкой.',
      },
    ]),
    category('housing', [
      {
        en: 'Start with short-term housing, then view apartments in person when possible.',
        tr: 'Kısa dönem konaklamayla başla, mümkünse daireleri yerinde gör.',
        ru: 'Начните с краткосрочного жилья, затем по возможности смотрите квартиры лично.',
      },
      {
        en: 'Use MyHome.ge, SS.ge and local groups, but verify the owner and deposit terms.',
        tr: 'MyHome.ge, SS.ge ve yerel grupları kullan; ev sahibi ve depozito şartlarını doğrula.',
        ru: 'Используйте MyHome.ge, SS.ge и местные группы, но проверяйте владельца и депозит.',
      },
    ]),
    category('bankingMoney', [
      {
        en: 'Keep some local cash for small shops, transport gaps and first-day needs.',
        tr: 'Küçük dükkanlar, ulaşım boşlukları ve ilk gün ihtiyaçları için biraz yerel nakit tut.',
        ru: 'Держите немного местных наличных для небольших магазинов, транспорта и первого дня.',
      },
      {
        en: 'If opening a bank account, ask the branch what documents they need before waiting.',
        tr: 'Banka hesabı açacaksan beklemeden önce şubeye hangi belgeleri istediklerini sor.',
        ru: 'Если открываете счёт, заранее спросите в отделении, какие документы нужны.',
      },
    ]),
    category('usefulApps', [
      {
        en: 'Download offline maps for your neighborhood and your first few saved places.',
        tr: 'Kalacağın bölge ve ilk kayıtlı yerler için çevrimdışı harita indir.',
        ru: 'Скачайте офлайн-карты района и первых важных мест.',
      },
      {
        en: 'Set up Wolt or Glovo only after checking address format and delivery area.',
        tr: 'Wolt veya Glovo’yu adres formatını ve teslimat bölgesini kontrol ederek kur.',
        ru: 'Настройте Wolt или Glovo после проверки адреса и зоны доставки.',
      },
    ]),
    category('documents', [
      {
        en: 'Keep passport photos or scans in a secure cloud folder and offline on your phone.',
        tr: 'Pasaport fotoğrafı/taramasını güvenli bulutta ve telefonda çevrimdışı sakla.',
        ru: 'Храните фото или сканы паспорта в защищённом облаке и офлайн на телефоне.',
      },
      {
        en: 'Save your accommodation address in English and local script if available.',
        tr: 'Konaklama adresini İngilizce ve varsa yerel yazımıyla kaydet.',
        ru: 'Сохраните адрес жилья на английском и, если есть, в местном написании.',
      },
    ]),
    category('emergencyNumbers', [
      {
        en: 'Save 112 and add your accommodation, embassy and insurance contacts.',
        tr: '112’yi kaydet; konaklama, konsolosluk/elçilik ve sigorta kişilerini ekle.',
        ru: 'Сохраните 112, контакты жилья, посольства/консульства и страховки.',
      },
      {
        en: 'Add a simple note for local useful numbers you learn after arrival.',
        tr: 'Vardıktan sonra öğrendiğin faydalı yerel numaralar için kısa bir not aç.',
        ru: 'Создайте заметку для полезных местных номеров, которые узнаете после приезда.',
      },
    ]),
    category('safetyTips', [
      {
        en: 'Use official counters or apps for airport rides when you are tired or offline.',
        tr: 'Yorgunken veya internetsizken havalimanı ulaşımı için resmi nokta ya da uygulama kullan.',
        ru: 'Для поездки из аэропорта используйте официальные стойки или приложения, особенно без интернета.',
      },
      {
        en: 'Do not send large housing deposits before you verify the place and terms.',
        tr: 'Evi ve şartları doğrulamadan yüksek depozito gönderme.',
        ru: 'Не отправляйте крупный депозит до проверки жилья и условий.',
      },
    ]),
  ],
  serbia: [
    category('simMobile', [
      {
        en: 'Bring your passport and test mobile data before leaving the operator store.',
        tr: 'Pasaportunu yanında götür ve operatör mağazasından çıkmadan mobil interneti test et.',
        ru: 'Возьмите паспорт и проверьте мобильный интернет до выхода из магазина оператора.',
      },
      {
        en: 'Compare prepaid packages and save the top-up method you plan to use.',
        tr: 'Hazır kart paketlerini karşılaştır ve kullanacağın yükleme yöntemini kaydet.',
        ru: 'Сравните предоплатные пакеты и сохраните способ пополнения.',
      },
    ]),
    category('taxiTransport', [
      {
        en: 'Install Yandex Go or CarGo before arrival and check pickup points at the airport.',
        tr: 'Gelmeden önce Yandex Go veya CarGo kur ve havalimanı biniş noktalarını kontrol et.',
        ru: 'Установите Yandex Go или CarGo до приезда и проверьте точки посадки в аэропорту.',
      },
      {
        en: 'For Belgrade public transport, check current payment rules before your first ride.',
        tr: 'Belgrad toplu taşıması için ilk yolculuktan önce güncel ödeme kurallarını kontrol et.',
        ru: 'Для транспорта в Белграде проверьте актуальные правила оплаты перед первой поездкой.',
      },
    ]),
    category('housing', [
      {
        en: 'Browse 4zida, Halo Oglasi and Nekretnine.rs to understand common listings.',
        tr: 'Yaygın ilanları anlamak için 4zida, Halo Oglasi ve Nekretnine.rs’e bak.',
        ru: 'Посмотрите 4zida, Halo Oglasi и Nekretnine.rs, чтобы понять типичные объявления.',
      },
      {
        en: 'Ask about registration support, bills and deposit terms before agreeing.',
        tr: 'Anlaşmadan önce adres kaydı desteği, faturalar ve depozito şartlarını sor.',
        ru: 'До согласия уточните регистрацию адреса, коммунальные платежи и депозит.',
      },
    ]),
    category('bankingMoney', [
      {
        en: 'Keep some local cash for transport, small shops and first-day errands.',
        tr: 'Ulaşım, küçük dükkanlar ve ilk gün işleri için biraz yerel nakit tut.',
        ru: 'Держите немного местных наличных для транспорта, магазинов и дел первого дня.',
      },
      {
        en: 'If you plan to open an account, ask the bank about passport, address and purpose requirements.',
        tr: 'Hesap açacaksan bankaya pasaport, adres ve hesap amacı şartlarını sor.',
        ru: 'Если планируете открыть счёт, уточните требования к паспорту, адресу и цели счёта.',
      },
    ]),
    category('usefulApps', [
      {
        en: 'Save offline maps for your area and the route back to your accommodation.',
        tr: 'Bulunduğun bölgeyi ve konaklamaya dönüş rotasını çevrimdışı kaydet.',
        ru: 'Сохраните офлайн-карты района и маршрут обратно к жилью.',
      },
      {
        en: 'Set up Wolt or Glovo after confirming your address and phone number work.',
        tr: 'Adresin ve telefon numaran çalışıyorsa Wolt veya Glovo’yu kur.',
        ru: 'Настройте Wolt или Glovo после проверки адреса и номера телефона.',
      },
    ]),
    category('documents', [
      {
        en: 'Keep passport scans, accommodation details and travel insurance in one secure place.',
        tr: 'Pasaport taraması, konaklama bilgisi ve seyahat sigortasını güvenli tek yerde tut.',
        ru: 'Храните сканы паспорта, данные жилья и страховку в одном защищённом месте.',
      },
      {
        en: 'Save your address and host contact for registration or delivery questions.',
        tr: 'Adres ve ev sahibi iletişimini kayıt veya teslimat soruları için kaydet.',
        ru: 'Сохраните адрес и контакт хозяина для регистрации или доставки.',
      },
    ]),
    category('emergencyNumbers', [
      {
        en: 'Save 112, plus police, ambulance and fire numbers if you prefer separate contacts.',
        tr: '112’yi kaydet; istersen polis, ambulans ve itfaiyeyi ayrı kişiler olarak ekle.',
        ru: 'Сохраните 112, а также полицию, скорую и пожарных как отдельные контакты при желании.',
      },
      {
        en: 'Add embassy, insurance and accommodation contacts to your phone notes.',
        tr: 'Elçilik/konsolosluk, sigorta ve konaklama kişilerini telefon notlarına ekle.',
        ru: 'Добавьте контакты посольства/консульства, страховки и жилья в заметки телефона.',
      },
    ]),
    category('safetyTips', [
      {
        en: 'Use app-based rides or agreed taxi points when arriving late or tired.',
        tr: 'Geç saatte veya yorgunken uygulama aracı ya da netleşmiş taksi noktası kullan.',
        ru: 'Поздно вечером или при усталости используйте приложения или понятные точки такси.',
      },
      {
        en: 'Do not send deposits or document copies before checking who you are dealing with.',
        tr: 'Kiminle konuştuğunu doğrulamadan depozito veya belge kopyası gönderme.',
        ru: 'Не отправляйте депозит или копии документов до проверки собеседника.',
      },
    ]),
  ],
} satisfies Record<CountryKey, ChecklistCategory[]>;
