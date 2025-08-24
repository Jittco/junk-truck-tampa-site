import React from 'react';
import { ServiceDetailPage } from '../components/ServiceDetailPage';
import { residentialServices } from '../data/services';

const CleanOutService: React.FC = () => {
  const service = residentialServices.find(s => s.slug === 'clean-out') || residentialServices[0];
  const relatedServices = residentialServices.filter(s => s.slug !== 'clean-out').slice(0, 3);

  const typesOfCleanouts = {
    intro: "We tailor our services to fit any property type, big or small:",
    items: [
      {
        category: "Apartment Cleanouts",
        description: "Move-out cleanouts, eviction junk removal, and bulky item pickup for property managers and tenants."
      },
      {
        category: "Estate Cleanouts", 
        description: "Compassionate, full-service cleanouts for estates, downsizing, and inheritance properties."
      },
      {
        category: "Foreclosure Cleanouts",
        description: "Fast, reliable junk removal to make foreclosed properties market-ready."
      },
      {
        category: "Storage Unit Cleanouts",
        description: "Clear abandoned or unpaid storage units quickly and affordably."
      },
      {
        category: "Garage & Home Cleanouts",
        description: "Reclaim your garage, basement, attic, or full home with our residential cleanout services."
      },
      {
        category: "Office & Commercial Cleanouts",
        description: "From cubicles and furniture to electronics and debris, we handle complete business cleanouts."
      }
    ],
    closing: "💡 If it's non-hazardous and fits in our truck, we'll take it — and we donate or recycle whenever possible."
  };

  return (
    <ServiceDetailPage
      service={service}
      categoryName="Junk Removal"
      categorySlug="junk-removal"
      relatedServices={relatedServices}
      typesOfCleanouts={typesOfCleanouts}
    />
  );
};

export default CleanOutService;