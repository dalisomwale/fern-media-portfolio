/* =========================================================
   Fern Media — Interactions
   ========================================================= */

// ---------- Year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Nav scroll state ----------
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Hero slideshow ----------
const heroImgs = document.querySelectorAll(".hero-img");
let heroIdx = 0;
if (heroImgs.length > 1) {
  setInterval(() => {
    heroImgs[heroIdx].classList.remove("active");
    heroIdx = (heroIdx + 1) % heroImgs.length;
    heroImgs[heroIdx].classList.add("active");
  }, 5000);
}

// ---------- Portfolio data ----------
const projects = [
  {
    id: "p1",
    title: "Golden Hour",
    category: "Portrait",
    desc: "Studio portrait series exploring warmth, posture, and stillness.",
    img: "assets/images/portfolio-portrait.jpg",
    tall: true,
  },
  {
    id: "p2",
    title: "The Executive",
    category: "Corporate",
    desc: "Boardroom headshot for a Lusaka-based fintech founder.",
    img: "assets/images/portfolio-executive.jpg",
  },
  {
    id: "p3",
    title: "Vows",
    category: "Event",
    desc: "An intimate ceremony captured under candlelight and chandeliers.",
    img: "assets/images/portfolio-vows.jpg",
    tall: true,
  },
  {
    id: "p4",
    title: "Morning Pages",
    category: "Lifestyle",
    desc: "A quiet morning ritual, captured in natural window light.",
    img: "assets/images/portfolio-lifestyle.jpg",
  },
  {
    id: "p5",
    title: "Maison Noir",
    category: "Branding",
    desc: "Product story for a luxury fragrance house.",
    img: "assets/images/portfolio-branding.jpg",
  },
  {
    id: "p6",
    title: "Spectrum",
    category: "Creative",
    desc: "Color-gel portrait study exploring identity and contrast.",
    img: "assets/images/portfolio-creative.jpg",
    tall: true,
  },
  {
    id: "p7",
    title: "Founder Series",
    category: "Personal Branding",
    desc: "A founder portrait set built around warmth and presence.",
    img: "assets/images/portfolio-personal.jpg",
  },
];

const masonry = document.getElementById("masonry");
masonry.innerHTML = projects
  .map(
    (p) => `
  <button class="tile ${p.tall ? "tall" : ""}" data-id="${p.id}">
    <img src="${p.img}" alt="${p.title}" loading="lazy" />
    <div class="overlay"></div>
    <div class="meta">
      <div class="cat">${p.category.toUpperCase()}</div>
      <div class="title">${p.title}</div>
    </div>
    <span class="corner"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
  </button>
`,
  )
  .join("");

// ---------- Lightbox ----------
const lb = document.getElementById("lightbox");
const lbInner = document.getElementById("lbInner");
const lbClose = document.getElementById("lbClose");

function openLightbox(project) {
  lbInner.innerHTML = `
    <img src="${project.img}" alt="${project.title}" />
    <div>
      <div class="cat">${project.category.toUpperCase()}</div>
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <a href="#contact" class="btn btn-outline-gold" style="margin-top:1.5rem">
        Book a similar session <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  `;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";

  // Close via "Book a session" link
  lbInner.querySelector("a")?.addEventListener("click", closeLightbox);
}

function closeLightbox() {
  lb.classList.remove("open");
  document.body.style.overflow = "";
}

masonry.addEventListener("click", (e) => {
  const tile = e.target.closest(".tile");
  if (!tile) return;
  const project = projects.find((p) => p.id === tile.dataset.id);
  if (project) openLightbox(project);
});

lbClose.addEventListener("click", closeLightbox);
lb.addEventListener("click", (e) => {
  if (e.target === lb) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// ---------- Contact form (static, ready for backend) ----------
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // TODO: wire to your backend (Formspree, Netlify Forms, custom API, etc.)
  formMsg.textContent =
    "Thanks — your message is queued. We'll be in touch within 24 hours.";
  form.reset();
});

// ---------- Reveal on scroll ----------
const revealTargets = document.querySelectorAll(
  ".section h2, .section .eyebrow, .svc, .feat, .test, .tile, .ig-grid a, .about-photo, .about-copy, .contact-form, .contact-list, .head-note",
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealTargets.forEach((el) => io.observe(el));
