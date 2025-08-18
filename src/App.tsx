import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ResidentialJunkRemoval from "./pages/ResidentialJunkRemoval";
import CommercialJunkRemoval from "./pages/CommercialJunkRemoval";
import DemolitionServices from "./pages/DemolitionServices";
import DumpsterRental from "./pages/DumpsterRental";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/residential-junk-removal" element={<ResidentialJunkRemoval />} />
          <Route path="/services/commercial-junk-removal" element={<CommercialJunkRemoval />} />
          <Route path="/services/demolition" element={<DemolitionServices />} />
          <Route path="/services/dumpster-rental" element={<DumpsterRental />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
