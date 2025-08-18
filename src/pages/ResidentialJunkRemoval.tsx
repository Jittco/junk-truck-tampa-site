import ServiceCategoryHub from "@/components/ServiceCategoryHub";

const ResidentialJunkRemoval = () => {
  const categoryData = {
    categoryName: "Residential Junk Removal",
    slug: "residential-junk-removal",
    heroSubtext: "From old furniture to yard waste, we make home cleanouts fast, affordable, and eco-friendly.",
    heroImage: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
    metaTitle: "Residential Junk Removal Tampa Bay | Junk in the Truck Co",
    metaDescription: "Affordable Residential Junk Removal in Tampa Bay. Same-day & next-day service with upfront pricing and eco-friendly disposal.",
    subServices: [
      {
        title: "Appliance Removal",
        description: "Safe removal and eco-friendly disposal of all household appliances including refrigerators, washers, and dryers.",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/appliance-removal/"
      },
      {
        title: "Furniture Removal",
        description: "Quick pickup and responsible disposal of unwanted furniture, from couches to bedroom sets.",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/furniture-removal/"
      },
      {
        title: "Hot Tub Removal",
        description: "We handle the cutting, lifting, and eco-friendly disposal of your old hot tub.",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/hot-tub-removal/"
      },
      {
        title: "Yard Waste Removal",
        description: "Clear your outdoor space of debris, branches, leaves, and other yard waste.",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/yard-waste-removal/"
      },
      {
        title: "Garage Clean Out",
        description: "Transform your garage from cluttered storage to organized, usable space.",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/garage-clean-out/"
      },
      {
        title: "Apartment Clean Out",
        description: "Complete apartment clearing for moves, renovations, or estate cleanouts.",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/apartment-clean-out/"
      },
      {
        title: "Property Clean Out",
        description: "Full property clearing for real estate transactions and estate sales.",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/property-clean-out/"
      }
    ],
    relatedCategories: [
      {
        title: "Commercial Junk Removal",
        description: "Professional cleanouts for offices and retail spaces",
        image: "/lovable-uploads/d27a78b7-3af2-41cc-9a86-cd4c76bfa10d.png",
        link: "/services/commercial-junk-removal/"
      },
      {
        title: "Demolition Services",
        description: "Safe demolition for sheds, decks, and structures",
        image: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
        link: "/services/demolition/"
      },
      {
        title: "Dumpster Rental",
        description: "Convenient dumpster rentals for home projects",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/dumpster-rental/"
      }
    ]
  };

  return <ServiceCategoryHub data={categoryData} />;
};

export default ResidentialJunkRemoval;