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
            <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 lg:p-8">
              {/* Primary Call CTA */}
              <a 
                href="tel:8448586546"
                className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl py-5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <Phone className="h-6 w-6" />
                <span>📞 Call Now</span>
              </a>
              <p className="text-center text-sm text-muted-foreground mt-3 font-medium">
                Same-Day Service Available
              </p>

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-border" />
                <span className="text-sm text-muted-foreground whitespace-nowrap">Or request a quick estimate</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Lead Capture Form */}
              <div className="w-full">
                <iframe 
                  style={{ border: 'none', width: '100%', minHeight: '400px' }}
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