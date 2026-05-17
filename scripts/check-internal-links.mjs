import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve(process.cwd(), "dist");

function listHtmlFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && entry.name.startsWith("_")) {
      // Ignore partial/template directories copied from legacy sub-sites.
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...listHtmlFiles(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".html")) {
      out.push(fullPath);
    }
  }
  return out;
}

function shouldSkip(target) {
  return (
    !target ||
    target.startsWith("#") ||
    target.startsWith("mailto:") ||
    target.startsWith("tel:") ||
    target.startsWith("javascript:") ||
    target.startsWith("data:") ||
    target.startsWith("http://") ||
    target.startsWith("https://") ||
    target.startsWith("ftp://") ||
    target.startsWith("//") ||
    // Some legacy content uses bare hostnames without a scheme.
    /^[a-z0-9.-]+\.[a-z]{2,}(\/|$)/i.test(target)
  );
}

function candidatePaths(targetPath) {
  const normalized = targetPath.startsWith("/") ? targetPath : `/${targetPath}`;

  const noTrailing =
    normalized.length > 1 && normalized.endsWith("/")
      ? normalized.slice(0, -1)
      : normalized;

  if (noTrailing === "/") {
    return [path.join(distDir, "index.html")];
  }

  if (targetPath.endsWith("/")) {
    return [
      path.join(distDir, noTrailing, "index.html"),
      path.join(distDir, `${noTrailing}.html`),
    ];
  }

  if (path.extname(noTrailing)) {
    return [path.join(distDir, noTrailing)];
  }

  return [
    path.join(distDir, noTrailing),
    path.join(distDir, `${noTrailing}.html`),
    path.join(distDir, noTrailing, "index.html"),
  ];
}

function existsAny(pathsToCheck) {
  return pathsToCheck.some((p) => fs.existsSync(p));
}

const htmlFiles = listHtmlFiles(distDir);
const failures = [];
const pattern = /(href|src)="([^"]+)"/gi;

for (const filePath of htmlFiles) {
  const html = fs.readFileSync(filePath, "utf-8");
  const dirPath = path.dirname(filePath);
  const fileRelPath = path.relative(distDir, filePath).replace(/\\/g, "/");
  const sourceName = path.basename(fileRelPath, ".html");
  const sourceDir = path.dirname(fileRelPath).replace(/\\/g, "/");
  const sourceSectionPrefix =
    sourceDir === "." && sourceName !== "index" ? `/${sourceName}` : null;
  let match;

  while ((match = pattern.exec(html)) !== null) {
    const raw = match[2];
    if (shouldSkip(raw)) {
      continue;
    }

    let target = raw.split("#")[0].split("?")[0];
    try {
      target = decodeURIComponent(target);
    } catch {
      // Keep original value when URL decoding fails on malformed escapes.
    }
    const targetCandidates = [];

    if (target.startsWith("/")) {
      targetCandidates.push(target);
    } else {
      const rel = path.normalize(
        path.join(path.relative(distDir, dirPath), target),
      );
      targetCandidates.push(`/${rel.replace(/\\/g, "/")}`);

      // In file-style output, top-level section pages are emitted as /section.html.
      // Legacy links on those pages often assume /section/ as the base.
      if (sourceSectionPrefix) {
        const relWithinSection = path.normalize(
          path.join(sourceSectionPrefix, target),
        );
        targetCandidates.push(
          `/${relWithinSection.replace(/\\/g, "/").replace(/^\/+/, "")}`,
        );
      }
    }

    const pathsToCheck = targetCandidates.flatMap((candidate) =>
      candidatePaths(candidate),
    );

    if (!existsAny(pathsToCheck)) {
      failures.push({ filePath, raw });
    }
  }
}

if (failures.length > 0) {
  console.error(`Found ${failures.length} broken internal links:`);
  for (const failure of failures.slice(0, 100)) {
    console.error(`- ${failure.filePath}: ${failure.raw}`);
  }
  process.exit(1);
}

console.log(
  `Internal link check passed across ${htmlFiles.length} HTML files.`,
);
