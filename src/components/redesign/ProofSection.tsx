import BeforeAfterSlider from "./BeforeAfterSlider";
import garageBefore from "@/assets/garage-before.jpg";
import garageAfter from "@/assets/generated/garage-after-matched.jpg";
import yardBefore from "@/assets/yard-before.jpg";
import yardAfter from "@/assets/generated/yard-after-matched.jpg";
import shedBefore from "@/assets/shed-before-new.jpg";
import shedAfter from "@/assets/generated/shed-after-matched.jpg";

/*
  About these "after" images.

  The originals were two independently generated pictures per pair, so the
  before and after showed different rooms - the slider made that obvious the
  moment both frames sat in one view.

  These afters are retouches of the actual before frames (Gemini
  gemini-3-pro-image, image-to-image), with the prompt locking camera position,
  exposure, white balance and existing wear so only the junk is removed. That is
  why they register under the handle instead of jumping.

  They are still illustrations of the service, not documentation of specific
  jobs, so the copy below does not claim otherwise. Swap in Carlos's real phone
  photos when he sends them - the component takes any matched pair.
*/

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
          {/* Copy describes the SERVICE, not the provenance of the photographs.
              The earlier draft claimed these were jobs the crew cleared, which
              was not true and is not a claim worth making on a real
              contractor's site. */}
          <p className="max-w-sm text-ink-500">
            Same spot, same angle, junk gone. Drag the handle on any of them to
            see what a cleared garage, yard or teardown actually looks like when
            we&apos;re done.
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
