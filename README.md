# Birria Barrio: Landing Page Prototype

A demo site for Birria Barrio, a San Antonio birria spot that started as a food truck on South
Presa and now runs three kitchens. It is built as a client prototype and is not the official
website; banners at the top and bottom of the page say so. It is unlisted (`noindex`) and meant
to be shared only with Birria Barrio.

Live demo: https://sarmadrehan.github.io/birria-barrio/

## Main feature: Order for pickup

Every "Order for pickup" button (header, hero, mobile bar) opens one shared "Coming soon" panel
(`src/components/OrderDialog.tsx`). It says honestly that pickup ordering on the site isn't live yet,
and offers a call button plus their existing app storefronts: DoorDash (their DoorDash-powered
`order.online` store for S Flores) and Uber Eats (S Alamo).

## Stack

- Next.js 15 (App Router) with static export (`output: "export"`)
- TypeScript (strict) and Tailwind CSS v4
- Fonts via `next/font`: UnifrakturMaguntia (the blackletter wordmark), Anton (chunky display
  caps, like their flyers), Archivo (body)
- Hosted on GitHub Pages from the `gh-pages` branch

## Project layout

```
src/
  app/            layout, page, global styles (palette, checkered paper, tricolor rule), icon
  assets/images/  photos from their own posts, imported statically
  components/     one component per page section, plus the wordmark and the order panel
  data/           birria.ts: contact details, locations and hours, menu, story, app links
```

All business content lives in `src/data/birria.ts`, with the source of each fact noted beside it.

## Content sources

Facts come from the verified table in the demo brief (checked 2026-10-23):

| Fact | Source |
| --- | --- |
| Owners Martin Bargas and Sabrina Perez; started as a food truck on South Presa in 2020, then moved into restaurants | KSAT 2021-09-14, MySA 2023-12-01, CultureMap 2025-06-17 |
| 1203 S Alamo St (Southtown, opened June 2025): Wed–Sun 2pm–12am | Google Maps |
| Birria Barrio y Más, 6203 S Flores St: Wed–Thu and Sun 2pm–12am, Fri–Sat 2pm–2am | Google Maps |
| 2403 Pinn Rd (opened May 2025): Wed–Sun 3pm–11:30pm | Google Maps |
| All three closed Monday and Tuesday; one phone, (210) 289-4066 | Google Maps |
| Dine-in, takeout, delivery (DoorDash, Uber Eats) | Google Maps, DoorDash, Uber Eats |
| Menu items | Google menu highlights, SA Current |
| Facebook 28K followers; Instagram @birriabarrio 6.8K followers | Facebook, Instagram |

- **Menu descriptions**: their own DoorDash-powered `order.online` menu for the S Flores location
  (read 2026-10-23), lightly trimmed, prices left off. No source describes the birria bowl, so its
  card says to ask at the counter.
- **"Launched at the S Flores location"**: their Instagram posts for the egg rolls (Dec 4, 2024)
  and the Hot Cheeto birria balls (May 1, 2024).
- **2710 S Presa St** is left out: Yelp still lists it, but Google Maps and their Facebook page
  don't.
- **Photos** (`src/assets/images/`): only from Birria Barrio's own Instagram and Facebook posts, no
  customer photos, captured for the demo. Swap in originals from the restaurant before any real
  launch.
- **Brand colors**: sampled from the wordmark in their own posts: green `#006838`, red `#F80000` and
  white on black, plus tints of them (`src/app/globals.css`). There is no published logo file, so
  the wordmark is typeset in a blackletter font in the same colors (`src/components/Wordmark.tsx`).

No prices, star ratings, review quotes or testimonials are shown.

## Development

```bash
npm ci
npm run dev       # http://localhost:3000
npm run lint
npm run build     # static site in ./out
npm run preview   # serve ./out locally
```

## Deployment (GitHub Pages)

```bash
npm run deploy
```

This builds with `NEXT_PUBLIC_BASE_PATH=/birria-barrio` (the Pages project path), adds `.nojekyll`
so the `_next/` folder is served, and pushes `./out` to the `gh-pages` branch. If the repository is
renamed, update the base path in the `deploy` script.

## Notes

- The brand green is used for fills with white text; small green and red text on black uses
  lighter tints of them to meet WCAG AA contrast.
- The page is marked `noindex` so the demo never competes with the restaurant's own listings.
