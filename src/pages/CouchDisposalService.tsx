import React from 'react';
import { ServiceDetailPage } from '../components/ServiceDetailPage';
import { residentialServices } from '../data/services';

const CouchDisposalService: React.FC = () => {
  const service = residentialServices.find(s => s.slug === 'couch-disposal') || residentialServices[0];
  const relatedServices = residentialServices.filter(s => s.slug !== 'couch-disposal').slice(0, 3);

  return (
    <ServiceDetailPage
      service={service}
      categoryName="Junk Removal"
      categorySlug="junk-removal"
      relatedServices={relatedServices}
    />
  );
};

export default CouchDisposalService;