import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      position: "CEO",
      company: "Dubai Financial Group",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Hikma Digital transformed our operations with their AI solutions. We've seen a 40% increase in efficiency and significant cost savings. Their team's expertise in AI implementation is unmatched in the region."
    },
    {
      id: 2,
      name: "Sarah Mohamed",
      position: "Operations Director",
      company: "Emirates Logistics",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "The customer service automation they implemented has revolutionized how we handle client inquiries. Response times decreased by 80% while customer satisfaction increased dramatically."
    },
    {
      id: 3,
      name: "Omar Hassan",
      position: "CTO",
      company: "Abu Dhabi Tech Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Working with Hikma Digital was a game-changer. Their AI strategy consulting helped us identify opportunities we never considered. The ROI has exceeded all expectations."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our clients say about their AI transformation journey with Hikma Digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-8 h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 bg-card/50 backdrop-blur-sm border rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;