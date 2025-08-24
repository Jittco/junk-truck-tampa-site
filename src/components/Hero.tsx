import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with preload */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-110 contrast-110 saturate-125" style={{
      backgroundImage: `url(/lovable-uploads/39d5fc41-5246-40fa-85e0-39c712a42e89.png)`
    }}>
      </div>
      <link rel="preload" as="image" href="/lovable-uploads/39d5fc41-5246-40fa-85e0-39c712a42e89.png" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-anton mb-6 leading-tight drop-shadow-lg">
          Affordable Junk Removal in Tampa Bay<br />
          <span className="text-primary">Take Back Your Space.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
          Fast, affordable junk removal & light demolition in Tampa Bay. 
          Same-day and next-day service available.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="cta" size="lg" className="px-8 py-4 text-lg" asChild>
            <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae">Book Online in 60 Seconds</a>
          </Button>
          
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-foreground" asChild>
            
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;