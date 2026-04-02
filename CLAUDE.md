# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test runner is configured.

## Architecture

Band website for Sofa King Killer (heavy metal/sludge rock, Akron OH) built with **Next.js 16.2.1**, React 19, TypeScript (strict), and the **App Router** (`src/app/`).

**Path alias:** `@/*` maps to `src/*`

### Routing

All routes live under `src/app/` using the App Router file convention (`page.tsx`):
- `/` — Home (hero section)
- `/about`, `/contact`
- `/music/` — Albums index; each album has its own subdirectory (`stout-soaked-songs/`, `lust-crime-and-holiness/`, etc.)
- `/media/` — Index; subpages for `photos/`, `videos/`, `flyers/`

### Key Components

- **`src/components/nav/nav.tsx`** — Client component (`"use client"`). Responsive nav with desktop dropdowns and mobile hamburger. Uses `usePathname()` for active state.
- **`src/components/seo/seo.tsx`** — `generateSEO()` returns Next.js `Metadata` objects; `SEOJsonLd` renders JSON-LD structured data. Use these on every page.
- **`src/components/YouTubeGallery/`** — Client component. Grid of YouTube video cards with modal playback.

### Styling

- **CSS Modules** (`.module.css`) for page-level styles
- **Plain CSS** for component-scoped styles (e.g., `nav.css`)
- **CSS variables** defined in `globals.css` for theming (dark mode via `prefers-color-scheme`)
- Fonts loaded via Next.js font optimization (Special Elite, DM Mono, Playfair) and exposed as CSS variables

### Data

All content (track listings, album metadata, media URLs) is statically defined inline within page components. There is no database or external API.
