import React from 'react';
import { ServiceDetailPage } from '../components/ServiceDetailPage';
import { serviceCategories } from '../data/services';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Phone, Calendar, DollarSign, Recycle, Star, Clock, Shield, ThumbsUp, Users, Wrench, Home, AlertTriangle, Calendar as CalendarIcon, Hammer } from 'lucide-react';
import shedBeforeNew from '../assets/shed-before-new.jpg';
import shedAfterNew from '../assets/shed-after-new.jpg';

const ShedRemovalService: React.FC = () => {
  const demolitionCategory = serviceCategories.find(cat => cat.slug === 'demolition');
  const service = demolitionCategory?.services.find(s => s.slug === 'shed-removal');
  
  if (!service) {
    return <div>Service not found</div>;
  }

  const relatedServices = demolitionCategory?.services.filter(s => s.slug !== 'shed-removal').slice(0, 3) || [];

  // Custom Why Choose Us section for shed removal
  const whyChooseUsFeatures = [
    { icon: Shield, text: "Licensed & insured professionals" },
    { icon: DollarSign, text: "Free, upfront estimates — no hidden fees" },
    { icon: Recycle, text: "Eco-friendly disposal & recycling practices" },
    { icon: Clock, text: "Same-day or next-day appointments" },
    { icon: ThumbsUp, text: "Friendly, local team you can trust" }
  ];

  // Types of sheds we remove
  const shedTypes = [
    "Wooden Sheds",
    "Metal Sheds", 
    "Plastic Sheds",
    "Backyard Storage Units",
    "DIY Storage Sheds"
  ];

  // Demolition process steps
  const demolitionSteps = [
    {
      title: "Preparation",
      description: "We remove doors, windows, and glass panes.",
      icon: Wrench
    },
    {
      title: "Roof Removal", 
      description: "Shingles, sub-roof boards, and supports are carefully dismantled.",
      icon: Home
    },
    {
      title: "Wall & Siding",
      description: "Using reciprocating saws, pry bars, and hammers, we cut shed walls into manageable pieces for quick removal.",
      icon: Hammer
    },
    {
      title: "Framing",
      description: "The remaining shed frame is broken down piece by piece.",
      icon: Wrench
    },
    {
      title: "Floor & Base",
      description: "Wooden floors are hauled away, while concrete slabs are demolished using jackhammers and sledgehammers. Debris is carted off in wheelbarrows straight into our truck.",
      icon: Home
    }
  ];

  // Warning signs
  const warningSigns = [
    "The exterior is cracked, peeling, or falling apart.",
    "The door is sagging or won't close properly.", 
    "The roof leaks during storms.",
    "The floor is rotting or unsafe.",
    "You simply don't like the way it looks anymore."
  ];

  const customSections = {
    afterHowItWorks: (
      <>
        {/* Why Choose Junk in the Truck Co - Enhanced for Shed Removal */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-anton mb-6 text-center">Why Choose Junk in the Truck Co?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Choosing the right team for shed demolition matters. At Junk in the Truck Co, we've built our reputation on delivering hassle-free service and guaranteed results:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {whyChooseUsFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-background/80 rounded-lg p-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Shed Demolition */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-anton mb-6 text-center">Before & After Shed Demolition</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Nothing shows the difference we make like a good before-and-after. Take a look at how we transform cluttered, unsafe spaces into clean, open areas:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <img 
                    src={shedBeforeNew} 
                    alt="Old, rotting shed before removal" 
                    className="rounded-lg shadow-lg w-full h-64 object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">Before</h3>
                  <p className="text-muted-foreground">Old, rotting sheds taking up valuable yard space.</p>
                </div>
                <div className="text-center">
                  <img 
                    src={shedAfterNew} 
                    alt="Clean cleared area after shed removal" 
                    className="rounded-lg shadow-lg w-full h-64 object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">After</h3>
                  <p className="text-muted-foreground">A wide-open, cleared area ready for your next project, garden, or brand-new shed.</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button size="lg" className="cta-button" onClick={() => window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank')}>
                  Get Your Free Estimate
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What Can You Expect */}
        <section className="py-16 section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-anton mb-6 text-center">What Can You Expect from Junk in the Truck Co?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  When you book shed demolition and removal with Junk in the Truck Co, we handle everything from start to finish. Our team will disassemble, break down, and clean up the debris left behind from your old shed.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We know pricing matters, which is why we provide free, no-obligation estimates so you can plan your project without stress. Our upfront pricing includes taxes, labor, and disposal fees — no hidden costs, no surprises.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Upon arrival, we confirm your estimate before starting. Once approved, our crew gets to work immediately and hauls away every piece of debris. All you need to do is sit back and enjoy your newly cleared space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Shed Removal Cost */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-anton mb-6">Shed Removal Cost in Tampa Bay</h2>
              <div className="bg-primary/10 rounded-lg p-8 mb-8">
                <p className="text-lg text-muted-foreground mb-4">
                  At Junk in the Truck Co, transparency is key. The average cost of shed removal ranges from <strong className="text-primary">$200–$2,000</strong>, depending on size, location, and construction type.
                </p>
                <p className="text-muted-foreground mb-6">
                  We always provide accurate quotes upfront so you know exactly what you're paying for. Call today to schedule your appointment and get a customized estimate for your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="cta-button" onClick={() => window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank')}>
                    Get Free Estimate
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => window.open('tel:844-858-6546', '_self')}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call 844-858-6546
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Do We Tear Down a Shed */}
        <section className="py-16 section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-anton mb-6 text-center">How Do We Tear Down a Shed?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Our shed demolition process is safe, efficient, and detail-focused:
              </p>
              <div className="space-y-6">
                {demolitionSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-background rounded-lg p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8 text-lg">
                When we're done, you're left with a clean, open space ready for a new shed, garden upgrade, or backyard project.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Sheds We Remove */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-anton mb-6 text-center">Types of Sheds We Remove</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                No matter what type of structure you have, our team can remove it:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {shedTypes.map((type, index) => (
                  <div key={index} className="bg-primary/10 rounded-lg p-6 text-center">
                    <Home className="w-8 h-8 text-primary mx-auto mb-3" />
                    <span className="font-semibold text-foreground">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5 Signs It's Time to Remove Your Old Shed */}
        <section className="py-16 section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-anton mb-6 text-center">5 Signs It's Time to Remove Your Old Shed</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Not sure if your shed is ready to go? Here are some common signs:
              </p>
              <div className="space-y-4 mb-8">
                {warningSigns.map((sign, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-background rounded-lg p-4">
                    <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{sign}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mb-6">
                If any of these sound familiar, it's time for shed removal in Tampa Bay. Our team handles the heavy lifting, demolition, and disposal so you can reclaim your outdoor space stress-free.
              </p>
              <div className="text-center">
                <Button size="lg" className="cta-button" onClick={() => window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank')}>
                  Schedule Your Shed Removal
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  };

  return (
    <ServiceDetailPage
      service={service}
      categoryName="Demolition Services"
      categorySlug="demolition"
      relatedServices={relatedServices}
      customSections={customSections}
    />
  );
};

export default ShedRemovalService;