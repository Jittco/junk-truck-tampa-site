import ServiceCategoryHub from "@/components/ServiceCategoryHub";

const DumpsterRental = () => {
  const categoryData = {
    categoryName: "Dumpster Rental",
    slug: "dumpster-rental",
    heroSubtext: "Convenient dumpster rentals for home projects or commercial cleanouts. Flexible sizes, affordable pricing, and fast delivery.",
    heroImage: "/lovable-uploads/a5fe3c97-a4c9-4709-9911-a32de46871ae.png",
    metaTitle: "Dumpster Rental Tampa Bay | Junk in the Truck Co",
    metaDescription: "Affordable Dumpster Rental in Tampa Bay. Same-day & next-day service with upfront pricing and flexible rental periods.",
    subServices: [
      {
        title: "10 Yard Dumpster",
        description: "Perfect for small home projects, bathroom renovations, or garage cleanouts.",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/10-yard-dumpster/"
      },
      {
        title: "20 Yard Dumpster",
        description: "Ideal for medium projects like kitchen remodels, flooring removal, or deck demolition.",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/20-yard-dumpster/"
      },
      {
        title: "30 Yard Dumpster",
        description: "Great for large home renovations, major cleanouts, or commercial projects.",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/30-yard-dumpster/"
      },
      {
        title: "40 Yard Dumpster",
        description: "Our largest option for major construction projects and large-scale cleanouts.",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/40-yard-dumpster/"
      },
      {
        title: "Construction Dumpsters",
        description: "Heavy-duty dumpsters designed specifically for construction and demolition debris.",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/construction-dumpsters/"
      },
      {
        title: "Roll-Off Dumpsters",
        description: "Convenient roll-off containers for easy loading and efficient waste removal.",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/roll-off-dumpsters/"
      }
    ],
    relatedCategories: [
      {
        title: "Residential Junk Removal",
        description: "Full-service junk removal for homes",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/residential-junk-removal/"
      },
      {
        title: "Commercial Junk Removal",
        description: "Professional cleanouts for businesses",
        image: "/lovable-uploads/d27a78b7-3af2-41cc-9a86-cd4c76bfa10d.png",
        link: "/services/commercial-junk-removal/"
      },
      {
        title: "Demolition Services",
        description: "Complete demolition and debris removal",
        image: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
        link: "/services/demolition/"
      }
    ]
  };

  return <ServiceCategoryHub data={categoryData} />;
};

export default DumpsterRental;