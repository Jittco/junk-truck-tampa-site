// ServiceAreasLinks — visible internal-linking strip pointing every service
// page at our 8 Tampa Bay service-area pages. Boosts topical authority and
// helps Google associate each service with our local coverage.
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const SERVICE_AREAS: { name: string; href: string }[] = [
  { name: "South Tampa", href: "/service-areas/south-tampa-fl/" },
  { name: "Brandon", href: "/service-areas/brandon-fl/" },
  { name: "Riverview", href: "/service-areas/riverview-fl/" },
  { name: "Valrico", href: "/service-areas/valrico-fl/" },
  { name: "Apollo Beach", href: "/service-areas/apollo-beach-fl/" },
  { name: "Carrollwood", href: "/service-areas/carrollwood-fl/" },
  { name: "Temple Terrace", href: "/service-areas/temple-terrace-fl/" },
  { name: "Town 'n' Country", href: "/service-areas/town-n-country-fl/" },
];

interface Props {
  /** Service name, e.g. "Demolition" — used in heading/anchor text */
  serviceName: string;
}

const ServiceAreasLinks = ({ serviceName }: Props) => {
  return (
    <section className="py-12 md:py-16 bg-muted/30" aria-label="Service areas">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-anton text-foreground mb-3">
            {serviceName} Across Tampa Bay
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            South Tampa is our home base. We provide {serviceName.toLowerCase()} throughout
            Hillsborough and Pinellas counties — explore your neighborhood:
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {SERVICE_AREAS.map((a) => (
            <Link
              key={a.href}
              to={a.href}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary text-sm font-medium transition-colors"
            >
              <MapPin className="h-3.5 w-3.5" />
              {serviceName} in {a.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasLinks;
