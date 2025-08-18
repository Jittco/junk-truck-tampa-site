import ServiceCategoryHub from "@/components/ServiceCategoryHub";

const CommercialJunkRemoval = () => {
  const categoryData = {
    categoryName: "Commercial Junk Removal",
    slug: "commercial-junk-removal",
    heroSubtext: "Professional junk hauling for offices, retail spaces, and warehouses. Same-day and next-day availability to keep your business running smoothly.",
    heroImage: "/lovable-uploads/d27a78b7-3af2-41cc-9a86-cd4c76bfa10d.png",
    metaTitle: "Commercial Junk Removal Tampa Bay | Junk in the Truck Co",
    metaDescription: "Affordable Commercial Junk Removal in Tampa Bay. Same-day & next-day service with upfront pricing and eco-friendly disposal for businesses.",
    subServices: [
      {
        title: "Office Cleanouts",
        description: "Complete office clearing for relocations, renovations, or downsizing with minimal business disruption.",
        image: "/lovable-uploads/d27a78b7-3af2-41cc-9a86-cd4c76bfa10d.png",
        link: "/services/office-cleanouts/"
      },
      {
        title: "Retail Space Cleanouts",
        description: "Fast and efficient cleanouts for retail stores, restaurants, and commercial spaces.",
        image: "/lovable-uploads/d27a78b7-3af2-41cc-9a86-cd4c76bfa10d.png",
        link: "/services/retail-cleanouts/"
      },
      {
        title: "Warehouse Cleanouts",
        description: "Large-scale warehouse and industrial facility cleanouts with proper equipment and crew.",
        image: "/lovable-uploads/d27a78b7-3af2-41cc-9a86-cd4c76bfa10d.png",
        link: "/services/warehouse-cleanouts/"
      },
      {
        title: "Construction Cleanup",
        description: "Post-construction debris removal and site cleanup for contractors and developers.",
        image: "/lovable-uploads/d27a78b7-3af2-41cc-9a86-cd4c76bfa10d.png",
        link: "/services/construction-cleanup/"
      },
      {
        title: "Medical Facility Cleanouts",
        description: "Specialized cleanouts for medical offices with proper disposal of medical equipment.",
        image: "/lovable-uploads/d27a78b7-3af2-41cc-9a86-cd4c76bfa10d.png",
        link: "/services/medical-cleanouts/"
      },
      {
        title: "Property Management Services",
        description: "Regular junk removal services for property managers and apartment complexes.",
        image: "/lovable-uploads/d27a78b7-3af2-41cc-9a86-cd4c76bfa10d.png",
        link: "/services/property-management/"
      }
    ],
    relatedCategories: [
      {
        title: "Residential Junk Removal",
        description: "Home cleanouts and furniture removal services",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/residential-junk-removal/"
      },
      {
        title: "Demolition Services",
        description: "Safe demolition for commercial structures",
        image: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
        link: "/services/demolition/"
      },
      {
        title: "Dumpster Rental",
        description: "Commercial dumpster rentals for ongoing projects",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/dumpster-rental/"
      }
    ]
  };

  return <ServiceCategoryHub data={categoryData} />;
};

export default CommercialJunkRemoval;