import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useContent } from '../hooks/useContent';
import { HomepageContent } from '../content/types';
import OptimizedImage from './ui/OptimizedImage';

const SolutionCards: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { ref, isInView } = useScrollReveal({ once: true, threshold: 0.2 });
  const content = useContent<HomepageContent>('homepage');

  // Map icons to content cards
  const iconMap: Record<string, React.ElementType> = {
    'Bot': Bot,
    'Users': Users
  };

  const solutions = (content?.solutions?.cards || []).map(card => ({
    ...card,
    icon: iconMap[card.icon] || Bot
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative py-32 bg-neutral-50 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/patterns/geometric-pattern.svg)',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          opacity: 0.03
        }}
      />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(solution.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <Link to={solution.link} className="block">
                <div className="relative bg-white rounded-3xl p-8 lg:p-12 h-full shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  
                  {/* Illustration */}
                  {solution.illustration && (
                    <div className="mb-8">
                      <div className="w-48 h-48 mx-auto">
                        <OptimizedImage
                          {...solution.illustration}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <h3 className={`text-xl lg:text-2xl font-semibold text-primary-950 mb-4 ${
                    isRTL ? 'font-arabic' : ''
                  }`}>
                    {solution.title[language]}
                  </h3>
                  
                  <p className={`text-lg lg:text-xl text-text-secondary mb-8 ${
                    isRTL ? 'font-arabic' : ''
                  }`}>
                    {solution.description[language]}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-primary-950 font-medium">
                    <span className={isRTL ? 'font-arabic' : ''}>
                      {language === 'ar' ? 'اكتشف المزيد' : 'Learn'}
                    </span>
                    <motion.div
                      animate={{
                        x: hoveredCard === solution.id ? 5 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionCards;