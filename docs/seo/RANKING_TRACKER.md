# Top-six measurement protocol

Source of truth: the verified `https://nextstudio.us.ci/` Google Search Console property, **Performance → Search results → Search type Web**. Track a completed 28-day period and compare it with a comparable previous period. Use Google URL Inspection or the Page indexing report for index state; Search Console Performance metrics do not prove every URL's indexing state.

`TARGET_QUERY_TRACKER.csv` is the working table. Each row specifies a query, country, device and target URL. Blank impressions, clicks, CTR and average-position cells mean **unavailable**, not zero. As of 20 October 2026, the Performance and Page indexing reports were processing, and the connected Search Analytics feed returned no query/page rows for 20 September–17 October. The live sitemap read 19 URLs successfully, but that is a discovery count.

## Columns and rules

| Column | Meaning |
|---|---|
| `date_start`, `date_end` | Exact completed 28-day period; do not mix incomplete recent days. |
| `country`, `device`, `query`, `url` | Query/country/device/page combination actually selected in GSC. Candidate rows are hypotheses until GSC shows them. |
| `search_intent` | Commercial, research, mixed, or informational based on dated SERP evidence; revisit when real impressions appear. |
| `index_status` | Exact URL Inspection/Page indexing state and observation date, not inferred from a sitemap. |
| `impressions`, `clicks`, `ctr`, `average_position` | Copy only from the filtered Search Console report. Preserve blanks when unavailable. |
| `whatsapp_inquiries` | Count messages actually received that match the inquiry definition, not button clicks or prefilled drafts. Keep personal details out of the repository. |
| `next_improvement` | One specific action prompted by the evidence. |

The stretch milestone is a filtered 28-day average position **6.0 or better** with meaningful impressions and qualified inquiries. Report the impression count and exact filters. A one-impression position, local personalized search, or site-wide average is not a durable win. Review every 2–4 weeks rather than rewriting pages daily.

Owner export: `NEEDS_OWNER_GSC_EXPORT.md`. If the direct report still says **Processing data**, share that state and wait for finalized data. Google says [URL Inspection recrawl requests do not guarantee inclusion](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
