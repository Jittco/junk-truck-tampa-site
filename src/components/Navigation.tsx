import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X, Phone, ChevronRight } from "lucide-react";
import { serviceCategories } from "@/data/services";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isDemolitionDropdownOpen, setIsDemolitionDropdownOpen] = useState(false);
  const demolitionCategory = serviceCategories.find(cat => cat.slug === 'demolition');
  const demolitionServices = demolitionCategory?.services?.sort((a, b) => a.order - b.order) || [];
  const aboutItems = ["Our Story", "FAQs", "Reviews", "Pricing"];
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
              <DropdownMenu>
                <DropdownMenuTrigger className="nav-link bg-transparent border-none hover:bg-transparent focus:ring-0 focus:outline-none">
                  Services
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dropdown-content w-64">
                  <DropdownMenuItem asChild>
                    <a href="/services" className="dropdown-nav-link font-semibold border-b border-gray-100 mb-1">
                      All Services
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/residential-junk-removal/" className="dropdown-nav-link">
                      Residential Junk Removal
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/commercial-junk-removal/" className="dropdown-nav-link">
                      Commercial Junk Removal
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/appliance-removal/" className="dropdown-nav-link">
                      Appliance Removal
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/furniture-removal/" className="dropdown-nav-link">
                      Furniture Removal
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/hot-tub-removal/" className="dropdown-nav-link">
                      Hot Tub Removal
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/yard-waste-removal/" className="dropdown-nav-link">
                      Yard Waste Removal
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/garage-clean-out/" className="dropdown-nav-link">
                      Garage Clean Out
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/estate-clean-out/" className="dropdown-nav-link">
                      Estate Clean Out
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/hoarder-cleanup/" className="dropdown-nav-link">
                      Hoarder Cleanup
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/homeless-encampment-cleanup/" className="dropdown-nav-link">
                      Homeless Encampment Cleanup
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="nav-link bg-transparent border-none hover:bg-transparent focus:ring-0 focus:outline-none" aria-haspopup="true" aria-expanded="false">
                  DEMOLITION
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dropdown-content w-64">
                  <DropdownMenuItem asChild>
                    <a href="/services/demolition/" className="dropdown-nav-link font-semibold border-b border-gray-100 mb-1">
                      All Demolition Services
                    </a>
                  </DropdownMenuItem>
                  {demolitionServices.map(service => <DropdownMenuItem key={service.slug} asChild>
                      <a href={`/services/demolition/${service.slug}/`} className="dropdown-nav-link">
                        {service.name}
                      </a>
                    </DropdownMenuItem>)}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <a href="/services/dumpster-rental/" className="nav-link">DUMPSTER</a>

              <a href="/service-areas" className="nav-link">SERVICE AREAS</a>

              <a href="/pricing" className="nav-link">
                Pricing
              </a>

              <DropdownMenu>
                <DropdownMenuTrigger className="nav-link bg-transparent border-none hover:bg-transparent focus:ring-0 focus:outline-none">
                  About Us
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dropdown-content">
                  {aboutItems.map(item => <DropdownMenuItem key={item} asChild>
                      <a href={item === "Pricing" ? "/pricing" : "#about"} className="dropdown-nav-link">
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
                <a href="/services" className="block py-3 px-4 text-foreground font-inter hover:bg-muted rounded font-semibold" onClick={() => setIsMenuOpen(false)}>
                  All Services
                </a>
                <a href="/services/residential-junk-removal/" className="block py-2 px-8 text-foreground font-inter hover:bg-muted rounded text-sm" onClick={() => setIsMenuOpen(false)}>
                  Residential Junk Removal
                </a>
                <a href="/services/commercial-junk-removal/" className="block py-2 px-8 text-foreground font-inter hover:bg-muted rounded text-sm" onClick={() => setIsMenuOpen(false)}>
                  Commercial Junk Removal
                </a>
                <a href="/services/appliance-removal/" className="block py-2 px-8 text-foreground font-inter hover:bg-muted rounded text-sm" onClick={() => setIsMenuOpen(false)}>
                  Appliance Removal
                </a>
                <a href="/services/furniture-removal/" className="block py-2 px-8 text-foreground font-inter hover:bg-muted rounded text-sm" onClick={() => setIsMenuOpen(false)}>
                  Furniture Removal
                </a>
                <a href="/services/hot-tub-removal/" className="block py-2 px-8 text-foreground font-inter hover:bg-muted rounded text-sm" onClick={() => setIsMenuOpen(false)}>
                  Hot Tub Removal
                </a>
                <a href="/services/yard-waste-removal/" className="block py-2 px-8 text-foreground font-inter hover:bg-muted rounded text-sm" onClick={() => setIsMenuOpen(false)}>
                  Yard Waste Removal
                </a>
                <a href="/services/garage-clean-out/" className="block py-2 px-8 text-foreground font-inter hover:bg-muted rounded text-sm" onClick={() => setIsMenuOpen(false)}>
                  Garage Clean Out
                </a>
                <a href="/services/estate-clean-out/" className="block py-2 px-8 text-foreground font-inter hover:bg-muted rounded text-sm" onClick={() => setIsMenuOpen(false)}>
                  Estate Clean Out
                </a>
                <a href="/services/hoarder-cleanup/" className="block py-2 px-8 text-foreground font-inter hover:bg-muted rounded text-sm" onClick={() => setIsMenuOpen(false)}>
                  Hoarder Cleanup
                </a>
                <a href="/services/homeless-encampment-cleanup/" className="block py-2 px-8 text-foreground font-inter hover:bg-muted rounded text-sm" onClick={() => setIsMenuOpen(false)}>
                  Homeless Encampment Cleanup
                </a>
                
                <div className="py-3 px-4">
                  <button className="flex items-center justify-between w-full text-foreground font-medium font-inter hover:bg-muted rounded py-2" onClick={() => setIsDemolitionDropdownOpen(!isDemolitionDropdownOpen)} aria-haspopup="true" aria-expanded={isDemolitionDropdownOpen}>
                    Demolition
                    <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isDemolitionDropdownOpen ? 'rotate-90' : ''}`} />
                  </button>
                  {isDemolitionDropdownOpen && <div className="pl-4 space-y-2 mt-2">
                      <a href="/services/demolition/" className="block py-2 text-foreground font-inter hover:bg-muted rounded font-semibold" onClick={() => setIsMenuOpen(false)}>
                        All Demolition Services
                      </a>
                      {demolitionServices.map(service => <a key={service.slug} href={`/services/demolition/${service.slug}/`} className="block py-2 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                          {service.name}
                        </a>)}
                    </div>}
                </div>
                
                <a href="/services/dumpster-rental/" className="block py-3 px-4 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                  Dumpster Rental
                </a>

                <a href="/service-areas" className="block py-3 px-4 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                  Service Areas
                </a>

                <a href="#how-it-works" className="block py-3 px-4 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                  How It Works
                </a>

                <a href="/pricing" className="block py-3 px-4 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                  Pricing
                </a>
                
                <div className="py-3 px-4">
                  <button className="flex items-center justify-between w-full text-foreground font-medium font-inter hover:bg-muted rounded py-2" onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}>
                    About Us
                    <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-90' : ''}`} />
                  </button>
                  {isAboutDropdownOpen && <div className="pl-4 space-y-2 mt-2">
                      {aboutItems.map(item => <a key={item} href={item === "Pricing" ? "/pricing" : "#about"} className="block py-2 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
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