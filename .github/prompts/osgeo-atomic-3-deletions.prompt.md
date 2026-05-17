Create an atomic commit for deletions only.

Scope:
- Stage only remaining tracked deletions that are not part of moved-file context.
- This should capture legacy files removed outright.

Execution rules:
- Do not stage additions or modifications.
- Show staged name-status before commit.
- Commit with message: chore(cleanup): remove legacy Jekyll-only files no longer needed
- Stop after committing and show git status summary.
