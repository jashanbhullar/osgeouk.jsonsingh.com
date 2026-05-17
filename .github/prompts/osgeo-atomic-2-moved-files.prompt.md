Create an atomic commit for moved files only.

Scope:
- Stage path relocations where an old tracked deleted path maps to a new untracked path that is the same logical file under the new structure.
- Include both:
  - moves into content pages structure
  - moves into static public structure
- If one old path now exists in two new locations, treat this as relocation context and keep it in this commit.

Execution rules:
- Do not stage truly new files with no deleted predecessor.
- Do not stage modified tracked files.
- Show staged name-status before commit.
- Commit with message: refactor(content): move existing site content into Astro content and public paths
- Stop after committing and show git status summary.
