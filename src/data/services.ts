// CMS Data Structure for Junk in the Truck Co
export interface SubService {
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  icon?: string;
  metaTitle: string;
  metaDescription: string;
  faq: { question: string; answer: string; }[];
  order: number;
}

export interface ServiceCategory {
  name: string;
  slug: string;
  intro: string;
  heroImage: string;
  order: number;
  services: SubService[];
}

// Service Categories Data
export const serviceCategories: ServiceCategory[] = [
  {
    name: "Junk Removal",
    slug: "junk-removal",
    intro: "Professional residential and commercial junk removal services across Tampa Bay. Same-day pickup available with upfront pricing and eco-friendly disposal.",
    heroImage: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
    order: 1,
    services: [
      {
        name: "Residential Junk Removal",
        slug: "residential",
        shortDescription: "Complete home cleanouts and junk removal for Tampa Bay residents. From single items to whole house cleanouts.",
        longDescription: "Our residential junk removal service handles everything from single item pickups to complete estate cleanouts. We'll remove furniture, appliances, electronics, and any unwanted items from your home quickly and responsibly.",
        heroImage: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
        metaTitle: "Residential Junk Removal Tampa Bay | Junk in the Truck Co",
        metaDescription: "Professional residential junk removal in Tampa Bay. Same-day & next-day service with upfront pricing and eco-friendly disposal.",
        faq: [
          {
            question: "What items can you remove from my home?",
            answer: "We remove almost everything including furniture, appliances, electronics, clothing, books, and general household items. We cannot remove hazardous materials like paint, chemicals, or asbestos."
          },
          {
            question: "Do you offer same-day service?",
            answer: "Yes! We offer same-day and next-day service throughout Tampa Bay. Call us early in the day for same-day availability."
          },
          {
            question: "How do you price your services?",
            answer: "We provide upfront pricing based on volume. Our team will assess your items and give you a no-obligation quote before we start."
          }
        ],
        order: 1
      },
      {
        name: "Commercial Junk Removal",
        slug: "commercial",
        shortDescription: "Professional commercial cleanouts for offices, retail spaces, warehouses, and construction sites in Tampa Bay.",
        longDescription: "Our commercial junk removal service helps businesses clear out unwanted items efficiently. Perfect for office moves, retail renovations, warehouse cleanouts, and construction debris removal.",
        heroImage: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
        metaTitle: "Commercial Junk Removal Tampa Bay | Junk in the Truck Co",
        metaDescription: "Professional commercial junk removal in Tampa Bay. Same-day & next-day service with upfront pricing and eco-friendly disposal.",
        faq: [
          {
            question: "Do you work with businesses of all sizes?",
            answer: "Yes! We work with small businesses, large corporations, and everything in between. Our team can handle any size commercial cleanout."
          },
          {
            question: "Can you work around our business hours?",
            answer: "Absolutely. We offer flexible scheduling including evenings and weekends to minimize disruption to your business operations."
          }
        ],
        order: 2
      }
    ]
  },
  {
    name: "Demolition",
    slug: "demolition",
    intro: "Professional demolition services for residential and commercial properties in Tampa Bay. From shed removal to interior demolition.",
    heroImage: "/assets/shed-before.jpg",
    order: 2,
    services: [
      {
        name: "Shed Removal",
        slug: "shed-removal",
        shortDescription: "Complete shed demolition and removal service. We'll tear down and haul away your old shed safely and efficiently.",
        longDescription: "Our shed removal service includes complete demolition and cleanup. We'll safely tear down your old shed, remove all debris, and leave your yard clean and ready for your next project.",
        heroImage: "/assets/shed-before.jpg",
        metaTitle: "Shed Removal Tampa Bay | Junk in the Truck Co",
        metaDescription: "Professional shed removal and demolition in Tampa Bay. Same-day & next-day service with complete cleanup included.",
        faq: [
          {
            question: "Do you need permits for shed removal?",
            answer: "In most cases, no permits are required for shed removal. However, we'll check local requirements and handle any necessary permits if needed."
          },
          {
            question: "What's included in shed removal service?",
            answer: "Our service includes complete demolition, debris removal, and site cleanup. We'll leave your yard clean and level."
          }
        ],
        order: 1
      },
      {
        name: "Playset Removal",
        slug: "playset-removal",
        shortDescription: "Safe playset and swing set demolition and removal. Complete cleanup included.",
        longDescription: "Our playset removal service safely dismantles and removes old swing sets, playsets, and playground equipment. We handle all the heavy lifting and ensure complete cleanup.",
        heroImage: "/assets/yard-before.jpg",
        metaTitle: "Playset Removal Tampa Bay | Junk in the Truck Co",
        metaDescription: "Professional playset and swing set removal in Tampa Bay. Safe demolition with complete cleanup included.",
        faq: [
          {
            question: "Can you remove concrete footings?",
            answer: "Yes, we can remove concrete footings and level the ground as part of our playset removal service."
          }
        ],
        order: 2
      },
      {
        name: "Deck Removal",
        slug: "deck-removal",
        shortDescription: "Professional deck demolition and removal service. From small decks to large multi-level structures.",
        longDescription: "Our deck removal service handles complete demolition of wooden, composite, and metal decks. We'll safely remove your old deck and clean up all debris.",
        heroImage: "/assets/garage-before.jpg",
        metaTitle: "Deck Removal Tampa Bay | Junk in the Truck Co",
        metaDescription: "Professional deck demolition and removal in Tampa Bay. Safe removal with complete debris cleanup.",
        faq: [
          {
            question: "Do you remove deck footings and foundations?",
            answer: "Yes, we can remove concrete footings and foundations as part of our deck removal service."
          }
        ],
        order: 3
      },
      {
        name: "Pergola Removal",
        slug: "pergola-removal",
        shortDescription: "Complete pergola demolition and removal. Professional dismantling with full cleanup.",
        longDescription: "Our pergola removal service includes safe demolition and complete debris removal. We'll carefully dismantle your pergola and ensure your yard is left clean.",
        heroImage: "/assets/yard-after.jpg",
        metaTitle: "Pergola Removal Tampa Bay | Junk in the Truck Co",
        metaDescription: "Professional pergola demolition and removal in Tampa Bay. Safe dismantling with complete cleanup.",
        faq: [],
        order: 4
      },
      {
        name: "Driveway Demolition",
        slug: "driveway-demolition",
        shortDescription: "Concrete and asphalt driveway demolition and removal. Complete site preparation included.",
        longDescription: "Our driveway demolition service handles concrete and asphalt removal. We'll break up and haul away your old driveway and prepare the area for your new installation.",
        heroImage: "/assets/garage-after.jpg",
        metaTitle: "Driveway Demolition Tampa Bay | Junk in the Truck Co",
        metaDescription: "Professional driveway demolition and removal in Tampa Bay. Concrete and asphalt removal with site preparation.",
        faq: [
          {
            question: "Do you handle both concrete and asphalt driveways?",
            answer: "Yes, we handle demolition of both concrete and asphalt driveways of any size."
          }
        ],
        order: 5
      },
      {
        name: "Interior Demolition",
        slug: "interior-demolition",
        shortDescription: "Professional interior demolition for renovations. Walls, flooring, cabinets, and more.",
        longDescription: "Our interior demolition service helps with home and commercial renovations. We can remove walls, flooring, cabinets, fixtures, and prepare your space for remodeling.",
        heroImage: "/lovable-uploads/d27a78b7-3af2-41cc-9a86-cd4c76bfa10d.png",
        metaTitle: "Interior Demolition Tampa Bay | Junk in the Truck Co",
        metaDescription: "Professional interior demolition in Tampa Bay. Walls, flooring, cabinets removed with complete cleanup.",
        faq: [
          {
            question: "Do you handle load-bearing walls?",
            answer: "We can discuss load-bearing wall removal, but this requires proper permits and engineering consultation which we can help coordinate."
          }
        ],
        order: 6
      }
    ]
  },
  {
    name: "Dumpster Rental",
    slug: "dumpster-rental",
    intro: "Convenient dumpster rental service for your cleanup projects. 20-yard dumpsters perfect for home renovations, cleanouts, and construction projects.",
    heroImage: "/lovable-uploads/d27a78b7-3af2-41cc-9a86-cd4c76bfa10d.png",
    order: 3,
    services: [
      {
        name: "20-Yard Dumpster",
        slug: "20-yard",
        shortDescription: "Perfect for home renovations, large cleanouts, and small construction projects. Holds approximately 8 pickup truck loads.",
        longDescription: "Our 20-yard dumpster is perfect for medium to large projects. Ideal for home renovations, estate cleanouts, roofing projects, and small construction jobs. Dimensions: 22' long x 8' wide x 4' high. Can hold approximately 8 pickup truck loads of debris.",
        heroImage: "/lovable-uploads/d27a78b7-3af2-41cc-9a86-cd4c76bfa10d.png",
        metaTitle: "20-Yard Dumpster Rental Tampa Bay | Junk in the Truck Co",
        metaDescription: "Rent a 20-yard dumpster in Tampa Bay. Perfect for home renovations and cleanouts. Same-day delivery available.",
        faq: [
          {
            question: "How long can I keep the dumpster?",
            answer: "Standard rental period is 7 days. Extended rentals are available for an additional daily fee."
          },
          {
            question: "What can I put in the dumpster?",
            answer: "Most household and construction debris is accepted. We cannot accept hazardous materials, tires, appliances with freon, or electronics."
          },
          {
            question: "Do you deliver to my location?",
            answer: "Yes, we deliver throughout Tampa Bay. We'll need a clear, flat area for placement with adequate access for our delivery truck."
          }
        ],
        order: 1
      }
    ]
  }
];

// Individual Services for Residential and Commercial Junk Removal
export const residentialServices: SubService[] = [
  {
    name: "Residential Junk Removal",
    slug: "residential-junk-removal",
    shortDescription: "Complete home cleanouts and junk removal for Tampa Bay residents. From single items to whole house cleanouts.",
    longDescription: "Our residential junk removal service handles everything from single item pickups to complete estate cleanouts. We'll remove furniture, appliances, electronics, and any unwanted items from your home quickly and responsibly.",
    heroImage: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
    metaTitle: "Residential Junk Removal Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional residential junk removal in Tampa Bay. Same-day & next-day service with upfront pricing and eco-friendly disposal.",
    faq: [
      {
        question: "What items can you remove from my home?",
        answer: "We remove almost everything including furniture, appliances, electronics, clothing, books, and general household items. We cannot remove hazardous materials like paint, chemicals, or asbestos."
      },
      {
        question: "Do you offer same-day service?",
        answer: "Yes! We offer same-day and next-day service throughout Tampa Bay. Call us early in the day for same-day availability."
      },
      {
        question: "How do you price your services?",
        answer: "We provide upfront pricing based on volume. Our team will assess your items and give you a no-obligation quote before we start."
      }
    ],
    order: 0
  },
  {
    name: "Appliance Removal",
    slug: "appliance-removal",
    shortDescription: "Professional appliance removal service. We'll haul away old refrigerators, washers, dryers, and all major appliances.",
    longDescription: "Our appliance removal service handles all major appliances including refrigerators, washers, dryers, dishwashers, stoves, and more. We ensure eco-friendly disposal and recycling whenever possible.",
    heroImage: "/assets/garage-before.jpg",
    metaTitle: "Appliance Removal Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional appliance removal in Tampa Bay. Same-day & next-day service with eco-friendly disposal and recycling.",
    faq: [
      {
        question: "Do you remove built-in appliances?",
        answer: "Yes, we can remove built-in appliances. Additional labor charges may apply for complex disconnection and removal."
      },
      {
        question: "What do you do with old appliances?",
        answer: "We prioritize recycling and donate working appliances when possible. We ensure all appliances are disposed of responsibly."
      }
    ],
    order: 1
  },
  {
    name: "Furniture Removal",
    slug: "furniture-removal",
    shortDescription: "Complete furniture removal service. From single pieces to entire room sets, we'll haul away any unwanted furniture.",
    longDescription: "Our furniture removal service handles everything from single pieces to complete room sets. We'll remove sofas, chairs, tables, beds, dressers, and any other furniture items from your home.",
    heroImage: "/assets/shed-after.jpg",
    metaTitle: "Furniture Removal Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional furniture removal in Tampa Bay. Same-day & next-day service for all types of furniture removal.",
    faq: [
      {
        question: "Do you disassemble furniture?",
        answer: "Yes, we can disassemble large furniture pieces to make removal easier and safer."
      }
    ],
    order: 2
  },
  {
    name: "Hot Tub Removal",
    slug: "hot-tub-removal",
    shortDescription: "Professional hot tub and spa removal service. We'll safely disconnect and haul away your old hot tub.",
    longDescription: "Our hot tub removal service includes safe disconnection, demolition if necessary, and complete removal. We handle all types of hot tubs and spas, both above-ground and built-in units.",
    heroImage: "/assets/yard-before.jpg",
    metaTitle: "Hot Tub Removal Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional hot tub and spa removal in Tampa Bay. Safe disconnection and removal with complete cleanup.",
    faq: [
      {
        question: "Do you handle electrical disconnection?",
        answer: "We can handle basic disconnection, but complex electrical work may require a licensed electrician which we can help coordinate."
      }
    ],
    order: 3
  },
  {
    name: "Yard Waste Removal",
    slug: "yard-waste-removal",
    shortDescription: "Complete yard waste and debris removal. Tree limbs, leaves, grass clippings, and all organic yard waste.",
    longDescription: "Our yard waste removal service handles all types of organic debris including tree limbs, leaves, grass clippings, brush, and storm debris. We ensure eco-friendly disposal through composting and recycling.",
    heroImage: "/assets/yard-after.jpg",
    metaTitle: "Yard Waste Removal Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional yard waste and debris removal in Tampa Bay. Eco-friendly disposal with same-day service available.",
    faq: [
      {
        question: "Do you remove tree stumps?",
        answer: "We can remove above-ground portions of stumps, but full stump grinding requires specialized equipment which we can arrange."
      }
    ],
    order: 4
  },
  {
    name: "Garage Clean Out",
    slug: "garage-clean-out",
    shortDescription: "Complete garage cleanout service. We'll sort, haul away unwanted items, and leave your garage organized and clean.",
    longDescription: "Our garage cleanout service helps you reclaim your space. We'll sort through items, remove unwanted clutter, and can help organize what stays. Perfect for moving preparation or general decluttering.",
    heroImage: "/assets/garage-after.jpg",
    metaTitle: "Garage Clean Out Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional garage cleanout service in Tampa Bay. Complete sorting and removal with organization assistance.",
    faq: [],
    order: 5
  },
  {
    name: "Apartment Clean Out",
    slug: "apartment-clean-out",
    shortDescription: "Full apartment cleanout service. Perfect for move-outs, downsizing, or tenant turnovers.",
    longDescription: "Our apartment cleanout service handles complete clearing of rental units and apartments. Ideal for landlords dealing with tenant turnovers or individuals moving to smaller spaces.",
    heroImage: "/assets/shed-before.jpg",
    metaTitle: "Apartment Clean Out Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional apartment cleanout service in Tampa Bay. Complete clearing for move-outs and tenant turnovers.",
    faq: [],
    order: 6
  },
  {
    name: "Estate Clean Out",
    slug: "estate-clean-out",
    shortDescription: "Comprehensive estate and property cleanouts. Sensitive handling of personal belongings with donation and recycling options.",
    longDescription: "Our estate cleanout service provides compassionate and thorough clearing of entire properties. We handle personal belongings with care and work with families to donate, recycle, or dispose of items appropriately.",
    heroImage: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
    metaTitle: "Estate Clean Out Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional estate and property cleanout service in Tampa Bay. Compassionate handling with donation and recycling options.",
    faq: [
      {
        question: "Do you handle valuable items found during cleanouts?",
        answer: "Yes, we'll identify potentially valuable items and work with you to determine the best course of action - whether that's keeping, selling, or donating them."
      }
    ],
    order: 7
  },
  {
    name: "Clean Out Services",
    slug: "clean-out",
    shortDescription: "Comprehensive cleanout services for homes, offices, and properties of all sizes.",
    longDescription: "Our cleanout services handle complete clearing of any space. Whether it's a home, office, storage unit, or entire property, we provide thorough and efficient cleanout services with responsible disposal.",
    heroImage: "/lovable-uploads/e1659d55-3e7c-4e9e-91b7-01af90f4ed00.png",
    metaTitle: "Clean Out Services Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional cleanout services in Tampa Bay. Complete clearing for homes, offices, and properties with eco-friendly disposal.",
    faq: [
      {
        question: "What types of properties do you clean out?",
        answer: "We handle cleanouts for residential homes, commercial properties, storage units, estates, and any other space that needs clearing."
      }
    ],
    order: 8
  },
  {
    name: "Couch Disposal",
    slug: "couch-disposal",
    shortDescription: "Professional couch and sofa removal service. We'll haul away old couches, sectionals, and upholstered furniture.",
    longDescription: "Our couch disposal service handles removal of all types of seating furniture including couches, sofas, sectionals, recliners, and chairs. We prioritize donation and recycling to keep furniture out of landfills.",
    heroImage: "/assets/shed-after.jpg",
    metaTitle: "Couch Disposal Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional couch and sofa removal in Tampa Bay. Same-day service with donation and recycling options.",
    faq: [
      {
        question: "Do you remove sectional couches?",
        answer: "Yes, we handle all types of couches including large sectionals. We can disassemble them if needed for easier removal."
      }
    ],
    order: 9
  },
  {
    name: "Mattress Removal",
    slug: "mattress-removal",
    shortDescription: "Professional mattress and box spring removal. Eco-friendly disposal with recycling when possible.",
    longDescription: "Our mattress removal service handles old mattresses and box springs. We ensure responsible disposal and recycling of materials whenever possible, keeping these bulky items out of landfills.",
    heroImage: "/assets/shed-after.jpg",
    metaTitle: "Mattress Removal Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional mattress and box spring removal in Tampa Bay. Eco-friendly disposal with recycling options.",
    faq: [],
    order: 8
  },
  {
    name: "Electronics (E-Waste) Removal",
    slug: "electronics-removal",
    shortDescription: "Responsible electronics and e-waste removal. TVs, computers, phones, and all electronic devices properly recycled.",
    longDescription: "Our electronics removal service handles all types of electronic waste including TVs, computers, phones, printers, and other devices. We ensure proper recycling and data destruction when needed.",
    heroImage: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
    metaTitle: "Electronics Removal Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional electronics and e-waste removal in Tampa Bay. Responsible recycling and data destruction services.",
    faq: [
      {
        question: "Do you offer data destruction services?",
        answer: "Yes, we can arrange secure data destruction for computers and devices containing sensitive information."
      }
    ],
    order: 9
  }
];

export const commercialServices: SubService[] = [
  {
    name: "Commercial Junk Removal",
    slug: "commercial-junk-removal", 
    shortDescription: "Professional commercial cleanouts for offices, retail spaces, warehouses, and construction sites in Tampa Bay.",
    longDescription: "Our commercial junk removal service helps businesses clear out unwanted items efficiently. Perfect for office moves, retail renovations, warehouse cleanouts, and construction debris removal.",
    heroImage: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
    metaTitle: "Commercial Junk Removal Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional commercial junk removal in Tampa Bay. Same-day & next-day service with upfront pricing and eco-friendly disposal.",
    faq: [
      {
        question: "Do you work with businesses of all sizes?",
        answer: "Yes! We work with small businesses, large corporations, and everything in between. Our team can handle any size commercial cleanout."
      },
      {
        question: "Can you work around our business hours?",
        answer: "Absolutely. We offer flexible scheduling including evenings and weekends to minimize disruption to your business operations."
      }
    ],
    order: 0
  },
  {
    name: "Office Clean Out",
    slug: "office-clean-out",
    shortDescription: "Complete office cleanouts for businesses moving, downsizing, or renovating. Secure document destruction available.",
    longDescription: "Our office cleanout service helps businesses clear out unwanted furniture, equipment, and documents. We offer secure document destruction and can work around your business hours to minimize disruption.",
    heroImage: "/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png",
    metaTitle: "Office Clean Out Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional office cleanout service in Tampa Bay. Secure document destruction with flexible scheduling available.",
    faq: [
      {
        question: "Do you offer secure document destruction?",
        answer: "Yes, we provide secure document shredding and destruction services for sensitive business documents."
      }
    ],
    order: 1
  },
  {
    name: "Warehouse Clean Out",
    slug: "warehouse-clean-out",
    shortDescription: "Large-scale warehouse and industrial cleanouts. Equipment removal, debris clearing, and space reclamation.",
    longDescription: "Our warehouse cleanout service handles large-scale commercial clearing including equipment removal, inventory clearing, and debris removal. Perfect for facility relocations or space reconfiguration.",
    heroImage: "/lovable-uploads/d27a78b7-3af2-41cc-9a86-cd4c76bfa10d.png",
    metaTitle: "Warehouse Clean Out Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional warehouse cleanout service in Tampa Bay. Large-scale equipment and debris removal for commercial facilities.",
    faq: [],
    order: 2
  },
  {
    name: "Retail Clean Out",
    slug: "retail-clean-out",
    shortDescription: "Retail space cleanouts for store closures, renovations, or tenant changes. Fixture and inventory removal.",
    longDescription: "Our retail cleanout service helps with store closures, renovations, and tenant turnovers. We remove fixtures, displays, inventory, and prepare retail spaces for their next use.",
    heroImage: "/assets/garage-before.jpg",
    metaTitle: "Retail Clean Out Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional retail space cleanout service in Tampa Bay. Store closure and renovation cleanouts with fixture removal.",
    faq: [],
    order: 3
  },
  {
    name: "Construction Debris Removal",
    slug: "construction-debris",
    shortDescription: "Construction and renovation debris removal. Drywall, flooring, fixtures, and all construction waste properly disposed.",
    longDescription: "Our construction debris removal service handles all types of renovation and construction waste including drywall, flooring, fixtures, lumber, and other building materials. We ensure proper disposal and recycling.",
    heroImage: "/assets/garage-after.jpg",
    metaTitle: "Construction Debris Removal Tampa Bay | Junk in the Truck Co",
    metaDescription: "Professional construction debris removal in Tampa Bay. Renovation waste disposal with proper recycling and disposal.",
    faq: [
      {
        question: "Do you handle hazardous construction materials?",
        answer: "We cannot remove hazardous materials like asbestos or lead-based materials. These require specialized handling by certified professionals."
      }
    ],
    order: 4
  }
];

// Helper function to get service by category and slug
export function getServiceBySlug(categorySlug: string, serviceSlug: string): SubService | null {
  const category = serviceCategories.find(cat => cat.slug === categorySlug);
  if (!category) return null;
  
  const service = category.services.find(svc => svc.slug === serviceSlug);
  if (service) return service;
  
  // Also check residential and commercial services
  if (categorySlug === 'junk-removal') {
    const residentialService = residentialServices.find(svc => svc.slug === serviceSlug);
    if (residentialService) return residentialService;
    
    const commercialService = commercialServices.find(svc => svc.slug === serviceSlug);
    if (commercialService) return commercialService;
  }
  
  return null;
}

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): ServiceCategory | null {
  return serviceCategories.find(cat => cat.slug === slug) || null;
}

// Helper function to get all services for sitemap
export function getAllServices(): { category: string; services: SubService[] }[] {
  const result = serviceCategories.map(cat => ({
    category: cat.slug,
    services: cat.services
  }));
  
  // Add individual residential and commercial services
  result.push({
    category: 'junk-removal',
    services: [...residentialServices, ...commercialServices]
  });
  
  return result;
}