# Jennah Imad — Portfolio v2

A modern, fully responsive personal portfolio built with **React 18**, **Vite**, **Tailwind CSS 3**, **GSAP**, **Lenis**, and **React Three Fiber**.

Live site: [jennah-imad.github.io/Portfolio](https://jennah-imad.github.io/Portfolio/)

---

## Features

- Smooth scrolling with Lenis + GSAP ScrollTrigger sync
- Preloader with 3D letter cascade animation
- Custom cursor (dot + ring) with GSAP tracking — desktop only
- 3D interactive hero background with stars and bloom effect
- Infinite scrolling marquee text bands
- Scroll-triggered animations on every section (titles, underlines, subtitles, cards)
- 3D tilt hover effect on project cards
- Infinite horizontal scroll for certifications
- Sticky skills panel alongside experience cards
- Responsive design — mobile-first approach
- Reduced motion support

---

## Sections

| Section | Description |
|---|---|
| **Hero** | 3D star canvas, animated name reveal, typing role, scroll indicator |
| **About** | Background story with highlighted tech badges in styled cards |
| **Technologies** | Animated icon grid with floating breathing effect |
| **Timeline** | Career timeline 2020-2025 (vertical mobile, horizontal desktop) |
| **Experience** | 2-column layout: experience cards (left) + sticky skills panel (right) |
| **Projects** | 3D tilt project cards with GitHub + Live Preview links |
| **Certifications** | Infinite horizontal scroll carousel with hover overlay |
| **Contact** | Styled contact cards with slide-in animation |

---

## Projects Showcased

- **IT Equipment Management System** — Spring Boot, React.js, SQL Server
  [GitHub](https://github.com/JENNAH-IMAD/Application-web-de-gestion-des-demandes-des-equipements)

- **DevOps Maturity Assessment** — Spring, Angular, MySQL, Chart.js
  [GitHub](https://github.com/JENNAH-IMAD/Application-web-de-gestion-des-demandes-des-equipements)

- **Portfolio** — React.js, Tailwind CSS, GSAP, Three.js
  [GitHub](https://github.com/JENNAH-IMAD/Portfolio) | [Live](https://jennah-imad.github.io/Portfolio/)

- **Insect Detection App** — Flutter, Python, TensorFlow, CNN
  [GitHub](https://github.com/JENNAH-IMAD/Insect-detector)

- **Meeting Planner** — Spring, React.js, MySQL
  [GitHub](https://github.com/JENNAH-IMAD/Meeting-Planner) | [Live](https://meeting-planner-ten.vercel.app/)

- **Kechmara Restaurant** — React.js, Tailwind CSS, Framer Motion
  [GitHub](https://github.com/JENNAH-IMAD/kechmara) | [Live](https://kechmara.vercel.app/)

- **Team Talk** — ASP.NET Core, React.js, Tailwind CSS, PostgreSQL
  [GitHub](https://github.com/JENNAH-IMAD/Team-Talk) | [Live](https://teamt.vercel.app)

---

## Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React 18, Tailwind CSS 3, Framer Motion |
| **Animation** | GSAP, ScrollTrigger, Lenis (smooth scroll) |
| **3D** | React Three Fiber, @react-three/drei, @react-three/postprocessing |
| **Build** | Vite |
| **Icons** | React Icons |
| **Utilities** | React Type Animation, prop-types |
| **Deployment** | GitHub Pages (gh-pages) |

---

## Getting Started

```bash
# Clone
git clone https://github.com/JENNAH-IMAD/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Available at `http://localhost:5173/Portfolio`

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and deploy to GitHub Pages |

---

## Project Structure

```
src/
├── assets/              # Images, PDF resume, logos
│   └── projects/        # Project & certification screenshots
├── components/          # One component per page section
│   ├── Navbar.jsx       # Scroll-aware hide/show navbar
│   ├── Hero.jsx         # 3D canvas + name reveal + typing
│   ├── HeroCanvas.jsx   # Three.js stars + bloom (lazy-loaded)
│   ├── Marquee.jsx      # Infinite scrolling text band
│   ├── About.jsx        # Background story cards
│   ├── Technologies.jsx # Tech icon grid with animations
│   ├── Timeline.jsx     # Career timeline 2020-2025
│   ├── Experiences.jsx  # Experience cards + sticky skills panel
│   ├── Projects.jsx     # 3D tilt project cards
│   ├── Certification.jsx# Horizontal scroll carousel
│   ├── Contact.jsx      # Contact info cards
│   ├── Footer.jsx       # Footer with magnetic links
│   ├── Preloader.jsx    # Loading animation
│   └── CustomCursor.jsx # Custom dot + ring cursor
├── hooks/
│   ├── useSmoothScroll.js # Lenis + GSAP sync
│   ├── useGSAP.js         # GSAP React hook
│   └── useMagnetic.js     # Magnetic button effect
├── constants/
│   └── index.js         # All content data
├── App.jsx
├── main.jsx
└── index.css
```

---

## Deployment

```bash
npm run deploy
```

Runs `vite build` then publishes `dist/` to the `gh-pages` branch.

---

## License

MIT
