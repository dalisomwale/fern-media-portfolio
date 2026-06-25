/* ===================================================================
   FERN MEDIA — Site Script
   =================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------
     Portfolio data
     All "visual" fields are CSS gradient pairs standing in for real
     photography. Replace --c1/--c2 usage by swapping the element's
     background to a real <img>, or set data-image="path/to/file.jpg"
     and update renderMasonry() to use it instead of the gradient.
     --------------------------------------------------------------- */
  const PORTFOLIO = [
    {
      id: 1,
      cat: "portrait",
      catLabel: "Portrait",
      title: "Quiet Confidence",
      desc: "A natural-light studio portrait session focused on ease in front of the camera.",
      c1: "#2a2113",
      c2: "#0c0b09",
      size: "tall",
    },
    {
      id: 2,
      cat: "corporate",
      catLabel: "Corporate",
      title: "The Boardroom Series",
      desc: "Executive headshots for a Lusaka-based financial advisory firm.",
      c1: "#1c1a15",
      c2: "#0a0908",
      size: "wide",
    },
    {
      id: 3,
      cat: "event",
      catLabel: "Events",
      title: "First Dance",
      desc: "Wedding coverage capturing the room exactly as it felt that evening.",
      c1: "#251c10",
      c2: "#0b0a08",
      size: "tall",
    },
    {
      id: 4,
      cat: "branding",
      catLabel: "Personal Branding",
      title: "Built From Scratch",
      desc: "A founder brand shoot for an emerging Zambian skincare label.",
      c1: "#1f1c12",
      c2: "#0c0b09",
      size: "square",
    },
    {
      id: 5,
      cat: "lifestyle",
      catLabel: "Lifestyle",
      title: "Sunday Market",
      desc: "Documentary-style lifestyle coverage shot on location in Lusaka.",
      c1: "#231d11",
      c2: "#0a0907",
      size: "wide",
    },
    {
      id: 6,
      cat: "creative",
      catLabel: "Creative",
      title: "Static & Motion",
      desc: "A behind-the-scenes look at a car photography concept shoot.",
      c1: "#181712",
      c2: "#080807",
      size: "tall",
    },
    {
      id: 7,
      cat: "portrait",
      catLabel: "Portrait",
      title: "Golden Hour, Studio Light",
      desc: "Editorial portraits exploring contrast between warm and cool light.",
      c1: "#262013",
      c2: "#0d0c09",
      size: "square",
    },
    {
      id: 8,
      cat: "corporate",
      catLabel: "Corporate",
      title: "Company Culture",
      desc: "Internal brand photography documenting a growing Lusaka tech team.",
      c1: "#1b1914",
      c2: "#0a0908",
      size: "tall",
    },
    {
      id: 9,
      cat: "event",
      catLabel: "Events",
      title: "The Toast",
      desc: "Candid event documentation from a corporate product launch.",
      c1: "#211c12",
      c2: "#0a0907",
      size: "wide",
    },
    {
      id: 10,
      cat: "lifestyle",
      catLabel: "Lifestyle",
      title: "Morning Routine",
      desc: "A lifestyle editorial built around everyday ritual and natural light.",
      c1: "#1d1a13",
      c2: "#0a0908",
      size: "square",
    },
    {
      id: 11,
      cat: "branding",
      catLabel: "Personal Branding",
      title: "The Creator Economy",
      desc: "Personal branding content for a Zambian content creator's relaunch.",
      c1: "#221d12",
      c2: "#0b0a08",
      size: "tall",
    },
    {
      id: 12,
      cat: "creative",
      catLabel: "Creative",
      title: "Negative Space",
      desc: "A conceptual self-directed project exploring shadow and minimalism.",
      c1: "#161510",
      c2: "#070706",
      size: "wide",
    },
  ];

  const SIZE_ROWSPAN = { square: 26, tall: 36, wide: 20 };
  const SIZE_COLSPAN = { square: 1, tall: 1, wide: 2 };

  /* ---------------------------------------------------------------
     Header scroll state + mobile nav toggle
     --------------------------------------------------------------- */
  const header = document.getElementById("siteHeader");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  function onScroll() {
    if (window.scrollY > 24) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.getElementById("scrollIndicator").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });

  /* ---------------------------------------------------------------
     Hero slideshow
     --------------------------------------------------------------- */
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const frameCurrent = document.getElementById("frameCurrent");
  let slideIndex = 0;

  function showSlide(i) {
    slides[slideIndex].classList.remove("is-active");
    slideIndex = i;
    slides[slideIndex].classList.add("is-active");
    frameCurrent.textContent = String(slideIndex + 1).padStart(2, "0");
  }

  if (
    slides.length > 1 &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    setInterval(() => {
      showSlide((slideIndex + 1) % slides.length);
    }, 5200);
  }

  /* ---------------------------------------------------------------
     Hero aperture — subtle cursor parallax (desktop only)
     --------------------------------------------------------------- */
  const aperture = document.getElementById("heroAperture");
  const heroSection = document.getElementById("hero");
  if (window.matchMedia("(min-width: 861px)").matches) {
    heroSection.addEventListener("mousemove", (e) => {
      const rect = heroSection.getBoundingClientRect();
      const dx = (e.clientX - rect.left) / rect.width - 0.5;
      const dy = (e.clientY - rect.top) / rect.height - 0.5;
      aperture.style.transform = `translateY(calc(-50% + ${dy * 14}px)) translateX(${dx * 14}px)`;
    });
  }

  /* ---------------------------------------------------------------
     Masonry render + filters
     --------------------------------------------------------------- */
  const grid = document.getElementById("masonryGrid");
  const filterBar = document.getElementById("portfolioFilters");

  function renderMasonry() {
    grid.innerHTML = PORTFOLIO.map(
      (item) => `
      <button class="masonry-item" type="button"
        data-cat="${item.cat}" data-id="${item.id}"
        style="grid-row-end: span ${SIZE_ROWSPAN[item.size]}; grid-column-end: span ${SIZE_COLSPAN[item.size]};"
        aria-label="View ${item.title}">
        <span class="masonry-visual" style="--c1:${item.c1}; --c2:${item.c2};">
          <span class="masonry-cat-tag">${item.catLabel}</span>
          <span class="masonry-label">${item.title}</span>
        </span>
      </button>
    `,
    ).join("");

    grid.querySelectorAll(".masonry-item").forEach((el) => {
      el.addEventListener("click", () => openLightbox(Number(el.dataset.id)));
    });
  }
  renderMasonry();

  filterBar.addEventListener("click", (e) => {
    const pill = e.target.closest(".filter-pill");
    if (!pill) return;

    filterBar.querySelectorAll(".filter-pill").forEach((p) => {
      p.classList.remove("is-active");
      p.setAttribute("aria-selected", "false");
    });
    pill.classList.add("is-active");
    pill.setAttribute("aria-selected", "true");

    const filter = pill.dataset.filter;
    grid.querySelectorAll(".masonry-item").forEach((item) => {
      const match = filter === "all" || item.dataset.cat === filter;
      item.classList.toggle("is-hidden", !match);
    });
  });

  /* ---------------------------------------------------------------
     Lightbox
     --------------------------------------------------------------- */
  const lightbox = document.getElementById("lightbox");
  const lbFrame = document.getElementById("lightboxFrame");
  const lbCat = document.getElementById("lightboxCat");
  const lbTitle = document.getElementById("lightboxTitle");
  const lbDesc = document.getElementById("lightboxDesc");
  let activeId = null;
  let lastFocused = null;

  function getVisibleIds() {
    const activePill = filterBar.querySelector(".filter-pill.is-active");
    const filter = activePill ? activePill.dataset.filter : "all";
    return PORTFOLIO.filter((p) => filter === "all" || p.cat === filter).map(
      (p) => p.id,
    );
  }

  function openLightbox(id) {
    const item = PORTFOLIO.find((p) => p.id === id);
    if (!item) return;
    activeId = id;
    lastFocused = document.activeElement;

    lbFrame.style.setProperty("--c1", item.c1);
    lbFrame.style.setProperty("--c2", item.c2);
    lbCat.textContent = item.catLabel;
    lbTitle.textContent = item.title;
    lbDesc.textContent = item.desc;

    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("lightboxClose").focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    activeId = null;
    if (lastFocused) lastFocused.focus();
  }

  function stepLightbox(dir) {
    const ids = getVisibleIds();
    const pos = ids.indexOf(activeId);
    if (pos === -1) return;
    const next = (pos + dir + ids.length) % ids.length;
    openLightbox(ids[next]);
  }

  document
    .getElementById("lightboxClose")
    .addEventListener("click", closeLightbox);
  document
    .getElementById("lightboxPrev")
    .addEventListener("click", () => stepLightbox(-1));
  document
    .getElementById("lightboxNext")
    .addEventListener("click", () => stepLightbox(1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") stepLightbox(1);
    if (e.key === "ArrowLeft") stepLightbox(-1);
  });

  /* ---------------------------------------------------------------
     Testimonial carousel
     --------------------------------------------------------------- */
  const tCards = Array.from(document.querySelectorAll(".testimonial-card"));
  const tDotsWrap = document.getElementById("testimonialDots");
  let tIndex = 0;
  let tTimer = null;

  tDotsWrap.innerHTML = tCards
    .map(
      (_, i) =>
        `<button class="testimonial-dot${i === 0 ? " is-active" : ""}" aria-label="Show testimonial ${i + 1}" data-i="${i}"></button>`,
    )
    .join("");
  const tDots = Array.from(tDotsWrap.querySelectorAll(".testimonial-dot"));

  function showTestimonial(i) {
    tCards[tIndex].classList.remove("is-active");
    tDots[tIndex].classList.remove("is-active");
    tIndex = i;
    tCards[tIndex].classList.add("is-active");
    tDots[tIndex].classList.add("is-active");
  }

  tCards[0].classList.add("is-active");

  function startAutoplay() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    tTimer = setInterval(
      () => showTestimonial((tIndex + 1) % tCards.length),
      6000,
    );
  }
  function stopAutoplay() {
    if (tTimer) clearInterval(tTimer);
  }

  tDotsWrap.addEventListener("click", (e) => {
    const dot = e.target.closest(".testimonial-dot");
    if (!dot) return;
    stopAutoplay();
    showTestimonial(Number(dot.dataset.i));
    startAutoplay();
  });

  startAutoplay();

  /* ---------------------------------------------------------------
     Instagram grid (placeholder cells, same swap pattern as masonry)
     --------------------------------------------------------------- */
  const igGrid = document.getElementById("instagramGrid");
  const igTones = [
    ["#241f14", "#0b0a08"],
    ["#1c1a15", "#0a0908"],
    ["#262013", "#0d0c09"],
    ["#1f1c12", "#0c0b09"],
    ["#211c12", "#0a0907"],
    ["#181712", "#080807"],
  ];
  igGrid.innerHTML = igTones
    .map(
      ([c1, c2], i) =>
        `<div class="instagram-cell" style="--c1:${c1}; --c2:${c2};" aria-hidden="true"></div>`,
    )
    .join("");

  /* ---------------------------------------------------------------
     Contact form — static placeholder handling
     --------------------------------------------------------------- */
  const form = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formNote.textContent =
      "Thanks — this is a static preview, so nothing was actually sent yet. Connect a backend or form service to go live.";
    formNote.style.color = "var(--color-gold)";
  });

  /* ---------------------------------------------------------------
     Footer year
     --------------------------------------------------------------- */
  document.getElementById("footerYear").textContent = new Date().getFullYear();
})();
