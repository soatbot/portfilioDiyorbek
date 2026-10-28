/**
 * LOCAL HTTP SERVER (Node.js Built-in — Qo'shimcha kutubxonalarsiz ishlaydi)
 * Ishga tushirish: node server.js
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

// .env faylini o'qish (agar mavjud bo'lsa)
function loadEnv() {
  try {
    const envPath = path.join(ROOT_DIR, '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      content.split('\n').forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
          const [key, ...rest] = trimmed.split('=');
          process.env[key.trim()] = rest.join('=').trim();
        }
      });
      console.log('✅ .env fayli muvaffaqiyatli yuklandi.');
    }
  } catch (err) {
    console.warn('.env o\'qishda xatolik:', err.message);
  }
}

loadEnv();

const server = http.createServer((req, res) => {
  let reqUrl = decodeURI(req.url.split('?')[0]);
  if (reqUrl === '/') reqUrl = '/index.html';
  if (reqUrl.endsWith('/')) reqUrl += 'index.html';

  const filePath = path.join(ROOT_DIR, reqUrl);

  // Xavfsizlik: papkadan tashqariga chiqishni oldini olish
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403);
    res.end('Taqiqlangan (Forbidden)');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<h1>404 — Sahifa topilmadi</h1><p><a href="/">Bosh sahifaga qaytish</a></p>`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 Akbaraliyev Portfolio serveri ishga tushdi:`);
  console.log(`👉 http://localhost:${PORT}`);
  console.log(`👉 Admin panel: http://localhost:${PORT}/admin/`);
  console.log(`======================================================\n`);
});
