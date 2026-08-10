# raednabulsi.github.io

Personal developer portfolio for Raed Nabulsi — Backend-focused Full-Stack Developer (Laravel, PHP, React).

Built with React + Vite + TypeScript.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deployment (GitHub Pages)

This repo is a user-page repo (`<username>.github.io`), so it's served from the domain root.
A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys automatically on
every push to `master`.

One-time setup: in the GitHub repo, go to **Settings → Pages** and set **Source** to
**"GitHub Actions"**. After that, every push to `master` redeploys the site automatically.

## Content

All resume content lives in [src/data/resume.ts](src/data/resume.ts) — edit that file to update
experience, skills, projects, or contact info without touching any component.
