import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const services = ["Junk Removal", "Demolition", "Property Cleanouts", "Curbside Pickup"];
  const aboutItems = ["Our Story", "FAQs", "Reviews"];
  return <>
      {/* Two-Tier Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        {/* Utility Bar */}
        <div className="utility-bar">
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
            <div className="text-sm">
              Same-Day / Next-Day Service Available
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <Phone className="h-3 w-3" />
              844-858-6546 · Mon–Sat: 8am–6pm
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="main-nav bg-white border-b border-gray-100">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <a href="#home" className="nav-logo">
              Junk in the Truck Co
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="#home" className="nav-link">Junk Removal</a>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="nav-link bg-transparent border-none hover:bg-transparent focus:ring-0 focus:outline-none">
                  Services
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dropdown-content">
                  {services.map(service => <DropdownMenuItem key={service} asChild>
                      <a href="#services" className="dropdown-nav-link">
                        {service}
                      </a>
                    </DropdownMenuItem>)}
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="#how-it-works" className="nav-link">
                How It Works
              </a>

              <DropdownMenu>
                <DropdownMenuTrigger className="nav-link bg-transparent border-none hover:bg-transparent focus:ring-0 focus:outline-none">
                  About Us
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dropdown-content">
                  {aboutItems.map(item => <DropdownMenuItem key={item} asChild>
                      <a href="#about" className="dropdown-nav-link">
                        {item}
                      </a>
                    </DropdownMenuItem>)}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <a href="#reviews" className="nav-link">
                Reviews
              </a>

              <a href="#contact" className="nav-link">
                Contact
              </a>

              <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae" target="_blank" rel="noopener noreferrer" className="cta-button" aria-label="Book junk removal and demolition">
                Book Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-4">
              <div className="sm:hidden">
                <a href="tel:844-858-6546" className="text-primary">
                  <Phone className="h-5 w-5" />
                </a>
              </div>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground hover:text-primary p-2" aria-label="Open menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
              <div className="px-4 py-4 space-y-2 max-w-7xl mx-auto">
                <a href="#home" className="block py-3 px-4 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
                
                <div className="py-3 px-4">
                  <p className="text-foreground font-medium mb-2 font-inter">Services</p>
                  <div className="pl-4 space-y-2">
                    {services.map(service => <a key={service} href="#services" className="block py-2 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                        {service}
                      </a>)}
                  </div>
                </div>

                <a href="#how-it-works" className="block py-3 px-4 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                  How It Works
                </a>
                
                <div className="py-3 px-4">
                  <p className="text-foreground font-medium mb-2 font-inter">About Us</p>
                  <div className="pl-4 space-y-2">
                    {aboutItems.map(item => <a key={item} href="#about" className="block py-2 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                        {item}
                      </a>)}
                  </div>
                </div>
                
                <a href="#reviews" className="block py-3 px-4 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                  Reviews
                </a>

                <a href="#contact" className="block py-3 px-4 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </div>
            </div>}
        </nav>
      </header>

      {/* Mobile Sticky Book Now Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t">
        <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae" target="_blank" rel="noopener noreferrer" className="cta-button w-full justify-center" aria-label="Book junk removal and demolition">
          Book Now
        </a>
      </div>
    </>;
};
export default Navigation;