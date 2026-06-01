import { Helmet } from "react-helmet";
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { serviceAreas } from "@/data/serviceAreas";
import { southTampaNeighborhoods } from "@/data/neighborhoods";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PAGE_URL = "https://junkinthetruckco.com/service-areas/south-tampa-fl/";
const PAGE_TITLE =
  "Junk Removal South Tampa FL | Same-Day Service | Junk in the Truck Co";
const PAGE_DESCRIPTION =
  "South Tampa's trusted junk removal company. Serving Hyde Park, Palma Ceia, Davis Islands, Bayshore & surrounding neighborhoods. Same-day service, upfront pricing. Call 844-858-6546.";

const southTampaFaqs = [
  {
    question: "How much does junk removal cost in South Tampa?",
    answer:
      "Junk removal in South Tampa starts at $99 for a single item. Pricing is volume-based — you only pay for the space your junk takes up in our truck. We provide free upfront estimates in person or via text photos. No hidden fees.",
  },
  {
    question: "Do you offer same-day junk removal in South Tampa?",
    answer:
      "Yes! Junk in the Truck Co offers same-day and next-day junk removal throughout South Tampa including Hyde Park, Palma Ceia, Davis Islands, and Bayshore. Call 844-858-6546 to check availability.",
  },
  {
    question: "What neighborhoods in South Tampa do you serve?",
    answer:
      "We serve all of South Tampa including Hyde Park, Palma Ceia, Davis Islands, Bayshore Beautiful, Ballast Point, Westshore, Channelside, and ZIP codes 33606, 33609, 33611, 33616, and 33629.",
  },
  {
    question: "Are you a local South Tampa junk removal company?",
    answer:
      "Yes. Junk in the Truck Co is locally owned and operated, Christian-based, and not a franchise. Our team lives and works in the Tampa Bay community and is proud to serve South Tampa.",
  },
];

const southTampaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://junkinthetruckco.com/#business",
      name: "Junk in the Truck Co",
      url: "https://junkinthetruckco.com",
      telephone: "844-858-6546",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3810 W San Carlos St",
        addressLocality: "Tampa",
        addressRegion: "FL",
        postalCode: "33629",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 27.9232938,
        longitude: -82.5066304,
      },
      areaServed: [
        { "@type": "City", name: "South Tampa" },
        { "@type": "Neighborhood", name: "Hyde Park" },
        { "@type": "Neighborhood", name: "Palma Ceia" },
        { "@type": "Neighborhood", name: "Davis Islands" },
        { "@type": "Neighborhood", name: "Bayshore Beautiful" },
        { "@type": "Neighborhood", name: "Ballast Point" },
        { "@type": "Neighborhood", name: "Westshore" },
        { "@type": "PostalCode", name: "33606" },
        { "@type": "PostalCode", name: "33609" },
        { "@type": "PostalCode", name: "33611" },
        { "@type": "PostalCode", name: "33616" },
        { "@type": "PostalCode", name: "33629" },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "150",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: southTampaFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

const customHead = (
  <Helmet>
    <title>{PAGE_TITLE}</title>
    <meta name="description" content={PAGE_DESCRIPTION} />
    <link rel="canonical" href={PAGE_URL} />
    <meta property="og:title" content={PAGE_TITLE} />
    <meta property="og:description" content={PAGE_DESCRIPTION} />
    <meta property="og:url" content={PAGE_URL} />
    <meta property="og:type" content="website" />
    <script type="application/ld+json">{JSON.stringify(southTampaSchema)}</script>
  </Helmet>
);

const SouthTampaFL = () => {
  const southTampaArea = serviceAreas.find((area) => area.slug === "south-tampa");

  if (!southTampaArea) {
    return <div>Service area not found</div>;
  }

  return (
    <>
      <ServiceAreaTemplate area={southTampaArea} customHead={customHead} />

      {/* Neighborhoods + ZIPs */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-anton text-heading-color mb-2 text-center">
            South Tampa Neighborhoods We Serve
          </h2>
          <p className="text-muted-foreground text-center mb-6">
            Proudly serving Hyde Park, Palma Ceia, Davis Islands, Bayshore Beautiful,
            Ballast Point, Westshore and surrounding South Tampa communities — including
            ZIP codes 33606, 33609, 33611, 33616, and 33629.
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

      {/* Visible South Tampa FAQ */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-anton text-heading-color mb-8 text-center">
            South Tampa Junk Removal — Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {southTampaFaqs.map((item, index) => (
              <AccordionItem
                key={index}
                value={`stfaq-${index}`}
                className="border border-border rounded-lg px-6 bg-background"
              >
                <AccordionTrigger className="text-left font-semibold py-5">
                  <h3 className="text-lg font-semibold text-heading-color m-0">
                    {item.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default SouthTampaFL;
