import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Calendar } from "lucide-react";
import heroImage from "@/assets/dubai-skyline-hero.jpg";
import aiChatbotImage from "@/assets/ai-chatbot-interface.jpg";
import aiRobotImage from "@/assets/ai-robot-assistant.jpg";
import ConsultationForm from "./ConsultationForm";
import { BilingualHoverText, ArabicCalligraphy, DubaiPattern } from "./ArabicElements";

const Hero = () => {
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

          {/* Single primary CTA */}
          <div className="mb-24">
            <ConsultationForm 
              type="assessment"
              trigger={
                <Button variant="default" size="lg" className="px-12 py-4 text-lg rounded-full">
                  Get AI Assessment
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              }
            />
          </div>

          {/* Clean metrics display */}
          <div className="grid grid-cols-3 gap-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-light text-foreground mb-2">500+</div>
              <div className="text-sm text-muted-foreground font-medium">Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-foreground mb-2">94.5%</div>
              <div className="text-sm text-muted-foreground font-medium">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-foreground mb-2">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;