# Search engine and analytics tasks for the site owner

These steps require account or deployment access. Code in this repository cannot confirm indexing, ownership, rankings or AI citations. The Windsor.ai Search Console connector exposes `https://nextstudio.us.ci/`, but returned no Search Analytics or sitemap rows on 20 October 2026. The site's existing `google0adca469c1ac3bbb.html` path responded with HTTP 200 on production; this alone does not prove the current verification state in Google.

## After deploying this code

1. Confirm live `https://nextstudio.us.ci/` has `index, follow` and a self canonical. Confirm `https://nextstudio.us.ci/robots.txt` and `https://nextstudio.us.ci/sitemap.xml` return 200. Run `node scripts/audit-live.mjs https://nextstudio.us.ci` and compare with the implementation report.
2. In [Google Search Console](https://search.google.com/search-console/), open the existing URL-prefix property if it is under your account. If you do not control that property, add `https://nextstudio.us.ci/` and choose a verification method you control. A Domain property requires DNS control. The deployed HTML verification file may be reusable only if Google confirms it belongs to your property. Alternatively supply Google's **HTML meta token** through `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in the hosting environment, redeploy, inspect the page source, then select Verify. Do not paste passwords or unrestricted credentials into this repository.
3. Submit `https://nextstudio.us.ci/sitemap.xml` in Search Console. Inspect the homepage, each service, pricing and key case studies with URL Inspection; check the actual crawl/index decision and request recrawl for priority updated URLs if needed. Submission and recrawl requests do not guarantee indexing.
4. In [Bing Webmaster Tools](https://www.bing.com/webmasters/), import the verified Google property if available, or add and verify the site directly. Submit the same sitemap and review URL inspection and crawl reports.
5. Check hosting/CDN logs or rules for Googlebot, Bingbot and OAI-SearchBot. The new `robots.txt` wildcard permits public crawling. OpenAI documents OAI-SearchBot as its search crawler, while GPTBot addresses potential training usage; decide separately if you want a GPTBot restriction before any specific training policy is added. User-triggered ChatGPT-User fetches are a different category. See [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots).
6. If you want GA4, provide a Measurement ID and settle your privacy/consent requirements first. GA4 was not added because no ID or consent decision was supplied. After setup, test useful nonpersonal events such as quote and currency interactions, then link GA4 and Search Console in the respective account settings.
7. Run the [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema Markup Validator](https://validator.schema.org/) on the deployed homepage, one service page and one case study. Fix any actual errors. Schema validity does not promise a rich result.
8. Run mobile and desktop [PageSpeed Insights](https://pagespeed.web.dev/) on the homepage, a service, a case study, pricing and contact after deployment. Compare LCP, INP and CLS against real field data when available. A local browser check cannot substitute for Chrome UX Report data.

Google's [AI features guidance](https://developers.google.com/search/docs/appearance/ai-features) says standard SEO foundations apply and no AI-only markup or extra machine-readable file is required. Eligibility and search access do not guarantee appearance. Google's [recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) explains that recrawl requests can take time.

## Questions only the owner can settle

- Confirm control of the Search Console property and whether the existing verification file should remain the chosen method.
- Confirm the desired GPTBot training-crawler policy. The implementation makes no bot-specific rule.
- Supply a GA4 Measurement ID and privacy decision if analytics should be enabled.
- Review the flattened Pure Roots and New Year artwork for any visible third-party or academic attribution and approve continued public display.
- Confirm production deployment, redirect/hostname settings, and any CDN bot protections.
