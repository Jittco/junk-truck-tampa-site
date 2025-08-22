import React from 'react';
import { ServiceDetailPage } from '../components/ServiceDetailPage';
import { residentialServices } from '../data/services';

const CleanOutService: React.FC = () => {
  const service = residentialServices.find(s => s.slug === 'clean-out') || residentialServices[0];
  const relatedServices = residentialServices.filter(s => s.slug !== 'clean-out').slice(0, 3);

  return (
    <ServiceDetailPage
      service={service}
      categoryName="Junk Removal"
      categorySlug="junk-removal"
      relatedServices={relatedServices}
    />
  );
};

export default CleanOutService;