import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Scope from "./pages/Scope";
import Controls from "./pages/Controls";
import ControlMapping from "./pages/ControlMapping";
import Risks from "./pages/Risks";
import RiskTreatment from "./pages/RiskTreatment";
import SoA from "./pages/SoA";
import Evidence from "./pages/Evidence";
import Documents from "./pages/Documents";
import AuditTrail from "./pages/AuditTrail";
import Exports from "./pages/Exports";
import Auditor from "./pages/Auditor";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/scope" element={<Scope />} />
          <Route path="/controls" element={<Controls />} />
          <Route path="/controls/mapping" element={<ControlMapping />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/risks/treatment" element={<RiskTreatment />} />
          <Route path="/soa" element={<SoA />} />
          <Route path="/evidence" element={<Evidence />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/audit-trail" element={<AuditTrail />} />
          <Route path="/exports" element={<Exports />} />
          <Route path="/auditor" element={<Auditor />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
