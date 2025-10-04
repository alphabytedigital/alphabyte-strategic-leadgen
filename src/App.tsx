import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ITProcessOutsourcing from "./pages/ITProcessOutsourcing";
import SaaSSupport from "./pages/SaaSSupport";
import Cybersecurity from "./pages/Cybersecurity";
import ProjectManagement from "./pages/ProjectManagement";
import BusinessSolutions from "./pages/BusinessSolutions";
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
          <Route path="/it-process-outsourcing" element={<ITProcessOutsourcing />} />
          <Route path="/saas-support" element={<SaaSSupport />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/business-solutions" element={<BusinessSolutions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
