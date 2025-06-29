# Gemini Guidelines

This document provides guidelines for Gemini to follow when working on this project.

## Project Overview

This is a personal website built with SvelteKit, TypeScript, and Tailwind CSS. It uses Storybook for component development and inlang/paraglide for internationalization.

## Key Technologies

- **Framework:** SvelteKit
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint
- **Formatting:** Prettier
- **Package Manager:** bun
- **Component Development:** Storybook
- **Internationalization:** inlang/paraglide

## Development Workflow

- **Install dependencies:** `bun install`
- **Run the development server:** `bun run dev`
- **Build the project:** `bun run build`
- **Run Storybook:** `bun run storybook`

## Coding Style & Conventions

- **Formatting:** This project uses Prettier for code formatting. Before committing, run `bun run format` to format the code. The configuration is in `.prettierrc`.
- **Linting:** This project uses ESLint for code linting. Before committing, run `bun run lint` to check for linting errors. The configuration is in `eslint.config.js`.
- **Component Structure:** New components should be created in `src/components` and be self-contained. Components should be written in Svelte.
- **Styling:** This project uses Tailwind CSS for styling. New styles should be added using utility classes in the Svelte components.
- **Internationalization:** This project uses inlang/paraglide for internationalization. Text should be added to `messages/en.json` and `messages/sv.json` and accessed through paraglide.
- **Typescript:** This project uses Typescript. Make sure to add types to all new code.

## Testing

- **Component Testing:** This project uses Storybook for component testing. New components should have corresponding stories in the `src/stories` directory.
- **Type Checking:** This project uses `svelte-check` for type checking. Run `bun run check` to check for type errors.

## Committing

Before committing, please ensure that you have:

1.  Formatted the code with `bun run format`.
2.  Linted the code with `bun run lint`.
3.  Checked for type errors with `bun run check`.
