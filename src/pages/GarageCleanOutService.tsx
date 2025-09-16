import React from 'react';
import { ServiceDetailPage } from '../components/ServiceDetailPage';
import { residentialServices } from '../data/services';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle } from 'lucide-react';
import clutteredGarage from '../assets/cluttered-garage.jpg';

const GarageCleanOutService: React.FC = () => {
  const service = residentialServices.find(s => s.slug === 'garage-clean-out') || residentialServices[0];
  const relatedServices = residentialServices.filter(s => s.slug !== 'garage-clean-out').slice(0, 3);

  const ExpertTipsSection = () => (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Expert Tips for a Successful Garage Cleanout</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Plan and Sort</h3>
                  <p className="text-muted-foreground">Start by planning the cleanout and sorting items into keep, donate, sell, or discard categories.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Utilize Junk Removal Services from Junk in the Truck Co</h3>
                  <p className="text-muted-foreground">Consider hiring Junk in the Truck Co. This professional junk removal service offers labor assistance to help with organization and can handle the donation run and disposal all in one trip, making the process more efficient.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Optimize Storage</h3>
                  <p className="text-muted-foreground">Utilize vertical space with shelves and overhead racks, and invest in labeled storage solutions for efficient organization.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Maintenance Routine</h3>
                  <p className="text-muted-foreground">Establish a regular maintenance routine to prevent future clutter buildup and keep the garage organized.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-muted-foreground mb-4">By incorporating the services of Junk in the Truck Co, you can streamline the cleanout process and achieve an organized garage space more effectively.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => window.open('https://book.junkinthetruck.com', '_blank')}>
                  Book Online Now
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.open('tel:844-858-6546', '_self')}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call 844-858-6546
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src={clutteredGarage} 
                alt="Cluttered garage filled with boxes, furniture and items needing professional junk removal services" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <ServiceDetailPage
        service={service}
        categoryName="Junk Removal"
        categorySlug="junk-removal"
        relatedServices={relatedServices}
      />
      <ExpertTipsSection />
    </>
  );
};

export default GarageCleanOutService;