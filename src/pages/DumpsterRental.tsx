import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Clock, DollarSign, Home, Hammer, Building2, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const DumpsterRental = () => {
  return <>
      <Helmet>
        <title>Dumpster Rental Tampa, FL | Junk in the Truck Co</title>
        <meta name="description" content="Affordable dumpster rentals in Tampa, FL. Flat-rate pricing, same-day delivery, and 5-star local service. Book online today!" />
        <link rel="canonical" href="/dumpster-rental" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat mt-32" style={{
      backgroundImage: `url('/lovable-uploads/a5fe3c97-a4c9-4709-9911-a32de46871ae.png')`
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 style={{
          fontFamily: 'Anton',
          color: '#ffffff'
        }} className="text-4xl mb-6 md:text-4xl font-medium">
            Dumpster Rental in Tampa, Florida – Fast & Affordable
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white">
            Flat-rate pricing, same-day delivery, and driveway-safe roll-off dumpsters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#18d13d] hover:bg-[#15b835] text-white font-semibold px-8 py-3 text-lg transform hover:scale-105 transition-all">
              Book Online Now
            </Button>
            <Button size="lg" variant="outline" className="border border-white px-4 py-2 text-slate-50">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Today: 844-858-6546
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 style={{
          fontFamily: 'Anton',
          color: '#444444'
        }} className="text-4xl text-center mb-16 font-medium">
            Why Tampa Chooses Us for Dumpster Rentals
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#18d13d] flex items-center justify-center">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2" style={{
              color: '#444444'
            }}>5-Star Rated Local Service</h3>
              <p style={{
              color: '#444444'
            }}>Trusted by thousands of Tampa homeowners</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#18d13d] flex items-center justify-center">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2" style={{
              color: '#444444'
            }}>Same-Day & Next-Day Delivery</h3>
              <p style={{
              color: '#444444'
            }}>Fast turnaround when you need it most</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#18d13d] flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2" style={{
              color: '#444444'
            }}>Flat-Rate Pricing</h3>
              <p style={{
              color: '#444444'
            }}>No hidden fees, no surprises</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#18d13d] flex items-center justify-center">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2" style={{
              color: '#444444'
            }}>Driveway Protection Included</h3>
              <p style={{
              color: '#444444'
            }}>We protect your property during delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dumpster Sizes & Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 style={{
          fontFamily: 'Anton',
          color: '#444444'
        }} className="text-4xl text-center mb-16 font-medium">
            Roll-Off Dumpster Sizes in Tampa
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle style={{
                color: '#444444'
              }} className="text-center text-2xl font-extralight">12-Yard Dumpster</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6" style={{
                color: '#444444'
              }}>Perfect for cleanouts & yard debris.</p>
                <Button className="bg-[#18d13d] hover:bg-[#15b835] text-white transform hover:scale-105 transition-all">
                  Reserve Now
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle style={{
                color: '#444444'
              }} className="text-2xl text-center font-extralight">18-Yard Dumpster</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6" style={{
                color: '#444444'
              }}>Great for kitchen/bath remodels.</p>
                <Button className="bg-[#18d13d] hover:bg-[#15b835] text-white transform hover:scale-105 transition-all">
                  Reserve Now
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle style={{
                color: '#444444'
              }} className="text-2xl text-center font-extralight">20-Yard Dumpster</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6" style={{
                color: '#444444'
              }}>Ideal for big renovations & demolition.</p>
                <Button className="bg-[#18d13d] hover:bg-[#15b835] text-white transform hover:scale-105 transition-all">
                  Reserve Now
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-lg text-gray-700">
            All rentals include 3–7 day agreements. One-day turnaround available depending on demand.
          </p>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-[#222222]">
        <div className="container mx-auto px-4">
          <h2 style={{
          fontFamily: 'Anton',
          color: '#444444'
        }} className="text-4xl text-center mb-16 font-medium text-slate-50">
            What's Included with Your Dumpster Rental
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Included */}
            <div className="space-y-6">
              <h3 style={{
              fontFamily: 'Anton',
              color: '#444444'
            }} className="text-2xl font-medium mb-6 text-slate-50">Included</h3>
              
              <div className="space-y-4 bg-slate-50 rounded">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p style={{
                  color: '#444444'
                }} className="font-normal">
                    <strong>2‑Ton Weight Allowance Included</strong> (covers most homeowner projects)
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p style={{
                  color: '#444444'
                }} className="font-normal">
                    <strong>Flat‑Rate Pricing</strong> — 20‑yard dumpsters start at $350; typical range $350–$450 (depends on items and location)
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p style={{
                  color: '#444444'
                }} className="font-normal">
                    <strong>3–7 Day Rental Window</strong> (flexible for DIY timelines; may adjust with demand)
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p style={{
                  color: '#444444'
                }} className="font-normal">
                    <strong>Driveway‑Safe Setup</strong> (boards/protection included)
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p style={{
                  color: '#444444'
                }} className="font-normal">
                    <strong>Fast Pickup When You're Done</strong>
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <p style={{
                color: '#444444'
              }} className="text-sm font-normal">
                  <strong>Note:</strong> Overage is $100 per additional ton beyond the included 2 tons.
                </p>
              </div>
            </div>

            {/* Right Column - Restrictions */}
            <div>
              <Card className="border-red-200 bg-red-50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2" style={{
                  color: '#444444'
                }}>
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                    <span style={{
                    fontFamily: 'Anton'
                  }} className="text-2xl font-medium">
                      Restrictions (Can't Go In)
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">✕</span>
                      </div>
                      <span style={{
                      color: '#444444'
                    }} className="font-normal">
                        Roofing materials (shingles, tar, etc.)
                      </span>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">✕</span>
                      </div>
                      <span style={{
                      color: '#444444'
                    }} className="font-normal">
                        Concrete, dirt, or heavy fill
                      </span>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">✕</span>
                      </div>
                      <span style={{
                      color: '#444444'
                    }} className="font-normal">
                        Wet paint or solvents
                      </span>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">✕</span>
                      </div>
                      <span style={{
                      color: '#444444'
                    }} className="font-normal">
                        Harsh chemicals / hazardous waste
                      </span>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">✕</span>
                      </div>
                      <span style={{
                      color: '#444444'
                    }} className="font-normal">
                        Batteries (and electronics with toxic components)
                      </span>
                    </li>
                  </ul>
                  
                  <div className="pt-3 border-t border-red-200">
                    <p style={{
                    color: '#444444'
                  }} className="text-sm font-normal">
                      Not sure about an item? Call 844‑858‑6546 and we'll confirm before delivery.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Row */}
          <div className="text-center border-t border-gray-200 pt-12">
            <p style={{
            color: '#444444'
          }} className="text-xl mb-6 font-normal text-slate-50">
              Ready to reserve your dumpster?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#18d13d] hover:bg-[#15b835] text-white font-semibold px-8 py-3 text-lg transform hover:scale-105 transition-all" aria-label="Reserve dumpster rental now">
                Reserve Now
              </Button>
              <Button size="lg" variant="outline" className="border-[#18d13d] text-[#18d13d] hover:bg-[#18d13d] hover:text-white px-8 py-3 text-lg transform hover:scale-105 transition-all" aria-label="Call us for dumpster rental information">
                <Phone className="mr-2 h-5 w-5" />
                Call 844‑858‑6546
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 style={{
          fontFamily: 'Anton',
          color: '#444444'
        }} className="text-4xl text-center mb-16 font-medium">
            Dumpster Rentals Available Across Tampa, FL
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54000000002!2d-82.6404194!3d27.9506338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Tampa Service Area Map"></iframe>
            </div>
            <div>
              <p className="text-lg mb-6" style={{
              color: '#444444'
            }}>
                We proudly provide fast, reliable dumpster rentals across all Tampa neighborhoods including South Tampa, West Tampa, New Tampa, and Downtown.
              </p>
              <Button variant="outline" size="lg" className="border-[#18d13d] text-[#18d13d] hover:bg-[#18d13d] hover:text-white transform hover:scale-105 transition-all text-center">
                <Phone className="mr-2 h-5 w-5" />
                Not sure if we serve your neighborhood? Call us at 844-858-6546
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 style={{
          fontFamily: 'Anton',
          color: '#444444'
        }} className="text-4xl text-center mb-16 font-medium">
            Renting a Dumpster is Simple
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#18d13d] flex items-center justify-center">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-medium mb-4" style={{
              color: '#444444'
            }}>Book Online in Minutes</h3>
              <p style={{
              color: '#444444'
            }}>Choose your size and schedule delivery online or by phone</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#18d13d] flex items-center justify-center">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-medium mb-4" style={{
              color: '#444444'
            }}>We Deliver to You</h3>
              <p style={{
              color: '#444444'
            }}>Fast, professional delivery with driveway protection included</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#18d13d] flex items-center justify-center">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-medium mb-4" style={{
              color: '#444444'
            }}>You Fill, We Haul</h3>
              <p style={{
              color: '#444444'
            }}>Load at your pace, we'll pick up when you're ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 style={{
          fontFamily: 'Anton',
          color: '#444444'
        }} className="text-4xl text-center mb-16 font-medium">
            What Our Tampa Customers Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-[#18d13d] text-[#18d13d]" />)}
                </div>
                <p className="mb-4" style={{
                color: '#444444'
              }}>
                  "Outstanding service! They delivered exactly when promised and the dumpster was perfect for our kitchen remodel."
                </p>
                <p className="font-semibold" style={{
                color: '#444444'
              }}>- Sarah M., South Tampa</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-[#18d13d] text-[#18d13d]" />)}
                </div>
                <p className="mb-4" style={{
                color: '#444444'
              }}>
                  "Great pricing and no hidden fees. The team was professional and protected our driveway perfectly."
                </p>
                <p className="font-semibold" style={{
                color: '#444444'
              }}>- Mike R., West Tampa</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-[#18d13d] text-[#18d13d]" />)}
                </div>
                <p className="mb-4" style={{
                color: '#444444'
              }}>
                  "Same-day delivery saved our project timeline. Highly recommend for any construction job!"
                </p>
                <p className="font-semibold" style={{
                color: '#444444'
              }}>- Jennifer L., New Tampa</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <script defer async src='https://cdn.trustindex.io/loader.js?eebdd2152344226b7d7635171a0'></script>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-[#222222]">
        <div className="container mx-auto px-4">
          <h2 style={{
          fontFamily: 'Anton',
          color: '#444444'
        }} className="text-4xl text-center mb-16 font-medium text-neutral-50">Dumpsters for Every Project in Tampa</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#18d13d] flex items-center justify-center">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium mb-4" style={{
                color: '#444444'
              }}>Homeowners</h3>
                <p style={{
                color: '#444444'
              }}>Cleanouts, moving, and renovations.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#18d13d] flex items-center justify-center">
                  <Hammer className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium mb-4" style={{
                color: '#444444'
              }}>Contractors & Remodelers</h3>
                <p style={{
                color: '#444444'
              }}>Construction, demolition, renovation debris.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#18d13d] flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium mb-4" style={{
                color: '#444444'
              }}>Property Managers & Realtors</h3>
                <p style={{
                color: '#444444'
              }}>Tenant cleanouts, foreclosures, evictions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 style={{
          fontFamily: 'Anton',
          color: '#444444'
        }} className="text-4xl text-center mb-16 font-medium">
            Tampa Dumpster Rental FAQs
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger style={{
              color: '#444444'
            }} className="text-lg font-extralight">
                How much does dumpster rental cost in Tampa?
              </AccordionTrigger>
              <AccordionContent style={{
              color: '#444444'
            }}>
                Our flat-rate pricing starts at competitive rates with no hidden fees. Contact us for exact pricing based on your project size and rental period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger style={{
              color: '#444444'
            }} className="text-lg font-extralight">
                What size dumpster do I need?
              </AccordionTrigger>
              <AccordionContent style={{
              color: '#444444'
            }}>
                12-yard for small cleanouts, 18-yard for bathroom/kitchen remodels, and 20-yard for major renovations. Our team can help you choose the right size.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger style={{
              color: '#444444'
            }} className="text-lg font-extralight">
                Do I need a permit for dumpster rental in Tampa?
              </AccordionTrigger>
              <AccordionContent style={{
              color: '#444444'
            }}>
                Permits are typically required if the dumpster is placed on public property. We can help guide you through the permit process if needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger style={{
              color: '#444444'
            }} className="text-lg font-extralight">
                What items are not allowed in the dumpster?
              </AccordionTrigger>
              <AccordionContent style={{
              color: '#444444'
            }}>
                Hazardous materials, chemicals, paint, batteries, and electronics are prohibited. We'll provide a complete list of restricted items when you book.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger style={{
              color: '#444444'
            }} className="text-lg font-extralight">
                How quickly can you deliver a dumpster?
              </AccordionTrigger>
              <AccordionContent style={{
              color: '#444444'
            }}>
                We offer same-day and next-day delivery in most Tampa areas. One-day turnaround is available depending on current demand.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#18d13d]">
        <div className="container mx-auto px-4 text-center">
          <h2 style={{
          fontFamily: 'Anton'
        }} className="text-4xl text-white mb-8 font-medium">
            Ready to Book Your Dumpster in Tampa?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#18d13d] hover:bg-gray-100 font-semibold px-8 py-3 text-lg transform hover:scale-105 transition-all">
              Book Online in Minutes
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#18d13d] font-semibold px-8 py-3 text-lg transform hover:scale-105 transition-all">
              <Phone className="mr-2 h-5 w-5" />
              Call 844-858-6546
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>;
};
export default DumpsterRental;