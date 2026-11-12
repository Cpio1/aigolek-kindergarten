/**
 * Барлық мәтіндер мен байланыс деректері осы жерде.
 * Desktop және Mobile компоненттері осы файлдан ғана оқиды.
 */

export const kindergarten = {
  name: "Айгөлек",
  fullName: "«Айгөлек» балабақшасы",
  address: "Өжет ы/а, Жиенбаев көшесі, 14 үй",
  phone: "+7 708 934 76 92",
  phoneHref: "tel:+77089347692",
  whatsappNumber: "77089347692",
  whatsappMessage:
    "Сәлеметсіз бе! «Айгөлек» балабақшасы туралы ақпарат алғым келеді.",
  hours: "08:00–18:00",
  groupsCount: 2,
  ages: "1,6–6 жас",
  agesLong: "1,6 жастан 6 жасқа дейін",
  language: "Қазақ тілі",
  mealsPerDay: 5,
} as const;

export const whatsappUrl = `https://wa.me/${kindergarten.whatsappNumber}?text=${encodeURIComponent(
  kindergarten.whatsappMessage,
)}`;

/**
 * 2GIS: ұйымның ID-і белгісіз, сондықтан мекенжай бойынша іздеу сілтемесі қолданылады.
 * Нақты 2GIS виджет сілтемесі пайда болса, `embedUrl` өрісіне қойыңыз — сонда карта iframe ретінде көрсетіледі.
 */
export const map = {
  searchUrl: `https://2gis.kz/almaty/search/${encodeURIComponent("Ожет, Жиенбаева 14")}`,
  embedUrl: null as string | null,
};

/** Беттегі барлық бөлімдер (id-лер). «Басты бет» мәзірде жоқ — логотип арқылы оралады. */
export const sections = [
  { id: "home", label: "Басты бет" },
  { id: "about", label: "Біз туралы" },
  { id: "groups", label: "Топтар" },
  { id: "nutrition", label: "Тамақтану" },
  { id: "activities", label: "Үйірмелер" },
  { id: "gallery", label: "Галерея" },
  { id: "contacts", label: "Байланыс" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

/** Мәзір пункттері (Desktop, Mobile, footer) */
export const navItems = sections.filter((s) => s.id !== "home");

export const hero = {
  badge: "Қош келдіңіз!",
  titleQuoted: "«Айгөлек»",
  titleRest: "балабақшасы",
  subtitle: "Бақытты балалық шақ осы жерден басталады!",
  description:
    "Балаңыздың әр күні қуанышқа, жаңа білімге және қызықты жаңалықтарға толы болсын!",
  primaryCta: "Бізбен байланысу",
  secondaryCta: "Балабақша туралы",
  stats: [
    { value: "1,6–6", label: "жас" },
    { value: "2", label: "топ" },
    { value: "5", label: "мезгіл тамақ" },
  ],
};

export const about = {
  eyebrow: "Біз туралы",
  title: "Балалар үшін мейірімге толы орта",
  paragraphs: [
    "«Айгөлек» балабақшасында әр бала өзін үйдегідей жайлы сезінуі үшін жылы әрі мейірімді орта қалыптастырамыз.",
    "Күн сайын балалар ойнап, сөйлесіп, жаңа нәрселерді үйреніп, достарымен бірге өседі. Ойын, оқу және шығармашылық бір-бірімен үйлесім табады.",
  ],
  highlights: [
    { key: "lang", title: "Қазақ тілінде тәрбие", text: "Тәрбие мен оқу ана тілінде" },
    { key: "hours", title: kindergarten.hours, text: "Жұмыс уақыты" },
    { key: "ages", title: kindergarten.ages, text: "Балалардың жасы" },
    { key: "meals", title: "Күніне 5 рет", text: "тамақтану" },
  ],
} as const;

export type HighlightKey = (typeof about.highlights)[number]["key"];

export const groupsSection = {
  eyebrow: "Топтар",
  title: "Біздің топтар",
  description: `Балабақшада ${kindergarten.groupsCount} топ бар. Әр топ — балаларға арналған жайлы әрі мейірімді орта.`,
};

/** Топтардың атаулары кейін белгілі болса, осы жерде ғана өзгертіңіз. */
export const groups = [
  {
    id: 1,
    title: "«Жұлдыз»",
    level: "Ересек топ",
    description:
      "Жылы әрі тыныш ортада балалар күн тәртібіне үйреніп, ойын арқылы жаңа дағдыларды бірге меңгереді.",
    tags: ["Ойын", "Қамқорлық", "Достық"],
    illustration: "blocks" as const,
  },
  {
    id: 2,
    title: "«Ботақан»",
    level: "Орта топ",
    description:
      "Шығармашылық пен танымдық әрекеттер арқылы балалар қиялын дамытып, достарымен бірге жаңа нәрселерді ашады.",
    tags: ["Шығармашылық", "Таным", "Белсенділік"],
    illustration: "paint" as const,
  },
];

export const nutrition = {
  eyebrow: "Тамақтану",
  title: "Дұрыс тамақтану\u00A0— денсаулық кепілі",
  headline: "Күніне 5 рет тамақтану",
  mobileHeadline: "5 мезгіл тамақтану",
  tag: "Денсаулық пен күш-қуат үшін",
  text: "Балалар күніне бес мезгіл тамақтанады. Тұрақты тамақтану кестесі балаға күні бойы көңілді әрі белсенді болуға көмектеседі.",
  meals: [
    { n: 1, label: "1-мезгіл" },
    { n: 2, label: "2-мезгіл" },
    { n: 3, label: "3-мезгіл" },
    { n: 4, label: "4-мезгіл" },
    { n: 5, label: "5-мезгіл" },
  ],
};

export const activities = {
  eyebrow: "Үйірмелер",
  title: "Қосымша сабақтар",
  subtitle: "Баланың қызығушылығы мен қабілетін ашуға арналған сабақтар",
  items: [
    {
      key: "robotics" as const,
      title: "Робототехника",
      description:
        "Балалардың логикалық ойлауын, шығармашылық қабілетін және технологияға қызығушылығын дамытуға бағытталған сабақтар.",
      tags: ["Логика", "Шығармашылық", "Технология"],
    },
    {
      key: "speech" as const,
      title: "Логопед",
      description:
        "Балалардың сөйлеу дағдыларын дамытуға және дұрыс дыбыстау қабілетін жетілдіруге бағытталған сабақтар.",
      tags: ["Сөйлеу", "Дыбыстау", "Сенімділік"],
    },
  ],
};

export const gallery = {
  eyebrow: "Галерея",
  title: "Біздің галерея",
  subtitle: "Балабақшадағы қуанышты сәттер",
  initialCount: 6,
  more: "Тағы көрсету",
  less: "Жасыру",
  placeholder: "Фото жақында қосылады",
};

export const contacts = {
  eyebrow: "Байланыс",
  title: "Бізбен байланысыңыз",
  subtitle: "Сұрақтарыңыз болса, қоңырау шалыңыз немесе WhatsApp арқылы жазыңыз.",
  whatsapp: "WhatsApp арқылы жазу",
  call: "Қоңырау шалу",
  map: "Картадан көру",
  mapNote: "Мекенжай бойынша 2GIS картасынан іздеу",
};

export const footer = {
  tagline: "Бақытты балалық шақ осы жерден басталады!",
  rights: "Барлық құқықтар қорғалған.",
  whatsappTitle: "Бізге жазыңыз",
  whatsappNote: "Сұрақтарыңыз болса, WhatsApp арқылы жазыңыз.",
};
