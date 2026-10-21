# Content improvement plan and implementation log

Updated 20 October 2026. Improve an existing useful page before considering a new route. Keep the Neo-Glass visuals, existing project statuses and original portfolio images. Any stronger feature, ownership, schedule, location or commercial claim needs evidence or owner confirmation.

## Completed in this focused stage

| Existing route | Change | Why |
|---|---|---|
| All five `/services/[slug]` pages | Added a currency-aware, service-and-package-prefilled WhatsApp draft CTA after the FAQs; retained the detailed brief form as an alternative. Added a contextual link to the full pricing page. | A buyer can move from an answer and package to an actual inquiry with fewer steps, while seeing scope exclusions. The WhatsApp draft still requires the visitor to press Send. |
| `/services/web-development` | Clarified that a simple click-to-chat link differs from a form, booking flow, WhatsApp Business API or automated lead system. | The sampled PK SERP mixes these offers. The page should not imply the starting package includes integrations it does not include. |

The earlier released sprint already improved the homepage, five service pages, pricing and three case studies. See `06-growth-report.md`. No new guide, location page, client claim, image or backlink has been published in this stage.

## Next page decisions

| Priority | Page | Evidence to add only when verified | Owner input / gate |
|---|---|---|---|
| High | `/services/web-development` and `/pricing` | One real example of a 5-page deliverable, written scope, revision rule, support boundary, and an actual click-to-chat walkthrough. | Confirm package terms and what is genuinely included. |
| High | `/work/freelancerflow` and application service | Screens or a walkthrough of authenticated features only if the owner can demonstrate them. Current mockups remain labeled as mockups; public demo shows sign-in. | Confirm login-safe features and source rights; never invent a data model or production usage. |
| Medium | `/work/cineverse` | Specific screen-by-screen explanation of the existing demo's search, collection and Firebase behavior. | Owner feature confirmation and current demo test. |
| Medium | `/work/pure-roots` and graphic-design service | The owned standee or stationery assets only after embedded phone, address, product and invoice claims are reviewed. | The supplied mockups include unverified product claims and contact details; do not publish them as operational facts. |
| Medium | `/work/next-studio-identity` | A short visual rationale for the approved logo, banner and website identity. | Confirm approved logo variant and rights. |
| Medium | `/services/seo` and `/services/geo-aio` | A sample **method** or anonymized audit checklist that accurately shows scope. | No fabricated client results or AI citation promises. |
| Later | One Pakistan website-cost resource | Scope comparison using NEXT Studio's actual packages, hosting/domain exclusions and quote process; contextual links to web development and pricing. | Review `drafts/website-cost.md` with the owner. Publish only after factual approval. |

## Quality gate for each future resource

Answer a real buyer question with original experience; include a relevant current project or clear process example; identify assumptions and exclusions; link to the existing service and one case study when relevant; verify title, one H1, description, canonical, server HTML, mobile layout and image rights. One substantial page can be more useful than many keyword variants. No country-swapped doorway pages, unsupported Arabic/RTL promises, or city-office claims.

## Local verification completed

`npm run lint`, `npm run typecheck` and `npm run build` passed with Next.js 16.4.2. Local `verify-seo.mjs` passed 19 sitemap routes and five mobile overflow checks; `verify-links.mjs` found 19 routes, no broken links/images and no page errors. `verify-redesign.mjs` passed 14 sampled routes with no page errors or automated axe WCAG 2 A/AA violations, and its pricing, contact draft and mobile-menu interactions passed. A targeted 390/1440 px check found the new service WhatsApp CTA visible, service/package-prefilled, updated from USD to PKR with the currency switch and free of horizontal overflow. Automated accessibility checks are not a full audit; Core Web Vitals field data and physical-device testing remain unavailable.

Release status is recorded separately after the exact production deployment and live HTTP and form/WhatsApp checks are confirmed. Local validation alone does not establish that these changes are live.
