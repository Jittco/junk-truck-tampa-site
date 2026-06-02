import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";

import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQPageSchema from "@/components/FAQPageSchema";
import FacebookPixel from "@/components/FacebookPixel";

// Import How It Works images
import scheduleImg from "@/assets/how-it-works-schedule.jpg";
import estimateImg from "@/assets/how-it-works-estimate.jpg";
import haulImg from "@/assets/how-it-works-haul.jpg";

// Lazy load components below the fold
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const ServiceAreaSection = lazy(() => import("@/components/ServiceAreaSection"));
const WhatWeTake = lazy(() => import("@/components/WhatWeTake"));
const BeforeAfter = lazy(() => import("@/components/BeforeAfter"));
const WhoWeHelp = lazy(() => import("@/components/WhoWeHelp"));
const CustomerReviews = lazy(() => import("@/components/CustomerReviews"));
const DumpsterVsJunkRemoval = lazy(() => import("@/components/DumpsterVsJunkRemoval"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const BrandStory = lazy(() => import("@/components/BrandStory"));
const ChristianValues = lazy(() => import("@/components/ChristianValues"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <LocalBusinessSchema />
      <FAQPageSchema />
      <FacebookPixel />
      <Navigation />
      <main className="pt-32"> {/* Add padding-top to account for two-tier fixed nav */}
        <Hero />
        <TrustStrip />
        <Services />
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <HowItWorks 
            step1Img={scheduleImg}
            step2Img={estimateImg}
            step3Img={haulImg}
          />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <CustomerReviews />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <ServiceAreaSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <WhatWeTake />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <BeforeAfter />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <WhoWeHelp />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <DumpsterVsJunkRemoval />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <BrandStory />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <ChristianValues />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;