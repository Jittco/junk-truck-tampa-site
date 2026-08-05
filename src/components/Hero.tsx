import { Phone, Camera, Star } from "lucide-react";
import heroMainImage from "@/assets/hero-main-page.webp";
import {
  VOICE_PHONE,
  SMS_PHONE,
  PRICE_ANCHOR,
  REVIEW_COUNT,
  SMS_BODY,
  buildSmsHref,
} from "@/config/hero";

/**
 * Above-the-fold hero.
 *
 * Previously this was a full-viewport background image containing a single h1
 * and nothing else — no phone number, no button, no next step. A visitor landed
 * on a photo and a headline and had to scroll before they could act.
 *
 * The layout below keeps Carlos's photo and brand and adds the things a junk
 * removal buyer is actually looking for in the first screen: a way to call, a
 * price signal, and proof other people have used him.
 */
const Hero = () => {
  const telHref = `tel:${VOICE_PHONE.replace(/[^0-9+]/g, "")}`;

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background photo. No react-helmet preload here: it injected a
          <link rel="preload"> client-side, which fires long after the browser
          has already discovered this image, so it did nothing for LCP. The
          eager + fetchPriority="high" attributes below are what actually help. */}
      <div className="absolute inset-0 -z-10">
        <picture>
          <source type="image/webp" srcSet={heroMainImage} sizes="100vw" />
          <img
            src={heroMainImage}
            alt="Junk in the Truck Co. professional junk removal crew at work in Tampa Bay"
            className="h-full w-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </div>

      {/* Gradient rather than a flat wash: keeps the crew photo readable on the
          right while giving the copy on the left enough contrast to drop the
          heavy text-shadow the old headline needed. */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/25" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl text-white">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/25 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-white ring-1 ring-primary/50">
            Same-day &amp; next-day service · Tampa Bay
          </p>

          <h1 className="font-anton text-5xl leading-[1.05] md:text-7xl">
            Junk gone today,
            <br />
            priced before we start
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
            We load it, haul it, and sweep up after — you don&apos;t lift a
            thing, and there&apos;s no dumpster sitting in your driveway for a
            week.
          </p>

          {/* Price anchor. Renders only once Carlos confirms his real starting
              price, because the site currently contradicts itself ($99 vs $150)
              and guessing would make that worse. */}
          {PRICE_ANCHOR && (
            <p className="mt-4 text-lg font-semibold text-white">
              {PRICE_ANCHOR}
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {VOICE_PHONE}
            </a>

            {/* Text-a-photo path. Hidden on md+ because sms: links do nothing
                useful on most desktops, and hidden entirely until a
                photo-capable number exists. */}
            {SMS_PHONE && (
              <a
                href={buildSmsHref(SMS_PHONE, SMS_BODY)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/95 px-7 py-4 text-lg font-bold text-foreground shadow-lg transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
              >
                <Camera className="h-5 w-5" aria-hidden="true" />
                Text a photo, get a price
              </a>
            )}
          </div>

          <div className="mt-7 flex flex-col gap-3 text-sm text-white/90 sm:flex-row sm:items-center sm:gap-6">
            <span className="inline-flex items-center gap-1.5">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#FFC107] text-[#FFC107]"
                  />
                ))}
              </span>
              <span className="font-semibold">
                {REVIEW_COUNT} Google reviews
              </span>
            </span>
            <span>✓ Licensed &amp; insured</span>
            <span>✓ Free on-site estimates</span>
            <span>✓ Locally owned</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
