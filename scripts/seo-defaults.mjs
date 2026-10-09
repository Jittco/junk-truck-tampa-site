/**
 * Confirmed business facts, October 2026. This is the ONLY place the prerender
 * states them; everything it writes into the HTML head derives from here.
 *
 * Keep consistent with website/CLAUDE.md. Licensed and insured, NOT bonded.
 */
export const SITE_ORIGIN = "https://www.junkinthetruckco.com";

export const FALLBACK_TITLE =
  "Tampa Bay Junk Removal | Same-Day Service | Junk in the Truck Co";
export const FALLBACK_DESCRIPTION =
  "Tampa Bay's trusted locally owned, Christian-based junk removal. Same-day service, upfront pricing. South Tampa. Call 844-858-6546.";
export const OG_IMAGE = `${SITE_ORIGIN}/og-image.jpg`;

/**
 * Site-wide LocalBusiness. Mirrors src/components/LocalBusinessSchema.tsx and
 * shares its @id, so a page that already renders that component does not get a
 * second copy — the prerender only appends this when the page emitted none.
 *
 * aggregateRating is deliberately absent: Google ignores self-reported ratings
 * on LocalBusiness, and the live count lives in the Trustindex widget.
 */
export const LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_ORIGIN}/#organization`,
  name: "Junk in the Truck Co",
  description:
    "Junk in the Truck Co is a Christian-based, locally owned junk removal company serving the greater Tampa Bay area. Based in South Tampa, FL, we offer same-day junk removal, demolition, appliance removal, and commercial cleanouts with upfront pricing across Hillsborough and Pinellas counties.",
  image: `${SITE_ORIGIN}/lovable-uploads/logo-favicon.png`,
  logo: `${SITE_ORIGIN}/lovable-uploads/logo-favicon.png`,
  url: SITE_ORIGIN,
  telephone: "+1-844-858-6546",
  priceRange: "$$",
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Tampa, FL" },
    { "@type": "Neighborhood", name: "South Tampa" },
    { "@type": "City", name: "St. Petersburg, FL" },
    { "@type": "City", name: "Clearwater, FL" },
    { "@type": "City", name: "Brandon, FL" },
    { "@type": "City", name: "Riverview, FL" },
    { "@type": "Neighborhood", name: "Town 'n' Country, FL" },
    { "@type": "Neighborhood", name: "Westchase, FL" },
  ],
  sameAs: [
    "https://www.facebook.com/Junkinthetruckco/",
    "https://www.instagram.com/junkinthetruckco/?hl=en",
    "https://share.google/C4jLaacQJcHnbd5h5",
  ],
};
