import React from 'react';
import { ServiceDetailPage } from '../components/ServiceDetailPage';
import { residentialServices } from '../data/services';

const EstateCleanOutService: React.FC = () => {
  const service = residentialServices.find(s => s.slug === 'estate-clean-out') || residentialServices[0];
  const relatedServices = residentialServices.filter(s => s.slug !== 'estate-clean-out').slice(0, 3);

  return (
    <ServiceDetailPage
      service={service}
      categoryName="Junk Removal"
      categorySlug="junk-removal"
      relatedServices={relatedServices}
    />
  );
};

export default EstateCleanOutService;