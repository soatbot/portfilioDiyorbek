# Akbaraliyev Portfolio — Ishga tushirish qo'llanmasi

### 1-usul: Node.js orqali (Tavsiya etiladi)
Hech qanday qo'shimcha paket o'rnatish shart emas:
```bash
npm start
# yoki
node server.js
```
Keyin brauzerda:
* Asosiy sayt: `http://localhost:3000`
* Admin panel: `http://localhost:3000/admin/`

---

### 2-usul: Python orqali
```bash
python -m http.server 3000
```
Brauzerda: `http://localhost:3000`

---

### 3-usul: Oddiy ochish
`index.html` faylini istalgan brauzerda ikki marta bosib ochish mumkin.

---

### Admin Paroli:
* Standart parol: `.env` faylida belgilangan: `admin123`
* Siz parolni istalgan vaqt Admin panelidagi **"Profil Sozlamalari" &rarr; "Admin Parolini O'zgartirish"** bo'limidan yangilashingiz mumkin.

### Bepul Bulutli Baza (Firebase Realtime Database):
1. [Firebase Console](https://console.firebase.google.com) ga kiring va bepul yangi loyiha oching.
2. **Build -> Realtime Database** ni tanlab "Create Database" bosing.
3. Rules bo'limida `".read": true, ".write": true` qiling.
4. Baza URL manzilini `.env` faylidagi `FIREBASE_DB_URL=` ga yoki Admin panelidagi **"Bulutli Ma'lumotlar Bazasi"** bo'limiga kiriting.
5. "Bulutga Sinxronlash (Upload)" tugmasini bosib, mavjud barcha loyihalar, xabarlar va profilni 1 tugma bilan bepul bulutga saqlang!
