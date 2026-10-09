import React from 'react';
import { Check } from 'lucide-react';
import { ServiceDetailPage } from '../components/ServiceDetailPage';
import CommercialServicesGrid from '../components/CommercialServicesGrid';
import SisterCompanyCallout from '../components/SisterCompanyCallout';
import { commercialServices, residentialServices } from '../data/services';

/**
 * What a property manager or contractor needs settled before they call. These
 * are confirmed services, not aspirational ones — COI on request, after-hours
 * by arrangement, photo confirmation, recurring routes, volume-based pricing.
 *
 * We are licensed and insured, NOT bonded. Do not add a bonded claim here or
 * anywhere else on the site.
 */
const COMMERCIAL_COMMITMENTS = [
  {
    title: 'Certificates of Insurance',
    body: 'We provide a COI naming your property or management company whenever one is required, before the crew arrives.',
  },
  {
    title: 'After-hours service by arrangement',
    body: 'Evening and early-morning work so a tenant-facing space is clear before business hours. Arranged in advance.',
  },
  {
    title: 'Before-and-after photo confirmation',
    body: 'Timestamped photos of the area cleared, sent after the job, so you can close out a work order without a site visit.',
  },
  {
    title: 'Recurring service',
    body: 'Standing routes for bulk pickups, trash-room overflow, and turnover cleanouts, on whatever interval your property needs.',
  },
  {
    title: 'Volume-based pricing',
    body: 'The same truck-fill pricing we use everywhere, so you can forecast a route or a turnover rather than wait on an hourly tally.',
  },
  {
    title: 'Commercial cleanouts of every kind',
    body: 'Offices, retail, restaurants, warehouses, storage facilities, and post-construction debris across Hillsborough and Pinellas.',
  },
];

const CommercialCommitments = () => (
  <section className="py-16 section-bg" aria-labelledby="commercial-commitments">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 id="commercial-commitments" className="text-3xl font-anton text-center mb-4">
        What We Provide for Commercial Clients
      </h2>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
        Property managers, businesses, and contractors generally need the same
        few things settled before they book. Here is where we stand on each.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {COMMERCIAL_COMMITMENTS.map((item) => (
          <div key={item.title} className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-sm">
            <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h3 className="font-medium text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mt-8 max-w-3xl mx-auto text-center">
        Commercial pricing still varies with volume, labor, access, disposal,
        material, timing, and scope — a loading-dock job and a fourth-floor
        walk-up are not the same job. Larger or specialized work is quoted after
        a walkthrough. We are licensed and insured.
      </p>
    </div>
  </section>
);

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
        answer: "Yes. We're on site Monday through Saturday, 8 AM to 6 PM, and after-hours or early-morning work can be arranged in advance so a tenant-facing space is clear before you open. We're closed Sundays."
      },
      {
        question: "Can you provide a certificate of insurance?",
        answer: "Yes. We provide a COI naming your property or management company whenever one is required, before the crew arrives. Junk in the Truck Co is licensed and insured."
      },
      {
        question: "Do you handle larger demolition work?",
        answer: "We take the small teardowns — sheds, fences, interior strip-outs, and similar. Anything structural or permitted goes to our sister company, DND Demolition, which is set up for that work."
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
          beforeWhoWeServe: (
            <>
              <CommercialCommitments />
              <CommercialServicesGrid />
            </>
          ),
          afterHowItWorks: <SisterCompanyCallout />
        }}
      />
    </>
  );
};

export default CommercialJunkRemovalService;