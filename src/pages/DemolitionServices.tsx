import ServiceCategoryHub from "@/components/ServiceCategoryHub";

const DemolitionServices = () => {
  const categoryData = {
    categoryName: "Demolition Services",
    slug: "demolition",
    heroSubtext: "Safe, affordable demolition for sheds, decks, playsets, driveways, and more. We handle the tear-down and the haul-away.",
    heroImage: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
    metaTitle: "Demolition Services Tampa Bay | Junk in the Truck Co",
    metaDescription: "Affordable Demolition Services in Tampa Bay. Same-day & next-day service with upfront pricing and eco-friendly disposal for all structures.",
    subServices: [
      {
        title: "Shed Removal",
        description: "Complete shed demolition and debris removal service, including foundation cleanup.",
        image: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
        link: "/services/demolition/shed-removal/"
      },
      {
        title: "Deck Removal",
        description: "Professional deck demolition and material disposal, including railings and stairs.",
        image: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
        link: "/services/deck-removal/"
      },
      {
        title: "Playset Removal",
        description: "Safe dismantling and removal of playground equipment and swing sets.",
        image: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
        link: "/services/demolition/playset-removal/"
      },
      {
        title: "Interior Demolition",
        description: "Controlled demolition for renovation and remodeling projects, walls to floors.",
        image: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
        link: "/services/interior-demolition/"
      },
      {
        title: "Pergola Demolition",
        description: "Expert removal of pergolas and outdoor structures with complete cleanup.",
        image: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
        link: "/services/pergola-demolition/"
      },
      {
        title: "Driveway Demo",
        description: "Professional concrete and asphalt driveway removal with proper disposal.",
        image: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
        link: "/services/driveway-demo/"
      },
      {
        title: "Fence Removal",
        description: "Complete fence removal including posts, panels, and foundation cleanup.",
        image: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
        link: "/services/fence-removal/"
      },
      {
        title: "Pool Removal",
        description: "Above-ground pool dismantling and removal with site restoration.",
        image: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
        link: "/services/pool-removal/"
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
        title: "Commercial Junk Removal",
        description: "Professional cleanouts for businesses",
        image: "/lovable-uploads/d27a78b7-3af2-41cc-9a86-cd4c76bfa10d.png",
        link: "/services/commercial-junk-removal/"
      },
      {
        title: "Dumpster Rental",
        description: "Dumpster rentals for demolition debris",
        image: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        link: "/services/dumpster-rental/"
      }
    ]
  };

  return <ServiceCategoryHub data={categoryData} />;
};

export default DemolitionServices;