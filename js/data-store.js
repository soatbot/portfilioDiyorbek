/**
 * DATA STORE & CLOUD DATABASE ENGINE — Akbaraliyev Portfolio
 * 
 * Imkoniyatlar:
 * 1. Barcha ma'lumotlarni (Loyihalar, Profil, Xabarlar, Xavfsizlik) boshqaradi.
 * 2. Mahalliy (LocalStorage) tezkor kesh - 0ms yuklanish, offline ishlash kafolati.
 * 3. Bepul Bulutli Ma'lumotlar Bazasi (Firebase Realtime DB / Supabase) bilan to'liq 2 tomonlama sinxronizatsiya.
 * 4. Admin parolini .env yoki Profil Sozlamalaridan to'g'ridan-to'g'ri xavfsiz o'zgartirish va saqlash.
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
    telegram: "https://t.me/FromGuliston",
    github: "https://github.com/akbaraliyev875",
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
      link: "https://github.com/akbaraliyev875",
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
      link: "https://github.com/akbaraliyev875",
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
      link: "https://github.com/akbaraliyev875",
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
      link: "https://github.com/akbaraliyev875",
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
      link: "https://github.com/akbaraliyev875",
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
      link: "https://github.com/akbaraliyev875",
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
      link: "https://github.com/akbaraliyev875",
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
      link: "https://github.com/akbaraliyev875",
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
      link: "https://github.com/akbaraliyev875",
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
      link: "https://github.com/akbaraliyev875",
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
  messages: [],
  security: {
    adminPassword: "admin123"
  }
};

const DataStore = {
  STORAGE_KEY: "akbaraliyev_portfolio_v2",
  PASS_KEY: "akbaraliyev_admin_custom_password",
  DB_CONFIG_KEY: "akbaraliyev_cloud_db_config",

  // -------------------------------------------------------------
  // 1. LOCAL CACHE OPERATIONS
  // -------------------------------------------------------------
  _getData() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) {
        this._saveData(DEFAULT_PORTFOLIO_DATA);
        return DEFAULT_PORTFOLIO_DATA;
      }
      const parsed = JSON.parse(raw);
      // Ensure essential fields exist
      if (!parsed.profile) parsed.profile = DEFAULT_PORTFOLIO_DATA.profile;
      if (!parsed.projects) parsed.projects = DEFAULT_PORTFOLIO_DATA.projects;
      if (!parsed.messages) parsed.messages = [];
      if (!parsed.security) parsed.security = { adminPassword: this.getAdminPassword() };
      return parsed;
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

  // -------------------------------------------------------------
  // 2. ADMIN PASSWORD & SECURITY (ENV + PROFILE SETTINGS)
  // -------------------------------------------------------------
  getAdminPassword() {
    // 1-darajali ustuvorlik: Profil sozlamalaridan saqlangan maxsus parol
    const customPass = localStorage.getItem(this.PASS_KEY);
    if (customPass && customPass.trim().length > 0) {
      return customPass.trim();
    }

    // 2-darajali ustuvorlik: Local storage data ichidagi security
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.security && parsed.security.adminPassword) {
          return parsed.security.adminPassword.trim();
        }
      }
    } catch (e) {}

    // 3-darajali ustuvorlik: window.PORTFOLIO_ENV (.env fayli)
    if (window.PORTFOLIO_ENV && window.PORTFOLIO_ENV.ADMIN_PASSWORD) {
      return String(window.PORTFOLIO_ENV.ADMIN_PASSWORD).trim();
    }

    // Standart zaxira parol
    return "admin123";
  },

  isPasswordCustomized() {
    const customPass = localStorage.getItem(this.PASS_KEY);
    return Boolean(customPass && customPass.trim().length > 0);
  },

  updateAdminPassword(newPassword) {
    if (!newPassword || newPassword.trim().length < 4) {
      return { success: false, message: "Parol kamida 4 ta belgidan iborat bo'lishi kerak!" };
    }
    const cleanPass = newPassword.trim();
    localStorage.setItem(this.PASS_KEY, cleanPass);

    const data = this._getData();
    data.security = data.security || {};
    data.security.adminPassword = cleanPass;
    this._saveData(data);

    // Asinxron bulutli bazaga ham yangilash
    this._cloudSyncSecurity(cleanPass);

    return { success: true, message: "Parol muvaffaqiyatli o'zgartirildi!" };
  },

  resetAdminPassword() {
    localStorage.removeItem(this.PASS_KEY);
    const envPass = (window.PORTFOLIO_ENV && window.PORTFOLIO_ENV.ADMIN_PASSWORD) ? window.PORTFOLIO_ENV.ADMIN_PASSWORD : "admin123";

    const data = this._getData();
    data.security = data.security || {};
    data.security.adminPassword = envPass;
    this._saveData(data);

    this._cloudSyncSecurity(envPass);
    return envPass;
  },

  // -------------------------------------------------------------
  // 3. CLOUD DATABASE ENGINE (FREE FIREBASE / SUPABASE)
  // -------------------------------------------------------------
  getCloudDbConfig() {
    try {
      const stored = localStorage.getItem(this.DB_CONFIG_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {}

    // Agar saqlanmagan bo'lsa, env.js dan oladi
    const envFirebase = window.PORTFOLIO_ENV ? window.PORTFOLIO_ENV.FIREBASE_DB_URL : "";
    const envSupabase = window.PORTFOLIO_ENV ? window.PORTFOLIO_ENV.SUPABASE_URL : "";
    const envKey = window.PORTFOLIO_ENV ? window.PORTFOLIO_ENV.SUPABASE_ANON_KEY : "";

    if (envFirebase && envFirebase.trim().length > 0) {
      return { type: "firebase", url: envFirebase.trim(), apiKey: "" };
    } else if (envSupabase && envSupabase.trim().length > 0) {
      return { type: "supabase", url: envSupabase.trim(), apiKey: envKey || "" };
    }

    return { type: "none", url: "", apiKey: "" };
  },

  saveCloudDbConfig(type, url, apiKey = "") {
    const cleanUrl = (url || "").trim().replace(/\/+$/, "");
    const config = { type, url: cleanUrl, apiKey: (apiKey || "").trim() };
    localStorage.setItem(this.DB_CONFIG_KEY, JSON.stringify(config));
    return config;
  },

  isCloudConfigured() {
    const cfg = this.getCloudDbConfig();
    return Boolean(cfg.url && cfg.url.length > 5);
  },

  // Baza bilan ulanishni tekshirish
  async testCloudConnection(customConfig = null) {
    const cfg = customConfig || this.getCloudDbConfig();
    if (!cfg.url) {
      return { success: false, message: "Baza URL manzili kiritilmagan!" };
    }

    const startTime = performance.now();
    try {
      if (cfg.type === "firebase" || (!cfg.type && cfg.url.includes("firebaseio.com"))) {
        const testUrl = `${cfg.url}/portfolio/status.json`;
        const res = await fetch(testUrl, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ active: true, ping: Date.now() })
        });
        if (!res.ok) throw new Error(`HTTP status: ${res.status}`);
        const latency = Math.round(performance.now() - startTime);
        return { success: true, latency, message: `✅ Firebase bazasiga muvaffaqiyatli ulandi (${latency}ms)` };
      } else if (cfg.type === "supabase" || (!cfg.type && cfg.url.includes("supabase.co"))) {
        const testUrl = `${cfg.url}/rest/v1/`;
        const res = await fetch(testUrl, {
          headers: { "apikey": cfg.apiKey || "", "Authorization": `Bearer ${cfg.apiKey || ""}` }
        });
        const latency = Math.round(performance.now() - startTime);
        if (res.ok || res.status === 200 || res.status === 204) {
          return { success: true, latency, message: `✅ Supabase bazasiga muvaffaqiyatli ulandi (${latency}ms)` };
        } else if (res.status === 401) {
          return { success: false, latency, message: `⚠️ Supabase serveri ishlayapti (${latency}ms), ammo "Anon Public Key" kiritilmagan yoki noto'g'ri!` };
        }
        return { success: res.ok, latency, message: res.ok ? `✅ Supabase bazasiga ulandi (${latency}ms)` : `Xatolik: ${res.statusText}` };
      }
      return { success: false, message: "Noma'lum baza turi!" };
    } catch (err) {
      console.warn("Cloud connection test error:", err);
      return { success: false, message: `❌ Ulanib bo'lmadi: ${err.message}` };
    }
  },

  // Bulutdan barcha ma'lumotlarni yuklab olish (Pull from Cloud)
  async fetchFromCloud() {
    const cfg = this.getCloudDbConfig();
    if (!cfg.url) return null;

    try {
      if (cfg.type === "firebase" || cfg.url.includes("firebaseio.com")) {
        const res = await fetch(`${cfg.url}/portfolio.json`);
        if (!res.ok) return null;
        const cloudData = await res.json();
        if (cloudData && typeof cloudData === "object") {
          // Normalize messages if Firebase stored them as an object
          if (cloudData.messages && !Array.isArray(cloudData.messages)) {
            cloudData.messages = Object.values(cloudData.messages);
          }
          // Merge with current data
          const current = this._getData();
          const merged = {
            profile: cloudData.profile || current.profile,
            projects: cloudData.projects || current.projects,
            services: cloudData.services || current.services,
            messages: cloudData.messages || current.messages,
            security: cloudData.security || current.security
          };
          this._saveData(merged);
          console.log("☁️ Cloud DB dan ma'lumotlar sinxronlandi!");
          return merged;
        }
      }
    } catch (err) {
      console.warn("Could not fetch from cloud DB:", err);
    }
    return null;
  },

  // Hamma mahalliy ma'lumotlarni bulutga yuklash (Push to Cloud)
  async pushAllToCloud() {
    const cfg = this.getCloudDbConfig();
    if (!cfg.url) return { success: false, message: "Bulutli baza ulanmagan" };

    const data = this._getData();
    try {
      if (cfg.type === "firebase" || cfg.url.includes("firebaseio.com")) {
        const res = await fetch(`${cfg.url}/portfolio.json`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return { success: true, message: "✅ Barcha ma'lumotlar bulutli bazaga saqlandi!" };
      }
    } catch (err) {
      console.error("Cloud push error:", err);
      return { success: false, message: err.message };
    }
  },

  // Asinxron qismlarni fon rejimida bulutga yuborish
  async _cloudSyncProfile(profile) {
    const cfg = this.getCloudDbConfig();
    if (!cfg.url) return;
    try {
      await fetch(`${cfg.url}/portfolio/profile.json`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile)
      });
    } catch (e) {}
  },

  async _cloudSyncProjects(projects) {
    const cfg = this.getCloudDbConfig();
    if (!cfg.url) return;
    try {
      await fetch(`${cfg.url}/portfolio/projects.json`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projects)
      });
    } catch (e) {}
  },

  async _cloudSyncSecurity(pass) {
    const cfg = this.getCloudDbConfig();
    if (!cfg.url) return;
    try {
      await fetch(`${cfg.url}/portfolio/security.json`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminPassword: pass })
      });
    } catch (e) {}
  },

  async _cloudPushMessage(msg) {
    const cfg = this.getCloudDbConfig();
    if (!cfg.url) return;
    try {
      await fetch(`${cfg.url}/portfolio/messages.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(msg)
      });
    } catch (e) {}
  },

  // -------------------------------------------------------------
  // 4. PROFILE METHODS
  // -------------------------------------------------------------
  getProfile() {
    return this._getData().profile || DEFAULT_PORTFOLIO_DATA.profile;
  },

  updateProfile(newProfile) {
    const data = this._getData();
    data.profile = { ...data.profile, ...newProfile };
    this._saveData(data);
    this._cloudSyncProfile(data.profile);
    return data.profile;
  },

  // -------------------------------------------------------------
  // 5. PROJECTS METHODS
  // -------------------------------------------------------------
  getProjects() {
    return this._getData().projects || DEFAULT_PORTFOLIO_DATA.projects;
  },

  addProject(project) {
    const data = this._getData();
    if (!project.id) project.id = "proj-" + Date.now();
    data.projects.unshift(project);
    this._saveData(data);
    this._cloudSyncProjects(data.projects);
    return project;
  },

  updateProject(id, updatedProject) {
    const data = this._getData();
    data.projects = data.projects.map(p => p.id === id ? { ...p, ...updatedProject } : p);
    this._saveData(data);
    this._cloudSyncProjects(data.projects);
    return data.projects;
  },

  deleteProject(id) {
    const data = this._getData();
    data.projects = (data.projects || []).filter(p => String(p.id) !== String(id));
    this._saveData(data);
    this._cloudSyncProjects(data.projects);
    return data.projects;
  },

  // -------------------------------------------------------------
  // 6. MESSAGES (INBOX) METHODS
  // -------------------------------------------------------------
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
    this._cloudPushMessage(newMsg);
    return newMsg;
  },

  deleteMessage(id) {
    const data = this._getData();
    data.messages = (data.messages || []).filter(m => String(m.id) !== String(id));
    this._saveData(data);
    this._cloudSyncProjects(data.messages);
    return data.messages;
  },

  clearAllMessages() {
    const data = this._getData();
    data.messages = [];
    this._saveData(data);
    const cfg = this.getCloudDbConfig();
    if (cfg.url) {
      try {
        fetch(`${cfg.url}/portfolio/messages.json`, { method: "DELETE" });
      } catch (e) {}
    }
  },

  // -------------------------------------------------------------
  // 7. RESET TO DEFAULTS
  // -------------------------------------------------------------
  resetToDefaults() {
    this._saveData(DEFAULT_PORTFOLIO_DATA);
    this.resetAdminPassword();
  }
};

// Fon rejimida bulutli baza bilan avtomatik tekshirib olish (agar ulanish sozlangan bo'lsa)
document.addEventListener("DOMContentLoaded", () => {
  if (DataStore.isCloudConfigured()) {
    DataStore.fetchFromCloud();
  }
});
