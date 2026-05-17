Create an atomic commit for changed existing files only.

Scope:
- Stage only tracked files in modified state.
- No new files and no deletions in this commit.

Execution rules:
- Show staged name-status before commit.
- Commit with message: chore(site): apply targeted updates to existing tracked files
- Stop after committing and show final git status summary.
