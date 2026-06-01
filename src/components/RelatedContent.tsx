// RelatedContent — auto cross-links related service×location combos,
// neighborhoods in the same parent city, and nearby city service areas.
// Drop into any neighborhood, service-area, or service-location page.

import { Link } from "react-router-dom";
import { MapPin, Wrench, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { serviceLocations, ServiceLocation } from "@/data/serviceLocations";
import { southTampaNeighborhoods } from "@/data/neighborhoods";

// City slug → service-area page path
const cityAreaPaths: Record<string, { name: string; href: string }> = {
  "south-tampa": { name: "South Tampa", href: "/service-areas/south-tampa-fl/" },
  "brandon": { name: "Brandon", href: "/service-areas/brandon-fl/" },
  "riverview": { name: "Riverview", href: "/service-areas/riverview-fl/" },
  "valrico": { name: "Valrico", href: "/service-areas/valrico-fl/" },
  "apollo-beach": { name: "Apollo Beach", href: "/service-areas/apollo-beach-fl/" },
  "carrollwood": { name: "Carrollwood", href: "/service-areas/carrollwood-fl/" },
  "temple-terrace": { name: "Temple Terrace", href: "/service-areas/temple-terrace-fl/" },
  "town-n-country": { name: "Town 'n' Country", href: "/service-areas/town-n-country-fl/" },
  "tampa": { name: "Tampa Bay", href: "/service-areas/" },
};

// Adjacency map for nearby cities
const cityAdjacency: Record<string, string[]> = {
  "south-tampa": ["brandon", "carrollwood", "town-n-country"],
  "brandon": ["riverview", "valrico", "south-tampa"],
  "riverview": ["brandon", "apollo-beach", "valrico"],
  "valrico": ["brandon", "riverview"],
  "apollo-beach": ["riverview", "brandon"],
  "carrollwood": ["town-n-country", "temple-terrace", "south-tampa"],
  "temple-terrace": ["carrollwood", "brandon"],
  "town-n-country": ["carrollwood", "south-tampa"],
  "tampa": ["south-tampa", "brandon", "carrollwood"],
};

const slCombosForCity = (citySlug: string): ServiceLocation[] =>
  serviceLocations.filter((s) => s.citySlug === citySlug);

const slCombosForService = (servicePath: string, exceptCity?: string): ServiceLocation[] =>
  serviceLocations.filter(
    (s) => s.servicePath === servicePath && s.citySlug !== exceptCity
  );

interface Props {
  /** Slug of the current city, e.g. "south-tampa" */
  citySlug?: string;
  /** Service path, e.g. "junk-removal/hot-tub-removal" — set on service-location pages */
  servicePath?: string;
  /** Current neighborhood slug — set on neighborhood pages to exclude self */
  neighborhoodSlug?: string;
  /** Parent city for neighborhood pages — e.g. "south-tampa" */
  parentCitySlug?: string;
  /** Heading override */
  heading?: string;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div>
    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
      {title}
    </h3>
    {children}
  </div>
);

const PillLink: React.FC<{
  to: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ to, icon, children }) => (
  <Link
    to={to}
    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background border border-border hover:border-primary hover:text-primary text-sm transition-colors"
  >
    {icon}
    {children}
  </Link>
);

const RelatedContent = ({
  citySlug,
  servicePath,
  neighborhoodSlug,
  parentCitySlug,
  heading = "Related Services & Areas",
}: Props) => {
  const effectiveCity = citySlug || parentCitySlug;

  // 1. Other services we offer in THIS city
  const sameCityCombos = effectiveCity
    ? slCombosForCity(effectiveCity).filter((s) => s.servicePath !== servicePath)
    : [];

  // 2. SAME service in nearby cities
  const sameServiceNearby = servicePath
    ? slCombosForService(servicePath, effectiveCity)
    : [];

  // 3. Neighborhoods within parent city (for neighborhood pages or South Tampa city pages)
  const showNeighborhoods =
    effectiveCity === "south-tampa" || parentCitySlug === "south-tampa";
  const neighborhoodLinks = showNeighborhoods
    ? southTampaNeighborhoods.filter((n) => n.slug !== neighborhoodSlug)
    : [];

  // 4. Nearby cities
  const nearbyCities = effectiveCity
    ? (cityAdjacency[effectiveCity] || [])
        .map((c) => cityAreaPaths[c])
        .filter(Boolean)
    : [];

  const hasAnything =
    sameCityCombos.length > 0 ||
    sameServiceNearby.length > 0 ||
    neighborhoodLinks.length > 0 ||
    nearbyCities.length > 0;

  if (!hasAnything) return null;

  return (
    <section
      className="py-12 bg-muted/30 border-b border-border"
      aria-label="Related content"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{heading}</h2>
        <Card>
          <CardContent className="p-6 space-y-6">
            {sameCityCombos.length > 0 && (
              <Section
                title={`Other services in ${cityAreaPaths[effectiveCity!]?.name || effectiveCity}`}
              >
                <div className="flex flex-wrap gap-2">
                  {sameCityCombos.map((s) => (
                    <PillLink
                      key={s.slug}
                      to={`/services/${s.servicePath}/${s.citySlug}/`}
                      icon={<Wrench className="h-3.5 w-3.5" />}
                    >
                      {s.serviceName} in {s.cityName}
                    </PillLink>
                  ))}
                </div>
              </Section>
            )}

            {sameServiceNearby.length > 0 && (
              <Section title="Same service, nearby areas">
                <div className="flex flex-wrap gap-2">
                  {sameServiceNearby.map((s) => (
                    <PillLink
                      key={s.slug}
                      to={`/services/${s.servicePath}/${s.citySlug}/`}
                      icon={<MapPin className="h-3.5 w-3.5" />}
                    >
                      {s.serviceName} in {s.cityName}
                    </PillLink>
                  ))}
                </div>
              </Section>
            )}

            {neighborhoodLinks.length > 0 && (
              <Section title="South Tampa neighborhoods we serve">
                <div className="flex flex-wrap gap-2">
                  {neighborhoodLinks.map((n) => (
                    <PillLink
                      key={n.slug}
                      to={`/service-areas/south-tampa/${n.slug}`}
                      icon={<MapPin className="h-3.5 w-3.5" />}
                    >
                      {n.name}
                    </PillLink>
                  ))}
                </div>
              </Section>
            )}

            {nearbyCities.length > 0 && (
              <Section title="Nearby service areas">
                <div className="flex flex-wrap gap-2">
                  {nearbyCities.map((c) => (
                    <PillLink
                      key={c.href}
                      to={c.href}
                      icon={<ChevronRight className="h-3.5 w-3.5" />}
                    >
                      {c.name}
                    </PillLink>
                  ))}
                </div>
              </Section>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RelatedContent;
