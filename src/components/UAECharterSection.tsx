import { CheckCircle, Shield, Users, Eye, Lock, User, Scale, Award, Heart, Handshake, BookOpen, Globe } from "lucide-react";

const charterPrinciples = [
  {
    id: 1,
    title: "Strengthening Human-Machine Ties",
    icon: Users,
    description: "Building collaborative AI systems that enhance human capabilities"
  },
  {
    id: 2,
    title: "Safety of AI Systems",
    icon: Shield,
    description: "Rigorous testing and safety protocols for all AI implementations"
  },
  {
    id: 3,
    title: "Elimination of Algorithmic Bias",
    icon: Scale,
    description: "Fair and unbiased AI systems that serve all users equally"
  },
  {
    id: 4,
    title: "Ensuring Data Privacy",
    icon: Lock,
    description: "Strict data protection and privacy compliance measures"
  },
  {
    id: 5,
    title: "Transparency of AI Systems",
    icon: Eye,
    description: "Clear explanations of AI decision-making processes"
  },
  {
    id: 6,
    title: "Human Oversight",
    icon: User,
    description: "Maintaining human control and oversight of AI operations"
  },
  {
    id: 7,
    title: "Governance and Accountability",
    icon: CheckCircle,
    description: "Responsible AI governance and accountability frameworks"
  },
  {
    id: 8,
    title: "Technological Excellence",
    icon: Award,
    description: "Commitment to the highest standards of AI technology"
  },
  {
    id: 9,
    title: "Preserving Human Commitment",
    icon: Heart,
    description: "Maintaining human values and ethical considerations"
  },
  {
    id: 10,
    title: "Peaceful Coexistence with AI",
    icon: Handshake,
    description: "Harmonious integration of AI into daily business operations"
  },
  {
    id: 11,
    title: "Promoting AI Awareness",
    icon: BookOpen,
    description: "Educating businesses about AI capabilities and benefits"
  },
  {
    id: 12,
    title: "Adherence to Local and Global Laws",
    icon: Globe,
    description: "Full compliance with UAE and international AI regulations"
  }
];

const UAECharterSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">AI Ethics Compliant</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            100% Compliant with All{" "}
            <span className="text-gradient-gold">12 UAE AI Charter</span>{" "}
            Principles
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The first and only AI agency in Dubai to achieve full compliance with the UAE AI Charter, 
            ensuring ethical, safe, and responsible AI implementation for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {charterPrinciples.map((principle) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.id}
                className="card-elegant p-6 group hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm font-bold text-primary/80">
                    #{principle.id.toString().padStart(2, '0')}
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-3 leading-tight">
                  {principle.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>Certified Compliant</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-lg px-8 py-4">
            <Shield className="w-8 h-8 text-primary" />
            <div className="text-left">
              <div className="font-bold text-lg">Verified by UAE AI Office</div>
              <div className="text-muted-foreground text-sm">Certificate #UAE-AI-001-2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UAECharterSection;