import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, TrendingDown, Users, DollarSign, Zap, Activity, Brain, AlertCircle } from 'lucide-react';

interface Metric {
  value: number;
  trend: number;
  confidence: number;
}

interface BusinessMetrics {
  revenue: Metric;
  satisfaction: Metric;
  costSavings: Metric;
  healthScore: number;
}

const AIDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<BusinessMetrics>({
    revenue: { value: 2450000, trend: 12.5, confidence: 87 },
    satisfaction: { value: 85, trend: 3.2, confidence: 92 },
    costSavings: { value: 325000, trend: 8.7, confidence: 78 },
    healthScore: 82
  });

  const [scenarios, setScenarios] = useState({
    marketingSpend: 50,
    staffing: 75,
    pricing: 100,
    customerService: 60
  });

  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [revenueHistory, setRevenueHistory] = useState<number[]>([
    2100000, 2150000, 2200000, 2180000, 2250000, 2300000, 2350000, 2400000, 2450000
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        revenue: {
          ...prev.revenue,
          value: prev.revenue.value + (Math.random() - 0.5) * 10000,
          trend: prev.revenue.trend + (Math.random() - 0.5) * 0.5,
          confidence: Math.min(100, Math.max(70, prev.revenue.confidence + (Math.random() - 0.5) * 2))
        },
        satisfaction: {
          ...prev.satisfaction,
          value: Math.min(100, Math.max(0, prev.satisfaction.value + (Math.random() - 0.5) * 0.5)),
          trend: prev.satisfaction.trend + (Math.random() - 0.5) * 0.2,
          confidence: Math.min(100, Math.max(70, prev.satisfaction.confidence + (Math.random() - 0.5) * 2))
        },
        costSavings: {
          ...prev.costSavings,
          value: prev.costSavings.value + (Math.random() - 0.5) * 5000,
          trend: prev.costSavings.trend + (Math.random() - 0.5) * 0.3,
          confidence: Math.min(100, Math.max(70, prev.costSavings.confidence + (Math.random() - 0.5) * 2))
        },
        healthScore: Math.min(100, Math.max(0, prev.healthScore + (Math.random() - 0.5) * 2))
      }));

      setRevenueHistory(prev => [...prev.slice(1), prev[prev.length - 1] + (Math.random() - 0.5) * 50000]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Calculate predictions based on scenarios
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      const marketingImpact = (scenarios.marketingSpend - 50) * 0.002;
      const staffingImpact = (scenarios.staffing - 75) * 0.0015;
      const pricingImpact = (scenarios.pricing - 100) * -0.001;
      const serviceImpact = (scenarios.customerService - 60) * 0.0025;

      setMetrics(prev => ({
        revenue: {
          ...prev.revenue,
          value: 2450000 * (1 + marketingImpact + staffingImpact + pricingImpact),
          confidence: Math.max(60, 87 - Math.abs(marketingImpact + staffingImpact + pricingImpact) * 50)
        },
        satisfaction: {
          ...prev.satisfaction,
          value: 85 + serviceImpact * 100 + staffingImpact * 50,
          confidence: Math.max(60, 92 - Math.abs(serviceImpact + staffingImpact) * 30)
        },
        costSavings: {
          ...prev.costSavings,
          value: 325000 * (1 - marketingImpact * 0.5 - staffingImpact * 0.3),
          confidence: Math.max(60, 78 - Math.abs(marketingImpact + staffingImpact) * 40)
        },
        healthScore: 82 + (marketingImpact + staffingImpact + serviceImpact) * 50
      }));
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [scenarios]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const getHealthColor = (score: number) => {
    if (score >= 80) return '#10b981';
    if (score >= 60) return '#f59e0b';
    return '#ef4444';
  };

  const LineChart: React.FC<{ data: number[] }> = ({ data }) => {
    const width = 400;
    const height = 200;
    const padding = 40;
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    const range = maxValue - minValue;

    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * (width - 2 * padding) + padding;
      const y = height - padding - ((value - minValue) / range) * (height - 2 * padding);
      return `${x},${y}`;
    }).join(' ');

    const gradientId = 'revenueGradient';

    return (
      <svg width={width} height={height} className="w-full h-full">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map(i => (
          <line
            key={i}
            x1={padding}
            y1={padding + i * (height - 2 * padding) / 4}
            x2={width - padding}
            y2={padding + i * (height - 2 * padding) / 4}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
        ))}

        {/* Area under the line */}
        <polygon
          points={`${padding},${height - padding} ${points} ${width - padding},${height - padding}`}
          fill={`url(#${gradientId})`}
        />

        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          className="transition-all duration-500"
        />

        {/* Data points */}
        {data.map((value, index) => {
          const x = (index / (data.length - 1)) * (width - 2 * padding) + padding;
          const y = height - padding - ((value - minValue) / range) * (height - 2 * padding);
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="4"
              fill="#3b82f6"
              className="hover:r-6 transition-all duration-200"
              style={{ cursor: 'pointer' }}
            />
          );
        })}
      </svg>
    );
  };

  const CircularProgress: React.FC<{ value: number; size: number }> = ({ value, size }) => {
    const radius = (size - 10) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#10b981"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  const BarChart: React.FC<{ value: number; maxValue: number }> = ({ value, maxValue }) => {
    const percentage = (value / maxValue) * 100;

    return (
      <div className="relative h-40 w-full">
        <div className="absolute bottom-0 left-0 right-0 h-full bg-white/5 rounded-lg" />
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-600 to-purple-400 rounded-lg transition-all duration-1000 ease-out"
          style={{ height: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </div>
      </div>
    );
  };

  const ConfidenceMeter: React.FC<{ confidence: number }> = ({ confidence }) => {
    return (
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-500"
          style={{ width: `${confidence}%` }}
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-between px-1">
          <span className="text-[8px] text-white/50">0%</span>
          <span className="text-[8px] text-white/50">100%</span>
        </div>
      </div>
    );
  };

  const ScenarioSlider: React.FC<{
    label: string;
    value: number;
    onChange: (value: number) => void;
    icon: React.ReactNode;
  }> = ({ label, value, onChange, icon }) => {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <span className="text-sm text-white/70">{label}</span>
          </div>
          <span className="text-sm font-mono text-white/90">{value}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${value}%, rgba(255, 255, 255, 0.1) ${value}%, rgba(255, 255, 255, 0.1) 100%)`
          }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <Brain className="w-10 h-10 text-purple-400" />
            AI Business Dashboard
          </h1>
          <p className="text-white/60">Real-time insights powered by artificial intelligence</p>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Revenue Prediction */}
          <div
            className={`backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 cursor-pointer transform transition-all duration-300 hover:scale-105 ${
              selectedMetric === 'revenue' ? 'ring-2 ring-blue-400' : ''
            }`}
            onClick={() => setSelectedMetric(selectedMetric === 'revenue' ? null : 'revenue')}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Revenue Prediction</h3>
              </div>
              {metrics.revenue.trend > 0 ? (
                <TrendingUp className="w-6 h-6 text-green-400" />
              ) : (
                <TrendingDown className="w-6 h-6 text-red-400" />
              )}
            </div>
            
            <div className="mb-4">
              <p className="text-3xl font-bold text-white">{formatCurrency(metrics.revenue.value)}</p>
              <p className={`text-sm ${metrics.revenue.trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {metrics.revenue.trend > 0 ? '+' : ''}{metrics.revenue.trend.toFixed(1)}% from last month
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">AI Confidence</span>
                <span className="text-white font-mono">{metrics.revenue.confidence}%</span>
              </div>
              <ConfidenceMeter confidence={metrics.revenue.confidence} />
            </div>

            {selectedMetric === 'revenue' && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-sm font-semibold text-white/80 mb-4">Revenue Trend</h4>
                <LineChart data={revenueHistory} />
              </div>
            )}
          </div>

          {/* Customer Satisfaction */}
          <div
            className={`backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 cursor-pointer transform transition-all duration-300 hover:scale-105 ${
              selectedMetric === 'satisfaction' ? 'ring-2 ring-green-400' : ''
            }`}
            onClick={() => setSelectedMetric(selectedMetric === 'satisfaction' ? null : 'satisfaction')}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Customer Satisfaction</h3>
              </div>
              {metrics.satisfaction.trend > 0 ? (
                <TrendingUp className="w-6 h-6 text-green-400" />
              ) : (
                <TrendingDown className="w-6 h-6 text-red-400" />
              )}
            </div>

            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <CircularProgress value={metrics.satisfaction.value} size={120} />
                <div className="absolute inset-0 flex items-center justify-center transform rotate-90">
                  <span className="text-3xl font-bold text-white">{Math.round(metrics.satisfaction.value)}%</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">AI Confidence</span>
                <span className="text-white font-mono">{metrics.satisfaction.confidence}%</span>
              </div>
              <ConfidenceMeter confidence={metrics.satisfaction.confidence} />
            </div>

            {selectedMetric === 'satisfaction' && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Very Satisfied</span>
                    <span className="text-white">{Math.round(metrics.satisfaction.value * 0.6)}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Satisfied</span>
                    <span className="text-white">{Math.round(metrics.satisfaction.value * 0.3)}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Neutral</span>
                    <span className="text-white">{Math.round(metrics.satisfaction.value * 0.1)}%</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Cost Savings */}
          <div
            className={`backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 cursor-pointer transform transition-all duration-300 hover:scale-105 ${
              selectedMetric === 'savings' ? 'ring-2 ring-purple-400' : ''
            }`}
            onClick={() => setSelectedMetric(selectedMetric === 'savings' ? null : 'savings')}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Zap className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Cost Savings</h3>
              </div>
              {metrics.costSavings.trend > 0 ? (
                <TrendingUp className="w-6 h-6 text-green-400" />
              ) : (
                <TrendingDown className="w-6 h-6 text-red-400" />
              )}
            </div>

            <div className="mb-4">
              <BarChart value={metrics.costSavings.value} maxValue={500000} />
              <p className="text-2xl font-bold text-white mt-4">{formatCurrency(metrics.costSavings.value)}</p>
              <p className={`text-sm ${metrics.costSavings.trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {metrics.costSavings.trend > 0 ? '+' : ''}{metrics.costSavings.trend.toFixed(1)}% efficiency gain
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">AI Confidence</span>
                <span className="text-white font-mono">{metrics.costSavings.confidence}%</span>
              </div>
              <ConfidenceMeter confidence={metrics.costSavings.confidence} />
            </div>

            {selectedMetric === 'savings' && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Automation</span>
                    <span className="text-white">{formatCurrency(metrics.costSavings.value * 0.4)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Process Optimization</span>
                    <span className="text-white">{formatCurrency(metrics.costSavings.value * 0.35)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Resource Efficiency</span>
                    <span className="text-white">{formatCurrency(metrics.costSavings.value * 0.25)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Business Health Score */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Activity className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-semibold text-white">Business Health Score</h3>
            </div>
            <div className="flex items-center gap-2">
              {isLoading && (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/20 border-t-white" />
              )}
              <span
                className="text-4xl font-bold"
                style={{ color: getHealthColor(metrics.healthScore) }}
              >
                {Math.round(metrics.healthScore)}
              </span>
              <span className="text-white/60 text-xl">/100</span>
            </div>
          </div>

          <div className="relative h-8 bg-white/10 rounded-full overflow-hidden mb-6">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-1000 ease-out rounded-full"
              style={{
                width: `${metrics.healthScore}%`,
                backgroundColor: getHealthColor(metrics.healthScore)
              }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-white/60 text-sm">Financial Health</p>
              <p className="text-white text-lg font-semibold">Excellent</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Customer Relations</p>
              <p className="text-white text-lg font-semibold">Strong</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Operational Efficiency</p>
              <p className="text-white text-lg font-semibold">Optimal</p>
            </div>
          </div>
        </div>

        {/* What-if Scenario Simulator */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-8 h-8 text-purple-400" />
            <h3 className="text-2xl font-semibold text-white">What-if Scenario Simulator</h3>
            <AlertCircle className="w-5 h-5 text-yellow-400 ml-auto" />
            <span className="text-sm text-yellow-400">AI Predictions</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <ScenarioSlider
                label="Marketing Spend"
                value={scenarios.marketingSpend}
                onChange={(value) => setScenarios({ ...scenarios, marketingSpend: value })}
                icon={<TrendingUp className="w-4 h-4 text-blue-400" />}
              />
              <ScenarioSlider
                label="Staffing Levels"
                value={scenarios.staffing}
                onChange={(value) => setScenarios({ ...scenarios, staffing: value })}
                icon={<Users className="w-4 h-4 text-green-400" />}
              />
              <ScenarioSlider
                label="Pricing Strategy"
                value={scenarios.pricing}
                onChange={(value) => setScenarios({ ...scenarios, pricing: value })}
                icon={<DollarSign className="w-4 h-4 text-yellow-400" />}
              />
              <ScenarioSlider
                label="Customer Service Investment"
                value={scenarios.customerService}
                onChange={(value) => setScenarios({ ...scenarios, customerService: value })}
                icon={<Activity className="w-4 h-4 text-purple-400" />}
              />
            </div>

            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Predicted Outcomes</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Revenue Impact</span>
                  <span className={`text-lg font-mono ${
                    metrics.revenue.value > 2450000 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metrics.revenue.value > 2450000 ? '+' : ''}
                    {formatCurrency(metrics.revenue.value - 2450000)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Customer Satisfaction</span>
                  <span className={`text-lg font-mono ${
                    metrics.satisfaction.value > 85 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metrics.satisfaction.value > 85 ? '+' : ''}
                    {(metrics.satisfaction.value - 85).toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Cost Efficiency</span>
                  <span className={`text-lg font-mono ${
                    metrics.costSavings.value > 325000 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metrics.costSavings.value > 325000 ? '+' : ''}
                    {formatCurrency(metrics.costSavings.value - 325000)}
                  </span>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Overall Impact</span>
                    <span
                      className="text-2xl font-bold"
                      style={{ color: getHealthColor(metrics.healthScore) }}
                    >
                      {metrics.healthScore > 82 ? '+' : ''}
                      {(metrics.healthScore - 82).toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #3b82f6;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          transition: all 0.2s;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #3b82f6;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          transition: all 0.2s;
          border: none;
        }

        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
        }
      `}</style>
    </div>
  );
};

export default AIDashboard;