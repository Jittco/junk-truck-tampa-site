# Junk in the Truck Co — website

Claude Code reads this file automatically every time it opens this folder. It is
also written to be read by a human. Carlos owns this business and this site; this
file exists so neither he nor Claude has to remember any of it.

---

## The business

Junk in the Truck Co. Junk removal, dumpster rental, and small demolition across
Tampa Bay. Family owned, Christian-based, roughly six years in business, around
485 Google reviews. Based in South Tampa, serving Hillsborough and Pinellas
counties.

Sister company: **DND Demolition** (`dnddemolition.com`), same owner. Junk in the
Truck keeps the small teardowns — sheds, decks, fences, playsets, driveways,
above-ground pools. Anything structural or permitted goes to DND. The two sites
link to each other on purpose; see "Sister company" below.

## Phone numbers — get these right

| Number | Use | Where it belongs |
|---|---|---|
| `844-858-6546` | **Main line.** Voice. | The primary number everywhere, and in schema. |
| `813-531-9858` | **Call or text.** Customers text photos of their pile for a quote. | Secondary. Describe it as "Call or Text" — not "text only". |

Confirmed by Carlos, October 2026. Keep the hierarchy clear: 844 is the number
a customer should reach for by default; 813-531-9858 is the one they can text a
photo to and can also call.

`813-536-6298` used to appear on the mobile Call Now button, the FAQ page and
the service-area hub. Carlos confirmed it should be replaced with
`813-531-9858`, and it has been. **Note that 813-536-6298 is painted on the
truck in the homepage hero photo**, so it is almost certainly a live line — it
simply is not published on the website any more.

Everything phone-related lives in `src/config/hero.ts`. Change it there, not in
individual components.

## How the site is built

- **React + Vite + TypeScript**, styled with Tailwind and shadcn/ui components.
- Hosted on **Vercel**. Pushing to the `main` branch deploys automatically —
  usually live in under a minute.
- The page **body** is client-rendered: the raw HTML ships an empty `#root` and
  JavaScript draws everything. The page **head** is not — see below.

### The build has two steps

`npm run build` runs `vite build` and then `node scripts/prerender.mjs`.

The prerender step exists because a single-page app served through a catch-all
rewrite returns the *same* HTML for every URL. That meant every page told Google
it was the homepage: same title, same description, no canonical tag, no
structured data. (`react-helmet` was supposed to fix that in the browser, but
version 6 does not work under React 18 and was rendering nothing at all. The
site now uses `react-helmet-async`.)

The script renders each of the 44 real routes in Node, harvests what
react-helmet-async would put in the head, and writes `dist/<route>/index.html`
with that head baked in. Vercel serves a matching static file *before* it
applies the rewrite, so this changes no URLs and touches none of the 102
redirects.

Two things to know:

- **It fails the build on purpose.** If a route stops rendering, loses its
  title, or two pages end up with the same title, the script exits non-zero and
  Vercel refuses the deploy. That is deliberate — shipping homepage titles on
  every page again is worse than not shipping.
- **Metadata is harvested, never re-declared.** Page titles and descriptions
  still live in each page's `<Helmet>` and in the data files. The prerender
  reads them. Do not add a second list of titles somewhere — they would drift.

To check the output yourself after a build:

```bash
grep -o "<title[^>]*>[^<]*" dist/services/dumpster-rental/index.html
```

## Making a change

1. Say what you want in plain English. Claude edits the files.
2. Ask Claude to run `npm run build` before anything is committed. If the build
   fails, the change is broken — do not push it.
3. Commit and push to `main`. Vercel deploys it.
4. Look at the live site and confirm the change is actually there.

If something goes wrong after a deploy, Vercel keeps every previous version and
can roll back instantly from its dashboard. Nothing here is unrecoverable.

## Things that will quietly break the business

**`vercel.json` redirects.** There are 102 rules mapping old website URLs to
current ones. They exist so links from Google, old business cards, and other
websites still work. Deleting or editing them loses traffic that took years to
earn. Leave them alone unless you know exactly why you are changing one.

**Every URL returns "success" even when the page does not exist.** Because of how
single-page apps work, a typo'd address still returns a 200 status and then draws
a "Page Not Found" screen. So a broken link will not look broken to a script — it
has to be checked by loading the page and looking at it.

**The canonical address is `www.junkinthetruckco.com`.** The version without
`www` redirects to it. Every canonical tag, the sitemap, and all 43 indexed URLs
use `www`. Do not flip this.

**Do not put passwords or API keys in the code.** They belong in Vercel's
Environment Variables screen. Anything committed to the repo is permanent, even
if deleted later.

**MX and email DNS records at GoDaddy are Google Workspace.** Nothing on this
website touches email. If a DNS change is ever proposed, the MX records and the
SPF/DKIM entries stay untouched or company email stops working.

## Sister company

`/partners` explains the split between the two businesses, and DND's site links
back on three of its service pages. The referral is deliberately placed low on
the page — Junk in the Truck ranks for demolition terms and gets real work from
them, so the goal is to catch the jobs that are genuinely too big, not to hand
demolition traffic away.

## Confirmed business facts (October 2026)

These were settled with Carlos and the site was brought into line with them.
They live in `src/config/hero.ts` and `src/pages/DumpsterRental.tsx`.

**Junk removal** — the truck is 20 cubic yards. Public pricing is the four-tier
framework, and nothing else: single item $99, small load (1/4 truck) $175–$289,
half truck $400–$650, full truck $700–$950. A garage cleanout spans half to full
truck, so it is quoted $400–$950. The detailed fractional pricing used
internally is deliberately not published anywhere on the site.

**Dumpster rental** — a separate service from the junk truck. Two sizes:

| | 3 days | 7 days | 14 days | 30 days |
|---|---|---|---|---|
| 15-yard | $400 | $450 | $475 | $500 |
| 20-yard | $450 | $525 | $550 | $600 |

Every period includes 1 ton; overage is $0.06 per pound. There is no 18-yard
dumpster — that was an old listing and has been removed sitewide.

**Hours** — Monday–Saturday 8 AM–6 PM, Sunday closed. Sunday work only by prior
arrangement, and the site must not advertise Sunday as a normal service day.

**Licensed and insured. NOT bonded.** Do not let a city-page template or any
other copy reintroduce a bonded claim.

**Review counts are never hardcoded.** The Trustindex widget on the homepage is
the live source. Everywhere else uses non-numeric wording (`REVIEW_PROOF` in
`src/config/hero.ts`). The old 450+/474/485 figures went stale and contradicted
the widget.

## Known issues, honestly stated

- **The page body is still invisible to crawlers that do not run JavaScript.**
  The head is prerendered now (see "How the build works"), so titles, meta
  descriptions, canonicals and schema are in the raw HTML. The `<body>` is still
  an empty `#root` that React fills, so ChatGPT, Perplexity and similar crawlers
  still receive no body copy. Fixing that means server-rendering the body as
  well, which is a much larger job: several components touch `window` during
  render, and a body prerender introduces hydration-mismatch risk that a
  head-only prerender does not.
- **Mobile is slow.** The largest element takes about 7.6 seconds on a phone on
  a slow connection, because nothing can be drawn until JavaScript loads.
  Desktop is fine. Body prerendering would fix this too.
- **Six service pages do not exist** — deck, fence, driveway, pergola, pool and
  interior removal. 26 redirects used to point at them and now land on the
  general demolition page instead. Building the real pages would recover
  searches like "fence removal Tampa" that currently have nowhere to land.
- Images could still lose roughly 1.2 MB by converting the before/after gallery
  to WebP and serving correctly sized versions.

## History worth knowing

This site was built in Lovable and moved to Vercel in August 2026. The Lovable
project still exists and still syncs to GitHub, so Carlos can keep editing there
if he prefers — those edits flow to GitHub and deploy to Vercel automatically.

During the migration a broken DNS record was found that had been serving an
untrusted certificate to roughly half of all visitors typing the address
directly. That was the cause of the intermittent "https is not working" problem
from June. It is fixed.
