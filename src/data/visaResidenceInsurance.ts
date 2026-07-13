import type { CountryKey } from './countries';
import type { Language } from './i18n';

export type VisaResidenceItem = {
  title: string;
  text: string;
};

export type OfficialSource = {
  label: string;
  url: string;
};

type VisaResidenceInsuranceContent = {
  items: VisaResidenceItem[];
  disclaimer: string;
  sources: OfficialSource[];
};

export const visaResidenceInsurance: Record<
  CountryKey,
  Record<Language, VisaResidenceInsuranceContent>
> = {
  georgia: {
    en: {
      items: [
        {
          title: 'Check whether you need a visa',
          text: 'Entry rules may depend on your nationality, passport and purpose of travel. Check the current requirement before booking or departing.',
        },
        {
          title: 'Confirm your permitted stay',
          text: 'The length and conditions of a stay can vary by passport and situation. Use official sources for the rule that applies to you.',
        },
        {
          title: 'Understand longer-stay requirements',
          text: 'Residence or other formalities may apply when plans extend beyond a short visit. Check the current process before making commitments.',
        },
        {
          title: 'Consider travel or health insurance',
          text: 'Suitable cover before arrival can help with unexpected medical or travel situations. Compare exclusions and coverage carefully.',
        },
        {
          title: 'Keep important documents accessible',
          text: 'Keep your passport, entry stamp, accommodation details and insurance documents secure and available when needed.',
        },
        {
          title: 'Verify rules before decisions',
          text: 'Official requirements can change. Recheck current government information before travel, residence or insurance decisions.',
        },
      ],
      disclaimer:
        'Rules can change and depend on your nationality, passport, purpose of stay and personal situation. Always check official sources before making travel or residence decisions.',
      sources: [
        {
          label: 'GeoConsul — Entering Georgia',
          url: 'https://www.geoconsul.gov.ge/en/entering-georgia',
        },
        {
          label: 'Georgia official e-Visa portal',
          url: 'https://www.evisa.gov.ge/GeoVisa/',
        },
      ],
    },
    tr: {
      items: [
        {
          title: 'Gitmeden önce vize durumunu kontrol et',
          text: "Gürcistan'a giriş kuralları vatandaşlığa, pasaporta ve geliş amacına göre değişebilir. Rezervasyon veya seyahat öncesinde güncel şartı kontrol et.",
        },
        {
          title: 'İzin verilen kalış süresini doğrula',
          text: 'Kalış süresi ve şartları pasaporta ve kişisel duruma göre farklı olabilir. Sana uygulanan kuralı resmi kaynaklardan kontrol et.',
        },
        {
          title: 'Uzun kalış şartlarını önceden öğren',
          text: 'Kısa ziyaretin ötesine geçen planlarda oturum veya başka resmi işlemler gerekebilir. Karar vermeden önce güncel süreci incele.',
        },
        {
          title: 'Seyahat veya sağlık sigortasını değerlendir',
          text: 'Uygun bir sigorta beklenmedik sağlık ve seyahat durumlarında yardımcı olabilir. Kapsamı ve istisnaları dikkatle karşılaştır.',
        },
        {
          title: 'Önemli belgeleri erişilebilir tut',
          text: 'Pasaport, giriş damgası, konaklama bilgileri ve sigorta belgelerini güvenli ama gerektiğinde erişilebilir şekilde sakla.',
        },
        {
          title: 'Karar vermeden önce kuralları doğrula',
          text: 'Resmi şartlar değişebilir. Seyahat, oturum veya sigorta kararı öncesinde güncel devlet bilgilerini yeniden kontrol et.',
        },
      ],
      disclaimer:
        'Kurallar vatandaşlığa, pasaporta, geliş amacına ve kişisel duruma göre değişebilir. Seyahat veya oturum kararı vermeden önce her zaman resmi kaynakları kontrol et.',
      sources: [
        {
          label: "GeoConsul — Gürcistan'a giriş",
          url: 'https://www.geoconsul.gov.ge/en/entering-georgia',
        },
        {
          label: 'Gürcistan resmi e-Vize portalı',
          url: 'https://www.evisa.gov.ge/GeoVisa/',
        },
      ],
    },
    ru: {
      items: [
        {
          title: 'Заранее проверьте, нужна ли виза',
          text: 'Правила въезда могут зависеть от гражданства, паспорта и цели поездки. Уточните актуальные требования до бронирования и выезда.',
        },
        {
          title: 'Уточните допустимый срок пребывания',
          text: 'Срок и условия могут различаться в зависимости от паспорта и личной ситуации. Проверяйте правило, которое относится именно к вам.',
        },
        {
          title: 'Разберитесь с условиями длительного проживания',
          text: 'Для планов дольше короткой поездки могут потребоваться ВНЖ или другие формальности. Заранее проверьте актуальную процедуру.',
        },
        {
          title: 'Подумайте о туристической или медицинской страховке',
          text: 'Подходящий полис может помочь при непредвиденных медицинских и дорожных ситуациях. Внимательно сравните покрытие и исключения.',
        },
        {
          title: 'Держите важные документы под рукой',
          text: 'Храните паспорт, въездной штамп, данные о жилье и страховые документы безопасно и доступно при необходимости.',
        },
        {
          title: 'Перепроверяйте правила перед решениями',
          text: 'Официальные требования могут меняться. Перед поездкой, проживанием или выбором страховки снова проверьте государственные источники.',
        },
      ],
      disclaimer:
        'Правила могут меняться и зависят от гражданства, паспорта, цели поездки и личной ситуации. Перед поездкой или оформлением проживания всегда проверяйте официальные источники.',
      sources: [
        {
          label: 'GeoConsul — въезд в Грузию',
          url: 'https://www.geoconsul.gov.ge/en/entering-georgia',
        },
        {
          label: 'Официальный портал электронной визы Грузии',
          url: 'https://www.evisa.gov.ge/GeoVisa/',
        },
      ],
    },
  },
  serbia: {
    en: {
      items: [
        {
          title: 'Check your visa and entry rules',
          text: "Serbia's entry rules may depend on your nationality, passport and purpose of stay. Check the current requirement before travel.",
        },
        {
          title: 'Confirm your permitted stay',
          text: 'The length and conditions of a stay can vary by passport and situation. Use official sources for the rule that applies to you.',
        },
        {
          title: 'Check registration and residence basics',
          text: 'Registration, temporary stay or residence rules may apply depending on your accommodation and plans. Confirm the current process.',
        },
        {
          title: 'Consider travel or health insurance',
          text: 'Suitable cover before arrival can help with unexpected medical or travel situations. Compare exclusions and coverage carefully.',
        },
        {
          title: 'Keep important documents accessible',
          text: 'Keep your passport, registration details, accommodation information and insurance documents secure and available when needed.',
        },
        {
          title: 'Verify rules before decisions',
          text: 'Official requirements can change. Recheck current government information before travel, residence or insurance decisions.',
        },
      ],
      disclaimer:
        'Rules can change and depend on your nationality, passport, purpose of stay and personal situation. Always check official sources before making travel or residence decisions.',
      sources: [
        {
          label: 'Serbia MFA — Visa requirements',
          url: 'https://mfa.gov.rs/en/citizens/travel-serbia/visa-requirements',
        },
        {
          label: 'Serbia MFA — Visa regime',
          url: 'https://mfa.gov.rs/en/citizens/travel-serbia/visa-regime',
        },
      ],
    },
    tr: {
      items: [
        {
          title: 'Vize ve giriş kurallarını kontrol et',
          text: "Sırbistan'a giriş kuralları vatandaşlığa, pasaporta ve kalış amacına göre değişebilir. Seyahatten önce güncel şartı kontrol et.",
        },
        {
          title: 'İzin verilen kalış süresini doğrula',
          text: 'Kalış süresi ve şartları pasaporta ve kişisel duruma göre farklı olabilir. Sana uygulanan kuralı resmi kaynaklardan kontrol et.',
        },
        {
          title: 'Kayıt ve oturum şartlarını öğren',
          text: 'Konaklama ve planlara göre kayıt, geçici kalış veya oturum kuralları uygulanabilir. Güncel süreci resmi kaynaklardan doğrula.',
        },
        {
          title: 'Seyahat veya sağlık sigortasını değerlendir',
          text: 'Uygun bir sigorta beklenmedik sağlık ve seyahat durumlarında yardımcı olabilir. Kapsamı ve istisnaları dikkatle karşılaştır.',
        },
        {
          title: 'Önemli belgeleri erişilebilir tut',
          text: 'Pasaport, kayıt bilgileri, konaklama belgeleri ve sigorta dokümanlarını güvenli ama gerektiğinde erişilebilir şekilde sakla.',
        },
        {
          title: 'Karar vermeden önce kuralları doğrula',
          text: 'Resmi şartlar değişebilir. Seyahat, oturum veya sigorta kararı öncesinde güncel devlet bilgilerini yeniden kontrol et.',
        },
      ],
      disclaimer:
        'Kurallar vatandaşlığa, pasaporta, geliş amacına ve kişisel duruma göre değişebilir. Seyahat veya oturum kararı vermeden önce her zaman resmi kaynakları kontrol et.',
      sources: [
        {
          label: 'Sırbistan Dışişleri — Vize gereklilikleri',
          url: 'https://mfa.gov.rs/en/citizens/travel-serbia/visa-requirements',
        },
        {
          label: 'Sırbistan Dışişleri — Vize rejimi',
          url: 'https://mfa.gov.rs/en/citizens/travel-serbia/visa-regime',
        },
      ],
    },
    ru: {
      items: [
        {
          title: 'Заранее проверьте визовые правила',
          text: 'Правила въезда в Сербию зависят от гражданства, паспорта и цели поездки. Перед поездкой всегда проверяйте актуальные официальные требования.',
        },
        {
          title: 'Уточните допустимый срок пребывания',
          text: 'Срок и условия могут различаться в зависимости от паспорта и личной ситуации. Проверяйте правило, которое относится именно к вам.',
        },
        {
          title: 'Разберитесь с регистрацией и проживанием',
          text: 'В зависимости от жилья и планов могут действовать правила регистрации, временного пребывания или ВНЖ. Уточните актуальную процедуру.',
        },
        {
          title: 'Подумайте о туристической или медицинской страховке',
          text: 'Подходящий полис может помочь при непредвиденных медицинских и дорожных ситуациях. Внимательно сравните покрытие и исключения.',
        },
        {
          title: 'Держите важные документы под рукой',
          text: 'Храните паспорт, регистрационные данные, сведения о жилье и страховые документы безопасно и доступно при необходимости.',
        },
        {
          title: 'Перепроверяйте правила перед решениями',
          text: 'Официальные требования могут меняться. Перед поездкой, проживанием или выбором страховки снова проверьте государственные источники.',
        },
      ],
      disclaimer:
        'Правила могут меняться и зависят от гражданства, паспорта, цели поездки и личной ситуации. Перед поездкой или оформлением проживания всегда проверяйте официальные источники.',
      sources: [
        {
          label: 'МИД Сербии — визовые требования',
          url: 'https://mfa.gov.rs/en/citizens/travel-serbia/visa-requirements',
        },
        {
          label: 'МИД Сербии — визовый режим',
          url: 'https://mfa.gov.rs/en/citizens/travel-serbia/visa-regime',
        },
      ],
    },
  },
};
