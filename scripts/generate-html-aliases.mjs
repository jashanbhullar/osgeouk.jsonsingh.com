import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve(process.cwd(), "dist");

function listIndexFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...listIndexFiles(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name === "index.html") {
      out.push(fullPath);
    }
  }
  return out;
}

const indexFiles = listIndexFiles(distDir);
let created = 0;

for (const indexFile of indexFiles) {
  const dirPath = path.dirname(indexFile);
  if (dirPath === distDir) {
    continue;
  }

  const relDir = path.relative(distDir, dirPath);
  const aliasFile = path.join(distDir, `${relDir}.html`);

  if (!fs.existsSync(aliasFile)) {
    fs.copyFileSync(indexFile, aliasFile);
    created += 1;
  }
}

console.log(`Created ${created} .html alias files.`);
