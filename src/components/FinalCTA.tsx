import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar, FileText } from "lucide-react";
import ContactFormModal from "./ContactFormModal";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let Your Business Work{" "}
            <span className="text-gradient-gold">While You Sleep</span>.{" "}
            <br />
            Hikma AI Delivers Results.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join 500+ businesses in Dubai that trust Hikma Digital for their AI transformation. 
            Start seeing results in the first 30 days.
          </p>
          
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-primary font-semibold">Limited spots available for Q1 2025</span>
          </div>
        </div>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <ContactFormModal 
            type="consultation"
            trigger={
              <Button variant="default" size="lg" className="min-w-[220px] text-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            }
          />
          <ContactFormModal 
            type="assessment"
            trigger={
              <Button variant="accent" size="lg" className="min-w-[220px] text-lg">
                <FileText className="mr-2 h-5 w-5" />
                Get AI Assessment
              </Button>
            }
          />
          <Button variant="elegant" size="lg" className="min-w-[220px] text-lg" asChild>
            <a href="https://wa.me/971585404978?text=Hi%2C%20I%27d%20like%20to%20chat%20about%20AI%20solutions%20for%20my%20business" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat With Us Now
            </a>
          </Button>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">Free</div>
            <div className="font-semibold mb-2">Initial Consultation</div>
            <div className="text-sm text-muted-foreground">No commitment, just expert advice</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
            <div className="text-3xl font-bold text-accent mb-2">24h</div>
            <div className="font-semibold mb-2">Custom AI Roadmap</div>
            <div className="text-sm text-muted-foreground">Tailored to your business needs</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">30 Days</div>
            <div className="font-semibold mb-2">First Results</div>
            <div className="text-sm text-muted-foreground">Measurable impact guarantee</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center bg-secondary/30 border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-semibold mb-1">WhatsApp</div>
              <a href="https://wa.me/971585404978" className="text-muted-foreground text-sm hover:text-primary transition-colors">+971 58 540 4978</a>
              <div className="text-xs text-muted-foreground">Avg response: &lt; 5 min</div>
            </div>
            <div className="text-center">
              <span className="text-2xl mb-3 block">✉️</span>
              <div className="font-semibold mb-1">Email</div>
              <a href="mailto:hello@hikmadigital.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">hello@hikmadigital.com</a>
              <div className="text-xs text-muted-foreground">Within 2 hours</div>
            </div>
            <div className="text-center">
              <span className="text-2xl mb-3 block">📍</span>
              <div className="font-semibold mb-1">Location</div>
              <div className="text-muted-foreground text-sm">Dubai Silicon Oasis</div>
              <div className="text-xs text-muted-foreground">Technohub Building</div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>Our team is online now</span>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm">🛡️ ISO 27001 Compliant</div>
            <div className="text-sm">⭐ 4.9/5 Client Rating</div>
            <div className="text-sm">🇦🇪 Licensed in Dubai</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;