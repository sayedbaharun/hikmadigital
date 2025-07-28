import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ContactFormModal from "./ContactFormModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: "Solutions", href: "/solutions" },
    { name: "AI Agents", href: "/ai-agents" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span className="text-xl font-bold">
              Hikma <span className="text-gradient-gold">Digital</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://wa.me/971585404978?text=Hi%2C%20I%27d%20like%20to%20discuss%20AI%20solutions%20for%20my%20business" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </a>
            <ContactFormModal 
              type="assessment"
              trigger={
                <Button variant="default" size="sm">
                  Free Assessment
                </Button>
              }
            />
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <a href="https://wa.me/971585404978?text=Hi%2C%20I%27d%20like%20to%20discuss%20AI%20solutions%20for%20my%20business" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </a>
                <ContactFormModal 
                  type="assessment"
                  trigger={
                    <Button variant="default" size="sm" className="w-full">
                      Free Assessment
                    </Button>
                  }
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;