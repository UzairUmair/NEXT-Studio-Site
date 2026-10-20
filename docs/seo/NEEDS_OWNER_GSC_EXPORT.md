# Exact Google Search Console export needed

The connected read-only Search Analytics API returned no rows for 20 September–17 October 2026. In [Google Search Console](https://search.google.com/search-console/), select the **`https://nextstudio.us.ci/` URL-prefix property → Performance → Search results**. Set **Search type: Web** and **Date: Last 3 months** (or the longest completed period available). Enable clicks, impressions, average CTR and average position, then use **Export → CSV**. Share the exported ZIP or its `Queries.csv`, `Pages.csv`, `Countries.csv`, `Devices.csv` and `Dates.csv` files. If the report says **Processing data** or is empty, send a screenshot of that state instead and retry later.

Also share screenshots or a manual summary of **Indexing → Pages** (indexed/not indexed totals and main reasons), **Sitemaps** (status for `https://nextstudio.us.ci/sitemap.xml`), and **URL Inspection** for the homepage plus `/services/web-development` and `/services/application-development`. These views cannot be inferred from the Search Analytics export. Hide account details if desired; no password, token or owner credentials are needed.

Google documents direct report exports in [Search Console Help](https://support.google.com/webmasters/answer/12919797). Search Console anonymizes some queries, so tab totals may differ; retain the original export and dates.
