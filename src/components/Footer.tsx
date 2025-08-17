import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-anton mb-8">Serving Christ through Junk Removal & Demolition</h2>
          
          <p className="text-xl mb-12 opacity-90">
            Get your free estimate today and take back your space!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-primary" />
              <a href="tel:8448586546" className="text-xl font-semibold hover:text-primary transition-colors">
                844-858-6546
              </a>
            </div>
            
            
          </div>
          
          <Button variant="cta" size="lg" className="px-12 py-4 text-lg" asChild>
            <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae">
              Book Now
            </a>
          </Button>
          
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="opacity-70">Junk in the Truck Co. All Rights Reserved 2025 </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;