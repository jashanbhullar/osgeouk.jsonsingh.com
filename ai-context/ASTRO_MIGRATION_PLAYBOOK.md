# OSGeo:UK Website Migration Playbook (Jekyll -> Astro)

This playbook is designed for prompt-by-prompt execution with Copilot and inline browser verification.

Preferred model for all prompts: GPT-5.3-Codex.

## 1. Current Site Scope

### 1.1 Repository inventory (current)

- Markdown files: 134
- HTML files: 34
- CSS files: 12
- JavaScript files: 20
- YAML files: 6
- CSV files: 1
- PDF files: 75

### 1.2 Main sections in scope

- Root content pages (home, donations, training, governance, etc.)
- `agm/`
- `foss4guk2016/`
- `foss4guk2018/`
- `foss4guk2019/`
- `foss4guk2022local/`
- `foss4guk2024/`
- `foss4guklocal2023/`
- `foss4gukonline2020/`
- Shared assets (`images/`, `stylesheets/`, `javascripts/`, `files/`)

### 1.3 Explicitly out of scope

- `foss4guk2025/`
- `foss4guk2026/`

These two use separate themed setups and should remain untouched until theme direction is selected.

### 1.4 Jekyll-specific features to replace

- Frontmatter `layout` mapping from `_layouts/`
- Shared partials from `_includes/`
- Liquid loops/conditions in Markdown (notably `training.md` using `_data/osgeouk_training.csv`)
- Jekyll/GitHub Pages Ruby build chain (`Gemfile`, `_config.yml`, Jekyll workflow)

## 2. Astro Target Architecture (simple + markdown-first)

### 2.1 Why this approach

- Minimal cognitive load for contributors.
- Markdown remains the primary editing interface.
- Lowest ongoing maintenance overhead.

### 2.2 Suggested implementation

- Use plain Astro starter (minimal template).
- Keep content as Markdown files organized under `src/content/pages/`.
- Create one generic markdown page layout and a few event-specific layouts.
- Render pages through content collections with static path generation.
- Keep old URL paths by mirroring existing folder structure.

### 2.3 Suggested markdown template

Use one simple shared template for most pages:

```astro
---
import SiteLayout from "../layouts/SiteLayout.astro";
const { title, description } = Astro.props;
---

<SiteLayout title={title} description={description}>
  <article class="prose">
    <slot />
  </article>
</SiteLayout>
```

Then create a small number of variants only when required by historical event styles.

## 3. Incremental Execution Plan (prompt by prompt)

Each step below is intentionally small and independently verifiable.

### Step 1: Scaffold Astro baseline

Prompt:

```text
Use GPT-5.3-Codex. Initialize Astro in this repo on branch gh-pages for incremental migration.
Keep existing content untouched.
Set up npm scripts for dev/build/preview, and create an initial SiteLayout.
Do not migrate pages yet.
```

Verify:

1. Run `npm install`.
2. Run `npm run build`.
3. Confirm build output exists.

### Step 2: Add core layout and metadata system

Prompt:

```text
Use GPT-5.3-Codex. Add a reusable Astro SiteLayout with title/description/canonical support and global stylesheet wiring.
Include Open Graph and Twitter meta tags.
Do not migrate content yet.
```

Verify:

1. Run `npm run dev`.
2. Open inline browser and inspect generated head tags on the temporary home page.

### Step 3: Migrate root pages (excluding 2025/2026)

Prompt:

```text
Use GPT-5.3-Codex. Migrate root markdown pages to Astro content while preserving URLs and markdown editing simplicity.
Exclude foss4guk2025 and foss4guk2026.
Map Jekyll layout=default and layout=constitution to Astro layouts.
```

Verify:

1. Home page renders.
2. Key root pages render: donations, training placeholder, governance pages.
3. Internal links remain valid.

### Step 4: Replace training CSV Liquid logic

Prompt:

```text
Use GPT-5.3-Codex. Replace training page Liquid table logic with an Astro component that reads _data/osgeouk_training.csv.
Keep output behavior equivalent (URL cells become More info links).
```

Verify:

1. Training table renders with expected rows.
2. Link cells open correctly.

### Step 5: Migrate AGM section

Prompt:

```text
Use GPT-5.3-Codex. Migrate all agm markdown pages to Astro routes with URL parity and shared layout.
Preserve all historical links.
```

Verify:

1. Open at least three AGM year pages.
2. Confirm links to minutes and PDFs still work.

### Step 6: Migrate event sections in scope

Prompt:

```text
Use GPT-5.3-Codex. Migrate event sections foss4guk2016, foss4guk2018, foss4guk2019, foss4guk2022local, foss4guk2024, foss4guklocal2023, and foss4gukonline2020.
Preserve historical page paths and static assets.
Do not touch foss4guk2025 and foss4guk2026.
```

Verify:

1. Open one page from each migrated section in inline browser.
2. Confirm images and PDFs load.
3. Confirm section-specific styling still applies where expected.

### Step 7: Add redirects and broken-link guard

Prompt:

```text
Use GPT-5.3-Codex. Add redirect handling and link checks to preserve old URL behavior.
Implement a lightweight broken-link check suitable for CI.
```

Verify:

1. Run link check command.
2. Validate known historical links.

### Step 8: SEO and discoverability improvements

Prompt:

```text
Use GPT-5.3-Codex. Add SEO baseline to Astro site: sitemap, robots.txt, canonical URLs, OG/Twitter tags, and optional schema.org organization metadata.
Keep implementation simple.
```

Verify:

1. `sitemap.xml` is generated.
2. `robots.txt` exists and is correct.
3. Home page includes OG tags.

### Step 9: Remove Jekyll dependencies and files (post-parity)

Prompt:

```text
Use GPT-5.3-Codex. Remove Jekyll-only build dependencies and config that are no longer needed after Astro parity.
Do not remove content files or anything under foss4guk2025 and foss4guk2026.
```

Scope to remove/update:

- `Gemfile`
- `Gemfile.lock`
- root `_config.yml` (if fully replaced)
- `_layouts/` and `_includes/` only if fully unused
- Jekyll-specific workflow steps

Verify:

1. `npm run build` succeeds.
2. No Ruby/Jekyll command is required for deploy.

### Step 10: Update README for Astro workflow

Prompt:

```text
Use GPT-5.3-Codex. Rewrite README for Astro contributor workflow:
install, run dev server, build, preview, content editing in markdown, and deployment notes.
Include explicit note that foss4guk2025 and foss4guk2026 are managed separately.
```

Verify:

1. Follow README commands from clean clone.
2. Confirm local dev server starts.

### Step 11: Switch GitHub Pages workflow to Astro

Prompt:

```text
Use GPT-5.3-Codex. Replace current Jekyll GitHub Pages workflow with Astro build + upload-pages-artifact + deploy-pages.
Keep branch policy and permissions aligned with current repo behavior.
```

Verify:

1. Trigger workflow on branch push.
2. Confirm successful Pages deploy.

## 4. Inline Browser Verification Checklist

Use this quick pass after each major step:

1. Home page renders with expected title and hero content.
2. Navigation links work.
3. Training table renders from CSV.
4. Three AGM pages open.
5. One page per migrated event section opens.
6. Largest PDFs still downloadable.
7. No obvious styling regressions.
8. Meta tags present for home and one internal page.

## 5. Deploying via GitHub Pages + Cloudflare (osgeouk.jsonsingh.com)

### 5.1 GitHub Pages settings

1. In repository settings, set Pages source to GitHub Actions.
2. Keep deploy workflow on push to production branch.
3. Ensure generated site includes `CNAME` with `osgeouk.jsonsingh.com` (or configure custom domain in Pages settings).

### 5.2 Cloudflare DNS settings (simple subdomain setup)

For subdomain `osgeouk.jsonsingh.com`:

1. Create `CNAME` record:
   - Name: `osgeouk`
   - Target: `<github-username>.github.io`
2. Keep Cloudflare proxy behavior consistent during verification (DNS only is simplest while validating).
3. In GitHub Pages, confirm custom domain and wait for certificate issuance.

If deploying apex/root domains instead, use GitHub Pages A/AAAA guidance.

### 5.3 Post-deploy checks

1. Open `https://osgeouk.jsonsingh.com`.
2. Verify certificate is valid.
3. Confirm canonical host behavior (www/non-www if used).
4. Re-run key page checks and spot-check PDFs.

## 6. Large Static Assets (simple recommendation)

Yes, GitHub can be used.

Simple policy:

1. Keep regular site images and small PDFs in repo.
2. Put large presentations/decks into GitHub Releases and link to release assets from pages.
3. Avoid very large binaries in normal git history when possible.

This keeps the website repository lighter and faster to clone/build.

## 7. PDF Compression Commands

Install Ghostscript on macOS:

```bash
brew install ghostscript
```

Compress one PDF (good balance):

```bash
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output-compressed.pdf input.pdf
```

Higher quality/larger output:

```bash
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/printer -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output-printer.pdf input.pdf
```

Batch compress a directory of PDFs:

```bash
mkdir -p compressed
for f in *.pdf; do
  gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile="compressed/${f%.pdf}-compressed.pdf" "$f"
done
```

Tip: Always compare readability before replacing originals.

## 8. Potential Improvements After Migration

Keep these optional and incremental:

1. Add image optimization in build step for oversized JPG/PNG assets.
2. Add simple content linting for Markdown links/headings.
3. Add lightweight page performance budget checks.
4. Add contributor templates for common content updates.
5. Add a redirect map for any path changes discovered later.

## 9. Definition of Done

Migration is done when all are true:

1. In-scope sections are served by Astro with URL parity.
2. `foss4guk2025` and `foss4guk2026` remain untouched.
3. Build/deploy is fully Astro-based on GitHub Actions.
4. README reflects new workflow.
5. SEO baseline is implemented.
6. Inline browser checks pass for representative pages.
