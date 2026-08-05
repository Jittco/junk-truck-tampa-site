/**
 * Hero configuration — the three values that were unknown when the hero was
 * built, isolated here so they can be filled in without touching layout code.
 *
 * Deliberately scoped to the hero. The voice phone number is hardcoded in ~32
 * other files across this repo; consolidating all of that is a separate change
 * and not worth the merge friction with Lovable's two-way sync right now.
 */

/** Voice line. Confirmed voice-only — it does NOT accept SMS or MMS. */
export const VOICE_PHONE = "844-858-6546";

/**
 * Number that can receive picture messages, for the "text a photo" quote path.
 *
 * Carlos confirmed he has a line that accepts texts and photos but had not
 * provided it yet. While this is null the text-a-photo button does not render
 * at all — better to show nothing than to point customers at a number that
 * silently drops their message.
 *
 * To enable: set this to the digits only, e.g. "8135551234".
 */
export const SMS_PHONE: string | null = null;

/**
 * Price anchor shown under the headline.
 *
 * Left null until Carlos settles the contradiction already live on the site:
 * the homepage FAQ and /pricing say single items start at $99, while the
 * Brandon, USF, Riverview, Hyde Park and South Tampa pages say $150. Publishing
 * either number before he confirms risks undercutting his margin or repeating
 * the bait-and-switch this work is meant to remove.
 *
 * Example once known: "Most garage cleanouts $400–$800 · Single items from $150"
 */
export const PRICE_ANCHOR: string | null = null;

/**
 * Review count claim.
 *
 * The review widget embedded further down the homepage reports "Based on 485
 * reviews", so "450+" is comfortably true and stays true as the count grows.
 * Deliberately understated rather than tracking the exact number, since nothing
 * here reads from the live profile and a hardcoded exact figure goes stale.
 */
export const REVIEW_COUNT = "450+";

/** Prefilled body for the photo-quote text message. */
export const SMS_BODY =
  "Hi! I'd like a quote for junk removal. Here's a photo of what needs to go:";

/**
 * Builds a cross-platform sms: link. The "?&body=" form is the pattern that
 * works on both iOS and Android, which disagree on the separator.
 */
export function buildSmsHref(phone: string, body: string): string {
  return `sms:${phone}?&body=${encodeURIComponent(body)}`;
}
