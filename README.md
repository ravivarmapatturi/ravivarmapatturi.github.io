# Ravivarma Patturi — Personal Portfolio

Recruiter-grade personal site for **Ravivarma Patturi**, AI/ML Engineer with 4 years of experience shipping production Generative AI, multi-agent systems, and edge inference.

Live site: [ravivarmapatturi.github.io](https://ravivarmapatturi.github.io)

---

## Architecture & Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation)
- **Styling**: Modern vanilla CSS with design tokens, responsive CSS grid, light/dark mode, and `prefers-reduced-motion` compliance.
- **Typography**: Inter (sans-serif) and JetBrains Mono (code/mono).
- **SEO & Metadata**: JSON-LD Person schema, Open Graph cards, dynamic sitemap (`@astrojs/sitemap`), and robots.txt.
- **Deployment**: Automated GitHub Pages static deployment via GitHub Actions.
- **Privacy & Security**: Zero trackers, zero analytics, zero external backend dependencies.

---

## Project Structure

```text
├── astro.config.mjs         # Astro configuration & sitemap integration
├── package.json             # Scripts & dependencies
├── public/                  # Static assets (images, PDFs, robots.txt, favicon)
│   ├── assets/
│   │   ├── img/             # Profile & project screenshots
│   │   └── pdf/             # Ravivarma_Patturi_Resume.pdf
│   ├── favicon.svg          # Modern SVG favicon
│   ├── og-image.png         # Open Graph preview card
│   └── robots.txt           # Crawler instructions
├── src/
│   ├── components/          # Modular Astro UI sections
│   │   ├── Header.astro     # Responsive navigation & mobile menu
│   │   ├── Hero.astro       # Hero intro, CTAs & profile photo
│   │   ├── ImpactStrip.astro# 4 production impact metrics
│   │   ├── Experience.astro # Autonomize AI & Boltzmann Labs work history
│   │   ├── Building.astro   # InferEdge AI, Neural Mastery, Hugging Face, YouTube
│   │   ├── Projects.astro   # Flagship open-source projects
│   │   ├── WritingVideos.astro # YouTube embeds & engineering platform
│   │   ├── Skills.astro     # Grouped technical proficiencies
│   │   ├── Contact.astro    # Direct contact channels (email, LinkedIn, GitHub, X)
│   │   ├── Footer.astro     # Site footer & external links
│   │   └── ThemeToggle.astro# Light/dark mode toggle button
│   ├── layouts/
│   │   └── BaseLayout.astro # Base HTML shell, metadata, and JSON-LD
│   ├── pages/
│   │   └── index.astro      # Main single-page portfolio
│   └── styles/
│       └── global.css       # Design tokens, resets, typography, and utility classes
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Pages automated deployment workflow
```

---

## Local Development

```bash
# Install dependencies
npm ci

# Start development server at http://localhost:4321
npm run dev

# Build production static bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## License

MIT License. Designed and engineered by [Ravivarma Patturi](https://github.com/ravivarmapatturi).
