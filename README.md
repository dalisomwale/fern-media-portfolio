# Fern Media — Static Photography Portfolio

A premium, dark-luxury static portfolio site for **Fernando Yakobo / Fern Media**.
Pure **HTML5 + CSS3 + vanilla JavaScript** — no build step, no framework.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8000
# or Node
npx serve .
```

Then visit http://localhost:8000

## Structure

```
fern-media/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/        ← all photography
└── README.md
```

## What's included

- Fullscreen hero with rotating slideshow + scroll indicator
- About section with portrait, bio, quote, and stats
- Featured Portfolio — masonry grid + fullscreen lightbox
- Services (6 cards)
- Why Fern Media (6 features)
- Testimonials (3 cards)
- Instagram showcase grid
- Contact section with details, social buttons, and a form
- Minimal footer

## Customization

- **Colors / fonts**: edit the CSS variables at the top of `css/style.css` (`--gold`, `--bg`, `--font-display`, etc.).
- **Portfolio**: edit the `projects` array at the top of `js/script.js`.
- **Images**: drop replacements into `assets/images/` using the same filenames.
- **Contact form**: the submit handler in `js/script.js` is ready to be wired to Formspree, Netlify Forms, EmailJS, or your own API.

## Fonts & icons

Loaded from CDNs:
- Google Fonts — Playfair Display + Inter
- Font Awesome 6

No backend required.
