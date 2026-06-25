import { Phone } from "lucide-react";
import { Helmet } from "react-helmet";
import heroMainImage from "@/assets/hero-main-page.webp";

const Hero = () => {
  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={heroMainImage} fetchPriority="high" />
      </Helmet>
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <picture>
            <source type="image/webp" srcSet={heroMainImage} sizes="100vw" />
            <img 
              src={heroMainImage} 
              alt="Junk in the Truck Co. professional junk removal crew at work in Tampa Bay" 
              className="h-full w-full object-cover brightness-110 contrast-110 saturate-125" 
              width="1920" 
              height="1080" 
              loading="eager" 
              decoding="async" 
              fetchPriority="high" 
            />
          </picture>
        </div>
        
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col items-center lg:items-start gap-8">
            <div className="max-w-xl text-white lg:max-w-2xl">
              <h1 
                className="text-5xl md:text-7xl font-anton mb-6 leading-tight drop-shadow-lg text-left"
                style={{
                  textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 8px rgba(0,0,0,0.8)'
                }}
              >
                Your Local Junk Removal Experts in Tampa, FL
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;