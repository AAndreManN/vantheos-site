# Content-Structure Refactor File Map

This file is the control document for the content-structure refactor, so old and new files do not get mixed during migration.

## 1. KEEP AS-IS

- `main.tsx`
- `App.tsx` (keep file; only wiring updates later)
- `components/layout/Layout.tsx`
- `components/layout/Navbar.tsx` (structure stays)
- `components/layout/Footer.tsx` (structure stays)
- `hooks/use-scroll-animation.tsx`
- `components/ui/animated-section.tsx`
- `lib/utils.ts`
- `index.css`
- `assets/vantheos-logo.png`

## 2. MOVE / REORGANIZE

- `components/home/Hero.tsx` -> `components/sections/home/Hero.tsx`
- `components/home/ServicesOverview.tsx` -> `components/sections/home/ServicesOverview.tsx`
- `components/home/Benefits.tsx` -> `components/sections/home/Benefits.tsx`
- `components/home/CTA.tsx` -> `components/sections/shared/CTA.tsx` (or keep under `home` if home-only)
- `components/home/index.ts` -> new barrel(s) under `components/sections/...`
- Add new content and media folders:
  - `content/site/`
  - `content/pages/`
  - `media/images/`
  - `media/audio/`
  - `media/video/`

## 3. REWRITE IN PLACE

- `pages/Index.tsx` (thin page wrapper + content import)
- `pages/Services.tsx` (read from `content/pages/services`)
- `pages/About.tsx` (read from `content/pages/about`)
- `pages/Contact.tsx` (read from `content/pages/contact`)
- `pages/PrivacyPolicy.tsx` (read from `content/pages/privacy-policy`)
- `pages/TermsOfService.tsx` (read from `content/pages/terms`)
- `App.tsx` (route import/path updates only)
- `components/layout/Navbar.tsx` and `components/layout/Footer.tsx` (consume `content/site`)

## 4. DELETE AFTER REPLACEMENT

- Inline content constants once extracted (services, values, benefits, contact options, repeated CTA text/URLs)
- Old `components/home/*` paths after imports are fully migrated
- Old `components/home/index.ts` after new barrels are active
- `App.css` if confirmed unused after refactor
- `components/NavLink.tsx` if still unused after refactor

## 5. Source-of-truth rules

- Global site data lives only in `content/site/*` (nav, footer, core links, CTAs, contact links).
- Page copy/data lives only in `content/pages/<page>.ts`.
- Sections/components are presentation-only (no long hard-coded business copy).
- Media metadata lives in `content/pages/*`; media files live in `media/*`.
- `pages/*` files are route composition only (assemble sections + content objects).
