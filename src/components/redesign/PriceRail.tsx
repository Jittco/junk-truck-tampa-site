import { PRICE_TIERS, VOICE_PHONE, buildTelHref } from "@/config/hero";

/**
 * Price ladder.
 *
 * The single biggest gap against Tampa competitors: Dump My Junk, Junk Punks
 * and LoadUp all publish tiers, and this site publishes none above the fold.
 * The buyer's first question is "what will this cost", and refusing to answer
 * it is what sends them to the next tab.
 *
 * Presented as a rail of hard-edged columns rather than pricing "cards" —
 * no shadows, no rounding, no floating boxes. It should read like a printed
 * rate sheet taped to the side of the truck.
 */
const PriceRail = () => {
  return (
    <section className="bg-sand-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="flex items-center gap-3 font-display text-[0.7rem] uppercase tracking-[0.3em] text-brand-orange">
              <span className="h-px w-8 bg-brand-orange" aria-hidden="true" />
              What it costs
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] text-ink-900">
              We price by how much
              <br className="hidden sm:block" /> truck you fill
            </h2>
          </div>
          <p className="max-w-sm text-ink-500">
            Not by the hour, and not by the item. You get the number before we
            start — if you don&apos;t like it, we drive away and it costs you
            nothing.
          </p>
        </div>

        {/* Rate sheet. Dividers rather than card borders so it reads as one
            continuous table on desktop and stacks cleanly on mobile. */}
        <div className="mt-14 grid grid-cols-1 border-t border-ink-900/15 sm:grid-cols-2 lg:grid-cols-4">
          {PRICE_TIERS.map((tier, i) => (
            <div
              key={tier.label}
              className="group relative border-b border-ink-900/15 px-0 py-8 sm:px-6 lg:border-l lg:first:border-l-0 lg:first:pl-0"
            >
              {/* Orange marker that fills on hover — the only motion in the
                  section, so it reads as intent rather than decoration. */}
              <span
                className="absolute left-0 top-0 h-0.5 w-0 bg-brand-orange transition-[width] duration-500 ease-out group-hover:w-full"
                aria-hidden="true"
              />
              <p className="font-display text-[0.7rem] uppercase tracking-[0.2em] text-ink-300">
                {String(i + 1).padStart(2, "0")} · {tier.fill}
              </p>
              <p className="mt-4 font-display text-3xl uppercase leading-none text-ink-900">
                {tier.label}
              </p>
              <p className="mt-3 font-display text-4xl leading-none text-brand-orange">
                {tier.price}
              </p>
              <p className="mt-4 max-w-[26ch] text-sm leading-relaxed text-ink-500">
                {tier.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <a
            href={buildTelHref(VOICE_PHONE)}
            className="inline-flex items-center justify-center bg-ink-900 px-8 py-4 font-display text-base uppercase tracking-wide text-sand-50 transition-colors duration-200 hover:bg-brand-orange hover:text-ink-900"
          >
            Get your number now
          </a>
          <p className="text-sm text-ink-500">
            Free estimate. No obligation. Most quotes take under two minutes on
            the phone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceRail;
