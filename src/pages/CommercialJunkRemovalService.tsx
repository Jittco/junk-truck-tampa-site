import React from 'react';
import { ServiceDetailPage } from '../components/ServiceDetailPage';
import { commercialServices, residentialServices } from '../data/services';

const CommercialJunkRemovalService: React.FC = () => {
  const service = {
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
    order: 2
  };

  const relatedServices = [...commercialServices, ...residentialServices.slice(0, 2)].slice(0, 3);

  return (
    <ServiceDetailPage
      service={service}
      categoryName="Junk Removal"
      categorySlug="junk-removal"
      relatedServices={relatedServices}
    />
  );
};

export default CommercialJunkRemovalService;