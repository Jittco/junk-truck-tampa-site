import { Helmet } from 'react-helmet';

interface LocalBusinessSchemaProps {
  serviceName?: string;
  serviceDescription?: string;
  serviceUrl?: string;
}

const LocalBusinessSchema = ({ serviceName, serviceDescription, serviceUrl }: LocalBusinessSchemaProps) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://junkinthetruckco.com/#organization",
    "name": "Junk in the Truck Co",
    "image": "https://junkinthetruckco.com/lovable-uploads/logo-favicon.png",
    "logo": "https://junkinthetruckco.com/lovable-uploads/logo-favicon.png",
    "url": "https://junkinthetruckco.com",
    "telephone": "+1-844-858-6546",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3810 W San Carlos St",
      "addressLocality": "Tampa",
      "addressRegion": "FL",
      "postalCode": "33629",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.9232938,
      "longitude": -82.5066304
    },
    "hasMap": "https://www.google.com/maps/place/Junk+in+the+Truck+Co+Junk+Removal/@27.9232938,-82.5066304",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      { "@type": "City", "name": "Tampa, FL" },
      { "@type": "Neighborhood", "name": "South Tampa" },
      { "@type": "City", "name": "St. Petersburg, FL" },
      { "@type": "City", "name": "Clearwater, FL" },
      { "@type": "City", "name": "Brandon, FL" },
      { "@type": "City", "name": "Riverview, FL" },
      { "@type": "Neighborhood", "name": "Town 'n' Country, FL" },
      { "@type": "Neighborhood", "name": "Westchase, FL" }
    ],
    "sameAs": [
      "https://www.facebook.com/Junkinthetruckco/",
      "https://www.instagram.com/junkinthetruckco/?hl=en",
      "https://share.google/C4jLaacQJcHnbd5h5"
    ]
  };

  // If service details provided, add Service schema
  const schemas: any[] = [baseSchema];
  
  if (serviceName && serviceDescription && serviceUrl) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": serviceName,
      "description": serviceDescription,
      "provider": {
        "@id": "https://junkinthetruckco.com/#organization"
      },
      "areaServed": {
        "@type": "State",
        "name": "Florida"
      },
      "url": serviceUrl,
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD"
        }
      }
    });
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
