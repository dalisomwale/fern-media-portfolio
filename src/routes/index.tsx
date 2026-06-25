import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Camera,
  Sparkles,
  Building2,
  CalendarHeart,
  Share2,
  Wand2,
  Eye,
  Award,
  Layers,
  Zap,
  HeartHandshake,
  Brush,
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Quote,
  X,
  Menu,
} from "lucide-react";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fern Media — Premium Photography by Fernando Yakobo" },
      {
        name: "description",
        content:
          "Premium photography, personal branding, and corporate storytelling by Fernando Yakobo. Crafting timeless visual stories from Lusaka, Zambia.",
      },
      { property: "og:title", content: "Fern Media — Premium Photography by Fernando Yakobo" },
      {
        property: "og:description",
        content: "Premium Photography • Personal Branding • Corporate Storytelling — Lusaka, Zambia.",
      },
      { property: "og:image", content: hero1 },
      { name: "twitter:image", content: hero1 },
    ],
  }),
  component: Index,
});

const HERO_SLIDES = [hero1, hero2, hero3];

const PORTFOLIO = [
  { src: p1, title: "Golden Hour", category: "Portrait", desc: "Editorial portrait series exploring light, fabric, and form.", span: "row-span-2" },
  { src: p2, title: "The Executive", category: "Corporate", desc: "Boardroom headshot for a Lusaka-based fintech founder.", span: "" },
  { src: p3, title: "Vows", category: "Event", desc: "An intimate cathedral ceremony, captured in available light.", span: "row-span-2" },
  { src: p4, title: "Morning Pages", category: "Lifestyle", desc: "Daybreak with an entrepreneur — natural light, real moments.", span: "" },
  { src: p5, title: "Spectra", category: "Creative", desc: "Conceptual study in colour gels and cinematic shadow.", span: "row-span-2" },
  { src: p6, title: "Maison Noir", category: "Branding", desc: "Product story for a luxury fragrance house.", span: "" },
  { src: p7, title: "Stage Light", category: "Event", desc: "Keynote coverage for a regional leadership summit.", span: "" },
  { src: p8, title: "She Builds", category: "Personal Branding", desc: "Founder identity shoot — strength, warmth, presence.", span: "" },
];

const SERVICES = [
  { icon: Camera, title: "Portrait Photography", desc: "Professional portraits and refined studio sessions that flatter and feel like you." },
  { icon: Sparkles, title: "Personal Branding", desc: "Distinctive content for entrepreneurs, creators, and professionals." },
  { icon: Building2, title: "Corporate Photography", desc: "Executive headshots and company storytelling for confident brands." },
  { icon: CalendarHeart, title: "Event Coverage", desc: "Documentary-led coverage that preserves the energy of the room." },
  { icon: Share2, title: "Social Media Content", desc: "Scroll-stopping photography built for digital marketing and growth." },
  { icon: Wand2, title: "Creative Direction", desc: "End-to-end visual storytelling, concepting, and campaign planning." },
];

const FEATURES = [
  { icon: Eye, title: "Creative Vision", desc: "Concepts that elevate the everyday into editorial." },
  { icon: Award, title: "Professional Quality", desc: "Considered craft from capture to final frame." },
  { icon: Layers, title: "Attention to Detail", desc: "Light, posture, wardrobe — nothing left to chance." },
  { icon: Zap, title: "Fast Delivery", desc: "Previews within days. Final galleries on schedule." },
  { icon: HeartHandshake, title: "Personal Approach", desc: "A calm set and a real collaboration, every time." },
  { icon: Brush, title: "High-End Editing", desc: "Cinematic colour and skin work without losing soul." },
];

const TESTIMONIALS = [
  { name: "Chanda Mwila", role: "Founder, Lumière Studio", quote: "Fernando captured our brand in a way we couldn't articulate ourselves. The images feel like us — only sharper." },
  { name: "Mr. Banda", role: "CEO, Meridian Capital", quote: "From boardroom portraits to our annual gala, Fern Media set a new standard for what professional photography should feel like." },
  { name: "Tasha & Joe", role: "Wedding Clients", quote: "We re-live the day every time we open the gallery. He saw moments we didn't even know happened." },
];

const INSTAGRAM_GRID = [p3, p1, p5, p8, p2, p6, p7, p4];

function Index() {
  const [slide, setSlide] = useState(0);
  const [lightbox, setLightbox] = useState<null | (typeof PORTFOLIO)[number]>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 5500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
  }, [lightbox]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#journal", label: "Journal" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="glass mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full px-5 py-3 sm:px-7">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 font-display text-lg font-bold gold-text">
              F
            </span>
            <span className="font-display text-base tracking-wide">
              Fern <span className="gold-text">Media</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-gold px-5 py-2 text-sm font-medium text-primary-foreground shadow-gold transition hover:brightness-110 md:inline-flex"
          >
            Book a Session
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && (
          <div className="glass mx-4 mt-2 rounded-2xl p-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-gold px-4 py-2 text-center text-sm font-medium text-primary-foreground"
              >
                Book a Session
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        {HERO_SLIDES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[1600ms] ease-out"
            style={{ opacity: i === slide ? 1 : 0 }}
          >
            <img
              src={src}
              alt="Featured photography by Fernando Yakobo"
              className="h-full w-full object-cover animate-kenburns"
              fetchPriority={i === 0 ? "high" : "auto"}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.13_0_0/0.7)_100%)]" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/90 animate-fade-up">
            <span className="h-px w-10 bg-gold/60" />
            Fern Media · Est. Lusaka
            <span className="h-px w-10 bg-gold/60" />
          </div>
          <h1 className="font-display text-5xl font-medium leading-[1.05] text-foreground animate-fade-up sm:text-6xl md:text-7xl lg:text-[88px]">
            Capturing Stories <br className="hidden sm:block" />
            That Last <span className="italic gold-text">Forever</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm text-muted-foreground animate-fade-up sm:text-base">
            Premium Photography · Personal Branding · Corporate Storytelling
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row animate-fade-up">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-gold transition hover:brightness-110"
            >
              View Portfolio
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium backdrop-blur transition hover:border-gold/60 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            <div className="flex flex-col items-center gap-2">
              <span>Scroll</span>
              <span className="h-10 w-px bg-gradient-to-b from-gold/80 to-transparent animate-scroll-hint" />
            </div>
          </div>

          {/* slide dots */}
          <div className="absolute bottom-8 right-8 hidden gap-2 md:flex">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === slide ? "w-10 bg-gold" : "w-5 bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 lg:py-36">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/30 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img src={aboutPortrait} alt="Fernando Yakobo, founder of Fern Media" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="glass absolute -bottom-6 -right-4 hidden rounded-2xl px-5 py-4 sm:block">
              <div className="font-display text-3xl gold-text">8+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Years Behind the Lens</div>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/90">
              <span className="h-px w-8 bg-gold/60" /> About
            </div>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Fernando Yakobo — <span className="italic gold-text">visual storyteller</span> from Lusaka.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Fern Media is the studio practice of Fernando Yakobo, a Zambian photographer working at the
              intersection of portraiture, branding, and editorial. The work is quiet but intentional —
              shaped by light, restraint, and a deep respect for the people in front of the lens.
            </p>
            <p className="mt-4 text-muted-foreground">
              From founders and creatives to weddings, summits, and luxury brands, every project is approached as
              a story worth telling well. The goal is simple: images that still feel true a decade from now.
            </p>

            <figure className="mt-8 border-l-2 border-gold/60 pl-5">
              <Quote className="mb-2 text-gold/70" size={18} />
              <blockquote className="font-display text-lg italic text-foreground/90 sm:text-xl">
                Every photograph should tell a story, create emotion, and leave a lasting impression.
              </blockquote>
            </figure>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <Stat n="200+" label="Clients" />
              <Stat n="50K+" label="Frames Delivered" />
              <Stat n="14" label="Awards & Features" />
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="relative px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/90">
                <span className="h-px w-8 bg-gold/60" /> Featured Work
              </div>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                Selected <span className="italic gold-text">Frames</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              A curated cross-section of recent commissions — portraits, brand stories, weddings, and creative
              projects shot across Zambia and beyond.
            </p>
          </div>

          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PORTFOLIO.map((item) => (
              <button
                key={item.title}
                onClick={() => setLightbox(item)}
                className={`group relative overflow-hidden rounded-2xl border border-white/5 ${item.span}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 transition group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-left">
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{item.category}</div>
                    <div className="mt-1 truncate font-display text-lg">{item.title}</div>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 bg-white/5 backdrop-blur transition group-hover:border-gold group-hover:bg-gold group-hover:text-primary-foreground">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative bg-gradient-to-b from-background via-ink to-background px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/90">
              <span className="h-px w-8 bg-gold/60" /> Services
            </div>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              What we <span className="italic gold-text">create together</span>.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group relative bg-background p-8 transition hover:bg-card sm:p-10">
                <div className="mb-6 inline-grid h-12 w-12 place-items-center rounded-xl border border-gold/40 text-gold transition group-hover:bg-gold group-hover:text-primary-foreground">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
                <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold/80 opacity-0 transition group-hover:opacity-100">
                  Enquire <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="relative px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/90">
                <span className="h-px w-8 bg-gold/60" /> Why Fern Media
              </div>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                Crafted with <span className="italic gold-text">care, calm, and craft</span>.
              </h2>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass group relative overflow-hidden rounded-2xl p-7 transition hover:border-gold/40">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition group-hover:bg-gold/20" />
                <Icon className="text-gold" size={22} />
                <h3 className="mt-5 font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <div className="mb-3 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/90">
              <span className="h-px w-8 bg-gold/60" /> Kind Words <span className="h-px w-8 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              From <span className="italic gold-text">the people</span> we've photographed.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.name}
                className="glass relative flex flex-col rounded-3xl p-8 transition hover:-translate-y-1 hover:border-gold/40"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Quote className="text-gold/70" size={22} />
                <blockquote className="mt-5 flex-1 font-display text-lg italic leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-5">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section id="journal" className="relative px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/90">
                <span className="h-px w-8 bg-gold/60" /> @fernando_yakobo
              </div>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                Follow <span className="italic gold-text">the journey</span>.
              </h2>
            </div>
            <a
              href="https://www.instagram.com/fernando_yakobo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-sm text-gold transition hover:bg-gold hover:text-primary-foreground"
            >
              <Instagram size={16} /> Follow on Instagram
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {INSTAGRAM_GRID.map((src, i) => (
              <a
                key={i}
                href="https://www.instagram.com/fernando_yakobo"
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <img src={src} alt="Instagram preview" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 grid place-items-center bg-background/70 opacity-0 transition group-hover:opacity-100">
                  <Instagram className="text-gold" size={26} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative bg-gradient-to-b from-background to-ink px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 md:grid-cols-2 md:gap-20">
            <div>
              <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/90">
                <span className="h-px w-8 bg-gold/60" /> Contact
              </div>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                Let's make something <span className="italic gold-text">unforgettable</span>.
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Booking portraits, weddings, brand work, and events across Lusaka and the region. Tell me a little
                about your project — I'll respond personally within 24 hours.
              </p>

              <div className="mt-10 space-y-5">
                <ContactRow icon={Phone} label="Phone" value="+260 97 000 0000" href="tel:+260970000000" />
                <ContactRow icon={Mail} label="Email" value="hello@fernmedia.co.zm" href="mailto:hello@fernmedia.co.zm" />
                <ContactRow icon={MapPin} label="Location" value="Lusaka, Zambia" />
              </div>

              <div className="mt-10 flex items-center gap-3">
                <Social href="https://www.instagram.com/fernando_yakobo" icon={Instagram} />
                <Social href="https://www.facebook.com/share/1BhJUEQsET" icon={Facebook} />
                <Social href="https://wa.me/260970000000" icon={Phone} label="WhatsApp" />
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you — your message has been prepared. Backend integration coming soon.");
              }}
              className="glass rounded-3xl p-7 sm:p-9"
            >
              <div className="grid gap-5">
                <Field label="Name" name="name" placeholder="Your full name" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                  <Field label="Phone" name="phone" type="tel" placeholder="+260 ..." />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project, dates, and what you're hoping to create..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-gold/60 focus:bg-white/10"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-medium text-primary-foreground shadow-gold transition hover:brightness-110"
                >
                  Send Message
                  <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 font-display text-lg font-bold gold-text">
              F
            </span>
            <div>
              <div className="font-display text-base">
                Fern <span className="gold-text">Media</span>
              </div>
              <div className="text-xs text-muted-foreground">Crafting Timeless Visual Stories.</div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#portfolio" className="hover:text-foreground">Portfolio</a>
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <Social href="https://www.instagram.com/fernando_yakobo" icon={Instagram} small />
            <Social href="https://www.facebook.com/share/1BhJUEQsET" icon={Facebook} small />
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Fern Media — All rights reserved.
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl animate-fade-up"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/10"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <div
            className="grid max-h-full w-full max-w-6xl gap-6 md:grid-cols-[1fr_320px]"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox.src} alt={lightbox.title} className="max-h-[80vh] w-full rounded-2xl object-contain" />
            <div className="flex flex-col justify-center">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{lightbox.category}</div>
              <h3 className="mt-2 font-display text-3xl">{lightbox.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground">{lightbox.desc}</p>
              <a
                href="#contact"
                onClick={() => setLightbox(null)}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-sm text-gold transition hover:bg-gold hover:text-primary-foreground"
              >
                Book a similar session <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl gold-text">{n}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="group flex items-center gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold transition group-hover:bg-gold group-hover:text-primary-foreground">
        <Icon size={16} />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
        <div className="truncate text-sm">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Social({
  href,
  icon: Icon,
  label,
  small,
}: {
  href: string;
  icon: React.ComponentType<{ size?: number }>;
  label?: string;
  small?: boolean;
}) {
  const size = small ? 16 : 18;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label || "Social link"}
      className={`grid place-items-center rounded-full border border-white/15 bg-white/5 transition hover:border-gold/60 hover:bg-gold hover:text-primary-foreground ${
        small ? "h-9 w-9" : "h-11 w-11"
      }`}
    >
      <Icon size={size} />
    </a>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-gold/60 focus:bg-white/10"
      />
    </div>
  );
}
