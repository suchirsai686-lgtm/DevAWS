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

## Git

- Remote: `https://github.com/suchirsai686-lgtm/DevAWS.git`
- Branch: `main`
