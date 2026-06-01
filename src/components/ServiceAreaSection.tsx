import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceAreaSection = () => {
  const serviceAreas: { name: string; href: string }[] = [
    { name: "South Tampa", href: "/service-areas/south-tampa-fl/" },
    { name: "Clearwater", href: "/service-areas/clearwater-fl/" },
    { name: "Carrollwood", href: "/service-areas/carrollwood-fl/" },
    { name: "Davis Island", href: "/service-areas/davis-islands-fl/" },
    { name: "Temple Terrace", href: "/service-areas/temple-terrace-fl/" },
    { name: "Citrus Park", href: "/service-areas/citrus-park-fl/" },
    { name: "Tampa Palms", href: "/service-areas/tampa-palms-fl/" },
    { name: "Pinellas Park", href: "/service-areas/pinellas-park-fl/" },
    { name: "Riverview", href: "/service-areas/riverview-fl/" },
    { name: "Bloomingdale", href: "/service-areas/bloomingdale-fl/" },
  ];


  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-oswald text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
          Junk Removal Service Areas Across Tampa Bay
        </h2>
        
        <p className="font-inter text-lg text-center mb-10 max-w-3xl mx-auto text-muted-foreground">
          Junk in the Truck Co proudly provides professional junk removal services throughout Tampa Bay. 
          Our local crews serve homeowners and businesses across Hillsborough and Pinellas Counties with 
          fast, reliable service.
        </p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Google Map Embed */}
          <div className="w-full">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.1234567890123!2d-82.5066304!3d27.9232938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c48e9a5b7c3d%3A0x1234567890abcdef!2sJunk%20in%20the%20Truck%20Co%20Junk%20Removal!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Junk in the Truck Co Service Area Map"
                className="w-full"
              />
            </div>
          </div>

          {/* Service Areas List */}
          <div className="w-full">
            <h3 className="font-oswald text-xl font-semibold mb-4 text-foreground">
              Areas We Serve
            </h3>
            <ul className="font-inter text-base text-muted-foreground space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.href} className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <Link to={area.href} className="hover:text-primary hover:underline transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Button asChild size="lg" className="font-inter">
            <Link to="/service-areas">
              <MapPin className="mr-2 h-5 w-5" />
              View All Service Areas
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
