/**
 * DATA STORE ENGINE
 * Barcha ma'lumotlarni (loyihalar, profil, xabarlar) LocalStorage orqali boshqaradi.
 * Admin paneldan kiritilgan har qanday o'zgarish darhol saytda aks etadi!
 */

const DEFAULT_PORTFOLIO_DATA = {
  profile: {
    firstName: "Akbaraliyev",
    lastName: "Diyorbek",
    role: "Creative Full-Stack & UI/UX Developer",
    statusBadge: "Open for New Projects",
    year: "2025",
    location: "Toshkent, O'zbekiston",
    email: "diyorbekakbaraliyev6@gmail.com",
    telegram: "https://t.me/akbaraliyev_dev",
    github: "https://github.com/akbaraliyev",
    bioLead: "Zamonaviy veb-texnologiyalar va noan'anaviy dizayn uyg'unligida yuqori sifatli raqamli mahsulotlar yaratuvchi dasturchi.",
    bioDetail: "Murakkab tizimlarni sodda, tezkor va ko'zni quvontiradigan darajada chiroyli qilishga intilaman. Frontend arxitekturasi, backend API integratsiyalari va interaktiv dizayn bo'yicha tajribaga egaman.",
    avatarUrl: "./images/services-header/portrait.jpeg",
    heroImageUrl: "./images/hero/img1.jpg"
  },
  projects: [
    {
      id: "proj-1",
      title: "Halcyon Press",
      category: "Brand Identity",
      year: "2025",
      description: "Zamonaviy dizayn studiyasi uchun to'liq brending va vizual interfeys tizimi.",
      image: "./images/work-items/work-item-1.jpg",
      tags: ["Brand Identity", "Design System", "Art Direction"],
      link: "https://github.com/akbaraliyev",
      demoLink: "project.html"
    },
    {
      id: "proj-2",
      title: "Nova Atlas",
      category: "Art Direction",
      year: "2025",
      description: "Xalqaro arxitektura va dizayn media platformasi uchun interaktiv tajriba.",
      image: "./images/work-items/work-item-2.jpg",
      tags: ["Art Direction", "Web Design", "GSAP"],
      link: "https://github.com/akbaraliyev",
      demoLink: "project.html"
    },
    {
      id: "proj-3",
      title: "Field Theory",
      category: "Web Design",
      year: "2024",
      description: "Yuqori darajadagi interaktiv animasiyalar va WebGL texnologiyalari bilan boyitilgan veb-ilova.",
      image: "./images/work-items/work-item-3.jpg",
      tags: ["Web Design", "Interactive", "React"],
      link: "https://github.com/akbaraliyev",
      demoLink: "project.html"
    },
    {
      id: "proj-4",
      title: "Paper Moon",
      category: "Editorial",
      year: "2024",
      description: "Zamonaviy nashriyot va badiiy kitoblar do'koni uchun platforma.",
      image: "./images/work-items/work-item-4.jpg",
      tags: ["Editorial", "E-Commerce", "Next.js"],
      link: "https://github.com/akbaraliyev",
      demoLink: "project.html"
    },
    {
      id: "proj-5",
      title: "Slow Mornings",
      category: "Packaging",
      year: "2024",
      description: "Premium organik mahsulotlar uchun brending va onlayn buyurtma portali.",
      image: "./images/work-items/work-item-5.jpg",
      tags: ["Packaging", "UI/UX", "Node.js"],
      link: "https://github.com/akbaraliyev",
      demoLink: "project.html"
    },
    {
      id: "proj-6",
      title: "Verre Studio",
      category: "Identity System",
      year: "2024",
      description: "Shisha san'ati va interyer studiyasi uchun raqamli portfolio.",
      image: "./images/work-items/work-item-6.jpg",
      tags: ["Identity", "Branding", "CSS3"],
      link: "https://github.com/akbaraliyev",
      demoLink: "project.html"
    },
    {
      id: "proj-7",
      title: "Tidal",
      category: "Motion",
      year: "2023",
      description: "Interaktiv audio-vizual animatsiyalar va zamonaviy oqim tizimi.",
      image: "./images/work-items/work-item-7.jpg",
      tags: ["Motion", "Interaction", "GSAP"],
      link: "https://github.com/akbaraliyev",
      demoLink: "project.html"
    },
    {
      id: "proj-8",
      title: "Northwind",
      category: "Creative Direction",
      year: "2023",
      description: "Raqamli mahsulotlar yaratuvchi jamoa uchun ekotizim.",
      image: "./images/work-items/work-item-8.jpg",
      tags: ["Creative Direction", "Full-Stack"],
      link: "https://github.com/akbaraliyev",
      demoLink: "project.html"
    },
    {
      id: "proj-9",
      title: "Lumen",
      category: "Logo & Mark",
      year: "2023",
      description: "Yorug'lik texnologiyalari laboratoriyasi uchun mark va brend tizimi.",
      image: "./images/work-items/work-item-9.jpg",
      tags: ["Logo", "Typography", "Branding"],
      link: "https://github.com/akbaraliyev",
      demoLink: "project.html"
    },
    {
      id: "proj-10",
      title: "Foundry No.9",
      category: "Type Design",
      year: "2023",
      description: "Eksklyuziv shriftlar quyuvchi studiya uchun onlayn namoyish portali.",
      image: "./images/work-items/work-item-10.jpg",
      tags: ["Type Design", "Editorial", "Web"],
      link: "https://github.com/akbaraliyev",
      demoLink: "project.html"
    }
  ],
  services: [
    {
      id: "srv-1",
      number: "01",
      title: "Brand Systems",
      subtitle: "Brand Architecture & Identity",
      description: "Kuchli vizual identifikatsiya, brend qoidalari va unutilmas logotip tizimlarini yaratish.",
      color: "var(--accent1)",
      image: "./images/services/service-1.jpg"
    },
    {
      id: "srv-2",
      number: "02",
      title: "Art Direction",
      subtitle: "Creative & Visual Strategy",
      description: "G'oyadan tayyor mahsulotgacha bo'lgan barcha bosqichlarda badiiy va texnik rahbarlik.",
      color: "var(--accent2)",
      image: "./images/services/service-2.jpg"
    },
    {
      id: "srv-3",
      number: "03",
      title: "Motion & Interaction",
      subtitle: "Micro-animations & 3D Flow",
      description: "GSAP, WebGL va CSS yordamida interfeysni jonlantiruvchi yuqori darajadagi animatsiyalar.",
      color: "var(--accent3)",
      image: "./images/services/service-3.jpg"
    },
    {
      id: "srv-4",
      number: "04",
      title: "Digital Product",
      subtitle: "Full-Stack Web & Mobile Apps",
      description: "Tezkor, xavfsiz va yuqori yuklamalarga chidamli zamonaviy veb-ilovalarni ishlab chiqish.",
      color: "var(--fg)",
      image: "./images/services/service-4.jpg"
    }
  ],
  messages: []
};

const DataStore = {
  STORAGE_KEY: "akbaraliyev_portfolio_v2",

  _getData() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) {
        this._saveData(DEFAULT_PORTFOLIO_DATA);
        return DEFAULT_PORTFOLIO_DATA;
      }
      return JSON.parse(raw);
    } catch (e) {
      console.error("DataStore parse error:", e);
      return DEFAULT_PORTFOLIO_DATA;
    }
  },

  _saveData(data) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      window.dispatchEvent(new Event("portfolio_data_updated"));
    } catch (e) {
      console.error("DataStore save error:", e);
    }
  },

  // Profile methods
  getProfile() {
    return this._getData().profile || DEFAULT_PORTFOLIO_DATA.profile;
  },

  updateProfile(newProfile) {
    const data = this._getData();
    data.profile = { ...data.profile, ...newProfile };
    this._saveData(data);
    return data.profile;
  },

  // Projects methods
  getProjects() {
    return this._getData().projects || DEFAULT_PORTFOLIO_DATA.projects;
  },

  addProject(project) {
    const data = this._getData();
    if (!project.id) project.id = "proj-" + Date.now();
    data.projects.unshift(project);
    this._saveData(data);
    return project;
  },

  updateProject(id, updatedProject) {
    const data = this._getData();
    data.projects = data.projects.map(p => p.id === id ? { ...p, ...updatedProject } : p);
    this._saveData(data);
    return data.projects;
  },

  deleteProject(id) {
    const data = this._getData();
    data.projects = (data.projects || []).filter(p => String(p.id) !== String(id));
    this._saveData(data);
    return data.projects;
  },

  // Messages methods (Inbox)
  getMessages() {
    return this._getData().messages || [];
  },

  addMessage(msg) {
    const data = this._getData();
    if (!data.messages) data.messages = [];
    const newMsg = {
      id: "msg-" + Date.now(),
      name: msg.name || "Noma'lum",
      contact: msg.contact || "",
      message: msg.message || "",
      date: new Date().toLocaleString("uz-UZ", {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
      })
    };
    data.messages.unshift(newMsg);
    this._saveData(data);
    return newMsg;
  },

  deleteMessage(id) {
    const data = this._getData();
    data.messages = (data.messages || []).filter(m => String(m.id) !== String(id));
    this._saveData(data);
    return data.messages;
  },

  clearAllMessages() {
    const data = this._getData();
    data.messages = [];
    this._saveData(data);
  },

  // Reset to original demo
  resetToDefaults() {
    this._saveData(DEFAULT_PORTFOLIO_DATA);
  }
};
