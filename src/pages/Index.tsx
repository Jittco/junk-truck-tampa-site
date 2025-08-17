import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20"> {/* Add padding-top to account for fixed nav */}
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonial />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Index;