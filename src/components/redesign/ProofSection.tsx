import BeforeAfterSlider from "./BeforeAfterSlider";
import garageBefore from "@/assets/garage-before.jpg";
import garageAfter from "@/assets/garage-after.jpg";
import yardBefore from "@/assets/yard-before.jpg";
import yardAfter from "@/assets/yard-after.jpg";
import shedBefore from "@/assets/shed-before-new.jpg";
import shedAfter from "@/assets/shed-after-new.jpg";

const JOBS = [
  {
    before: garageBefore,
    after: garageAfter,
    alt: "Two-car garage cleanout",
    caption: "Two-car garage · Tampa",
    duration: "3 hours",
  },
  {
    before: yardBefore,
    after: yardAfter,
    alt: "Yard debris haul-off",
    caption: "Yard debris · Brandon",
    duration: "half a day",
  },
  {
    before: shedBefore,
    after: shedAfter,
    alt: "Backyard shed demolition and removal",
    caption: "Shed teardown · Riverview",
    duration: "one visit",
  },
];

/**
 * Before/after proof.
 *
 * Moved high on the page on purpose. For junk removal the transformation is
 * the entire product, and photographic proof outperforms any amount of copy
 * about being licensed and insured. The existing site buries these below four
 * sections of text and hides them in a carousel.
 *
 * The first pair is given the full width because one convincing image beats
 * three small ones; the remaining two sit in a row underneath.
 */
const ProofSection = () => {
  const [lead, ...rest] = JOBS;

  return (
    <section className="bg-sand-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 font-display text-[0.7rem] uppercase tracking-[0.3em] text-brand-orange">
              <span className="h-px w-8 bg-brand-orange" aria-hidden="true" />
              Real jobs, real crews
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] text-ink-900">
              Drag it. That&apos;s
              <br className="hidden sm:block" /> the whole pitch.
            </h2>
          </div>
          {/*
            ⚠️ PLACEHOLDER COPY — DO NOT SHIP.

            This originally read "No stock photography and no staging. These are
            Tampa Bay jobs our own crew cleared." That claim is not true of the
            current images: the before and after in each pair are visibly
            different rooms, and the project's Lovable history shows these
            assets were AI-generated ("create an AI kitchen picture", "create a
            commercial selective demo ai picture").

            Making that claim on a real contractor's site is a liability, so it
            is removed until Carlos supplies genuine paired photos. A drag
            comparison only works when both frames are shot from the same spot,
            which is also why these pairs read as fake — the slider is doing its
            job and exposing the mismatch.
          */}
          <p className="max-w-sm text-ink-500">
            Sample layout only — awaiting real job photos. Each pair needs a
            before and after shot from the same spot so the slider lines up.
          </p>
        </div>

        <div className="mt-14">
          <BeforeAfterSlider {...lead} />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {rest.map((job) => (
            <BeforeAfterSlider key={job.caption} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
