# OSGeo:UK Website Copilot Instructions

## Repository Intent

- This repository is the public website for OSGeo:UK and several historical FOSS4G:UK event sites.
- Primary source content is Markdown plus static assets.
- Keep edits safe for non-developer maintainers.

## Current Architecture Facts

- Root site is Jekyll-based and uses `_layouts`, `_includes`, `_data`, and frontmatter `layout` keys.
- Root domain is controlled with `CNAME`.
- GitHub Pages deploys via `.github/workflows/build.yml`.
- `foss4guk2025` and `foss4guk2026` are separate themed sites and are intentionally excluded from root migration work unless explicitly requested.

## Migration Guardrails

- Preserve existing URLs wherever possible (historical links should not break).
- Prefer smallest practical changes and keep content in Markdown.
- Convert Liquid logic to Astro components/utilities only where needed.
- Keep contributors able to update content by editing Markdown files.
- Avoid introducing complex CMS tooling unless asked.

## Content and UX Standards

- Maintain plain-language, community-friendly tone.
- Ensure accessibility basics: heading hierarchy, alt text, keyboard-visible navigation, sufficient contrast.
- Keep static assets optimized and avoid unnecessary duplication.

## SEO and Metadata Standards

- Ensure every page has title and description metadata.
- Add canonical URLs, sitemap, robots, and Open Graph/Twitter tags.
- Keep domain and canonical host consistent with deployment target.

## Verification Expectations

- Run local checks after changes (`npm run build`, lint/type checks where available).
- Verify primary pages in browser preview: home, training, AGM section, at least one event section.
- Validate that old internal links still resolve or are redirected.
