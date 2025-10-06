import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { residentialServices } from '../data/services';
import { Phone } from 'lucide-react';

const JunkRemovalHub: React.FC = () => {
  // Get all junk removal services
  const junkRemovalServices = [
    {
      name: "Residential Junk Removal",
      slug: "residential",
      shortDescription: "Complete home cleanouts and junk removal for Tampa Bay residents. From single items to whole house cleanouts.",
      heroImage: "/lovable-uploads/6a335dcb-180c-4c15-b5dd-a1ba512c588d.png"
    },
    {
      name: "Commercial Junk Removal",
      slug: "commercial",
      shortDescription: "Professional commercial cleanouts for offices, retail spaces, warehouses, and construction sites.",
      heroImage: "/lovable-uploads/39d5fc41-5246-40fa-85e0-39c712a42e89.png"
    },
    ...residentialServices.filter(s => !['residential-junk-removal', 'commercial-junk-removal'].includes(s.slug))
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Junk Removal Services Tampa Bay",
    "description": "Professional junk removal services in Tampa Bay. Residential and commercial junk removal with same-day service, upfront pricing, and eco-friendly disposal.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Junk in the Truck Co",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3810 W San Carlos Street",
        "addressLocality": "Tampa",
        "addressRegion": "FL",
        "postalCode": "33629",
        "addressCountry": "US"
      },
      "telephone": "844-858-6546"
    },
    "areaServed": "Tampa Bay, FL"
  };

  return (
    <>
      <Helmet>
        <title>Junk Removal Services Tampa Bay | Junk in the Truck Co</title>
        <meta name="description" content="Professional junk removal in Tampa Bay. Residential & commercial services with same-day pickup, upfront pricing, and eco-friendly disposal. Book online or call 844-858-6546." />
        <meta property="og:title" content="Junk Removal Services Tampa Bay | Junk in the Truck Co" />
        <meta property="og:description" content="Professional junk removal in Tampa Bay. Same-day service with upfront pricing and eco-friendly disposal." />
        <meta property="og:url" content="https://junkinthetruckco.com/services/junk-removal/" />
        <link rel="canonical" href="https://junkinthetruckco.com/services/junk-removal/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Breadcrumbs */}
        <nav className="bg-muted py-4 mt-32">
          <div className="container mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li>›</li>
              <li><a href="/services" className="hover:text-primary">Services</a></li>
              <li>›</li>
              <li className="text-foreground">Junk Removal</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-anton mb-4 text-foreground">
                Junk Removal Services in Tampa Bay
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Professional residential and commercial junk removal with same-day service, 
                upfront pricing, and eco-friendly disposal. From single items to complete cleanouts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="cta-button" onClick={() => window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank')}>
                  Book Online in 60 Seconds
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('tel:844-858-6546', '_self')}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call 844-858-6546
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-anton text-center mb-12">Our Junk Removal Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {junkRemovalServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    {service.heroImage && (
                      <img 
                        src={service.heroImage} 
                        alt={service.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    <h3 className="text-xl font-anton mb-2">{service.name}</h3>
                    <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = `/services/junk-removal/${service.slug}/`}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Conversion Band */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-anton mb-4">Ready to Clear the Clutter?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get your free estimate today and take back your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank')}
              >
                Book Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open('tel:844-858-6546', '_self')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call 844-858-6546
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default JunkRemovalHub;
