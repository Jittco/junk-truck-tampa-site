import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';
import Footer from './Footer';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ServiceCategory, SubService, serviceCategories } from '../data/services';
import { Clock, DollarSign, Recycle, Star, Phone, Calendar, ArrowRight } from 'lucide-react';

interface CategoryHubPageProps {
  category: ServiceCategory;
  additionalServices?: SubService[];
}

export const CategoryHubPage: React.FC<CategoryHubPageProps> = ({
  category,
  additionalServices = []
}) => {
  const allServices = [...category.services, ...additionalServices];
  const relatedCategories = serviceCategories.filter(cat => cat.slug !== category.slug);

  const benefits = [
    {
      icon: DollarSign,
      title: "Upfront Pricing",
      description: "No hidden fees or surprises. Clear, honest pricing before we start."
    },
    {
      icon: Clock,
      title: "Same-Day/Next-Day",
      description: "Quick response times with flexible scheduling options."
    },
    {
      icon: Recycle,
      title: "Eco-Friendly",
      description: "Responsible disposal with recycling and donation priority."
    }
  ];

  const processSteps = [
    {
      icon: Calendar,
      title: "Book",
      description: "Schedule online in 60 seconds or call us directly."
    },
    {
      icon: DollarSign,
      title: "Free Estimate",
      description: "We assess your items and provide upfront pricing."
    },
    {
      icon: Star,
      title: "Fast Removal",
      description: "Professional team removes items quickly and safely."
    },
    {
      icon: Recycle,
      title: "Responsible Disposal",
      description: "Items are donated, recycled, or disposed of properly."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${category.name} Services in Tampa Bay`,
    "description": category.intro,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Junk in the Truck Co",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3810 W San Carlos Street",
        "addressLocality": "Tampa Bay",
        "addressRegion": "FL",
        "postalCode": "33629",
        "addressCountry": "US"
      },
      "telephone": "844-858-6546",
      "url": "https://www.junkinthetruckco.com"
    },
    "areaServed": "Tampa Bay, FL",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${category.name} Services`,
      "itemListElement": allServices.map(service => ({
        "@type": "Offer",
        "name": service.name,
        "description": service.shortDescription,
        "url": `https://www.junkinthetruckco.com/services/${category.slug}/${service.slug}/`
      }))
    }
  };

  const itemListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": allServices.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": service.name,
      "url": `https://www.junkinthetruckco.com/services/${category.slug}/${service.slug}/`
    }))
  };

  return (
    <>
      <Helmet>
        <title>{category.name} Tampa Bay | Junk in the Truck Co</title>
        <meta name="description" content={`Professional ${category.name.toLowerCase()} services in Tampa Bay. Same-day & next-day service with upfront pricing and eco-friendly disposal.`} />
        <meta property="og:title" content={`${category.name} Tampa Bay | Junk in the Truck Co`} />
        <meta property="og:description" content={`Professional ${category.name.toLowerCase()} services in Tampa Bay. Same-day & next-day service with upfront pricing and eco-friendly disposal.`} />
        <meta property="og:image" content={category.heroImage} />
        <meta property="og:url" content={`https://www.junkinthetruckco.com/services/${category.slug}/`} />
        <link rel="canonical" href={`https://www.junkinthetruckco.com/services/${category.slug}/`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(itemListStructuredData)}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Breadcrumbs */}
        <nav className="bg-muted py-4">
          <div className="container mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li>›</li>
              <li><a href="/services" className="hover:text-primary">Services</a></li>
              <li>›</li>
              <li className="text-foreground">{category.name}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-anton mb-4 text-foreground">
                  {category.name} in Tampa Bay
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {category.intro}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="cta-button"
                    onClick={() => window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank')}
                  >
                    Book Online in 60 Seconds
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open('tel:844-858-6546', '_self')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call 844-858-6546
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={category.heroImage} 
                  alt={`${category.name} services in Tampa Bay`}
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sub-Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-anton text-center mb-12">Our {category.name} Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img 
                      src={service.heroImage} 
                      alt={service.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-anton mb-2">{service.name}</h3>
                    <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                    <Button 
                      variant="outline" 
                      className="w-full group"
                      onClick={() => window.location.href = `/services/${category.slug}/${service.slug}/`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 section-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-anton text-center mb-12">Why Choose Junk in the Truck Co?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <benefit.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-anton mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-anton text-center mb-12">Our Simple Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-anton mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Categories */}
        <section className="py-16 section-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-anton text-center mb-12">Other Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedCategories.slice(0, 3).map((relatedCategory, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img 
                      src={relatedCategory.heroImage} 
                      alt={relatedCategory.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-anton mb-2">{relatedCategory.name}</h3>
                    <p className="text-muted-foreground mb-4">{relatedCategory.intro}</p>
                    <Button 
                      variant="outline" 
                      className="w-full group"
                      onClick={() => window.location.href = `/services/${relatedCategory.slug}/`}
                    >
                      View Services
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
            <h2 className="text-3xl font-anton mb-4">Ready to Schedule?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get your free estimate now and schedule your service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank')}
              >
                Book Online in 60 Seconds
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