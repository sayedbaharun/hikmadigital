import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="gap-2">
              <Link to="/">
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="gap-2" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Popular Pages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button variant="ghost" asChild className="justify-start">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start">
                <Link to="/about">About Us</Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start">
                <Link to="/contact">Contact</Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start">
                <Link to="/">AI Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
