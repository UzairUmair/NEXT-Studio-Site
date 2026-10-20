# NEXT Studio Google growth baseline audit

Observed 20 October 2026 (Asia/Karachi). Scope: repository at `4632c63`, public `https://nextstudio.us.ci/`, local `portfolio assets/` source folder, and read-only Windsor.ai Search Console connection. This audit describes the **current production site** before the content changes in this sprint; local changes are tracked separately in `06-growth-report.md`.

## Technical and conversion findings

| Severity | Finding and evidence | Action |
|---|---|---|
| High | The homepage H1 says “Websites. Apps. Brands. Built for NEXT.” and the opening paragraph is aspirational. It does not identify the small-business or founder audience, a concrete deliverable, or the request path. Source: `src/components/hero-split.tsx`; live homepage. | Keep the visual H1 and add a concise, crawlable buyer statement beside the existing CTAs. |
| High | The website and application service pages explain process but answer only two buyer questions each. Their proof is a linked project title, while the question of what the projects actually demonstrate is left to the case studies. Source: `src/data/seo-content.ts`, service route template. | Add specific scoping, client-input and handoff answers plus clear project context. |
| High | CineVerse and FreelancerFlow are honest personal projects, but their case pages use short generic decision lists. The original portfolio records a verifiable stack and more detailed approach. FreelancerFlow artwork is a mockup, not a live authenticated dashboard. Source: `Portfolio assets/Portfolio-main/src/data/projects.ts` and README. | Explain goal, implementation decisions and limits, link directly to the matching service and demo without claiming business results. |
| Medium | The form prepares a WhatsApp draft and does not submit or store a lead. A button click cannot be counted as a qualified inquiry. Source: `src/components/contact-form.tsx`; local functional verification. | Define a manual inquiry log/measurement convention before any conversion claims. |
| Medium | Search Analytics has no returned query, page, country or device rows for 20 September–17 October 2026. This may reflect a new property or data latency; it does not prove zero traffic. Source: connected Search Console read on 20 October 2026. | Request a direct Search results export when data appears; see `NEEDS_OWNER_GSC_EXPORT.md`. |
| Medium | Pure Roots mockup visibly includes beverage claims in the artwork. Its page currently labels the work as a concept and disclaims product claims, but commercial status and permission for each image still need owner review. Source: `Portfolio assets/Social Media Post Mockup.png`. | Keep concept labeling; request owner review before expanding assertions. |
| Low | `www.nextstudio.us.ci` did not resolve from this check. The configured canonical host is the bare HTTPS domain; HTTP bare host returned 308 to HTTPS. This is a domain choice, not evidence that the primary site is broken. | No duplicate-host page work. Add `www` only if the owner wants and controls it. |

## Current crawl and page health

- Live Chrome crawl with JavaScript disabled passed **19 sitemap URLs**: HTTP 200, page title, description, one H1, OG image, parseable JSON-LD, `index, follow`, and self-referencing production canonical. The live sitemap XML and robots file returned 200; robots allows `/` and points to the sitemap. Unknown service route returned 404 in the prior deployment verification.
- The five service routes, five portfolio routes, pricing, contact, about and legal pages are in the sitemap. Header, service cards and work links expose routes through HTML navigation. Important text is server rendered; `verify-seo.mjs` checked H1 with JavaScript disabled.
- A previous live desktop/mobile browser run found no page errors or axe WCAG 2 A/AA violations on sampled pages; this is not a complete accessibility audit. A current five-route mobile overflow check passed. Existing WebP artwork is generally compact (the largest published portfolio image observed was about 275 KB). Core Web Vitals field data remain unavailable.
- The homepage and service pages have appropriate base metadata and structured data. No technical `noindex`, canonical or sitemap repair is needed now. Google Search Central says helpful, people-first content and technical accessibility matter more than an extra AI-specific markup file: [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [AI features guidance](https://developers.google.com/search/docs/appearance/ai-features).

## Limits

No Google index coverage, ranking, search volume, conversion count, real-user CWV or customer outcome was established. Search result observations are snapshots from general web search, not controlled Google rankings for a specified location or user. The no-spend strategy should be revised once direct Search Console rows and confirmed inquiries exist.
