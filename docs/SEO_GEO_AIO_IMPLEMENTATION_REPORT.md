# NEXT Studio SEO, GEO and AIO implementation report

Implemented and locally validated on 20 October 2026. The initial production check below captured the old deployment shortly after the GitHub push. Vercel later deployed commit `0038264` to production and the live checks passed. See [the deployment verification report](PRODUCTION_DEPLOYMENT_VERIFICATION.md) for current evidence. No claim of indexing, ranking, account verification, AI citations or traffic improvement is made.

## What changed

- `src/lib/seo.tsx` centralizes the canonical origin, absolute URLs, page metadata, breadcrumb data and JSON-LD output.
- `src/app/layout.tsx` removes the accidental empty-environment noindex branch, adds indexable production defaults, brand social metadata, an Organization identity and an optional Google HTML meta verification token hook. Vercel preview builds receive `noindex` and a disallowing robots rule.
- `src/app/robots.ts` and `src/app/sitemap.ts` generate public crawl rules and all 19 real HTML routes, with project cover images. No fabricated pages or artificial last-modified dates were added.
- Static route pages now have unique descriptions, titles, self canonicals and OG/Twitter metadata. Dynamic service and work routes have intent-specific titles and descriptions.
- `src/data/seo-content.ts` and the detail templates add audience, process, exclusions, real examples, practical questions, project goals, scope, outcome and related links. Concept and personal status remain explicit. Visible breadcrumbs match the BreadcrumbList JSON-LD.
- Project images have descriptive alt text. The decorative hero sculpture has empty alt. One noncritical hero preview is no longer priority-loaded. A 51 KB header/footer copy of the original 275 KB logo was created at `public/brand/logo-web.webp`; the original remains. `public/og/next-studio.webp` is a 1200×630, 46 KB social asset derived from the owner's existing brand banner.
- `.env.example` documents `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. No token was invented. The existing Google verification file was neither edited nor interpreted as proof of current ownership.
- `scripts/verify-seo.mjs`, `scripts/audit-live.mjs` and `scripts/measure-vitals.mjs` provide repeatable crawl, metadata, sitemap, browser and limited performance checks.

## Before and after evidence

| Check | Observed live before | Final local production build | Production after deployment |
|---|---|---|---|
| HTML public routes | 19/19 returned 200 | 19/19 returned 200 | 19/19 returned 200 |
| Robots meta | 19/19 `noindex, nofollow` | 19/19 `index, follow` | 19/19 `index, follow` |
| Self canonical | 0/19 | 19/19 | 19/19 |
| `robots.txt` | 404 | 200, `text/plain`, sitemap link | 200, `text/plain`, sitemap link |
| `sitemap.xml` | 404 | 200, `application/xml`, 19 canonical routes | 200, `application/xml`, 19 canonical routes |
| JSON-LD | 0 pages | Organization on all; WebSite home; Service and BreadcrumbList on services; CreativeWork and BreadcrumbList on cases | Parseable on 19/19 pages |
| Internal link/image crawl | Existing navigation observed | 19 routes crawled, zero broken links/images, zero browser page errors | Browser functionality checked on key live routes; full internal link crawl was local |
| 404 behavior | Not fully audited | Unknown service and page return 404 | Unknown service returns 404 |

The raw before/after route summaries are in ignored local `artifacts/live-before-audit.json` and `artifacts/local-audit.json`. The 19-route metadata/JSON-LD result is in `artifacts/seo-verification.json`. Mobile screenshots cover home, a service, a case, pricing and contact; `artifacts/seo-home-desktop.png` captures the desktop home page. These local artifacts are evidence for this workspace, not published site assets.

## Validation run

- `npm run lint`: pass.
- `npm run build`: pass; Next.js generated 24 static outputs, including the 19 HTML routes, robots, sitemap and icon.
- `npm run typecheck`: pass when run after build. A simultaneous build/typecheck race briefly failed because Next.js replaced generated `.next/types` during typecheck; sequential rerun passed.
- `node scripts/verify-seo.mjs`: 19 sitemap routes passed status, unique H1 count, metadata, canonical, robots, OG and parseable JSON-LD checks; five mobile routes had no horizontal overflow.
- `node scripts/verify-links.mjs`: 19 routes, no broken links or images, no browser errors, no-JavaScript home content and 404 check passed.
- `scripts/verify-redesign.mjs` against the final production build: currency persistence, WhatsApp draft, contact validation, mobile menu, reduced motion, 14-route axe WCAG 2 A/AA scan; zero reported violations. This automated scan cannot certify full accessibility.
- Local and live Chrome PerformanceObserver samples for home, one service and CineVerse are in `artifacts/vitals-local.json` and `artifacts/vitals-live.json`. In an unthrottled run, local home LCP was 2,172 ms mobile / 324 ms desktop and CLS 0.001 / 0.002. The old live home sample was 2,032 ms mobile / 1,072 ms desktop, CLS 0.002 / 0.002. Different hosts, caching and run conditions make these **non-comparable** as an improvement claim. INP needs user interaction/field data. PageSpeed Insights API returned HTTP 429, so no Lighthouse score or Chrome UX Report verdict is claimed.
- JSON-LD was parsed in the local browser on all routes and inspected for expected types. External Google Rich Results Test and Schema Markup Validator must be run on deployed URLs.

## Production endpoints verified after deployment

- `https://nextstudio.us.ci/`
- `https://nextstudio.us.ci/robots.txt`
- `https://nextstudio.us.ci/sitemap.xml`
- `https://nextstudio.us.ci/services/web-development`
- `https://nextstudio.us.ci/services/application-development`
- `https://nextstudio.us.ci/services/graphic-design`
- `https://nextstudio.us.ci/services/seo`
- `https://nextstudio.us.ci/services/geo-aio`
- `https://nextstudio.us.ci/work/cineverse`
- `https://nextstudio.us.ci/work/freelancerflow`
- `https://nextstudio.us.ci/work/pure-roots`

`node scripts/audit-live.mjs https://nextstudio.us.ci` and the live `verify-seo.mjs` browser crawl passed on 20 October 2026. The latter checks canonical route paths against the sitemap; a separate comparison confirmed the full canonical origins. For external rich-result and page-speed tests, use the official tools linked in `docs/SEARCH_ENGINE_MANUAL_SETUP.md`.

## Known limits and owner action

- The production deployment and live HTTP responses were verified on 20 October 2026. Search engine crawling, indexing and ranking still require external confirmation.
- GSC connector access shows a property string but returned zero rows for 28-day Search Analytics and sitemaps. This does not establish index status or the method of verification. Bing, GA4, DNS and CDN control were not available.
- The public wildcard robots policy leaves the GPTBot training-crawler choice at the default. Confirm owner preference before adding an explicit bot-specific rule.
- The portfolio descriptions use only source data and supplied images. Review the flattened Pure Roots and New Year artwork for any embedded claim or attribution requiring owner correction. No new screenshots, unverifiable metrics, client claims or social profiles were created.
- No GA4 tracking code was added because no Measurement ID or privacy/consent decision was provided. No analytics events or unconfigured scripts burden page loading.
- The production custom domain and Vercel alias both have valid configuration. The alias serves content with canonicals pointing to the custom domain; a separate redirect was not configured.
- Review real-user Core Web Vitals and GSC indexing after search engines collect data. Suggested first content/technical review: 20 November 2026, contingent on data becoming available.

Google states that its AI search features use standard SEO foundations and have no extra AI-only markup requirement; eligible pages are not guaranteed to be crawled or shown. See [Google's AI features guidance](https://developers.google.com/search/docs/appearance/ai-features). OpenAI distinguishes [OAI-SearchBot from GPTBot and ChatGPT-User](https://developers.openai.com/api/docs/bots).
