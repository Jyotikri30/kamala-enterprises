/* ==========================================================================
   Kamala Interprises — Scroll, Reveal & Ambient Effects
   ========================================================================== */

/* Navbar shrink / glass on scroll */
const navbar = document.getElementById("navbar");
const scrollProgress = document.getElementById("scroll-progress");
const topFab = document.getElementById("fab-top");

function onScrollHandler() {
  const y = window.scrollY || document.documentElement.scrollTop;

  if (navbar) navbar.classList.toggle("scrolled", y > 40);
  if (topFab) topFab.classList.toggle("show", y > 500);

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollProgress) scrollProgress.style.width = docHeight > 0 ? `${(y / docHeight) * 100}%` : "0%";
}
window.addEventListener("scroll", onScrollHandler, { passive: true });
onScrollHandler();

if (topFab) {
  topFab.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* Mobile nav toggle */
const navToggle = document.getElementById("nav-toggle");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navbar.classList.toggle("menu-open");
    navToggle.classList.toggle("active");
  });
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => navbar.classList.remove("menu-open"));
  });
}

/* Generic reveal-on-scroll via IntersectionObserver */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

function observeReveal(nodeList) {
  nodeList.forEach(el => revealObserver.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  observeReveal(document.querySelectorAll(".reveal, .reveal-scale, .stagger"));
});

/* Animated counters */
function animateCounter(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  const duration = 1800;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(eased * target);
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-count]").forEach(el => counterObserver.observe(el));
});

/* Timeline progressive fill */
const timelineSection = document.getElementById("process");
if (timelineSection) {
  const fill = document.querySelector(".timeline-fill");
  const steps = document.querySelectorAll(".timeline-step");
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (fill) fill.style.width = "90%";
        steps.forEach((s, i) => setTimeout(() => s.classList.add("in-view"), i * 220));
        timelineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  timelineObserver.observe(timelineSection);
}

/* Mouse-following ambient glow (desktop only) */
const mouseGlow = document.getElementById("mouse-glow");
if (mouseGlow && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    mouseGlow.style.left = e.clientX + "px";
    mouseGlow.style.top = e.clientY + "px";
  }, { passive: true });
} else if (mouseGlow) {
  mouseGlow.style.display = "none";
}

/* Hero ambient particles + light rays (generated once) */
document.addEventListener("DOMContentLoaded", () => {
  const bg = document.querySelector(".hero-bg");
  if (!bg) return;

  for (let i = 0; i < 18; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.top = 50 + Math.random() * 50 + "%";
    p.style.animationDuration = 8 + Math.random() * 10 + "s";
    p.style.animationDelay = Math.random() * 6 + "s";
    bg.appendChild(p);
  }
  for (let i = 0; i < 4; i++) {
    const r = document.createElement("span");
    r.className = "hero-ray";
    r.style.left = 15 + i * 24 + "%";
    r.style.top = "-40px";
    r.style.transform = `rotate(${-8 + i * 5}deg)`;
    bg.appendChild(r);
  }
});

/* Lazy-load images with .lazy class (progressive fade) */
document.addEventListener("DOMContentLoaded", () => {
  const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) img.src = img.dataset.src;
        img.classList.add("loaded");
        lazyObserver.unobserve(img);
      }
    });
  }, { rootMargin: "120px" });
  document.querySelectorAll("img.lazy").forEach(img => lazyObserver.observe(img));
});
