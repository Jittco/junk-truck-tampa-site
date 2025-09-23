import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, CheckCircle, Users, Award, Leaf, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ServiceArea } from "@/data/serviceAreas";
import { residentialServices } from "@/data/services";

interface ServiceAreaTemplateProps {
  area: ServiceArea;
}

const ServiceAreaTemplate = ({ area }: ServiceAreaTemplateProps) => {
  const pageTitle = `Junk Removal in ${area.name}, ${area.state}`;
  const metaDescription = `Professional junk removal services in ${area.name}, ${area.state}. Same-day service available. Eco-friendly disposal and upfront pricing.`;

  // Get featured services (first 6)
  const featuredServices = residentialServices.slice(0, 6);

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Same-Day Service",
      description: `Fast response times throughout ${area.name}. Most jobs completed same-day.`
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Local Team",
      description: `Our crew knows ${area.name} well and provides personalized service.`
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Upfront Pricing",
      description: "No hidden fees. You know the cost before we start working."
    },
    {
      icon: <Leaf className="h-6 w-6 text-primary" />,
      title: "Eco-Friendly",
      description: "We donate and recycle whenever possible to protect the environment."
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Fully Insured",
      description: "Licensed, bonded, and insured for your peace of mind."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Junk in the Truck Co</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`junk removal ${area.name}, ${area.name} junk removal, junk removal near me, ${area.state} junk removal`} />
        <link rel="canonical" href={`https://junkinthetruck.co/service-areas/${area.slug}-${area.state.toLowerCase()}/`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Junk in the Truck Co",
            "image": "https://junkinthetruck.co/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
            "description": `Professional junk removal services in ${area.name}, ${area.state}`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": area.name,
              "addressRegion": area.state,
              "addressCountry": "US"
            },
            "telephone": "(813) 536-6298",
            "url": `https://junkinthetruck.co/service-areas/${area.slug}-${area.state.toLowerCase()}/`,
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "addressLocality": area.name,
                "addressRegion": area.state
              }
            },
            "areaServed": area.name,
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Junk Removal Services",
              "itemListElement": featuredServices.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.name,
                  "description": service.shortDescription
                }
              }))
            }
          })}
        </script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-primary font-medium">Service Area</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-anton text-heading-color mb-6">
                Junk Removal in {area.name}, {area.state}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {area.description}
              </p>

              {area.landmarks.length > 0 && (
                <p className="text-muted-foreground mb-8">
                  Serving areas near {area.landmarks.slice(0, 3).join(", ")} and more.
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="cta-button text-lg px-8 py-4">
                  <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae" 
                     target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    Book Now - Free Estimate
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                  <a href="tel:(813) 536-6298">
                    Call (813) 536-6298
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
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
        <section className="py-16">
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
                      <h3 className="text-xl font-anton text-heading-color mb-3">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link to={`/services/${service.slug}/`}>
                          Learn More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
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
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-anton text-heading-color mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-anton text-heading-color mb-12 text-center">
                Frequently Asked Questions - {area.name} Junk Removal
              </h2>

              <div className="space-y-6">
                {area.faq.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-heading-color mb-3">
                        {item.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Local Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-anton text-heading-color mb-8 text-center">
                Local {area.name} Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {area.localResources.map((resource, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-anton text-heading-color mb-3">
                        {resource.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {resource.description}
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Visit Website
                        </a>
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
              <h2 className="text-3xl font-anton mb-6">
                Ready to Clear Out Your Junk in {area.name}?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get your free, no-obligation estimate today. Same-day service available!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
                  <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae" 
                     target="_blank" rel="noopener noreferrer">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Book Online Now
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <a href="tel:(813) 536-6298">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (813) 536-6298
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServiceAreaTemplate;