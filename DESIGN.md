# Junk in the Truck Co — design system

What the site looks like and why. Read this before changing anything visual, so
new work matches what is already there instead of drifting.

---

## The idea

This is a family junk removal company, not a national franchise. The design
should feel like a real local crew: warm, direct, a bit loud, never corporate.
Bright green for action, orange from the truck logo, warm off-white paper rather
than clinical white.

The homepage is ordered around what an anxious customer actually wants to know,
in order: **can you come today** (hero), **what will it cost** (price rail),
**can I see proof** (before/after), then everything else. Price and proof used to
sit below four sections of marketing copy. They do not any more. Keep that order.

## Colour

Defined in `tailwind.config.ts` and `src/index.css`.

**Brand**

| Token | Hex | Use |
|---|---|---|
| `brand-green` | `#18D13D` | Buttons, calls to action. The action colour. |
| `brand-green-deep` | `#12A82F` | Hover state for green. |
| `brand-orange` | `#E98922` | Accent, sampled from the truck logo artwork. |
| `brand-orange-deep` | `#C96F14` | Hover state for orange. |

**Neutrals — warm on purpose**

| Token | Hex | Use |
|---|---|---|
| `ink-900` | `#17120F` | Darkest text. Near-black but warm, never pure black. |
| `ink-800` | `#221B16` | Headings on light backgrounds. |
| `ink-700` | `#31271F` | Body text. |
| `ink-500` | `#6B5D53` | Secondary text, captions. |
| `ink-300` | `#A99C92` | Disabled, hairlines. |
| `sand-50` | `#FAF6F1` | Page background. Warm off-white. |
| `sand-100` | `#F2EBE2` | Alternating section background. |
| `sand-200` | `#E5DACB` | Borders, dividers. |

There is no pure `#000` or `#FFF` anywhere in the redesigned sections. The
neutrals are tinted toward the logo's orange, which is what makes the orange feel
native to the page rather than pasted on. Keep that.

**Sister company**

DND navy `#061638` appears only in the DND callout and on `/partners`. It is
their colour, used deliberately so a referral block reads as a different company
at a glance. Do not use it anywhere else.

## Type

| Role | Typeface | Notes |
|---|---|---|
| Display / headings | **Anton** | Also aliased as `font-display`. Condensed, heavy, shouty in a good way. |
| Body | **Inter** | Everything readable. |
| Alternates | Changa One, Poppins | Present in the config, used sparingly. |

Headings get `text-wrap: balance`. That is set globally in CSS rather than as a
utility class on components, because Lovable rewrites component class strings
when the site is edited there and would silently strip it.

## Components worth knowing

Redesigned pieces live in `src/components/redesign/`:

- **`HeroRedesign`** — Full-bleed photo with a scrim over the left 60% only. The
  scrim is constrained to `w-3/5` deliberately: a full-width gradient rendered
  the photo flat black even with transparent end stops. The section uses
  `isolate` and no negative z-index, because a negative z-index escaped the
  section and painted the hero image behind the page background.
- **`PriceRail`** — Real price tiers, straight after the hero.
- **`BeforeAfterSlider`** — Drag-to-compare. Uses pointer events so touch and pen
  work for free, and `clipPath: inset()` rather than animating width, because
  animating width scales one image and breaks alignment.
- **`TextPhotoButton`** — Camera-to-text quote. Uses the Web Share API where the
  device supports attaching a real photo, and falls back to a plain `sms:` link
  otherwise. No `sms:` link can carry an attachment; that is a platform limit,
  not a bug.

## Voice

Plain, specific, and never salesy. Concrete numbers beat adjectives.

Good, and actually on the site:

> Most garage cleanouts run $400–$800.

> Snap a photo of your pile, text it to 813-531-9858, and we'll text a price
> back within 24 hours — no walkthrough, no sales call.

> You point. We carry it down the stairs, sweep up after, and haul it off — no
> dumpster parked in your driveway for a week.

Avoid: "premium", "seamless", "we pride ourselves on", "your trusted partner".

**Never claim a photo is a real customer job unless it is.** Some before/after
images on this site are AI-generated demonstrations. Copy describes the service,
never the specific customer. This came up once and was corrected; do not
reintroduce it.

## Rules that are easy to break

- **A Tailwind class that isn't in the config emits nothing.** This has caused
  three separate silent failures — `bg-cta-green` existed only as a raw CSS
  variable, `via-22%` isn't on the default 5% gradient scale. If a colour or
  spacing value doesn't appear, check the built CSS before assuming the markup
  is wrong.
- **Check the rendered page, not the source.** Lazy-loaded images frequently
  report as broken in automated checks when they are simply not scrolled into
  view yet.
- Review count on the site is **485**, from the live review widget. Do not lower
  it based on a scraped number from somewhere else.
