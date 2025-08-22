import React from 'react';
import { ServiceDetailPage } from '../components/ServiceDetailPage';
import { residentialServices } from '../data/services';

const FurnitureRemovalService: React.FC = () => {
  const service = residentialServices.find(s => s.slug === 'furniture-removal') || residentialServices[0];
  const relatedServices = residentialServices.filter(s => s.slug !== 'furniture-removal').slice(0, 3);

  return (
    <ServiceDetailPage
      service={service}
      categoryName="Junk Removal"
      categorySlug="junk-removal"
      relatedServices={relatedServices}
    />
  );
};

export default FurnitureRemovalService;