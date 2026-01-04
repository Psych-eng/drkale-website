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
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
