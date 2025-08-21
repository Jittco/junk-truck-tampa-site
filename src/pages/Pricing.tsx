import { useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Check, MapPin, Truck, Package } from "lucide-react";

const Pricing = () => {
  const [estimatorMode, setEstimatorMode] = useState<'items' | 'pickup' | 'cubic'>('items');
  const [truckFill, setTruckFill] = useState(0);

  const tierCards = [
    { name: "Minimum / Single Item", fraction: "up to 10%", description: "Single furniture piece or appliance" },
    { name: "1/8 Truck", fraction: "12.5%", description: "Few small items or boxes" },
    { name: "1/4 Truck", fraction: "25%", description: "Couple pieces of furniture" },
    { name: "3/8 Truck", fraction: "37.5%", description: "Small room cleanout" },
    { name: "1/2 Truck", fraction: "50%", description: "Bedroom or office cleanout" },
    { name: "5/8 Truck", fraction: "62.5%", description: "Large furniture set" },
    { name: "3/4 Truck", fraction: "75%", description: "Garage or basement cleanout" },
    { name: "7/8 Truck", fraction: "87.5%", description: "Major home cleanout" },
    { name: "Full Truck", fraction: "100%", description: "Complete property cleanout" }
  ];

  const whatsIncluded = [
    "Two-man crew",
    "All loading & hauling", 
    "Responsible disposal",
    "Sweep-up",
    "Transparent on-site quote",
    "No hidden fees"
  ];

  const cities = [
    "Tampa", "Brandon", "Riverview", "Gibsonton", "Apollo Beach", "Valrico",
    "St. Petersburg", "Clearwater", "Largo", "Dunedin", "Palm Harbor", "Seminole", "Gulfport"
  ];

  const faqs = [
    {
      question: "How do you charge for junk removal?",
      answer: "We charge by truck space used - you only pay for the fraction of our truck that your items fill."
    },
    {
      question: "How big is your truck?",
      answer: "Our truck measures 8′ × 12′ × 6′ (≈21.3 yd³). One full truck equals 8 pickup truck loads."
    },
    {
      question: "Can I get a quote by photo?",
      answer: "Yes! Send us photos or book an on-site estimate for the most accurate pricing."
    },
    {
      question: "Do you recycle or donate?",
      answer: "When possible, yes. We prioritize responsible disposal through recycling and donation."
    },
    {
      question: "Any items you can't take?",
      answer: "We cannot take hazardous waste, paints/solvents, oils/fuels, asbestos, tires, batteries, medical waste, or propane/pressurized tanks."
    },
    {
      question: "Do you offer same-day service?",
      answer: "Often yes! Call 844-858-6546 to confirm same-day availability in your area."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Junk Removal Pricing | Pay by Truck Space | Tampa Bay</title>
        <meta name="description" content="Transparent junk removal pricing in Tampa Bay. See how much space your items take in the truck. 1 full truck = 8 pickup loads. Book online in minutes." />
        <link rel="canonical" href="/pricing" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-anton mb-6 text-foreground">
                Junk Removal Pricing in Tampa Bay
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                Pay only for the space you use in our truck. Visual estimator helps you see your truck fraction—no guesswork.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  Same-Day Service
                </div>
                <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  Licensed & Insured  
                </div>
                <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  Driveway-Friendly
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-lg"
                >
                  Get Pricing & Book Online
                </a>
                <a 
                  href="tel:844-858-6546"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors text-lg"
                >
                  <Phone className="h-5 w-5" />
                  Call 844-858-6546
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How Pricing Works */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
                How Our Pricing Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We price by truck space used. One full truck equals 8 pickup loads and measures 8′W × 12′L × 6′H (≈21.3 yd³). You only pay for your fraction of a truck.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {tierCards.map((tier, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-normal text-center">
                      {tier.name}
                    </CardTitle>
                    <div className="text-2xl font-bold text-primary text-center">
                      {tier.fraction}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      {tier.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Final pricing is confirmed on-site after we see your items.
            </p>
          </div>
        </section>

        {/* Visual Estimator */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
                See How Much Space Your Items Will Fill
              </h2>
              <p className="text-lg text-muted-foreground">
                Use this visual-only tool to estimate your truck fraction. No prices are displayed.
              </p>
            </div>

            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Estimator Controls */}
                  <div className="lg:w-1/2">
                    <div className="flex gap-4 mb-6">
                      <button
                        onClick={() => setEstimatorMode('items')}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          estimatorMode === 'items' 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        By Items
                      </button>
                      <button
                        onClick={() => setEstimatorMode('pickup')}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          estimatorMode === 'pickup' 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        Pickup Loads
                      </button>
                      <button
                        onClick={() => setEstimatorMode('cubic')}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          estimatorMode === 'cubic' 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        Cubic Yards
                      </button>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Truck Fill Percentage
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={truckFill}
                          onChange={(e) => setTruckFill(parseInt(e.target.value))}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>0%</span>
                          <span>50%</span>
                          <span>100%</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-gray-100 p-3 rounded">
                          <div className="font-medium">Truck Fill</div>
                          <div className="text-primary font-bold">{truckFill}%</div>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <div className="font-medium">Pickup Loads</div>
                          <div className="text-primary font-bold">{(truckFill * 8 / 100).toFixed(1)}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Truck Visual */}
                  <div className="lg:w-1/2">
                    <div className="relative bg-gray-200 rounded-lg p-4">
                      <div className="text-center mb-4">
                        <Truck className="h-12 w-12 mx-auto text-primary" />
                        <div className="text-sm font-medium">8′ × 12′ × 6′ Truck</div>
                      </div>
                      
                      <div className="h-32 bg-white border-2 border-primary rounded relative overflow-hidden">
                        <div 
                          className="absolute bottom-0 left-0 bg-primary/30 transition-all duration-300"
                          style={{ 
                            height: `${truckFill}%`, 
                            width: '100%' 
                          }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-lg font-bold text-gray-700">
                            {truckFill}% Full
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-4 gap-1 text-xs">
                        {['1/4', '1/2', '3/4', 'Full'].map((fraction, i) => (
                          <div key={i} className="text-center p-1 bg-gray-100 rounded">
                            {fraction}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground text-center mt-6">
                  Volume-only visualizer — not a price quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
                What's Included with Your Junk Removal
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatsIncluded.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Scenarios */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
                Real-World Examples (No Pricing)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-normal">
                    <Package className="h-5 w-5 text-primary" />
                    Single Items
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Mattress, recliner, refrigerator
                  </p>
                  <p className="text-sm font-medium text-primary">
                    Often Minimum or 1/8 Truck
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-normal">
                    <Truck className="h-5 w-5 text-primary" />
                    Small Loads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Sectional + 10 boxes
                  </p>
                  <p className="text-sm font-medium text-primary">
                    Often 1/4–3/8 Truck
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-8">
              These are volume examples, not price quotes.
            </p>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground flex items-center justify-center gap-3">
                <MapPin className="h-8 w-8 text-primary" />
                Proudly Serving Tampa Bay
              </h2>
              <p className="text-lg text-muted-foreground">
                Fast, friendly service across Hillsborough & Pinellas.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              {cities.map((city, index) => (
                <div key={index} className="text-center p-3 bg-card rounded-lg border">
                  <span className="text-foreground font-medium">{city}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Don't see your city? Call 844-858-6546 to check availability.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
                Pricing FAQs
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-6 font-normal">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-anton mb-6">
              Ready to Get a Spot-On Price?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book now and our crew will confirm your on-site price and handle all the heavy lifting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Book Online
              </a>
              <a 
                href="tel:844-858-6546"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg"
              >
                <Phone className="h-5 w-5" />
                Call 844-858-6546
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Pricing;