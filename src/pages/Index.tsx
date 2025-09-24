import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import QuickFAQ from "@/components/QuickFAQ";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

// Import How It Works images
import scheduleImg from "@/assets/how-it-works-schedule.jpg";
import estimateImg from "@/assets/how-it-works-estimate.jpg";
import haulImg from "@/assets/how-it-works-haul.jpg";
import cleanImg from "@/assets/how-it-works-clean.jpg";

// Lazy load only the heaviest components to reduce critical chain depth
const ContentComponents = lazy(() => 
  Promise.all([
    import("@/components/WhatWeTake"),
    import("@/components/BeforeAfter"),
    import("@/components/WhoWeHelp"),
    import("@/components/CustomerReviews")
  ]).then(([WhatWeTake, BeforeAfter, WhoWeHelp, CustomerReviews]) => ({
    default: () => (
      <>
        <WhatWeTake.default />
        <BeforeAfter.default />
        <WhoWeHelp.default />
        <CustomerReviews.default />
      </>
    )
  }))
);

const UtilityComponents = lazy(() => 
  Promise.all([
    import("@/components/DumpsterVsJunkRemoval"),
    import("@/components/WhyChooseUs"),
    import("@/components/BrandStory"),
    import("@/components/ServiceAreas")
  ]).then(([DumpsterVsJunkRemoval, WhyChooseUs, BrandStory, ServiceAreas]) => ({
    default: () => (
      <>
        <DumpsterVsJunkRemoval.default />
        <WhyChooseUs.default />
        <BrandStory.default />
        <ServiceAreas.default />
      </>
    )
  }))
);

const InfoComponents = lazy(() => 
  Promise.all([
    import("@/components/Testimonial"),
    import("@/components/About"),
    import("@/components/ChristianValues"),
    import("@/components/FAQ"),
    import("@/components/Contact")
  ]).then(([Testimonial, About, ChristianValues, FAQ, Contact]) => ({
    default: () => (
      <>
        <Testimonial.default />
        <About.default />
        <ChristianValues.default />
        <FAQ.default />
        <Contact.default />
      </>
    )
  }))
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32"> {/* Add padding-top to account for two-tier fixed nav */}
        <Hero />
        <Services />
        <QuickFAQ />
        <HowItWorks 
          step1Img={scheduleImg}
          step2Img={estimateImg}
          step3Img={haulImg}
          step4Img={cleanImg}
        />
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <ContentComponents />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <UtilityComponents />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <InfoComponents />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};

export default Index;