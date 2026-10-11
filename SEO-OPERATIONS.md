# Campaign SEO operations

Prepared 11 October 2026. Implementation baseline: main `1ba610b`. Delivery follows [SEO-IMPLEMENTATION-PLAN.md](SEO-IMPLEMENTATION-PLAN.md), [AGENTS.md](AGENTS.md) and the [protected journeys](UX-DESIGN-DECISIONS.md#protected-visitor-journeys).

## Delivery state

| Package | Implemented/prepared | Remaining evidence or dependency |
| --- | --- | --- |
| A — search baseline | Search Console account inspected: no existing site properties. URL-prefix verification tag prepared for the final HTTPS hostname. Account evidence kept outside this public repository. | Verify after deployment, submit sitemap, inspect seven priority URLs and record the available history. A newly configured property may have no report yet; unavailable data is not zero traffic. Legacy properties are not verified. |
| B — crawl discovery | Deterministic ten-page sitemap and permissive robots file; exact membership, canonical/noindex, serving and artifact-boundary regressions. Legacy artifacts exclude both files. | Exact-revision release gates, live bytes/MIME checks and Search Console processing result. |
| C — metadata | Seven existing campaign destinations have specific titles/descriptions and consistent social metadata. Independent publisher identity and self-canonicals retained. Head-only generation preserves chart titles; Evidence's overwritten chart labels restored. | Checked publication; independent campaign, UX and evidence actual-diff reviews found no remaining actionable findings. |
| D — answers and routes | Audited Proposal, FAQ, Numbers, Evidence, Options and Lessons. Existing introductions already explain their subjects with source/forecast/research qualifications; no duplicate introduction or navigation was added. Existing press route remains usable. | Use later search evidence to identify a real answer gap. No recruitment optimization, permission change or participation redesign is included. |
| E — local links | Private editorial prospect list and reviewable correction/link drafts prepared outside the repository. Existing press instructions are at `about.html#press`. | Campaign owner can select recipients and explicitly authorize sending. No outreach or coverage is claimed. |
| F — stage change | Official council page, linked form and leaflet rechecked on 11 October: pre-statutory proposal, responses by 16 October 2026, no stated closing time. Checklist below prepared. | Recheck official status at the deadline and publish a separately reviewed update when established. No automatic transition or reminder created. |
| G — weekly review/domain follow-up | Template and compatibility inventory below. Existing checked compatibility bundle retained. | Review meaningful data as it arrives. HTTP redirects require a separately justified hosting/recovery design; no host migration or Change of Address request included. |

Record actual release/account outcomes with the implementation PR and in private operations notes. Update this table only with completed evidence; do not mark search indexing, ranking or outreach as delivered merely because source files exist.

## Maintain the search assets

Edit the intentional page list in `.github/scripts/build_seo.py`, not `sitemap.xml` by hand. Run:

```sh
python3 .github/scripts/build_seo.py
python3 .github/scripts/build_seo.py --check
```

Titles/descriptions live in `render_identity` in `.github/scripts/build_navigation.py`. Regenerate shared navigation and the Numbers/Lessons outputs after changing that source. The release suite checks freshness. Metadata updates must affect only the head; chart labels and document content have separate meanings. Keep the Search Console homepage verification tag through future regeneration.

Use significant maintained content dates before adding `lastmod`; omit it while those dates are not reliable. Do not add event archives, recruitment routes, private/form-focused pages, exports or URL variants to the initial campaign sitemap. Omission is not deindexing. Retain crawlable `noindex` on Sent and the two fundraiser briefs.

## Consultation-stage update checklist

1. Open the [official council consultation page](https://www.richmond.gov.uk/services/children_and_family_care/schools_and_colleges/school_organisation_consultations/kew_riverside_consultation), its current response link and any new formal notice. Save access date and exact process/deadline evidence privately. Do not infer the hour at which a date-only deadline ends.
2. Establish whether responses are still accepted, an extension is published, feedback is under consideration, a statutory notice exists or a decision has actually been taken. A calendar date alone does not establish any later stage.
3. Inventory current response/date wording in `index.html`, `proposal.html`, `faq.html`, `options.html`, `about.html`, the metadata generator, `response-checklist.md`/PDF and `respond-reminder.ics`. Keep historically dated records recognisable. Search the entire public allowlist for `16 October`, `2026-10-16`, `respond` and `consultation` to find less obvious mentions.
4. Update visible status and search/social descriptions together using verified wording. Replace an expired primary action with the campaign owner's current authorized action; preserve the Parent plan, Letters/Ideas, all six task routes, official-process sources and J2/J3/J7 written paths. Do not claim that a site contribution is an official response.
5. Regenerate affected pages/downloads and the sitemap. Seek applicable independent campaign/evidence/UX actual-diff reviews, extend meaningful regressions for changed behavior, and follow all release gates. Participation behavior changes also require the plan's unfamiliar-person phone check or an explicitly authorized exception.
6. Verify live page/download bytes and metadata after release; record the source, exact revision and verification. Request fresh inspection where useful. Cached snippets or social previews may persist; they do not establish a failed release.

## Weekly review template

Store completed reports privately; this public document is the blank operating template. One maintainer is responsible; a backup is assigned by the campaign owner when available. No named person or new commitment is assigned here.

```text
Review date / responsible maintainer:
Windows: latest complete week / previous complete week / longer window if sparse:
Property and available history:
Release / campaign stage / domain-change context:

Search Console — clicks, impressions, CTR; queries and landing pages where available;
country/device totals; indexed/excluded priority URLs; Google-selected canonicals;
last crawls and fetch/sitemap issues. Record missing/omitted data explicitly.

Default aggregate counters — broad page/section/action opens with fixed definitions.
Optional consent-only Umami — its separately covered page/action totals.
Use the existing private aggregate reports; do not open individual sessions.

Observed issue / supporting evidence / relevant visitor journey:
One proposed change (or reason to wait) / responsible role / next review:
After delivery: reviewed revision / checks / live result / subsequent observation:
```

Search Console, default aggregate counters and optional Umami reports cover different populations and definitions. Assess them separately; action opens are not unique people or completed responses. Default counters cannot reconstruct linked visitor journeys. Do not calculate a precise search-to-response conversion rate, infer publication-level referral attribution from a generic external bucket, or add queries, contributor IDs or form contents to analytics. Follow [ANALYTICS.md](ANALYTICS.md).

## Domain follow-up decision

The final canonical hostname is `savekewriversideprimaryschool.org`. The previous `savekewriverside.org` and original `ystoneman.github.io/kew-riverside-website/` are compatibility origins. Their checked generator/asset manifest covers existing HTML routes, old fragments through browser forwarding, query strings, downloads, public-data updates and separate Letters/Sent origin-local recovery. Printed `/visit/` links retain their school-visit handoff.

GitHub Pages currently serves compatibility HTML with canonical signals and browser forwarding. Do not substitute a blanket redirect: drafts and unfinished provider returns must be read at the origin that stored them. Keep saved/pending words, Copy/Clear/Continue, Back, no-script onward links, blocked-storage behavior and withdrawal/removal propagation working. Canonical sitemap/robots files are intentionally absent from the compatibility bundle.

Retain this checked setup for this release. It is not an HTTP 301/308 migration. If later indexing evidence shows a persistent problem, first inspect affected old/new URLs and property access; then assess hosting capable of direct permanent redirects with recovery exceptions, TLS and rollback. A new hosting design requires separate review and release. Search Console's Change of Address is conditional on eligible properties and migration requirements; it is not a prerequisite for today's discovery work.

## Reference guidance

Google's [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) and [redirect guidance](https://developers.google.com/search/docs/crawling-indexing/301-redirects) were rechecked on 11 October 2026. A sitemap is a discovery hint, not guaranteed indexing. Browser redirects depend on rendering; permanent HTTP redirects are a possible later improvement, subject to the recovery constraints above.
