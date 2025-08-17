import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32"> {/* Add padding-top to account for two-tier fixed nav */}
        <Hero />
        <Services />
        <BeforeAfter />
        <WhyChooseUs />
        <ServiceAreas />
        <Testimonial />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;