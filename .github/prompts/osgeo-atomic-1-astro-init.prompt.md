Create an atomic commit for Astro baseline initialization only.

Scope:
- Include only framework bootstrap and required baseline files for Astro to run.
- Include the ignore-rule update needed to keep generated local build cache out of git.
- Do not include migrated content, moved content, workflow tweaks, docs migration notes, or custom scripts.

Execution rules:
- Stage only files in this baseline context.
- Show staged files with name-status before commit.
- Commit with message: chore(astro): initialize Astro scaffold and baseline configuration
- Stop after committing and show git status summary.
