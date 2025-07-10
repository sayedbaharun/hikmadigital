import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../hooks/useContent';
import OptimizedImage from './ui/OptimizedImage';

interface SuccessStory {
  id: string;
  title: { en: string; ar: string };
  company: { en: string; ar: string };
  industry: { en: string; ar: string };
  roi: string;
  image: {
    src: string;
    alt: { en: string; ar: string };
  };
  link: string;
}

const SuccessStoriesGrid: React.FC = () => {
  const { language, isRTL } = useLanguage();
  
  // Mock content - would come from content system in production
  const stories: SuccessStory[] = [
    {
      id: 'restaurant',
      title: {
        en: 'Restaurant Chain Transformation',
        ar: 'تحول سلسلة المطاعم'
      },
      company: {
        en: "Ahmed's Restaurant",
        ar: 'مطعم أحمد'
      },
      industry: {
        en: 'Food & Beverage',
        ar: 'المأكولات والمشروبات'
      },
      roi: '347%',
      image: {
        src: '/images/success-stories/restaurant.jpg',
        alt: {
          en: 'Restaurant interior showing modern POS systems',
          ar: 'داخل المطعم يظهر أنظمة نقاط البيع الحديثة'
        }
      },
      link: '/case-studies/restaurant'
    },
    {
      id: 'retail',
      title: {
        en: 'Fashion Retail Revolution',
        ar: 'ثورة تجارة الأزياء'
      },
      company: {
        en: "Fatima's Boutique",
        ar: 'بوتيك فاطمة'
      },
      industry: {
        en: 'Retail Fashion',
        ar: 'أزياء التجزئة'
      },
      roi: '512%',
      image: {
        src: '/images/success-stories/boutique.jpg',
        alt: {
          en: 'Modern fashion boutique with AI-powered displays',
          ar: 'بوتيك أزياء حديث مع شاشات تعمل بالذكاء الاصطناعي'
        }
      },
      link: '/case-studies/retail'
    },
    {
      id: 'logistics',
      title: {
        en: 'Logistics Efficiency Boost',
        ar: 'تعزيز كفاءة اللوجستيات'
      },
      company: {
        en: "Khalid's Logistics",
        ar: 'خدمات خالد اللوجستية'
      },
      industry: {
        en: 'Transportation',
        ar: 'النقل'
      },
      roi: '289%',
      image: {
        src: '/images/success-stories/logistics.jpg',
        alt: {
          en: 'Fleet of delivery trucks with tracking systems',
          ar: 'أسطول من شاحنات التوصيل مع أنظمة التتبع'
        }
      },
      link: '/case-studies/logistics'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid md:grid-cols-3 gap-8"
    >
      {stories.map((story) => (
        <motion.div
          key={story.id}
          variants={itemVariants}
          className="group"
        >
          <Link to={story.link} className="block">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                {/* Placeholder - in production, use OptimizedImage */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-gold-light/20" />
                
                {/* ROI Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald" />
                    <span className="font-semibold text-emerald">{story.roi} ROI</span>
                  </div>
                </div>
                
                {/* Industry Tag */}
                <div className="absolute bottom-4 left-4 bg-primary-950/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-white text-sm">{story.industry[language]}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-semibold text-primary-950 mb-2 group-hover:text-primary-700 transition-colors ${
                  isRTL ? 'font-arabic' : ''
                }`}>
                  {story.title[language]}
                </h3>
                
                <p className={`text-text-secondary mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                  {story.company[language]}
                </p>
                
                {/* CTA */}
                <div className="flex items-center gap-2 text-primary-600 font-medium">
                  <span className={isRTL ? 'font-arabic' : ''}>
                    {language === 'ar' ? 'اقرأ القصة' : 'Read Story'}
                  </span>
                  <motion.div
                    animate={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </motion.div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SuccessStoriesGrid;