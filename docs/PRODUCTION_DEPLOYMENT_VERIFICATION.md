# NEXT Studio production deployment and indexing verification

Checked 20 October 2026, Asia/Karachi. Production: <https://nextstudio.us.ci/>.

## Deployment diagnosis

- **Platform:** Vercel, confirmed in the project dashboard and live `Server: Vercel` / `X-Vercel-Id` response headers.
- **Connected repository:** `UzairUmair/NEXT-Studio-Site`. The production environment tracks `main`.
- **Deployed source:** commit `0038264` (`00382643bc4fb3ee4731e3cb0dffacfd29555eb5`). Vercel deployment [`GJGXd9E1wMyzoq1D4eosVqSTtTT6`](https://vercel.com/uzairprivv-2190s-projects/next-studio-site/GJGXd9E1wMyzoq1D4eosVqSTtTT6) was marked **Ready**, **Latest**, **Production** for that commit at 12:24 PKT. Build logs show Next.js 16.4.2 generating `/robots.txt`, `/sitemap.xml`, the public routes, and completing deployment. The three nonblocking warnings concern npm `cache-dir` configuration and `unrs-resolver` postinstall allowScripts; no build error was shown.
- **Domain and aliases:** Vercel lists `nextstudio.us.ci` and `next-studio-site.vercel.app` as Production with **Valid Configuration**. The deployment also has Vercel-generated branch and unique URLs. The custom domain is the primary production domain. The Vercel alias serves the site with a canonical pointing to `nextstudio.us.ci`.
- **Protection:** Vercel Authentication is enabled with **Standard Protection**, whose displayed scope protects all except production custom domains. Public unauthenticated requests to `nextstudio.us.ci` succeed. No project environment variables are configured; the production canonical origin is fixed in code. Vercel system environment variables are enabled.
- **Build configuration:** Next.js preset; default build, install and output settings; repository root directory; automatic ignored-build behavior; Node.js 24.x. Production branch tracking is `main`.

The earlier live audit occurred before this deployment was promoted. It saw the old build's `noindex, nofollow` and 404 responses for the new metadata routes. The current deployed code sets `index, follow` when `VERCEL_ENV` is not `preview`, and provides Next.js metadata routes in `src/app/robots.ts` and `src/app/sitemap.ts`. No new code or deployment-setting change was required in this verification pass.

## Live HTTP and crawl verification

| URL or test | Result |
|---|---|
| `/` | 200 HTML, `index, follow`, self canonical, no `X-Robots-Tag` |
| `/robots.txt` | 200 `text/plain`, `User-Agent: *`, `Allow: /`, absolute production sitemap URL |
| `/sitemap.xml` | 200 `application/xml`, well-formed, 19 distinct production HTML URLs |
| Service, pricing and contact sample | 200 HTML for `/services/web-development`, `/services/seo`, `/services/geo-aio`, `/pricing`, `/contact`; no `X-Robots-Tag` |
| All sitemap URLs | 19/19 returned 200, one H1, page title, description, OG image, parseable JSON-LD, `index, follow` and exact production self canonical |
| Missing service | `/services/does-not-exist` returned 404 |

The live `verify-seo.mjs` crawl used Chrome with JavaScript disabled. This confirms the page headings and essential metadata are present in server-rendered HTML. It parsed the live sitemap and robots response, then checked every listed route. Organization structured data appeared on all routes. This is a syntax/presence check, not a Google rich-result eligibility verdict. Raw HTTP checks separately inspected content types and response headers. The homepage, robots and sitemap were served from Vercel cache during the spot check.

## Design, function and build checks

- Live desktop checks covered 14 representative routes, with no browser page errors or automated axe WCAG 2 A/AA violations. These checks do not certify complete accessibility.
- Live mobile checks covered the menu, work, pricing and contact pages. The menu opened and closed, no horizontal overflow appeared on five SEO sample routes, pricing currency persisted after reload, and contact form validation plus WhatsApp draft creation worked. The test intercepted the draft rather than sending a message.
- `npm run lint`, `npm run typecheck`, and `npm run build` all passed sequentially on the deployed source commit. The local Next.js production build emitted 19 public HTML routes plus `/robots.txt` and `/sitemap.xml`.
- The tests did not produce a new real-user Core Web Vitals verdict, Search Console coverage decision, crawl log from Googlebot/Bingbot, or search ranking claim.

## Code and deployment status

The SEO/GEO/AIO code changes were already in commit `0038264`; this verification pass changed documentation only. That commit was confirmed as the live Vercel production deployment. The site is publicly fetchable and permits crawling according to its current robots policy. **Indexing and Google Search Console ownership remain unconfirmed.**

Owner account tasks are in [SEARCH_ENGINE_MANUAL_SETUP.md](SEARCH_ENGINE_MANUAL_SETUP.md). In particular, verify property ownership in Google Search Console and Bing Webmaster Tools, submit the live sitemap, then use their URL Inspection tools to observe actual indexing decisions.
