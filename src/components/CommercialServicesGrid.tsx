import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CommercialService {
  id: string;
  title: string;
  shortDescription: string;
  revealText: string;
}

const CommercialServicesGrid = () => {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const services: CommercialService[] = [
    {
      id: 'apartment-complexes',
      title: 'Apartment Complexes',
      shortDescription: 'Bulky item pickups for abandoned furniture, mattresses, and appliances.',
      revealText: 'On-call or scheduled routes; photo confirmations; volume-based pricing; code-compliant cleanups.'
    },
    {
      id: 'office-cleanouts',
      title: 'Office Cleanouts',
      shortDescription: 'Cubicle/workstation disassembly; removal of desks, chairs, files.',
      revealText: 'Relocations/remodels/downsizing; floor protection; sweep-clean finish; COI available.'
    },
    {
      id: 'storage-unit-cleanouts',
      title: 'Storage Unit Cleanouts',
      shortDescription: 'Partner with storage facilities to clear abandoned units.',
      revealText: 'Same/next-day service; before/after photos; donation & recycling options.'
    },
    {
      id: 'trash-bin-overflow',
      title: 'Trash Bin Overflow',
      shortDescription: 'Rapid removal of box piles and bulk debris around dumpsters/bins.',
      revealText: 'Recurring schedules; after-hours options; route-based pricing.'
    },
    {
      id: 'electronic-recycling',
      title: 'Electronic Recycling (E-Waste)',
      shortDescription: 'Responsible pickup of computers, monitors, printers, AV.',
      revealText: 'Data-sensitive handling; recycling receipts; chain-of-custody available.'
    }
  ];

  const toggleCard = (cardId: string) => {
    const newExpandedCards = new Set(expandedCards);
    if (expandedCards.has(cardId)) {
      newExpandedCards.delete(cardId);
    } else {
      newExpandedCards.add(cardId);
    }
    setExpandedCards(newExpandedCards);
  };

  const handleKeyDown = (event: React.KeyboardEvent, cardId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCard(cardId);
    }
  };

  return (
    <section className="py-16 md:py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-anton mb-4 text-foreground">
            Commercial Junk Removal Services We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized services tailored for businesses and property managers
          </p>
        </div>

        <div 
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'
          }}
        >
          {services.map((service) => {
            const isExpanded = expandedCards.has(service.id);
            
            return (
              <Card 
                key={service.id}
                className="group transition-all duration-300 hover:shadow-lg"
                style={{ borderRadius: '16px' }}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-anton text-xl text-foreground leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.shortDescription}
                    </p>
                    
                    <button
                      onClick={() => toggleCard(service.id)}
                      onKeyDown={(e) => handleKeyDown(e, service.id)}
                      className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full px-4 py-2 bg-primary/5 hover:bg-primary/10"
                      aria-expanded={isExpanded}
                      aria-controls={`details-${service.id}`}
                      style={{ borderRadius: '9999px' }}
                    >
                      <span className="font-medium">Learn more</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 transition-transform" />
                      ) : (
                        <ChevronDown className="w-4 h-4 transition-transform" />
                      )}
                    </button>
                    
                    <div
                      id={`details-${service.id}`}
                      className={`transition-all duration-300 overflow-hidden ${
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                      style={{
                        transform: isExpanded ? 'translateY(0)' : 'translateY(-10px)',
                        transition: window.matchMedia('(prefers-reduced-motion: reduce)').matches 
                          ? 'opacity 0.3s ease-out' 
                          : 'all 0.3s ease-out'
                      }}
                    >
                      <div className="pt-4 border-t border-border/50 space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {service.revealText}
                        </p>
                        
                        <Button 
                          className="w-full" 
                          style={{ 
                            backgroundColor: '#0c63ff',
                            color: 'white',
                            borderRadius: '9999px'
                          }}
                          asChild
                        >
                          <a 
                            href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Get a Free Estimate
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommercialServicesGrid;