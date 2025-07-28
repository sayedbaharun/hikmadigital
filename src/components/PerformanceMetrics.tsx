import { useEffect, useState } from "react";
import { Activity, Users, Clock, TrendingUp, Star, Target } from "lucide-react";

const PerformanceMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('metrics-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter = ({ value, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime = null;
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, value, duration]);

    return (
      <span className="tabular-nums">
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section id="metrics-section" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Live</span> Performance Metrics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time data from our deployed AI systems across Dubai
          </p>
        </div>

        {/* Static Achievement Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card-elegant p-8 text-center group hover:border-primary/50 transition-all duration-500">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-3 text-primary">
              <AnimatedCounter value={347} suffix="%" />
            </div>
            <div className="text-muted-foreground font-medium">Average ROI</div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs text-muted-foreground">Verified</span>
            </div>
          </div>
          
          <div className="card-elegant p-8 text-center group hover:border-primary/50 transition-all duration-500">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-3 text-accent">
              <AnimatedCounter value={500} suffix="+" />
            </div>
            <div className="text-muted-foreground font-medium">Businesses Served</div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs text-muted-foreground">Verified</span>
            </div>
          </div>
          
          <div className="card-elegant p-8 text-center group hover:border-primary/50 transition-all duration-500">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-3 text-primary">
              <AnimatedCounter value={94.5} suffix="%" />
            </div>
            <div className="text-muted-foreground font-medium">Satisfaction Rate</div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs text-muted-foreground">Verified</span>
            </div>
          </div>
        </div>

        {/* Performance Summary */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">
            Powering Dubai's Digital Transformation
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
            Our AI systems process over 45,000 business tasks daily, 
            saving companies thousands of hours and millions of dirhams every month.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
            <Activity className="w-5 h-5" />
            <span className="font-semibold">99.9% Uptime Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;