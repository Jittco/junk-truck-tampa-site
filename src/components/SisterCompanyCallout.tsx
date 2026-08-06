import { ArrowUpRight } from "lucide-react";

/**
 * Size-qualified referral to DND Demolition.
 *
 * Junk in the Truck keeps its demolition work: it already ranks for those terms
 * and takes inquiries on them, and fences, decks, sheds, playsets, driveways and
 * interior tear-outs are jobs it wants. Removing or de-emphasising that would
 * throw away earned rankings and hand away revenue.
 *
 * So this is deliberately NOT a "check out our sister company" banner. It only
 * speaks to visitors whose job is bigger than this crew takes — mobile homes,
 * full structures, large commercial teardowns. Everyone else should never feel
 * redirected.
 *
 * Placement matters as much as the copy: this belongs LOW on demolition pages,
 * after the services have been presented. High placement would leak small jobs
 * he can do to a company that does not want them either.
 */
const SisterCompanyCallout = () => {
  return (
    <section className="py-14 md:py-16" aria-labelledby="sister-company-heading">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="rounded-xl border border-border bg-card p-7 md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Larger demolition projects
          </p>

          <h2
            id="sister-company-heading"
            className="mt-3 font-anton text-2xl md:text-3xl text-foreground"
          >
            Got something bigger than a shed?
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            We handle the everyday teardowns ourselves — fences, decks, sheds,
            playsets, pergolas, driveways and interior demo. If your project is
            a mobile home, a full structure, or a larger commercial teardown,
            that&apos;s our sister company&apos;s wheelhouse.
          </p>

          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            <strong className="text-foreground">DND Demolition</strong> is owned
            and run by the same family, works the same Tampa Bay area, and takes
            on the heavy stuff. Same people, bigger equipment.
          </p>

          <a
            href="https://www.dnddemolition.com"
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
          >
            See DND Demolition
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <p className="mt-5 text-sm text-muted-foreground">
            Not sure which side of the line your job falls on? Call us at{" "}
            <a
              href="tel:+18448586546"
              className="font-semibold text-foreground hover:text-primary"
            >
              844-858-6546
            </a>{" "}
            and we&apos;ll tell you straight — even if the answer is the other guys.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SisterCompanyCallout;
