/**
 * Juno Marsh Engine — Adapted for Akbaraliyev
 * Enhanced with Dynamic DataStore Synchronization & Realtime Inbox System
 * (Mouse trail disabled per user request)
 */

// Dynamic content renderer from DataStore
function syncDynamicData() {
  if (typeof DataStore === "undefined") return;

  const profile = DataStore.getProfile();
  const projects = DataStore.getProjects();

  // 1. Mark logo
  document.querySelectorAll(".jm-mark a").forEach(el => {
    el.textContent = `${profile.firstName} ✦ ${profile.lastName}`;
  });

  // 2. Stage titles
  const stageA = document.querySelector(".jm-stage-title-a h1");
  const stageB = document.querySelector(".jm-stage-title-b h1");
  if (stageA) stageA.textContent = profile.firstName;
  if (stageB) stageB.textContent = profile.lastName;

  // 3. Footer title & legal
  const footTitle = document.querySelector(".jm-foot-title h1");
  if (footTitle) footTitle.textContent = `${profile.firstName} ${profile.lastName}`;
  
  const footLegal = document.querySelector(".jm-foot-legal p a");
  if (footLegal) footLegal.textContent = `${profile.firstName} ${profile.lastName}`;

  // 4. Update Email & Socials links across all pages
  document.querySelectorAll("a[href^='mailto:']").forEach(a => {
    a.href = `mailto:${profile.email}`;
    if (a.textContent.includes("@")) a.textContent = profile.email;
  });

  document.querySelectorAll("a[href*='t.me']").forEach(a => {
    a.href = profile.telegram;
    if (a.textContent.trim().startsWith("@")) {
      const handle = profile.telegram.split("/").pop();
      a.textContent = `@${handle}`;
    }
  });

  document.querySelectorAll("a[href*='github.com']").forEach(a => {
    a.href = profile.github;
  });

  // 5. Dynamic Work Reel rendering on Home view
  const reelTrack = document.querySelector(".jm-reel-track");
  if (reelTrack && document.querySelector(".jm-view-home")) {
    const topProjects = projects.slice(0, 4);
    const selectedText = typeof I18n !== "undefined" ? I18n.t("selectedWork") : "Tanlangan Loyihalar";
    reelTrack.innerHTML = `
      <div class="jm-reel-slide">
        <h1 class="jm-reel-name" data-i18n="selectedWork">${selectedText}</h1>
      </div>
      ${topProjects.map((p) => `
        <div class="jm-reel-slide">
          <div class="jm-reel-thumb">
            <img src="${p.image}" alt="${p.title}" onerror="this.src='./images/hero/img1.jpg'" />
          </div>
          <h1 class="jm-reel-name dynamic-proj">${p.title}</h1>
        </div>
      `).join("")}
    `;
  }

  if (typeof I18n !== "undefined") {
    I18n.applyTranslations();
  }

  // 6. Dynamic Grid rendering on Work view
  const gridContainer = document.querySelector(".jm-grid");
  if (gridContainer && document.querySelector(".jm-view-work")) {
    let rowsHtml = "";
    for (let i = 0; i < projects.length; i += 2) {
      const p1 = projects[i];
      const p2 = projects[i + 1];
      rowsHtml += `
        <div class="jm-grid-row">
          <div class="jm-grid-cell">
            <div class="jm-grid-cell-media">
              <a href="project.html?id=${p1.id}">
                <img src="${p1.image}" alt="${p1.title}" onerror="this.src='./images/hero/img1.jpg'" />
              </a>
            </div>
            <div class="jm-grid-cell-meta">
              <h3>${p1.title}</h3>
              <p class="jm-mono">${p1.category}</p>
            </div>
          </div>
          ${p2 ? `
          <div class="jm-grid-cell">
            <div class="jm-grid-cell-media">
              <a href="project.html?id=${p2.id}">
                <img src="${p2.image}" alt="${p2.title}" onerror="this.src='./images/hero/img1.jpg'" />
              </a>
            </div>
            <div class="jm-grid-cell-meta">
              <h3>${p2.title}</h3>
              <p class="jm-mono">${p2.category}</p>
            </div>
          </div>` : ''}
        </div>
      `;
    }
    gridContainer.innerHTML = rowsHtml;
  }
}

// 1. Page Curtain Transition Logic
function initCurtains() {
  const panels = document.querySelectorAll(".jm-curtain-panel");
  if (!panels.length) return;

  gsap.set(panels, { scaleY: 1, transformOrigin: "top" });
  gsap.to(panels, {
    scaleY: 0,
    duration: 0.65,
    stagger: 0.08,
    ease: "power4.inOut",
    delay: 0.1,
    onComplete: () => {
      gsap.set(panels, { transformOrigin: "bottom" });
    }
  });

  document.querySelectorAll("a[href]").forEach(anchor => {
    const href = anchor.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || anchor.target === "_blank") return;

    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.set(panels, { transformOrigin: "bottom" });
      gsap.to(panels, {
        scaleY: 1,
        duration: 0.55,
        stagger: 0.06,
        ease: "power4.inOut",
        onComplete: () => {
          window.location.href = href;
        }
      });
    });
  });
}

// 2. Navigation Drawer Menu
function initDrawer() {
  const btn = document.querySelector(".jm-menu-btn");
  const drawer = document.querySelector(".jm-drawer");
  const openLabel = document.querySelector(".jm-menu-label-open");
  const closeLabel = document.querySelector(".jm-menu-label-close");
  const links = document.querySelectorAll(".jm-drawer-link");
  const footLabels = document.querySelectorAll(".jm-drawer-foot-label");
  const footTexts = document.querySelectorAll(".jm-drawer-foot-text");

  if (!btn || !drawer) return;

  let isOpen = false;
  let isAnimating = false;
  let scrollY = 0;

  btn.addEventListener("click", () => {
    if (isAnimating) {
      gsap.killTweensOf([drawer, openLabel, closeLabel, links, footLabels, footTexts]);
      isAnimating = false;
    }

    if (isOpen) {
      isAnimating = true;
      drawer.style.pointerEvents = "none";
      btn.classList.remove("jm-menu-active");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);

      gsap.to(openLabel, { y: "0rem", duration: 0.3 });
      gsap.to(closeLabel, { y: "0rem", duration: 0.3 });
      gsap.to(drawer, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.set([links, footLabels, footTexts], { opacity: 0, y: "100%" });
          isAnimating = false;
        }
      });
      isOpen = false;
    } else {
      isAnimating = true;
      drawer.style.pointerEvents = "all";
      btn.classList.add("jm-menu-active");
      scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      gsap.to(openLabel, { y: "-1rem", duration: 0.3 });
      gsap.to(closeLabel, { y: "-1rem", duration: 0.3 });
      gsap.to(drawer, {
        opacity: 1,
        duration: 0.3,
        onComplete: () => { isAnimating = false; }
      });
      gsap.to([links, footLabels, footTexts], {
        opacity: 1,
        y: "0%",
        duration: 0.75,
        stagger: 0.065,
        ease: "power4.out"
      });
      isOpen = true;
    }
  });
}

// 3. Home View: Reveal Slideshow & Parallax
function initHomeHero() {
  if (!document.querySelector(".jm-view-home")) return;

  const revealImg = document.querySelector(".jm-reveal-frame img");
  if (revealImg) {
    const projects = typeof DataStore !== "undefined" ? DataStore.getProjects() : [];
    let index = 0;
    if (projects.length > 0) {
      setInterval(() => {
        index = (index + 1) % projects.length;
        revealImg.src = projects[index].image;
      }, 350);
    }
  }

  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.create({
      trigger: ".jm-reveal",
      start: "top bottom",
      end: "top top",
      onUpdate: (self) => {
        const p = self.progress;
        gsap.set(".jm-reveal-frame", {
          y: `${-110 + 110 * p}%`,
          scale: 0.25 + 0.75 * p,
          rotation: -15 + 15 * p
        });
      }
    });
  }
}

// 4. Home View: 3D Reel Section
function initReel() {
  if (!document.querySelector(".jm-view-home")) return;
  if (typeof ScrollTrigger === "undefined") return;

  const track = document.querySelector(".jm-reel-track");
  const meter = document.querySelector(".jm-reel-meter");
  const cardsContainer = document.querySelector(".jm-reel-cards");

  if (!track || !meter || !cardsContainer) return;

  let reelST = null;

  const buildReel = () => {
    if (window.innerWidth <= 1000) {
      if (reelST) { reelST.kill(); reelST = null; }
      return;
    }

    if (reelST) reelST.kill();

    meter.innerHTML = "";
    for (let d = 1; d <= 5; d++) {
      const p = document.createElement("p");
      p.className = "jm-mono";
      p.textContent = `0${d}`;
      meter.appendChild(p);
      for (let h = 0; h < 10; h++) {
        const tick = document.createElement("div");
        tick.className = "jm-reel-tick";
        meter.appendChild(tick);
      }
    }

    const coordsSmall = [
      { y: 100, x: 1000 }, { y: 1500, x: 100 }, { y: 1250, x: 1950 },
      { y: 1500, x: 850 }, { y: 200, x: 2100 }, { y: 250, x: 600 },
      { y: 1100, x: 1650 }, { y: 1000, x: 800 }, { y: 900, x: 2200 },
      { y: 150, x: 1600 }
    ];

    const coordsLarge = [
      { y: 800, x: 5000 }, { y: 2000, x: 3000 }, { y: 240, x: 4450 },
      { y: 1200, x: 3450 }, { y: 500, x: 2200 }, { y: 750, x: 1100 },
      { y: 1850, x: 3350 }, { y: 2200, x: 1300 }, { y: 3000, x: 1950 },
      { y: 500, x: 4500 }
    ];

    const coords = window.innerWidth >= 1600 ? coordsLarge : coordsSmall;
    cardsContainer.innerHTML = "";

    const projects = typeof DataStore !== "undefined" ? DataStore.getProjects() : [];
    const count = Math.min(10, projects.length || 10);

    for (let i = 1; i <= count; i++) {
      const card = document.createElement("div");
      card.className = `jm-reel-card jm-reel-card-${i}`;
      const img = document.createElement("img");
      img.src = projects[i - 1] ? projects[i - 1].image : `./images/work-items/work-item-${i}.jpg`;
      img.alt = `work item ${i}`;
      card.appendChild(img);
      const c = coords[i - 1] || { x: 500, y: 500 };
      gsap.set(card, { x: c.x, y: c.y, z: -1500, scale: 0 });
      cardsContainer.appendChild(card);
    }

    const cards = document.querySelectorAll(".jm-reel-card");
    const totalDist = window.innerWidth * 4;

    reelST = ScrollTrigger.create({
      trigger: ".jm-reel",
      start: "top top",
      end: `+=${window.innerHeight * 5}px`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const offset = -totalDist * self.progress;
        gsap.set(track, { x: offset });

        cards.forEach((card, idx) => {
          const delay = idx * 0.075;
          const progressRel = (self.progress - delay) * 2;
          const clamped = Math.max(0, Math.min(1, progressRel));
          const zVal = -1500 + 3000 * clamped;
          const scaleVal = Math.min(1, clamped * 10);
          gsap.set(card, { z: zVal, scale: scaleVal });
        });

        const ticks = document.querySelectorAll(".jm-reel-tick");
        const step = 1 / ticks.length;
        ticks.forEach((tick, idx) => {
          const tickThresh = idx * step;
          const opacity = self.progress > tickThresh ? 1 : 0.2;
          gsap.to(tick, { opacity: opacity, duration: 0.2 });
        });
      }
    });
  };

  buildReel();
  window.addEventListener("resize", buildReel);
}

// 5. Home View: Stacked Service Panels
function initPanels() {
  if (!document.querySelector(".jm-view-home")) return;
  if (typeof ScrollTrigger === "undefined") return;

  const panels = gsap.utils.toArray(".jm-panel");
  if (!panels.length) return;

  let triggers = [];

  const setupPanels = () => {
    triggers.forEach(t => t && t.kill());
    triggers = [];

    if (window.innerWidth <= 1000) return;

    panels.forEach((panel, i) => {
      const isLast = i === panels.length - 1;
      const body = panel.querySelector(".jm-panel-body");

      if (!isLast) {
        const pinTrigger = ScrollTrigger.create({
          trigger: panel,
          start: "top 45%",
          endTrigger: ".jm-cta",
          end: "top 90%",
          pin: true,
          pinSpacing: false
        });
        triggers.push(pinTrigger);

        const tween = gsap.to(body, {
          y: `-${(panels.length - i) * 14}vh`,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top 45%",
            endTrigger: ".jm-cta",
            end: "top 90%",
            scrub: true
          }
        });
        triggers.push(tween.scrollTrigger);
      }
    });
  };

  setupPanels();
  window.addEventListener("resize", setupPanels);
}

// 6. Work Page: Stagger Grid
function initWorkPage() {
  if (!document.querySelector(".jm-view-work")) return;

  gsap.set(".jm-wh-avatar", { scale: 0 });
  gsap.set(".jm-wh-arrow", { scale: 0 });

  const tl = gsap.timeline({ delay: 0.6 });
  tl.to(".jm-wh-avatar", { scale: 1, duration: 1, ease: "power4.out" })
    .to(".jm-wh-arrow", { scale: 1, duration: 0.75, ease: "power4.out" }, "-=0.7");

  if (typeof ScrollTrigger !== "undefined") {
    document.querySelectorAll(".jm-grid .jm-grid-row").forEach((row) => {
      const cells = row.querySelectorAll(".jm-grid-cell");
      cells.forEach((cell, idx) => {
        const isLeft = idx % 2 === 0;
        gsap.set(cell, {
          x: isLeft ? -200 : 200,
          rotation: isLeft ? -15 : 15,
          opacity: 0,
          scale: 0.8
        });
      });

      ScrollTrigger.create({
        trigger: row,
        start: "top 80%",
        onEnter: () => {
          gsap.to(cells, {
            duration: 1,
            x: 0,
            rotation: 0,
            opacity: 1,
            scale: 1,
            ease: "power4.out",
            stagger: 0.15
          });
        }
      });
    });
  }
}

// 7. About Page: Manifesto Floating Words & Stats
function initAboutPage() {
  if (!document.querySelector(".jm-view-about")) return;
  if (typeof ScrollTrigger === "undefined") return;

  gsap.set([".jm-stats-a", ".jm-stats-b", ".jm-stats-c"], { scale: 0 });
  gsap.to([".jm-stats-a", ".jm-stats-b", ".jm-stats-c"], {
    scale: 1,
    duration: 1,
    stagger: 0.1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".jm-stats",
      start: "top 60%",
      toggleActions: "play none none none"
    }
  });

  if (window.innerWidth > 1000) {
    gsap.to(".jm-bio-portrait", {
      y: -200,
      rotation: -25,
      scrollTrigger: {
        trigger: ".jm-bio",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    const floatConfigs = [
      { id: "#jm-float-1", y: -300, rot: -45 },
      { id: "#jm-float-2", y: -150, rot: 70 },
      { id: "#jm-float-3", y: -400, rot: 120 },
      { id: "#jm-float-4", y: -350, rot: -60 },
      { id: "#jm-float-5", y: -200, rot: 100 }
    ];

    floatConfigs.forEach(fc => {
      gsap.to(fc.id, {
        y: fc.y,
        rotation: fc.rot,
        scrollTrigger: {
          trigger: ".jm-manifesto",
          start: "top bottom",
          end: "bottom+=100% top",
          scrub: 1
        }
      });
    });
  }
}

// 8. Footer Image Burst
function initFooterBurst() {
  if (document.querySelector(".jm-view-contact")) return;

  const footer = document.querySelector("footer");
  const burstBox = document.querySelector(".jm-burst");
  if (!footer || !burstBox) return;

  let hasBurst = false;
  const images = Array.from({ length: 10 }, (_, i) => `./images/work-items/work-item-${i + 1}.jpg`);

  const spawnBurst = () => {
    if (hasBurst) return;
    hasBurst = true;
    burstBox.innerHTML = "";

    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.className = "jm-burst-bit";
      burstBox.appendChild(img);

      const vx = (Math.random() - 0.5) * 20;
      const vy = -14 - Math.random() * 8;
      const rotSpeed = (Math.random() - 0.5) * 15;
      let x = 0, y = 0, rot = 0;
      let curVy = vy, curVx = vx;

      const animateBit = () => {
        curVy += 0.35;
        curVx *= 0.98;
        x += curVx;
        y += curVy;
        rot += rotSpeed;
        img.style.transform = `translate(calc(-50% + ${x}px), ${y}px) rotate(${rot}deg)`;
        if (y < burstBox.offsetHeight * 1.5) {
          requestAnimationFrame(animateBit);
        }
      };

      requestAnimationFrame(animateBit);
    });
  };

  window.addEventListener("scroll", () => {
    const rect = footer.getBoundingClientRect();
    if (rect.top <= window.innerHeight + 100 && !hasBurst) {
      spawnBurst();
    }
  });
}

// 9. Interactive Contact Form Handlers (Syncs with Admin Panel Inbox!)
function initContactForms() {
  const forms = document.querySelectorAll(".contact-submit-form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("[name='name']").value.trim();
      const contact = form.querySelector("[name='contact']").value.trim();
      const message = form.querySelector("[name='message']").value.trim();

      if (typeof DataStore !== "undefined") {
        DataStore.addMessage({ name, contact, message });
      }

      alert(`✨ Rahmat, ${name}! Xabaringiz yuborildi va qabul qilindi. Tez orada siz bilan bog'lanaman.`);
      form.reset();
    });
  });
}

// Master Initialization
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  syncDynamicData();
  initCurtains();
  initDrawer();
  initHomeHero();
  initReel();
  initPanels();
  initWorkPage();
  initAboutPage();
  initFooterBurst();
  initContactForms();

  window.addEventListener("portfolio_data_updated", () => {
    syncDynamicData();
  });
});
