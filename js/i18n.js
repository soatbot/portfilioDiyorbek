/**
 * MULTILINGUAL I18N ENGINE (UZ, EN, RU)
 * Instant language switching with zero page reload.
 */

const TRANSLATIONS = {
  uz: {
    // Nav & Drawer
    navMark: "Akbaraliyev ✦ Dev",
    menuOpen: "Menyu",
    menuClose: "Yopish",
    home: "Bosh Sahifa",
    work: "Tanlangan Loyihalar",
    about: "Men Haqimda",
    contact: "Bog'lanish",
    elsewhere: "Ijtimoiy Tarmoqlar",
    getInTouch: "Email Orqali",
    statusBadge: "Loyihalarga ochiq",
    craftedBadge: "Akbaraliyev tomonidan yaratilgan / 2025",
    openForWork: "Yangi Loyihalarga Ochiq",
    theArchive: "Arxiv",

    // Hero & Reveal
    heroRole: "Creative Full-Stack & UI/UX Dasturchi",
    exploreBadge: "Ko'rish uchun suring ↓",
    selectedWork: "Tanlangan Loyihalar",
    viewAllWork: "Barcha Loyihalarni Ko'rish ↗",
    selectedIndex: "Tanlangan Indeks / 10",

    // Services
    servicesSub: "Sizning g'oyangiz, mening tajribam.",
    servicesTitle1: "G'oya va aniqlik",
    servicesTitle2: "bilan dizayn",
    srv1: "Brend Tizimlari",
    srv2: "Badiiy Rahbarlik",
    srv3: "Animatsiya & Harakat",
    srv4: "Raqamli Mahsulotlar",

    // CTA & Contact
    ctaSub: "G'oyangiz bormi? Uni amalga oshiramiz.",
    ctaLead: "Loyihani Boshlash ↗",
    sayHello: "Salom Deyish",
    listeningTitle: "Akbaraliyev sizni eshitmoqda",
    listeningDesc: "Yangi loyiha rejalashtiryapsizmi yoki shunchaki g'oyangizni sinab ko'rmoqchimisiz? Inbox har doim ochiq va barcha xabarlarga shaxsan javob beraman.",
    quickMessage: "Tezkor Xabar",
    leaveMessage: "Xabar Qoldiring",
    nameLabel: "ISM-FAMILIYA:",
    contactLabel: "EMAIL YOKI TELEGRAM:",
    messageLabel: "XABARINGIZ / G'OYA:",
    sendBtn: "Xabarni Yuborish ↗",
    msgSuccess: "✨ Rahmat! Xabaringiz yuborildi va qabul qilindi.",

    // About & Manifesto
    aboutTitle1: "Bu —",
    aboutTitle2: "Akbaraliyev",
    aboutLead: "Men Akbaraliyev — zamonaviy veb-arxitektura, yuqori sifatli kod va nozik interfeys detallari bilan ishlovchi creative full-stack dasturchiman. Murakkab tizimlarni sodda, tezkor va ko'zni quvontiradigan darajada chiroyli qilishga intilaman.",
    aboutSince: "Dasturchi / 2019 yildan buyon",
    manifesto1: "Men ham texnik, ham vizual jihatdan mustahkam tizimlar yarataman. Brend dizaynidan tortib to'liq veb-ekotizimlargacha bo'lgan har bir loyihada tartib, estetika va toza kod birlashadi.",
    manifesto2: "Har bir loyiha savoldan boshlanadi: bu qanday ishlashi va foydalanuvchiga nima berishi kerak? Men ortiqcha shovqin emas, balki samaradorlik, tezlik va kengayuvchanlikni afzal ko'raman.",
    manifesto3: "Yaxshi mahsulot va sifatli kodni qadrlaydigan mijozlar bilan ishlashdan doim mamnunman. Agar sizga ham shunday yechim kerak bo'lsa, gaplashamiz.",
    numbersHead: "Raqamlarda qisqacha",
    numbersSub: "Faoliyatimizdan qisqa fotolavha",
    stat1: "Muvaffaqiyatli topshirilgan loyihalar",
    stat2: "Mustaqil va masofaviy faoliyat",
    stat3: "Doimiy qaytuvchi hamkorlar",

    // Footer
    navigate: "Navigatsiya",
    admin: "Admin",
    follow: "Kuzating",
    studio: "Lokalizatsiya",
    legalCopy: "© 2025 Akbaraliyev. Barcha huquqlar himoyalangan."
  },

  en: {
    // Nav & Drawer
    navMark: "Akbaraliyev ✦ Dev",
    menuOpen: "Menu",
    menuClose: "Close",
    home: "Home",
    work: "Selected Work",
    about: "About Akbaraliyev",
    contact: "Say Hello",
    elsewhere: "Elsewhere",
    getInTouch: "Get in Touch",
    statusBadge: "Open for Work",
    craftedBadge: "Crafted by Akbaraliyev / 2025",
    openForWork: "Open for Work",
    theArchive: "The Archive",

    // Hero & Reveal
    heroRole: "Creative Full-Stack & UI/UX Developer",
    exploreBadge: "Scroll to Explore ↓",
    selectedWork: "Selected Work",
    viewAllWork: "View All Work ↗",
    selectedIndex: "Selected Index / 10",

    // Services
    servicesSub: "Your vision, my craft.",
    servicesTitle1: "Design with",
    servicesTitle2: "intent & restraint",
    srv1: "Brand Systems",
    srv2: "Art Direction",
    srv3: "Motion & Interaction",
    srv4: "Digital Product",

    // CTA & Contact
    ctaSub: "Have a project in mind? Let’s make it.",
    ctaLead: "Start a Project ↗",
    sayHello: "Say Hello",
    listeningTitle: "Akbaraliyev is listening",
    listeningDesc: "Have a project taking shape, or just an idea you want to pressure test? I’d love to hear it. The inbox is open and I read everything that comes through.",
    quickMessage: "Quick Message",
    leaveMessage: "Leave a Message",
    nameLabel: "FULL NAME:",
    contactLabel: "EMAIL OR TELEGRAM:",
    messageLabel: "YOUR MESSAGE / IDEA:",
    sendBtn: "Send Message ↗",
    msgSuccess: "✨ Thank you! Your message has been sent successfully.",

    // About & Manifesto
    aboutTitle1: "This is",
    aboutTitle2: "Akbaraliyev",
    aboutLead: "I’m Akbaraliyev — an independent creative full-stack developer and designer working on brand identities, scalable web architectures, and micro-interactions that make interfaces feel alive.",
    aboutSince: "Independent / since 2019",
    manifesto1: "I engineer things that connect — technically and emotionally. From system architectures to considered websites, my work lives where typography, motion, and clean code meet.",
    manifesto2: "Every project starts as a question — what should this feel like, and why. I like restraint over noise, systems that scale, and interfaces that move with intent rather than for show.",
    manifesto3: "I build digital products, interactive sites, and scalable APIs for people who value top tier quality. If that sounds like you, let’s talk.",
    numbersHead: "The numbers, briefly",
    numbersSub: "A snapshot of the work so far",
    stat1: "Projects shipped for founders & brands",
    stat2: "Independent and remote — by choice",
    stat3: "Long-term partners and returning clients",

    // Footer
    navigate: "Navigate",
    admin: "Admin",
    follow: "Follow",
    studio: "Studio",
    legalCopy: "© 2025 Akbaraliyev. All rights reserved."
  },

  ru: {
    // Nav & Drawer
    navMark: "Akbaraliyev ✦ Dev",
    menuOpen: "Меню",
    menuClose: "Закрыть",
    home: "Главная",
    work: "Избранные Работы",
    about: "Об Акбаралиеве",
    contact: "Контакты",
    elsewhere: "В сети",
    getInTouch: "Связаться",
    statusBadge: "Открыт для проектов",
    craftedBadge: "Создано Акбаралиевым / 2025",
    openForWork: "Открыт для Работы",
    theArchive: "Архив",

    // Hero & Reveal
    heroRole: "Creative Full-Stack & UI/UX Разработчик",
    exploreBadge: "Листайте вниз ↓",
    selectedWork: "Избранные Работы",
    viewAllWork: "Смотреть Все Работы ↗",
    selectedIndex: "Индекс Работ / 10",

    // Services
    servicesSub: "Ваше видение, мое мастерство.",
    servicesTitle1: "Дизайн со смыслом",
    servicesTitle2: "и сдержанностью",
    srv1: "Бренд Системы",
    srv2: "Арт-дирекшн",
    srv3: "Моушн & Интерактив",
    srv4: "Цифровой Продукт",

    // CTA & Contact
    ctaSub: "Есть идея для проекта? Давайте реализуем.",
    ctaLead: "Начать Проект ↗",
    sayHello: "Написать",
    listeningTitle: "Акбаралиев слушает",
    listeningDesc: "Планируете новый проект или хотите обсудить концепцию? Почта всегда открыта, и я лично отвечаю на все входящие запросы.",
    quickMessage: "Быстрое Сообщение",
    leaveMessage: "Оставить Сообщение",
    nameLabel: "ВАШЕ ИМЯ:",
    contactLabel: "EMAIL ИЛИ TELEGRAM:",
    messageLabel: "ВАШЕ СООБЩЕНИЕ:",
    sendBtn: "Отправить Сообщение ↗",
    msgSuccess: "✨ Спасибо! Ваше сообщение успешно получено.",

    // About & Manifesto
    aboutTitle1: "Это —",
    aboutTitle2: "Акбаралиев",
    aboutLead: "Я Акбаралиев — независимый креативный full-stack разработчик и дизайнер. Создаю масштабируемые веб-архитектуры, айдентику и микроанимации, делающие интерфейс живым.",
    aboutSince: "Разработчик / с 2019 года",
    manifesto1: "Я проектирую решения, которые связывают эстетику и технологии. От дизайн-систем до сложных веб-платформ — везде ценится чистота кода и внимание к деталям.",
    manifesto2: "Каждый проект начинается с вопроса: каким должен быть опыт пользователя и почему. Я предпочитаю лаконичность шуму, а системность — хаосу.",
    manifesto3: "Работаю с клиентами, которые ценят превосходное качество и надежность. Если это про вас — давайте обсудим ваш проект.",
    numbersHead: "Цифры, кратко",
    numbersSub: "Краткий обзор нашей работы",
    stat1: "Успешно запущенных проектов",
    stat2: "Независимая удаленная работа",
    stat3: "Постоянных довольных партнеров",

    // Footer
    navigate: "Навигация",
    admin: "Админ",
    follow: "Соцсети",
    studio: "Локация",
    legalCopy: "© 2025 Akbaraliyev. Все права защищены."
  }
};

const I18n = {
  STORAGE_KEY: "akbaraliyev_lang",

  getLang() {
    return localStorage.getItem(this.STORAGE_KEY) || "uz";
  },

  setLang(lang) {
    if (!["uz", "en", "ru"].includes(lang)) lang = "uz";
    localStorage.setItem(this.STORAGE_KEY, lang);
    this.applyTranslations(lang);
    window.dispatchEvent(new CustomEvent("portfolio_lang_changed", { detail: { lang } }));
  },

  t(key) {
    const lang = this.getLang();
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || (TRANSLATIONS["uz"][key]) || key;
  },

  applyTranslations(lang = this.getLang()) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.uz;

    // Update all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Also update dynamic slide titles if present
    document.querySelectorAll(".jm-reel-slide h1:not(.dynamic-proj)").forEach(h1 => {
      if (h1.textContent.toLowerCase().includes("selected") || h1.textContent.toLowerCase().includes("tanlangan") || h1.textContent.toLowerCase().includes("избранные")) {
        h1.textContent = dict.selectedWork;
      }
    });

    // Update active state in language switchers
    document.querySelectorAll(".lang-btn").forEach(btn => {
      const btnLang = btn.getAttribute("data-lang");
      if (btnLang === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    document.documentElement.lang = lang;
  }
};

// Auto init on script load
document.addEventListener("DOMContentLoaded", () => {
  I18n.applyTranslations();

  // Attach click listeners to language switchers
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const newLang = btn.getAttribute("data-lang");
      I18n.setLang(newLang);
    });
  });
});
