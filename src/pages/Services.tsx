import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Truck, Recycle, Phone, Shield, Clock, Leaf } from "lucide-react";

const Services = () => {
  const primaryServices = [
    {
      title: "Residential Junk Removal",
      description: "From old furniture to household clutter, we'll clear your home fast with upfront pricing and eco-friendly disposal.",
      image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
      link: "/services/residential-junk-removal/"
    },
    {
      title: "Commercial Junk Removal",
      description: "Professional junk hauling for offices, retail spaces, and warehouses. Same-day and next-day availability to keep your business running smoothly.",
      image: "/lovable-uploads/d27a78b7-3af2-41cc-9a86-cd4c76bfa10d.png",
      link: "/services/commercial-junk-removal/"
    },
    {
      title: "Demolition Services",
      description: "Safe, affordable demolition for sheds, decks, playsets, driveways, and more. We handle the tear-down and the haul-away.",
      image: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
      link: "/services/demolition/"
    },
    {
      title: "Dumpster Rental",
      description: "Convenient dumpster rentals for home projects or commercial cleanouts. Flexible sizes, affordable pricing, and fast delivery.",
      image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
      link: "/services/dumpster-rental/"
    }
  ];

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
      title: "Book Online",
      description: "Schedule your service in 60 seconds online"
    },
    {
      icon: CheckCircle,
      title: "Free Estimate",
      description: "Get an upfront, no-obligation quote"
    },
    {
      icon: Truck,
      title: "Fast Removal",
      description: "We arrive on time and work efficiently"
    },
    {
      icon: Recycle,
      title: "Responsible Disposal",
      description: "Items are recycled, donated, or properly disposed"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png)`
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-anton mb-6 leading-tight">
              Our Junk Removal &<br />
              <span className="text-primary">Demolition Services</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
              From household clutter to full-scale demolitions, we deliver fast, affordable, eco-friendly service across Tampa Bay.
            </p>
            
            <Button variant="cta" size="lg" className="px-8 py-4 text-lg" asChild>
              <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae">
                Book Online in 60 Seconds
              </a>
            </Button>
          </div>
        </section>

        {/* Primary Services Grid */}
        <section className="py-16 md:py-20 section-bg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-anton mb-4 text-foreground">
                Our Primary Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional, reliable service for all your cleanout and demolition needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {primaryServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                  <div className="aspect-[4/3] bg-muted overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-anton text-xl mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300" asChild>
                      <a href={service.link}>
                        View Category
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
                Why Choose Junk in the Truck Co?
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
                How It Works
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

        {/* Conversion Band */}
        <section className="py-16 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-hover"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-anton mb-6">
              Ready to Clear the Clutter?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get your free estimate today and take back your space.
            </p>
            <Button variant="secondary" size="lg" className="px-8 py-4 text-lg" asChild>
              <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae">
                Book Now
              </a>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Services;