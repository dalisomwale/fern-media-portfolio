import { t as hero_1_default } from "./hero-1-B9VseHMv.js";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ArrowUpRight, Award, Brush, Building2, CalendarHeart, Camera, Eye, Facebook, HeartHandshake, Instagram, Layers, Mail, MapPin, Menu, Phone, Quote, Share2, Sparkles, Wand2, X, Zap } from "lucide-react";
//#region src/assets/hero-2.jpg
var hero_2_default = "/assets/hero-2-ByEC-Ris.jpg";
//#endregion
//#region src/assets/hero-3.jpg
var hero_3_default = "/assets/hero-3-CJWDxbyr.jpg";
//#endregion
//#region src/assets/about-portrait.jpg
var about_portrait_default = "/assets/about-portrait-Dp-BDqXZ.jpg";
//#endregion
//#region src/assets/p1.jpg
var p1_default = "/assets/p1-BLDOJSaJ.jpg";
//#endregion
//#region src/assets/p2.jpg
var p2_default = "/assets/p2-DiRzTd8_.jpg";
//#endregion
//#region src/assets/p3.jpg
var p3_default = "/assets/p3-fKfzbauc.jpg";
//#endregion
//#region src/assets/p4.jpg
var p4_default = "/assets/p4-R63dDvEW.jpg";
//#endregion
//#region src/assets/p5.jpg
var p5_default = "/assets/p5-HnBCgRC9.jpg";
//#endregion
//#region src/assets/p6.jpg
var p6_default = "/assets/p6-DTRhf6Eb.jpg";
//#endregion
//#region src/assets/p7.jpg
var p7_default = "/assets/p7-DSlbZr8y.jpg";
//#endregion
//#region src/assets/p8.jpg
var p8_default = "/assets/p8-16gW2bcI.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var HERO_SLIDES = [
	hero_1_default,
	hero_2_default,
	hero_3_default
];
var PORTFOLIO = [
	{
		src: p1_default,
		title: "Golden Hour",
		category: "Portrait",
		desc: "Editorial portrait series exploring light, fabric, and form.",
		span: "row-span-2"
	},
	{
		src: p2_default,
		title: "The Executive",
		category: "Corporate",
		desc: "Boardroom headshot for a Lusaka-based fintech founder.",
		span: ""
	},
	{
		src: p3_default,
		title: "Vows",
		category: "Event",
		desc: "An intimate cathedral ceremony, captured in available light.",
		span: "row-span-2"
	},
	{
		src: p4_default,
		title: "Morning Pages",
		category: "Lifestyle",
		desc: "Daybreak with an entrepreneur — natural light, real moments.",
		span: ""
	},
	{
		src: p5_default,
		title: "Spectra",
		category: "Creative",
		desc: "Conceptual study in colour gels and cinematic shadow.",
		span: "row-span-2"
	},
	{
		src: p6_default,
		title: "Maison Noir",
		category: "Branding",
		desc: "Product story for a luxury fragrance house.",
		span: ""
	},
	{
		src: p7_default,
		title: "Stage Light",
		category: "Event",
		desc: "Keynote coverage for a regional leadership summit.",
		span: ""
	},
	{
		src: p8_default,
		title: "She Builds",
		category: "Personal Branding",
		desc: "Founder identity shoot — strength, warmth, presence.",
		span: ""
	}
];
var SERVICES = [
	{
		icon: Camera,
		title: "Portrait Photography",
		desc: "Professional portraits and refined studio sessions that flatter and feel like you."
	},
	{
		icon: Sparkles,
		title: "Personal Branding",
		desc: "Distinctive content for entrepreneurs, creators, and professionals."
	},
	{
		icon: Building2,
		title: "Corporate Photography",
		desc: "Executive headshots and company storytelling for confident brands."
	},
	{
		icon: CalendarHeart,
		title: "Event Coverage",
		desc: "Documentary-led coverage that preserves the energy of the room."
	},
	{
		icon: Share2,
		title: "Social Media Content",
		desc: "Scroll-stopping photography built for digital marketing and growth."
	},
	{
		icon: Wand2,
		title: "Creative Direction",
		desc: "End-to-end visual storytelling, concepting, and campaign planning."
	}
];
var FEATURES = [
	{
		icon: Eye,
		title: "Creative Vision",
		desc: "Concepts that elevate the everyday into editorial."
	},
	{
		icon: Award,
		title: "Professional Quality",
		desc: "Considered craft from capture to final frame."
	},
	{
		icon: Layers,
		title: "Attention to Detail",
		desc: "Light, posture, wardrobe — nothing left to chance."
	},
	{
		icon: Zap,
		title: "Fast Delivery",
		desc: "Previews within days. Final galleries on schedule."
	},
	{
		icon: HeartHandshake,
		title: "Personal Approach",
		desc: "A calm set and a real collaboration, every time."
	},
	{
		icon: Brush,
		title: "High-End Editing",
		desc: "Cinematic colour and skin work without losing soul."
	}
];
var TESTIMONIALS = [
	{
		name: "Chanda Mwila",
		role: "Founder, Lumière Studio",
		quote: "Fernando captured our brand in a way we couldn't articulate ourselves. The images feel like us — only sharper."
	},
	{
		name: "Mr. Banda",
		role: "CEO, Meridian Capital",
		quote: "From boardroom portraits to our annual gala, Fern Media set a new standard for what professional photography should feel like."
	},
	{
		name: "Tasha & Joe",
		role: "Wedding Clients",
		quote: "We re-live the day every time we open the gallery. He saw moments we didn't even know happened."
	}
];
var INSTAGRAM_GRID = [
	p3_default,
	p1_default,
	p5_default,
	p8_default,
	p2_default,
	p6_default,
	p7_default,
	p4_default
];
function Index() {
	const [slide, setSlide] = useState(0);
	const [lightbox, setLightbox] = useState(null);
	const [menuOpen, setMenuOpen] = useState(false);
	useEffect(() => {
		const id = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 5500);
		return () => clearInterval(id);
	}, []);
	useEffect(() => {
		document.body.style.overflow = lightbox ? "hidden" : "";
	}, [lightbox]);
	const navLinks = [
		{
			href: "#about",
			label: "About"
		},
		{
			href: "#portfolio",
			label: "Portfolio"
		},
		{
			href: "#services",
			label: "Services"
		},
		{
			href: "#journal",
			label: "Journal"
		},
		{
			href: "#contact",
			label: "Contact"
		}
	];
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "fixed inset-x-0 top-0 z-50",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "glass mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full px-5 py-3 sm:px-7",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: "#top",
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ jsx("span", {
								className: "grid h-9 w-9 place-items-center rounded-full border border-gold/40 font-display text-lg font-bold gold-text",
								children: "F"
							}), /* @__PURE__ */ jsxs("span", {
								className: "font-display text-base tracking-wide",
								children: ["Fern ", /* @__PURE__ */ jsx("span", {
									className: "gold-text",
									children: "Media"
								})]
							})]
						}),
						/* @__PURE__ */ jsx("nav", {
							className: "hidden items-center gap-8 md:flex",
							children: navLinks.map((l) => /* @__PURE__ */ jsx("a", {
								href: l.href,
								className: "text-sm text-muted-foreground transition hover:text-foreground",
								children: l.label
							}, l.href))
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#contact",
							className: "hidden rounded-full bg-gold px-5 py-2 text-sm font-medium text-primary-foreground shadow-gold transition hover:brightness-110 md:inline-flex",
							children: "Book a Session"
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setMenuOpen((v) => !v),
							className: "grid h-9 w-9 place-items-center rounded-full border border-border md:hidden",
							"aria-label": "Toggle menu",
							children: menuOpen ? /* @__PURE__ */ jsx(X, { size: 18 }) : /* @__PURE__ */ jsx(Menu, { size: 18 })
						})
					]
				}), menuOpen && /* @__PURE__ */ jsx("div", {
					className: "glass mx-4 mt-2 rounded-2xl p-4 md:hidden",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-1",
						children: [navLinks.map((l) => /* @__PURE__ */ jsx("a", {
							href: l.href,
							onClick: () => setMenuOpen(false),
							className: "rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground",
							children: l.label
						}, l.href)), /* @__PURE__ */ jsx("a", {
							href: "#contact",
							onClick: () => setMenuOpen(false),
							className: "mt-2 rounded-full bg-gold px-4 py-2 text-center text-sm font-medium text-primary-foreground",
							children: "Book a Session"
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "top",
				className: "relative h-[100svh] min-h-[640px] w-full overflow-hidden",
				children: [
					HERO_SLIDES.map((src, i) => /* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 transition-opacity duration-[1600ms] ease-out",
						style: { opacity: i === slide ? 1 : 0 },
						children: /* @__PURE__ */ jsx("img", {
							src,
							alt: "Featured photography by Fernando Yakobo",
							className: "h-full w-full object-cover animate-kenburns",
							fetchPriority: i === 0 ? "high" : "auto"
						})
					}, src)),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.13_0_0/0.7)_100%)]" }),
					/* @__PURE__ */ jsxs("div", {
						className: "relative z-10 flex h-full flex-col items-center justify-center px-6 text-center",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/90 animate-fade-up",
								children: [
									/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-gold/60" }),
									"Fern Media · Est. Lusaka",
									/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-gold/60" })
								]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "font-display text-5xl font-medium leading-[1.05] text-foreground animate-fade-up sm:text-6xl md:text-7xl lg:text-[88px]",
								children: [
									"Capturing Stories ",
									/* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
									"That Last ",
									/* @__PURE__ */ jsx("span", {
										className: "italic gold-text",
										children: "Forever"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 max-w-xl text-sm text-muted-foreground animate-fade-up sm:text-base",
								children: "Premium Photography · Personal Branding · Corporate Storytelling"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-9 flex flex-col items-center gap-3 sm:flex-row animate-fade-up",
								children: [/* @__PURE__ */ jsxs("a", {
									href: "#portfolio",
									className: "group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-gold transition hover:brightness-110",
									children: ["View Portfolio", /* @__PURE__ */ jsx(ArrowRight, {
										size: 16,
										className: "transition group-hover:translate-x-0.5"
									})]
								}), /* @__PURE__ */ jsx("a", {
									href: "#contact",
									className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium backdrop-blur transition hover:border-gold/60 hover:bg-white/10",
									children: "Contact Me"
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex flex-col items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", { children: "Scroll" }), /* @__PURE__ */ jsx("span", { className: "h-10 w-px bg-gradient-to-b from-gold/80 to-transparent animate-scroll-hint" })]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute bottom-8 right-8 hidden gap-2 md:flex",
								children: HERO_SLIDES.map((_, i) => /* @__PURE__ */ jsx("button", {
									onClick: () => setSlide(i),
									"aria-label": `Slide ${i + 1}`,
									className: `h-1.5 rounded-full transition-all ${i === slide ? "w-10 bg-gold" : "w-5 bg-white/30"}`
								}, i))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "about",
				className: "relative mx-auto max-w-7xl px-6 py-28 lg:py-36",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid items-center gap-12 md:grid-cols-2 md:gap-20",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/30 to-transparent blur-2xl" }),
							/* @__PURE__ */ jsx("div", {
								className: "relative overflow-hidden rounded-3xl border border-white/10",
								children: /* @__PURE__ */ jsx("img", {
									src: about_portrait_default,
									alt: "Fernando Yakobo, founder of Fern Media",
									className: "h-full w-full object-cover",
									loading: "lazy"
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "glass absolute -bottom-6 -right-4 hidden rounded-2xl px-5 py-4 sm:block",
								children: [/* @__PURE__ */ jsx("div", {
									className: "font-display text-3xl gold-text",
									children: "8+"
								}), /* @__PURE__ */ jsx("div", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: "Years Behind the Lens"
								})]
							})
						]
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/90",
							children: [/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold/60" }), " About"]
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "font-display text-4xl leading-tight sm:text-5xl",
							children: [
								"Fernando Yakobo — ",
								/* @__PURE__ */ jsx("span", {
									className: "italic gold-text",
									children: "visual storyteller"
								}),
								" from Lusaka."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 text-muted-foreground",
							children: "Fern Media is the studio practice of Fernando Yakobo, a Zambian photographer working at the intersection of portraiture, branding, and editorial. The work is quiet but intentional — shaped by light, restraint, and a deep respect for the people in front of the lens."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-muted-foreground",
							children: "From founders and creatives to weddings, summits, and luxury brands, every project is approached as a story worth telling well. The goal is simple: images that still feel true a decade from now."
						}),
						/* @__PURE__ */ jsxs("figure", {
							className: "mt-8 border-l-2 border-gold/60 pl-5",
							children: [/* @__PURE__ */ jsx(Quote, {
								className: "mb-2 text-gold/70",
								size: 18
							}), /* @__PURE__ */ jsx("blockquote", {
								className: "font-display text-lg italic text-foreground/90 sm:text-xl",
								children: "Every photograph should tell a story, create emotion, and leave a lasting impression."
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8",
							children: [
								/* @__PURE__ */ jsx(Stat, {
									n: "200+",
									label: "Clients"
								}),
								/* @__PURE__ */ jsx(Stat, {
									n: "50K+",
									label: "Frames Delivered"
								}),
								/* @__PURE__ */ jsx(Stat, {
									n: "14",
									label: "Awards & Features"
								})
							]
						})
					] })]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "portfolio",
				className: "relative px-6 py-28 lg:py-36",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							className: "mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/90",
							children: [/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold/60" }), " Featured Work"]
						}), /* @__PURE__ */ jsxs("h2", {
							className: "font-display text-4xl leading-tight sm:text-5xl",
							children: ["Selected ", /* @__PURE__ */ jsx("span", {
								className: "italic gold-text",
								children: "Frames"
							})]
						})] }), /* @__PURE__ */ jsx("p", {
							className: "max-w-md text-sm text-muted-foreground",
							children: "A curated cross-section of recent commissions — portraits, brand stories, weddings, and creative projects shot across Zambia and beyond."
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: PORTFOLIO.map((item) => /* @__PURE__ */ jsxs("button", {
							onClick: () => setLightbox(item),
							className: `group relative overflow-hidden rounded-2xl border border-white/5 ${item.span}`,
							children: [
								/* @__PURE__ */ jsx("img", {
									src: item.src,
									alt: item.title,
									className: "h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-105",
									loading: "lazy"
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 transition group-hover:opacity-95" }),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-left",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ jsx("div", {
											className: "text-[10px] uppercase tracking-[0.25em] text-gold",
											children: item.category
										}), /* @__PURE__ */ jsx("div", {
											className: "mt-1 truncate font-display text-lg",
											children: item.title
										})]
									}), /* @__PURE__ */ jsx("span", {
										className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 bg-white/5 backdrop-blur transition group-hover:border-gold group-hover:bg-gold group-hover:text-primary-foreground",
										children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
									})]
								})
							]
						}, item.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "services",
				className: "relative bg-gradient-to-b from-background via-ink to-background px-6 py-28 lg:py-36",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-14 max-w-2xl",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/90",
							children: [/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold/60" }), " Services"]
						}), /* @__PURE__ */ jsxs("h2", {
							className: "font-display text-4xl leading-tight sm:text-5xl",
							children: [
								"What we ",
								/* @__PURE__ */ jsx("span", {
									className: "italic gold-text",
									children: "create together"
								}),
								"."
							]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3",
						children: SERVICES.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxs("div", {
							className: "group relative bg-background p-8 transition hover:bg-card sm:p-10",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "mb-6 inline-grid h-12 w-12 place-items-center rounded-xl border border-gold/40 text-gold transition group-hover:bg-gold group-hover:text-primary-foreground",
									children: /* @__PURE__ */ jsx(Icon, { size: 20 })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-2xl",
									children: title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: desc
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold/80 opacity-0 transition group-hover:opacity-100",
									children: ["Enquire ", /* @__PURE__ */ jsx(ArrowRight, { size: 14 })]
								})
							]
						}, title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "relative px-6 py-28 lg:py-36",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ jsx("div", {
						className: "mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
						children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							className: "mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/90",
							children: [/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold/60" }), " Why Fern Media"]
						}), /* @__PURE__ */ jsxs("h2", {
							className: "font-display text-4xl leading-tight sm:text-5xl",
							children: [
								"Crafted with ",
								/* @__PURE__ */ jsx("span", {
									className: "italic gold-text",
									children: "care, calm, and craft"
								}),
								"."
							]
						})] })
					}), /* @__PURE__ */ jsx("div", {
						className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: FEATURES.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxs("div", {
							className: "glass group relative overflow-hidden rounded-2xl p-7 transition hover:border-gold/40",
							children: [
								/* @__PURE__ */ jsx("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition group-hover:bg-gold/20" }),
								/* @__PURE__ */ jsx(Icon, {
									className: "text-gold",
									size: 22
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-5 font-display text-xl",
									children: title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: desc
								})
							]
						}, title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "relative px-6 py-28 lg:py-36",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-14 text-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mb-3 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/90",
							children: [
								/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold/60" }),
								" Kind Words ",
								/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold/60" })
							]
						}), /* @__PURE__ */ jsxs("h2", {
							className: "font-display text-4xl leading-tight sm:text-5xl",
							children: [
								"From ",
								/* @__PURE__ */ jsx("span", {
									className: "italic gold-text",
									children: "the people"
								}),
								" we've photographed."
							]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid gap-6 md:grid-cols-3",
						children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxs("figure", {
							className: "glass relative flex flex-col rounded-3xl p-8 transition hover:-translate-y-1 hover:border-gold/40",
							style: { animationDelay: `${i * 100}ms` },
							children: [
								/* @__PURE__ */ jsx(Quote, {
									className: "text-gold/70",
									size: 22
								}),
								/* @__PURE__ */ jsxs("blockquote", {
									className: "mt-5 flex-1 font-display text-lg italic leading-relaxed text-foreground/90",
									children: [
										"\"",
										t.quote,
										"\""
									]
								}),
								/* @__PURE__ */ jsxs("figcaption", {
									className: "mt-8 border-t border-white/10 pt-5",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-medium",
										children: t.name
									}), /* @__PURE__ */ jsx("div", {
										className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
										children: t.role
									})]
								})
							]
						}, t.name))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "journal",
				className: "relative px-6 py-28 lg:py-36",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							className: "mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/90",
							children: [/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold/60" }), " @fernando_yakobo"]
						}), /* @__PURE__ */ jsxs("h2", {
							className: "font-display text-4xl leading-tight sm:text-5xl",
							children: [
								"Follow ",
								/* @__PURE__ */ jsx("span", {
									className: "italic gold-text",
									children: "the journey"
								}),
								"."
							]
						})] }), /* @__PURE__ */ jsxs("a", {
							href: "https://www.instagram.com/fernando_yakobo",
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-sm text-gold transition hover:bg-gold hover:text-primary-foreground",
							children: [/* @__PURE__ */ jsx(Instagram, { size: 16 }), " Follow on Instagram"]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: INSTAGRAM_GRID.map((src, i) => /* @__PURE__ */ jsxs("a", {
							href: "https://www.instagram.com/fernando_yakobo",
							target: "_blank",
							rel: "noreferrer",
							className: "group relative aspect-square overflow-hidden rounded-xl",
							children: [/* @__PURE__ */ jsx("img", {
								src,
								alt: "Instagram preview",
								className: "h-full w-full object-cover transition duration-700 group-hover:scale-110",
								loading: "lazy"
							}), /* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 grid place-items-center bg-background/70 opacity-0 transition group-hover:opacity-100",
								children: /* @__PURE__ */ jsx(Instagram, {
									className: "text-gold",
									size: 26
								})
							})]
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "contact",
				className: "relative bg-gradient-to-b from-background to-ink px-6 py-28 lg:py-36",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid gap-14 md:grid-cols-2 md:gap-20",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/90",
								children: [/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold/60" }), " Contact"]
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "font-display text-4xl leading-tight sm:text-5xl",
								children: [
									"Let's make something ",
									/* @__PURE__ */ jsx("span", {
										className: "italic gold-text",
										children: "unforgettable"
									}),
									"."
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-5 max-w-md text-muted-foreground",
								children: "Booking portraits, weddings, brand work, and events across Lusaka and the region. Tell me a little about your project — I'll respond personally within 24 hours."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-10 space-y-5",
								children: [
									/* @__PURE__ */ jsx(ContactRow, {
										icon: Phone,
										label: "Phone",
										value: "+260 97 000 0000",
										href: "tel:+260970000000"
									}),
									/* @__PURE__ */ jsx(ContactRow, {
										icon: Mail,
										label: "Email",
										value: "hello@fernmedia.co.zm",
										href: "mailto:hello@fernmedia.co.zm"
									}),
									/* @__PURE__ */ jsx(ContactRow, {
										icon: MapPin,
										label: "Location",
										value: "Lusaka, Zambia"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-10 flex items-center gap-3",
								children: [
									/* @__PURE__ */ jsx(Social, {
										href: "https://www.instagram.com/fernando_yakobo",
										icon: Instagram
									}),
									/* @__PURE__ */ jsx(Social, {
										href: "https://www.facebook.com/share/1BhJUEQsET",
										icon: Facebook
									}),
									/* @__PURE__ */ jsx(Social, {
										href: "https://wa.me/260970000000",
										icon: Phone,
										label: "WhatsApp"
									})
								]
							})
						] }), /* @__PURE__ */ jsx("form", {
							onSubmit: (e) => {
								e.preventDefault();
								alert("Thank you — your message has been prepared. Backend integration coming soon.");
							},
							className: "glass rounded-3xl p-7 sm:p-9",
							children: /* @__PURE__ */ jsxs("div", {
								className: "grid gap-5",
								children: [
									/* @__PURE__ */ jsx(Field, {
										label: "Name",
										name: "name",
										placeholder: "Your full name"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ jsx(Field, {
											label: "Email",
											name: "email",
											type: "email",
											placeholder: "you@email.com"
										}), /* @__PURE__ */ jsx(Field, {
											label: "Phone",
											name: "phone",
											type: "tel",
											placeholder: "+260 ..."
										})]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground",
										children: "Message"
									}), /* @__PURE__ */ jsx("textarea", {
										required: true,
										rows: 5,
										placeholder: "Tell me about your project, dates, and what you're hoping to create...",
										className: "w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-gold/60 focus:bg-white/10"
									})] }),
									/* @__PURE__ */ jsxs("button", {
										type: "submit",
										className: "group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-medium text-primary-foreground shadow-gold transition hover:brightness-110",
										children: ["Send Message", /* @__PURE__ */ jsx(ArrowRight, {
											size: 16,
											className: "transition group-hover:translate-x-0.5"
										})]
									})
								]
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ jsxs("footer", {
				className: "border-t border-white/10 px-6 py-12",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: "grid h-9 w-9 place-items-center rounded-full border border-gold/40 font-display text-lg font-bold gold-text",
								children: "F"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
								className: "font-display text-base",
								children: ["Fern ", /* @__PURE__ */ jsx("span", {
									className: "gold-text",
									children: "Media"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs text-muted-foreground",
								children: "Crafting Timeless Visual Stories."
							})] })]
						}),
						/* @__PURE__ */ jsxs("nav", {
							className: "flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "#about",
									className: "hover:text-foreground",
									children: "About"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#portfolio",
									className: "hover:text-foreground",
									children: "Portfolio"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#services",
									className: "hover:text-foreground",
									children: "Services"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#contact",
									className: "hover:text-foreground",
									children: "Contact"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx(Social, {
								href: "https://www.instagram.com/fernando_yakobo",
								icon: Instagram,
								small: true
							}), /* @__PURE__ */ jsx(Social, {
								href: "https://www.facebook.com/share/1BhJUEQsET",
								icon: Facebook,
								small: true
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mx-auto mt-8 max-w-7xl text-center text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Fern Media — All rights reserved."
					]
				})]
			}),
			lightbox && /* @__PURE__ */ jsxs("div", {
				className: "fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl animate-fade-up",
				onClick: () => setLightbox(null),
				children: [/* @__PURE__ */ jsx("button", {
					onClick: () => setLightbox(null),
					className: "absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/10",
					"aria-label": "Close",
					children: /* @__PURE__ */ jsx(X, { size: 18 })
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid max-h-full w-full max-w-6xl gap-6 md:grid-cols-[1fr_320px]",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ jsx("img", {
						src: lightbox.src,
						alt: lightbox.title,
						className: "max-h-[80vh] w-full rounded-2xl object-contain"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col justify-center",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "text-[10px] uppercase tracking-[0.3em] text-gold",
								children: lightbox.category
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-2 font-display text-3xl",
								children: lightbox.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: lightbox.desc
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "#contact",
								onClick: () => setLightbox(null),
								className: "mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-sm text-gold transition hover:bg-gold hover:text-primary-foreground",
								children: ["Book a similar session ", /* @__PURE__ */ jsx(ArrowRight, { size: 14 })]
							})
						]
					})]
				})]
			})
		]
	});
}
function Stat({ n, label }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
		className: "font-display text-3xl gold-text",
		children: n
	}), /* @__PURE__ */ jsx("div", {
		className: "mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
		children: label
	})] });
}
function ContactRow({ icon: Icon, label, value, href }) {
	const inner = /* @__PURE__ */ jsxs("div", {
		className: "group flex items-center gap-4",
		children: [/* @__PURE__ */ jsx("span", {
			className: "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold transition group-hover:bg-gold group-hover:text-primary-foreground",
			children: /* @__PURE__ */ jsx(Icon, { size: 16 })
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ jsx("div", {
				className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
				children: label
			}), /* @__PURE__ */ jsx("div", {
				className: "truncate text-sm",
				children: value
			})]
		})]
	});
	return href ? /* @__PURE__ */ jsx("a", {
		href,
		className: "block",
		children: inner
	}) : inner;
}
function Social({ href, icon: Icon, label, small }) {
	return /* @__PURE__ */ jsx("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": label || "Social link",
		className: `grid place-items-center rounded-full border border-white/15 bg-white/5 transition hover:border-gold/60 hover:bg-gold hover:text-primary-foreground ${small ? "h-9 w-9" : "h-11 w-11"}`,
		children: /* @__PURE__ */ jsx(Icon, { size: small ? 16 : 18 })
	});
}
function Field({ label, name, type = "text", placeholder }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
		className: "mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground",
		children: label
	}), /* @__PURE__ */ jsx("input", {
		required: true,
		name,
		type,
		placeholder,
		className: "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-gold/60 focus:bg-white/10"
	})] });
}
//#endregion
export { Index as component };
