import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  labelAr: string;
}

const MetricsSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const { ref, isInView } = useScrollReveal({ once: true, threshold: 0.3 });

  const metrics: Metric[] = [
    {
      id: 'manual-work',
      value: 80,
      suffix: '%',
      label: 'Less Manual Work',
      labelAr: 'أقل عمل يدوي',
    },
    {
      id: 'roi',
      value: 250,
      suffix: '%',
      label: 'Average ROI',
      labelAr: 'متوسط العائد على الاستثمار',
    },
    {
      id: 'rating',
      value: 4.8,
      suffix: '/5',
      label: 'Customer Rating',
      labelAr: 'تقييم العملاء',
    },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-12 lg:gap-16"
        >
          {metrics.map((metric, index) => (
            <MetricItem
              key={metric.id}
              metric={metric}
              isInView={isInView}
              delay={index * 0.2}
              language={language}
              isRTL={isRTL}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface MetricItemProps {
  metric: Metric;
  isInView: boolean;
  delay: number;
  language: string;
  isRTL: boolean;
}

const MetricItem: React.FC<MetricItemProps> = ({ metric, isInView, delay, language, isRTL }) => {
  const { formattedCount, startAnimation } = useCountUp({
    end: metric.value,
    duration: 2500,
    decimals: metric.id === 'rating' ? 1 : 0,
    suffix: metric.suffix,
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        startAnimation();
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay, startAnimation]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-center"
    >
      <div className="relative inline-block">
        {/* Number */}
        <h3 className="text-6xl lg:text-7xl font-light text-gray-900 mb-4">
          {formattedCount}
        </h3>
        
        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: delay + 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 origin-left"
        />
      </div>
      
      {/* Label */}
      <p className={`text-lg text-gray-600 mt-6 ${isRTL ? 'font-arabic' : ''}`}>
        {language === 'ar' ? metric.labelAr : metric.label}
      </p>
    </motion.div>
  );
};

export default MetricsSection;