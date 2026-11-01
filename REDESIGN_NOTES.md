# Rebuild Notes: ravivarmapatturi.github.io

Rebuilt as a recruiter-grade, high-performance personal portfolio site on branch `redesign-2026`.

---

## 1. Executive Summary

- **Objective**: Rebuild personal site so a technical recruiter or engineering hiring manager immediately understands who Ravivarma is (AI/ML Engineer shipping production GenAI/agentic systems and building edge AI in public) and can reach out or review his work within seconds.
- **Tech Stack**: [Astro](https://astro.build/) (Static Site Generation), vanilla CSS with design tokens, zero external CSS/JS runtime dependencies, zero analytics/trackers.
- **Outcome**:
  - `npm ci && npm run build` cleanly exits `0` in ~1 second.
  - All local endpoints and static assets return `200 OK`.
  - Zero horizontal overflow at `375px` viewport.
  - Full-page responsive screenshots (375px & 1440px, light & dark) saved to `redesign-shots/`.
  - **Lighthouse Scores**: Performance: **99**, Accessibility: **100**, Best Practices: **100**, SEO: **100**.

---

## 2. What Was Built

### Core Sections
1. **Header & Navigation (`src/components/Header.astro`)**:
   - Monogram brand identity (`RP`), sticky backdrop blur header.
   - Smooth navigation links to `#experience`, `#building`, `#projects`, `#writing-videos`, `#skills`, and `#contact`.
   - Theme toggle button supporting light and dark themes with localStorage persistence and system preference fallback.
   - Accessible mobile drawer menu with ARIA state management.

2. **Hero (`src/components/Hero.astro`)**:
   - Status badge: *"AI/ML Engineer · 4 Years Experience · Bengaluru, India"*.
   - Positioning statement: *"AI Engineer: production agentic systems & edge inference"*.
   - High-impact positioning summary explaining enterprise healthcare delivery alongside public inference engineering.
   - Primary CTAs: *"Hire / Contact"* (smooth scroll to contact) and *"Download résumé"* (direct PDF link to `/assets/pdf/Ravivarma_Patturi_Resume.pdf`).
   - Profile photograph (`/assets/img/PROFILE.png`) with verified badge (*"Current: AI Engineer @ Autonomize AI"*).

3. **Impact Strip (`src/components/ImpactStrip.astro`)**:
   - 4 verifiable metrics extracted from production deliverables:
     - **14 Days**: PoC to full production project for a leading U.S. healthcare organization.
     - **80%**: Lower claims adjudication cost via multi-agent SOP reasoning.
     - **70,000+**: Healthcare concepts indexed in Azure AI Search with cross-encoder reranking.
     - **2× Faster / 50% Smaller**: Quantized deep sequential models (<1.2% MAPE deviation) for real-time edge battery management.

4. **Experience (`src/components/Experience.astro`)**:
   - **Autonomize AI** (*Feb 2026 – Present*, AI Engineer):
     - Recursive Language Model (RLM) master-sub LLM reasoning architecture on Temporal.
     - Healthcare benefits digitization pipeline (ICD, CPT standards).
     - SOP Reasoner multi-agent claims adjudication system (80% cost reduction).
     - Clinical NLP semantic search and ModernBERT inquiry classification.
   - **Boltzmann Labs Pvt Ltd** (*Jul 2023 – Jan 2026*, AI Research Engineer; *Nov 2022 – Jun 2023*, DL Research Intern):
     - LLM agentic RTL verification workflow integrated with Cadence Xcelium UVM.
     - Edge battery management RNN/LSTM/GRU inference quantization (2× lower latency, 50% smaller size).
     - Domain-specific RAG and LLaMA-3.2-1B fine-tuning with LoRA on NVIDIA L40S GPUs.
     - GPU-accelerated Dockerized molecular simulation microservices on AWS EKS.

5. **What I'm Building (`src/components/Building.astro`)**:
   - **InferEdge AI · VaayuEdge**: On-device multimodal inference; English→Telugu speech translation running fully client-side in the browser.
   - **Neural Mastery**: 1,800+ page AI engineering platform with in-browser Python execution and visual labs.
   - **Hugging Face Checkpoints**: Fine-tuned IndicTrans2 English→Telugu research checkpoints.
   - **Neural Mastery on YouTube**: Technical video deep dives on machine learning foundations and agentic systems.

6. **Selected Projects (`src/components/Projects.astro`)**:
   - Structured *Problem → Approach → Result* format with technology chips and direct GitHub links:
     - `qa_rag_application`: Regulatory QA RAG Chatbot (GPT-4o, hybrid retrieval, query rewriting, Kubernetes).
     - `Finance_Agent`: Financial Performance Reporting Agent (LangGraph, Tavily Search, Streamlit).
     - `Traffic_Volume_Prediction_Hackathon`: Municipal Traffic Forecasting (Top 10 MachineHack 2024, XGBoost).
     - `NeuralMastery`: Neural Mastery Platform Engine (Interactive education platform & OSS).

7. **Writing & Videos (`src/components/WritingVideos.astro`)**:
   - Spotlight card linking to Neural Mastery interactive platform (`https://neuralmasteryai.com`).
   - 3 real YouTube videos embedded using `youtube-nocookie.com`:
     - `UlahrrEk9Ns`: *Introduction to Evaluation Metrics in Telugu | Machine Learning*
     - `UgBqCyuCQKw`: *Backward Propagation in Telugu | Deep Learning*
     - `EXP_3C7me_k`: *Normalization vs Standardization in Telugu | Machine Learning*

8. **Skills (`src/components/Skills.astro`)**:
   - Grouped into 4 technical categories without ungrounded progress bars:
     - *GenAI & Agentic Systems*
     - *Machine Learning & Deep Learning*
     - *Inference & Edge AI*
     - *Backend & MLOps Infrastructure*

9. **Contact & Footer (`src/components/Contact.astro`, `src/components/Footer.astro`)**:
   - Direct email mailto (`patturiravivarma@gmail.com`).
   - Social & technical links: LinkedIn, GitHub, X (`@NeuralMastery`).
   - Strict privacy: **Phone number omitted completely**.
   - No third-party backend contact form dependencies.

10. **Infrastructure & Deployment**:
    - Clean GitHub Pages workflow configured in `.github/workflows/deploy.yml`.
    - Complete removal of obsolete al-folio Jekyll files, ruby gems, and unused template assets.

---

## 3. Fact Sourcing & Verification Table

| Fact / Statement | Source | Status |
| :--- | :--- | :--- |
| Roles & Titles: AI Engineer at Autonomize AI (Feb 2026–Present), AI Research Engineer at Boltzmann Labs (Jul 2023–Jan 2026) | Resume (`RAVIVARMA_PATTURI_RESUME_OCT_2026.pdf`) | **Verified** |
| Education: B.Tech ECE from RGUKT (CGPA 9.0, 2019–2023) | Resume | **Verified** |
| Metric: "PoC to production in 14 days" (Benefits Digitization) | Resume (Autonomize AI section) | **Verified** |
| Metric: "80% lower adjudication cost" (SOP Reasoner) | Resume (Autonomize AI section) | **Verified** |
| Metric: "70,000+ concepts indexed in Azure AI Search" | Resume (Autonomize AI section) | **Verified** |
| Metric: "2× lower latency, 50% smaller model, <1.2% MAPE" | Resume (Boltzmann Labs section) | **Verified** |
| Top 10 MachineHack Great Indian Hackathon 2024 | Resume & GitHub repo `Traffic_Volume_Prediction_Hackathon` | **Verified** |
| InferEdge AI & VaayuEdge (on-device speech translation) | Brief & `https://inferedgeai.com/vaayuedge/` | **Verified** |
| Neural Mastery (1,800+ pages, in-browser Python) | Brief & `https://neuralmasteryai.com` | **Verified** |
| Hugging Face checkpoints (`IndicTrans2` English→Telugu) | Brief & `https://huggingface.co/ravivarmapatturi` (labeled as research checkpoints) | **Verified** |
| YouTube Video IDs: `UlahrrEk9Ns`, `UgBqCyuCQKw`, `EXP_3C7me_k` | YouTube Channel `@neuralmastery` verified via API | **Verified** |
| Profile photo | Reused from existing repository (`public/assets/img/PROFILE.png`) | **Verified** |
| Resume PDF | Copied from `/home/ravivarma/Documents/DREAM_PROJECT/RAVIVARMA_PATTURI_RESUME_OCT_2026.pdf` to `public/assets/pdf/Ravivarma_Patturi_Resume.pdf` | **Verified** |

---

## 4. Quality & Performance Verification Results

### Build Verification
```text
$ npm ci && npm run build

> ravivarmapatturi-portfolio@1.0.0 build
> astro build

[build] output: "static"
[build] mode: "static"
[build] Complete in 888ms!
```
Exit code: `0`.

### Local Link Check
Verified through automated link resolution against all generated routes:
- `/` -> **200 OK**
- `/assets/pdf/Ravivarma_Patturi_Resume.pdf` -> **200 OK**
- `/assets/img/PROFILE.png` -> **200 OK**
- `/assets/img/building/inferedge.png` -> **200 OK**
- `/assets/img/building/neuralmastery.png` -> **200 OK**
- `/assets/img/building/huggingface.png` -> **200 OK**
- `/assets/img/building/youtube.jpg` -> **200 OK**
- `/favicon.svg` -> **200 OK**
- `/og-image.png` -> **200 OK**
- `/robots.txt` -> **200 OK**
- `/sitemap-index.xml` -> **200 OK**
- `/sitemap-0.xml` -> **200 OK**

### Mobile Responsive Audit (375px)
- Viewport width: `375px`
- Document `scrollWidth`: `375px`
- Horizontal scroll: **None (0px overflow)**

### Lighthouse Audit Scores
- **Performance**: `99`
- **Accessibility**: `100`
- **Best Practices**: `100`
- **SEO**: `100`

### Generated Screenshots (`redesign-shots/`)
- `375px-light.png`: Mobile view in light mode.
- `375px-dark.png`: Mobile view in dark mode.
- `1440px-light.png`: Desktop view in light mode.
- `1440px-dark.png`: Desktop view in dark mode.
