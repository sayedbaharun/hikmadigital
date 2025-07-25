import { Button } from "@/components/ui/button";
import { Search, Rocket, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

const TransformationJourney = () => {
  const phases = [
    {
      month: "Month 1",
      title: "Discovery & Assessment",
      icon: Search,
      color: "primary",
      items: [
        "AI readiness evaluation",
        "Cultural alignment",
        "Compliance prep",
        "Custom strategy design"
      ]
    },
    {
      month: "Month 2", 
      title: "Deployment & Training",
      icon: Rocket,
      color: "accent",
      items: [
        "Custom AI agent design",
        "Human-coach collaboration",
        "Staff onboarding",
        "System integration"
      ]
    },
    {
      month: "Month 3",
      title: "Optimization & ROI",
      icon: TrendingUp,
      color: "primary",
      items: [
        "Performance measurement",
        "Cost/time savings report", 
        "Scalability plan",
        "Continuous improvement"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your <span className="text-gradient-gold">90-Day</span> AI Transformation Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From assessment to ROI measurement, we guide your business through a proven 
            transformation process that delivers measurable results in just 90 days.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isLast = index === phases.length - 1;
            
            return (
              <div key={phase.month} className="relative">
                {/* Connection Line */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent z-10"></div>
                )}
                
                <div className="card-elegant p-8 text-center relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 right-4 w-32 h-32 border border-primary rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 border border-accent rounded-full"></div>
                  </div>

                  {/* Month Badge */}
                  <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2 mb-6">
                    <span className="text-sm font-bold text-primary">{phase.month}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                    phase.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      phase.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-6">{phase.title}</h3>

                  {/* Items */}
                  <ul className="space-y-3 text-left">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          phase.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Duration Badge */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <span className="text-sm font-medium text-muted-foreground">
                      30 Days to Complete
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Results Preview */}
        <div className="text-center bg-card border border-border rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">Expected Results After 90 Days</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">40+</div>
              <div className="text-sm text-muted-foreground">Hours Saved/Month</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">35%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">AI Availability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">347%</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gold" size="lg" className="text-lg px-8">
            Start Your Free Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No commitment required • Get your custom AI roadmap in 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransformationJourney;