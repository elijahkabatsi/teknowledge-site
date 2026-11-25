# TeKnowledge Corporate Website (`teknowledge-site`)

A responsive B2B corporate website for **TeKnowledge** (Part of YNV Group), built with React, Vite, Tailwind CSS v4, Framer Motion, and Three.js (React Three Fiber).

- **Live Website:** https://YOUR_NETLIFY_URL.netlify.app

---

## Features
- **Interactive 3D WebGL Background:** Real-time rotating particle swarm rendered with Three.js and `@react-three/fiber`.
- **Single-Page Application (SPA) Routing:** Client-side navigation across Home (`/`), Services (`/services`), and About Us (`/about`) with active link highlighting and automatic scroll-to-top on route change.
- **Responsive Navigation:** Fixed glassmorphic header with a collapsible mobile navigation drawer.
- **Animations & Brand System:** Scroll-triggered Framer Motion transitions and custom TeKnowledge color tokens configured via Tailwind CSS v4 (`@theme`).

---

## Tech Stack
- **Frontend Framework:** React 18+, Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`), PostCSS, Autoprefixer
- **Routing:** React Router DOM
- **Animations & 3D Graphics:** Framer Motion, Three.js, React Three Fiber
- **Icons:** Lucide React
- **Deployment:** Netlify

---

## Project Structure
```text
teknowledge-site/
├── public/
│   └── _redirects                   # Netlify SPA fallback rule for React Router
├── src/
│   ├── assets/
│   │   ├── teknowledge-logo-dark.png
│   │   └── teknowledge-logo-white.png
│   ├── components/
│   │   └── WebGLBackground.jsx      # 3D Three.js particle background
│   ├── pages/
│   │   ├── Home.jsx                 # Landing page & capabilities overview
│   │   ├── Services.jsx             # Detailed service offerings
│   │   └── About.jsx                # Company mission, values, and CTA
│   ├── App.jsx                      # Router, Navbar, Footer, and ScrollToTop
│   ├── index.css                    # Tailwind CSS v4 imports and brand tokens
│   └── main.jsx                     # React application entry point
├── index.html                       # Root HTML & Google Fonts link
├── package.json                     # Dependencies and npm scripts
├── postcss.config.js                # PostCSS configuration for Tailwind v4
└── vite.config.js                   # Vite configuration
```

---

## Prerequisites
Before running this project locally, make sure the following tools are installed on your computer:
- **Node.js** (v18 or higher) — [Download Node.js](https://nodejs.org/)
- **npm** (automatically installed with Node.js)
- **Git** — [Download Git](https://git-scm.com/)

Verify your installation by running:
```bash
node -v
npm -v
git --version
```

---

## Step-by-Step Local Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_GITHUB_USERNAME/teknowledge-site.git](https://github.com/YOUR_GITHUB_USERNAME/teknowledge-site.git)
   ```

2. **Move into the project folder:**
   ```bash
   cd teknowledge-site
   ```

3. **Install all project dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. **View the site in your browser:**
   Open the local URL displayed in your terminal (by default: `http://localhost:5173`).

---

## Building and Previewing for Production

1. **Create the optimized production build:**
   ```bash
   npm run build
   ```
   This compiles the application into the `dist/` folder and copies `public/_redirects` into it.

2. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## Deployment
The compiled `dist/` directory is hosted on **Netlify**. The `public/_redirects` file (`/* /index.html 200`) ensures that navigating directly to or refreshing `/services` or `/about` routes cleanly to `index.html` without returning a 404 error.