/* ===================================================================
   FERN MEDIA — Site Script
   =================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------
     Portfolio data – now with real image filenames (without extension)
     --------------------------------------------------------------- */
  const PORTFOLIO = [
    {
      id: 1,
      cat: "portrait",
      catLabel: "Portrait",
      title: "Quiet Confidence",
      desc: "A natural-light studio portrait session focused on ease in front of the camera.",
      image: "p1",
      size: "tall",
    },
    {
      id: 2,
      cat: "corporate",
      catLabel: "Corporate",
      title: "The Boardroom Series",
      desc: "Executive headshots for a Lusaka-based financial advisory firm.",
      image: "p2",
      size: "wide",
    },
    {
      id: 3,
      cat: "event",
      catLabel: "Events",
      title: "First Dance",
      desc: "Wedding coverage capturing the room exactly as it felt that evening.",
      image: "p3",
      size: "tall",
    },
    {
      id: 4,
      cat: "branding",
      catLabel: "Personal Branding",
      title: "Built From Scratch",
      desc: "A founder brand shoot for an emerging Zambian skincare label.",
      image: "p4",
      size: "square",
    },
    {
      id: 5,
      cat: "lifestyle",
      catLabel: "Lifestyle",
      title: "Sunday Market",
      desc: "Documentary-style lifestyle coverage shot on location in Lusaka.",
      image: "p5",
      size: "wide",
    },
    {
      id: 6,
      cat: "creative",
      catLabel: "Creative",
      title: "Static & Motion",
      desc: "A behind-the-scenes look at a car photography concept shoot.",
      image: "p6",
      size: "tall",
    },
    {
      id: 7,
      cat: "portrait",
      catLabel: "Portrait",
      title: "Golden Hour, Studio Light",
      desc: "Editorial portraits exploring contrast between warm and cool light.",
      image: "p7",
      size: "square",
    },
    {
      id: 8,
      cat: "corporate",
      catLabel: "Corporate",
      title: "Company Culture",
      desc: "Internal brand photography documenting a growing Lusaka tech team.",
      image: "p8",
      size: "tall",
    },
    {
      id: 9,
      cat: "event",
      catLabel: "Events",
      title: "The Toast",
      desc: "Candid event documentation from a corporate product launch.",
      image: "p1", // reusing p1
      size: "wide",
    },
    {
      id: 10,
      cat: "lifestyle",
      catLabel: "Lifestyle",
      title: "Morning Routine",
      desc: "A lifestyle editorial built around everyday ritual and natural light.",
      image: "p2", // reusing p2
      size: "square",
    },
    {
      id: 11,
      cat: "branding",
      catLabel: "Personal Branding",
      title: "The Creator Economy",
      desc: "Personal branding content for a Zambian content creator's relaunch.",
      image: "p3", // reusing p3
      size: "tall",
    },
    {
      id: 12,
      cat: "creative",
      catLabel: "Creative",
      title: "Negative Space",
      desc: "A conceptual self-directed project exploring shadow and minimalism.",
      image: "p4", // reusing p4
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
        <span class="masonry-visual" style="background-image: url('assets/${item.image}.jpg'); background-size: cover; background-position: center;">
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

    // Show real image
    lbFrame.innerHTML = `<img src="assets/${item.image}.jpg" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-md);">`;

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
     Instagram grid (placeholder cells – replace with your own images)
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
