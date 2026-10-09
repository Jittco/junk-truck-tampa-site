/**
 * Site-level values that were unknown at build time, isolated here so they can
 * be corrected in one place rather than hunted across components.
 */

/** Voice line. Confirmed voice-only — it does NOT accept SMS or MMS. */
export const VOICE_PHONE = "844-858-6546";

/**
 * Line that accepts texts and picture messages, for the photo-quote path.
 * Confirmed by Carlos. Takes calls too, but the 844 above stays the primary
 * voice number so the published call-to-action doesn't fragment.
 */
export const SMS_PHONE: string | null = "813-531-9858";

/** True once SMS_PHONE is a genuinely text-capable line. Gates the promise copy. */
export const SMS_VERIFIED = true;

/**
 * How fast Carlos can realistically reply to a photo quote. He said within 24
 * hours.
 *
 * This is stated on the page rather than left vague on purpose. "Get a price
 * back" with no timeframe reads as instant, and a customer who expects instant
 * and waits a day feels ignored — worse than never offering it. An honest,
 * beatable promise costs a little urgency and buys trust.
 *
 * Worth revisiting: the research on home services is unambiguous that
 * speed-to-lead is the single biggest close-rate lever. If he can commit to
 * same-day during business hours, this feature becomes materially stronger and
 * this string is the only thing that needs to change.
 */
export const SMS_REPLY_WINDOW = "within 24 hours";

/**
 * Price ladder. This is the approved public junk-removal pricing framework,
 * confirmed by Carlos in October 2026. It is the single source of truth — the
 * city and neighborhood pages were brought into line with it, and the old
 * contradictory $150 entry price and $349–$550 "average" are gone.
 *
 * The detailed fractional pricing used internally is deliberately NOT published.
 * A garage cleanout spans half truck to full truck, so it is quoted as $400–$950
 * wherever it comes up.
 */
export const PRICE_TIERS = [
  {
    label: "Single item",
    price: "$99",
    detail: "One couch, fridge, mattress, or similar.",
    fill: "1/8 truck",
  },
  {
    label: "Small load",
    price: "$175–$289",
    detail: "A closet, a small shed, a pile in the garage.",
    fill: "1/4 truck",
  },
  {
    label: "Half truck",
    price: "$400–$650",
    detail: "Full garage or attic cleanout.",
    fill: "1/2 truck",
  },
  {
    label: "Full truck",
    price: "$700–$950",
    detail: "Whole-home or estate cleanout.",
    fill: "Full truck",
  },
] as const;

/** Short anchor used above the fold. */
export const PRICE_ANCHOR = "Most garage cleanouts run $400–$950.";

/**
 * Social proof for the review count.
 *
 * Deliberately NOT a number. The live rating and review count come from the
 * Trustindex widget on the homepage, which updates itself from Google. A second
 * hardcoded number elsewhere on the site only goes stale and then contradicts
 * the widget sitting a few hundred pixels below it — which is exactly what
 * happened with the old 450+/474/485 figures.
 *
 * Trustindex injects its widget as third-party DOM and exposes no count we can
 * safely read, so anywhere outside the widget uses wording that stays true as
 * the count grows. If Trustindex ever exposes a documented API for the count,
 * this is the one place to swap it in.
 */
export const REVIEW_PROOF = "Hundreds";

/** Prefilled body for the photo-quote text message. */
export const SMS_BODY =
  "Hi! I'd like a quote for junk removal. Here's a photo of what needs to go:";

/**
 * Cross-platform sms: link. The "?&body=" form is the pattern that works on
 * both iOS and Android, which disagree on the separator.
 */
export function buildSmsHref(phone: string, body: string): string {
  return `sms:${phone.replace(/[^0-9+]/g, "")}?&body=${encodeURIComponent(body)}`;
}

/** tel: href from a display-formatted number. */
export function buildTelHref(phone: string): string {
  return `tel:${phone.replace(/[^0-9+]/g, "")}`;
}
