# OSGeo:UK Website

This site is built with Astro and deployed to GitHub Pages.

## Local development

Requirements:

- Node.js 22+
- npm

Install dependencies:

```bash
npm ci
```

Start local dev server:

```bash
npm run dev
```

Build production output:

```bash
npm run build
```

Preview production output locally:

```bash
npm run preview
```

## Content editing

- Main migrated markdown content lives in `src/content/pages`.
- Legacy source markdown is still present in original folders for reference.
- Training data is driven by `_data/osgeouk_training.csv`.

## Excluded sections

`foss4guk2025` and `foss4guk2026` are intentionally excluded from this migration scope and remain separate themed sites.

## Deployment

Pushes to `gh-pages` trigger `.github/workflows/build.yml`.
The workflow builds with Astro and publishes `dist` to GitHub Pages.

Custom domain is preserved through `public/CNAME`.
