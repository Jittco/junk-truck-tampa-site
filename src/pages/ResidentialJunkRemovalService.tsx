import React from 'react';
import { ServiceDetailPage } from '../components/ServiceDetailPage';
import { residentialServices } from '../data/services';

const ResidentialJunkRemovalService: React.FC = () => {
  const service = residentialServices.find(s => s.slug === 'residential-junk-removal') || {
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
    order: 1
  };

  const relatedServices = residentialServices.filter(s => s.slug !== 'residential-junk-removal').slice(0, 3);

  return (
    <ServiceDetailPage
      service={service}
      categoryName="Junk Removal"
      categorySlug="junk-removal"
      relatedServices={relatedServices}
    />
  );
};

export default ResidentialJunkRemovalService;