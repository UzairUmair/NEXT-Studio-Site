# NEXT Studio: qualified Google search strategy

Observed 20 October 2026. Markets: Pakistan (PK), United States (US), Saudi Arabia (SA). Incremental cash spend: $0. A top-six result is an **aspiration for a specific query, country, device and 28-day period**, not a promise or a current ranking. The immediate constraint is indexing: Google URL Inspection reported the homepage and application service URL unknown to Google, and the web-development URL discovered but not indexed. The live homepage can be indexed, and Search Console read the 19-URL sitemap successfully. See `06-growth-report.md` for the evidence.

## Method and confidence

Google result samples below used English queries with `gl=pk`, `gl=us` or `gl=sa`, `hl=en` and `pws=0` on 20 October 2026. These settings are a research aid, **not** a measurement of an actual user's country or ranking; Google may still apply IP and other context. The Pakistan browser showed Karachi in its footer. Search Console Performance and Page indexing reports were processing; the connected Search Analytics feed returned no query/page rows for 20 September–17 October. No volume, difficulty or NEXT Studio position is assigned. Exact snapshots and competitor pages are in `COMPETITOR_RESEARCH.md`.

## Priority query-to-page hypotheses

| Priority | Market and candidate query | Intent and live-result signal | Existing destination | Proof and next step |
|---|---|---|---|---|
| 1 | PK: `website design with whatsapp for small business pakistan` | Commercial mix of website service and pricing pages. | `/services/web-development` | Explain a click-to-chat draft versus a custom API/lead system; show accurate starting PKR scope and this site's working inquiry path. |
| 2 | PK: `small business website development pakistan` | Broad commercial result set with established agencies, directories and an AI cost overview. More competitive than row 1. | `/services/web-development` | Demonstrate responsive work and quote boundaries; earn indexing before optimizing for position. |
| 3 | PK: `brand identity design for small business pakistan` | Mixed service pages and informational guides. | `/services/graphic-design` | Show Pure Roots as a concept and NEXT Studio as in-house work; confirm actual file/revision terms before stronger claims. |
| 4 | US: `fixed price website design for small business` | Mixed package pages, cost guides and community discussions. The price comparison intent is strong, but many established providers compete. | `/pricing` with `/services/web-development` | Explain why prices are starting quotes, what is excluded, and how remote scope and handoff work; do not claim a US office or fixed final price. |
| 5 | US: `firebase mvp development for startups` | Mostly how-to guides and forums in the sampled results, so weaker commercial fit than the wording suggests. | `/services/application-development` | Keep as a secondary technical phrase, grounded in the documented FreelancerFlow stack. Recheck a more service-focused variant after GSC data appears. |
| 6 | US: `technical seo audit for small business website` | Mostly guides and audit tools; informational intent dominates. | `/services/seo` | Keep the service page for commercial audit intent; consider one real audit-process resource only after evidence review. |
| 7 | SA: `small business website design saudi arabia` | Commercial agency pages plus a local map pack. Local incumbents show Arabic/English delivery and physical presence. | `/services/web-development` | Low near-term priority. Offer remote English delivery only if the owner confirms terms; do not imply local offices, Arabic ability, SAR pricing or Saudi compliance expertise. |
| Defer | SA: `whatsapp website for small business saudi arabia` | Sample was dominated by WhatsApp Business software, API and chatbot providers. | None | Intent mismatch for a website studio. Do not create a landing page for this wording. |

The seven active rows are **research hypotheses**, not seven promised rankings. One substantive web-development page serves related website and WhatsApp inquiries; country-swapped near-duplicate routes would dilute quality. GEO/AIO is represented by the existing `/services/geo-aio` page, but no three-market candidate is promoted until buyer intent and genuine demand appear in GSC. Generic terms such as `web development company` and unsupported Arabic queries are deferred.

## First measurement gate

1. Let Search Console process the submitted sitemap. Inspect the homepage, web-development, application-development, graphic-design and pricing URLs. Record each exact discovery/crawl/indexing reason rather than interpreting sitemap discovery as indexing.
2. When Performance data appears, export **Search type: Web**, a completed 28-day period, and Queries, Pages, Countries, Devices and Dates. Filter each candidate by country and device, recording impressions, clicks, CTR and average position in `TARGET_QUERY_TRACKER.csv`. Request details are in `NEEDS_OWNER_GSC_EXPORT.md`.
3. Prioritize pages with genuine nonbrand impressions or qualified inquiries. Revisit candidate wording from the queries Google actually shows. Do not infer zero demand from a new property's blank report.
4. Count a top-six milestone only when the query + country + device + URL combination averages position `<= 6` over a completed 28-day period with enough impressions for interpretation. Record the impression count and qualified inquiries. A one-off personalized search is not evidence.

Google says [recrawl requests can take days or weeks and do not guarantee inclusion](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl). Useful original content remains the [content standard](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
