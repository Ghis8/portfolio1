/* ═══════════════════════════════════════
   GHISLAIN KONGOLO — main script.js
   ═══════════════════════════════════════ */

/* ── Typed.js ── */
const typed = new Typed(".typing", {
  strings: ["Web Apps.", "Mobile Apps.", "Fast Backends.", "Clean Interfaces."],
  typeSpeed: 80,
  backSpeed: 40,
  backDelay: 1800,
  loop: true,
});

/* ── Age ── */
(function () {
  const bYear = 1998;
  const now = new Date();
  let age = now.getFullYear() - bYear;
  if (now.getMonth() < 9 || (now.getMonth() === 9 && now.getDate() < 15)) age--;
  const el = document.getElementById("age");
  if (el) el.textContent = age;
})();

/* ── Custom Cursor ── */
(function () {
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursor-follower");
  if (!cursor || !follower) return;

  let mx = 0,
    my = 0;
  let fx = 0,
    fy = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.transform = `translate(${mx}px, ${my}px)`;
  });

  function animateFollower() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.transform = `translate(${fx}px, ${fy}px)`;
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Scale on interactive elements
  document
    .querySelectorAll("a, button, .port-inner, .service-card")
    .forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform += " scale(2)";
        follower.style.transform += " scale(1.5)";
        follower.style.opacity = "0.15";
      });
      el.addEventListener("mouseleave", () => {
        follower.style.opacity = "0.5";
      });
    });

  document.addEventListener("mouseleave", () => {
    follower.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    follower.style.opacity = "0.5";
  });
})();

/* ── Scroll Reveal ── */
(function () {
  const items = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          // Remove to re-animate on scroll back
          // Comment this out if you only want one-time animation
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.12 },
  );

  items.forEach((el) => observer.observe(el));
})();

/* ── Skill Bar Animation ── */
(function () {
  const bars = document.querySelectorAll(".skill-fill[data-width]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const w = el.getAttribute("data-width");
          setTimeout(() => {
            el.style.width = w + "%";
          }, 200);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.3 },
  );

  bars.forEach((bar) => observer.observe(bar));
})();

/* ── Active Nav Link on Scroll ── */
(function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("data-section") === id) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.4 },
  );

  sections.forEach((s) => observer.observe(s));
})();

/* ── Mobile Nav ── */
(function () {
  const toggler = document.getElementById("navToggler");
  const aside = document.querySelector(".aside");
  if (!toggler || !aside) return;

  toggler.addEventListener("click", () => {
    toggler.classList.toggle("open");
    aside.classList.toggle("open");
  });

  // Close on nav link click
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      toggler.classList.remove("open");
      aside.classList.remove("open");
    });
  });
})();

/* ── Smooth scroll for nav links ── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ── Contact Form ── */
(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = "Sent!";
    btn.style.background = "#22c55e";
    btn.style.borderColor = "#22c55e";
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = "";
      btn.style.borderColor = "";
      form.reset();
    }, 3000);
  });
})();
