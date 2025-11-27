# Echolia Landing / Blog — AGENTS Notes

This file is for SWE agents working on the `echolia-landing` project.

## Goal

- Provide a small, fast **static landing + blog** for Echolia.
- Focus on **download funnels** (Windows, macOS, Linux, mobile) and a **run-style blog** that reflects the product’s “mind-room” vibe.
- Strong **SEO** and clean HTML output. No Next.js.

## Tech Stack

- **Framework:** Astro (static output, no SSR needed).
- **Styling:** Tailwind CSS + Radix for components + custom tokens in plain CSS.
- **Content:** Astro content collections + Markdown files for blog posts.
- **JS Islands:** Only when necessary (e.g., for future Radix UI overlays); default to minimal/no client JS.

## Visual / Design Philosophy

High-level direction (summarized from the Echolia design spec):

- **Dark mind-room:** deep charcoal backgrounds, soft gradients, subtle film grain (noise texture).
- **Analog sci-fi:** low-intensity neon (echo-blue, cyan), soft noise, retro-console vibes.
- **Content first:** minimal chrome, cards as “thought capsules” in a vertical stream (not a standard marketing hero grid).
- **Soft components:** rounded capsules, faint shadows, drifting motion (small translate/opacity hovers, no bouncy animations).
- **Poetic copy:** prompts and headlines should feel calm and mysterious, not corporate.

Design tokens live in `src/styles/tokens.css` and are exposed to Tailwind as CSS variables (see `tailwind.config.cjs`).

## Layout + Structure

Key routes:

- `/` — **Run Stream** style homepage:
  - Vertical list of “runs” (release logs, design notes, blog entries) as thought-capsules.
  - **Pinned downloads rail** on the right (desktop) with OS cards for Windows, macOS, Linux, and Mobile.
- `/blog` — Blog index:
  - Lists posts as thought-capsules (title, description, date, tags).
- `/blog/[slug]` — Blog post:
  - Focused, centered column; dark prose; cyan-accented code/AI-style blocks.

Content model:

- Blog posts are in `src/content/blog/*.md` and configured in `src/content/config.ts`.
- Each post frontmatter:
  - `title: string`
  - `description?: string`
  - `pubDate: date`
  - `updatedDate?: date`
  - `tags: string[]`
  - `draft: boolean` (drafts are not built into public listing).

## How to Run / Build

From repository root:

```bash
cd echolia-landing

# install deps (pick one)
pnpm install   # preferred if pnpm is used in monorepo
# or
npm install

# dev server
pnpm dev       # or: npm run dev

# production build
pnpm build     # or: npm run build

# preview built site
pnpm preview   # or: npm run preview
```

Astro config is in `astro.config.mjs`. The `site` field should match the deployed domain.

## Implementation Guidelines

- **Do not introduce Next.js** or other heavy frameworks for this project.
- Prefer **Astro components + Tailwind** over custom JS when possible.
- Keep layout closer to **psyche.network/runs** (run stream + pinned panel) rather than a standard SaaS hero/feature grid.
- Use existing utility classes:
  - `thought-card`, `thought-card-hover` for capsules.
  - `tag-chip` and `tag-chip-active` for chips.
  - `fab-ghost` for subtle CTA buttons.
- When adding new colors or spacing, prefer extending **tokens** in `tokens.css` and referencing via Tailwind rather than hard-coded hex values.
- Motion should be **subtle drift** (small translate / opacity / glow), not springy or bouncy.
- Maintain **good SEO**:
  - Set sensible `title` and `description` props when using `Base.astro`.
  - For blog posts, keep frontmatter descriptions accurate and concise.

## Download Links

- OS download cards live in `src/pages/index.astro` in the pinned downloads `<aside>` with placeholder `href="#"` values.
- When real URLs exist (Windows `.exe`, macOS `.dmg`, Linux AppImage/.deb, mobile store links), replace those hrefs accordingly.

## Future Extensions

- If you add interactive elements (overlays, drawers, command palette), consider:
  - Implementing them as small React islands.
  - Using Radix UI primitives for accessibility.
  - Keeping bundle size small and scope focused (no full SPA behavior).

