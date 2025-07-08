import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TrustStrip: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const { ref, isInView } = useScrollReveal({ once: true });

  const trustItems = [
    {
      icon: Shield,
      text: language === 'ar' ? 'معتمد من ميثاق الإمارات' : 'UAE Charter Certified',
    },
    {
      icon: Users,
      text: language === 'ar' ? '500+ شركة في دبي' : '500+ Dubai Companies',
    },
    {
      icon: MessageCircle,
      text: language === 'ar' ? 'دعم 24/7 بالعربية' : '24/7 Arabic Support',
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative bg-gray-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="flex items-center gap-2 text-gray-600"
            >
              <item.icon className="w-4 h-4 text-gray-400" />
              <span className={`text-sm font-light ${isRTL ? 'font-arabic' : ''}`}>
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TrustStrip;