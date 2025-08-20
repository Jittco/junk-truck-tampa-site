import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X, Phone, ChevronRight } from "lucide-react";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
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
            <a href="/" className="nav-logo">
              <img src="/lovable-uploads/d27a78b7-3af2-41cc-9a86-cd4c76bfa10d.png" alt="Junk in the Truck Co Logo" className="h-24 w-auto font-bold" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="/junk-removal" className="nav-link">SERVICES</a>
              
              <a href="/demolition" className="nav-link">DEMOLITION</a>
              
              <a href="/dumpster-rental" className="nav-link">DUMPSTER </a>

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

              <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae" target="_blank" rel="noopener noreferrer" className="cta-button" aria-label="Book junk removal and demolition">
                Book Now
              </a>
            </div>

            {/* Mobile phone number and menu button */}
            <div className="lg:hidden flex items-center gap-4">
              <a href="tel:844-858-6546" className="flex items-center gap-2 px-3 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 rounded-lg font-semibold text-sm animate-breathe-3s">
                <Phone className="h-4 w-4" />
                844-858-6546
              </a>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground hover:text-primary p-2" aria-label="Open menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
              <div className="px-4 py-4 space-y-2 max-w-7xl mx-auto">
                <a href="/junk-removal" className="block py-3 px-4 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                  Junk Removal
                </a>
                
                <a href="/demolition" className="block py-3 px-4 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                  Demolition
                </a>
                
                <a href="/dumpster-rental" className="block py-3 px-4 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                  Dumpster Rental
                </a>

                <a href="#how-it-works" className="block py-3 px-4 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                  How It Works
                </a>
                
                <div className="py-3 px-4">
                  <button className="flex items-center justify-between w-full text-foreground font-medium font-inter hover:bg-muted rounded py-2" onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}>
                    About Us
                    <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-90' : ''}`} />
                  </button>
                  {isAboutDropdownOpen && <div className="pl-4 space-y-2 mt-2">
                      {aboutItems.map(item => <a key={item} href="#about" className="block py-2 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                          {item}
                        </a>)}
                    </div>}
                </div>
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