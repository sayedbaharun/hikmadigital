import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";

const PartnershipsSection = () => {
  const partners = [
    { name: "OpenAI", logo: "🤖" },
    { name: "Supabase", logo: "⚡" },
    { name: "ElevenLabs", logo: "🗣️" },
    { name: "DTEC", logo: "🏢" },
    { name: "AWS", logo: "☁️" },
    { name: "Dubai SME", logo: "🇦🇪" }
  ];

  const clients = [
    { name: "MyDubai", description: "Smart city AI solutions" },
    { name: "Aivant Realty", description: "Real estate automation" },
    { name: "Al-Asala Restaurant", description: "Hospitality AI systems" },
    { name: "Dubai Fashion", description: "Retail optimization" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Licensing & <span className="text-gradient-gold">Partnerships</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            License our AI stack for your product — powering Dubai's leading businesses 
            with enterprise-grade AI solutions.
          </p>
        </div>

        {/* Technology Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technology Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-3">{partner.logo}</div>
                <div className="font-semibold text-sm">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Powering Leading Businesses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="card-elegant p-6 text-center group hover:border-primary/50"
              >
                <Building2 className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">{client.name}</h4>
                <p className="text-muted-foreground text-sm">{client.description}</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Active Integration</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Licensing CTA */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">
            License Our AI Stack
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            White-label our proven AI technology for your products. Complete API access, 
            custom branding, and enterprise support included.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">API First</div>
              <div className="text-sm opacity-80">Complete REST & GraphQL APIs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">White Label</div>
              <div className="text-sm opacity-80">Your brand, our technology</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">24/7 Support</div>
              <div className="text-sm opacity-80">Enterprise-level assistance</div>
            </div>
          </div>

          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
            Request Licensing Info
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Partnership Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-bold text-lg mb-3">Faster Time to Market</h4>
              <p className="text-muted-foreground">Deploy AI features in weeks, not months. Our pre-built solutions accelerate your development.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="font-bold text-lg mb-3">Expert Consultation</h4>
              <p className="text-muted-foreground">Access to our AI specialists and ongoing technical support for your implementations.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="font-bold text-lg mb-3">Revenue Sharing</h4>
              <p className="text-muted-foreground">Attractive revenue sharing models and partnership terms that grow with your success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;