# Jennah Imad — Portfolio

A modern, fully responsive personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

🌐 **Live site:** [jennah-imad.github.io/Portfolio](https://jennah-imad.github.io/Portfolio/)

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Introduction with animated role titles and resume download |
| **About** | Detailed background, education, and professional story |
| **Technologies** | Animated icon grid of tools and languages |
| **Timeline** | Career timeline (vertical on mobile, horizontal on desktop) |
| **Experience** | Internships and academic projects with tech badges |
| **Projects** | Project cards with GitHub links and live previews |
| **Certifications** | Coursera / professional certification gallery |
| **Contact** | Address, phone, email, and LinkedIn |

---

## Projects Showcased

- **IT Equipment Management System** — Spring Boot · React.js · SQL Server
  [GitHub](https://github.com/JENNAH-IMAD/Application-web-de-gestion-des-demandes-des-equipements)

- **DevOps Maturity Assessment** — Spring · Angular · MySQL · Chart.js
  [GitHub](https://github.com/JENNAH-IMAD/Application-web-de-gestion-des-demandes-des-equipements)

- **Portfolio** — React.js · Tailwind CSS · Framer Motion
  [GitHub](https://github.com/JENNAH-IMAD/Portfolio) · [Live](https://jennah-imad.github.io/Portfolio/)

- **Insect Detection App** — Flutter · Python · TensorFlow · CNN
  [GitHub](https://github.com/JENNAH-IMAD/Insect-detector)

- **Meeting Planner** — Spring · React.js · MySQL
  [GitHub](https://github.com/JENNAH-IMAD/Meeting-Planner) · [Live](https://meeting-planner-ten.vercel.app/)

- **Kechmara Restaurant** — React.js · Tailwind CSS · Framer Motion
  [GitHub](https://github.com/JENNAH-IMAD/kechmara) · [Live](https://kechmara.vercel.app/)

---

## Tech Stack

- **React 18** — Component-based UI
- **Vite** — Fast build tooling
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Scroll-triggered animations
- **React Icons** — Icon library
- **React Type Animation** — Animated typing effect
- **prop-types** — Runtime prop validation

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
├── assets/           # Images, PDF resume, logos
│   └── projects/     # Project & certification screenshots
├── components/       # One component per page section
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Technologies.jsx
│   ├── Timeline.jsx
│   ├── Experiences.jsx
│   ├── Projects.jsx
│   ├── Certification.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── constants/
│   └── index.js      # All content data (projects, experiences, etc.)
├── App.jsx
├── main.jsx
└── index.css
```

---

## Deployment

This portfolio is deployed to **GitHub Pages** using the `gh-pages` package.

```bash
npm run deploy
```

This runs `vite build` then publishes the `dist/` folder to the `gh-pages` branch of this repository.

---

## License

MIT © [Jennah Imad](https://github.com/JENNAH-IMAD)
