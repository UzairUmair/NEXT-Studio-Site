# SEO audit before implementation

Audit date: 20 October 2026. Production origin: `https://nextstudio.us.ci`. The attached master prompt was treated as a specification to verify against the actual repository, not as evidence that any task was already complete.

## Evidence and scope

- Next.js 16.4.2 App Router, React 19, TypeScript, npm. Route files are in `src/app`; service and work slugs come from `src/data/site.ts`.
- `node scripts/audit-live.mjs https://nextstudio.us.ci` fetched every source-defined public route. The raw response summary is generated at `artifacts/live-before-audit.json` (ignored local evidence).
- All 19 HTML routes returned 200. Every one emitted `noindex, nofollow`, no canonical, and no JSON-LD. `/robots.txt` and `/sitemap.xml` returned 404. These are observed production responses, not inferences.
- The repository's `src/app/layout.tsx` linked indexability to `NEXT_PUBLIC_SITE_URL`; `.env.example` left it empty. The live response shows the noindex branch was deployed.
- Relevant internal links existed through the header, service cards, work cards, footer, and detail back links. Service detail pages had short generic copy and generic FAQs; case studies lacked explicit goal, scope and outcome sections.
- Images used by the site are optimized copies from the owner's `C:\Users\USER\Documents\Portfolio assets` collection. Existing case image alt text was generic. Pure Roots is marked concept work; CineVerse and FreelancerFlow are marked personal projects. No new ownership claim was inferred.

## Route matrix: production before changes

All rows below had **no canonical**, **no schema**, and `noindex, nofollow`. `D` is the live meta description result: present but broad (`B`) or specific (`S`). `Links` summarizes discoverable incoming site links. H1 text and title were read from live HTML. Content quality refers to search intent coverage, not visual quality.

| URL path | HTTP | Live title | D | H1 | Links | Content / alt | Result and planned change |
|---|---:|---|:---:|---|---|---|---|
| `/` | 200 | NEXT Studio — Built for what’s NEXT | B | Websites. Apps. Brands. Built for NEXT. | Logo, footer | Service overview and real work present; decorative image described | **Fail:** remove noindex, add canonical, WebSite/Organization, OG |
| `/services` | 200 | Services | B | Ideas into experiences. | Header, footer | Linked cards, brief descriptions | **Fail:** intent title, canonical, stronger summary |
| `/services/web-development` | 200 | Web development | B | Web development. | Service cards, hero chip | Thin process/context | **Fail:** useful scope, evidence, FAQ, schema |
| `/services/application-development` | 200 | Web applications | B | Web applications. | Service cards, hero chip | Thin process/context | **Fail:** MVP scope and related work |
| `/services/graphic-design` | 200 | Graphic design | B | Graphic design. | Service cards, hero chip | Thin process/context | **Fail:** boundaries and concept evidence |
| `/services/seo` | 200 | SEO | B | SEO. | Service cards, hero chip | Thin process/context | **Fail:** practical audit scope and no-guarantee explanation |
| `/services/geo-aio` | 200 | GEO + AIO | B | GEO + AIO. | Service cards, hero chip | Terms not explained | **Fail:** define terms and limits |
| `/work` | 200 | Selected Work | B | Proof in the details. | Header, footer | Status labels and cards present | **Fail:** portfolio intent metadata |
| `/work/cineverse` | 200 | CineVerse | S | CineVerse. | Work, home | Real supplied mockups; alt generic | **Fail:** goal, scope, outcome, descriptive alt |
| `/work/freelancerflow` | 200 | FreelancerFlow | S | FreelancerFlow. | Work, home | Personal status clear; alt generic | **Fail:** workflow context and descriptive alt |
| `/work/pure-roots` | 200 | Pure Roots identity | S | Pure Roots identity. | Work, home | Concept label; flattened artwork claim caveat | **Fail:** explicit concept narrative and alt |
| `/work/next-studio-identity` | 200 | NEXT Studio identity | S | NEXT Studio identity. | Work | In-house work label; alt generic | **Fail:** goal/scope/outcome and alt |
| `/work/new-year-study` | 200 | New Year type study | S | New Year type study. | Work | Educational label; artwork source needs owner review | **Fail:** clearer status and alt |
| `/pricing` | 200 | Pricing | B | Start with clarity. | Header, footer, cards | USD/PKR and terms present | **Fail:** search intent metadata and canonical |
| `/about` | 200 | About | B | Thoughtful by design. | Header, footer | Honest project provenance | **Fail:** entity metadata and canonical |
| `/contact` | 200 | Contact | B | Let’s build what’s next. | Header, footer, CTAs | WhatsApp workflow present | **Fail:** contact intent metadata and canonical |
| `/payment-process` | 200 | Payment process | S | Quote first. Then the next step. | Footer | Clear manual payment steps | **Fail:** canonical and OG |
| `/privacy` | 200 | Privacy | S | Privacy. | Footer | Policy present | **Fail:** canonical and OG |
| `/terms` | 200 | Terms | S | Working together. | Footer | Terms present | **Fail:** canonical and OG |

## Priority and access limits

1. **Critical:** production `noindex, nofollow` on every page. A deployment of corrected code is required before live crawlability changes.
2. **High:** no sitemap or robots endpoint, and no page canonicals.
3. **Medium:** generic detail content, missing structured data, generic alt text and missing page-level social metadata.
4. **Unverified:** HTTP-to-HTTPS and alternate-host redirects, CDN/WAF treatment of Googlebot/Bingbot/OAI-SearchBot, Google index status, Bing ownership, real-user Core Web Vitals, and external rich-result validation. These require deployment controls, authenticated tools, or field data.

The Search Console connector currently exposes a property named `https://nextstudio.us.ci/`, but its 28-day Search Analytics query and sitemap query each returned zero rows. This is not proof of indexing, ranking, sitemap submission, or a completed verification method.
