/* ═══════════════════════════════════════
   GHISLAIN KONGOLO — style-switcher.js
   ═══════════════════════════════════════ */

/* ── Color Switcher ── */
function setActiveStyle(color) {
  // Load the color CSS dynamically
  const existing = document.getElementById("theme-color");
  if (existing) existing.href = `css/${color}.css`;

  // Update active swatch
  document.querySelectorAll(".swatch").forEach((sw) => {
    sw.classList.remove("active-swatch");
    if (sw.classList.contains(color)) {
      sw.classList.add("active-swatch");
    }
  });

  // Persist preference
  localStorage.setItem("preferred-color", color);
}

/* ── Toggle switcher panel ── */
const styleSwitcherToggler = document.getElementById("styleSwitcherToggler");
const switcherPanel = document.querySelector(".switcher-panel");

if (styleSwitcherToggler && switcherPanel) {
  styleSwitcherToggler.addEventListener("click", () => {
    switcherPanel.classList.toggle("open");
  });

  // Close on scroll
  window.addEventListener("scroll", () => {
    switcherPanel.classList.remove("open");
  });
}

/* ── Dark / Light Mode ── */
const dayNightBtn = document.getElementById("dayNight");
const iconMoon = dayNightBtn?.querySelector(".icon-moon");
const iconSun = dayNightBtn?.querySelector(".icon-sun");

function applyTheme(dark) {
  document.body.classList.toggle("dark", dark);
  if (iconMoon && iconSun) {
    iconMoon.classList.toggle("hidden", dark);
    iconSun.classList.toggle("hidden", !dark);
  }
  localStorage.setItem("dark-mode", dark ? "1" : "0");
}

if (dayNightBtn) {
  dayNightBtn.addEventListener("click", () => {
    applyTheme(!document.body.classList.contains("dark"));
  });
}

/* ── Restore preferences on load ── */
window.addEventListener("load", () => {
  const savedDark = localStorage.getItem("dark-mode") === "1";
  const savedColor = localStorage.getItem("preferred-color");

  applyTheme(savedDark);
  if (savedColor) setActiveStyle(savedColor);
});
