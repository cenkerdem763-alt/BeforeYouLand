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
  steps: string[];
  documents: string[];
  costs: string[];
  mistakes: string[];
  links: { label: string; url: string }[];
  faq: { question: string; answer: string }[];
};

const countryNames = {
  en: { georgia: 'Georgia', serbia: 'Serbia' },
  tr: { georgia: 'Gürcistan', serbia: 'Sırbistan' },
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
      { label: 'Government portal', url: country === 'georgia' ? 'https://www.gov.ge/' : 'https://www.srbija.gov.rs/' },
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
      { label: 'Resmi devlet portalı', url: country === 'georgia' ? 'https://www.gov.ge/' : 'https://www.srbija.gov.rs/' },
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

export const guides: Guide[] = [
  enGuide('georgia', 'sim-card', 'High', 'Buy a tourist SIM at the airport for speed, or visit Magti, Silknet or Cellfie shops in the city for better plan comparison.', ['Compare coverage for the city where you will stay.', 'Bring your passport to the operator shop.', 'Ask for a data-focused prepaid plan and confirm hotspot use.', 'Test calls, data and top-up before leaving the counter.'], ['Passport', 'Unlocked phone', 'Local address or hotel name if requested'], ['Airport counters are convenient but may be more expensive.', 'City shops often have broader plan options.', 'Keep a small GEL cash buffer for top-ups.'], ['Buying before checking whether your phone is unlocked.', 'Leaving without testing mobile data.', 'Choosing only by price instead of coverage.']),
  enGuide('georgia', 'esim', 'Medium', 'eSIM is convenient if your phone supports it, but local physical SIMs may still offer stronger value for long stays.', ['Check that your phone supports eSIM and is carrier-unlocked.', 'Compare travel eSIM packages before departure.', 'Install the eSIM while you still have stable Wi-Fi.', 'Keep your primary SIM available for banking codes if needed.'], ['Passport may not be needed for travel eSIMs', 'eSIM-compatible phone', 'Payment card'], ['Travel eSIMs usually cost more per GB.', 'Local operator eSIM availability can change by branch.', 'Top-ups are easiest through the provider app.'], ['Deleting the QR code before activation is complete.', 'Assuming every operator branch can issue eSIM.', 'Forgetting that some plans are data-only.']),
  enGuide('georgia', 'bank-account', 'Medium', 'Bank accounts are possible for many visitors, but requirements vary. Expect passport checks and possible proof of address, income or purpose.', ['Shortlist major banks before arrival.', 'Book time for an in-branch visit.', 'Bring printed or digital supporting documents.', 'Ask about monthly fees, card issuance and foreign transfers.', 'Activate online banking before leaving the branch.'], ['Passport', 'Phone number', 'Local address', 'Proof of income or purpose if requested'], ['Monthly account and card fees may apply.', 'International transfer fees vary widely.', 'Premium packages are not always necessary.'], ['Arriving without a local phone number.', 'Not asking about account maintenance fees.', 'Assuming rules are identical across branches.']),
  enGuide('georgia', 'rent-apartment', 'Medium', 'For first arrival, book temporary housing first, then inspect long-term apartments in person before paying a deposit.', ['Use temporary accommodation for the first week.', 'Compare neighborhoods by commute and noise.', 'Inspect heating, water pressure, internet and building access.', 'Confirm deposit, utilities and contract term in writing.', 'Avoid paying large sums before meeting the owner or agent.'], ['Passport copy may be requested', 'Deposit funds', 'Written lease or message trail'], ['Deposits are often one month, sometimes more.', 'Utilities may be separate from rent.', 'Agent fees depend on the arrangement.'], ['Signing without checking utilities.', 'Paying before seeing the apartment.', 'Ignoring winter heating quality.']),
  enGuide('georgia', 'transport', 'High', 'Use ride-hailing for simple arrivals and a transport card or contactless payment for regular city travel where supported.', ['Install ride-hailing apps before arrival.', 'Check airport pickup zones.', 'For public transport, buy or configure the local payment method.', 'Keep small cash for backup outside central areas.'], ['Payment card', 'Phone with data', 'Transport card if needed'], ['Airport rides cost more than city trips.', 'Public transport remains the cheapest daily option.', 'Intercity marshrutka and train prices vary by route.'], ['Accepting unofficial taxi offers without agreeing price.', 'Assuming card payment works everywhere.', 'Not checking last departure times.']),
  enGuide('serbia', 'sim-card', 'High', 'Prepaid SIMs are easy to find in Belgrade and major cities. Bring your passport and compare Yettel, A1 and mts options.', ['Decide whether you need data only or calls too.', 'Visit an official operator shop or trusted kiosk.', 'Register with your passport if required.', 'Confirm roaming, hotspot and top-up rules.', 'Save the provider app for balance checks.'], ['Passport', 'Unlocked phone', 'Payment card or cash'], ['Starter packs are usually affordable.', 'Tourist bundles may include large data allowances.', 'Top-up channels vary by provider.'], ['Buying from an unclear reseller.', 'Not confirming registration rules.', 'Forgetting to save the SIM PIN or app login.']),
  enGuide('serbia', 'esim', 'Medium', 'Travel eSIMs work well for immediate connectivity, while local eSIM options should be checked directly with operators.', ['Confirm device compatibility.', 'Buy and install before travel if you need data on landing.', 'Keep the QR code until service is active.', 'Compare local operator options after arrival for longer stays.'], ['eSIM-compatible unlocked phone', 'Payment card', 'Passport for local operator plans if requested'], ['Travel eSIMs are convenient but often pricier.', 'Local eSIM policies can differ by operator.', 'Data-only packages do not support local calls.'], ['Activating too early if validity starts immediately.', 'Expecting SMS support on data-only eSIM.', 'Not keeping airport Wi-Fi as backup.']),
  enGuide('serbia', 'bank-account', 'Medium', 'Banking can require more paperwork in Serbia. Prepare passport, local registration details and a clear reason for opening the account.', ['Compare banks that serve non-residents.', 'Ask what documents are required before visiting.', 'Bring proof of address or stay registration if available.', 'Review account, card and transfer fees.', 'Test mobile banking and card activation.'], ['Passport', 'Local phone number', 'Address or white card if available', 'Employment, income or purpose documents if requested'], ['Maintenance fees and transfer fees vary.', 'Card issuance may take several days.', 'Some banks charge more for non-resident services.'], ['Going without an appointment when the branch is busy.', 'Not asking about non-resident restrictions.', 'Leaving before mobile banking is fully active.']),
  enGuide('serbia', 'rent-apartment', 'Medium', 'Start with short-term accommodation, then inspect apartments and clarify registration, utilities and deposit terms before committing.', ['Pick temporary accommodation near your target area.', 'View apartments in daylight if possible.', 'Ask whether the landlord can support address registration.', 'Confirm utilities, internet and building costs.', 'Put deposit and move-in terms in writing.'], ['Passport', 'Deposit funds', 'Lease or written agreement', 'Stay registration details for longer stays'], ['Deposits commonly equal one month of rent.', 'Utilities and building fees may be separate.', 'Prices vary strongly by Belgrade neighborhood.'], ['Not discussing address registration.', 'Underestimating winter utility costs.', 'Sending deposit before verifying ownership or agency details.']),
  enGuide('serbia', 'transport', 'High', 'Belgrade is easy to navigate with buses, trams, walking and ride-hailing. Check current ticketing rules locally because systems can change.', ['Install map and ride-hailing apps.', 'Check public transport payment rules for your city.', 'Use official airport transfer or app-based rides on arrival.', 'For intercity travel, compare bus and train schedules.'], ['Phone with data', 'Payment card or local payment option', 'ID for intercity tickets when requested'], ['City transport is usually low cost.', 'Airport transfers and app rides cost more.', 'Intercity buses can be faster than trains on some routes.'], ['Using outdated ticketing advice.', 'Boarding intercity transport without checking platform changes.', 'Taking unofficial airport taxi offers.']),
  trGuide('georgia', 'sim-card', 'High', 'Hız için havalimanında turist SIM alın; daha iyi paket karşılaştırması için şehirde Magti, Silknet veya Cellfie mağazalarına bakın.', ['Kalacağınız şehir için kapsama alanını karşılaştırın.', 'Operatör mağazasına pasaportunuzla gidin.', 'Veri ağırlıklı hazır kart paketi isteyin ve hotspot kullanımını sorun.', 'Mağazadan ayrılmadan arama, internet ve yükleme işlemini test edin.'], ['Pasaport', 'SIM kilidi olmayan telefon', 'İstenirse otel adı veya yerel adres'], ['Havalimanı tezgahları pratik ama daha pahalı olabilir.', 'Şehir mağazalarında daha fazla paket seçeneği bulunur.', 'Yükleme için az miktarda GEL nakit bulundurmak iyi olur.'], ['Telefonun SIM kilidini kontrol etmeden almak.', 'Mobil veriyi test etmeden ayrılmak.', 'Kapsama yerine sadece fiyata bakmak.']),
  trGuide('georgia', 'esim', 'Medium', 'Telefonunuz destekliyorsa eSIM pratiktir; uzun kalışlarda yerel fiziksel SIM daha avantajlı olabilir.', ['Telefonun eSIM desteklediğini ve kilitsiz olduğunu kontrol edin.', 'Seyahat eSIM paketlerini yola çıkmadan karşılaştırın.', 'eSIM’i stabil Wi-Fi varken kurun.', 'Banka doğrulama kodları için ana SIM’inizi erişilebilir tutun.'], ['Seyahat eSIM için pasaport gerekmeyebilir', 'eSIM destekli telefon', 'Ödeme kartı'], ['Seyahat eSIM’leri GB başına daha pahalı olabilir.', 'Yerel operatör eSIM durumu şubeye göre değişebilir.', 'Yüklemeler genelde sağlayıcı uygulamasından kolaydır.'], ['Aktivasyon bitmeden QR kodunu silmek.', 'Her şubenin eSIM verdiğini varsaymak.', 'Bazı paketlerin sadece data olduğunu unutmak.']),
  trGuide('georgia', 'bank-account', 'Medium', 'Birçok ziyaretçi için banka hesabı mümkün olabilir; pasaport kontrolü ve adres, gelir veya amaç belgesi istenebilir.', ['Gelmeden önce büyük bankaları listeleyin.', 'Şube ziyareti için zaman ayırın.', 'Destekleyici belgeleri dijital veya basılı hazırlayın.', 'Aylık ücret, kart çıkarma ve yurtdışı transfer ücretlerini sorun.', 'Şubeden ayrılmadan internet bankacılığını aktive edin.'], ['Pasaport', 'Telefon numarası', 'Yerel adres', 'İstenirse gelir veya amaç belgesi'], ['Aylık hesap ve kart ücretleri olabilir.', 'Uluslararası transfer ücretleri ciddi değişir.', 'Premium paket her zaman gerekli değildir.'], ['Yerel telefon numarası olmadan gitmek.', 'Hesap işletim ücretini sormamak.', 'Tüm şubelerde kurallar aynı sanmak.']),
  trGuide('georgia', 'rent-apartment', 'Medium', 'İlk varışta geçici konaklama ayarlayın, uzun dönem evi depozito ödemeden önce yerinde görün.', ['İlk hafta için geçici konaklama kullanın.', 'Semtleri ulaşım ve gürültüye göre karşılaştırın.', 'Isıtma, su basıncı, internet ve bina girişini kontrol edin.', 'Depozito, faturalar ve kontrat süresini yazılı netleştirin.', 'Ev sahibi veya emlakçıyla görüşmeden yüksek ödeme yapmayın.'], ['Pasaport kopyası istenebilir', 'Depozito bütçesi', 'Yazılı kira sözleşmesi veya mesaj kaydı'], ['Depozito genelde bir ay, bazen daha fazladır.', 'Faturalar kiradan ayrı olabilir.', 'Emlakçı ücreti anlaşmaya bağlıdır.'], ['Faturaları kontrol etmeden imzalamak.', 'Evi görmeden ödeme yapmak.', 'Kış ısınma kalitesini önemsememek.']),
  trGuide('georgia', 'transport', 'High', 'Varışta uygulama taksileri pratik; şehir içinde desteklenen yerlerde ulaşım kartı veya temassız ödeme kullanın.', ['Ulaşım uygulamalarını gelmeden kurun.', 'Havalimanı araç çağırma noktalarını kontrol edin.', 'Toplu taşıma için yerel ödeme yöntemini alın veya ayarlayın.', 'Merkez dışı bölgeler için az miktar nakit tutun.'], ['Ödeme kartı', 'İnternetli telefon', 'Gerekiyorsa ulaşım kartı'], ['Havalimanı yolculukları şehir içinden pahalıdır.', 'Günlük kullanımda toplu taşıma en ucuz seçenektir.', 'Şehirler arası minibüs ve tren fiyatları rotaya göre değişir.'], ['Fiyat konuşmadan resmi olmayan taksiye binmek.', 'Her yerde kart geçtiğini varsaymak.', 'Son sefer saatlerini kontrol etmemek.']),
  trGuide('serbia', 'sim-card', 'High', 'Belgrad ve büyük şehirlerde hazır kart SIM bulmak kolaydır. Pasaportunuzu alın ve Yettel, A1, mts seçeneklerini karşılaştırın.', ['Sadece data mı, arama da mı gerektiğine karar verin.', 'Resmi operatör mağazasına veya güvenilir satış noktasına gidin.', 'Gerekirse pasaportla kayıt yaptırın.', 'Roaming, hotspot ve yükleme kurallarını netleştirin.', 'Bakiye kontrolü için sağlayıcı uygulamasını kaydedin.'], ['Pasaport', 'SIM kilidi olmayan telefon', 'Ödeme kartı veya nakit'], ['Başlangıç paketleri genelde erişilebilirdir.', 'Turist paketlerinde yüksek data olabilir.', 'Yükleme kanalları sağlayıcıya göre değişir.'], ['Belirsiz satıcıdan almak.', 'Kayıt kurallarını sormamak.', 'SIM PIN veya uygulama girişini kaydetmemek.']),
  trGuide('serbia', 'esim', 'Medium', 'Seyahat eSIM’i ilk bağlantı için iyi çalışır; yerel eSIM seçeneklerini doğrudan operatörlerle kontrol etmek gerekir.', ['Cihaz uyumluluğunu doğrulayın.', 'İnişte internet gerekiyorsa seyahatten önce satın alıp kurun.', 'Hizmet aktif olana kadar QR kodunu saklayın.', 'Uzun kalış için varıştan sonra yerel operatörleri karşılaştırın.'], ['Kilitsiz ve eSIM uyumlu telefon', 'Ödeme kartı', 'Yerel operatör planı için istenirse pasaport'], ['Seyahat eSIM pratik ama çoğu zaman daha pahalıdır.', 'Yerel eSIM politikası operatöre göre değişebilir.', 'Sadece data paketleri yerel arama sunmaz.'], ['Geçerlilik hemen başlıyorsa çok erken aktive etmek.', 'Data-only eSIM’den SMS beklemek.', 'Havalimanı Wi-Fi yedeği bırakmamak.']),
  trGuide('serbia', 'bank-account', 'Medium', 'Sırbistan’da bankacılık daha fazla evrak gerektirebilir. Pasaport, yerel kayıt bilgisi ve hesap açma amacınızı hazırlayın.', ['Yabancılarla çalışan bankaları karşılaştırın.', 'Şubeye gitmeden önce belge listesini sorun.', 'Varsa adres veya konaklama kayıt belgesini getirin.', 'Hesap, kart ve transfer ücretlerini inceleyin.', 'Mobil bankacılık ve kart aktivasyonunu test edin.'], ['Pasaport', 'Yerel telefon numarası', 'Varsa adres veya white card', 'İstenirse iş, gelir veya amaç belgeleri'], ['Hesap işletim ve transfer ücretleri değişir.', 'Kart basımı birkaç gün sürebilir.', 'Bazı bankalar yabancılar için daha yüksek ücret alabilir.'], ['Yoğun şubeye randevusuz gitmek.', 'Yabancı müşteri kısıtlarını sormamak.', 'Mobil bankacılık aktif olmadan ayrılmak.']),
  trGuide('serbia', 'rent-apartment', 'Medium', 'Kısa dönem konaklamayla başlayın; daireleri yerinde görün ve kayıt, faturalar, depozito şartlarını netleştirin.', ['Hedef bölgenize yakın geçici konaklama seçin.', 'Mümkünse daireyi gündüz görün.', 'Ev sahibinin adres kaydına destek verip vermediğini sorun.', 'Faturalar, internet ve bina giderlerini netleştirin.', 'Depozito ve taşınma şartlarını yazılı tutun.'], ['Pasaport', 'Depozito bütçesi', 'Kira sözleşmesi veya yazılı anlaşma', 'Uzun kalış için kayıt bilgileri'], ['Depozito çoğu zaman bir aylık kiradır.', 'Faturalar ve bina giderleri ayrı olabilir.', 'Belgrad semtlerine göre fiyatlar çok değişir.'], ['Adres kaydını konuşmamak.', 'Kış fatura maliyetini düşük tahmin etmek.', 'Mülk veya emlakçı bilgilerini doğrulamadan depozito göndermek.']),
  trGuide('serbia', 'transport', 'High', 'Belgrad’da otobüs, tramvay, yürüyüş ve araç çağırma uygulamalarıyla ulaşım kolaydır. Bilet sistemi değişebileceği için güncel kuralları yerelde kontrol edin.', ['Harita ve araç çağırma uygulamalarını kurun.', 'Bulunduğunuz şehir için toplu taşıma ödeme kurallarını kontrol edin.', 'Varışta resmi havalimanı transferi veya uygulama aracı kullanın.', 'Şehirler arası için otobüs ve tren saatlerini karşılaştırın.'], ['İnternetli telefon', 'Ödeme kartı veya yerel ödeme seçeneği', 'Şehirler arası bilet için istenirse kimlik'], ['Şehir içi ulaşım genelde düşük maliyetlidir.', 'Havalimanı transferleri ve uygulama yolculukları daha pahalıdır.', 'Bazı rotalarda şehirler arası otobüs trenden hızlı olabilir.'], ['Eski bilet bilgisine güvenmek.', 'Peron değişikliklerini kontrol etmeden binmek.', 'Resmi olmayan havalimanı taksisine binmek.']),
];

export const findGuide = (language: Language, country: CountryKey, topic: TopicKey) =>
  guides.find((guide) => guide.language === language && guide.country === country && guide.topic === topic);
