# `src/app/lib`

Recovered for the SPFx handoff. The root `.gitignore` previously ignored any path named `lib` (SPFx emit folder), which dropped this tree from git when the frontend was copied.

Webpack resolves `@/*` → `lib/app/*` (compiled). TypeScript resolves `@/*` → `src/app/*`.
