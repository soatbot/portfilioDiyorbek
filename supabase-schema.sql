-- ==============================================================
-- AKBARALIYEV PORTFOLIO - SUPABASE POSTGRESQL JADVALLARI
-- ==============================================================
-- Ushbu kodni Supabase Dashboard -> "SQL Editor" bo'limiga qo'yib
-- "Run" tugmasini bosing (1 marta bajarish kifoya):

-- 1. XABARLAR JADVALI (INBOX MESSAGES)
CREATE TABLE IF NOT EXISTS public.messages (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  contact TEXT,
  message TEXT NOT NULL,
  date TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. LOYIHALAR JADVALI (PROJECTS)
CREATE TABLE IF NOT EXISTS public.projects (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT,
  year TEXT,
  description TEXT,
  image TEXT,
  tags TEXT[],
  link TEXT,
  demoLink TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. PROFIL JADVALI (PROFILE)
CREATE TABLE IF NOT EXISTS public.profile (
  id INT PRIMARY KEY DEFAULT 1,
  firstName TEXT,
  lastName TEXT,
  role TEXT,
  email TEXT,
  telegram TEXT,
  github TEXT,
  location TEXT,
  statusBadge TEXT,
  bioLead TEXT,
  bioDetail TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. RLS XAVFSIZLIK QOIDALARI (Anonim foydalanuvchilar o'qish va yozishi uchun)
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profile ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anon barcha amallarga ruxsat" ON public.messages;
CREATE POLICY "Anon barcha amallarga ruxsat" ON public.messages FOR ALL TO anon USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Anon barcha amallarga ruxsat" ON public.projects;
CREATE POLICY "Anon barcha amallarga ruxsat" ON public.projects FOR ALL TO anon USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Anon barcha amallarga ruxsat" ON public.profile;
CREATE POLICY "Anon barcha amallarga ruxsat" ON public.profile FOR ALL TO anon USING (true) WITH CHECK (true);
