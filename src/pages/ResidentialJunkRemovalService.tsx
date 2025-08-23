import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle, Clock, Shield, Heart, Star, Users, Recycle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CustomerReviews from '../components/CustomerReviews';
import ServiceAreas from '../components/ServiceAreas';
import BeforeAfter from '../components/BeforeAfter';
const ResidentialJunkRemovalService: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Service"],
    "name": "Junk in the Truck Co - Residential Junk Removal",
    "description": "Professional residential junk removal services in Tampa Bay. We handle furniture, appliances, electronics, and household clutter with same-day service available.",
    "url": "https://junkinthetruck.co/services/residential-junk-removal",
    "telephone": "844-858-6546",
    "priceRange": "$95-$400",
    "areaServed": ["Tampa, FL", "Brandon, FL", "Carrollwood, FL", "Riverview, FL", "Apollo Beach, FL", "St. Petersburg, FL", "Seffner, FL", "Temple Terrace, FL", "Gibsonton, FL", "Valrico, FL", "Plant City, FL", "Lithia, FL"],
    "serviceType": "Residential Junk Removal",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Junk in the Truck Co",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "FL",
        "addressLocality": "Tampa Bay"
      }
    }
  };
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Do I need to move items outside first?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No! Our crew handles all the heavy lifting. We'll remove items from wherever they're located - attics, basements, garages, or any room in your home. You just point and we'll do the rest."
      }
    }, {
      "@type": "Question",
      "name": "What do you do with usable items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We believe in giving items a second life. Usable furniture, clothing, and household goods are donated to local Tampa Bay charities. Items that can't be donated are recycled whenever possible, keeping them out of landfills."
      }
    }, {
      "@type": "Question",
      "name": "Can you remove items from attics or upstairs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our experienced team safely removes items from attics, upstairs rooms, basements, and tight spaces. We have the equipment and expertise to handle challenging removals."
      }
    }, {
      "@type": "Question",
      "name": "How soon can you schedule pickup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer same-day and next-day service throughout Tampa Bay. Call us early in the day for same-day availability, or book online to secure your preferred time slot."
      }
    }, {
      "@type": "Question",
      "name": "What forms of payment do you accept?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept cash, check, and all major credit cards for your convenience. Payment is due upon completion of the job, and we'll provide you with a detailed receipt."
      }
    }]
  };
  const serviceAreas = ["Tampa", "Brandon", "Carrollwood", "Riverview", "Apollo Beach", "St. Petersburg", "Seffner", "Temple Terrace", "Gibsonton", "Valrico", "Plant City", "Lithia", "Ruskin", "Sun City Center"];
  return <>
      <Helmet>
        <title>Residential Junk Removal Tampa Bay | Junk in the Truck Co</title>
        <meta name="description" content="Professional residential junk removal in Tampa Bay. Same-day service, upfront pricing, and eco-friendly disposal. Book online or call 844-858-6546." />
        <meta name="keywords" content="residential junk removal Tampa, junk removal services Tampa Bay, furniture removal Tampa, appliance removal Tampa Bay" />
        <link rel="canonical" href="https://junkinthetruck.co/services/residential-junk-removal" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-anton mb-4 text-foreground">
                Residential Junk Removal in Tampa Bay Made Simple
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Stress-free junk removal for homeowners. We handle the heavy lifting, 
                hauling, and responsible disposal - you just point and relax.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="cta-button" onClick={() => window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank')}>
                  Book Online Now
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('tel:844-858-6546', '_self')}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call 844-858-6546
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/lovable-uploads/6a335dcb-180c-4c15-b5dd-a1ba512c588d.png" alt="Residential junk removal service in Tampa Bay" className="rounded-lg shadow-lg w-full h-80 object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
              Tampa Bay's Trusted Residential Junk Removal Service
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a homeowner tackling a spring cleaning project, a landlord preparing a rental property, 
              or a renter moving out, our residential junk removal service eliminates the stress and safety risks 
              of handling heavy items yourself. We save you time, protect you from injury, and give you peace of 
              mind knowing your unwanted items are disposed of responsibly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Save Your Time</h3>
              <p className="text-muted-foreground">Skip the multiple trips to the dump. We handle everything in one visit.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Stay Safe</h3>
              <p className="text-muted-foreground">Avoid injury from lifting heavy furniture and appliances. Leave it to the pros.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Peace of Mind</h3>
              <p className="text-muted-foreground">Licensed, insured, and committed to responsible disposal and donation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Remove */}
      <section className="py-16 md:py-20 bg-[#222222]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton mb-6 text-slate-50">
              What We Remove From Your Home
            </h2>
            <p className="text-lg text-slate-50">
              From single items to complete house cleanouts, we handle it all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-xl mb-4 text-slate-950 font-medium">Common Household Items:</h3>
              <ul className="space-y-2">
                {["Furniture (sofas, chairs, tables, dressers)", "Appliances (refrigerators, washers, dryers)", "Electronics (TVs, computers, stereos)", "Mattresses and box springs", "Exercise equipment", "General household clutter", "Books, clothing, and personal items", "Yard debris and outdoor furniture"].map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>)}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-4 bg-red-50">
              <h3 className="text-xl mb-4 font-medium text-slate-950">We Cannot Accept:</h3>
              <p className="text-red-800 font-medium mb-2">Hazardous Materials</p>
              <ul className="text-red-700 text-sm space-y-2">
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-white text-xs font-bold">×</span>
                  </div>
                  Paint and chemicals
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-white text-xs font-bold">×</span>
                  </div>
                  Asbestos materials
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-white text-xs font-bold">×</span>
                  </div>
                  Medical waste
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-white text-xs font-bold">×</span>
                  </div>
                  Flammable liquids
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-white text-xs font-bold">×</span>
                  </div>
                  Batteries and propane tanks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <BeforeAfter />

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
              How Our Residential Junk Removal Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, transparent, and hassle-free process from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Call or Book Online</h3>
              <p className="text-muted-foreground">Schedule your appointment online in 60 seconds or call us at 844-858-6546.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Free On-Site Estimate</h3>
              <p className="text-muted-foreground">We arrive on time and provide an upfront, no-obligation quote based on volume.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">We Haul It Away</h3>
              <p className="text-muted-foreground">Our crew handles all the heavy lifting and loading. You just point to what goes.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Donation & Recycling</h3>
              <p className="text-muted-foreground">We donate usable items and recycle what we can, keeping waste out of landfills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="py-16 md:py-20 bg-secondary/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
              Transparent, Upfront Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              No surprises, no hidden fees. You'll know exactly what you're paying before we start.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Volume-Based Pricing</h3>
              <p className="text-muted-foreground">We price by truckload, not by item or hour</p>
            </div>
            
            <div className="bg-primary/10 rounded-lg p-6 text-center mb-6">
              <p className="text-lg font-semibold text-foreground mb-2">Most residential jobs in Tampa Bay on average</p>
              <p className="text-3xl font-anton text-primary">$349-$550</p>
              <p className="text-sm text-muted-foreground mt-2">depending on size and type of items</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Small Load</h4>
                <p className="text-2xl font-bold text-primary mb-2">$95-$289</p>
                <p className="text-sm text-muted-foreground">Few pieces of furniture or 1-2 appliances</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Medium Load</h4>
                <p className="text-2xl font-bold text-primary mb-2">$349-$550</p>
                <p className="text-sm text-muted-foreground">Room cleanout or multiple appliances</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Large Load</h4>
                <p className="text-2xl font-bold text-primary mb-2">$750-$950</p>
                <p className="text-sm text-muted-foreground">Whole house cleanout or estate removal</p>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-lg font-semibold text-foreground">
                ✓ No hidden fees ✓ Upfront quotes ✓ No obligation estimates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
              Why Tampa Bay Homeowners Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Locally Owned & Operated</h3>
              <p className="text-muted-foreground">Proudly serving Tampa Bay families since 2019 with faith-based, integrity-driven service.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Fully Licensed & Insured</h3>
              <p className="text-muted-foreground">Your home and belongings are protected with comprehensive insurance coverage.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Hundreds of 5-Star Reviews</h3>
              <p className="text-muted-foreground">Our Google reviews speak for themselves - exceptional service every time.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Trusted by Professionals</h3>
              <p className="text-muted-foreground">Realtors, contractors, and property managers rely on us for their clients.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Eco-Friendly Disposal</h3>
              <p className="text-muted-foreground">We donate and recycle whenever possible, minimizing landfill waste.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Same-Day Service</h3>
              <p className="text-muted-foreground">When you need it gone today, we're ready to help with prompt service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Service Areas */}
      <ServiceAreas />

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-secondary/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
              Other Services You May Need
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete your cleanup with our specialized removal services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            name: "Appliance Removal",
            slug: "appliance-removal",
            description: "Professional removal of refrigerators, washers, dryers, and all major appliances",
            image: "/lovable-uploads/b5924327-a32f-49e2-af94-fe75d37ef1cc.png"
          }, {
            name: "Furniture Removal",
            slug: "furniture-removal",
            description: "Complete furniture removal from single pieces to entire room sets",
            image: "/lovable-uploads/683f36db-cf67-4418-a899-c0ee94ca3ce8.png"
          }, {
            name: "Hot Tub Removal",
            slug: "hot-tub-removal",
            description: "Safe disconnection and removal of hot tubs and spas",
            image: "/lovable-uploads/c766f531-e1bc-4150-baef-3c7d0dd966bf.png"
          }].map(service => <div key={service.slug} className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl mb-3 text-foreground font-medium">{service.name}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`/services/${service.slug}/`}>
                      Learn More
                    </a>
                  </Button>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
              Residential Junk Removal FAQs
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[{
            question: "Do I need to move items outside first?",
            answer: "No! Our crew handles all the heavy lifting. We'll remove items from wherever they're located - attics, basements, garages, or any room in your home. You just point and we'll do the rest."
          }, {
            question: "What do you do with usable items?",
            answer: "We believe in giving items a second life. Usable furniture, clothing, and household goods are donated to local Tampa Bay charities. Items that can't be donated are recycled whenever possible, keeping them out of landfills."
          }, {
            question: "Can you remove items from attics or upstairs?",
            answer: "Absolutely! Our experienced team safely removes items from attics, upstairs rooms, basements, and tight spaces. We have the equipment and expertise to handle challenging removals."
          }, {
            question: "How soon can you schedule pickup?",
            answer: "We offer same-day and next-day service throughout Tampa Bay. Call us early in the day for same-day availability, or book online to secure your preferred time slot."
          }, {
            question: "What forms of payment do you accept?",
            answer: "We accept cash, check, and all major credit cards for your convenience. Payment is due upon completion of the job, and we'll provide you with a detailed receipt."
          }].map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-6 font-normal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 font-inter">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-anton mb-6">
            Ready to Reclaim Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let unwanted junk take over your home. Our Tampa Bay team is ready to help you 
            create the clean, organized space you deserve. Book your appointment today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg" className="px-8 py-4 text-lg" asChild>
              <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae">
                Book Online Now
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-foreground" asChild>
              <a href="tel:8448586546">
                <Phone className="w-5 h-5 mr-2" />
                Call 844-858-6546
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>;
};
export default ResidentialJunkRemovalService;