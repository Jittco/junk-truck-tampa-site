import { Helmet } from "react-helmet";

const FAQPageSchema = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does junk removal cost in Tampa Bay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Junk removal pricing in Tampa Bay is based on volume, item type, and labor required. Junk in the Truck Co provides clear, upfront on-site estimates with no hidden fees before any work begins."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day junk removal in Tampa Bay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Same-day and next-day junk removal is often available throughout Tampa Bay, including Tampa, St. Petersburg, Clearwater, and surrounding areas, depending on availability."
        }
      },
      {
        "@type": "Question",
        "name": "What items can you remove?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We remove furniture, appliances, mattresses, yard debris, construction debris, household junk, and most non-hazardous items. If you are unsure about a specific item, our team can confirm during your estimate."
        }
      },
      {
        "@type": "Question",
        "name": "Are you licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Junk in the Truck Co is fully licensed and insured to provide professional junk removal services throughout Tampa Bay."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to move my items outside before pickup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Our team handles all lifting and hauling from inside your home, office, garage, or yard, making the process simple and stress-free."
        }
      },
      {
        "@type": "Question",
        "name": "Do you recycle or donate items?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Whenever possible, we prioritize responsible disposal by recycling materials and donating usable items to local organizations."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide junk removal services across Tampa Bay, including Tampa, South Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Town 'n' Country, and Westchase."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default FAQPageSchema;
