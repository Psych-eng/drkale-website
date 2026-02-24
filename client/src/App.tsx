import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import IEPTool from "./pages/IEPTool";
import SchoolDistricts from "./pages/SchoolDistricts";
import Parents from "./pages/Parents";
import Process from "./pages/Process";
import Credentials from "./pages/Credentials";
import Contact from "./pages/Contact";
import SchoolPortal from "./pages/SchoolPortal";
import PortalGuide from "./pages/PortalGuide";
import AdminDashboard from "./pages/AdminDashboard";
import ThreatAssessment from "./pages/ThreatAssessment";
import ManifestationDetermination from "./pages/ManifestationDetermination";
import ExpertWitness from "./pages/ExpertWitness";
import StaffTraining from "./pages/StaffTraining";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/iep-tool"} component={IEPTool} />
        <Route path={"/school-districts"} component={SchoolDistricts} />
        <Route path={"/parents"} component={Parents} />
        <Route path={"/process"} component={Process} />
        <Route path={"/credentials"} component={Credentials} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/school-portal"} component={SchoolPortal} />
        <Route path={"/portal-guide"} component={PortalGuide} />
        <Route path={"/admin"} component={AdminDashboard} />
        {/* New service pages */}
        <Route path={"/threat-assessment"} component={ThreatAssessment} />
        <Route path={"/manifestation-determination"} component={ManifestationDetermination} />
        <Route path={"/expert-witness"} component={ExpertWitness} />
        <Route path={"/staff-training"} component={StaffTraining} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
