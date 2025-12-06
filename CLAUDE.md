# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Echolia Landing is a static landing page and blog for Echolia, designed as a dark, analog sci-fi "mind-room" for unfinished thoughts. Built with Astro for optimal SEO and fast static output.

## Development Commands

```bash
# Install dependencies (pnpm preferred)
pnpm install

# Development server (runs on port 4321)
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm check
```

## Architecture

### Tech Stack
- **Framework**: Astro (static site generation, no SSR)
- **Styling**: Tailwind CSS with CSS custom properties
- **Content**: Astro content collections for blog posts
- **Client JS**: Minimal by design, only when necessary

### Design Philosophy
- **Dark mind-room aesthetic**: Deep charcoal backgrounds (#070A0D), soft gradients, subtle film grain overlay
- **Analog sci-fi**: Low-intensity neon (echo-blue #6FA8FF, cyan #4CD7D0), retro-console vibes
- **Motion**: Subtle drift animations (small translate/opacity/glow), never bouncy or springy
- **Copy tone**: Calm, mysterious, poetic - not corporate

### TypeScript Paths
Configured in tsconfig.json:
- `@layouts/*` -> `src/layouts/*`
- `@styles/*` -> `src/styles/*`
- `@content/*` -> `src/content/*`

### Styling System

Design tokens are defined in `src/styles/tokens.css` and exposed to Tailwind via CSS variables:

**Colors:**
- `bg-deep`, `bg-surface`, `bg-alt` - Background layers
- `text-main`, `text-muted` - Text colors
- `accent-echo` (#6FA8FF), `accent-warm` (#FF8C42), `accent-cyan` (#4CD7D0)
- `tag-*` variants for chip components

**Utility classes:**
- `.thought-card` + `.thought-card-hover` - Card/capsule components
- `.tag-chip` + `.tag-chip-active` - Tag/chip elements
- `.fab-ghost` - Subtle CTA buttons
- `.noise-layer` - Fixed film grain overlay

**Custom Tailwind extensions:**
- `rounded-thought` (18px) - Standard border radius
- `shadow-thought` - Card shadow
- `animate-echo-pulse` - Pulsing glow animation

When adding new colors or spacing, extend tokens in `tokens.css` rather than using hard-coded values.

### Content Collections

Blog posts live in `src/content/blog/*.md` with schema defined in `src/content/config.ts`:

```typescript
{
  title: string
  description?: string
  pubDate: date
  updatedDate?: date
  tags: string[]
  draft: boolean  // drafts excluded from public listing
}
```

### Layout Structure

**Routes:**
- `/` - "Run stream" homepage with vertical thought-capsule list and pinned downloads sidebar
- `/blog` - Blog index listing posts as thought-capsules
- `/blog/[slug]` - Individual blog posts

**Base Layout** (`src/layouts/Base.astro`):
- Accepts `title` and `description` props for SEO
- Includes comprehensive meta tags (OG, Twitter, Schema.org)
- Fixed header with navigation, slot for main content, footer
- Film grain overlay via `.noise-layer`

### Homepage Pattern

The homepage follows a "run stream" pattern inspired by psyche.network/runs:
- Left column: Vertical stream of runs (releases, logs, blog entries) as thought-capsules
- Right sidebar (desktop): Pinned downloads panel with OS cards (Windows, macOS, Linux, Mobile)
- Download links currently use placeholder `href="#"` - replace with actual URLs when available

## Implementation Guidelines

- **Never introduce Next.js** or other heavy frameworks
- Prefer Astro components + Tailwind over custom JS
- Keep layouts closer to run-stream + pinned-panel rather than standard SaaS hero/feature grids
- Use existing utility classes rather than creating new ones
- Motion should be subtle drift, not springy or bouncy
- Maintain good SEO: accurate `title`/`description` in Base.astro and blog frontmatter

### Future Interactive Elements
If adding interactive components (overlays, drawers, command palette):
- Implement as small React islands
- Consider Radix UI primitives for accessibility
- Keep bundle size minimal, no full SPA behavior

## Site Configuration

Site URL is configured in `astro.config.mjs` as `https://echolia.com`. Update this if deploying to a different domain.
