# Brief for agy: rebuild ravivarmapatturi.github.io as a recruiter-grade personal site

Owner: Ravivarma Patturi. Reviewer: Claude Code. You implement; Claude verifies before anything reaches `main`.

## Goal
A stunning, fast, professional personal site that (1) makes a recruiter or hiring manager understand in under 10 seconds who Ravivarma is and why to talk to him, and (2) makes it trivial for anyone to reach out. It is **not** a link dump: it tells one story.

**The story:** AI/ML Engineer (4 yrs) who ships production GenAI and agentic systems for US healthcare, and who builds in public on inference engineering and on-device AI: a teaching platform (Neural Mastery), a company (InferEdge AI) with a live product (VaayuEdge), published models (Hugging Face) and a YouTube channel.

## Source material (read these, don't invent facts)
- Resume: `/home/ravivarma/Documents/DREAM_PROJECT/RAVIVARMA_PATTURI_RESUME_OCT_2026.pdf` (run `pdftotext` on it). Use its roles, dates and metrics exactly: "PoC to production in 14 days", "80% lower adjudication cost", "70,000+ concepts indexed", etc.
- GitHub: https://github.com/ravivarmapatturi. Flagship projects: qa_rag_application, Finance_Agent, Traffic_Volume_Prediction_Hackathon (Top 10 MachineHack 2024), NeuralMastery.
- Neural Mastery: https://neuralmasteryai.com, an interactive AI engineering learning platform (1,800+ pages, in-browser Python, visual labs).
- InferEdge AI: https://inferedgeai.com, on-device inference for text/image/audio. Product VaayuEdge: https://inferedgeai.com/vaayuedge/ (English→Telugu speech, runs fully in the browser).
- Hugging Face: https://huggingface.co/ravivarmapatturi (fine-tuned IndicTrans2 English→Telugu research checkpoints; label them as research checkpoints).
- YouTube: https://www.youtube.com/@neuralmastery
- X: https://x.com/NeuralMastery · LinkedIn: https://linkedin.com/in/ravivarma-patturi · Email: patturiravivarma@gmail.com
- Existing site content in `_pages/`, `_projects/`, `assets/img/` (reuse the profile photo).

## Required sections (single page + optional project detail pages)
1. **Hero**: name, one-line positioning ("AI Engineer: production agentic systems & edge inference"), 2 CTAs: "Hire / Contact" and "Download résumé" (copy the PDF to `assets/pdf/Ravivarma_Patturi_Resume.pdf`). Photo.
2. **Impact strip**: 3–4 real numbers from the resume.
3. **Experience**: Autonomize AI, Boltzmann Labs. Outcome-first bullets, max 4 each.
4. **What I'm building**: cards for InferEdge AI / VaayuEdge, Neural Mastery, Hugging Face models, YouTube. Each with a real screenshot or real embed, one sentence, and a link.
5. **Selected projects**: the 4 flagships, each with problem → approach → result, tech chips, GitHub link.
6. **Writing & videos**: latest YouTube videos (embed 2–3 with `youtube-nocookie.com`; take real video IDs from the channel page) and a link to the Neural Mastery blog.
7. **Skills**: grouped (GenAI & Agents, ML/DL, Inference & Edge, Backend/MLOps). No progress bars or percentages.
8. **Contact**: email (mailto), LinkedIn, X, GitHub. **Never show the phone number.** No contact form that needs a backend.

## Design bar
- Distinctive and premium, not a template look: strong typography (e.g. Inter or Geist with a display face for headings), generous whitespace, one accent colour, subtle motion that respects `prefers-reduced-motion`.
- Light and dark theme, both polished. Mobile-first: no horizontal scroll at 375px.
- Lighthouse ≥ 95 for Performance, Accessibility, Best Practices and SEO. Real `<title>`, meta description, Open Graph image, schema.org `Person` JSON-LD, sitemap, robots.
- Copy: confident, specific, human. No "passionate", no "rockstar", no superlatives you can't back up.

## Tech decision (made, don't relitigate)
- Replace the al-folio Jekyll site with **Astro (static output) + plain CSS**, deployed by a GitHub Actions workflow to GitHub Pages. Delete the Jekyll files only after the new site builds.
- Work on branch `redesign-2026`. **Do not push to `main`** and do not change repo settings. Claude reviews and merges.
- No trackers or analytics. No secrets in the repo.

## Definition of done (run these yourself and paste the output in `REDESIGN_NOTES.md`)
1. `npm ci && npm run build` exits 0.
2. `npx astro preview` serves the site; every link returns 200 (write a small link check script or use `npx linkinator dist --skip "^(?!http://localhost)"` style local check).
3. Screenshots at 375px and 1440px, light and dark, saved to `redesign-shots/` (gitignored).
4. Lighthouse scores recorded.
5. `REDESIGN_NOTES.md`: what you built, every fact's source, anything you could not verify.
6. Commit on `redesign-2026` with conventional messages.
