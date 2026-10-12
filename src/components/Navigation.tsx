import { useState } from "react";
import { useLocation } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X, Phone, ChevronRight } from "lucide-react";
import { serviceCategories } from "@/data/services";
import { buildTelHref, buildSmsHref } from "@/config/hero";

const BOOK_URL = "https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae";

/**
 * Dumpster rentals have no Housecall Pro flow — that booking link is junk
 * removal only. On the dumpster page the two "Get Free Quote" buttons would
 * therefore drop a dumpster customer into the wrong funnel, so there, and only
 * there, they become call and text.
 *
 * Every other page is untouched and still books through Housecall Pro.
 */
const DUMPSTER_PATH = "/services/dumpster-rental";
const DUMPSTER_CALL_HREF = buildTelHref("+1844-858-6546");
const DUMPSTER_TEXT_HREF = buildSmsHref(
  "+1813-531-9858",
  "Hi! I'd like to check dumpster availability for:"
);

const Navigation = () => {
  const { pathname } = useLocation();
  // Lowercased on purpose: react-router matches routes case-insensitively, so
  // /Services/Dumpster-Rental/ renders this page too. A case-sensitive check
  // here would serve that visitor the dumpster page with the junk-removal
  // "Get Free Quote" button — straight back into the wrong booking flow.
  const isDumpsterPage =
    pathname.replace(/\/+$/, "").toLowerCase() === DUMPSTER_PATH;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isDemolitionDropdownOpen, setIsDemolitionDropdownOpen] = useState(false);
  const [isJunkRemovalDropdownOpen, setIsJunkRemovalDropdownOpen] = useState(false);
  const demolitionCategory = serviceCategories.find(cat => cat.slug === 'demolition');
  const demolitionServices = demolitionCategory?.services?.sort((a, b) => a.order - b.order) || [];
  const aboutItems = ["Our Story", "FAQs", "Reviews", "Pricing"];
  return <>
      {/* Two-Tier Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        {/* Mobile Utility Bar */}
        <div className="utility-bar lg:hidden">
          <div className="flex items-center justify-center w-full max-w-7xl mx-auto">
            <div className="text-sm">
              Same-Day / Next-Day Service Available
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="main-nav bg-white border-b border-gray-100">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <a href="/" className="nav-logo">
              {/* 320px copy, not the 1830px master. This loads eagerly at high
                  priority on every page of the site to be drawn 96px tall, so it
                  was 438KB of the critical path for nothing. The master stays
                  where it is — several pages still use it as a heroImage and an
                  og:image, where the size is warranted. */}
              <img src="/lovable-uploads/logo-nav.webp" alt="Junk in the Truck Co Logo" className="h-24 w-auto font-bold" width="240" height="96" loading="eager" decoding="async" fetchPriority="high" />
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
                    <a href="/services/junk-removal/residential/" className="dropdown-nav-link">
                      Residential Junk Removal
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/junk-removal/commercial/" className="dropdown-nav-link">
                      Commercial Junk Removal
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/junk-removal/appliance-removal/" className="dropdown-nav-link">
                      Appliance Removal
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/junk-removal/furniture-removal/" className="dropdown-nav-link">
                      Furniture Removal
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/junk-removal/hot-tub-removal/" className="dropdown-nav-link">
                      Hot Tub Removal
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/junk-removal/yard-waste-removal/" className="dropdown-nav-link">
                      Yard Waste Removal
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/junk-removal/garage-cleanout/" className="dropdown-nav-link">
                      Garage Clean Out
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/junk-removal/estate-cleanout/" className="dropdown-nav-link">
                      Estate Clean Out
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/junk-removal/hoarder-cleanup/" className="dropdown-nav-link">
                      Hoarder Cleanup
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services/junk-removal/homeless-encampment-cleanup/" className="dropdown-nav-link">
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

              <DropdownMenu>
                <DropdownMenuTrigger className="nav-link bg-transparent border-none hover:bg-transparent focus:ring-0 focus:outline-none">
                  About Us
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dropdown-content">
                  {aboutItems.map(item => <DropdownMenuItem key={item} asChild>
                      <a href={
                        item === "Pricing" ? "/pricing" : 
                        item === "Our Story" ? "/our-story" : 
                        item === "FAQs" ? "/faq" : 
                        "#about"
                      } className="dropdown-nav-link">
                        {item}
                      </a>
                    </DropdownMenuItem>)}
                </DropdownMenuContent>
              </DropdownMenu>

              {isDumpsterPage ? (
                <a href={DUMPSTER_CALL_HREF} className="cta-button" aria-label="Call 844-858-6546 to rent a dumpster">
                  Call to Rent a Dumpster
                </a>
              ) : (
                <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="cta-button" aria-label="Get a free quote for junk removal and demolition">
                  Get Free Quote
                </a>
              )}
            </div>

            {/* Mobile phone number and menu button */}
            <div className="lg:hidden flex items-center gap-4">
              <a href="tel:844-858-6546" className="flex items-center gap-2 px-3 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 rounded-lg font-semibold text-sm animate-breathe-3s">
                <Phone className="h-4 w-4" />
                844-858-6546
              </a>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground hover:text-primary p-2 min-h-11 min-w-11 inline-flex items-center justify-center" aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen} aria-controls="mobile-nav">
                {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <div id="mobile-nav" className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg max-h-[70vh] overflow-y-auto z-50">
              <div className="px-4 py-4 space-y-2 max-w-7xl mx-auto">
                <div className="py-3 px-4">
                  <button className="flex items-center justify-between w-full text-foreground font-medium font-inter hover:bg-muted rounded py-2" onClick={() => setIsJunkRemovalDropdownOpen(!isJunkRemovalDropdownOpen)} aria-haspopup="true" aria-expanded={isJunkRemovalDropdownOpen}>
                    Junk Removal
                    <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isJunkRemovalDropdownOpen ? 'rotate-90' : ''}`} />
                  </button>
                  {isJunkRemovalDropdownOpen && <div className="pl-4 space-y-2 mt-2">
                      <a href="/services" className="block py-2 text-foreground font-inter hover:bg-muted rounded font-semibold" onClick={() => setIsMenuOpen(false)}>
                        All Services
                      </a>
                      <a href="/services/junk-removal/residential/" className="block py-2 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                        Residential Junk Removal
                      </a>
                      <a href="/services/junk-removal/commercial/" className="block py-2 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                        Commercial Junk Removal
                      </a>
                      <a href="/services/junk-removal/appliance-removal/" className="block py-2 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                        Appliance Removal
                      </a>
                      <a href="/services/junk-removal/furniture-removal/" className="block py-2 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                        Furniture Removal
                      </a>
                      <a href="/services/junk-removal/hot-tub-removal/" className="block py-2 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                        Hot Tub Removal
                      </a>
                      <a href="/services/junk-removal/yard-waste-removal/" className="block py-2 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                        Yard Waste Removal
                      </a>
                      <a href="/services/junk-removal/garage-cleanout/" className="block py-2 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                        Garage Clean Out
                      </a>
                      <a href="/services/junk-removal/estate-cleanout/" className="block py-2 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                        Estate Clean Out
                      </a>
                      <a href="/services/junk-removal/hoarder-cleanup/" className="block py-2 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                        Hoarder Cleanup
                      </a>
                      <a href="/services/junk-removal/homeless-encampment-cleanup/" className="block py-2 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                        Homeless Encampment Cleanup
                      </a>
                    </div>}
                </div>
                
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
                
                <div className="py-3 px-4">
                  <button className="flex items-center justify-between w-full text-foreground font-medium font-inter hover:bg-muted rounded py-2" onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)} aria-haspopup="true" aria-expanded={isAboutDropdownOpen}>
                    About Us
                    <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-90' : ''}`} />
                  </button>
                  {isAboutDropdownOpen && <div className="pl-4 space-y-2 mt-2">
                      {aboutItems.map(item => <a key={item} href={
                        item === "Pricing" ? "/pricing" : 
                        item === "Our Story" ? "/our-story" : 
                        item === "FAQs" ? "/faq" : 
                        "#about"
                      } className="block py-2 text-foreground font-inter hover:bg-muted rounded" onClick={() => setIsMenuOpen(false)}>
                          {item}
                        </a>)}
                    </div>}
                </div>
              </div>
            </div>}
        </nav>
      </header>

      {/* Mobile Sticky Buttons */}
      <div className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 ${isDumpsterPage ? "p-3" : "p-4"} bg-white border-t`}>
        <div className="flex gap-3">
          {/* Two lines, not one. At 375px each button gets 165px, and "Text for
              Dumpster Availability" needs 200px on one line at 14px — it only
              fits unwrapped at 11px, which is too small to read. So the labels
              wrap to two tight lines instead, which keeps the approved wording,
              holds the bar at roughly 87px (it was 133px wrapping to 4–5 lines
              and covering the hero CTA), and keeps both tap targets over 44px. */}
          {isDumpsterPage ? (
            <>
              <a href={DUMPSTER_CALL_HREF} className="cta-button flex-1 justify-center text-center text-xs leading-tight px-2 py-2" aria-label="Call 844-858-6546 to rent a dumpster">
                Call to Rent a Dumpster
              </a>
              <a href={DUMPSTER_TEXT_HREF} className="flex items-center justify-center px-2 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 rounded-lg font-semibold flex-1 text-center text-xs leading-tight" aria-label="Text 813-531-9858 for dumpster availability">
                Text for Dumpster Availability
              </a>
            </>
          ) : (
            <>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="cta-button flex-1 justify-center" aria-label="Get a free quote for junk removal and demolition">
                Get Free Quote
              </a>
              <a href="tel:813-531-9858" className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 rounded-lg font-semibold flex-1" aria-label="Call or text 813-531-9858">
                <Phone className="h-4 w-4" />
                Call or Text
              </a>
            </>
          )}
        </div>
      </div>
    </>;
};
export default Navigation;