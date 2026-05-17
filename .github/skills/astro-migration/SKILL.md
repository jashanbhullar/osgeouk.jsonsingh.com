---
name: jekyll-to-astro-migration
description: Plan and execute safe, incremental migration of this OSGeo:UK website from Jekyll to Astro while preserving URLs and markdown-first editing.
---

# Jekyll to Astro Migration Skill

Use this skill when a prompt asks to migrate, scaffold, or incrementally move this repository from Jekyll to Astro.

## Required Defaults

- Treat Markdown as the source of truth for content.
- Exclude `foss4guk2025` and `foss4guk2026` from migration unless explicitly requested.
- Preserve historical URL structure and internal links.
- Implement in small, testable commits/steps.

## Step Pattern

1. Audit current content, layouts, and Liquid dependencies.
2. Build Astro skeleton and shared layout.
3. Migrate pages section-by-section with parity checks.
4. Add SEO baseline and sitemap.
5. Remove Jekyll-only files after parity is confirmed.

## Must-Check Features

- CSV-driven training table from `_data/osgeouk_training.csv`.
- Legacy layout variants: default, constitution, event-specific themes.
- Existing static assets, including large PDFs and images.
- CNAME and GitHub Pages deployment flow.

## Done Criteria

- `npm run build` succeeds.
- Key pages render correctly in local browser preview.
- No new broken internal links.
- README updated for Astro workflow.
