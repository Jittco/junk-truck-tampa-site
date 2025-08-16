import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    "Junk Removal",
    "Demolition", 
    "Property Cleanouts",
    "Curbside Pickup"
  ];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png" 
              alt="Junk in the Truck Co Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-text hover:text-primary transition-colors">
              Home
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-text hover:text-primary transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                {services.map((service) => (
                  <DropdownMenuItem key={service} className="text-text hover:text-primary">
                    {service}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#about" className="text-text hover:text-primary transition-colors">
              About Us
            </a>
            
            <a href="#reviews" className="text-text hover:text-primary transition-colors">
              Reviews
            </a>

            <Button 
              className="bg-brand-green hover:bg-brand-green-hover text-white font-semibold"
              onClick={() => window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank')}
            >
              Contact / Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text hover:text-primary p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#home" 
                className="block px-3 py-2 text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              
              <div className="px-3 py-2">
                <p className="text-text font-medium mb-2">Services</p>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <a 
                      key={service}
                      href="#services" 
                      className="block text-text hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>
              
              <a 
                href="#about" 
                className="block px-3 py-2 text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              
              <a 
                href="#reviews" 
                className="block px-3 py-2 text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </a>

              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-semibold"
                  onClick={() => {
                    window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  Contact / Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;