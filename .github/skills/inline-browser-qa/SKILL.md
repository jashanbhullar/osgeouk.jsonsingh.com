---
name: inline-browser-regression-check
description: Verify migrated pages with focused inline browser checks for content parity, links, and metadata.
---

# Inline Browser Regression Check Skill

Use this skill after each migration increment.

## Verification Flow

1. Start local dev server.
2. Open inline browser at local URL.
3. Check home page content parity and navigation links.
4. Check one page from each migrated section.
5. Check title, meta description, canonical, and social tags.
6. Record findings and fix before moving to the next step.

## Minimum Page Set

- Home page
- Training page
- One AGM page
- One page each from `foss4guk2016`, `foss4guk2018`, `foss4guk2019`, `foss4guk2022local`, `foss4guk2024`, `foss4guklocal2023`, `foss4gukonline2020`

## Failure Handling

- If any page is missing/broken, stop and fix before continuing.
- If links changed, add redirects or restore prior path structure.
