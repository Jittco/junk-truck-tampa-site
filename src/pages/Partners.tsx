import { Helmet } from "react-helmet";
import { ArrowUpRight, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

/**
 * Partners page.
 *
 * Carlos asked for this rather than a "check out our sister company" banner,
 * and he was right to. Junk in the Truck already ranks for demolition terms and
 * takes inquiries on them, so the goal is not to hand demolition traffic away —
 * it is to have somewhere honest to send the jobs that are genuinely too big,
 * without diluting the demolition pages that are earning their keep.
 *
 * Built as a list rather than a single-company page so a second partner can be
 * added later without a rewrite.
 */

const PARTNERS = [
  {
    name: "DND Demolition",
    tagline: "Large-scale demolition across Tampa Bay",
    url: "https://www.dnddemolition.com",
    phone: "813-252-0639",
    relationship: "Sister company — same family, same Tampa Bay crews",
    theyHandle: [
      "Mobile home demolition and removal",
      "Full structure teardowns",
      "Commercial build-out demolition",
      "Selective and structural demolition",
      "Concrete and foundation removal",
      "Larger commercial projects",
    ],
    weHandle: [
      "Sheds, decks and pergolas",
      "Playsets and swing sets",
      "Fences and gates",
      "Driveways and walkways",
      "Interior demo for remodels",
      "Above-ground pools",
    ],
  },
];

const Partners = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Partners | Junk in the Truck Co — Tampa Bay</title>
        <meta
          name="description"
          content="Junk in the Truck Co works alongside DND Demolition across Tampa Bay. We handle everyday teardowns and haul-away; DND takes on mobile homes, full structures and large commercial demolition."
        />
        <link rel="canonical" href="https://www.junkinthetruckco.com/partners/" />
      </Helmet>

      <Navigation />

      <main className="pt-32">
        <div className="container mx-auto max-w-5xl px-4">
          <Breadcrumbs items={[{ name: "Partners", url: "/partners/" }]} />
        </div>

        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <h1 className="font-anton text-4xl md:text-5xl text-foreground">
              Who we work with
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We do a lot ourselves — junk removal, dumpster rental, and the
              everyday demolition most Tampa Bay homeowners need. When a job is
              bigger than our trucks, we&apos;d rather point you to someone we
              actually trust than take it on and learn on your property.
            </p>
          </div>
        </section>

        {PARTNERS.map((p) => (
          <section key={p.name} className="pb-16 md:pb-20">
            <div className="container mx-auto max-w-5xl px-4">
              <div className="rounded-xl border border-border bg-card p-7 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {p.relationship}
                </p>
                <h2 className="mt-3 font-anton text-3xl md:text-4xl text-foreground">
                  {p.name}
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">{p.tagline}</p>

                {/* Side by side so the dividing line is obvious at a glance.
                    A visitor should be able to place their own job in about
                    three seconds without reading a paragraph. */}
                <div className="mt-9 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="font-anton text-lg text-foreground">
                      We handle it
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {p.weHandle.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-muted-foreground"
                        >
                          <span aria-hidden="true" className="text-primary">
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-anton text-lg text-foreground">
                      {p.name} handles it
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {p.theyHandle.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-muted-foreground"
                        >
                          <span aria-hidden="true" className="text-primary">
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-9 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    Visit {p.name}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={`tel:${p.phone.replace(/[^0-9+]/g, "")}`}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {p.phone}
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="pb-20">
          <div className="container mx-auto max-w-5xl px-4">
            <p className="text-muted-foreground">
              Not sure which of us you need? Call{" "}
              <a
                href="tel:+18448586546"
                className="font-semibold text-foreground hover:text-primary"
              >
                844-858-6546
              </a>{" "}
              and describe the job. We&apos;ll tell you straight — even when the
              answer is the other guys.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Partners;
