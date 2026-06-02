import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Truck, Recycle, Phone, Shield, Clock, Leaf, ChevronRight, Home, DollarSign, Check } from "lucide-react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import ServiceAreasLinks from "@/components/ServiceAreasLinks";
import QuickAnswer from "@/components/QuickAnswer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

interface SubService {
  title: string;
  description: string;
  image: string;
  heroImage?: string;
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
  /** Optional Quick Answer block for AEO/AI-overview optimization */
  quickAnswer?: { question: string; answer: string };
}

interface ServiceCategoryHubProps {
  data: ServiceCategoryData;
}

const ServiceCategoryHub = ({ data }: ServiceCategoryHubProps) => {
  const location = useLocation();
  const canonicalUrl = `https://www.junkinthetruckco.com${location.pathname}`;
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
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
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

        {/* Quick Answer (AEO/AI overview) */}
        {data.quickAnswer && (
          <QuickAnswer
            question={data.quickAnswer.question}
            answer={data.quickAnswer.answer}
          />
        )}

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
                      src={service.heroImage || service.image} 
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
                        Explore {service.title}
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

        {/* Transparent, Upfront Pricing */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <DollarSign className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-anton text-foreground">
                    Transparent, Upfront Pricing
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  At Junk in the Truck Co, we believe in honest, transparent pricing with no surprises. You'll know exactly what you're paying before we start any work.
                </p>
              </div>

              <div className="bg-card rounded-lg border p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-anton mb-4 text-foreground">How Our Pricing Works:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">We charge by truck space used — you only pay for what we haul</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Free, accurate on-site estimates with no hidden fees</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Our truck measures 8' × 12' × 6' (equivalent to 8 pickup truck loads)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Pricing includes labor, disposal, and cleanup</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">No fuel surcharges or extra fees</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-anton mb-4 text-foreground">Our Promise:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Upfront estimates confirmed before we start</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">No hidden costs or surprise charges</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Transparent pricing structure</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Professional service at fair rates</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-center text-muted-foreground mb-6">
                    Whether you need a single item removed or a full truck load, we provide clear, competitive pricing that fits your budget.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="default" size="lg" className="px-8 py-4 text-lg" asChild>
                      <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae">
                        Get Free Estimate
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="px-8 py-4 text-lg" asChild>
                      <a href="tel:844-858-6546">
                        Call for Pricing
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
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
                        Learn About {category.title}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas internal links */}
        <ServiceAreasLinks serviceName={data.categoryName} />

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