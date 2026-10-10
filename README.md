# Masud Rana — Portfolio

High-premium, 3D-animated portfolio for **Masud Rana — AI Automation & AI Agent Expert**.

Built with **React + Vite + Three.js (react-three-fiber) + Framer Motion + Tailwind CSS**.

## ✨ Features

- 🎥 Interactive 3D hero — a mouse-reactive particle field with floating wireframe core
- ✨ Scroll-reveal animations (Framer Motion) on every section
- 🧊 Glassmorphism + neon-gradient premium UI
- 📊 Metrics, Services, Projects, Process, Testimonials & Contact sections
- 🎞️ Infinite tech-stack marquee
- 📱 Fully responsive (mobile menu, adaptive grids)
- 🧠 Animated active-section navbar
- ♿ Respects `prefers-reduced-motion`

## 🚀 Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build at http://localhost:4173
```

## ✏️ Editing content

Almost all the text lives in **`src/data/content.js`** — name, tagline, stats,
services, projects, process steps & testimonials. Update the placeholder links
(`profile.socials`, project `href`, `profile.email`, `profile.resumeUrl`) with
your real ones. No need to touch component logic.

## 🗂️ Structure

```
src/
  App.jsx                 # page composition
  main.jsx                # React entry
  index.css               # Tailwind + global styles/utilities
  data/content.js         # ← all editable content lives here
  hooks/useActiveSection.js
  components/
    Aurora.jsx            # animated background
    Navbar.jsx            # sticky nav + mobile menu
    Hero.jsx              # 3D hero (lazy-loads Scene)
    Scene.jsx             # three.js particle field + shapes
    Marquee.jsx           # tech-stack ticker
    Metrics.jsx
    Services.jsx
    Projects.jsx
    Process.jsx           # process steps + testimonials
    Contact.jsx           # CTA + footer
    Reveal.jsx            # scroll-reveal wrapper
```

## 🌐 Deploy

The `dist/` folder is a static site — deploy it to **Vercel**, **Netlify**,
**GitHub Pages**, or **Cloudflare Pages** (build command `npm run build`,
output dir `dist`).

---

Crafted with React, Three.js & Tailwind.
