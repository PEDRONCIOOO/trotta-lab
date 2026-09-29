# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project Overview

Landing page for **Trotta** — a Brazilian software boutique + AI-first lab (staff augmentation,
product build, technical audits, contract-to-hire, and the Lab offers: Discovery, MVP Build,
Rebuild, Evolution, Strategic Partnership). Next.js 14 (App Router), TypeScript, SASS.
Visual system mirrors the Code Miner reference structure in a black/white palette.

Reference static prototype: `landing/index.html` (kept for comparison; not served).

## Commands

- `npm run dev` — dev server
- `npm run build` / `npm run start`
- `npm run lint` — Next lint
- `npm run format` — Biome format

## Architecture (same rules as the portfolio repo)

- **Content lives in `src/app/resources/`** — `config.ts` (site-wide settings: baseURL, routes,
  display toggles, contact endpoint, social) and `content.tsx` (every string/section on the page).
  Components never hardcode copy; edit content here. Barrel: `resources/index.ts`.
- **Design system in `src/ui/`** (replaces Once UI):
  - `tokens/tokens.scss` — CSS custom properties (ink scale, semantic colors, type scale, cut, motion).
  - `styles/_mixins.scss` — breakpoints + `display()/heading()/paragraph()/cut()/card` mixins.
  - `styles/global.scss` — reset, base typography, global utilities (`.cut`, `.card`, `.cave`,
    `.on-dark`, `.link-underline`).
  - `components/` — primitives: `Button`, `Chip`, `Container`, `Section`, `SectionHead`/`Eyebrow`,
    `Peak`, `Reveal`. Import from `@/ui/components`.
- **Page sections in `src/components/home/`**, one folder-level component + co-located
  `*.module.scss` each. `src/components/Header.tsx` / `Footer.tsx` are global chrome.
- **Routes** (App Router): `/` (landing), `/servicos` (expanded services, modelled on the
  reference's /services page: PageHero → ServiceDetail blocks → Testimonials → Industries → Contact)
  and `/sobre` (modelled on /about: PageHero → Mission → Journey → Team → Impact → Community;
  sections with empty arrays in `aboutPage` render nothing). Legal: `/privacidade` and `/cookies`
  render `legal.*` from content via `components/legal/LegalDocument`.
- **Cookie consent**: `components/consent/CookieConsent` (mounted in `layout.tsx`) shows only when
  the first-party cookie `trotta_consent` (name/TTL in `config.ts` → `consent`) is absent; choice is
  `accepted|rejected` for 180 days. `lib/consent.ts` exposes `getConsent/setConsent/clearConsent/
  analyticsAllowed` — gate any analytics script on `analyticsAllowed()`. `ManageCookies` (footer)
  clears the cookie to reopen the banner.
  Register every route in `config.ts` `routes` (feeds the sitemap). Nav/footer links are absolute
  (`/#lab`, `/servicos`) so they work from any route. Page-specific components live in
  `src/components/<route>/` (e.g. `services/`); shared page primitives in `src/ui/components`
  (`PageHero` for centered internal-page heroes).
- **Section order is defined in `src/app/page.tsx`** and must follow the reference model:
  hero → trust strip → services → lab → process → offers → testimonials → expertise → about →
  projects → contact. Add new sections as a component in `home/` + content block in `content.tsx`.
- **Hero 3D**: `components/home/scene/` — `network.ts` (layout of hub/tiles/tube curves, icon
  paths, canvas textures), `HeroScene.tsx` (react-three-fiber scene: keycaps, tubes, pulses, float,
  lights, contact shadows), `HeroSceneLoader.tsx` (`dynamic(ssr:false)`, SVG `HeroArt` as fallback).
  `display.hero3d` in `config.ts` switches back to the static SVG. Keep three/r3f/drei versions
  pinned to React 18-compatible majors (r3f 8, drei 9).
- **Contact form → e-mail**: `Contact.tsx` POSTs JSON to `contact.endpoint` (`/api/contact`).
  `src/app/api/contact/route.ts` validates (`lib/contact-email.ts`), drops honeypot (`website`) hits,
  rate-limits 5/10min per IP, and sends via Resend HTTP API with `reply_to` = visitor. Env:
  `RESEND_API_KEY` (required), `CONTACT_TO`, `CONTACT_FROM` — see `.env.example`.
- Fonts via `next/font/google` in `layout.tsx` (Geologica, Source Serif 4, JetBrains Mono) exposed
  as `--font-geologica`, `--font-source-serif`, `--font-jetbrains`.

## Styling rules

- Use tokens (`var(--ink-*)`, `var(--p-*)`, mixins) — no hardcoded colors/sizes in modules.
- Dark sections: `<Section tone="dark|cave|dark-soft">` adds `.on-dark`; buttons/eyebrows invert
  automatically. Use `peak` for the mountain divider into a light section.
- Signature shape is the bevelled chamfer `.cut` (`corner-shape: bevel`, radius `0 X 0 X`).
- Client components only where needed (Header menu, Testimonials rail, Contact form, Reveal).

## Code Formatting

Biome: 2-space indent, double quotes, 100 char line width. Path alias `@/*` → `./src/*`.
