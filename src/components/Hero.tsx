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
              <p 
                style={{
                  textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 8px rgba(0,0,0,0.8)'
                }} 
                className="text-primary text-xl md:text-3xl text-left font-semibold mb-8"
              >
                If You've Got Junk That's Gotta Go, Call Junk in the Truck Co.
              </p>
              
              <a 
                href="tel:8448586546"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-2xl py-6 px-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ring-4 ring-primary/20"
              >
                <Phone className="h-7 w-7 group-hover:animate-pulse" />
                <span>Call Now for a Free Quote</span>
              </a>
              
              <div className="flex items-center gap-4 mt-4 text-sm text-white/80">
                <span className="flex items-center gap-1">
                  <span className="text-primary">✓</span> Same-Day Service
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-primary">✓</span> Free Estimates
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;