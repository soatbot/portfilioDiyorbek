/**
 * AKBARALIYEV PORTFOLIO - BROWSER ENVIRONMENT CONFIGURATION
 * Ushbu fayl .env qiymatlarini brauzerda (client-side) bevosita xavfsiz ishlatish imkonini beradi.
 * Loyihani GitHub Pages, Vercel, Netlify yoki oddiy brauzerda ochganda avtomatik ishlaydi.
 */

window.PORTFOLIO_ENV = {
  // 1. Admin panel boshlang'ich paroli
  ADMIN_PASSWORD: "admin123",

  // 2. Telegram va GitHub profillari
  TELEGRAM_USERNAME: "@FromGuliston",
  TELEGRAM_URL: "https://t.me/FromGuliston",
  GITHUB_USERNAME: "akbaraliyev875",
  GITHUB_URL: "https://github.com/akbaraliyev875",

  // 3. Bepul bulutli ma'lumotlar bazasi (Firebase Realtime Database)
  // Masalan: "https://akbaraliyev-portfolio-default-rtdb.firebaseio.com"
  // Bu yerda bo'sh qolsa ham admin paneldan bevosita kiritish va saqlash mumkin!
  FIREBASE_DB_URL: "",

  // Yoki Supabase (PostgreSQL)
  SUPABASE_URL: "https://jvjvgycetybxdwglvgbo.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2anZneWNldHlieGR3Z2x2Z2JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxNzQxNjksImV4cCI6MjEwODc1MDE2OX0.5X8JFfnjOqwGxSfHflfi2Qx_brE2R2aYqGQGC3j1POY"
};
