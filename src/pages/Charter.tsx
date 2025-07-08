import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import CharterBadge from '../components/CharterBadge';
import { Shield, CheckCircle, Eye, Users, Lock, Scale, Brain, Globe, Heart, Zap } from 'lucide-react';

interface CharterProps {
  openContactForm?: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const Charter: React.FC<CharterProps> = ({ openContactForm }) => {
  const { language, isRTL } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Partner logos for the carousel
  const partnerLogos = [
    { id: 1, src: '/src/assets/AI Program Logo Gold.svg', alt: 'AI Office Logo' },
    { id: 2, src: '/src/assets/THE EMIRATES.png', alt: 'The Emirates' },
    { id: 3, src: '/src/assets/givtdxb.png', alt: 'Government of Dubai' },
    { id: 4, src: '/src/assets/dtec .png', alt: 'DTEC' },
    { id: 5, src: 'https://www.dubaichamber.com/wp-content/uploads/2022/05/dubai-chamber-logo.svg', alt: 'Dubai Chamber' }
  ];

  // Charter principles
  const charterPrinciples = [
    {
      id: 1,
      title: language === 'ar' ? 'تعزيز الروابط بين الإنسان والآلة' : 'Strengthening Human-Machine Ties',
      description: language === 'ar' 
        ? 'إعطاء الأولوية لرفاهية الإنسان وتقدمه في جميع تطورات الذكاء الاصطناعي.'
        : 'Prioritize human well-being and progress in all AI developments.',
      icon: Users
    },
    {
      id: 2,
      title: language === 'ar' ? 'السلامة' : 'Safety',
      description: language === 'ar'
        ? 'ضمان تلبية أنظمة الذكاء الاصطناعي لأعلى معايير السلامة، وتعديل أو إزالة تلك التي تشكل مخاطر.'
        : 'Ensure AI systems meet the highest safety standards, and modify or remove those that pose risks.',
      icon: Shield
    },
    {
      id: 3,
      title: language === 'ar' ? 'التحيز الخوارزمي' : 'Algorithmic Bias',
      description: language === 'ar'
        ? 'مكافحة التحيز في الذكاء الاصطناعي لتعزيز العدالة والشمولية وعدم التمييز.'
        : 'Combat bias in AI to foster fairness, inclusivity, and non-discrimination.',
      icon: Scale
    },
    {
      id: 4,
      title: language === 'ar' ? 'خصوصية البيانات' : 'Data Privacy',
      description: language === 'ar'
        ? 'الحفاظ على حماية قوية للخصوصية مع دعم الابتكار القائم على البيانات.'
        : 'Uphold strong privacy protections while supporting data-driven innovation.',
      icon: Lock
    },
    {
      id: 5,
      title: language === 'ar' ? 'الشفافية' : 'Transparency',
      description: language === 'ar'
        ? 'جعل أنظمة الذكاء الاصطناعي مفهومة وعمليات صنع القرار واضحة لبناء الثقة والمساءلة.'
        : 'Make AI systems understandable and decision-making processes clear to build trust and accountability.',
      icon: Eye
    },
    {
      id: 6,
      title: language === 'ar' ? 'الإشراف البشري' : 'Human Oversight',
      description: language === 'ar'
        ? 'تعزيز ضرورة الحكم البشري والتصحيح الأخلاقي لأخطاء الذكاء الاصطناعي أو تحيزاته.'
        : 'Reinforce the necessity of human judgment and ethical correction of AI errors or biases.',
      icon: Users
    },
    {
      id: 7,
      title: language === 'ar' ? 'الحوكمة والمساءلة' : 'Governance and Accountability',
      description: language === 'ar'
        ? 'إنشاء إشراف أخلاقي وشفاف واستباقي لتطوير واستخدام الذكاء الاصطناعي.'
        : 'Establish ethical, transparent, and proactive oversight of AI development and usage.',
      icon: Scale
    },
    {
      id: 8,
      title: language === 'ar' ? 'التميز التكنولوجي' : 'Technological Excellence',
      description: language === 'ar'
        ? 'تعزيز الابتكار والريادة العالمية من خلال تبني التميز العلمي والرقمي في الذكاء الاصطناعي.'
        : 'Promote innovation and global leadership by embracing scientific and digital excellence in AI.',
      icon: Brain
    },
    {
      id: 9,
      title: language === 'ar' ? 'الالتزام البشري' : 'Human Commitment',
      description: language === 'ar'
        ? 'دمج القيم البشرية في صميم الذكاء الاصطناعي لحماية الحقوق وتعزيز المنفعة المجتمعية.'
        : 'Embed human values at the core of AI to protect rights and promote societal benefit.',
      icon: Heart
    },
    {
      id: 10,
      title: language === 'ar' ? 'التعايش السلمي مع الذكاء الاصطناعي' : 'Peaceful Coexistence with AI',
      description: language === 'ar'
        ? 'ضمان تعزيز الذكاء الاصطناعي لرفاهية المجتمع دون تقويض الأمن البشري أو الحقوق.'
        : 'Ensure AI enhances community well-being without undermining human security or rights.',
      icon: Heart
    },
    {
      id: 11,
      title: language === 'ar' ? 'تعزيز الوعي بالذكاء الاصطناعي لمستقبل شامل' : 'Promoting AI Awareness for an Inclusive Future',
      description: language === 'ar'
        ? 'ضمان وصول واسع ومنصف لفوائد الذكاء الاصطناعي عبر جميع شرائح المجتمع.'
        : 'Guarantee broad, equitable access to AI\'s benefits across all segments of society.',
      icon: Globe
    },
    {
      id: 12,
      title: language === 'ar' ? 'الالتزام بالمعاهدات والقوانين المعمول بها' : 'Commitment to Treaties and Applicable Laws',
      description: language === 'ar'
        ? 'الالتزام بالمعاهدات الدولية والقوانين المحلية عند تطوير أو نشر تقنيات الذكاء الاصطناعي.'
        : 'Abide by international treaties and local laws when developing or deploying AI technologies.',
      icon: Scale
    }
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % partnerLogos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [partnerLogos.length]);

  // Scroll carousel to active index
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = activeIndex * (carouselRef.current.scrollWidth / partnerLogos.length);
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeIndex, partnerLogos.length]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % partnerLogos.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? partnerLogos.length - 1 : prevIndex - 1));
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={`text-4xl lg:text-6xl font-extralight tracking-tight mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              <span className="gradient-text font-bold">
                {language === 'ar' ? 'معتمد من ميثاق الإمارات' : 'UAE Charter Certified'}
              </span>
              <br />
              <span className="text-white font-light">
                {language === 'ar' ? 'أول منصة ذكاء اصطناعي تلبي جميع مبادئ ميثاق الإمارات الـ12' : 'First AI platform to meet all 12 UAE Charter principles'}
              </span>
            </h1>
            <p className={`text-xl font-light text-gray-300 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'حكمة ديجيتال هي أول منصة ذكاء اصطناعي في الشرق الأوسط وشمال أفريقيا تلبي جميع مبادئ ميثاق الإمارات الـ12، مما يضمن الامتثال الكامل لجميع المعايير الأخلاقية والتقنية.'
                : 'Hikma Digital is the first AI platform in MENA to MEET ALL 12 charter principles of the UAE, ensuring full compliance with all ethical and technical standards.'
              }
            </p>
          </motion.div>
        </div>

        {/* Logo Carousel */}
        <div className="mb-16">
          <h2 className={`text-2xl font-light text-center mb-8 text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'شركاؤنا الحكوميون والتنظيميون' : 'Our Government & Regulatory Partners'}
          </h2>
          
          <div className="relative overflow-hidden py-10">
            <div className="flex items-center justify-between mb-4">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div 
              ref={carouselRef}
              className="flex overflow-x-hidden space-x-8 px-4"
            >
              {partnerLogos.map((logo, index) => (
                <div 
                  key={logo.id} 
                  className={`flex-shrink-0 h-20 bg-white/5 rounded-lg p-4 flex items-center justify-center transition-opacity duration-300 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-50'
                  }`}
                  style={{ width: '200px' }}
                >
                  <img src={logo.src} alt={logo.alt} className="h-full object-contain" />
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-4 space-x-2">
              {partnerLogos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeIndex === index ? 'bg-primary-500' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Charter Principles */}
        <div className="mb-16">
          <h2 className={`text-2xl font-light text-center mb-8 text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'مبادئ ميثاق الإمارات الـ12' : 'The 12 UAE Charter Principles'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {charterPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <motion.div
                  key={principle.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className="glass-card glass-card-hover p-6 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-sm font-medium text-green-400">
                        {language === 'ar' ? 'معتمد' : 'Compliant'}
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-lg font-medium text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {principle.title}
                  </h3>
                  
                  <p className={`text-sm text-gray-300 mb-4 leading-relaxed font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <CharterBadge />
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-12">
            <h2 className={`text-3xl font-light tracking-tight mb-6 text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'هل تريد معرفة المزيد عن امتثالنا للميثاق؟' : 'Want to Learn More About Our Charter Compliance?'}
            </h2>
            <p className={`text-lg font-light text-gray-300 mb-8 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'تواصل مع فريقنا للحصول على معلومات مفصلة حول كيفية تلبية منصتنا لجميع متطلبات ميثاق الإمارات'
                : 'Contact our team for detailed information on how our platform meets all UAE Charter requirements'
              }
            </p>
            <motion.button
              onClick={() => openContactForm && openContactForm('general')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-lg glow-effect hover:shadow-xl transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}
            >
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Charter;