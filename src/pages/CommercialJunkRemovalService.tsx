import React from 'react';
import { ServiceDetailPage } from '../components/ServiceDetailPage';
import CommercialServicesGrid from '../components/CommercialServicesGrid';
import { commercialServices, residentialServices } from '../data/services';

const CommercialJunkRemovalService: React.FC = () => {
  const service = {
    name: "Commercial Junk Removal",
    slug: "commercial-junk-removal",
    shortDescription: "Professional commercial cleanouts for offices, retail spaces, warehouses, and construction sites in Tampa Bay.",
    longDescription: "Our commercial junk removal service helps businesses clear out unwanted items efficiently. Perfect for office moves, retail renovations, warehouse cleanouts, and construction debris removal.",
    heroImage: "/lovable-uploads/39d5fc41-5246-40fa-85e0-39c712a42e89.png",
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
  };

  const cleanOut = residentialServices.find(s => s.slug === 'clean-out');
  const relatedServices = [cleanOut!, ...commercialServices, ...residentialServices]
    .filter((s, i, arr) => s && arr.findIndex(x => x.slug === s.slug) === i)
    .slice(0, 3);

  const whoWeServe = {
    intro: "Junk in the Truck Co. provides tailored commercial junk removal services across Tampa Bay for businesses of all sizes. We deliver speed, affordability, and reliability to help your business maintain a clean, professional environment.",
    items: [
      {
        category: "Offices",
        description: "Removal of desks, cubicles, filing cabinets, chairs, and electronics"
      },
      {
        category: "Retail Stores",
        description: "Cleanouts of shelving, fixtures, racks, and packaging"
      },
      {
        category: "Warehouses & Industrial Spaces",
        description: "Pallets, equipment, machinery parts, and bulk debris hauling"
      },
      {
        category: "Restaurants",
        description: "Dining furniture, kitchen appliances, cooking equipment, and food-related waste"
      },
      {
        category: "Property Managers & Realtors",
        description: "Tenant junk removal, eviction cleanouts, abandoned property, and foreclosure services"
      },
      {
        category: "Storage Facilities",
        description: "Cleanouts for abandoned or unpaid storage units and lockers"
      }
    ],
    closing: "We deliver reliable business junk removal services across Tampa Bay and surrounding communities."
  };

  const servicesWeOffer = {
    intro: "Junk in the Truck Co. provides customized junk removal services for different types of commercial properties in Tampa Bay, helping property managers, facility owners, and operators maintain clean, safe, and professional spaces.",
    items: [
      {
        category: "Apartment Complexes & HOAs",
        description: "Bulky item pickup (sofas, mattresses, appliances) to keep communities clean and prevent illegal dumping."
      },
      {
        category: "Storage Unit Facilities",
        description: "Fast cleanouts for abandoned or unpaid units; remove tenant-left junk and help prevent illegal dumping."
      },
      {
        category: "Warehouses & Industrial Complexes",
        description: "Hauling of excess trash, pallets, equipment, and debris to improve safety and free up warehouse space."
      },
      {
        category: "Restaurants & Retail Stores",
        description: "Removal of fixtures, shelving, appliances, and clutter during remodels, closures, or daily operations."
      },
      {
        category: "Property Managers & Realtors",
        description: "Tenant junk removal, eviction cleanouts, and foreclosure services to keep rental units market-ready."
      }
    ],
    closing: "💡 Whether it's keeping an apartment community clean, clearing pallets from a warehouse, or preventing illegal dumping at a storage facility, our team delivers reliable commercial junk removal across Tampa Bay."
  };

  return (
    <>
      <ServiceDetailPage
        service={service}
        categoryName="Junk Removal"
        categorySlug="junk-removal"
        relatedServices={relatedServices}
        whoWeServe={whoWeServe}
        servicesWeOffer={servicesWeOffer}
        customSections={{
          beforeWhoWeServe: <CommercialServicesGrid />
        }}
      />
    </>
  );
};

export default CommercialJunkRemovalService;