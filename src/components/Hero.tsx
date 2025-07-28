import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactFormModal from "./ContactFormModal";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Minimal background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 pt-40 pb-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Simple status indicator */}
          <div className="inline-flex items-center gap-3 bg-secondary/30 rounded-full px-4 py-2 mb-12">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-sm font-medium text-muted-foreground">UAE AI Charter Certified</span>
          </div>

          {/* Clean, focused headline */}
          <h1 className="text-6xl md:text-8xl font-light mb-8 leading-[0.9] tracking-tight">
            AI Systems for{" "}
            <span className="font-medium text-primary">Dubai</span>
          </h1>

          {/* Simplified subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            Trusted by 500+ businesses. 
            Bilingual AI systems that deliver real results.
          </p>

          {/* Primary CTAs */}
          <div className="flex items-center justify-center gap-4 mb-24">
            <ContactFormModal 
              type="assessment"
              trigger={
                <Button variant="default" size="lg" className="px-12 py-4 text-lg rounded-full">
                  Get AI Assessment
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              }
            />
            <Button 
              variant="outline" 
              size="lg" 
              className="px-12 py-4 text-lg rounded-full"
              onClick={() => navigate('/demo')}
            >
              View Demo
            </Button>
          </div>

          {/* Clean metrics display */}
          <div className="grid grid-cols-3 gap-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-light text-foreground mb-2">500+</div>
              <div className="text-sm text-muted-foreground font-medium">Dubai Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-foreground mb-2">40+</div>
              <div className="text-sm text-muted-foreground font-medium">Hours Saved/Week</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-foreground mb-2">35%</div>
              <div className="text-sm text-muted-foreground font-medium">Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;