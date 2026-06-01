import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, ChevronRight, CheckCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ServiceLocation } from "@/data/serviceLocations";

interface Props {
  data: ServiceLocation;
}

const PHONE = "844-858-6546";
const PHONE_TEL = "tel:+18448586546";
const BOOK_URL =
  "https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae";

const ServiceLocationTemplate = ({ data: s }: Props) => {
  const url = `https://www.junkinthetruckco.com/services/${s.servicePath}/${s.citySlug}/`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.junkinthetruckco.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.junkinthetruckco.com/services" },
      { "@type": "ListItem", position: 3, name: s.serviceName, item: `https://www.junkinthetruckco.com${s.serviceHref}` },
      { "@type": "ListItem", position: 4, name: s.cityName, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...s.aiAnswers, ...s.faqs].map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.serviceName,
    provider: { "@id": "https://junkinthetruckco.com/#organization" },
    areaServed: {
      "@type": "Place",
      name: `${s.cityName}, FL`,
      address: {
        "@type": "PostalAddress",
        addressLocality: s.cityName,
        addressRegion: "FL",
        postalCode: s.zipCodes[0],
        addressCountry: "US",
      },
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: s.pricing[0]?.price?.replace(/[^0-9]/g, "").slice(0, 3) || "95",
    },
    url,
  };

  return (
    <>
      <Helmet>
        <title>{s.metaTitle} | Junk in the Truck Co</title>
        <meta name="description" content={s.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={s.metaTitle} />
        <meta property="og:description" content={s.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Navigation />

      {/* Breadcrumbs */}
      <nav className="bg-muted/30 border-b border-border" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 py-3 text-sm flex flex-wrap items-center gap-1 text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/services" className="hover:text-primary">Services</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to={s.serviceHref} className="hover:text-primary">{s.serviceName}</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">{s.cityName}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-2 text-primary mb-3">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              {s.cityName} · {s.zipCodes.slice(0, 4).join(" · ")}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{s.h1}</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">{s.intro}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="text-base">
              <a href={PHONE_TEL}>
                <Phone className="h-5 w-5 mr-2" /> Call Now: {PHONE}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base">
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">
                Get Free Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why this service here */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why {s.serviceName} Demand is High in {s.cityName}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{s.whyHere}</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {s.serviceName} Pricing in {s.cityName}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {s.pricing.map((p) => (
              <Card key={p.label}>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-1">{p.label}</div>
                  <div className="text-2xl font-bold text-primary mb-2">{p.price}</div>
                  <div className="text-sm text-muted-foreground">{p.notes}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Flat, upfront pricing — never per-pound. Final quote confirmed on-site or via text photos.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            How {s.serviceName} Works in {s.cityName}
          </h2>
          <div className="space-y-4">
            {s.process.map((p, i) => (
              <div key={p.step} className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{p.step}</h3>
                  <p className="text-muted-foreground">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Local Realities — {s.cityName}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{s.localContext}</p>
        </div>
      </section>

      {/* AI Answer Blocks */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Quick Answers for {s.cityName} Homeowners
          </h2>
          <div className="space-y-6">
            {s.aiAnswers.map((a) => (
              <div key={a.question}>
                <h3 className="text-lg font-semibold mb-2">{a.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{a.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job story */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Recent {s.cityName} Job</h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2 flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                {s.jobStory.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{s.jobStory.summary}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {s.cityName} {s.serviceName} FAQs
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {s.faqs.map((f, i) => (
              <AccordionItem key={f.question} value={`f-${i}`}>
                <AccordionTrigger className="text-left">{f.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold mb-4">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to={s.serviceHref}
              className="px-4 py-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary text-sm"
            >
              All {s.serviceName} services
            </Link>
            <Link
              to={s.cityHref}
              className="px-4 py-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary text-sm"
            >
              {s.cityName} service area
            </Link>
            <Link
              to="/services"
              className="px-4 py-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary text-sm"
            >
              All services
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for {s.serviceName} in {s.cityName}?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Flat-rate, fully insured, locally owned. Call now or get a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base">
              <a href={PHONE_TEL}>
                <Phone className="h-5 w-5 mr-2" /> Call Now: {PHONE}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">
                Get Free Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServiceLocationTemplate;
