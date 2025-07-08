import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, Users, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SolutionCard {
  id: string;
  icon: React.ElementType;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  link: string;
  gradient: string;
}

const SolutionCards: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { ref, isInView } = useScrollReveal({ once: true, threshold: 0.2 });

  const solutions: SolutionCard[] = [
    {
      id: 'ai-agents',
      icon: Bot,
      title: 'AI Agents',
      titleAr: 'وكلاء الذكاء الاصطناعي',
      description: 'Custom-built for your needs',
      descriptionAr: 'مصممة خصيصاً لاحتياجاتك',
      link: '/ai-agents',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      id: 'human-coaches',
      icon: Users,
      title: 'Human Coaches',
      titleAr: 'المدربون البشريون',
      description: 'Expert guidance when you need it',
      descriptionAr: 'إرشاد خبير عندما تحتاجه',
      link: '/team',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

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
    <section className="relative py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
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
                <div className="relative bg-white rounded-3xl p-8 lg:p-12 h-full shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  {/* Icon Container */}
                  <div className="relative mb-8">
                    <motion.div
                      animate={{
                        scale: hoveredCard === solution.id ? 1.1 : 1,
                        rotate: hoveredCard === solution.id ? 5 : 0,
                      }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${solution.gradient} bg-opacity-10`}
                    >
                      <solution.icon className="w-8 h-8 text-gray-800" />
                    </motion.div>
                    
                    {/* Sparkle Effect on Hover */}
                    <motion.div
                      animate={{
                        opacity: hoveredCard === solution.id ? 1 : 0,
                        scale: hoveredCard === solution.id ? 1 : 0.8,
                      }}
                      className="absolute -top-2 -right-2"
                    >
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 ${
                    isRTL ? 'font-arabic' : ''
                  }`}>
                    {language === 'ar' ? solution.titleAr : solution.title}
                  </h3>
                  
                  <p className={`text-lg lg:text-xl text-gray-600 mb-8 ${
                    isRTL ? 'font-arabic' : ''
                  }`}>
                    {language === 'ar' ? solution.descriptionAr : solution.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-gray-900 font-medium">
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