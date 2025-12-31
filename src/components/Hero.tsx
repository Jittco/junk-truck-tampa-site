import { Phone } from "lucide-react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import heroMainImage from "@/assets/hero-main-page.webp";

const Hero = () => {
  useEffect(() => {
    // Load Housecall Pro script
    const script = document.createElement('script');
    script.src = 'https://online-booking.housecallpro.com/script.js?token=b44873c13a744f49a3fa39fa83e5fa88&orgName=Junk-in-the-Truck-Co-Junk-Removal';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Critical resource preloading in document head for LCP optimization */}
      <Helmet>
        <link rel="preload" as="image" href={heroMainImage} fetchPriority="high" />
      </Helmet>
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image optimized for LCP - using <img> for better discovery */}
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
        
        {/* Transparent black overlay */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Content - Two Column Layout */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Column - Hero Text */}
            <div className="max-w-xl text-white">
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
                className="text-primary text-xl md:text-3xl text-left font-semibold"
              >
                If You've Got Junk That's Gotta Go, Call Junk in the Truck Co.
              </p>
            </div>

            {/* Right Column - Conversion Box */}
            <div className="w-full max-w-md bg-background/98 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-border/50">
              {/* Header */}
              <h2 className="text-2xl font-bold text-white text-center mb-6">
                Get Your Free Quote
              </h2>
              
              {/* Primary Call CTA */}
              <a 
                href="tel:8448586546"
                className="group flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-2xl py-6 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ring-4 ring-primary/20"
              >
                <Phone className="h-7 w-7 group-hover:animate-pulse" />
                <span>Call Now</span>
              </a>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-white/90">
                <span className="flex items-center gap-1">
                  <span className="text-primary">✓</span> Same-Day Service
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-primary">✓</span> Free Estimates
                </span>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-white/30" />
                <span className="text-sm text-white/90 whitespace-nowrap font-medium">Or request online</span>
                <div className="flex-1 h-px bg-white/30" />
              </div>

              {/* Lead Capture Form */}
              <div className="w-full -mx-2">
                <iframe 
                  style={{ border: 'none', width: 'calc(100% + 16px)', minHeight: '380px' }}
                  id="hcp-lead-iframe"
                  src="https://book.housecallpro.com/lead-form/Junk-in-the-Truck-Co-Junk-Removal/b44873c13a744f49a3fa39fa83e5fa88"
                  title="Request a free estimate"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;