# NEXT Studio

NEXT Studio's Next.js / React / TypeScript website. This repository contains the site code and the optimized images it serves.

## Run

```sh
npm ci
npm run dev -- --port 3001
```

Production preview: `npm run build` then `npm run start -- --port 3002`.

## Verify

Run `npm run lint`, `npm run typecheck`, and `npm run build`.

With the development server on port 3001, run `node scripts/verify-redesign.mjs`.
With the production server on port 3002, run `node scripts/verify-links.mjs`.
These browser checks use installed Google Chrome and write local results to ignored `artifacts/`.

## Content and deployment

Prices and project records live in `src/data/site.ts`. The inquiry form prepares a WhatsApp draft; it does not store or send submissions itself. Payments are arranged privately after quotation.

Set `NEXT_PUBLIC_SITE_URL` to a verified HTTPS production origin before rebuilding for launch. The default is intentionally noindex. Review legal/business details before publishing.

The supplied full-resolution artwork stays in the owner's Portfolio assets folder and Downloads. This repository includes only the optimized assets used by the site. The Pure Roots and New Year graphics are labeled as concept or educational work; small text within those flattened source images has not been fully repaired.

## GitHub

The `main` branch is connected to [UzairUmair/NEXT-Studio-Site](https://github.com/UzairUmair/NEXT-Studio-Site). Future changes can be uploaded with `git push`. `node_modules/`, `.next/`, local environment files, and test output are ignored. Configure environment variables in the hosting provider rather than committing secrets.
