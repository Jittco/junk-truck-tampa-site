import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Truck, Recycle, Phone, Shield, Clock, Leaf, ChevronRight, Home } from "lucide-react";
import { Helmet } from "react-helmet";

interface SubService {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface RelatedCategory {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ServiceCategoryData {
  categoryName: string;
  slug: string;
  heroSubtext: string;
  heroImage: string;
  subServices: SubService[];
  relatedCategories: RelatedCategory[];
  metaTitle: string;
  metaDescription: string;
}

interface ServiceCategoryHubProps {
  data: ServiceCategoryData;
}

const ServiceCategoryHub = ({ data }: ServiceCategoryHubProps) => {
  const whyChooseFeatures = [
    {
      icon: Shield,
      title: "Upfront Pricing",
      description: "No hidden fees - you know the cost before we start"
    },
    {
      icon: Clock,
      title: "Same-Day & Next-Day Service",
      description: "Fast response when you need it most"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Disposal",
      description: "We recycle and donate whenever possible"
    }
  ];

  const processSteps = [
    {
      icon: Phone,
      title: "Book Online in 60 Seconds",
      description: "Quick and easy online scheduling"
    },
    {
      icon: CheckCircle,
      title: "Free On-Site Estimate",
      description: "Transparent, upfront pricing with no surprises"
    },
    {
      icon: Truck,
      title: "Fast & Friendly Removal",
      description: "Professional team arrives on time and works efficiently"
    },
    {
      icon: Recycle,
      title: "Responsible Disposal",
      description: "Items are recycled, donated, or properly disposed"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${data.categoryName} in Tampa Bay`,
    "description": data.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "Junk in the Truck Co",
      "telephone": "844-858-6546",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3810 W San Carlos Street",
        "addressLocality": "Tampa",
        "addressRegion": "FL"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": data.subServices.map((service, index) => ({
        "@type": "Service",
        "position": index + 1,
        "name": service.title,
        "description": service.description
      }))
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Navigation />
      <div className="pt-32">
        {/* Breadcrumbs */}
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary transition-colors">
                <Home className="w-4 h-4" />
              </a>
              <ChevronRight className="w-4 h-4" />
              <a href="/services" className="hover:text-primary transition-colors">
                Services
              </a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">{data.categoryName}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${data.heroImage})`
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-anton mb-6 leading-tight">
              {data.categoryName}<br />
              <span className="text-primary">in Tampa Bay</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
              {data.heroSubtext}
            </p>
            
            <Button variant="cta" size="lg" className="px-8 py-4 text-lg" asChild>
              <a href="https://book.housecallpro.com/book/JunkintheTrunkco/2eef934dbbae44e09e5d7b3ec87330ae">
                Book Online in 60 Seconds
              </a>
            </Button>
          </div>
        </section>

        {/* Sub-Services Grid */}
        <section className="py-16 md:py-20 section-bg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-anton mb-4 text-foreground">
                Our {data.categoryName} Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional, reliable service for all your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.subServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-anton text-lg mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={service.link}>
                        Learn More
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-anton mb-4 text-foreground">
                Why Choose Junk in the Truck Co for {data.categoryName}?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {whyChooseFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-anton text-xl mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 md:py-20 section-bg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-anton mb-4 text-foreground">
                Our Simple Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple, transparent process from booking to cleanup
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-anton text-xl mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Categories */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-anton mb-4 text-foreground">
                Explore More Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {data.relatedCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-anton text-lg mb-2 text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={category.link}>
                        View Services
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Conversion Band */}
        <section className="py-16 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-hover"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-anton mb-6">
              Ready to schedule your {data.categoryName}?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free estimate today and take back your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="px-8 py-4 text-lg" asChild>
                <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae">
                  Book Now
                </a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="tel:844-858-6546">
                  Call 844-858-6546
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ServiceCategoryHub;