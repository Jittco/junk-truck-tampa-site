import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Helmet } from "react-helmet";
import heroMainImage from "@/assets/hero-main-page.webp";
const Hero = () => {
  return <>
      {/* Critical resource preloading in document head for LCP optimization */}
      <Helmet>
        <link rel="preload" as="image" href={heroMainImage} fetchPriority="high" />
      </Helmet>
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image optimized for LCP - using <img> for better discovery */}
        <div className="absolute inset-0 -z-10">
          <picture>
            <source type="image/webp" srcSet={heroMainImage} sizes="100vw" />
            <img src={heroMainImage} alt="Junk in the Truck Co. professional junk removal crew at work in Tampa Bay" className="h-full w-full object-cover brightness-110 contrast-110 saturate-125" width="1920" height="1080" loading="eager" decoding="async" fetchPriority="high" />
          </picture>
        </div>
        
        {/* Transparent black overlay */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-anton mb-6 leading-tight drop-shadow-lg text-left" style={{
          textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 8px rgba(0,0,0,0.8)'
        }}>
            Your Local Junk Removal Experts in Tampa, FL<br />
            <p style={{
            textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 8px rgba(0,0,0,0.8)'
          }} className="text-primary text-lg mt-4 text-left">
              If You've Got Junk That's Gotta Go, Call Junk in the Truck Co.
            </p>
          </h1>
          
          
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="lg" className="px-8 py-4 text-lg" asChild>
              <a href="https://book.housecallpro.com/book/JunkintheTrunkco/2eef934dbbae44e09e5d7b3ec87330ae">​Get Rid Of Your Junk!            </a>
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white" style={{
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }} asChild>
              
            </Button>
          </div>
        </div>
      </section>
    </>;
};
export default Hero;