import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, CheckCircle, Users, Award, Leaf, Star, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RelatedContent from "@/components/RelatedContent";
import { ServiceArea } from "@/data/serviceAreas";
import { residentialServices } from "@/data/services";

interface ServiceAreaTemplateProps {
  area: ServiceArea;
}

const PHONE = "844-858-6546";
const PHONE_TEL = "tel:+18448586546";
const BOOK_URL =
  "https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae";

const ServiceAreaTemplate = ({ area }: ServiceAreaTemplateProps) => {
  const url = `https://www.junkinthetruckco.com/service-areas/${area.slug}-${area.state.toLowerCase()}/`;
  const pageTitle = area.metaTitle ?? `Junk Removal in ${area.name}, ${area.state}`;
  const metaDescription =
    area.metaDescription ??
    `Professional junk removal services in ${area.name}, ${area.state}. Same-day service available. Eco-friendly disposal and upfront pricing.`;

  const featuredServices = residentialServices.slice(0, 6);

  const benefits = [
    { icon: <Clock className="h-6 w-6 text-primary" />, title: "Same-Day Service", description: `Fast response times throughout ${area.name}. Most jobs completed same-day.` },
    { icon: <Users className="h-6 w-6 text-primary" />, title: "Local Team", description: `Our crew knows ${area.name} well and provides personalized service.` },
    { icon: <Award className="h-6 w-6 text-primary" />, title: "Upfront Pricing", description: "No hidden fees. You know the cost before we start working." },
    { icon: <Leaf className="h-6 w-6 text-primary" />, title: "Eco-Friendly", description: "We donate and recycle whenever possible to protect the environment." },
    { icon: <Star className="h-6 w-6 text-primary" />, title: "Fully Insured", description: "Licensed, bonded, and insured for your peace of mind." },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.junkinthetruckco.com/" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.junkinthetruckco.com/service-areas/" },
      { "@type": "ListItem", position: 3, name: `${area.name}, ${area.state}`, item: url },
    ],
  };

  const allFaqs = [...(area.aiAnswers ?? []), ...area.faq];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((q) => ({
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
      name: `${area.name}, ${area.state}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: area.name,
        addressRegion: area.state,
        postalCode: area.zipCodes?.[0],
        addressCountry: "US",
      },
    },
    url,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Junk Removal Services",
      itemListElement: featuredServices.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.shortDescription,
        },
      })),
    },
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Junk in the Truck Co</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
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
              <li className="text-foreground font-medium">{area.name}, {area.state}</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative py-16 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-primary font-medium">
                  Service Area{area.zipCodes ? ` · ZIP ${area.zipCodes.join(", ")}` : ""}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-anton text-heading-color mb-6">
                Junk Removal in {area.name}, {area.state}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {area.description}
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
          </div>
        </section>

        {/* About this area */}
        {area.whatMakesItUnique && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-anton text-heading-color mb-6">
                About Junk Removal in {area.name}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {area.whatMakesItUnique}
              </p>

              {area.homeAndPropertyTypes && area.homeAndPropertyTypes.length > 0 && (
                <>
                  <h3 className="text-xl font-anton text-heading-color mb-4">
                    Properties we work on in {area.name}
                  </h3>
                  <ul className="space-y-2 mb-8">
                    {area.homeAndPropertyTypes.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <Home className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {area.logisticsNotes && (
                <>
                  <h3 className="text-xl font-anton text-heading-color mb-2">Access & logistics</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.logisticsNotes}</p>
                </>
              )}
            </div>
          </section>
        )}

        {/* AI Answer Block */}
        {area.aiAnswers && area.aiAnswers.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-anton text-heading-color mb-8 text-center">
                Quick Answers — {area.name} Junk Removal
              </h2>
              <div className="space-y-6">
                {area.aiAnswers.map((qa, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-heading-color mb-3">{qa.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{qa.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Common Projects */}
        {area.commonProjects && area.commonProjects.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl font-anton text-heading-color mb-4 text-center">
                Common Junk Removal Projects in {area.name}
              </h2>
              <p className="text-muted-foreground text-center mb-12 text-lg">
                What we get called for most often in your area
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {area.commonProjects.map((p, i) => (
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
        )}

        {/* Job Stories */}
        {area.jobStories && area.jobStories.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-anton text-heading-color mb-8 text-center">
                Recent Jobs in {area.name}
              </h2>
              <div className="space-y-6">
                {area.jobStories.map((j, i) => (
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
        )}

        {/* Map */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-anton text-heading-color mb-8 text-center">
                Our Service Area in {area.name}
              </h2>
              <div className="map-wrap mb-8">
                <iframe
                  loading="lazy"
                  src={`https://www.google.com/maps?q=${area.mapQuery}&output=embed&z=12`}
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  title={`Map of ${area.name}, ${area.state}`}
                ></iframe>
              </div>
              {area.nearbyAreas && area.nearbyAreas.length > 0 && (
                <div className="text-center">
                  <p className="text-muted-foreground">
                    We also serve nearby areas: {area.nearbyAreas.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-anton text-heading-color mb-4 text-center">
                Popular Junk Removal Services in {area.name}
              </h2>
              <p className="text-muted-foreground text-center mb-12 text-lg">
                Professional junk removal solutions for every need
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredServices.map((service, index) => (
                  <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-anton text-heading-color mb-3">{service.name}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{service.shortDescription}</p>
                      <Button asChild variant="outline" className="w-full">
                        <Link to={`/services/${service.slug}/`}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-anton text-heading-color mb-4 text-center">
                Why Choose Junk in the Truck Co in {area.name}?
              </h2>
              <p className="text-muted-foreground text-center mb-12 text-lg">
                Local expertise with professional service
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.slice(0, 5).map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-anton text-heading-color mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-anton text-heading-color mb-8 text-center">
              Frequently Asked Questions — {area.name} Junk Removal
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {area.faq.map((item, index) => (
                <AccordionItem key={index} value={`f-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold py-5">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Local Resources */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-anton text-heading-color mb-8 text-center">
                Local {area.name} Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {area.localResources.map((resource, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-anton text-heading-color mb-3">{resource.name}</h3>
                      <p className="text-muted-foreground mb-4">{resource.description}</p>
                      <Button asChild variant="outline" className="w-full">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-anton mb-6">Ready to Clear Out Your Junk in {area.name}?</h2>
              <p className="text-xl mb-8 opacity-90">
                Get your free, no-obligation quote today. Same-day service available!
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
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Get Free Quote Online
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RelatedContent citySlug={area.slug} />

      <Footer />
    </>
  );
};

export default ServiceAreaTemplate;
