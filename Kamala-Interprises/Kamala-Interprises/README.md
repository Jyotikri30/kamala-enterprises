# Kamala Interprises — Premium Manufacturing Website

A premium, single-page website for Kamala Interprises, built with plain
HTML5, CSS3 and vanilla JavaScript — no frameworks, no build step.

## Run it

Just open `index.html` in a browser. Everything (fonts aside) works locally.

## Structure

```
Kamala-Interprises/
├── index.html
├── css/
│   ├── style.css        → layout, components, sections
│   ├── responsive.css   → tablet/mobile breakpoints
│   └── animations.css   → keyframes
├── js/
│   ├── config.js         → Contact + WhatsApp settings (edit this)
│   ├── products.js       → product data + dynamic showcase renderer
│   ├── gallery.js        → masonry filter + lightbox
││   ├── scroll.js         → navbar, reveal animations, counters, progress bar
│   ├── form.js           → validation, FormSubmit email delivery, WhatsApp deep-link
│   └── main.js            → loading screen, ripple, FAQ accordion, init
├── images/
│   ├── logo.png          → company logo
│   ├── products/         → product photography/assets
│   └── gallery/          → gallery assets
├── robots.txt
├── sitemap.xml
└── README.md
```

## Before going live

1. **Product photography** — this build ships with clean, on-brand SVG
   illustrations in place of photography (no network access was available
   to source or generate photos in this environment). Swap the files in
   `images/products/` and `images/gallery/` with real,
   studio-shot photos of your products — same filenames, and the product data in `js/products.js` controls the showcase.
2. **Email delivery** — the quote form uses FormSubmit to forward enquiries to the
   company email in `js/config.js`. The first submission may require a one-time
   activation click from FormSubmit; after activation, enquiries are delivered
   to the configured inbox without storing an SMTP password in the frontend.
3. **WhatsApp number / contact email** — already set in `js/config.js`
   (+91 91231 97272 / Kamlaenterprises8809@gmail.com). Update there if it ever changes.
4. **Domain** — replace `https://www.kamalainterprises.com/` in
   `index.html`, `robots.txt` and `sitemap.xml` with your real domain.
5. **Social links** — the footer and contact section social icons point
   to `#` placeholders; add your real profile URLs.

## Notes

- The 12 product/service categories shown in the Products & Services grid each have full detail data in `js/products.js` — overview,
  applications, features, specs and advantages. Clicking a product card
  updates the showcase section instantly via JS, no page reload.
- Respects `prefers-reduced-motion`.
- Semantic HTML, ARIA labels, visible focus states, alt text throughout.
