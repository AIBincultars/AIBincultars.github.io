# Ziyue Kang — Research Homepage

A bilingual, multi-page research homepage built with Astro, custom CSS, and Astro Content Collections.

## Routes

- `/en/` and `/zh/` — Home
- `/en/publications/` and `/zh/publications/` — Publications
- `/en/collaborations/` and `/zh/collaborations/` — Public collaborations
- `/en/projects/` and `/zh/projects/` — Projects

Projects navigation and homepage content remain hidden while the public project list is empty, and direct Projects URLs return to the matching Home page. The legacy `/en/about/`, `/zh/about/`, `/en/experience/`, and `/zh/experience/` routes also redirect to the matching Home page. The root route chooses a language from `localStorage` and the browser language. Every language page is statically generated and can be opened or refreshed directly on GitHub Pages.

## Content

- Public profile, bilingual copy, education, and projects: `src/data/site-content.ts`
- Routes, languages, site URL, and language storage key: `src/config/site.ts`
- Public publications: `src/content/publications/`
- Public collaborations: `src/content/collaborations/`
- Content validation: `src/content/config.ts`
- Shared visual system: `src/styles/global.css`

Only publicly verifiable research outputs and collaborations belong in the frontend content collections.

## Development

```bash
npm install
npm run dev -- --host
npm run check
npm run build
npm run preview -- --host
```

See `CONTENT_EDIT_GUIDE.md` before editing public content. GitHub Pages deploys the generated `dist/` directory through `.github/workflows/deploy.yml`.
