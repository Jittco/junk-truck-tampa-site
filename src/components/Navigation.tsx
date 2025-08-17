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
    <nav className="fixed-nav-bar navbar">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center pl-4">
        <img 
          src="/lovable-uploads/d077d45a-c6fd-4a67-b113-f854669f61dd.png" 
          alt="Junk in the Truck Co Logo" 
          className="h-16 w-auto"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center">
        <a href="#home" className="nav-link">
          Home
        </a>
        
        <DropdownMenu>
          <DropdownMenuTrigger className="nav-link flex items-center">
            Services
            <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white shadow-lg border rounded-lg p-2">
            {services.map((service) => (
              <DropdownMenuItem key={service} className="dropdown-nav-link cursor-pointer rounded hover:bg-gray-50">
                {service}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <a href="#about" className="nav-link">
          About Us
        </a>
        
        <a href="#reviews" className="nav-link">
          Reviews
        </a>

        <div className="pr-4">
          <Button 
            className="bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-lg"
            onClick={() => window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank')}
          >
            Contact / Book Now
          </Button>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden pr-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-text hover:text-primary p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg rounded-b-2xl mx-4">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#home" 
              className="nav-link block"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            
            <div className="px-4 py-2">
              <p className="text-text font-medium mb-2 font-changa-one">Services</p>
              <div className="pl-4 space-y-2">
                {services.map((service) => (
                  <a 
                    key={service}
                    href="#services" 
                    className="dropdown-nav-link block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
            
            <a 
              href="#about" 
              className="nav-link block"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            
            <a 
              href="#reviews" 
              className="nav-link block"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </a>

            <div className="px-4 py-2">
              <Button 
                className="w-full bg-primary hover:bg-primary-hover text-white font-semibold"
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
    </nav>
  );
};

export default Navigation;