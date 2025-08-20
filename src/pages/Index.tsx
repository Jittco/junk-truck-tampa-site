import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import QuickFAQ from "@/components/QuickFAQ";

// Lazy load components below the fold
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const BeforeAfter = lazy(() => import("@/components/BeforeAfter"));
const CustomerReviews = lazy(() => import("@/components/CustomerReviews"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const ServiceAreas = lazy(() => import("@/components/ServiceAreas"));
const Testimonial = lazy(() => import("@/components/Testimonial"));
const About = lazy(() => import("@/components/About"));
const ChristianValues = lazy(() => import("@/components/ChristianValues"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32"> {/* Add padding-top to account for two-tier fixed nav */}
        <Hero />
        <Services />
        <QuickFAQ />
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <BeforeAfter />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <CustomerReviews />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <ServiceAreas />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <Testimonial />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <About />
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
      </div>
    </div>
  );
};

export default Index;