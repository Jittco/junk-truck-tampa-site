import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { serviceCategories } from '../data/services';
import { Clock, DollarSign, Recycle, Star, Phone, Calendar } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import YouTubeLite from '../components/YouTubeLite';

const PlaysetRemovalService: React.FC = () => {
  const demolitionCategory = serviceCategories.find(cat => cat.slug === 'demolition');
  const service = demolitionCategory?.services.find(s => s.slug === 'playset-removal');
  
  if (!service) {
    return <div>Service not found</div>;
  }

  const relatedServices = demolitionCategory?.services.filter(s => s.slug !== 'playset-removal').slice(0, 3) || [];

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

  const structuredData = {
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
      "url": "https://junkinthetruckco.com"
    },
    "areaServed": "Tampa Bay, FL",
    "serviceType": service.name
  };

  const faqData = [
    {
      category: "Playset Removal Costs",
      questions: [
        {
          question: "How much does it cost to remove a playset?",
          answer: "In Tampa Bay, residential playset removal typically ranges from $275 to $850 depending on size, condition, and access. Commercial playset removal usually costs $1,000 to $3,500, depending on the scope of the project."
        },
        {
          question: "How much does it cost to move a swing set?",
          answer: "Moving a swing set costs about the same as removal — usually $275 to $850 for residential playsets. Larger commercial playsets may be higher due to disassembly and reassembly."
        }
      ]
    },
    {
      category: "Playset Removal & Disposal",
      questions: [
        {
          question: "How to get rid of an old playset?",
          answer: "Hire a professional junk removal or demolition company like Junk in the Truck Co. We safely dismantle, haul away, and dispose of old playsets — recycling or donating materials when possible."
        },
        {
          question: "How to dispose of a playset?",
          answer: "You can donate it if it's still usable, recycle the parts, or schedule professional removal. If the playset is unsafe or broken, removal and eco-friendly disposal are best."
        },
        {
          question: "What to do with an old playset?",
          answer: "Options include selling, donating, or recycling it. If it's damaged or unsafe, call Junk in the Truck Co. for fast, responsible removal."
        }
      ]
    },
    {
      category: "Safety & Dismantling",
      questions: [
        {
          question: "How do I move an assembled playset?",
          answer: "Large playsets should be disassembled first for safety. Moving a fully assembled set risks injury or damage. Our team provides safe disassembly and hauling."
        },
        {
          question: "How to tear down a playset?",
          answer: "Remove swings and slides first, then dismantle the frame piece by piece. We recommend professional help for safety and disposal."
        },
        {
          question: "How to take down a play yard?",
          answer: "Play yards can be disassembled panel by panel. Our crew can break it down quickly and safely, then haul away all materials."
        },
        {
          question: "Can you burn swing set wood?",
          answer: "We don't recommend it. Many playsets are treated or painted, releasing harmful chemicals if burned. Recycling or disposal is safer."
        }
      ]
    },
    {
      category: "HOA Rules & Home Value",
      questions: [
        {
          question: "Does a playset increase home value?",
          answer: "Not usually. While it may appeal to families with young children, many buyers prefer a clear yard. Removing a playset can improve curb appeal before selling."
        },
        {
          question: "Do you need HOA approval for playset?",
          answer: "Most HOAs require approval before installing a playset. Removal typically does not require approval, but it's best to check your community's rules."
        },
        {
          question: "What happens if I do something without HOA approval?",
          answer: "Your HOA may fine you or require you to remove the playset. Always review HOA guidelines first."
        },
        {
          question: "Can you just refuse to join an HOA?",
          answer: "If you purchase a home in an HOA community, membership is usually mandatory. Opting out isn't typically an option."
        },
        {
          question: "Is a swing set a structure?",
          answer: "Yes. Most HOAs and zoning laws consider swing sets as temporary structures, which may be subject to regulations."
        }
      ]
    },
    {
      category: "Children & Playsets",
      questions: [
        {
          question: "At what age do kids stop playing on playsets?",
          answer: "Most children outgrow backyard playsets around ages 10 to 12. Many families remove or replace playsets once kids have moved on to other activities."
        }
      ]
    }
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(category => 
      category.questions.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:image" content={service.heroImage} />
        <meta property="og:url" content={`https://junkinthetruckco.com/services/demolition/${service.slug}/`} />
        <link rel="canonical" href={`https://junkinthetruckco.com/services/demolition/${service.slug}/`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

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
              <li><a href="/services/demolition" className="hover:text-primary">Demolition</a></li>
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
                <img src={service.heroImage} alt={`${service.name} service in Tampa Bay`} className="rounded-lg shadow-lg w-full h-80 object-cover object-top" />
              </div>
            </div>
          </div>
        </section>

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

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-anton text-center mb-8">Why Choose Junk in the Truck Co. for Playset Removal in Tampa Bay?</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                When you're ready to remove a backyard playset or a community playground, here's why families and HOAs across Tampa Bay call us:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-primary-foreground text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-anton text-lg mb-1">Local & Reliable</h3>
                      <p className="text-muted-foreground">Proudly serving Tampa, Brandon, Riverview, Apollo Beach, and St. Petersburg.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-primary-foreground text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-anton text-lg mb-1">Residential & Commercial</h3>
                      <p className="text-muted-foreground">From small swing sets to full HOA playgrounds.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-primary-foreground text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-anton text-lg mb-1">Full-Service Removal</h3>
                      <p className="text-muted-foreground">Disassembly, hauling borders, mulch, or sand, plus complete cleanup.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-primary-foreground text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-anton text-lg mb-1">Safe & Insured</h3>
                      <p className="text-muted-foreground">Our trained crew uses the right tools to protect your property.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-primary-foreground text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-anton text-lg mb-1">Eco-Friendly Disposal</h3>
                      <p className="text-muted-foreground">We recycle and donate materials whenever possible.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-primary-foreground text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-anton text-lg mb-1">Fast Scheduling</h3>
                      <p className="text-muted-foreground">Same-day or next-day service in most cases.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-lg font-medium text-primary">
                👉 Reclaim your space today with <strong>Tampa Bay playset removal by Junk in the Truck Co.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-anton text-center mb-12">How Our {service.name} Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section className="py-16 section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-anton text-center mb-8">Watch Our Playset Removal in Action</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                See the Junk in the Truck Co. team in action! Whether it's a backyard swing set or a large commercial play structure, we provide safe, efficient playset removal services across Tampa Bay. Watch how we help homeowners and businesses reclaim their space.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Residential Playset Removal */}
                <div className="text-center">
                  <h3 className="text-2xl font-anton mb-4">Residential Playset Removal</h3>
                  <div className="relative w-full aspect-[9/16] mb-4 rounded-lg overflow-hidden shadow-lg">
                    <YouTubeLite 
                      id="903IN2vnf0Y" 
                      title="Residential Playset Removal in Tampa Bay backyard"
                      aspect="9/16"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    In this short video, we complete a residential playset removal in Tampa Bay, safely dismantling and hauling away an old wooden swing set. Our team handles all the heavy lifting and eco-friendly disposal so families in Tampa, Riverview, Brandon, and Apollo Beach can enjoy clutter-free backyards again.
                  </p>
                </div>

                {/* Commercial Playset Removal */}
                <div className="text-center">
                  <h3 className="text-2xl font-anton mb-4">Commercial Playset Removal</h3>
                  <div className="relative w-full aspect-[9/16] mb-4 rounded-lg overflow-hidden shadow-lg">
                    <YouTubeLite 
                      id="2W4BoiBaI7M" 
                      title="Commercial Playset Removal in Tampa Bay playground"
                      aspect="9/16"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Here you'll see a commercial playset removal in Tampa Bay, where our crew safely took down a large play structure for a local property. From schools and churches to parks and HOAs, Junk in the Truck Co. provides professional, fully insured removal services for playsets of all sizes across St. Petersburg, Carrollwood, and the greater Tampa Bay area.
                  </p>
                </div>
              </div>

              {/* Internal Link Button */}
              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.location.href = '/services/demolition/'}
                >
                  Explore All Demolition Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-anton mb-8">Serving Tampa Bay and Surrounding Communities</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We proudly serve all of Tampa Bay with fast, reliable {service.name.toLowerCase()} services. 
                Our professional team is ready to help customers throughout the greater Tampa area.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 font-medium">
                {["Tampa", "Brandon", "Carrollwood", "Riverview", "Apollo Beach", "St. Petersburg", "Seffner", "Temple Terrace"].map((city, index) => (
                  <div key={index} className="bg-background border rounded-lg p-3">
                    <span className="font-semibold">{city}</span>
                  </div>
                ))}
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
        <section className="py-16 section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Serving Tampa Bay & Surrounding Communities — view our location, hours and reviews on Google.
              </p>
              
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

        {/* DIY Dumpster Rental Option */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-anton text-center mb-8">Want to Tear Down Your Own Playset? We've Got You Covered.</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                If you'd rather <strong>demo your playset yourself</strong>, we make cleanup easy with our <strong>20-yard dumpster rental</strong>. Perfect for swing sets, mulch, rubber borders, and wood debris, our dumpster gives you the flexibility to work at your own pace.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Flat-rate pricing with a <strong>1-ton weight limit</strong> (just $100 per ton over)</span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Affordable rates starting at <strong>$350 for a 20-yard dumpster</strong></span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Easy driveway delivery and pickup</span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Plenty of space for playset parts, borders, mulch, and yard debris</span>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-lg text-primary mb-8">
                👉 Want to learn more? Visit our <strong>Dumpster Rental page</strong> for full details.
              </p>
              
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="cta-button"
                  onClick={() => window.location.href = '/services/dumpster-rental/'}
                >
                  Learn More About Dumpster Rental
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-anton text-center mb-12">Frequently Asked Questions About Playset Removal</h2>
              
              {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h3 className="text-2xl font-anton mb-6 text-primary">{category.category}</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={`${categoryIndex}-${faqIndex}`} value={`category-${categoryIndex}-item-${faqIndex}`}>
                        <AccordionTrigger className="text-left text-lg font-medium">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
              
              {/* CTA after FAQs */}
              <div className="text-center mt-12 pt-8 border-t">
                <h3 className="text-xl font-anton mb-4">Ready for Your Playset Removal?</h3>
                <p className="text-muted-foreground mb-6">Get your free estimate in under 60 seconds</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="cta-button" onClick={() => window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank')}>
                    Get a Free Estimate
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => window.open('tel:844-858-6546', '_self')}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-16 section-bg">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-anton text-center mb-12">Related Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.slice(0, 3).map((relatedService, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <img src={relatedService.heroImage} alt={relatedService.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                      <h3 className="text-xl font-anton mb-2">{relatedService.name}</h3>
                      <p className="text-muted-foreground mb-4">{relatedService.shortDescription}</p>
                      <Button variant="outline" className="w-full" onClick={() => window.location.href = `/services/${relatedService.slug}/`}>
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

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
    </>
  );
};

export default PlaysetRemovalService;