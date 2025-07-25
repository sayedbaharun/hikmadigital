import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, MessageCircle, Mic, Globe, ArrowRight, Smartphone } from "lucide-react";

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState("whatsapp");

  const demos = [
    {
      id: "whatsapp",
      title: "WhatsApp Integration",
      icon: MessageCircle,
      description: "See how our AI responds to customer inquiries in real-time",
      preview: "Customer: مرحبا، أريد حجز موعد\nAI: Hello! I'd be happy to help you book an appointment. What service are you interested in?"
    },
    {
      id: "voice",
      title: "Voice Commands",
      icon: Mic,
      description: "Voice-activated AI assistant for hands-free business operations",
      preview: "Voice: \"Schedule meeting for tomorrow 3PM\"\nAI: Meeting scheduled for tomorrow at 3:00 PM. Calendar invite sent."
    },
    {
      id: "web",
      title: "Web Assistant",
      icon: Globe,
      description: "Embedded AI chat for your website with Arabic and English support",
      preview: "Visitor: What are your business hours?\nAI: We're open Sunday-Thursday 9AM-6PM, and Saturday 10AM-4PM. How can I assist you today?"
    },
    {
      id: "mobile",
      title: "Mobile App Integration",
      icon: Smartphone,
      description: "Native mobile app AI integration for on-the-go business management",
      preview: "User: Show me today's sales report\nAI: Today's sales: AED 12,450 (↑15% vs yesterday). Top product: Premium Package x8 units."
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Demo</span> Preview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience how Hikma AI systems work across different platforms. 
            Each demo showcases real interactions from our deployed systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Selection */}
          <div className="space-y-4">
            {demos.map((demo) => {
              const Icon = demo.icon;
              const isActive = activeDemo === demo.id;
              
              return (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`w-full p-6 rounded-xl border text-left transition-all duration-300 hover:transform hover:scale-105 ${
                    isActive 
                      ? 'border-primary bg-primary/5 shadow-card' 
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isActive ? 'bg-primary/20' : 'bg-secondary'
                    } transition-colors duration-300`}>
                      <Icon className={`w-6 h-6 ${
                        isActive ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg mb-2 ${
                        isActive ? 'text-primary' : 'text-foreground'
                      }`}>
                        {demo.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {demo.description}
                      </p>
                    </div>
                    {isActive && (
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Demo Preview */}
          <div className="card-elegant p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-sm text-muted-foreground ml-2">Live Demo</span>
            </div>

            <div className="bg-background border border-border rounded-lg p-6 min-h-[300px] font-mono text-sm">
              <div className="text-primary font-bold mb-4">
                {demos.find(d => d.id === activeDemo)?.title} - Live Interaction
              </div>
              <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                {demos.find(d => d.id === activeDemo)?.preview}
              </div>
              
              {/* Typing indicator */}
              <div className="flex items-center gap-2 mt-6">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-xs text-muted-foreground">AI is typing...</span>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <Button variant="gold" className="flex-1">
                <Play className="mr-2 h-4 w-4" />
                Try Interactive Demo
              </Button>
              <Button variant="outline">
                View Full Recording
              </Button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-card border border-border rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">&lt; 2s</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
          <div className="text-center p-4 bg-card border border-border rounded-lg">
            <div className="text-2xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="text-center p-4 bg-card border border-border rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Availability</div>
          </div>
          <div className="text-center p-4 bg-card border border-border rounded-lg">
            <div className="text-2xl font-bold text-accent mb-2">2 Min</div>
            <div className="text-sm text-muted-foreground">Setup Time</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="accent" size="lg">
            Try the 2-Minute Demo Experience
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No signup required • Experience real AI interactions
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;