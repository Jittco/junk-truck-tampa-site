import { Truck, Hammer, Home, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroTruck from "@/assets/hero-truck.jpg";
import shedAfter from "@/assets/shed-after.jpg";
import yardAfter from "@/assets/yard-after.jpg";
import residentialJunkRemoval from "@/assets/residential-junk-removal-new.webp";
import commercialJunkRemoval from "@/assets/commercial-junk-removal-new.webp";
import demolitionServices from "@/assets/demolition-services-new.webp";
import dumpsterRental from "@/assets/dumpster-rental-new.webp";
const services = [{
  icon: Home,
  title: "Residential Junk Removal",
  description: "Complete home cleanouts, furniture removal, and residential debris disposal with same-day service.",
  image: residentialJunkRemoval,
  link: "/services/junk-removal/residential/"
}, {
  icon: Package,
  title: "Commercial Junk Removal",
  description: "Professional cleanouts for offices, retail spaces, and commercial properties with flexible scheduling.",
  image: commercialJunkRemoval,
  link: "/services/junk-removal/commercial/"
}, {
  icon: Hammer,
  title: "Demolition Services",
  description: "Light demolition for home renovations, deck removal, and property improvements with proper disposal.",
  image: demolitionServices,
  link: "/services/demolition/"
}, {
  icon: Truck,
  title: "Dumpster Rental",
  description: "20-yard roll-off dumpsters delivered to your location for renovation and cleanout projects.",
  image: dumpsterRental,
  link: "/services/dumpster-rental/"
}];
const Services = () => {
  return <section className="py-20 section-bg bg-[t#] bg-transparent rounded-none">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-anton mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From single items to full property cleanouts, we handle it all with professionalism and care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" width="300" height="192" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-anton mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300" variant="outline">
                    <Link to={service.link}>
                      View Category
                    </Link>
                  </Button>
                </CardContent>
              </Card>;
        })}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-anton mb-4 text-[#ff0000] text-center">Get $25 Off when you book online!</h3>
        </div>
      </div>
    </section>;
};
export default Services;