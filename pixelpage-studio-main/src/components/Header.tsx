import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isCompanyPage = ["/about", "/careers", "/awards"].includes(location.pathname);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-gradient-primary"></div>
          <span className="text-xl font-bold">Content King</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/features" 
            className={`transition-colors ${
              location.pathname === "/features" 
                ? "text-primary font-medium" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Features
          </Link>
          <Link 
            to="/pricing" 
            className={`transition-colors ${
              location.pathname === "/pricing" 
                ? "text-primary font-medium" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Pricing
          </Link>
          
          {/* Company Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 transition-colors ${
              isCompanyPage 
                ? "text-primary font-medium" 
                : "text-muted-foreground hover:text-foreground"
            }`}>
              Company
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/about" className="w-full cursor-pointer">
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/careers" className="w-full cursor-pointer">
                  Careers
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/awards" className="w-full cursor-pointer">
                  Awards
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link 
            to="/contact" 
            className={`transition-colors ${
              location.pathname === "/contact" 
                ? "text-primary font-medium" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost">Sign In</Button>
          <Button variant="hero">Start Free Trial</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/features" 
              className={`block transition-colors ${
                location.pathname === "/features" 
                  ? "text-primary font-medium" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`block transition-colors ${
                location.pathname === "/pricing" 
                  ? "text-primary font-medium" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            
            {/* Mobile Company Section */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Company
              </div>
              <Link 
                to="/about" 
                className={`block pl-4 transition-colors ${
                  location.pathname === "/about" 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/careers" 
                className={`block pl-4 transition-colors ${
                  location.pathname === "/careers" 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link 
                to="/awards" 
                className={`block pl-4 transition-colors ${
                  location.pathname === "/awards" 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Awards
              </Link>
            </div>
            
            <Link 
              to="/contact" 
              className={`block transition-colors ${
                location.pathname === "/contact" 
                  ? "text-primary font-medium" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost">Sign In</Button>
              <Button variant="hero">Start Free Trial</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;