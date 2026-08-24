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
| `844-858-6546` | **Voice.** The main line. | Everywhere. ~91 places in the code. |
| `813-531-9858` | **Text only.** Customers text photos of their pile for a quote. | The text-a-photo feature only. |

These are two different lines on purpose. The text line is not a voice line and
the voice line does not receive photos. Do not "consolidate" them.

There is a third number in the code, `813-536-6298`, on the mobile Call Now
button and the FAQ page. **Nobody has confirmed whether that line is real.** If
you are about to touch phone numbers, ask Carlos about that one first.

Everything phone-related lives in `src/config/hero.ts`. Change it there, not in
individual components.

## How the site is built

- **React + Vite + TypeScript**, styled with Tailwind and shadcn/ui components.
- Hosted on **Vercel**. Pushing to the `main` branch deploys automatically —
  usually live in under a minute.
- The site is **client-rendered**. The raw HTML a browser first receives is
  nearly empty; JavaScript draws the whole page. This matters for search — see
  "Known issues".

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

## Known issues, honestly stated

- **The site is close to invisible to AI search.** ChatGPT, Perplexity and
  Claude's own crawlers do not run JavaScript, so they receive an almost empty
  page. Google renders JavaScript on a later pass so Google mostly sees the real
  site. Fixing this means adding prerendering to the build. It is the single
  biggest available SEO improvement.
- **Mobile is slow.** The largest element takes about 7.6 seconds to appear on a
  phone on a slow connection, because nothing can be drawn until JavaScript
  loads. Desktop is fine at 0.7 seconds. Prerendering fixes this too.
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
