import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { serviceAreas } from "@/data/serviceAreas";
import { southTampaNeighborhoods } from "@/data/neighborhoods";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const SouthTampaFL = () => {
  const southTampaArea = serviceAreas.find(area => area.slug === "south-tampa");

  if (!southTampaArea) {
    return <div>Service area not found</div>;
  }

  return (
    <>
      {/* Neighborhood index — rendered at top of DOM but visually after via order;
          most importantly, the internal links are present for crawlers. */}
      <ServiceAreaTemplate area={southTampaArea} />
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-anton text-heading-color mb-2 text-center">
            South Tampa Neighborhoods We Serve
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Dedicated junk removal pages for every South Tampa community
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {southTampaNeighborhoods.map((n) => (
              <Link
                key={n.slug}
                to={`/service-areas/south-tampa/${n.slug}`}
                className="flex items-center gap-2 p-4 border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
              >
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium">{n.name} Junk Removal</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SouthTampaFL;
