import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPropertyMenu, setShowPropertyMenu] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Phone number */}
          <div className="flex items-center gap-2 text-white">
            <Phone className="h-4 w-4" />
            <a href="tel:+1234567890" className="text-sm font-medium hover:text-accent transition-colors">
              +1 (234) 567-890
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-white hover:text-accent transition-colors ${
                isActive("/") ? "text-accent font-semibold" : ""
              }`}
            >
              Home
            </Link>

            {/* Property Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowPropertyMenu(true)}
              onMouseLeave={() => setShowPropertyMenu(false)}
            >
              <button className="flex items-center gap-1 text-white hover:text-accent transition-colors py-2">
                Property
                <ChevronDown className="h-4 w-4" />
              </button>

              {showPropertyMenu && (
                <div className="absolute top-full left-0 pt-2 w-48">
                  <div className="bg-white rounded-md shadow-lg py-2 z-50">
                    <Link
                      to="/property/1"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                    >
                      Property 1
                    </Link>
                    <Link
                      to="/property/2"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                    >
                      Property 2
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-white hover:text-accent transition-colors ${
                isActive("/about") ? "text-accent font-semibold" : ""
              }`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={`text-white hover:text-accent transition-colors ${
                isActive("/contact") ? "text-accent font-semibold" : ""
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-white hover:bg-primary-foreground/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/property/1"
              className="block px-3 py-2 text-white hover:bg-primary-foreground/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Property 1
            </Link>
            <Link
              to="/property/2"
              className="block px-3 py-2 text-white hover:bg-primary-foreground/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Property 2
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-white hover:bg-primary-foreground/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-white hover:bg-primary-foreground/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
