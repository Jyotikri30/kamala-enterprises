/* ==========================================================================
   Kamala Interprises — Main Init
   ========================================================================== */

/* Loading screen */
window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");
  const bar = document.getElementById("loader-bar-fill");
  if (bar) bar.style.width = "100%";
  setTimeout(() => {
    if (loader) loader.classList.add("hidden");
    document.body.classList.remove("no-scroll");
  }, 500);
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("no-scroll");
  // Fallback in case 'load' fires slowly on the demo (all assets are local/inline)
  setTimeout(() => {
    const loader = document.getElementById("loading-screen");
    if (loader && !loader.classList.contains("hidden")) {
      loader.classList.add("hidden");
      document.body.classList.remove("no-scroll");
    }
  }, 2200);
});

/* Ripple effect on buttons */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn, .gallery-filters button");
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement("span");
  const size = Math.max(rect.width, rect.height);
  ripple.className = "ripple";
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
  ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 650);
});

/* FAQ accordion */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-item").forEach(item => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    q.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach(other => {
        other.classList.remove("active");
        other.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!isActive) {
        item.classList.add("active");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });
});

/* Smooth active-link highlight based on section in view */
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => navObserver.observe(s));
});

/* Current year in footer */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
