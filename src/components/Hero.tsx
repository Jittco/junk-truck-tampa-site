import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroMainImage from "@/assets/hero-main.png";
const Hero = () => {
  return <>      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Optimized hero image for better LCP with WebP support */}
        <picture>
          <source 
            srcSet={heroMainImage.replace('.png', '.webp')}
            type="image/webp"
          />
          <img 
            src={heroMainImage}
            alt="Tampa Bay junk removal truck and team"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-110 contrast-110 saturate-125"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width="1920"
            height="1080"
            style={{
              willChange: 'transform'
            }}
          />
        </picture>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-anton mb-6 leading-tight drop-shadow-lg" style={{
          textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 8px rgba(0,0,0,0.8)'
        }}>
            Affordable Junk Removal in Tampa Bay<br />
            <span className="text-primary" style={{
            textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 8px rgba(0,0,0,0.8)'
          }}>Take Back Your Space.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
            Fast, affordable junk removal & light demolition in Tampa Bay. 
            Same-day and next-day service available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="lg" className="px-8 py-4 text-lg" asChild>
              <a href="https://book.housecallpro.com/book/JunkintheTrunkco/2eef934dbbae44e09e5d7b3ec87330ae">Book Online in 60 Seconds</a>
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white" style={{
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }} asChild>
              <a href="tel:+18448586546">
                <Phone className="w-5 h-5 mr-2" />
                Call (844) 858-6546
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>;
};
export default Hero;