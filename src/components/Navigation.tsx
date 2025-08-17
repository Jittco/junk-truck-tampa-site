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
    <>
      <nav className="nav-container">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <div className="font-anton text-2xl text-text">
              Junk in the Truck Co
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <a href="#home" className="nav-link">
              Home
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center bg-transparent border-none hover:bg-transparent focus:ring-0 focus:outline-none">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg border rounded-lg mt-2 z-50">
                {services.map((service) => (
                  <DropdownMenuItem key={service} className="dropdown-nav-link cursor-pointer">
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

            <a href="#contact" className="nav-link">
              Contact
            </a>

            <Button 
              className="ml-4 bg-primary hover:bg-primary-hover text-white font-bold px-6 py-2 rounded-lg font-inter"
              onClick={() => window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank')}
            >
              Book Now
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-2">
              <a 
                href="#home" 
                className="block py-3 px-4 text-text font-inter hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              
              <div className="py-3 px-4">
                <p className="text-text font-medium mb-2 font-inter">Services</p>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <a 
                      key={service}
                      href="#services" 
                      className="block py-2 text-text font-inter hover:bg-gray-50 rounded"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>
              
              <a 
                href="#about" 
                className="block py-3 px-4 text-text font-inter hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              
              <a 
                href="#reviews" 
                className="block py-3 px-4 text-text font-inter hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </a>

              <a 
                href="#contact" 
                className="block py-3 px-4 text-text font-inter hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Sticky Book Now Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t">
        <Button 
          className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-lg font-inter"
          onClick={() => window.open('https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae', '_blank')}
        >
          Book Now
        </Button>
      </div>
    </>
  );
};

export default Navigation;