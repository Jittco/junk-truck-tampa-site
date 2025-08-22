import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { serviceCategories, getAllServices } from '../data/services';
import { ArrowRight, Phone } from 'lucide-react';

const ServicesHub: React.FC = () => {
  const primaryServices = [
    {
      title: "Residential Junk Removal",
      description: "Complete home cleanouts and junk removal for Tampa Bay residents.",
      image: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
      link: "/services/residential-junk-removal/"
    },
    {
      title: "Commercial Junk Removal", 
      description: "Professional commercial cleanouts for offices, retail, and warehouses.",
      image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
      link: "/services/commercial-junk-removal/"
    },
    {
      title: "Demolition Services",
      description: "Professional demolition for sheds, decks, driveways, and more.",
      image: "/assets/shed-before.jpg",
      link: "/services/demolition/"
    },
    {
      title: "Dumpster Rental",
      description: "20-yard dumpsters perfect for renovations and cleanouts.",
      image: "/lovable-uploads/a5fe3c97-a4c9-4709-9911-a32de46871ae.png",
      link: "/services/dumpster-rental/"
    }
  ];

  const allServices = getAllServices();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Junk Removal & Demolition Services",
    "itemListElement": allServices.flatMap((category, categoryIndex) => 
      category.services.map((service, serviceIndex) => ({
        "@type": "ListItem",
        "position": categoryIndex * 10 + serviceIndex + 1,
        "name": service.name,
        "url": `https://junkinthetruckco.com/services/${category.category}/${service.slug}/`
      }))
    )
  };

  return (
    <>
      <Helmet>
        <title>Services | Junk in the Truck Co (Tampa Bay)</title>
        <meta name="description" content="Explore residential & commercial junk removal, demolition, and dumpster rentals in Tampa Bay. Upfront pricing and same-day/next-day service." />
        <meta property="og:title" content="Services | Junk in the Truck Co (Tampa Bay)" />
        <meta property="og:description" content="Explore residential & commercial junk removal, demolition, and dumpster rentals in Tampa Bay. Upfront pricing and same-day/next-day service." />
        <meta property="og:url" content="https://junkinthetruckco.com/services/" />
        <link rel="canonical" href="https://junkinthetruckco.com/services/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-top bg-no-repeat" style={{
          backgroundImage: `url('/lovable-uploads/07549538-2da7-443a-8e8e-c14da7c0df97.png')`
        }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-anton mb-4">
              Our Junk Removal, Demolition & Dumpster Services
            </h1>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Fast, upfront pricing, and eco-friendly disposal across Tampa Bay.
            </p>
            <Button 
              size="lg" 
              className="cta-button"
              onClick={() => window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank')}
            >
              Book Online in 60 Seconds
            </Button>
          </div>
        </section>

        {/* Primary Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {primaryServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-anton mb-2">{service.title}</h2>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-full group"
                      onClick={() => window.location.href = service.link}
                    >
                      View Category
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Browse All Services */}
        <section className="py-16 section-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-anton text-center mb-12">Browse All Services</h2>
            
            {/* SEO Navigation Links */}
            <div className="grid md:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-anton mb-4" id={category.slug}>
                    <a href={`/services/${category.slug}/`} className="text-primary hover:underline">
                      {category.name}
                    </a>
                  </h3>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <a 
                          href={`/services/${category.slug}/${service.slug}/`}
                          className="text-muted-foreground hover:text-primary hover:underline"
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conversion Band */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-anton mb-4">Ready to schedule? Get your free estimate now.</h2>
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
                Call
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicesHub;