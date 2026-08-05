import { Phone, Camera } from "lucide-react";
import heroMainImage from "@/assets/hero-main-page.webp";
import {
  VOICE_PHONE,
  SMS_PHONE,
  SMS_VERIFIED,
  PRICE_ANCHOR,
  REVIEW_COUNT,
  SMS_BODY,
  buildSmsHref,
  buildTelHref,
} from "@/config/hero";

/**
 * Hero.
 *
 * Deliberately not the centered-headline-over-a-photo layout the rest of the
 * category uses. The type is set hard left at a size that crowds the frame, the
 * photo bleeds off the right edge, and an orange rule runs the full width under
 * the whole thing — the page should read as a poster before it reads as a
 * website.
 *
 * Content order follows what a junk-removal buyer is actually anxious about, in
 * order: can you come today, what will it cost, how do I reach you, and has
 * anyone else trusted you.
 */
const HeroRedesign = () => {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900">
      {/* Photo bleeds from the right. On mobile it sits behind everything at
          low contrast; from lg up it occupies its own column so the headline
          never has to fight the image for legibility. */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[52%]">
        <img
          src={heroMainImage}
          alt="Junk in the Truck Co crew loading a box truck in Tampa Bay"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        {/* Scrim: heavy on mobile where text overlaps the photo, and a hard
            left-edge fade on desktop so the photo dissolves into the ink
            rather than sitting in a box. */}
        <div className="absolute inset-0 bg-ink-900/75 lg:hidden" />
        {/* Explicit stops matter here. Without them the ramp spreads across the
            whole photo column and buries the crew and the branded truck - the
            two things actually worth showing. This keeps the wash tight to the
            left seam where the headline needs contrast, then clears by 55%. */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ink-900 from-0% via-ink-900/35 via-20% to-transparent to-55% lg:block" />
      </div>

      {/* Top padding clears the two-tier fixed nav (~128px). The old layout got
          this via pt-32 on <main>, which pushed the hero photo below the nav
          instead of letting it run behind it. */}
      <div className="relative mx-auto grid max-w-7xl gap-y-10 px-5 pb-16 pt-40 sm:px-8 lg:grid-cols-[minmax(0,1fr)_44%] lg:pb-24 lg:pt-48">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 font-display text-[0.7rem] uppercase tracking-[0.3em] text-brand-orange">
            <span className="h-px w-8 bg-brand-orange" aria-hidden="true" />
            Tampa Bay · Same &amp; next day
          </p>

          <h1 className="mt-6 font-display text-[clamp(2.75rem,8.5vw,5.75rem)] uppercase leading-[0.88] tracking-[-0.01em] text-sand-50">
            Gone today.
            <br />
            <span className="text-brand-orange">Priced</span> before
            <br />
            we lift a thing.
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-sand-200">
            You point. We carry it down the stairs, sweep up after, and haul it
            off — no dumpster parked in your driveway for a week.
          </p>

          {PRICE_ANCHOR && (
            <p className="mt-5 inline-block border-l-2 border-brand-orange pl-4 font-display text-lg uppercase tracking-wide text-sand-50">
              {PRICE_ANCHOR}
            </p>
          )}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildTelHref(VOICE_PHONE)}
              className="group inline-flex items-center justify-center gap-3 bg-brand-green px-8 py-5 font-display text-lg uppercase tracking-wide text-ink-900 transition-colors duration-200 hover:bg-brand-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-50"
            >
              <Phone
                className="h-5 w-5 transition-transform duration-300 ease-out group-hover:-rotate-12"
                aria-hidden="true"
              />
              Call {VOICE_PHONE}
            </a>

            {SMS_PHONE && (
              <a
                href={buildSmsHref(SMS_PHONE, SMS_BODY)}
                className="inline-flex items-center justify-center gap-3 border border-sand-50/35 px-8 py-5 font-display text-lg uppercase tracking-wide text-sand-50 transition-colors duration-200 hover:border-brand-orange hover:text-brand-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-50 md:hidden"
              >
                <Camera className="h-5 w-5" aria-hidden="true" />
                Text a photo
              </a>
            )}
          </div>

          {/* The text-a-photo promise, spelled out. On desktop sms: links do
              nothing, so this reads as an instruction rather than a button. */}
          {SMS_PHONE && (
            <p className="mt-4 text-sm text-sand-200/80">
              <Camera
                className="mr-1.5 inline h-4 w-4 align-[-2px] text-brand-orange"
                aria-hidden="true"
              />
              Snap a photo of your pile, text it to{" "}
              <a
                href={buildSmsHref(SMS_PHONE, SMS_BODY)}
                className="font-semibold text-sand-50 underline underline-offset-4 hover:text-brand-orange"
              >
                {SMS_PHONE}
              </a>
              , and get a price back — no walkthrough, no sales call.
              {!SMS_VERIFIED && (
                <span className="mt-1 block text-xs text-brand-orange">
                  Preview only — pending a text-capable number from Carlos.
                </span>
              )}
            </p>
          )}
        </div>

        {/* Proof rail. Sits in the photo column on desktop so the numbers read
            against the truck rather than floating in dead space. */}
        <div className="self-end lg:pb-2">
          <dl className="grid grid-cols-3 gap-px overflow-hidden border border-sand-50/15 bg-sand-50/15 lg:ml-auto lg:max-w-sm">
            {[
              { n: REVIEW_COUNT, l: "Google reviews" },
              { n: "5.0", l: "Star average" },
              { n: "Same day", l: "Most jobs" },
            ].map((s) => (
              <div key={s.l} className="bg-ink-900/85 px-4 py-5 text-center">
                <dt className="font-display text-2xl leading-none text-sand-50">
                  {s.n}
                </dt>
                <dd className="mt-2 text-[0.7rem] uppercase tracking-[0.12em] text-sand-200/75">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Full-bleed brand rule closing the section. */}
      <div className="h-1.5 w-full bg-brand-orange" />
    </section>
  );
};

export default HeroRedesign;
