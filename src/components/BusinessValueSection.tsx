import { Button } from "@/components/ui/button";
import { Clock, DollarSign, TrendingUp, Zap, Moon, Bot, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BusinessValueSection = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Clock,
      title: "Save 40+ hours/month",
      description: "Automate repetitive tasks and focus on growing your business",
      color: "primary"
    },
    {
      icon: DollarSign,
      title: "Reduce staffing costs by 35%",
      description: "Let AI handle routine work while your team focuses on high-value activities",
      color: "accent"
    },
    {
      icon: TrendingUp,
      title: "Increase revenue by 30%",
      description: "24/7 customer service and lead capture means never missing opportunities",
      color: "primary"
    },
    {
      icon: Zap,
      title: "24/7 availability – never sleeps",
      description: "Your AI works around the clock, even during weekends and holidays",
      color: "accent"
    },
    {
      icon: Moon,
      title: "Operates during Ramadan & holidays",
      description: "Culturally aware AI that adapts to local business schedules and customs",
      color: "primary"
    },
    {
      icon: Bot,
      title: "Automates 1,000s of tasks instantly",
      description: "From data entry to customer support, AI handles it all with precision",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Business <span className="text-gradient-gold">Value</span> & Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the measurable impact AI can have on your business. 
            Our clients see results within the first 30 days of implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="card-elegant p-8 group hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center ${
                  benefit.color === 'primary' 
                    ? 'bg-primary/10 group-hover:bg-primary/20' 
                    : 'bg-accent/10 group-hover:bg-accent/20'
                } transition-colors duration-300`}>
                  <Icon className={`w-8 h-8 ${
                    benefit.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`} />
                </div>

                <h3 className={`text-xl font-bold mb-4 ${
                  benefit.color === 'primary' ? 'text-primary' : 'text-accent'
                }`}>
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ROI Calculator Teaser */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Calculate Your Business Savings
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get a personalized ROI report showing exactly how much time and money 
              AI can save your business. Takes less than 2 minutes.
            </p>
          </div>

          {/* Quick ROI Preview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-secondary/50 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">AED 45,000</div>
              <div className="text-sm text-muted-foreground">Monthly Savings</div>
            </div>
            <div className="text-center p-4 bg-secondary/50 rounded-lg">
              <div className="text-2xl font-bold text-accent mb-2">160 Hours</div>
              <div className="text-sm text-muted-foreground">Time Saved</div>
            </div>
            <div className="text-center p-4 bg-secondary/50 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">6 Months</div>
              <div className="text-sm text-muted-foreground">ROI Payback</div>
            </div>
            <div className="text-center p-4 bg-secondary/50 rounded-lg">
              <div className="text-2xl font-bold text-accent mb-2">347%</div>
              <div className="text-sm text-muted-foreground">Annual ROI</div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => navigate('/transform')}
            >
              Calculate Your Business Savings
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              * Based on average client results across 500+ businesses
            </p>
          </div>
        </div>

        {/* Cultural Advantage */}
        <div className="bg-secondary/30 border border-border rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Built for <span className="text-gradient-gold">Dubai Business Culture</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Our AI understands local business practices, holidays, cultural nuances, 
            and works seamlessly in both Arabic and English environments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Ramadan Scheduling
            </div>
            <div className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              Arabic Language
            </div>
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Local Holidays
            </div>
            <div className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              Cultural Sensitivity
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessValueSection;