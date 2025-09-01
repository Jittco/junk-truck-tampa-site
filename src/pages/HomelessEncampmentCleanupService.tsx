import React from 'react';
import { ServiceDetailPage } from '../components/ServiceDetailPage';
import { residentialServices } from '../data/services';

const HomelessEncampmentCleanupService: React.FC = () => {
  const service = residentialServices.find(s => s.slug === 'homeless-encampment-cleanup') || residentialServices[0];
  const relatedServices = residentialServices.filter(s => s.slug !== 'homeless-encampment-cleanup').slice(0, 3);

  return (
    <ServiceDetailPage
      service={service}
      categoryName="Specialty Cleanup"
      categorySlug="specialty-cleanup"
      relatedServices={relatedServices}
    />
  );
};

export default HomelessEncampmentCleanupService;