/**
 * MAIN INTERACTION SCRIPT
 * Juno Marsh Aesthetic & Interactive Portfolio Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  initPortfolio();
});

function initPortfolio() {
  // 1. Web Audio API for subtle micro-interactions
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  let soundEnabled = true;

  function playPopSound(freq = 600, type = "sine", duration = 0.08) {
    if (!soundEnabled || !audioCtx) return;
    try {
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  // 2. Sound Toggle Button
  const soundBtn = document.getElementById("sound-toggle");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      soundBtn.querySelector(".jm-sound-label").textContent = soundEnabled ? "Sound ON" : "Sound OFF";
      if (soundEnabled) playPopSound(880);
      showToast(soundEnabled ? "🔊 Ovozlar yoqildi" : "🔇 Ovozlar o'chirildi");
    });
  }

  // 3. Initial Curtain Animation
  const curtain = document.querySelector(".jm-curtain");
  if (curtain) {
    curtain.classList.add("is-animating");
    setTimeout(() => {
      curtain.classList.remove("is-animating");
      curtain.classList.add("is-revealing");
      setTimeout(() => curtain.classList.remove("is-revealing"), 700);
    }, 450);
  }

  // 4. Populate Profile & Dynamic Sections from PORTFOLIO_CONFIG
  renderProfileData();
  renderProjects("all");
  renderServices();
  renderSkills();
  renderStats();

  // 5. Drawer Menu Toggle
  const menuBtn = document.getElementById("menu-toggle-btn");
  const drawer = document.getElementById("main-drawer");
  const drawerLinks = document.querySelectorAll(".jm-drawer-link a");

  if (menuBtn && drawer) {
    menuBtn.addEventListener("click", () => {
      const isOpen = drawer.classList.toggle("is-open");
      menuBtn.classList.toggle("jm-menu-active", isOpen);
      playPopSound(isOpen ? 750 : 500);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    drawerLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        drawer.classList.remove("is-open");
        menuBtn.classList.remove("jm-menu-active");
        document.body.style.overflow = "";
        playPopSound(620);
      });
    });
  }

  // 6. Project Filter Pills
  const filterBtns = document.querySelectorAll(".jm-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
      playPopSound(700);
    });
  });

  // 7. Interactive Mouse Image Trail Effect in Contact / Reach section
  initImageTrail();

  // 8. Copy Email to Clipboard
  const copyEmailBtns = document.querySelectorAll(".copy-email-btn");
  copyEmailBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = PORTFOLIO_CONFIG.profile.email;
      navigator.clipboard.writeText(email).then(() => {
        playPopSound(950);
        showToast(`📋 Email nusxalandi: ${email}`);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  });

  // 9. Start Project Modal
  const startProjectBtn = document.getElementById("start-project-btn");
  const contactModal = document.getElementById("contact-modal");
  const modalCloseBtns = document.querySelectorAll(".jm-modal-close");

  if (startProjectBtn && contactModal) {
    startProjectBtn.addEventListener("click", () => {
      openModal(contactModal);
      playPopSound(800);
    });
  }

  modalCloseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      closeAllModals();
      playPopSound(450);
    });
  });

  // Close modal when clicking on backdrop
  document.querySelectorAll(".jm-modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeAllModals();
        playPopSound(450);
      }
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById("project-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("form-name").value;
      const message = document.getElementById("form-msg").value;
      
      playPopSound(1050);
      closeAllModals();
      showToast(`✨ Rahmat, ${name}! Xabaringiz qabul qilindi.`);
      contactForm.reset();
    });
  }
}

// ----------------------------------------------------
// DYNAMIC DATA RENDERERS
// ----------------------------------------------------
function renderProfileData() {
  const p = PORTFOLIO_CONFIG.profile;
  
  // Set stage texts
  const firstNameEl = document.getElementById("hero-first-name");
  const lastNameEl = document.getElementById("hero-last-name");
  const markNameEl = document.getElementById("nav-mark-name");
  const footerNameEl = document.getElementById("footer-name");
  const roleEl = document.getElementById("hero-role");
  const statusEl = document.getElementById("status-badge-text");

  if (firstNameEl) firstNameEl.textContent = p.firstName;
  if (lastNameEl) lastNameEl.textContent = p.lastName;
  if (markNameEl) markNameEl.textContent = `${p.firstName} ✦ ${p.lastName}`;
  if (footerNameEl) footerNameEl.textContent = `${p.firstName} ${p.lastName}`;
  if (roleEl) roleEl.textContent = p.role;
  if (statusEl) statusEl.textContent = p.statusBadge;

  // Set hero image & avatar
  const heroImg = document.getElementById("hero-reveal-img");
  const introAvatar = document.getElementById("intro-avatar-img");
  if (heroImg && p.heroImageUrl) heroImg.src = p.heroImageUrl;
  if (introAvatar && p.avatarUrl) introAvatar.src = p.avatarUrl;

  // Set socials
  const tgLinks = document.querySelectorAll(".tg-link");
  const ghLinks = document.querySelectorAll(".gh-link");
  const inLinks = document.querySelectorAll(".in-link");

  tgLinks.forEach(el => el.href = p.telegram);
  ghLinks.forEach(el => el.href = p.github);
  inLinks.forEach(el => el.href = p.linkedin);
}

function renderProjects(filter = "all") {
  const track = document.getElementById("projects-track");
  if (!track) return;

  const filtered = filter === "all" 
    ? PORTFOLIO_CONFIG.projects 
    : PORTFOLIO_CONFIG.projects.filter(p => p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())) || p.category.toLowerCase().includes(filter.toLowerCase()));

  track.innerHTML = filtered.map((proj, idx) => `
    <div class="jm-project-card" onclick="openProjectDetails('${proj.id}')" data-id="${proj.id}">
      <div class="jm-project-media">
        <span class="jm-project-badge jm-mono">${proj.category}</span>
        <img src="${proj.image}" alt="${proj.title}" loading="lazy" />
      </div>
      <div class="jm-project-info">
        <div class="jm-project-title-row">
          <h3>${proj.title}</h3>
          <span class="jm-mono" style="opacity: 0.7;">/${proj.year}</span>
        </div>
        <p style="font-size: 0.95rem; color: var(--fg-muted);">${proj.description}</p>
        <div class="jm-project-tags">
          ${proj.tags.map(t => `<span class="jm-tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

function renderServices() {
  const container = document.getElementById("services-container");
  if (!container) return;

  container.innerHTML = PORTFOLIO_CONFIG.services.map(s => `
    <div class="jm-panel" id="${s.id}">
      <div class="jm-panel-body" style="background-color: ${s.color}; color: ${s.textColor};">
        <div class="jm-panel-copy">
          <div>
            <span class="jm-mono jm-panel-number">${s.number} // ${s.subtitle}</span>
            <h2 style="margin: 0.6rem 0 1rem;">${s.title}</h2>
            <p style="font-size: 1.15rem; max-width: 650px;">${s.description}</p>
          </div>
          <div class="jm-project-tags">
            ${s.tags.map(t => `<span class="jm-tag" style="background-color: rgba(255,255,255,0.25); border: none; color: inherit;">${t}</span>`).join("")}
          </div>
        </div>
        <div class="jm-panel-media">
          <img src="${s.image}" alt="${s.title}" loading="lazy" />
        </div>
      </div>
    </div>
  `).join("");
}

function renderSkills() {
  const list = document.getElementById("skills-cloud");
  if (!list) return;

  list.innerHTML = PORTFOLIO_CONFIG.skills.map(skill => `
    <div class="jm-skill-pill">${skill}</div>
  `).join("");
}

function renderStats() {
  const container = document.getElementById("stats-grid");
  if (!container) return;

  const bgAccents = ["var(--accent1)", "var(--accent3)", "var(--accent2)", "var(--fg)"];
  const textAccents = ["var(--fg)", "var(--fg)", "var(--fg)", "var(--bg)"];

  container.innerHTML = PORTFOLIO_CONFIG.stats.map((stat, idx) => `
    <div class="jm-stat-card" style="background-color: ${bgAccents[idx % bgAccents.length]}; color: ${textAccents[idx % textAccents.length]};">
      <span class="jm-mono" style="opacity: 0.85;">METRIC // 0${idx + 1}</span>
      <div class="jm-stat-val">${stat.value}</div>
      <p style="font-size: 1.1rem; font-weight: 700;">${stat.label}</p>
    </div>
  `).join("");
}

// ----------------------------------------------------
// PROJECT DETAILS MODAL
// ----------------------------------------------------
window.openProjectDetails = function(projectId) {
  const proj = PORTFOLIO_CONFIG.projects.find(p => p.id === projectId);
  if (!proj) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("project-modal-content");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div style="aspect-ratio: 16/9; border-radius: 1.2rem; overflow: hidden; border: 0.25rem solid var(--fg); margin-bottom: 1.5rem;">
      <img src="${proj.image}" alt="${proj.title}" />
    </div>
    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.5rem;">
      <h2>${proj.title}</h2>
      <span class="jm-mono" style="background: var(--fg); color: var(--bg); padding: 0.3rem 0.7rem; border-radius: 0.4rem;">${proj.year} / ${proj.category}</span>
    </div>
    <p style="font-size: 1.15rem; margin-bottom: 1.5rem; color: var(--fg-muted);">${proj.description}</p>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem;">
      ${proj.tags.map(t => `<span class="jm-tag" style="font-size: 0.85rem; padding: 0.4rem 0.8rem;">${t}</span>`).join("")}
    </div>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      ${proj.link ? `<a href="${proj.link}" target="_blank" class="jm-action-pill"><span class="jm-mono">GitHub Repo ↗</span></a>` : ''}
      ${proj.demoLink && proj.demoLink !== '#' ? `<a href="${proj.demoLink}" target="_blank" class="jm-action-pill" style="background-color: var(--accent1); color: var(--fg);"><span class="jm-mono">Jonli Demo ↗</span></a>` : ''}
    </div>
  `;

  openModal(modal);
};

function openModal(modalEl) {
  modalEl.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeAllModals() {
  document.querySelectorAll(".jm-modal-backdrop").forEach(m => m.classList.remove("is-open"));
  document.body.style.overflow = "";
}

// ----------------------------------------------------
// IMAGE TRAIL EFFECT IN REACH SECTION
// ----------------------------------------------------
function initImageTrail() {
  const reachSection = document.getElementById("contact-section");
  if (!reachSection) return;

  const images = PORTFOLIO_CONFIG.trailImages;
  let imgIndex = 0;
  let lastX = 0;
  let lastY = 0;
  const threshold = 70; // Distance needed to trigger new image

  reachSection.addEventListener("mousemove", (e) => {
    const rect = reachSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dist = Math.hypot(x - lastX, y - lastY);
    if (dist > threshold) {
      lastX = x;
      lastY = y;
      spawnTrailImage(x, y, images[imgIndex % images.length], reachSection);
      imgIndex++;
    }
  });
}

function spawnTrailImage(x, y, src, parent) {
  const img = document.createElement("img");
  img.src = src;
  img.className = "jm-trail-img";
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  const rot = (Math.random() - 0.5) * 30;
  parent.appendChild(img);

  requestAnimationFrame(() => {
    img.classList.add("active");
    img.style.transform = `translate(-50%, -50%) scale(1) rotate(${rot}deg)`;
  });

  setTimeout(() => {
    img.classList.remove("active");
    setTimeout(() => {
      if (img.parentNode) parent.removeChild(img);
    }, 500);
  }, 900);
}

// ----------------------------------------------------
// TOAST NOTIFICATIONS
// ----------------------------------------------------
function showToast(message) {
  let toast = document.getElementById("jm-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "jm-toast";
    toast.className = "jm-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}
