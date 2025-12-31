import React from "react";
import { Button } from "@/components/ui/button";
type HowItWorksProps = {
  step1Img: string; // book/schedule
  step2Img: string; // on-site estimate
  step3Img: string; // hauling/clean result
  className?: string;
};
const BOOK_URL = "https://book.housecallpro.com/book/JunkintheTrunkco/2eef934dbbae44e09e5d7b3ec87330ae";
const PHONE = "844-858-6546";
export default function HowItWorks({
  step1Img,
  step2Img,
  step3Img,
  className = ""
}: HowItWorksProps) {
  const steps = [{
    title: "Book Your Tampa Haul",
    desc: "Call or book online to choose a window that fits your schedule. We offer same-day junk removal for everything from old furniture removal to full property cleanouts.",
    img: step1Img
  }, {
    title: "Get an Upfront Price",
    desc: "Our team arrives on time to provide a transparent, on-site quote. Whether you have construction debris or a single appliance, you'll get a clear price before any work begins.",
    img: step2Img
  }, {
    title: "Watch the Clutter Vanish",
    desc: "Once you say 'go,' we handle the heavy lifting, loading, and sweeping. We prioritize recycling and donating to local Tampa facilities to keep our Florida communities clean.",
    img: step3Img
  }];
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "3 Simple Steps to Professional Junk Removal in Tampa Bay — Junk in the Truck Co",
    "description": "From residential cleanouts to commercial hauling, Junk in the Truck Co. makes clearing clutter fast and stress-free with reliable, eco-conscious hauling.",
    "step": steps.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.title,
      "text": s.desc,
      "image": s.img
    })),
    "performer": {
      "@type": "LocalBusiness",
      "name": "Junk in the Truck Co",
      "telephone": PHONE
    }
  };
  return <section className={`w-full py-12 md:py-16 lg:py-20 bg-background ${className}`} aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="how-it-works-heading" className="font-anton text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            3 Simple Steps to Professional Junk Removal in Tampa Bay
          </h2>

          <p className="font-inter text-lg text-foreground/80 max-w-2xl mx-auto">
            From residential cleanouts to commercial hauling across the Tampa Bay area, Junk in the Truck Co makes clearing clutter fast and stress-free. Our local crews provide reliable, eco-conscious junk removal on your schedule.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => <li key={idx} className="flex flex-col items-center text-center">
              <div className="rounded-full overflow-hidden shadow-sm ring-1 ring-border/20 mb-6">
                <div className="h-[104px] w-[104px] lg:h-32 lg:w-32">
                  <img src={step.img} alt={step.title} className="h-full w-full object-cover" loading={idx > 1 ? "lazy" : "eager"} decoding="async" />
                </div>
              </div>

              <h3 className="font-anton text-xl md:text-2xl text-foreground mb-3">{step.title}</h3>
              <p className="font-inter text-sm text-foreground/80 leading-relaxed mb-4">{step.desc}</p>

              <span className="inline-flex items-center rounded-full border border-border/20 px-3 py-1 text-xs text-foreground/60 bg-background/50">
                Step {idx + 1}
              </span>
            </li>)}
        </ol>

        <div className="text-center">
          <p className="font-anton text-xl md:text-2xl text-foreground mb-6">
            Ready to get rid of your junk today?
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-4">
            <div className="flex flex-col items-center">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}>
                  📞 Call Now Get a Quote in 60 Seconds
                </a>
              </Button>
              <span className="font-inter text-xs text-foreground/60 mt-1">Fast response • No obligation</span>
            </div>
            <Button variant="outline" asChild size="lg" className="w-full sm:w-auto">
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">📅 Request Your Free Quote Online</a>
            </Button>
          </div>
          <p className="font-inter text-sm text-foreground/60">
            Proudly serving: Tampa • St. Petersburg • Clearwater • Brandon • Riverview • Town 'n' Country • Westchase
          </p>
        </div>

        <script type="application/ld+json">{JSON.stringify(howToJsonLd)}</script>
      </div>
    </section>;
}