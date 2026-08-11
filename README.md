# Shady Adel — Portfolio

Personal site: **https://shadyadel90.github.io/**

Two switchable profiles: **iOS Engineer** and **AI Product Engineer**.
Dark, minimal, project-focused. Built with React + Vite + Tailwind.

This is the **only** repo — it deploys to your user GitHub Pages site.

## Updating the site

```
src/data/portfolio.ts                          ← both profiles + shared contact
public/Shady-Adel-iOS-CV.pdf                   ← iOS tab Download CV
public/Shady-Adel-AI-Product-Engineer-CV.pdf   ← AI tab Download CV
public/screenshots/                            ← project screenshots
```

1. **CV changed?** Replace the matching PDF in `public/` (keep the filename).
2. **New project / new job?** Edit `src/data/portfolio.ts`. Empty `""` / `[]` fields are hidden.
3. **Push to GitHub.** Actions builds and deploys automatically.

## First-time GitHub Pages setup

**Settings → Pages → Source: GitHub Actions**

## Local development

```bash
npm install
npm run dev
npm run build
```
