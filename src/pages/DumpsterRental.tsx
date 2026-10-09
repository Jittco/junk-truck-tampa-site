import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Calendar, DollarSign, Truck, CheckCircle, Home, Hammer, TreePine, Wrench, Building, Trash2, AlertTriangle, Droplets, Battery, Fuel, Zap, Shield, Syringe, Cylinder } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import YouTubeLite from "../components/YouTubeLite";
import Breadcrumbs from "@/components/Breadcrumbs";
const BOOK_URL = "https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae";
const PHONE = "844-858-6546";

/**
 * Confirmed customer-facing dumpster pricing (October 2026). Every rental
 * period includes 1 ton; overage is $0.06 per pound. These are rentals, which
 * are a separate service from the 20 cubic yard junk-removal truck — do not mix
 * the two price structures.
 */
const DUMPSTER_SIZES = [
  {
    name: "15-Yard Dumpster",
    bestFor: "Single-room remodels, garage and estate cleanouts, roofing debris",
    featured: true,
    rates: [
      { days: "3 days", price: "$400" },
      { days: "7 days", price: "$450" },
      { days: "14 days", price: "$475" },
      { days: "30 days", price: "$500" },
    ],
  },
  {
    name: "20-Yard Dumpster",
    bestFor: "Whole-home cleanouts, larger renovations, construction debris",
    featured: false,
    rates: [
      { days: "3 days", price: "$450" },
      { days: "7 days", price: "$525" },
      { days: "14 days", price: "$550" },
      { days: "30 days", price: "$600" },
    ],
  },
] as const;
const DumpsterRental = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dumpster Rental Tampa Bay",
    "description": "Dumpster rental in Tampa with 15-yard and 20-yard roll-off dumpsters. Same-day delivery, flat-rate 3, 7, 14 and 30 day pricing, 1 ton included. Serving Hillsborough & Pinellas County.",
    // Reference the one canonical business entity rather than restating a
    // partial copy of it. The full LocalBusiness — with the confirmed hours,
    // phone and address — is emitted once per page by the build's prerender
    // step (scripts/seo-defaults.mjs).
    "provider": {
      "@id": "https://www.junkinthetruckco.com/#organization"
    },
    "areaServed": [{
      "@type": "State",
      "name": "Florida"
    }],
    "serviceType": "Dumpster Rental",
    "offers": {
      "@type": "Offer",
      "priceRange": "$400-$600",
      "priceCurrency": "USD"
    }
  };
  return <>
      <Helmet>
        <title>Dumpster Rental Tampa | 15 & 20 Yard Roll-Off | Same-Day Delivery</title>
        <meta name="description" content="Dumpster rental Tampa — 15-yard and 20-yard roll-off dumpsters from $400. Same-day delivery, flat rates for 3, 7, 14 or 30 days, 1 ton included. Call 844-858-6546." />
        <link rel="canonical" href="https://www.junkinthetruckco.com/services/dumpster-rental/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.junkinthetruckco.com/services/dumpster-rental/" />
        <meta property="og:title" content="Dumpster Rental Tampa | 15 & 20 Yard Roll-Off | Same-Day Delivery" />
        <meta property="og:description" content="Dumpster rental Tampa — 15-yard and 20-yard roll-off dumpsters. Same-day delivery, flat rates for 3, 7, 14 or 30 days, 1 ton included." />
        <meta property="og:site_name" content="Junk in the Truck Co" />

        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      

      <Navigation />
      <Breadcrumbs items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services/" },
        { name: "Dumpster Rental", url: "/dumpster-rental/" },
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat mt-8" style={{
      backgroundImage: `url('/lovable-uploads/a5fe3c97-a4c9-4709-9911-a32de46871ae.png')`
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-anton mb-6 text-white">
            Dumpster Rental in Tampa
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto">
            Clean <strong>15-yard and 20-yard roll-off dumpsters</strong> with <strong>same-day delivery available</strong>, flat-rate pricing for 3, 7, 14 or 30 days, and local service you can trust.
          </p>
          
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
              Same-Day Available
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
              Flat, Upfront Pricing
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
              1 Ton Included
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-3 text-lg" asChild>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">
                Book a Dumpster
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground px-8 py-3 text-lg" asChild>
              
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-anton text-center mb-12 text-foreground">Why Choose Junk in the Truck Co for Dumpster Rentals in Tampa?</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="order-2 md:order-1">
              <img src="/lovable-uploads/a1ded288-114d-471e-b0e5-4999c577601c.png" alt="Junk in the Truck Co team member with dumpster" className="w-full h-auto rounded-lg shadow-lg" width="800" height="600" loading="eager" decoding="async" fetchPriority="high" />
            </div>

            {/* Benefits Column */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-foreground mb-2 font-normal">Locally owned & operated in Tampa Bay</h3>
                  <p className="text-sm text-muted-foreground">Supporting our community with personalized service</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-foreground mb-2 font-normal">Transparent, flat-rate pricing</h3>
                  <p className="text-sm text-muted-foreground">No surprises or hidden fees</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-foreground mb-2 font-normal">Driveway-friendly dumpster delivery</h3>
                  <p className="text-sm text-muted-foreground">Professional placement that protects your property</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-foreground mb-2 font-normal">Courteous, reliable team</h3>
                  <p className="text-sm text-muted-foreground">Professional service you can count on</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-foreground mb-2 font-normal">Flexible scheduling to fit your project</h3>
                  <p className="text-sm text-muted-foreground">3, 7, 14 or 30 day rentals with same-day delivery available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Details Section */}
      <section className="py-16 lg:py-20 bg-[#222222]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-anton text-center mb-6 text-white">
            Dumpster Sizes &amp; Pricing
          </h2>
          <p className="text-lg text-center text-white mb-12 max-w-3xl mx-auto">
            Two sizes, flat rates, and your choice of 3, 7, 14 or 30 days. Every
            rental includes 1 ton of disposal.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {DUMPSTER_SIZES.map((size) => (
              <Card key={size.name} className={size.featured ? "border-2 border-primary" : undefined}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-anton text-foreground">{size.name}</CardTitle>
                  <p className="text-muted-foreground">{size.bestFor}</p>
                </CardHeader>
                <CardContent>
                  <ul className="divide-y divide-border">
                    {size.rates.map((rate) => (
                      <li key={rate.days} className="flex items-baseline justify-between py-3">
                        <span className="text-foreground">{rate.days}</span>
                        <span className="text-2xl font-bold text-primary">{rate.price}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    1 ton included · $0.06 per lb over 1 ton
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-10 text-center">
            <p className="text-lg text-white mb-4">
              Not sure which size or rental period is right for your project? Call
              us today at{" "}
              <a href={`tel:${PHONE}`} className="text-primary font-semibold hover:underline">
                {PHONE}
              </a>{" "}
              and we'll help you choose the best option.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-3 text-lg" asChild>
              <a href={`tel:${PHONE}`}>
                <Phone className="h-5 w-5" />
                Call {PHONE}
              </a>
            </Button>
            <p className="text-sm text-primary mt-6">
              <strong>Note:</strong> Same-day delivery available (call to confirm availability)
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-anton text-center mb-12 text-foreground">
            What's Included with Your Dumpster Rental
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-sm">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-normal text-foreground mb-2">Flat, transparent pricing</h3>
                <p className="text-sm text-muted-foreground">No hidden fees</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-sm">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-normal text-foreground mb-2">Flexible rental periods</h3>
                <p className="text-sm text-muted-foreground">3, 7, 14 or 30 days</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-sm">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-normal text-foreground mb-2">Same-day delivery available</h3>
                <p className="text-sm text-muted-foreground">When you need it fast</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-sm">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-normal text-foreground mb-2">First ton of disposal included</h3>
                <p className="text-sm text-muted-foreground">Covers most projects</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-sm">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-normal text-foreground mb-2">Driveway-friendly placement</h3>
                <p className="text-sm text-muted-foreground">We protect your property</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-sm">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-normal text-foreground mb-2">Professional delivery & pickup</h3>
                <p className="text-sm text-muted-foreground">Hassle-free service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-anton text-center mb-12 text-foreground">
            How Dumpster Rental Works
          </h2>

          {/* YouTube Video */}
          <div className="max-w-4xl mx-auto mb-12">
            <YouTubeLite id="Ri3ZM6FCOBQ" title="How Dumpster Rental Works" />
          </div>

          <ol className="grid md:grid-cols-3 gap-8 mb-12">
            <li className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center text-white">
                <Calendar className="h-8 w-8" />
              </div>
              <div className="text-primary font-bold text-lg mb-2">1</div>
              <h3 className="font-normal text-foreground mb-2">Book Your Tampa Bay Dumpster Rental</h3>
              <p className="text-sm text-muted-foreground">Reserve online in minutes or call {PHONE} for same-day delivery throughout Hillsborough & Pinellas County</p>
            </li>

            <li className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center text-white">
                <Trash2 className="h-8 w-8" />
              </div>
              <div className="text-primary font-bold text-lg mb-2">2</div>
              <h3 className="font-normal text-foreground mb-2">Fill Your Dumpster</h3>
              <p className="text-sm text-muted-foreground">Take 3, 7, 14 or 30 days to load household junk, construction debris, or renovation materials at your own pace</p>
            </li>

            <li className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center text-white">
                <CheckCircle className="h-8 w-8" />
              </div>
              <div className="text-primary font-bold text-lg mb-2">3</div>
              <h3 className="font-normal text-foreground mb-2">Professional Pickup & Disposal</h3>
              <p className="text-sm text-muted-foreground">We collect your full dumpster and responsibly dispose of all materials - no extra work for you</p>
            </li>
          </ol>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-3" asChild>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">
                Reserve Your Dumpster
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-anton text-center mb-6 text-foreground">
            A Dumpster for Every Project in Tampa
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            No matter your project, our <strong>15-yard and 20-yard roll-off dumpsters</strong> make cleanup fast and stress-free.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-6 bg-background rounded-lg shadow-sm">
              <Home className="h-8 w-8 text-primary" />
              <span className="font-medium text-foreground">Home cleanouts</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-background rounded-lg shadow-sm">
              <Trash2 className="h-8 w-8 text-primary" />
              <span className="font-medium text-foreground">Furniture removal</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-background rounded-lg shadow-sm">
              <TreePine className="h-8 w-8 text-primary" />
              <span className="font-medium text-foreground">Yard waste</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-background rounded-lg shadow-sm">
              <Wrench className="h-8 w-8 text-primary" />
              <span className="font-medium text-foreground">Small renovations</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-background rounded-lg shadow-sm">
              <Hammer className="h-8 w-8 text-primary" />
              <span className="font-medium text-foreground">Metal Recycling</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-background rounded-lg shadow-sm">
              <Building className="h-8 w-8 text-primary" />
              <span className="font-medium text-foreground">Light construction debris</span>
            </div>
          </div>
        </div>
      </section>


      {/* Prohibited Items Section */}
      <section className="py-16 lg:py-20 bg-[#222222]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-anton text-center mb-6 text-slate-50">
            What You Can't Put in Your Dumpster
          </h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-slate-50">
            For safety and compliance, some materials <strong>cannot</strong> be placed in our dumpsters. If you're unsure, give us a call.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border-l-4 border-destructive">
              <AlertTriangle className="h-8 w-8 text-destructive mb-3" />
              <h3 className="text-foreground font-light text-lg">Hazardous waste & chemicals</h3>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border-l-4 border-destructive">
              <Droplets className="h-8 w-8 text-destructive mb-3" />
              <h3 className="text-foreground text-lg font-light">Paints, stains & solvents</h3>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border-l-4 border-destructive">
              <Fuel className="h-8 w-8 text-destructive mb-3" />
              <h3 className="text-foreground text-lg font-light">Oils, fuels & flammable liquids</h3>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border-l-4 border-destructive">
              <Shield className="h-8 w-8 text-destructive mb-3" />
              <h3 className="text-foreground text-lg font-light">Asbestos & contaminated materials</h3>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border-l-4 border-destructive">
              <Truck className="h-8 w-8 text-destructive mb-3" />
              <h3 className="text-foreground text-lg font-light">Tires & auto parts</h3>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border-l-4 border-destructive">
              <Battery className="h-8 w-8 text-destructive mb-3" />
              <h3 className="text-foreground font-light text-lg">Batteries & electronics (e-waste)</h3>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border-l-4 border-destructive">
              <Syringe className="h-8 w-8 text-destructive mb-3" />
              <h3 className="text-foreground text-lg font-light">Medical waste & sharps</h3>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border-l-4 border-destructive">
              <Cylinder className="h-8 w-8 text-destructive mb-3" />
              <h3 className="text-foreground font-light text-lg">Propane tanks & pressurized containers</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-anton text-center mb-12 text-foreground">
            Tampa Dumpster Rental FAQs
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="size" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-normal">
                What size is your dumpster?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer two sizes: a <strong>15-yard</strong> and a <strong>20-yard roll-off dumpster</strong>. The 15-yard suits single-room remodels, garage cleanouts and roofing debris; the 20-yard suits whole-home cleanouts, larger renovations and construction debris. Not sure which you need? Call us at 844-858-6546 and we will help you choose.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-normal">
                How much does it cost to rent a dumpster?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                A 15-yard dumpster is $400 for 3 days, $450 for 7 days, $475 for 14 days, or $500 for 30 days. A 20-yard is $450 for 3 days, $525 for 7 days, $550 for 14 days, or $600 for 30 days. Every rental includes 1 ton of disposal, with additional weight at $0.06 per lb over the first ton. No hidden fees or surprises.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="same-day" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-normal">
                Do you offer same-day delivery?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes — call {PHONE} to confirm availability. Same-day delivery is often available for urgent projects.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="allowed" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-normal">
                What can I put in the dumpster?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Household junk, furniture, yard waste, remodeling debris, shingles, and light construction debris. Most common project materials are accepted.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="prohibited" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-normal">
                What items are prohibited?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Hazardous waste, chemicals, paints, oils, asbestos, tires, batteries, medical waste, propane tanks, and flammable materials. Call us if you're unsure about specific items.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="booking" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-normal">
                How do I book?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Use our online booking link or call us. We'll confirm delivery time and place the dumpster in a driveway-friendly location with proper protection for your property.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-anton text-center mb-6 text-foreground">
            Service Areas – Dumpster Rentals in Tampa Bay
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We proudly serve <strong>Hillsborough County</strong> and <strong>Pinellas County</strong> with fast delivery and local support.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-anton text-primary mb-6">Hillsborough County</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-foreground">
                <div>Tampa</div>
                <div>Brandon</div>
                <div>Riverview</div>
                <div>Gibsonton</div>
                <div>Apollo Beach</div>
                <div>Valrico</div>
                <div>Seffner</div>
                <div>Plant City</div>
                <div>Ruskin</div>
                <div>Sun City Center</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-anton text-primary mb-6">Pinellas County</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-foreground">
                <div>St. Petersburg</div>
                <div>Clearwater</div>
                <div>Largo</div>
                <div>Pinellas Park</div>
                <div>Dunedin</div>
                <div>Tarpon Springs</div>
                <div>Palm Harbor</div>
                <div>Safety Harbor</div>
                <div>Seminole</div>
                <div>Gulfport</div>
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Don't see your city? Call us at <strong>{PHONE}</strong> to check availability.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-anton mb-6">
            Ready to Book Your Dumpster?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get your <strong>15-yard or 20-yard dumpster delivered today</strong> — fast, affordable, and local.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg font-semibold" asChild>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">
                Reserve Online Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold" asChild>
              
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>;
};
export default DumpsterRental;