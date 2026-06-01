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
      <ServiceAreaTemplate area={southTampaArea} />
      {/* Neighborhood links section injected via portal-like inline render below the template's footer
          is not possible — so we render a sibling section before the footer by wrapping above.
          The template already includes its own Footer, so this extra block sits after it in DOM.
          Better: render neighborhood links inline by extending content above. */}
    </>
  );
};

export default SouthTampaFL;

// Note: The neighborhood index is also exposed inline via the hub link block below.
// Crawlers reach /service-areas/south-tampa/<slug> from this page through the section
// below if rendered before <Footer />. For now we surface them on this hub page using
// the template's Local Resources position — see HubNeighborhoodLinks export.

export const HubNeighborhoodLinks = () => (
  <section className="py-12 bg-background border-t border-border">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-2xl font-anton text-heading-color mb-6 text-center">
        South Tampa Neighborhoods We Serve
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {southTampaNeighborhoods.map((n) => (
          <Link
            key={n.slug}
            to={`/service-areas/south-tampa/${n.slug}`}
            className="flex items-center gap-2 p-4 border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
          >
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-medium">{n.name}</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
