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
    "telephone": "+18448586546",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3810 W San Carlos Street",
      "addressLocality": "Tampa",
      "addressRegion": "FL",
      "postalCode": "33629",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.9506,
      "longitude": -82.4572
    },
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
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
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
