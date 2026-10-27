/**
 * PORTFOLIO CONFIGURATION
 * Ushbu fayldan barcha ma'lumotlaringizni (ism, rasm, loyihalar, xizmatlar, kontaktlar) osongina o'zgartirishingiz mumkin!
 */

const PORTFOLIO_CONFIG = {
  // Shaxsiy ma'lumotlar
  profile: {
    firstName: "Akbaraliyev",
    lastName: "Dev",
    nickname: "Akbaraliyev",
    role: "Creative Full-Stack & UI/UX Developer",
    statusBadge: "Open for New Projects",
    year: "2025",
    location: "Tashkent, Uzbekistan",
    email: "akbaraliyev.dev@gmail.com",
    telegram: "https://t.me/akbaraliyev_dev",
    github: "https://github.com/akbaraliyev",
    linkedin: "https://linkedin.com/in/akbaraliyev",
    instagram: "https://instagram.com/akbaraliyev",
    bioLead: "Zamonaviy veb-texnologiyalar va noan'anaviy dizayn uyg'unligida yuqori sifatli raqamli mahsulotlar yaratuvchi dasturchi.",
    bioDetail: "Murakkab tizimlarni sodda, tezkor va ko'zni quvontiradigan darajada chiroyli qilishga intilaman. Frontend arxitekturasi, backend API integratsiyalari va interaktiv 3D/Micro-animatsiyalar bo'yicha tajribaga egaman.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    heroImageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80"
  },

  // Asosiy Xizmatlar / Yo'nalishlar
  services: [
    {
      id: "srv-1",
      number: "01",
      title: "Frontend & Web Architecture",
      subtitle: "React, Next.js, Vue, Modern JavaScript",
      description: "Tezkor, SEO optimallashtirilgan, har qanday qurilmaga moslashuvchan va micro-animatsiyalar bilan boyitilgan veb-ilovalarni noldan yaratish.",
      color: "var(--accent1)",
      textColor: "var(--fg)",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "GSAP", "Three.js"]
    },
    {
      id: "srv-2",
      number: "02",
      title: "Backend & Scalable APIs",
      subtitle: "Node.js, Express, Python, PostgreSQL, Redis",
      description: "Xavfsiz avtorizatsiya tizimlari, yuqori yuklamalarga chidamli ma'lumotlar bazasi arxitekturasi va REST/GraphQL API larini ishlab chiqish.",
      color: "var(--accent2)",
      textColor: "var(--fg)",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "PostgreSQL", "Docker", "REST API", "Redis"]
    },
    {
      id: "srv-3",
      number: "03",
      title: "UI/UX & Creative Interaction",
      subtitle: "Figma, Prototyping, Design Systems",
      description: "Foydalanuvchi tajribasini (UX) chuqur tahlil qilib, intuitiv va unutilmas vizual interfeyslar (UI) yaratish va design-system qurish.",
      color: "var(--accent3)",
      textColor: "var(--fg)",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
      tags: ["Figma", "Design Systems", "Prototyping", "User Research"]
    },
    {
      id: "srv-4",
      number: "04",
      title: "Telegram Bot & Automation",
      subtitle: "Bot API, Web Apps, CRM Integrations",
      description: "Biznes jarayonlarini avtomatlashtiruvchi, to'lov tizimlariga ulangan va Telegram WebApp imkoniyatlariga ega bo'lgan kuchli botlar.",
      color: "var(--fg)",
      textColor: "var(--bg)",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      tags: ["Telegram WebApp", "BotFather", "Payments", "Automation"]
    }
  ],

  // Tanlangan Loyihalar (Selected Works)
  projects: [
    {
      id: "proj-1",
      title: "Fintech Horizon",
      category: "Full-Stack Web App",
      year: "2025",
      client: "Horizon Global",
      description: "Moliyaviy tahlil, real vaqt rejimidagi valyuta hisob-kitoblari va shaxsiy byudjetni boshqarish platformasi.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      accent: "var(--accent1)",
      tags: ["React", "Node.js", "Chart.js", "PostgreSQL"],
      link: "https://github.com/akbaraliyev",
      demoLink: "#"
    },
    {
      id: "proj-2",
      title: "Nova Commerce",
      category: "E-Commerce & Ecosystem",
      year: "2024",
      client: "Nova Retail",
      description: "Zamonaviy premium brendlar uchun ultra-tezkor onlayn do'kon, avtomatlashtirilgan to'lov va kuryerlik tizimi.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      accent: "var(--accent2)",
      tags: ["Next.js", "Stripe / Payme", "Tailwind", "Supabase"],
      link: "https://github.com/akbaraliyev",
      demoLink: "#"
    },
    {
      id: "proj-3",
      title: "Aura Creative Studio",
      category: "Interactive Agency Site",
      year: "2024",
      client: "Aura Media",
      description: "GSAP va WebGL animatsiyalari bilan boyitilgan, xalqaro dizayn studiyasi uchun portfoliosi.",
      image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
      accent: "var(--accent3)",
      tags: ["GSAP", "Three.js", "Vanilla JS", "CSS3"],
      link: "https://github.com/akbaraliyev",
      demoLink: "#"
    },
    {
      id: "proj-4",
      title: "TaskFlow SaaS",
      category: "Productivity Platform",
      year: "2024",
      client: "Internal Product",
      description: "Jamoalar uchun qulay vazifalar boshqaruvi, kanban doskalari va real-vaqt chat integratsiyasi.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      accent: "var(--accent4)",
      tags: ["Vue 3", "Express", "Socket.io", "MongoDB"],
      link: "https://github.com/akbaraliyev",
      demoLink: "#"
    },
    {
      id: "proj-5",
      title: "Pulse Health AI",
      category: "HealthTech Mobile & Web",
      year: "2023",
      client: "Pulse Med",
      description: "Bemorlar tashxislari va shifokorlar uchrashuvlarini boshqaruvchi aqlli tibbiyot ekotizimi.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      accent: "var(--accent1)",
      tags: ["React Native", "Python FastAPI", "Docker"],
      link: "https://github.com/akbaraliyev",
      demoLink: "#"
    }
  ],

  // Ko'nikmalar (Skills & Technologies)
  skills: [
    "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Vue.js",
    "Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Redis",
    "TailwindCSS", "GSAP Animations", "Three.js", "Git & GitHub",
    "Docker", "REST & GraphQL", "Figma / UI/UX", "Telegram WebApp"
  ],

  // Statistika va Metrikalar
  stats: [
    { label: "Muvaffaqiyatli Loyihalar", value: "35+" },
    { label: "Yillik Tajriba", value: "4+ Yil" },
    { label: "Mamnun Mijozlar", value: "25+" },
    { label: "Yozilgan Kod Qatorlari", value: "250K+" }
  ],

  // Manifesto va Shaxsiy Falsafa
  manifesto: {
    badge: "Mening Yondashuvim",
    quote: "Kodni faqat ishlaydigan emas, balki san'at darajasida sodda, tezkor va esda qolarli qilish kerak.",
    floatingBadges: [
      "Pixel Perfection",
      "Clean Code",
      "High Performance",
      "User-Centric",
      "Fast Delivery"
    ]
  },

  // Contact trail rasmlari (Sichqoncha orqasidan chiqadigan rasmlar)
  trailImages: [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80"
  ]
};
