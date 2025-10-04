import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onBookCallClick: () => void;
}

const Navigation = ({ onBookCallClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold">
            <span className="text-foreground">Alphabyte</span>
            <span className="text-primary"> BPO</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("partnership")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Partnership
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={onBookCallClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.5)]"
            >
              Book a Discovery Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-background/95 backdrop-blur-md rounded-lg mb-4">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("partnership")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Partnership
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <div className="px-4">
              <Button
                onClick={onBookCallClick}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Book a Discovery Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
