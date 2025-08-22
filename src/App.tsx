import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServicesHub from "./pages/ServicesHub";
import ResidentialJunkRemoval from "./pages/ResidentialJunkRemoval";
import CommercialJunkRemoval from "./pages/CommercialJunkRemoval";
import DemolitionServices from "./pages/DemolitionServices";
import DumpsterRental from "./pages/DumpsterRental";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import RedirectComponent from "./components/RedirectComponent";

// New individual service pages
import ResidentialJunkRemovalService from "./pages/ResidentialJunkRemovalService";
import CommercialJunkRemovalService from "./pages/CommercialJunkRemovalService";
import ApplianceRemovalService from "./pages/ApplianceRemovalService";
import CleanOutService from "./pages/CleanOutService";
import GarageCleanOutService from "./pages/GarageCleanOutService";
import EstateCleanOutService from "./pages/EstateCleanOutService";
import FurnitureRemovalService from "./pages/FurnitureRemovalService";
import CouchDisposalService from "./pages/CouchDisposalService";
import HotTubRemovalService from "./pages/HotTubRemovalService";
import YardWasteRemovalService from "./pages/YardWasteRemovalService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services/demolition/" element={<DemolitionServices />} />
          <Route path="/services/dumpster-rental/" element={<DumpsterRental />} />
          <Route path="/pricing" element={<Pricing />} />
          
          {/* New individual service pages with clean URLs */}
          <Route path="/services/residential-junk-removal/" element={<ResidentialJunkRemovalService />} />
          <Route path="/services/commercial-junk-removal/" element={<CommercialJunkRemovalService />} />
          <Route path="/services/appliance-removal/" element={<ApplianceRemovalService />} />
          <Route path="/services/clean-out/" element={<CleanOutService />} />
          <Route path="/services/garage-clean-out/" element={<GarageCleanOutService />} />
          <Route path="/services/estate-clean-out/" element={<EstateCleanOutService />} />
          <Route path="/services/furniture-removal/" element={<FurnitureRemovalService />} />
          <Route path="/services/couch-disposal/" element={<CouchDisposalService />} />
          <Route path="/services/hot-tub-removal/" element={<HotTubRemovalService />} />
          <Route path="/services/yard-waste-removal/" element={<YardWasteRemovalService />} />
          
          {/* 301 Redirects from old URLs to new structure */}
          <Route path="/junk-removal-services/residential-junk-removal/" element={<RedirectComponent to="/services/residential-junk-removal/" />} />
          <Route path="/junk-removal-services/commercial-junk-removal/" element={<RedirectComponent to="/services/commercial-junk-removal/" />} />
          <Route path="/junk-removal-services/appliance-removal/" element={<RedirectComponent to="/services/appliance-removal/" />} />
          <Route path="/junk-removal-services/clean-out/" element={<RedirectComponent to="/services/clean-out/" />} />
          <Route path="/junk-removal-services/garage-clean-out/" element={<RedirectComponent to="/services/garage-clean-out/" />} />
          <Route path="/junk-removal-services/estate-clean-out/" element={<RedirectComponent to="/services/estate-clean-out/" />} />
          <Route path="/junk-removal-services/furniture-removal/" element={<RedirectComponent to="/services/furniture-removal/" />} />
          <Route path="/junk-removal-services/couch-disposal/" element={<RedirectComponent to="/services/couch-disposal/" />} />
          <Route path="/junk-removal-services/hot-tub-removal/" element={<RedirectComponent to="/services/hot-tub-removal/" />} />
          <Route path="/junk-removal-services/yard-waste-removal/" element={<RedirectComponent to="/services/yard-waste-removal/" />} />
          
          {/* Additional legacy URL patterns */}
          <Route path="/service/residential-junk-removal-services/" element={<RedirectComponent to="/services/residential-junk-removal/" />} />
          <Route path="/service/commercial-junk-removal-services/" element={<RedirectComponent to="/services/commercial-junk-removal/" />} />
          <Route path="/service/appliance-removal-services/" element={<RedirectComponent to="/services/appliance-removal/" />} />
          <Route path="/service/furniture-removal-services/" element={<RedirectComponent to="/services/furniture-removal/" />} />
          <Route path="/service/hot-tub-removal-services/" element={<RedirectComponent to="/services/hot-tub-removal/" />} />
          <Route path="/service/yard-waste-removal-services/" element={<RedirectComponent to="/services/yard-waste-removal/" />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
