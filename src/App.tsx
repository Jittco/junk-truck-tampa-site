import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import RedirectComponent from "./components/RedirectComponent";

// Lazy-load all non-homepage routes for code splitting
const Services = lazy(() => import("./pages/Services"));
const ServicesHub = lazy(() => import("./pages/ServicesHub"));
const ResidentialJunkRemoval = lazy(() => import("./pages/ResidentialJunkRemoval"));
const CommercialJunkRemoval = lazy(() => import("./pages/CommercialJunkRemoval"));
const DemolitionServices = lazy(() => import("./pages/DemolitionServices"));
const DumpsterRental = lazy(() => import("./pages/DumpsterRental"));
const Pricing = lazy(() => import("./pages/Pricing"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ResidentialJunkRemovalService = lazy(() => import("./pages/ResidentialJunkRemovalService"));
const CommercialJunkRemovalService = lazy(() => import("./pages/CommercialJunkRemovalService"));
const ApplianceRemovalService = lazy(() => import("./pages/ApplianceRemovalService"));
const CleanOutService = lazy(() => import("./pages/CleanOutService"));
const GarageCleanOutService = lazy(() => import("./pages/GarageCleanOutService"));
const EstateCleanOutService = lazy(() => import("./pages/EstateCleanOutService"));
const FurnitureRemovalService = lazy(() => import("./pages/FurnitureRemovalService"));
const CouchDisposalService = lazy(() => import("./pages/CouchDisposalService"));
const HotTubRemovalService = lazy(() => import("./pages/HotTubRemovalService"));
const YardWasteRemovalService = lazy(() => import("./pages/YardWasteRemovalService"));
const ShedRemovalService = lazy(() => import("./pages/ShedRemovalService"));
const PlaysetRemovalService = lazy(() => import("./pages/PlaysetRemovalService"));
const HoarderCleanupService = lazy(() => import("./pages/HoarderCleanupService"));
const HomelessEncampmentCleanupService = lazy(() => import("./pages/HomelessEncampmentCleanupService"));
const JunkRemovalHub = lazy(() => import("./pages/JunkRemovalHub"));
const ServiceAreaHub = lazy(() => import("./pages/ServiceAreaHub"));
const BrandonFL = lazy(() => import("./pages/serviceAreas/BrandonFL"));
const CarrollwoodFL = lazy(() => import("./pages/serviceAreas/CarrollwoodFL"));
const TempleTerraceFL = lazy(() => import("./pages/serviceAreas/TempleTerraceFL"));
const SouthTampaFL = lazy(() => import("./pages/serviceAreas/SouthTampaFL"));
const TownNCountryFL = lazy(() => import("./pages/serviceAreas/TownNCountryFL"));
const OurStory = lazy(() => import("./pages/OurStory"));
const FAQPage = lazy(() => import("./pages/FAQPage"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services/junk-removal/" element={<JunkRemovalHub />} />
          <Route path="/services/demolition/" element={<DemolitionServices />} />
          <Route path="/services/dumpster-rental/" element={<DumpsterRental />} />
          <Route path="/pricing" element={<Pricing />} />
          
          {/* Junk Removal Services - New Structure */}
          <Route path="/services/junk-removal/residential/" element={<ResidentialJunkRemovalService />} />
          <Route path="/services/junk-removal/commercial/" element={<CommercialJunkRemovalService />} />
          <Route path="/services/junk-removal/appliance-removal/" element={<ApplianceRemovalService />} />
          <Route path="/services/junk-removal/clean-outs/" element={<CleanOutService />} />
          <Route path="/services/junk-removal/garage-cleanout/" element={<GarageCleanOutService />} />
          <Route path="/services/junk-removal/estate-cleanout/" element={<EstateCleanOutService />} />
          <Route path="/services/junk-removal/furniture-removal/" element={<FurnitureRemovalService />} />
          <Route path="/services/junk-removal/hot-tub-removal/" element={<HotTubRemovalService />} />
          <Route path="/services/junk-removal/yard-waste-removal/" element={<YardWasteRemovalService />} />
          <Route path="/services/junk-removal/hoarder-cleanup/" element={<HoarderCleanupService />} />
          <Route path="/services/junk-removal/homeless-encampment-cleanup/" element={<HomelessEncampmentCleanupService />} />
          
          {/* Demolition Services */}
          <Route path="/services/demolition/shed-removal/" element={<ShedRemovalService />} />
          <Route path="/services/demolition/playset-removal/" element={<PlaysetRemovalService />} />
          {/* Additional demolition services will use generic service detail pages until custom pages are created */}
          
          {/* Service Area pages */}
          <Route path="/service-areas/" element={<ServiceAreaHub />} />
          <Route path="/service-areas/brandon-fl/" element={<BrandonFL />} />
          <Route path="/service-areas/carrollwood-fl/" element={<CarrollwoodFL />} />
          <Route path="/service-areas/temple-terrace-fl/" element={<TempleTerraceFL />} />
          <Route path="/service-areas/south-tampa-fl/" element={<SouthTampaFL />} />
          <Route path="/service-areas/town-n-country-fl/" element={<TownNCountryFL />} />
          
          {/* 301 Redirects from old /services/{slug}/ to new /services/junk-removal/{slug}/ */}
          <Route path="/services/residential-junk-removal/" element={<RedirectComponent to="/services/junk-removal/residential/" />} />
          <Route path="/services/commercial-junk-removal/" element={<RedirectComponent to="/services/junk-removal/commercial/" />} />
          <Route path="/services/appliance-removal/" element={<RedirectComponent to="/services/junk-removal/appliance-removal/" />} />
          <Route path="/services/clean-out/" element={<RedirectComponent to="/services/junk-removal/clean-outs/" />} />
          <Route path="/services/garage-clean-out/" element={<RedirectComponent to="/services/junk-removal/garage-cleanout/" />} />
          <Route path="/services/estate-clean-out/" element={<RedirectComponent to="/services/junk-removal/estate-cleanout/" />} />
          <Route path="/services/furniture-removal/" element={<RedirectComponent to="/services/junk-removal/furniture-removal/" />} />
          <Route path="/services/couch-disposal/" element={<RedirectComponent to="/services/junk-removal/furniture-removal/" />} />
          <Route path="/services/hot-tub-removal/" element={<RedirectComponent to="/services/junk-removal/hot-tub-removal/" />} />
          <Route path="/services/yard-waste-removal/" element={<RedirectComponent to="/services/junk-removal/yard-waste-removal/" />} />
          <Route path="/services/hoarder-cleanup/" element={<RedirectComponent to="/services/junk-removal/hoarder-cleanup/" />} />
          <Route path="/services/homeless-encampment-cleanup/" element={<RedirectComponent to="/services/junk-removal/homeless-encampment-cleanup/" />} />
          
          {/* 301 Redirects from legacy /junk-removal-services/ URLs */}
          <Route path="/junk-removal-services/residential-junk-removal/" element={<RedirectComponent to="/services/junk-removal/residential/" />} />
          <Route path="/junk-removal-services/commercial-junk-removal/" element={<RedirectComponent to="/services/junk-removal/commercial/" />} />
          <Route path="/junk-removal-services/appliance-removal/" element={<RedirectComponent to="/services/junk-removal/appliance-removal/" />} />
          <Route path="/junk-removal-services/clean-out/" element={<RedirectComponent to="/services/junk-removal/clean-outs/" />} />
          <Route path="/junk-removal-services/clean-outs/" element={<RedirectComponent to="/services/junk-removal/clean-outs/" />} />
          <Route path="/junk-removal-services/garage-clean-out/" element={<RedirectComponent to="/services/junk-removal/garage-cleanout/" />} />
          <Route path="/junk-removal-services/garage-cleanout/" element={<RedirectComponent to="/services/junk-removal/garage-cleanout/" />} />
          <Route path="/junk-removal-services/estate-clean-out/" element={<RedirectComponent to="/services/junk-removal/estate-cleanout/" />} />
          <Route path="/junk-removal-services/estate-cleanout/" element={<RedirectComponent to="/services/junk-removal/estate-cleanout/" />} />
          <Route path="/junk-removal-services/furniture-removal/" element={<RedirectComponent to="/services/junk-removal/furniture-removal/" />} />
          <Route path="/junk-removal-services/furniture-removal/couch-disposal/" element={<RedirectComponent to="/services/junk-removal/furniture-removal/" />} />
          <Route path="/junk-removal-services/couch-disposal/" element={<RedirectComponent to="/services/junk-removal/furniture-removal/" />} />
          <Route path="/junk-removal-services/hot-tub-removal/" element={<RedirectComponent to="/services/junk-removal/hot-tub-removal/" />} />
          <Route path="/junk-removal-services/hot-tub-removal-2/" element={<RedirectComponent to="/services/junk-removal/hot-tub-removal/" />} />
          <Route path="/junk-removal-services/yard-waste-removal/" element={<RedirectComponent to="/services/junk-removal/yard-waste-removal/" />} />
          <Route path="/junk-removal-services/hoarder-cleanup/" element={<RedirectComponent to="/services/junk-removal/hoarder-cleanup/" />} />
          
          {/* 301 Redirects from legacy /service/ URLs */}
          <Route path="/service/residential-junk-removal-services/" element={<RedirectComponent to="/services/junk-removal/residential/" />} />
          <Route path="/service/commercial-junk-removal-services/" element={<RedirectComponent to="/services/junk-removal/commercial/" />} />
          <Route path="/service/appliance-removal-services/" element={<RedirectComponent to="/services/junk-removal/appliance-removal/" />} />
          <Route path="/service/furniture-removal-services/" element={<RedirectComponent to="/services/junk-removal/furniture-removal/" />} />
          <Route path="/service/hot-tub-removal-services/" element={<RedirectComponent to="/services/junk-removal/hot-tub-removal/" />} />
          <Route path="/service/yard-waste-removal-services/" element={<RedirectComponent to="/services/junk-removal/yard-waste-removal/" />} />
          
          {/* Demolition Services redirects */}
          <Route path="/demolition-services/" element={<RedirectComponent to="/services/demolition/" />} />
          <Route path="/demolition-services/playset-removal/" element={<RedirectComponent to="/services/demolition/playset-removal/" />} />
          <Route path="/demolition-services/shed-removal/" element={<RedirectComponent to="/services/demolition/shed-removal/" />} />
          <Route path="/demolition-services/pergola-demolition/" element={<RedirectComponent to="/services/demolition/pergola-removal/" />} />
          <Route path="/demolition-services/driveway-demolition/" element={<RedirectComponent to="/services/demolition/driveway-demolition/" />} />
          <Route path="/demolition-services/interior-demolition/" element={<RedirectComponent to="/services/demolition/interior-demolition/" />} />
          <Route path="/demolition-services/deck-removal/" element={<RedirectComponent to="/services/demolition/deck-removal/" />} />
          <Route path="/demolition-services/fence-removal/" element={<RedirectComponent to="/services/demolition/fence-removal/" />} />
          <Route path="/demolition-services/pool-removal/" element={<RedirectComponent to="/services/demolition/pool-removal/" />} />
          
          {/* Legacy demolition URLs (various old formats) */}
          <Route path="/services/deck-removal/" element={<RedirectComponent to="/services/demolition/deck-removal/" />} />
          <Route path="/services/interior-demolition/" element={<RedirectComponent to="/services/demolition/interior-demolition/" />} />
          <Route path="/services/pergola-demolition/" element={<RedirectComponent to="/services/demolition/pergola-removal/" />} />
          <Route path="/services/driveway-demo/" element={<RedirectComponent to="/services/demolition/driveway-demolition/" />} />
          <Route path="/services/driveway-demolition/" element={<RedirectComponent to="/services/demolition/driveway-demolition/" />} />
          <Route path="/services/fence-removal/" element={<RedirectComponent to="/services/demolition/fence-removal/" />} />
          <Route path="/services/pool-removal/" element={<RedirectComponent to="/services/demolition/pool-removal/" />} />
          
          {/* Service Areas redirects */}
          <Route path="/services-areas/junk-removal-south-tampa/" element={<RedirectComponent to="/service-areas/south-tampa-fl/" />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
