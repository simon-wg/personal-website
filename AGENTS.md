# AGENTS.md

## Build, Lint, and Test Commands

- **Note:** This project uses Bun, not npm.
- **Dev server:** `bun run dev`
- **Build:** `bun run build`
- **Preview:** `bun run preview`
- **Lint:** `bun run lint` (Prettier + ESLint)
- **Format:** `bun run format`
- **Typecheck:** `bun run check`
- **Storybook:** `bun run storybook`
- **Build Storybook:** `bun run build-storybook`
- **Single test:** (No test script found; add if needed)

## Code Style Guidelines

- **Formatting:** Prettier enforced, tabs for indentation, single quotes, trailing commas off, print width 100.
- **Imports:** Use ES modules, absolute imports via `$lib` alias for shared code.
- **Types:** TypeScript strict mode, always type props and function signatures.
- **Naming:** camelCase for variables/functions, PascalCase for components.
- **Svelte:** Use `<script lang="ts">`, props via `$props<T>()`.
- **Error Handling:** Prefer explicit error handling, avoid `no-undef` rule for TS.
- **Linting:** ESLint with recommended, Svelte, Storybook, and Prettier configs.
- **CSS:** TailwindCSS for utility classes.
- **Other:** Follow SvelteKit and Storybook best practices.
