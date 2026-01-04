import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <img src="/logo.png" alt="Dr. Milind Kale MD LLC" className="h-12 w-auto" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground">Dr. Milind Kale, MD</span>
            <span className="text-sm text-muted-foreground">Child & Adolescent Psychiatrist</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/#about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/school-districts" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            For School Districts
          </Link>
          <Link href="/school-portal" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            School Portal
          </Link>
          <Link href="/parents" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            For Parents
          </Link>
          <Link href="/process" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Evaluation Process
          </Link>
          <Link href="/credentials" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Credentials
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
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-3">
            <Link href="/#about" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/school-districts" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              For School Districts
            </Link>
            <Link href="/school-portal" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              School Portal
            </Link>
            <Link href="/parents" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              For Parents
            </Link>
            <Link href="/process" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Evaluation Process
            </Link>
            <Link href="/credentials" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Credentials
            </Link>
            <Link href="/contact" className="block">
              <Button className="w-full">Contact</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
