// Service Areas Data for Junk in the Truck Co.

export interface ServiceArea {
  name: string;
  slug: string;
  state: string;
  description: string;
  landmarks: string[];
  mapQuery: string;
  neighborhoods?: ServiceArea[];
  isNeighborhood?: boolean;
  parentCity?: string;
  nearbyAreas?: string[];
  localResources: {
    name: string;
    url: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const serviceAreas: ServiceArea[] = [
  {
    name: "Brandon",
    slug: "brandon",
    state: "FL",
    description: "Serving Brandon and surrounding areas with professional junk removal services. Our team knows the local neighborhoods and provides fast, reliable service throughout this growing Tampa suburb.",
    landmarks: ["Brandon Mall", "Westfield Brandon", "Brandon Regional Hospital", "Lithia Springs Park"],
    mapQuery: "Brandon,+FL",
    nearbyAreas: ["Riverview", "Valrico", "Temple Terrace", "Plant City"],
    localResources: [
      {
        name: "Hillsborough County Recycling",
        url: "https://www.hillsboroughcounty.org/residents/recycling",
        description: "Local recycling programs and waste disposal information"
      },
      {
        name: "Brandon Chamber of Commerce",
        url: "https://www.brandonchamber.com",
        description: "Local business resources and community information"
      }
    ],
    faq: [
      {
        question: "Do you provide junk removal service throughout Brandon, FL?",
        answer: "Yes! We provide comprehensive junk removal services throughout Brandon, including all neighborhoods from Providence to Bloomingdale. Our local team knows the area well and offers same-day service."
      },
      {
        question: "What areas near Brandon do you serve?",
        answer: "We serve all areas around Brandon including Riverview, Valrico, Temple Terrace, Plant City, and the greater Tampa Bay area. No location is too far for our professional team."
      },
      {
        question: "How quickly can you remove junk in Brandon?",
        answer: "We offer same-day and next-day junk removal service in Brandon. Call us early in the day for same-day availability, or book online to secure your preferred time slot."
      }
    ]
  },
  {
    name: "Carrollwood",
    slug: "carrollwood",
    state: "FL",
    description: "Professional junk removal services for Greater Carrollwood and surrounding Tampa neighborhoods. We understand the unique needs of this established community and provide tailored solutions.",
    landmarks: ["Carrollwood Cultural Center", "Lake Park", "Veterans Memorial Park", "Dale Mabry Highway"],
    mapQuery: "Greater+Carrollwood,+FL",
    nearbyAreas: ["Town 'n' Country", "Tampa Palms", "Westchase", "Citrus Park"],
    localResources: [
      {
        name: "Hillsborough County Solid Waste",
        url: "https://www.hillsboroughcounty.org/residents/recycling",
        description: "County waste management and recycling services"
      },
      {
        name: "Greater Carrollwood Chamber",
        url: "https://www.carrollwoodchamber.com",
        description: "Local business network and community resources"
      }
    ],
    faq: [
      {
        question: "Do you serve all of Greater Carrollwood?",
        answer: "Absolutely! We serve the entire Greater Carrollwood area including Village Green, Carrollwood Village, and all surrounding neighborhoods. Our team is familiar with the community and provides reliable service."
      },
      {
        question: "What makes your Carrollwood junk removal service different?",
        answer: "Our local knowledge of Carrollwood's neighborhoods, combined with our eco-friendly disposal practices and upfront pricing, makes us the preferred choice for residents and businesses in the area."
      },
      {
        question: "Can you handle large furniture removal in Carrollwood?",
        answer: "Yes! We specialize in large furniture removal throughout Carrollwood. Our experienced team can safely remove items from any floor of your home, including stairs and tight spaces."
      }
    ]
  },
  {
    name: "Temple Terrace",
    slug: "temple-terrace",
    state: "FL",
    description: "Reliable junk removal services for Temple Terrace residents and businesses. From the University of South Florida area to downtown Temple Terrace, we provide efficient and affordable junk removal.",
    landmarks: ["University of South Florida", "Temple Terrace Golf & Country Club", "Busch Gardens", "Riverfront Park"],
    mapQuery: "Temple+Terrace,+FL",
    nearbyAreas: ["Brandon", "Tampa", "Riverview", "Seffner"],
    localResources: [
      {
        name: "Temple Terrace Recycling Program",
        url: "https://templeterrace.com/services/recycling",
        description: "City recycling and waste collection services"
      },
      {
        name: "Temple Terrace Chamber of Commerce",
        url: "https://templeterracechamber.com",
        description: "Local business directory and community events"
      }
    ],
    faq: [
      {
        question: "Do you provide junk removal near USF in Temple Terrace?",
        answer: "Yes! We regularly serve the University of South Florida area and all of Temple Terrace. Perfect for student moving services, dorm cleanouts, and residential junk removal."
      },
      {
        question: "What types of junk do you remove in Temple Terrace?",
        answer: "We remove all types of household and commercial junk including furniture, appliances, electronics, yard waste, and construction debris. No job is too big or small."
      },
      {
        question: "How do I schedule junk removal in Temple Terrace?",
        answer: "Simply call us or book online! We offer flexible scheduling including same-day service. Our team will provide an upfront estimate and handle all the heavy lifting."
      }
    ]
  },
  {
    name: "South Tampa",
    slug: "south-tampa",
    state: "FL",
    description: "Premium junk removal services for South Tampa's upscale neighborhoods. From Hyde Park to Bayshore Boulevard, we provide discreet and professional junk removal services.",
    landmarks: ["Hyde Park Village", "Bayshore Boulevard", "Tampa General Hospital", "Davis Islands"],
    mapQuery: "South+Tampa,+Tampa,+FL",
    nearbyAreas: ["Downtown Tampa", "Westshore", "MacDill AFB", "Davis Islands"],
    localResources: [
      {
        name: "City of Tampa Solid Waste",
        url: "https://www.tampagov.net/solid-waste",
        description: "City waste collection and recycling programs"
      },
      {
        name: "Hyde Park Chamber",
        url: "https://www.hydeparktampa.com",
        description: "Local business association and community events"
      }
    ],
    faq: [
      {
        question: "Do you provide upscale junk removal in South Tampa?",
        answer: "Absolutely! We specialize in discreet, professional junk removal for South Tampa's premier neighborhoods. Our team is trained to work respectfully in luxury homes and condos."
      },
      {
        question: "Can you remove items from high-rise condos in South Tampa?",
        answer: "Yes! We're experienced in working with high-rise buildings and condominiums throughout South Tampa. We coordinate with building management and use proper equipment for safe removal."
      },
      {
        question: "Do you serve Davis Islands and Harbor Island?",
        answer: "Definitely! We provide comprehensive junk removal services to Davis Islands, Harbor Island, and all waterfront communities in South Tampa."
      }
    ]
  },
  {
    name: "Town 'n' Country",
    slug: "town-n-country",
    state: "FL",
    description: "Comprehensive junk removal services for Town 'n' Country and the greater Westside Tampa area. Our local team understands this diverse community's needs.",
    landmarks: ["Westfield Citrus Park", "Al Lopez Park", "Raymond James Stadium", "International Plaza"],
    mapQuery: "Town+n+Country,+FL",
    nearbyAreas: ["Carrollwood", "Westchase", "Citrus Park", "Tampa"],
    localResources: [
      {
        name: "Hillsborough County Services",
        url: "https://www.hillsboroughcounty.org/residents/recycling",
        description: "County recycling and waste management services"
      },
      {
        name: "West Tampa Chamber",
        url: "https://www.westtampachamber.com",
        description: "Business resources and community information"
      }
    ],
    faq: [
      {
        question: "Do you serve all of Town 'n' Country?",
        answer: "Yes! We serve the entire Town 'n' Country area including all neighborhoods from Westshore to Citrus Park. Our team knows the local streets and provides efficient service."
      },
      {
        question: "What's included in your Town 'n' Country junk removal service?",
        answer: "Our service includes free estimates, professional removal, cleanup, and eco-friendly disposal. We handle all the heavy lifting and leave your property clean."
      },
      {
        question: "Do you offer commercial junk removal in Town 'n' Country?",
        answer: "Absolutely! We provide commercial junk removal services for offices, retail spaces, and businesses throughout Town 'n' Country and the greater Tampa area."
      }
    ]
  }
];