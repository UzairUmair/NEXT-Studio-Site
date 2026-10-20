# Search measurement baseline

Read-only check: 20 October 2026, property `https://nextstudio.us.ci/` via Windsor.ai Search Console connector. Window: 20 September–17 October 2026, excluding the latest two potentially incomplete days.

| Dimension requested | Fields | Connector result | Interpretation |
|---|---|---|---|
| Queries | clicks, impressions, CTR, average position | 0 returned rows | Pending baseline; no measured query performance available. |
| Pages | same | 0 returned rows | No landing-page performance evidence available. |
| Countries | same | 0 returned rows | Cannot infer geographic demand or USD/PKR audience. |
| Devices | same | 0 returned rows | Cannot infer mobile/desktop search mix. |

The connector separately returned one sitemap record: `https://nextstudio.us.ci/sitemap.xml`, `last_submitted` 20 October 2026 07:36:35 UTC, `errors: 0`, `warnings: 0`, `submitted: 24` as exposed by the connector. The live XML currently lists 19 HTML page URLs; the connector's submitted count is not used as an indexed-page count or reconciled to HTML routes. The connector does not expose Google's Page indexing report or the owner account's verification status.

**Unknown/pending:** indexed pages, nonbranded impressions, branded impressions, organic clicks, CTR, average position, queries, countries, devices, WhatsApp clicks, sent messages, and qualified inquiries. A live URL Inspection eligibility result is not an indexed-page count.

Next measurement check: export the direct Search results report described in `NEEDS_OWNER_GSC_EXPORT.md`, inspect Page indexing for the key URLs, and log real inquiries manually without personal information in this repository. Recheck monthly using equivalent 28-day periods. Do not enter zeros for missing data.
