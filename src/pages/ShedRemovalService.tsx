import React from 'react';
import { ServiceDetailPage } from '../components/ServiceDetailPage';
import { serviceCategories } from '../data/services';

const ShedRemovalService: React.FC = () => {
  const demolitionCategory = serviceCategories.find(cat => cat.slug === 'demolition');
  const service = demolitionCategory?.services.find(s => s.slug === 'shed-removal');
  
  if (!service) {
    return <div>Service not found</div>;
  }

  const relatedServices = demolitionCategory?.services.filter(s => s.slug !== 'shed-removal').slice(0, 3) || [];

  return (
    <ServiceDetailPage
      service={service}
      categoryName="Demolition Services"
      categorySlug="demolition"
      relatedServices={relatedServices}
    />
  );
};

export default ShedRemovalService;