import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const DISTRICT_SERVICES = [
  { href: "/school-districts", label: "Overview" },
  { href: "/threat-assessment", label: "Threat Assessments" },
  { href: "/manifestation-determination", label: "Manifestation Determinations" },
  { href: "/expert-witness", label: "Expert Witness" },
  { href: "/staff-training", label: "Staff Training" },
  { href: "/school-portal", label: "School Portal" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
          <img src="/logo.png" alt="Dr. Milind Kale MD LLC" className="h-12 w-auto" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground">Dr. Milind Kale, MD</span>
            <span className="text-sm text-muted-foreground">Child &amp; Adolescent Psychiatrist</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-5">
          <Link href="/#about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>

          {/* For Districts dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              For Districts
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-1 z-50">
                {DISTRICT_SERVICES.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/parents" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            For Parents
          </Link>
          <Link href="/process" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Evaluation Process
          </Link>
          <Link href="/credentials" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Credentials
          </Link>
          <Link href="/#faq" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            FAQ
          </Link>
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-1">
            <Link
              href="/#about"
              className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>For Districts</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 space-y-1 border-l-2 border-primary/20 ml-2 mb-1">
                  {DISTRICT_SERVICES.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/parents"
              className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Parents
            </Link>
            <Link
              href="/process"
              className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Evaluation Process
            </Link>
            <Link
              href="/credentials"
              className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Credentials
            </Link>
            <Link
              href="/#faq"
              className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-2">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Contact</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
