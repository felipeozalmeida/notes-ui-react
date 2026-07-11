# Notes UI React

A local-first notes manager that demonstrates essential React concepts and
patterns. This project showcases how state persistence, form handling, and
runtime validation work together to build an interactive note-taking app.

**Live demo:** https://felipeozalmeida.github.io/notes-ui-react/

## What You'll Find Here

This notes UI implementation covers these key concepts:

1. **TypeScript** - Strict typing across components, constants, and schemas
2. **Component Composition** - Reusable form inputs (text, textarea, select) and presentational components (note card, note list)
3. **Props & State** - Managing the notes collection and form state
4. **Events** - Handling note creation, deletion, and copy-to-clipboard actions
5. **Lists & Keys** - Rendering a dynamic collection of notes
6. **Conditional Rendering** - Toggling between the notes list and the create-note form
7. **Effects** - Persisting notes to `localStorage` on every change
8. **Runtime Validation** - Zod schemas that validate form input and safely rehydrate `localStorage` data
9. **Styling** - Tailwind CSS v4 utility-first styling with conditional classnames via `clsx`
10. **Accessibility (a11y)** - `useId()` for label/input association across form fields
11. **Tooling & Conventions** - ESLint, Stylelint, Prettier (with `prettier-plugin-tailwindcss` for class sorting), Husky, lint-staged, and Conventional Commits
12. **Deployment** - Continuous deployment to GitHub Pages via GitHub Actions

## Getting Started

First, make sure you have a suitable Node.js version installed. For reference,
this project was developed with:

1. node v22.14.0
2. npm v10.9.2

Install dependencies with your favorite package manager. Assuming it's npm:

```sh
npm install
```

Then you're ready to go with:

```sh
npm run dev
```

To create a production build, run `npm run build` (this also runs
type-checking, linting, and formatting checks).
