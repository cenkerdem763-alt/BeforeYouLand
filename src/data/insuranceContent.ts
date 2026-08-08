import type { Language } from './i18n';

export interface InsuranceContent {
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  whyTitle: string;
  whyPoints: string[];
  whatTitle: string;
  whatPoints: string[];
  pickTitle: string;
  pickText: string;
  ctaText: string;
  affiliateDisclosure: string;
  disclaimer: string;
}

export const insuranceContent: Record<Language, InsuranceContent> = {
  en: {
    seoTitle: 'First Week Guide | Travel Insurance for Your First Week Abroad',
    metaDescription:
      'A practical introduction to travel insurance for newcomers, expats and remote workers preparing for their first week abroad.',
    eyebrow: 'First-week travel insurance',
    h1: 'Protect your first week abroad',
    intro:
      "Landing in a new country is exciting, but it can take time to understand the local healthcare system and arrange longer-term coverage. Travel insurance may help bridge that gap, depending on the plan, destination and policy terms.",
    whyTitle: 'Why consider it for week one',
    whyPoints: [
      'Unexpected illnesses or injuries can happen before you understand the local healthcare system',
      'Some plans include benefits for eligible travel delays or lost checked luggage',
      'Certain destinations, visas or residence processes may require proof of suitable insurance',
      'Local or long-term coverage may not be active from the day you arrive',
    ],
    whatTitle: 'What to check before buying',
    whatPoints: [
      'Coverage start and end dates, including any waiting periods',
      'Destination eligibility, geographic limits and country-specific exclusions',
      'Medical, luggage and electronics benefits, limits, deductibles and optional add-ons',
      'Extension, renewal and cancellation rules if your plans change',
    ],
    pickTitle: 'An option to compare: SafetyWing Nomad Insurance',
    pickText:
      'SafetyWing offers insurance products designed for international travelers and people living abroad. Compare its available plans, add-ons, exclusions and full policy wording with other suitable options before deciding.',
    ctaText: 'See current plans and pricing',
    affiliateDisclosure:
      'Affiliate disclosure: If you purchase through this link, First Week Guide may earn a commission at no extra cost to you.',
    disclaimer:
      'This page is general information, not insurance, legal or financial advice. Coverage, eligibility, pricing and exclusions vary. Read the current policy wording and confirm visa or destination requirements before purchasing.',
  },
  tr: {
    seoTitle: 'First Week Guide | Yurt Dışındaki İlk Haftan İçin Seyahat Sigortası',
    metaDescription:
      'Yeni gelenler, expat’lar ve uzaktan çalışanlar için yurt dışındaki ilk haftaya yönelik pratik seyahat sigortası bilgileri.',
    eyebrow: 'İlk hafta seyahat sigortası',
    h1: 'Yurt dışındaki ilk haftanı güvence altına al',
    intro:
      'Yeni bir ülkeye varmak heyecan vericidir; ancak yerel sağlık sistemini anlamak ve uzun vadeli güvence ayarlamak zaman alabilir. Seyahat sigortası, plana, gidilen ülkeye ve poliçe koşullarına bağlı olarak bu geçiş dönemine yardımcı olabilir.',
    whyTitle: 'İlk hafta için neden değerlendirmelisin',
    whyPoints: [
      'Yerel sağlık sistemini öğrenmeden önce beklenmedik hastalık veya yaralanmalar yaşanabilir',
      'Bazı planlar uygun seyahat gecikmeleri veya kayıp kayıtlı bagaj için teminat içerebilir',
      'Bazı ülkeler, vizeler veya oturum süreçleri uygun sigorta kanıtı isteyebilir',
      'Yerel veya uzun vadeli sigortan vardığın gün aktif olmayabilir',
    ],
    whatTitle: 'Satın almadan önce neleri kontrol etmelisin',
    whatPoints: [
      'Varsa bekleme süreleriyle birlikte teminatın başlangıç ve bitiş tarihleri',
      'Ülke uygunluğu, coğrafi sınırlar ve ülkeye özel istisnalar',
      'Sağlık, bagaj ve elektronik eşya teminatları, limitler, muafiyetler ve ek paketler',
      'Planların değişirse uzatma, yenileme ve iptal koşulları',
    ],
    pickTitle: 'Karşılaştırabileceğin bir seçenek: SafetyWing Nomad Insurance',
    pickText:
      'SafetyWing, uluslararası seyahat edenler ve yurt dışında yaşayanlar için sigorta ürünleri sunar. Karar vermeden önce mevcut planlarını, ek teminatlarını, istisnalarını ve poliçe metnini diğer uygun seçeneklerle karşılaştır.',
    ctaText: 'Güncel planları ve fiyatları gör',
    affiliateDisclosure:
      'Affiliate açıklaması: Bu bağlantı üzerinden satın alırsan First Week Guide, sana ek maliyet oluşturmadan komisyon kazanabilir.',
    disclaimer:
      'Bu sayfa genel bilgilendirme amaçlıdır; sigorta, hukuk veya finans tavsiyesi değildir. Teminat, uygunluk, fiyat ve istisnalar değişebilir. Satın almadan önce güncel poliçe metnini oku ve vize ya da ülke şartlarını doğrula.',
  },
  ru: {
    seoTitle: 'First Week Guide | Туристическая страховка на первую неделю за границей',
    metaDescription:
      'Практичная информация о туристической страховке для новичков, экспатов и удалённых работников на первую неделю за границей.',
    eyebrow: 'Страховка на первую неделю',
    h1: 'Защити свою первую неделю за границей',
    intro:
      'Приезд в новую страну — это волнительно, но знакомство с местной системой здравоохранения и оформление долгосрочной защиты могут занять время. Туристическая страховка может помочь в этот переходный период — в зависимости от плана, страны и условий полиса.',
    whyTitle: 'Почему стоит подумать об этом в первую неделю',
    whyPoints: [
      'Неожиданная болезнь или травма возможна ещё до знакомства с местной системой здравоохранения',
      'Некоторые планы предусматривают выплаты при подходящих случаях задержки поездки или потери зарегистрированного багажа',
      'Отдельные страны, визы или процедуры ВНЖ могут требовать подтверждение подходящей страховки',
      'Местная или долгосрочная страховка может не действовать с первого дня после приезда',
    ],
    whatTitle: 'Что проверить перед покупкой',
    whatPoints: [
      'Даты начала и окончания покрытия, включая возможные периоды ожидания',
      'Доступность в стране назначения, географические ограничения и исключения',
      'Медицинское покрытие, багаж и электроника, лимиты, франшизы и дополнительные опции',
      'Условия продления, обновления и отмены при изменении планов',
    ],
    pickTitle: 'Один из вариантов для сравнения: SafetyWing Nomad Insurance',
    pickText:
      'SafetyWing предлагает страховые продукты для международных путешественников и живущих за границей. Перед решением сравните доступные планы, дополнительные опции, исключения и полный текст полиса с другими подходящими вариантами.',
    ctaText: 'Посмотреть актуальные планы и цены',
    affiliateDisclosure:
      'Партнёрское уведомление: если вы купите страховку по этой ссылке, First Week Guide может получить комиссию без дополнительных расходов для вас.',
    disclaimer:
      'Это общая информация, а не страховая, юридическая или финансовая консультация. Покрытие, доступность, цены и исключения различаются. До покупки прочитайте актуальные условия полиса и проверьте требования визы или страны назначения.',
  },
};

export const insuranceBannerText: Record<
  Language,
  { title: string; subtitle: string; cta: string }
> = {
  en: {
    title: 'Landing soon? Check your coverage.',
    subtitle: 'Compare travel insurance for your first week abroad.',
    cta: 'Check plans',
  },
  tr: {
    title: 'Yakında mı varıyorsun? Teminatını kontrol et.',
    subtitle: 'Yurt dışındaki ilk haftan için seyahat sigortasını karşılaştır.',
    cta: 'Planlara bak',
  },
  ru: {
    title: 'Скоро приезжаете? Проверьте страховое покрытие.',
    subtitle: 'Сравните страховку на первую неделю за границей.',
    cta: 'Посмотреть планы',
  },
};

export const SAFETYWING_AFFILIATE_URL =
  'https://safetywing.com/nomad-insurance?referenceID=26577952&utm_source=26577952&utm_medium=Ambassador';
