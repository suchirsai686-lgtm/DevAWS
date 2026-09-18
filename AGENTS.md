# AGENTS.md

## Project Overview

React + Vite + Tailwind CSS frontend for AWS Student Community Day — Tirupati 2026. Single-page event landing page with countdown, speakers, agenda, and registration.

## Tech Stack

- **React 19** (no TypeScript)
- **Vite 7** with React plugin
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin
- **lucide-react** for icons

## Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

No test, lint, or typecheck commands configured.

## Architecture

- `src/data/eventData.js` — Single source of truth for all event content. Edit this file to update event data.
- `src/components/` — Three reusable components: `Navbar`, `Countdown`, `Section`
- `src/App.jsx` — Main layout, imports all sections
- `src/styles.css` — Global styles with CSS custom properties (dark theme by default)

## Key Conventions

- **Section-based architecture**: Each page section is wrapped in `<Section>` component. Sections can be reordered independently by moving them in App.jsx.
- **No build/lint/test pipeline**: Code quality checks are not configured. Manual verification only.
- **CSS variables**: Theme colors defined as CSS custom properties in `:root`. Primary colors: `--navy` (background), `--orange` (accent).
- **Responsive**: Mobile-first design with breakpoints at 850px and 560px.
- **Event date**: Stored in `eventData.date` as ISO string with timezone offset.

## Content Updates

All placeholder content in `src/data/eventData.js` needs replacement before launch:
- Speaker names, roles, topics, and images
- Sponsor tiers and names
- FAQ answers
- Registration URL (currently points to #registration)
- Event date/time
- Venue details
- Team member info
- Gallery images

## Frontend Agent Skills (mimo v2.5)

### React Component Patterns
- **Section wrapper**: Use `<Section id="..." eyebrow="..." title="..." dark={false}>` to wrap page sections. Toggle dark mode with `dark` prop.
- **Data-driven rendering**: All dynamic content comes from `src/data/eventData.js`. Never hardcode event data in components.
- **Icon imports**: Use `lucide-react` icons. Import specific icons: `import { IconName } from "lucide-react"`.
- **State management**: Use `useState` for local UI state only (e.g., FAQ toggle, mobile menu). No global state needed.

### Tailwind CSS Workflow
- **Utility-first**: Use Tailwind classes directly in JSX. No CSS modules or styled-components.
- **Custom properties**: Theme colors available as CSS variables (`--navy`, `--orange`). Use `var(--name)` in arbitrary values: `bg-[var(--navy)]`.
- **Responsive**: Design mobile-first. Breakpoints: `@media (max-width: 560px)` and `@media (max-width: 850px)`.

### Build & Verification
- **No lint/typecheck**: Run `npm run build` to verify syntax and imports.
- **Dev server**: Run `npm run dev` and test changes at `http://localhost:5173`.
- **Hot reload**: Vite provides instant HMR. Edit files and refresh browser.

### Common Tasks
- **Add speaker**: Edit `eventData.speakers` array in `src/data/eventData.js`.
- **Add FAQ**: Edit `eventData.faqs` array (format: `["Question", "Answer"]`).
- **Reorder sections**: Move `<Section>` blocks in `src/App.jsx`.
- **Change theme**: Modify CSS variables in `src/styles.css` `:root`.

## Backend Agent Notes

This is a **frontend-only** repository. There is no backend, API, or database.

- Registration links point to external ticketing (KonfHub) — do not add backend logic.
- All data is static and embedded in `eventData.js`.
- If backend is needed later, create a separate service/repository.

## Git

- Remote: `https://github.com/suchirsai686-lgtm/DevAWS.git`
- Branch: `main`
