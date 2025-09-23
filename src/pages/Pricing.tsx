import { useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TruckVolumeEstimator from "@/components/TruckVolumeEstimator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Check, MapPin, Truck, Package, Heart, Sofa, DollarSign } from "lucide-react";
const Pricing = () => {
  const tierCards = [{
    name: "Minimum / Single Item",
    fraction: "up to 10%",
    description: "Single furniture piece or appliance"
  }, {
    name: "1/8 Truck",
    fraction: "12.5%",
    description: "Few small items or boxes"
  }, {
    name: "1/4 Truck",
    fraction: "25%",
    description: "Couple pieces of furniture"
  }, {
    name: "3/8 Truck",
    fraction: "37.5%",
    description: "Small room cleanout"
  }, {
    name: "1/2 Truck",
    fraction: "50%",
    description: "Bedroom or office cleanout"
  }, {
    name: "5/8 Truck",
    fraction: "62.5%",
    description: "Large furniture set"
  }, {
    name: "3/4 Truck",
    fraction: "75%",
    description: "Garage or basement cleanout"
  }, {
    name: "7/8 Truck",
    fraction: "87.5%",
    description: "Major home cleanout"
  }, {
    name: "Full Truck",
    fraction: "100%",
    description: "Complete property cleanout"
  }];
  const whatsIncluded = ["Two-man crew", "All loading & hauling", "Responsible disposal", "Sweep-up", "Transparent on-site quote", "No hidden fees"];
  const cities = ["Tampa", "Brandon", "Riverview", "Gibsonton", "Apollo Beach", "Valrico", "St. Petersburg", "Clearwater", "Largo", "Dunedin", "Palm Harbor", "Seminole", "Gulfport"];
  const faqs = [{
    question: "How do you charge for junk removal?",
    answer: "We charge by truck space used - you only pay for the fraction of our truck that your items fill."
  }, {
    question: "How big is your truck?",
    answer: "Our truck measures 8′ × 12′ × 6′ (≈21.3 yd³). One full truck equals 8 pickup truck loads."
  }, {
    question: "Can I get a quote by photo?",
    answer: "Yes! Send us photos or book an on-site estimate for the most accurate pricing."
  }, {
    question: "Do you recycle or donate?",
    answer: "When possible, yes. We prioritize responsible disposal through recycling and donation."
  }, {
    question: "Any items you can't take?",
    answer: "We cannot take hazardous waste, paints/solvents, oils/fuels, asbestos, tires, batteries, medical waste, or propane/pressurized tanks."
  }, {
    question: "Do you offer same-day service?",
    answer: "Often yes! Call 844-858-6546 to confirm same-day availability in your area."
  }];
  return <>
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
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">Pay only for the space you use in our truck. Visual estimator helps you see your truck fraction, no guesswork.</p>
              
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
                <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-lg">
                  se book online
                </a>
                <a href="tel:844-858-6546" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors text-lg">
                  <Phone className="h-5 w-5" />
                  Call 844-858-6546
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Transparency */}
        <section className="py-16 md:py-20 bg-[#222222]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-anton mb-6 text-slate-50">
                Transparent, Upfront Pricing
              </h2>
              <p className="text-lg text-slate-50">
                No surprises, no hidden fees. You'll know exactly what you're paying before we start.
              </p>
            </div>

            <div className="rounded-lg shadow-lg p-8 mb-8 bg-gray-50">
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2 text-slate-950 font-medium">Volume-Based Pricing</h3>
                <p className="text-slate-950">We price by truckload, not by item or hour</p>
              </div>
              
              <div className="bg-primary/10 rounded-lg p-6 text-center mb-6 border border-green-500">
                <p className="text-lg font-semibold mb-2 text-slate-950">Most residential jobs in Tampa Bay on average</p>
                <p className="text-3xl font-anton text-primary">$349-$550</p>
                <p className="text-sm mt-2 text-slate-950">depending on size and type of items</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="border rounded-lg p-4 bg-green-50">
                  <h4 className="mb-2 font-medium text-xl text-slate-950">Small Load</h4>
                  <p className="font-bold mb-2 text-2xl text-[#18d13d]">$99-$289</p>
                  <p className="text-sm text-slate-950">Few pieces of furniture or 1-2 appliances</p>
                </div>
                <div className="border rounded-lg p-4 bg-green-50">
                  <h4 className="mb-2 font-medium text-xl text-slate-950">Medium Load</h4>
                  <p className="text-2xl font-bold text-primary mb-2">$349-$550</p>
                  <p className="text-sm text-slate-950">Room cleanout or multiple appliances</p>
                </div>
                <div className="border rounded-lg p-4 bg-green-50">
                  <h4 className="mb-2 font-medium text-xl text-slate-950">Large Load</h4>
                  <p className="text-2xl font-bold text-primary mb-2">$750-$950</p>
                  <p className="text-sm text-slate-950">Whole house cleanout or estate removal</p>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-lg font-semibold text-slate-950">
                  ✓ No hidden fees ✓ Upfront quotes ✓ No obligation estimates
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Can Expect */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
                What You Can Expect from Junk in the Truck Co.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                See how our team makes junk removal simple, stress-free, and affordable. From start to finish, we handle everything — so you can relax knowing the job's done right.
              </p>
            </div>

            {/* YouTube Video Embed */}
            <div className="mb-12">
              <div className="relative w-full max-w-2xl mx-auto bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <iframe src="https://www.youtube.com/embed/vnm7MOY1jKw" title="Junk in the Truck Co. Service Video" className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>
            </div>

            {/* Bulleted List */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-lg text-foreground">Fast, reliable service tailored to your schedule</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-lg text-foreground">Upfront pricing with no surprises</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-lg text-foreground">Professional team that respects your home and property</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg font-medium text-foreground">
                Experience the difference with Junk in the Truck Co. — we make junk removal easy!
              </p>
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
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                We keep pricing simple — pay only for the space you use in our truck, or rent an 18-yard dumpster for a flat daily rate.
              </p>
              <div className="bg-card rounded-lg p-6 max-w-2xl mx-auto mb-8">
                <p className="text-base text-foreground font-medium">
                  Truck dimensions: 8'W × 12'L × 6'H = 21.3 yd³ (1 truck = 8 pickup loads)
                </p>
              </div>
            </div>

            {/* Static Truck Fraction Graphic */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-xl font-semibold text-center mb-6">Common Truck Fractions</h3>
                
                {/* Visual truck representation */}
                <div className="mb-6">
                  <svg viewBox="0 0 800 200" className="w-full h-32">
                    {/* Full truck outline */}
                    <rect x="50" y="50" width="700" height="100" rx="10" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                    
                    {/* Fraction divisions */}
                    <line x1="225" y1="50" x2="225" y2="150" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="400" y1="50" x2="400" y2="150" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="575" y1="50" x2="575" y2="150" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4,4" />
                    
                    {/* Filled sections with different colors */}
                    <rect x="50" y="50" width="175" height="100" rx="10" fill="hsl(var(--primary) / 0.3)" />
                    <rect x="50" y="50" width="350" height="100" rx="10" fill="hsl(var(--primary) / 0.5)" />
                    <rect x="50" y="50" width="525" height="100" rx="10" fill="hsl(var(--primary) / 0.7)" />
                    <rect x="50" y="50" width="700" height="100" rx="10" fill="hsl(var(--primary) / 0.9)" />
                    
                    {/* Labels */}
                    <text x="137.5" y="105" textAnchor="middle" className="fill-white text-sm font-medium">1/8</text>
                    <text x="225" y="105" textAnchor="middle" className="fill-white text-sm font-medium">1/4</text>
                    <text x="400" y="105" textAnchor="middle" className="fill-white text-sm font-medium">1/2</text>
                    <text x="575" y="105" textAnchor="middle" className="fill-white text-sm font-medium">3/4</text>
                    <text x="750" y="105" textAnchor="middle" className="fill-white text-sm font-medium">Full</text>
                    
                    {/* Truck label */}
                    <text x="400" y="30" textAnchor="middle" className="fill-foreground text-sm">Our 8' × 12' × 6' Truck</text>
                  </svg>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="font-semibold text-primary">1/8 Truck</div>
                    <div className="text-sm text-muted-foreground">Few items</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="font-semibold text-primary">1/4 Truck</div>
                    <div className="text-sm text-muted-foreground">Small load</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="font-semibold text-primary">1/2 Truck</div>
                    <div className="text-sm text-muted-foreground">Room cleanout</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="font-semibold text-primary">Full Truck</div>
                    <div className="text-sm text-muted-foreground">Major cleanout</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-8">
              Final pricing is confirmed on-site after we see your items.
            </p>
          </div>
        </section>

        {/* Dumpster vs Junk Removal Comparison */}
        <section className="py-16 lg:py-20 bg-[#222222]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-anton mb-6 font-medium text-slate-50">
                Dumpster vs. Junk Removal: Which is Right for You?
              </h2>
              <p className="text-lg max-w-4xl mx-auto text-slate-50">
                Many Tampa Bay homeowners ask: "Is it cheaper to rent a dumpster or hire a junk removal company?" The truth is — it depends on your project. Both options save you trips to the dump, but they serve different needs. Here's a simple comparison to help you decide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Dumpster Rental Column */}
              <div className="bg-card rounded-lg border p-6">
                <div className="text-center mb-6">
                  <Truck className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-normal text-foreground">18-Yard Dumpster Rental</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-foreground mb-2 flex items-center gap-2 font-medium">
                      <Check className="h-4 w-4 text-primary" />
                      Best For
                    </h4>
                    <p className="text-muted-foreground text-sm">Ongoing projects, renovations, DIY cleanouts, roofing debris, yard work</p>
                  </div>
                  
                  <div>
                    <h4 className="text-foreground mb-2 flex items-center gap-2 font-medium">
                      <Check className="h-4 w-4 text-primary" />
                      Cost-Effectiveness
                    </h4>
                    <p className="text-muted-foreground text-sm">Most affordable for larger loads & multi-day projects</p>
                  </div>
                  
                  <div>
                    <h4 className="text-foreground mb-2 flex items-center gap-2 font-medium">
                      <Check className="h-4 w-4 text-primary" />
                      Labor
                    </h4>
                    <p className="text-muted-foreground text-sm">You load the dumpster yourself</p>
                  </div>
                  
                  <div>
                    <h4 className="text-foreground mb-2 flex items-center gap-2 font-medium">
                      <Check className="h-4 w-4 text-primary" />
                      Flexibility
                    </h4>
                    <p className="text-muted-foreground text-sm">Keep it 1–7 days, load at your pace</p>
                  </div>
                  
                  <div>
                    <h4 className="text-foreground mb-2 flex items-center gap-2 font-medium">
                      <Check className="h-4 w-4 text-primary" />
                      Included
                    </h4>
                    <p className="text-muted-foreground text-sm">1 ton disposal included, driveway-friendly placement, flexible rental</p>
                  </div>
                  
                  <div>
                    <h4 className="text-foreground mb-2 flex items-center gap-2 font-medium">
                      <Check className="h-4 w-4 text-primary" />
                      Stress Level
                    </h4>
                    <p className="text-muted-foreground text-sm">Budget-friendly but requires effort</p>
                  </div>
                </div>
              </div>

              {/* Junk Removal Column */}
              <div className="bg-card rounded-lg border p-6">
                <div className="text-center mb-6">
                  <Package className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-normal text-foreground">Full-Service Junk Removal</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-foreground mb-2 flex items-center gap-2 font-medium">
                      <Check className="h-4 w-4 text-primary" />
                      Best For
                    </h4>
                    <p className="text-muted-foreground text-sm">One-time pickups, bulky furniture, moving cleanouts, when you want zero lifting</p>
                  </div>
                  
                  <div>
                    <h4 className="text-foreground mb-2 flex items-center gap-2 font-medium">
                      <Check className="h-4 w-4 text-primary" />
                      Cost-Effectiveness
                    </h4>
                    <p className="text-muted-foreground text-sm">Flat, transparent pricing — pay only for truck space used</p>
                  </div>
                  
                  <div>
                    <h4 className="text-foreground mb-2 flex items-center gap-2 font-medium">
                      <Check className="h-4 w-4 text-primary" />
                      Labor
                    </h4>
                    <p className="text-muted-foreground text-sm">Our crew does all the lifting, loading & hauling</p>
                  </div>
                  
                  <div>
                    <h4 className="text-foreground mb-2 flex items-center gap-2 font-medium">
                      <Check className="h-4 w-4 text-primary" />
                      Flexibility
                    </h4>
                    <p className="text-muted-foreground text-sm">Same-day pickup, done in one visit</p>
                  </div>
                  
                  <div>
                    <h4 className="text-foreground mb-2 flex items-center gap-2 font-medium">
                      <Check className="h-4 w-4 text-primary" />
                      Included
                    </h4>
                    <p className="text-muted-foreground text-sm">2-man crew, sweep-up, donation/recycling whenever possible</p>
                  </div>
                  
                  <div>
                    <h4 className="text-foreground mb-2 flex items-center gap-2 font-medium">
                      <Check className="h-4 w-4 text-primary" />
                      Stress Level
                    </h4>
                    <p className="text-muted-foreground text-sm">Higher convenience — we take the burden off your shoulders</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center bg-primary/10 rounded-lg p-6">
              <p className="mb-4 text-slate-50">
                Not sure which option is best for your Tampa Bay project?
              </p>
              <a href="tel:844-858-6546" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                <Phone className="h-5 w-5" />
                Call us at 844-858-6546 and we'll recommend the most affordable fit for you
              </a>
            </div>
          </div>
        </section>

        {/* Small Load & Single Item Pickups */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sofa className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-anton text-foreground">
                  Small Load & Single Item Pickups
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-6">
                Not every job is a full truckload — and that's okay! At Junk in the Truck Co., we pick up small loads, too. Whether it's a single piece of furniture, an old mattress, or just a few items, our team is here to make removal fast and hassle-free.
              </p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
                We also offer fee-based donation pickups so that gently used items can find a second home instead of heading straight to the landfill.
              </p>
            </div>

            <div className="text-center bg-primary/5 rounded-lg p-8 border max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                👉 Book online now or give us a call to schedule your on-site appointment or free estimate today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-lg">
                  Book Now
                </a>
                <a href="tel:844-858-6546" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors text-lg">
                  <Phone className="h-5 w-5" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Estimator */}
        

        {/* What's Included */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
                What's Included with Your Junk Removal
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatsIncluded.map((item, index) => <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>)}
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
              {cities.map((city, index) => <div key={index} className="text-center p-3 bg-card rounded-lg border">
                  <span className="text-foreground font-medium">{city}</span>
                </div>)}
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Don't see your city? Call 844-858-6546 to check availability.
            </p>
          </div>
        </section>

        {/* Fee-Based Donation Pickup Service */}
        <section className="py-16 lg:py-20 bg-[#222222]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-anton text-slate-50">
                  Fee-Based Donation Pickup Service
                </h2>
              </div>
              <p className="text-lg text-slate-50 max-w-4xl mx-auto mb-8">
                Sometimes donating items isn't as simple as it sounds. Many donation centers are too far away, have limited pickup options, or simply don't have the manpower to come get your items. That's where Junk in the Truck Co. comes in.
              </p>
              <p className="text-lg text-slate-50 max-w-4xl mx-auto">
                With our fee-based donation pickup service, we handle the entire process for you:
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-slate-950 font-medium">Perfect for people who are limited on time or transportation.</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-slate-950 font-medium">If donation centers can't accept your items, we include the disposal cost so nothing is left behind.</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-slate-950 font-medium">Upon request, we can provide you with a donation receipt for accepted items.</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-slate-950 font-medium">Save yourself the hassle and let us deliver your donations — and handle the rest if they aren't accepted.</span>
                </div>
              </div>

              <div className="text-center bg-primary/5 rounded-lg p-8 border">
                <p className="text-lg text-slate-50 mb-6">
                  👉 Book your donation pickup online or call us at 844-858-6546 to schedule today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-lg">
                    Book Now
                  </a>
                  <a href="tel:844-858-6546" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors text-lg">
                    <Phone className="h-5 w-5" />
                    Call Us
                  </a>
                </div>
              </div>
            </div>
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
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-6 font-normal">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
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
              <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg">
                Book Online
              </a>
              <a href="tel:844-858-6546" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg">
                <Phone className="h-5 w-5" />
                Call 844-858-6546
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>;
};
export default Pricing;