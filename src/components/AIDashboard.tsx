import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Users,
  Activity,
  Target,
  Gauge
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Metric {
  id: string;
  label: string;
  labelAr: string;
  value: number;
  unit: string;
  trend: 'up' | 'down';
  trendValue: number;
  prediction: number;
  confidence: number;
  icon: React.ReactNode;
}

const AIDashboard: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  const [metrics] = useState<Metric[]>([
    {
      id: 'revenue',
      label: 'Revenue Prediction',
      labelAr: 'توقع الإيرادات',
      value: 245600,
      unit: 'AED',
      trend: 'up',
      trendValue: 12.5,
      prediction: 285000,
      confidence: 87,
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      id: 'satisfaction',
      label: 'Customer Satisfaction',
      labelAr: 'رضا العملاء',
      value: 84.3,
      unit: '%',
      trend: 'up',
      trendValue: 3.2,
      prediction: 89.5,
      confidence: 92,
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 'cost',
      label: 'Cost Savings',
      labelAr: 'توفير التكاليف',
      value: 45200,
      unit: 'AED',
      trend: 'up',
      trendValue: 18.7,
      prediction: 52000,
      confidence: 85,
      icon: <TrendingDown className="w-6 h-6" />
    },
    {
      id: 'efficiency',
      label: 'Operational Efficiency',
      labelAr: 'الكفاءة التشغيلية',
      value: 76.8,
      unit: '%',
      trend: 'up',
      trendValue: 5.4,
      prediction: 82.3,
      confidence: 90,
      icon: <Activity className="w-6 h-6" />
    }
  ]);

  const businessHealthScore = Math.round(
    metrics.reduce((acc, metric) => acc + metric.confidence, 0) / metrics.length
  );

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toFixed(1);
  };

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className={`text-2xl font-semibold text-primary mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          {language === 'ar' ? 'لوحة الذكاء الاصطناعي' : 'AI Business Dashboard'}
        </h2>
        <p className={`text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          {language === 'ar' 
            ? 'تحليل أداء عملك وتوقعاته المستقبلية'
            : 'Real-time business performance and future predictions'
          }
        </p>
      </div>

      {/* Business Health Score */}
      <div className="mb-8 p-6 bg-neutral-50 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className={`text-lg font-medium text-primary mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'نقاط صحة الأعمال' : 'Business Health Score'}
            </h3>
            <p className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'بناءً على مؤشرات الأداء الرئيسية' : 'Based on key performance indicators'}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Gauge className="w-8 h-8 text-primary" />
            <span className="text-3xl font-semibold text-primary">{businessHealthScore}</span>
            <span className="text-lg text-secondary">/100</span>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {metrics.map((metric) => (
          <div 
            key={metric.id} 
            className={`p-6 border border-neutral-200 rounded-xl cursor-pointer transition-all duration-200 ${
              selectedMetric === metric.id ? 'border-accent bg-accent/5' : 'hover:border-neutral-300'
            }`}
            onClick={() => setSelectedMetric(selectedMetric === metric.id ? null : metric.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <div className="text-primary">{metric.icon}</div>
              </div>
              <div className={`flex items-center space-x-1 ${metric.trend === 'up' ? 'text-success' : 'text-error'}`}>
                {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                <span className="text-sm font-medium">{metric.trendValue}%</span>
              </div>
            </div>

            <h3 className={`text-sm font-medium text-secondary mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? metric.labelAr : metric.label}
            </h3>

            <div className="space-y-2">
              <div>
                <span className="text-2xl font-semibold text-primary">
                  {formatNumber(metric.value)}
                </span>
                <span className="text-sm text-secondary ml-1">{metric.unit}</span>
              </div>

              {selectedMetric === metric.id && (
                <div className="pt-4 border-t border-neutral-200">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'التوقع' : 'Prediction'}
                      </span>
                      <span className="text-sm font-medium text-primary">
                        {formatNumber(metric.prediction)} {metric.unit}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'الثقة' : 'Confidence'}
                      </span>
                      <span className="text-sm font-medium text-primary">{metric.confidence}%</span>
                    </div>

                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${metric.confidence}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Insights */}
      <div className="bg-neutral-50 rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Target className="w-5 h-5 text-accent" />
          <h3 className={`font-medium text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'رؤى الذكاء الاصطناعي' : 'AI Insights'}
          </h3>
        </div>
        
        <div className="space-y-3">
          <p className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' 
              ? '• توقع زيادة الإيرادات بنسبة 16% خلال الربع القادم'
              : '• Revenue is predicted to increase by 16% in the next quarter'
            }
          </p>
          <p className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' 
              ? '• خدمة العملاء تُظهر تحسناً مستمراً مع زيادة الرضا بنسبة 3.2%'
              : '• Customer service shows consistent improvement with 3.2% satisfaction increase'
            }
          </p>
          <p className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' 
              ? '• التوفير في التكاليف يتجاوز التوقعات بنسبة 18.7%'
              : '• Cost savings exceed expectations by 18.7%'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIDashboard;