# Koru Restaurant — Lahore

Mediterranean flavours and sushi in Gulberg II. Next.js App Router + TypeScript + Tailwind.

## Run locally

```bash
cd ~/koru-restaurant
npm install
npm run dev      # http://localhost:3000
npm run typecheck
npm run lint
npm run build && npm start
```

## What was built (§0 acceptance)

- **Cinematic hero:** 4 local photographic layers (sushi → steak → room → salmon),
  continuous 40s crossfade + independent slow drift, transform/opacity only,
  `prefers-reduced-motion` static fallback, first paint has imagery.
- **Menu:** 9 categories + 17 dishes with search/filter, empty state, data-driven
  (`lib/site.ts`); dish names from third-party menus, each “owner confirmation
  required”; no prices published.
- **Gallery:** mosaic + accessible lightbox (Escape/arrows/focus/scroll-lock).
- **Enquiries:** table dialog + event form → encoded `wa.me/923271116666` handoff;
  `tel:+923271116666`; nothing auto-books.
- **Visit:** verified address + directions link; hours withheld until confirmed.
- No fake reviews/ratings/awards/press/chef claims.

## Owner confirmation checklist

Address pin precision · hours · prices · current dishes/availability/ingredients/allergens ·
event rooms/packages/capacity · real photography/logo · Instagram/Facebook URL ownership.

## Sources

See `content-sources.md` and `public/images/ASSET-SOURCES.md`.
