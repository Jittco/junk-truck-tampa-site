import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { serviceAreas } from "@/data/serviceAreas";
import Breadcrumbs from "@/components/Breadcrumbs";

const ServiceAreaHub = () => {
  return (
    <>
      <Helmet>
        <title>Service Areas | Junk in the Truck Co | Tampa Bay Junk Removal</title>
        <meta name="description" content="Junk removal service areas throughout Tampa Bay. We serve Brandon, Carrollwood, Temple Terrace, South Tampa, Town 'n' Country and more." />
        <meta name="keywords" content="junk removal service areas, Tampa Bay junk removal, Brandon, Carrollwood, Temple Terrace, South Tampa" />
        <link rel="canonical" href="https://www.junkinthetruckco.com/service-areas/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.junkinthetruckco.com/service-areas/" />
        <meta property="og:title" content="Service Areas | Junk in the Truck Co | Tampa Bay Junk Removal" />
        <meta property="og:description" content="Junk removal service areas throughout Tampa Bay. We serve Brandon, Carrollwood, Temple Terrace, South Tampa, Town 'n' Country and more." />
        <meta property="og:site_name" content="Junk in the Truck Co" />

        {/* Schema for Service Areas */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Junk in the Truck Co",
            "description": "Professional junk removal services throughout Tampa Bay",
            "telephone": "+1-844-858-6546",
            "url": "https://www.junkinthetruckco.com",
            "serviceArea": serviceAreas.map(area => ({
              "@type": "City",
              "name": `${area.name}, ${area.state}`
            })),
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Junk Removal Service Areas",
              "itemListElement": serviceAreas.map((area, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": `Junk Removal in ${area.name}, ${area.state}`,
                  "description": area.description,
                  "areaServed": `${area.name}, ${area.state}`
                },
                "position": index + 1
              }))
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs items={[
        { name: "Home", url: "/" },
        { name: "Service Areas", url: "/service-areas/" },
      ]} />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-primary font-medium">Service Coverage</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-anton text-heading-color mb-6">
                Tampa Bay Service Areas
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional junk removal services throughout Tampa Bay. Same-day service available 
                with upfront pricing and eco-friendly disposal.
              </p>

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

        {/* Service Areas Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-anton text-heading-color mb-4 text-center">
                Cities We Serve
              </h2>
              <p className="text-muted-foreground text-center mb-12 text-lg">
                Professional junk removal services throughout Tampa Bay
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceAreas.map((area) => (
                  <Card key={area.slug} className="h-full hover:shadow-lg transition-all hover:transform hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-anton text-heading-color">
                          {area.name}, {area.state}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {area.description.substring(0, 120)}...
                      </p>

                      {area.landmarks.length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm text-muted-foreground">
                            <strong>Near:</strong> {area.landmarks.slice(0, 2).join(", ")}
                          </p>
                        </div>
                      )}

                      <Button asChild className="w-full">
                        <Link to={`/service-areas/${area.slug}-${area.state.toLowerCase()}/`}>
                          View {area.name} Services
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Area Map */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-anton text-heading-color mb-8 text-center">
                Tampa Bay Coverage Area
              </h2>
              
              <div className="map-wrap mb-8">
                <iframe 
                  loading="lazy"
                  src="https://www.google.com/maps?q=Tampa+Bay,+FL&output=embed&z=10"
                  referrerPolicy="no-referrer-when-downgrade" 
                  allowFullScreen
                  title="Tampa Bay Service Area Map"
                ></iframe>
              </div>

              <div className="text-center">
                <p className="text-muted-foreground mb-6">
                  Serving the greater Tampa Bay area with professional junk removal services. 
                  Don't see your area listed? Give us a call - we may still be able to help!
                </p>
                
                <Button asChild variant="outline">
                  <a href="tel:(813) 536-6298">
                    Call to Check Your Area
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-anton text-heading-color mb-8">
                Why Choose Our Local Service?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-anton text-heading-color mb-3">
                    Local Knowledge
                  </h3>
                  <p className="text-muted-foreground">
                    We know Tampa Bay neighborhoods, traffic patterns, and local disposal regulations.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-anton text-heading-color mb-3">
                    Same-Day Service
                  </h3>
                  <p className="text-muted-foreground">
                    Fast response times across all service areas with same-day and next-day availability.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-anton text-heading-color mb-3">
                    Local Support
                  </h3>
                  <p className="text-muted-foreground">
                    Speak directly with our local Tampa Bay team for personalized service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-anton mb-6">
                Ready to Schedule Your Junk Removal?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Serving all of Tampa Bay with professional, eco-friendly junk removal services.
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

export default ServiceAreaHub;