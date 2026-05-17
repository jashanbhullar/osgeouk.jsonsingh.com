Create an atomic commit for newly created files only.

Scope:
- Stage only untracked files that are genuinely new and not moved from deleted paths.
- Exclude generated local cache artifacts that should remain untracked.

Execution rules:
- Do not stage modified tracked files.
- Do not stage moved files.
- Show staged name-status before commit.
- Commit with message: feat(site): add new project files and migration support artifacts
- Stop after committing and show git status summary.
