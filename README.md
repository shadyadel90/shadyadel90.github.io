# Shady Adel — Portfolio

Live site: **https://shadyadel90.github.io/**

One repo. Two profiles (iOS / AI Product Engineer).

## Updating

```
src/data/portfolio.ts
public/Shady-Adel-iOS-CV.pdf
public/Shady-Adel-AI-Product-Engineer-CV.pdf
public/screenshots/
```

Then:

```bash
npm run build:pages
git add -A && git commit -m "Update portfolio" && git push
```

## GitHub Pages setup (do this once)

1. Open **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main`
4. **Folder:** `/docs`  ← not `/(root)`
5. Save

## Local

```bash
npm install
npm run dev
```
