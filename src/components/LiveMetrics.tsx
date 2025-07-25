import { useState, useEffect } from 'react';

interface MetricProps {
  label: string;
  value: number;
  suffix: string;
  increment: number;
  delay?: number;
  color?: string;
}

const LiveMetric = ({ label, value, suffix, increment, delay = 0, color = "text-primary" }: MetricProps) => {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentValue(prev => prev + increment);
      }, 2000);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [increment, delay]);

  return (
    <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:scale-105 transition-transform duration-300">
      <div className={`text-3xl md:text-4xl font-bold ${color} mb-2 font-mono`}>
        {currentValue.toLocaleString()}{suffix}
        <span className="inline-block w-2 h-6 bg-primary animate-pulse ml-1"></span>
      </div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
      <div className="text-xs text-green-500 mt-1">Live</div>
    </div>
  );
};

const LiveMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <LiveMetric 
        label="AI Agents Active"
        value={1247}
        suffix=""
        increment={3}
        color="text-primary"
      />
      <LiveMetric 
        label="Tasks Automated Today"
        value={47832}
        suffix=""
        increment={12}
        delay={500}
        color="text-accent"
      />
      <LiveMetric 
        label="Hours Saved Daily"
        value={2387}
        suffix="h"
        increment={5}
        delay={1000}
        color="text-primary"
      />
      <LiveMetric 
        label="Messages Processed"
        value={15642}
        suffix=""
        increment={8}
        delay={1500}
        color="text-accent"
      />
    </div>
  );
};

export default LiveMetrics;