# Kimba African Journeys

Boutique marketing site for **Kimba African Journeys** — curated Southern Africa travel, planned from McGregor in the Western Cape. Guided small groups and self-drive, in English and German.

This is a relaunch site. It keeps the real company facts and ignores the gambling spam that currently sits on the old public domain.

## Pages

- `/` — Home
- `/journeys` — Five itineraries
- `/journeys/[slug]` — Itinerary detail
- `/destinations` — Karoo & Cape, Namibia, Zambezi / Victoria Falls, Botswana & beyond
- `/about` — Story and the four brand ideas (Africa, the road, the acacia, the sun)
- `/enquire` — Client-side enquiry form with a `mailto:` fallback (`/contact` redirects here)

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on [http://127.0.0.1:43147](http://127.0.0.1:43147).

## Production build & preview

```bash
npm run build
npm run preview
```

`preview` is an alias for `next start` on the same port.

## Stack

Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui primitives.

## Contact (as published)

- Voortrekker Road Ext, McGregor, 6708, Western Cape, South Africa
- info@kimbajourneys.com
- +27 21 433 2547
