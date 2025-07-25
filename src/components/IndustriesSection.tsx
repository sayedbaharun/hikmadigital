import { Building2, Heart, ShoppingCart, UtensilsCrossed, Truck, Scissors } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Building2,
      title: "Real Estate",
      description: "Automated follow-ups, CRM, WhatsApp integration",
      benefits: ["24/7 lead response", "Arabic & English support", "Property recommendations"],
      color: "primary"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Appointment reminders, intake automation",
      benefits: ["Patient scheduling", "Medical form processing", "Multilingual support"],
      color: "accent"
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Inventory sync, POS integration",
      benefits: ["Stock management", "Customer support", "Sales analytics"],
      color: "primary"
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurants",
      description: "Order routing, reservation bots",
      benefits: ["Table booking", "Order management", "Customer feedback"],
      color: "accent"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Route optimization, client updates",
      benefits: ["Delivery tracking", "Route planning", "Customer notifications"],
      color: "primary"
    },
    {
      icon: Scissors,
      title: "Services",
      description: "Booking, reminders, satisfaction tracking",
      benefits: ["Appointment booking", "Service reminders", "Quality feedback"],
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industries We <span className="text-gradient-gold">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From real estate to healthcare, our AI solutions are tailored for Dubai's 
            most important business sectors with Arabic and English language support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="card-elegant p-8 group hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    industry.color === 'primary' 
                      ? 'bg-primary/10 group-hover:bg-primary/20' 
                      : 'bg-accent/10 group-hover:bg-accent/20'
                  } transition-colors duration-300`}>
                    <Icon className={`w-7 h-7 ${
                      industry.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold">{industry.title}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {industry.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          industry.color === 'primary' ? 'bg-primary' : 'bg-accent'
                        }`}></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg ${
                  industry.color === 'primary' ? 'bg-primary' : 'bg-accent'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-secondary/50 border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-muted-foreground mb-6">
              We create custom AI solutions for any business sector. 
              Let's discuss how AI can transform your specific industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gold px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105">
                Request Custom Solution
              </button>
              <button className="btn-elegant px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;