import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Phone, ChevronRight, CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Neighborhood } from "@/data/neighborhoods";

interface Props {
  neighborhood: Neighborhood;
}

const PHONE = "844-858-6546";
const PHONE_TEL = "tel:+18448586546";
const BOOK_URL =
  "https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae";

const NeighborhoodTemplate = ({ neighborhood: n }: Props) => {
  const url = `https://www.junkinthetruckco.com/service-areas/south-tampa/${n.slug}`;
  const parentUrl = `https://www.junkinthetruckco.com/service-areas/${n.parentSlug}/`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.junkinthetruckco.com/" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.junkinthetruckco.com/service-areas/" },
      { "@type": "ListItem", position: 3, name: n.parentCity, item: parentUrl },
      { "@type": "ListItem", position: 4, name: n.name, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...n.aiAnswers, ...n.faqs].map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Junk Removal",
    provider: { "@id": "https://junkinthetruckco.com/#organization" },
    areaServed: {
      "@type": "Place",
      name: `${n.name}, ${n.parentCity}, Tampa, FL`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tampa",
        addressRegion: "FL",
        postalCode: n.zipCodes[0],
        addressCountry: "US",
      },
    },
    url,
  };

  return (
    <>
      <Helmet>
        <title>{n.metaTitle} | Junk in the Truck Co</title>
        <meta name="description" content={n.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={n.metaTitle} />
        <meta property="og:description" content={n.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="pt-32 pb-4 bg-muted/30">
          <div className="container mx-auto px-4">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <ChevronRight className="h-4 w-4" />
              <li><Link to="/service-areas/" className="hover:text-primary">Service Areas</Link></li>
              <ChevronRight className="h-4 w-4" />
              <li>
                <Link to={`/service-areas/${n.parentSlug}/`} className="hover:text-primary">
                  {n.parentCity}
                </Link>
              </li>
              <ChevronRight className="h-4 w-4" />
              <li className="text-foreground font-medium">{n.name}</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">
                {n.parentCity} · ZIP {n.zipCodes.join(", ")}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-anton text-heading-color mb-6">
              {n.name} Junk Removal
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {n.hero.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cta-button text-lg px-8 py-4">
                <a href={PHONE_TEL}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: {PHONE}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">
                  Get Free Quote
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* About this neighborhood */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-anton text-heading-color mb-6">
              About Junk Removal in {n.name}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {n.whatMakesItUnique}
            </p>

            <h3 className="text-xl font-anton text-heading-color mb-4">
              Homes and properties we work on in {n.name}
            </h3>
            <ul className="space-y-2 mb-8">
              {n.homeAndPropertyTypes.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <Home className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-anton text-heading-color mb-2">Access & logistics</h3>
            <p className="text-muted-foreground leading-relaxed">{n.logisticsNotes}</p>
          </div>
        </section>

        {/* AI Answer Block — optimized for Google AI Overviews, ChatGPT, Perplexity */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-anton text-heading-color mb-8 text-center">
              Quick Answers — {n.name} Junk Removal
            </h2>
            <div className="space-y-6">
              {n.aiAnswers.map((qa, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-heading-color mb-3">
                      {qa.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{qa.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Common projects */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-anton text-heading-color mb-4 text-center">
              Common Junk Removal Projects in {n.name}
            </h2>
            <p className="text-muted-foreground text-center mb-12 text-lg">
              What we get called for most often in your neighborhood
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {n.commonProjects.map((p, i) => (
                <Card key={i} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-anton text-heading-color mb-3">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job stories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-anton text-heading-color mb-8 text-center">
              Recent Jobs in {n.name}
            </h2>
            <div className="space-y-6">
              {n.jobStories.map((j, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-heading-color mb-2">{j.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{j.summary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links: top services */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-anton text-heading-color mb-4 text-center">
              Services Available in {n.name}
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Every service we offer is available throughout {n.name} and the rest of {n.parentCity}.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {n.topServices.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}/`}
                  className="block p-4 border border-border rounded-lg hover:border-primary hover:shadow-md transition-all text-center"
                >
                  <span className="font-medium text-foreground">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-anton text-heading-color mb-8 text-center">
              {n.name} Junk Removal FAQs
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {n.faqs.map((f, i) => (
                <AccordionItem key={i} value={`f-${i}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold py-5">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Landmarks + nearby */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-anton text-heading-color mb-4">
                Landmarks Near Our {n.name} Jobs
              </h2>
              <ul className="space-y-2">
                {n.landmarks.map((l, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-anton text-heading-color mb-4">
                Nearby Neighborhoods We Serve
              </h2>
              <ul className="space-y-2">
                {n.nearbyNeighborhoods.map((nb, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    {nb}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm">
                <Link to={`/service-areas/${n.parentSlug}/`} className="text-primary hover:underline">
                  ← Back to {n.parentCity} service area
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-anton mb-6">
              Ready to Clear Out Your {n.name} Property?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Free, no-obligation quotes. Same-day service available across {n.parentCity}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
                <a href={PHONE_TEL}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: {PHONE}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">
                  Get Free Quote Online
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default NeighborhoodTemplate;
