import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../hooks/useContent';
import { TrustContent } from '../content/types';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TrustStrip: React.FC = () => {
  const { isRTL } = useLanguage();
  const content = useContent<TrustContent>('homepage.trust');
  const { ref, isInView } = useScrollReveal({ once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative bg-background border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {content.items.map((item, index) => {
            const IconComponent = Icons[item.icon as keyof typeof Icons] || Icons.Circle;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="flex items-center gap-2 text-text-secondary"
              >
                <IconComponent className="w-4 h-4 text-gold" />
                <span className={`text-sm font-light ${isRTL ? 'font-arabic' : ''}`}>
                  {item.text}
                  {item.value && <span className="font-medium text-primary ml-1">{item.value}</span>}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default TrustStrip;