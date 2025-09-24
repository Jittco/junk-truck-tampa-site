import React from "react";
import { Button } from "@/components/ui/button";
type HowItWorksProps = {
  step1Img: string; // schedule (calendar/phone/booking)
  step2Img: string; // on-site estimate
  step3Img: string; // hauling/truck
  step4Img: string; // clean result
  className?: string;
};
const BOOK_URL = "https://book.housecallpro.com/book/JunkintheTrunkco/2eef934dbbae44e09e5d7b3ec87330ae";
const PHONE = "844-858-6546";
export default function HowItWorks({
  step1Img,
  step2Img,
  step3Img,
  step4Img,
  className = ""
}: HowItWorksProps) {
  const steps = [{
    title: "Schedule Your Appointment",
    desc: "Book online in seconds or call us to pick a time that works for you. Same‑day and next‑day junk removal often available.",
    img: step1Img
  }, {
    title: "On‑Site Estimate",
    desc: "Our friendly team arrives on time, reviews what you'd like removed, and gives a transparent, upfront estimate before any work begins.",
    img: step2Img
  }, {
    title: "We Haul Everything Away",
    desc: "Approve the quote and we get to work immediately—safe lifting, quick loading, careful clean‑up, and responsible disposal or recycling.",
    img: step3Img
  }, {
    title: "Reclaim Your Space",
    desc: "Enjoy a clutter‑free home, yard, or office. Fast, fair, and hassle‑free junk removal from a local team you can trust.",
    img: step4Img
  }];
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Junk Removal Works — Junk in the Truck Co",
    "description": "Simple, transparent junk removal: book online or call, get a fair on‑site estimate, we haul everything away, and you reclaim your space.",
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
            How Our Junk Removal Service Works
          </h2>

          <p className="font-inter text-lg text-foreground/80 max-w-2xl mx-auto">
            Junk in the Truck Co makes junk removal simple and stress‑free in Tampa Bay:
            schedule your appointment, get a fair on‑site estimate, we haul everything away,
            and you reclaim your space. Fast, friendly, and transparent.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
          <p className="font-inter text-lg text-foreground mb-6">
            Ready to see how easy it is?
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">📅 Get Free Quote</a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}>
                📞 Call {PHONE}
              </a>
            </Button>
          </div>
        </div>

        <script type="application/ld+json">{JSON.stringify(howToJsonLd)}</script>
      </div>
    </section>;
}