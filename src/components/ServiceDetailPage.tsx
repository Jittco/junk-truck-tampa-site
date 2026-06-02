import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';
import Footer from './Footer';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { SubService } from '../data/services';
import { Clock, DollarSign, Recycle, Star, Phone, Calendar } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import LocalBusinessSchema from './LocalBusinessSchema';
import BreadcrumbSchema from './BreadcrumbSchema';
import ServiceAreasLinks from './ServiceAreasLinks';
import { Link } from 'react-router-dom';
interface WhoWeServeItem {
  category: string;
  description: string;
}
interface ServiceDetailPageProps {
  service: SubService;
  categoryName: string;
  categorySlug: string;
  relatedServices: SubService[];
  whoWeServe?: {
    intro: string;
    items: WhoWeServeItem[];
    closing: string;
  };
  typesOfCleanouts?: {
    intro: string;
    items: {
      category: string;
      description: string;
    }[];
    closing: string;
  };
  servicesWeOffer?: {
    intro: string;
    items: {
      category: string;
      description: string;
    }[];
    closing: string;
  };
  customSections?: {
    afterHowItWorks?: React.ReactNode;
    beforeWhoWeServe?: React.ReactNode;
  };
}
export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  categoryName,
  categorySlug,
  relatedServices,
  whoWeServe,
  typesOfCleanouts,
  servicesWeOffer,
  customSections
}) => {
  const currentYear = new Date().getFullYear();
  const benefits = [{
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "No hidden fees or surprises. We provide clear, honest pricing before we start."
  }, {
    icon: Clock,
    title: "Same-Day Service",
    description: "Quick response times with same-day and next-day service available."
  }, {
    icon: Recycle,
    title: "Eco-Friendly Disposal",
    description: "We prioritize recycling and donation to minimize environmental impact."
  }, {
    icon: Star,
    title: "Professional Team",
    description: "Experienced, insured team members who treat your property with respect."
  }];
  const processSteps = [{
    icon: Calendar,
    title: "Book Online",
    description: "Schedule your service online in 60 seconds or call us directly."
  }, {
    icon: DollarSign,
    title: "Free Estimate",
    description: "We'll assess your items and provide upfront, honest pricing."
  }, {
    icon: Star,
    title: "Fast Removal",
    description: "Our professional team quickly and safely removes your items."
  }, {
    icon: Recycle,
    title: "Responsible Disposal",
    description: "We donate, recycle, and dispose of items responsibly."
  }];
  const structuredData = service.slug === 'appliance-removal' ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Appliance Removal",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Junk in the Truck Co.",
      "image": "https://www.junkinthetruckco.com/logo.png",
      "url": "https://www.junkinthetruckco.com/services/junk-removal/appliance-removal",
      "telephone": "844-858-6546",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3810 W San Carlos Street",
        "addressLocality": "Tampa",
        "addressRegion": "FL",
        "postalCode": "33629",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "Tampa Bay, Brandon, Riverview, Gibsonton, Apollo Beach, Ruskin, Valrico, Carrollwood"
    },
    "description": "Professional appliance removal in Tampa Bay. We haul refrigerators, freezers, washers, dryers, stoves, ovens, dishwashers, AC units, and more with eco-friendly disposal."
  } : {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.shortDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Junk in the Truck Co",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3810 W San Carlos Street",
        "addressLocality": "Tampa Bay",
        "addressRegion": "FL",
        "postalCode": "33629",
        "addressCountry": "US"
      },
      "telephone": "844-858-6546",
      "url": "https://www.junkinthetruckco.com"
    },
    "areaServed": "Tampa Bay, FL",
    "serviceType": service.name
  };
  const faqStructuredData = service.slug === 'garage-clean-out' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How much does it cost to declutter a garage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Costs depend on volume, access, and item types. For most homes it is a few hundred dollars; extreme, wall-to-wall or hoarding cleanouts can reach into the thousands. An on-site quote is provided before any work begins."
      }
    }, {
      "@type": "Question",
      "name": "How to clean out a garage full of junk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use four piles: keep, donate, recycle, dispose. Create a staging area, work left-to-right and top-to-bottom, box small items, and stack large items by type. For heavy or unsafe items, book a professional cleanout for safe lifting, hauling, and compliant disposal."
      }
    }, {
      "@type": "Question",
      "name": "How much to clear out a garage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It varies with how packed the space is, presence of bulky or heavy items, stairs, and any hazardous materials. Many standard cleanouts land in the few-hundred-dollar range; multi-car or very full garages can be higher."
      }
    }, {
      "@type": "Question",
      "name": "How much is junk removal for a garage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing typically reflects the truck space used plus labor and disposal. A few bulky items may be modest, while full-garage cleanouts or specialty items cost more. Providers give an upfront quote before work starts."
      }
    }, {
      "@type": "Question",
      "name": "What should I do before the crew arrives?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlock access, clear the driveway, separate valuables and paperwork, unplug appliances, and secure pets. Label donate vs. keep piles to speed the process."
      }
    }, {
      "@type": "Question",
      "name": "Do you donate or recycle garage items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Usable items are donated when possible. Metals, e-waste, and cardboard are recycled, and hazardous materials are handled per local regulations."
      }
    }]
  } : service.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faq.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;
  return <>
      <LocalBusinessSchema 
        serviceName={service.name}
        serviceDescription={service.metaDescription}
        serviceUrl={`https://www.junkinthetruckco.com/services/${categorySlug}/${service.slug}/`}
      />
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:image" content={service.heroImage} />
        <meta property="og:url" content={`https://www.junkinthetruckco.com/services/${categorySlug}/${service.slug}/`} />
        <link rel="canonical" href={`https://www.junkinthetruckco.com/services/${categorySlug}/${service.slug}/`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        {faqStructuredData && <script type="application/ld+json">
            {JSON.stringify(faqStructuredData)}
          </script>}
      </Helmet>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: categoryName, url: `/services/${categorySlug}/` },
          { name: service.name, url: `/services/${categorySlug}/${service.slug}/` },
        ]}
      />

      <Navigation />

      <main>
        {/* Breadcrumbs */}
        <nav className="bg-muted py-4">
          <div className="container mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li>›</li>
              <li><a href="/services" className="hover:text-primary">Services</a></li>
              <li>›</li>
              <li><a href={`/services/${categorySlug}/`} className="hover:text-primary">{categoryName}</a></li>
              <li>›</li>
              <li className="text-foreground">{service.name}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-anton mb-4 text-foreground">
                  {service.name} in Tampa Bay
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {service.shortDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="cta-button" onClick={() => window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank')}>
                    Book Online in 60 Seconds
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => window.open('tel:844-858-6546', '_self')}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call 844-858-6546
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img src={service.heroImage} alt={`${service.name} service in Tampa Bay`} className={`rounded-lg shadow-lg w-full h-80 object-cover ${service.slug === 'appliance-removal' ? 'object-bottom' : 'object-top'}`} />
              </div>
            </div>
          </div>
        </section>

        {/* Appliance Removal Overview Section (only for appliance removal) */}
        {service.slug === 'appliance-removal' && <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-anton mb-6 text-center">Appliance Removal & Disposal Services in Tampa Bay</h2>
                <h3 className="text-2xl font-medium mb-8 text-center text-primary">Full-Service Appliance Hauling Made Simple</h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The average home has more than 15 major appliances — and eventually, every one of them needs to be replaced. When bulky items like refrigerators, ovens, or washing machines reach the end of their life, the real challenge is figuring out how to safely and responsibly get rid of them.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At Junk in the Truck Co., we make appliance removal easy. Our team handles everything from disconnecting and lifting to hauling and recycling, so you don't have to risk injury or waste time. Whether it's a single broken fridge or a full set of outdated appliances, we'll clear them out quickly and leave the area clean.
                  </p>
                </div>
              </div>
            </div>
          </section>}

        {/* Service Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-anton mb-8 text-center">What Our {service.name} Includes</h2>
              <div className="prose prose-lg max-w-none">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        <span>Complete removal of all unwanted items</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        <span>Professional team with proper equipment</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        <span>Same-day and next-day service available</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        <span>Upfront pricing with no hidden fees</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        <span>Eco-friendly donation and recycling</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        <span>Complete cleanup and debris removal</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize eco-friendly disposal through donation and recycling programs, ensuring your unwanted items are handled responsibly and sustainably.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Appliances We Remove Section (only for appliance removal) */}
        {service.appliancesWeRemove && <section className="py-16 section-bg">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-anton mb-8 text-center">Appliances We Remove</h2>
                <p className="text-lg text-muted-foreground mb-8 text-center">
                  {service.appliancesWeRemove.intro}
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {service.appliancesWeRemove.items.map((appliance, index) => <div key={index} className="bg-background border rounded-lg p-4 text-center">
                      <span className="font-semibold">{appliance}</span>
                    </div>)}
                </div>
                <p className="text-center text-muted-foreground text-lg">
                  {service.appliancesWeRemove.closing}
                </p>
              </div>
            </div>
          </section>}

        {/* Service Overview */}
        

        {/* Custom Section Before Who We Serve */}
        {customSections?.beforeWhoWeServe}
        
        {/* Who We Serve Section */}
        {whoWeServe && <section className="py-16">
            <div className="container mx-auto px-4 bg-[t#2] bg-[#222222]">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-anton mb-8 text-center text-slate-50">🏢 Who We Serve</h2>
                <p className="text-lg mb-8 text-center text-slate-50">
                  {whoWeServe.intro}
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {whoWeServe.items.map((item, index) => <div key={index} className="border rounded-lg p-6 bg-green-50">
                      <h3 className="text-lg text-foreground mb-2 font-medium">{item.category}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>)}
                </div>
                <p className="text-center text-slate-950">
                  {whoWeServe.closing}
                </p>
              </div>
            </div>
          </section>}

        {/* Key Benefits */}
        <section className="section-bg text-slate-50 py-[20px]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-anton text-center mb-12">Why Choose Junk in the Truck Co?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-anton mb-2">{benefit.title}</h3>
                    <p className="text-slate-950">{benefit.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-anton text-center mb-12">How Our {service.name} Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-anton mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Custom Section After How It Works */}
        {customSections?.afterHowItWorks}

        {/* Service Area Section */}
        <section className="py-16 section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-anton mb-8">Serving Tampa Bay and Surrounding Communities</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We proudly serve all of Tampa Bay with fast, reliable {service.name.toLowerCase()} services. 
                Our professional team is ready to help customers throughout the greater Tampa area.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 font-medium">
                {["Tampa", "Brandon", "Carrollwood", "Riverview", "Apollo Beach", "St. Petersburg", "Seffner", "Temple Terrace"].map((city, index) => <div key={index} className="bg-background border rounded-lg p-3">
                    <span className="font-semibold">{city}</span>
                  </div>)}
              </div>
              <p className="text-muted-foreground">
                <a href="/service-areas/" className="text-primary hover:underline">
                  View all service areas
                </a> we cover in the Tampa Bay region.
              </p>
            </div>
          </div>
        </section>

        {/* Google Business Profile Map Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Serving Tampa Bay & Surrounding Communities — view our location, hours and reviews on Google.
              </p>
              
              {/* GBP Map Preview: Static image + Open in Google Maps button */}
              <div className="max-w-[900px] mx-auto text-center">
                <img src="https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png" alt="Map preview for Junk in the Truck Co. in Tampa Bay" className="w-[100px] h-auto opacity-75 mx-auto my-[18px]" loading="lazy" />
                <p className="my-[6px] mb-[14px] text-muted-foreground">See directions, hours and reviews on Google</p>

                <a href="https://share.google/8g6Efh9rhmdj578cp" target="_blank" rel="noopener" className="inline-block py-3 px-[18px] rounded-lg bg-[#1a73e8] text-white no-underline font-semibold hover:bg-[#1557b0] transition-colors">
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {service.faq.length > 0 && <section className="py-16 section-bg">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-anton text-center mb-12">
                  {service.slug === 'garage-clean-out' ? '❓ Garage Cleanout FAQs' : 'Frequently Asked Questions'}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {service.faq.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-lg font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>)}
                </Accordion>
              </div>
            </div>
          </section>}

        {/* Related Services - Enhanced with better linking */}
        {relatedServices.length > 0 && <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-anton text-center mb-4">Related {categoryName}</h2>
                <p className="text-center text-muted-foreground mb-12">
                  Explore our other {categoryName.toLowerCase()} options in Tampa Bay
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedServices.slice(0, 3).map((relatedService, index) => <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                      <CardContent className="p-6">
                        <img src={relatedService.heroImage} alt={`${relatedService.name} in Tampa Bay`} className="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
                        <h3 className="text-xl font-anton mb-2">{relatedService.name}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{relatedService.shortDescription}</p>
                        <Link to={`/services/${categorySlug}/${relatedService.slug}/`} className="inline-flex items-center text-primary hover:underline font-medium">
                          Learn More →
                        </Link>
                      </CardContent>
                    </Card>)}
                </div>
                <div className="text-center mt-8">
                  <Link to={`/services/${categorySlug}/`}>
                    <Button variant="outline" size="lg">
                      View All {categoryName}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>}

        {/* Service Areas internal links */}
        <ServiceAreasLinks serviceName={service.name} />

        {/* Conversion Band */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-anton mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get your free estimate now and schedule your service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank')}>
                Book Online in 60 Seconds
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => window.open('tel:844-858-6546', '_self')}>
                <Phone className="w-4 h-4 mr-2" />
                Call 844-858-6546
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>;
};