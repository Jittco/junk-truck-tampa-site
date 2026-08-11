import { ArrowUpRight, Phone } from "lucide-react";
import dndLogo from "@/assets/dnd-logo.png";

/**
 * Size-qualified referral to DND Demolition.
 *
 * WHY IT LOOKS LIKE THIS
 *
 * The first version used Junk in the Truck's own card styling and disappeared
 * into a page already full of white cards on white. A referral has to read as
 * "this is someone else" to work at all, so it now wears DND's identity: their
 * deep navy (#061638, converted from the oklch value in their own stylesheet),
 * their brushed-steel logo, their phone number. Against a green-and-white page
 * the navy band is the only dark thing on screen and stops the scroll.
 *
 * WHAT IT DELIBERATELY DOES NOT DO
 *
 * Junk in the Truck keeps its demolition work — it ranks for those terms and
 * takes inquiries on them, and fences, decks, sheds, playsets and interior
 * tear-outs are jobs it wants. So this only addresses visitors whose job is
 * bigger than this crew handles, and it sits LOW on the page, after the
 * services. Making it louder is fine; making it earlier is not.
 */
const SisterCompanyCallout = () => {
  return (
    <section
      className="bg-[#061638] py-14 md:py-20"
      aria-labelledby="sister-company-heading"
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,180px)_1fr] md:gap-12">
          {/* The logo is brushed steel on transparent — it only reads on a dark
              field, which is the other reason this band is navy. */}
          <img
            src={dndLogo}
            alt="DND Demolition"
            width={560}
            height={560}
            loading="lazy"
            decoding="async"
            className="mx-auto h-auto w-40 md:mx-0 md:w-full"
          />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9aa4b8]">
              Larger demolition projects
            </p>

            <h2
              id="sister-company-heading"
              className="mt-3 font-anton text-3xl text-white md:text-4xl"
            >
              Got something bigger than a shed?
            </h2>

            <p className="mt-5 max-w-2xl leading-relaxed text-[#c3cad8]">
              We handle the everyday teardowns ourselves — fences, decks, sheds,
              playsets, pergolas, driveways and interior demo. If your project
              is a mobile home, a full structure, or a larger commercial
              teardown, that&apos;s our sister company&apos;s wheelhouse.
            </p>

            <p className="mt-4 max-w-2xl leading-relaxed text-[#c3cad8]">
              <strong className="text-white">DND Demolition</strong> is owned and
              run by the same family, works the same Tampa Bay area, and takes on
              the heavy stuff. Same people, bigger equipment.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://www.dnddemolition.com"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-[#061638] transition-colors hover:bg-[#e6e9f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                See DND Demolition
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="tel:+18132520639"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#474d58] px-6 py-3 font-semibold text-white transition-colors hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                813-252-0639
              </a>
            </div>

            <p className="mt-6 text-sm text-[#8b93a7]">
              Not sure which side of the line your job falls on? Call us at{" "}
              <a
                href="tel:+18448586546"
                className="font-semibold text-white hover:underline"
              >
                844-858-6546
              </a>{" "}
              and we&apos;ll tell you straight — even if the answer is the other
              guys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SisterCompanyCallout;
