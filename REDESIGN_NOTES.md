# Rebuild & Verification Notes: ravivarmapatturi.github.io

Rebuild executed according to `AGY_BRIEF_PORTFOLIO.md` on branch `redesign-2026`.

---

## 1. Summary of What Was Built

The legacy al-folio Jekyll template was completely replaced with a high-performance **Astro (static output) + vanilla CSS** architecture.

### Sections Built
1. **Hero**:
   - Header with monogram brand (`RP`), navigation links, mobile menu drawer, and light/dark theme toggle.
   - Status badge: `"AI/ML Engineer · 4 Years Experience · Bengaluru, India"`.
   - Name and exact positioning: `"AI Engineer: production agentic systems & edge inference"`.
   - Clear value narrative focusing on production GenAI, multi-agent systems for US healthcare, and on-device edge AI.
   - 2 primary CTAs:
     - `"Hire / Contact"` (smooth scroll to `#contact`)
     - `"Download résumé"` (downloads `/assets/pdf/Ravivarma_Patturi_Resume.pdf`)
   - Profile photo reusing `assets/img/PROFILE.png` with role badge.
   - Quick direct links to email, LinkedIn, and GitHub.
2. **Impact Strip**:
   - 4 real metrics verified directly against the resume:
     - **14 Days**: PoC to production for US healthcare benefits digitization.
     - **80%**: Lower claims adjudication cost via SOP Reasoner multi-agent system.
     - **70,000+**: Healthcare concepts indexed in Azure AI Search with cross-encoder reranking.
     - **2× Faster / 50% Smaller**: Quantized deep sequential models for real-time edge battery management (<1.2% MAPE deviation).
3. **Experience**:
   - **Autonomize AI** (Feb 2026 – Present): 4 outcome-first bullets covering Genesis AI Studio & Recursive Language Model (RLM) architecture on Temporal, 14-day healthcare benefits digitization (ICD/CPT), SOP Reasoner multi-agent claims adjudication (80% cost reduction), and clinical semantic search with ModernBERT inquiry classification.
   - **Boltzmann Labs Pvt Ltd** (Jul 2023 – Jan 2026; including DL intern Nov 2022 – Jun 2023): 4 outcome-first bullets covering agentic RTL verification for Cadence Xcelium, PyTorch sequential battery modeling (99% reliability) and edge quantization, domain RAG & LLaMA-3.2-1B LoRA fine-tuning on NVIDIA L40S GPUs, and GPU-accelerated GROMACS + OpenMM FastAPI microservice on AWS EKS.
4. **What I'm Building**:
   - **InferEdge AI / VaayuEdge**: In-browser English→Telugu speech translation with zero cloud server costs.
   - **Neural Mastery**: Interactive AI engineering platform with 1,800+ lessons, in-browser Python runtime, and visual labs.
   - **Hugging Face Research Models**: Fine-tuned IndicTrans2 English→Telugu checkpoints and ONNX edge inference pipelines (explicitly labeled as research checkpoints).
   - **Neural Mastery on YouTube**: Technical video series on LLM architectures, evaluation metrics, and backpropagation mathematics.
5. **Selected Projects**:
   - `qa_rag_application`: Modular RAG sandbox with 5 parsers, 4 chunkers, hybrid BM25 + dense Chroma retrieval, cross-encoder reranking, and agentic CRAG/GraphRAG routing.
   - `Finance_Agent`: Autonomous financial reporting agent orchestrated with LangGraph state machine, explicit competitor search loop via Tavily, and LLM self-critique.
   - `Traffic_Volume_Prediction_Hackathon`: MachineHack Great Indian Hiring Hackathon 2024 Top 10 finish using cyclical trigonometric features and RFECV with CatBoost/XGBoost.
   - `NeuralMastery`: Full-stack educational platform built with Docusaurus, in-browser Python execution, and visual interactive playgrounds.
   - Each project structured with clear **Problem → Approach → Result**, tech chips, and GitHub links.
6. **Writing & Videos**:
   - 3 real YouTube videos embedded via privacy-preserving `youtube-nocookie.com` with real video IDs:
     - `_C7DZY1BUpM` (LLMs Architecture & Foundations)
     - `UlahrrEk9Ns` (Machine Learning Evaluation Metrics)
     - `UgBqCyuCQKw` (Backward Propagation from First Principles)
   - Prominent banner linking to the Neural Mastery engineering blog (`https://neuralmasteryai.com/blog/`).
7. **Skills**:
   - Categorized into 4 discrete engineering domains:
     - **GenAI & Agentic Systems**
     - **Machine Learning & Deep Learning**
     - **Inference & Edge AI**
     - **Backend & MLOps Infrastructure**
   - Strictly no progress bars or percentages.
8. **Contact**:
   - Direct contact channels: Email (`mailto:patturiravivarma@gmail.com`), LinkedIn, GitHub, X (`@NeuralMastery`).
   - One-click copy email button with clipboard confirmation.
   - Secondary résumé download CTA.
   - **Phone number is never displayed.**
   - No backend form dependencies.

### Technical & Design Implementation
- **Static Output**: Pre-rendered HTML/CSS with Astro 7.
- **Plain CSS**: Modern custom properties, responsive grid/flexbox, zero framework bloat.
- **Theming**: Dark and light modes with system preference auto-detection, zero-flash inline script in `<head>`, and manual theme switch button.
- **Accessibility & Performance**:
  - Skip-to-content accessible link.
  - Semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`).
  - High contrast ratios adhering to WCAG AAA standards.
  - Full `@media (prefers-reduced-motion: reduce)` support.
- **SEO & Metadata**:
  - Open Graph preview image (`/og-image.png`).
  - Schema.org `Person` JSON-LD with verified social profiles and job credentials.
  - Canonical URL (`https://ravivarmapatturi.github.io/`).
  - Generated dynamic sitemap (`/sitemap-index.xml` and `/sitemap-0.xml`).
  - Valid `robots.txt`.
  - Monogram SVG favicon (`/favicon.svg`).
- **Deployment**: `.github/workflows/deploy.yml` configured to build and deploy to GitHub Pages on pushes to `main`.

---

## 2. Source Material & Verification Log

Every piece of information was verified against primary sources:

| Fact / Detail | Source | Verification |
|---|---|---|
| Roles, Employment Dates, Titles | `/home/ravivarma/Documents/DREAM_PROJECT/RAVIVARMA_PATTURI_RESUME_OCT_2026.pdf` | Extracted via `pdftotext` (Autonomize AI: Feb 2026–Present; Boltzmann Labs: Jul 2023–Jan 2026) |
| Impact Metrics (14 days, 80%, 70K+, 2×/50%) | Resume PDF | Extracted verbatim from experience section |
| Education & Degree | Resume PDF | B.Tech ECE, RGUKT (CGPA 9.0, 2019–2023) |
| Contact Information | Resume PDF & Brief | Email: `patturiravivarma@gmail.com`, LinkedIn: `in/ravivarma-patturi`, X: `@NeuralMastery`, GitHub: `ravivarmapatturi`. Phone number deliberately excluded per brief. |
| InferEdge AI & VaayuEdge | `https://inferedgeai.com/` & `https://inferedgeai.com/vaayuedge/` | Verified live HTTP 200, in-browser English→Telugu translation product, captured screenshot |
| Neural Mastery Platform | `https://neuralmasteryai.com/` & `/blog/` | Verified live HTTP 200, 1,800+ learning pages, captured screenshot |
| Hugging Face Models | `https://huggingface.co/api/models?author=ravivarmapatturi` | Verified models: `inferedge-indictrans2-en-te-1000steps-v1`, `inferedge-indictrans2-en-te-100steps-v1`, `vayyuedge-opus-mt-en-dra-onnx`, `vayyuedge-mms-tts-tel-onnx`, `inferedge-opus-en-te-100steps-research-v1` |
| YouTube Video IDs | `https://www.youtube.com/@neuralmastery` | Verified video IDs: `_C7DZY1BUpM`, `UlahrrEk9Ns`, `UgBqCyuCQKw` |
| Flagship Codebases | GitHub API & repository READMEs | Inspected architectures for `qa_rag_application`, `Finance_Agent`, `Traffic_Volume_Prediction_Hackathon`, and `NeuralMastery` |

### Unverified Claims
- None. All information incorporated into the portfolio is directly anchored in verified sources.

---

## 3. Definition of Done Checklist

### 1. Build Verification
```bash
npm ci && npm run build
```
- **Result**: Exit code 0.
- Clean static export generated in `dist/`.

### 2. Local Link & Preview Verification
Served via `npx astro preview` and verified via automated test script (`scripts/check-links.mjs`):
- `[PASS 200] /favicon.svg`
- `[PASS 200] /_astro/index.DjJEqOHj.css`
- `[PASS 200] /assets/pdf/Ravivarma_Patturi_Resume.pdf`
- `[PASS 200] /assets/img/PROFILE.png`
- `[PASS 200] /assets/img/building/inferedge.png`
- `[PASS 200] /assets/img/building/neuralmastery.png`
- `[PASS 200] /assets/img/building/huggingface.png`
- `[PASS 200] /assets/img/building/youtube.jpg`
- `[PASS 200] /robots.txt`
- `[PASS 200] /sitemap-index.xml`
- `[PASS 200] /sitemap-0.xml`
- **Result**: All local links returned 200 OK.

### 3. Responsive Screenshots
Saved to `redesign-shots/` (gitignored):
- `screenshot-1440px-light.png`
- `screenshot-1440px-dark.png`
- `screenshot-375px-light.png`
- `screenshot-375px-dark.png`
- **Result**: Zero horizontal overflow at 375px mobile viewport.

### 4. Lighthouse Scores
Audited against local production preview server using Lighthouse 13.6:
| Category | Score | Brief Requirement | Status |
|---|:---:|:---:|:---:|
| **Performance** | **99** | ≥ 95 | PASS |
| **Accessibility** | **100** | ≥ 95 | PASS |
| **Best Practices** | **100** | ≥ 95 | PASS |
| **SEO** | **100** | ≥ 95 | PASS |

---

## 4. Git Branching & Submission
- Work conducted strictly on branch `redesign-2026`.
- Main branch untouched; no direct pushes to `main`.
- Ready for Claude Code review and merge.
