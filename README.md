# B-PLAN Consulting — Website

This repository contains the source and built site for the B-PLAN Consulting marketing website deployed to GitHub Pages at https://tosinisogun.github.io/.

**What this site is**
- A Vite + React + TypeScript single-page marketing site (hero, services, insights, about, contact).
- Content is authored in the repository (see `src/lib/content.ts`) and rendered by pages under `src/pages`.

**Tech stack**
- Vite (build system) with React + TypeScript
- Tailwind CSS for styling
- shadcn UI components (Radix + Tailwind composition)
- React Router for client routing (`src/App.tsx` uses `HashRouter` to be Pages-friendly)

Project structure (important files)
- `index.html` — main HTML template served by GitHub Pages (also copied from `dist/index.html` on build).
- `src/` — application source
  - `src/pages/` — page components (Index, Services, Insights, About, Contact, InsightDetail)
  - `src/components/` — shared UI components and `ui/` primitives
  - `src/lib/content.ts` — central content/data used by pages
- `dist/` — Vite-built static output (generated via `npm run build`)
- `.github/workflows/gh-pages.yml` — workflow that can push `dist` (or `docs/`) to `main` for Pages
- `.github/workflows/generate-favicons.yml` — CI job to rasterize `favicon.svg` into PNGs and commit them

Local development
1. Install dependencies:
```bash
npm ci
```
2. Start dev server:
```bash
npm run dev
```
3. Open http://localhost:5173 (Vite will print the exact URL).

Build & preview
```bash
npm run build
npm run preview
```

Favicon and cross-browser support
- The repository supplies `favicon.svg` at the repo root. Some browsers prefer PNG fallbacks.
- The site includes fallback links in `index.html` (`favicon-32x32.png`, `favicon-16x16.png`, `apple-touch-icon.png`) — add those files to the repo root to ensure broad support.
- A GitHub Actions workflow (`.github/workflows/generate-favicons.yml`) will (when enabled) auto-generate these PNGs from `favicon.svg` and commit them back to `main`.

Routing and GitHub Pages
- For `USERNAME.github.io` sites the `vite.config.ts` `base` should be set to `/` (this repo uses `/`).
- To avoid refresh 404s, the project uses `HashRouter` in `src/App.tsx`. If you prefer clean paths, switch to `BrowserRouter` and configure a Pages deployment that serves an index fallback (more complex).

Deployment options
- Option A — Commit built files to repository root (this repo currently has built assets committed to `main`):
  - `npm run build` then copy `dist/*` to repo root and push.
- Option B — Use `docs/` folder: build into `dist/`, copy `dist/*` to `docs/`, and commit `docs/` to `main`. GitHub Pages can serve from the `docs/` folder.
- Option C — Use the `gh-pages` branch with a standard `gh-pages` deployment action.

CI / Actions notes
- `.github/workflows/gh-pages.yml` contains a workflow that builds and commits `docs/` to `main`. It requires `permissions: contents: write` for `GITHUB_TOKEN` to push.
- `.github/workflows/generate-favicons.yml` generates PNG icons from `favicon.svg` using ImageMagick and commits them. The workflow is cautious to avoid re-trigger loops by skipping bot-triggered runs.

How to edit content
- Update `src/lib/content.ts` for site text, insight posts, services, and team data. Pages read from that module.
- For layout and UI changes, edit components in `src/components/` and the `ui/` primitives under `src/components/ui/`.

Contributing
- Make feature branches from `main`, open pull requests and have them reviewed.
- For content-only changes you may edit `src/lib/content.ts` and open a PR.

Troubleshooting
- If the Pages site shows stale assets, clear browser cache or hard-refresh (Ctrl+F5 / Cmd+Shift+R) — GitHub Pages can cache aggressively.
- If Actions fail with `permission denied` when attempting to push, ensure the workflow contains:
```yaml
permissions:
  contents: write
```
and that the job is not blocked by branch protection rules that prevent `GITHUB_TOKEN` from pushing.

Contact / Ownership
- Repo owner: TosinISOGUN (GitHub Pages host: tosinisogun.github.io)

---
Generated documentation added by maintainers to help with development and deployment.

