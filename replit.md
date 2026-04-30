# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## GR Tiling Site (`artifacts/gr-tiling`)

- React + Vite + Wouter v3 + shadcn/ui + Tailwind CSS v4 + Poppins
- Brown/white design system, minimal/personal trust-focused content (Dublin bathroom renovations)
- All image paths are centralized in `src/data/images.ts` — no hardcoded `/images/` paths in page files
  - The `@assets` alias (→ workspace root `attached_assets/`) is used only inside `images.ts` for the tiling page hero
  - Public images live in `public/images/` (all `.png`)
- Phone: +353 87 720 9850 | Google Reviews: https://maps.app.goo.gl/zXMYDcdtwATJcR9AA
- Forms submit to `/thank-you` route
- `pb-20 md:pb-0` on `<main>` elements = mobile bottom nav accommodation — do not remove
