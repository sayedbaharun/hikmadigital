import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  TrendingUp, 
  Download, 
  Calendar, 
  Users,
  Award,
  Globe,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ResourcesProps {
  openContactForm?: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const Resources: React.FC<ResourcesProps> = ({ openContactForm }) => {
  const { isRTL, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('templates');

  const resourceCategories = [
    {
      id: 'templates',
      name: language === 'ar' ? 'القوالب والأدوات' : 'Templates & Tools',
      icon: FileText,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'intelligence',
      name: language === 'ar' ? 'ذكاء السوق' : 'Market Intelligence',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const resources = {
    templates: [
      {
        title: language === 'ar' ? 'تقييم التحول التجاري' : 'Business Transformation Assessment',
        type: language === 'ar' ? 'قالب تفاعلي' : 'Interactive Template',
        description: language === 'ar'
          ? 'قيم جاهزية عملك للتحول بالذكاء الاصطناعي'
          : 'Assess your business readiness for AI transformation',
        format: 'PDF + Excel',
        languages: language === 'ar' ? 'عربي، إنجليزي' : 'Arabic, English',
        icon: FileText
      },
      {
        title: language === 'ar' ? 'أوراق عمل حساب العائد على الاستثمار' : 'ROI Calculation Worksheets',
        type: language === 'ar' ? 'حاسبة' : 'Calculator',
        description: language === 'ar'
          ? 'احسب العائد المتوقع من استثمارك في الذكاء الاصطناعي'
          : 'Calculate expected return on your AI investment',
        format: 'Excel + Google Sheets',
        languages: language === 'ar' ? 'عربي، إنجليزي' : 'Arabic, English',
        icon: TrendingUp
      },
      {
        title: language === 'ar' ? 'قوائم مراجعة تنفيذ الذكاء الاصطناعي' : 'AI Implementation Checklists',
        type: language === 'ar' ? 'قائمة مراجعة' : 'Checklist',
        description: language === 'ar'
          ? 'دليل خطوة بخطوة لتنفيذ حلول الذكاء الاصطناعي'
          : 'Step-by-step guide for implementing AI solutions',
        format: 'PDF',
        languages: language === 'ar' ? 'عربي، إنجليزي' : 'Arabic, English',
        icon: FileText
      }
    ],
    intelligence: [
      {
        title: language === 'ar' ? 'ميثاق الإمارات لتطوير واستخدام الذكاء الاصطناعي - 2024' : 'The UAE Charter for the Development & Use of Artificial Intelligence - 2024',
        type: language === 'ar' ? 'تقرير بحثي' : 'Research Report',
        description: language === 'ar'
          ? 'تحليل شامل لاعتماد الذكاء الاصطناعي في الشركات الصغيرة والمتوسطة'
          : 'Comprehensive analysis of AI adoption in UAE SMEs',
        pages: '45',
        updated: language === 'ar' ? 'ديسمبر 2024' : 'December 2024',
        icon: FileText
      },
      {
        title: language === 'ar' ? 'معايير التحول الرقمي في دبي' : 'Dubai Digital Transformation Benchmarks',
        type: language === 'ar' ? 'دراسة مقارنة' : 'Benchmark Study',
        description: language === 'ar'
          ? 'مقارنة أداء الشركات في رحلة التحول الرقمي'
          : 'Performance comparison of companies in digital transformation journey',
        pages: '32',
        updated: language === 'ar' ? 'نوفمبر 2024' : 'November 2024',
        icon: TrendingUp
      }
    ]
  };

  const selectedResources = resources[selectedCategory] || resources.templates;

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={`text-2xl lg:text-3xl font-extralight tracking-tight mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              <span className="gradient-text font-bold">
                {language === 'ar' ? 'إتقان نمو الأعمال' : 'Master AI-Driven'}
              </span>
              <br />
              <span className="text-primary">
                {language === 'ar' ? 'المدفوع بالذكاء الاصطناعي' : 'Business Growth'}
              </span>
            </h1>
            <p className={`text-xl text-secondary max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'موارد شاملة وأدلة ورؤى لمجتمع الشركات الصغيرة والمتوسطة المتقدم في الذكاء الاصطناعي في دبي'
                : 'Comprehensive resources, guides, and insights for Dubai\'s AI-forward SME community'
              }
            </p>
          </motion.div>
        </div>

        {/* Resource Categories */}
        <div className="mb-16">
          <h2 className={`text-2xl text-center mb-8 text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'استكشف مواردنا' : 'Explore Our Resources'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {resourceCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`glass-card glass-card-hover p-6 text-center transition-all duration-300 ${
                    selectedCategory === category.id ? 'ring-2 ring-primary-500 bg-primary-500/10' : ''
                  }`}
                >
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg mx-auto mb-3 w-fit`}>
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className={`font-medium text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {category.name}
                  </h3>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Resources */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {selectedResources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary-400" />
                  </div>
                  <span className="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-xs">
                    {resource.type}
                  </span>
                </div>

                <h3 className={`text-lg font-medium text-primary mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {resource.title}
                </h3>
                
                <p className={`text-secondary mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {resource.description}
                </p>

                {/* Resource Details */}
                <div className="space-y-2 mb-4">
                  {resource.format && (
                    <div className="flex items-center justify-between text-sm">
                      <span className={`text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'التنسيق:' : 'Format:'}
                      </span>
                      <span className="text-secondary">{resource.format}</span>
                    </div>
                  )}
                  {resource.languages && (
                    <div className="flex items-center justify-between text-sm">
                      <span className={`text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'اللغات:' : 'Languages:'}
                      </span>
                      <span className="text-secondary">{resource.languages}</span>
                    </div>
                  )}
                  {resource.pages && (
                    <div className="flex items-center justify-between text-sm">
                      <span className={`text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'الصفحات:' : 'Pages:'}
                      </span>
                      <span className="text-secondary">{resource.pages}</span>
                    </div>
                  )}
                  {resource.updated && (
                    <div className="flex items-center justify-between text-sm">
                      <span className={`text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'تحديث:' : 'Updated:'}
                      </span>
                      <span className="text-secondary">{resource.updated}</span>
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <motion.button
                  onClick={() => openContactForm && openContactForm('general')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`btn-primary w-full flex items-center justify-center space-x-2 rtl:space-x-reverse ${isRTL ? 'font-arabic' : 'font-inter'}`}
                >
                  <Download className="w-4 h-4" />
                  <span>
                    {language === 'ar' ? 'تحميل' : 'Download'}
                  </span>
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <div className="text-center mb-8">
            <h2 className={`text-2xl tracking-tight mb-4 text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'الأحداث القادمة' : 'Upcoming Events'}
            </h2>
            <p className={`text-lg text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' 
                ? 'انضم إلى مجتمعنا في الأحداث والندوات القادمة'
                : 'Join our community in upcoming events and webinars'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <Calendar className="w-6 h-6 text-primary-400" />
                <div>
                  <h3 className={`font-medium text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'مجلس الذكاء الاصطناعي الأسبوعي' : 'Weekly AI Majlis'}
                  </h3>
                  <p className={`text-sm text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'الثلاثاء القادم، 7:00 مساءً' : 'Next Tuesday, 7:00 PM'}
                  </p>
                </div>
              </div>
              <p className={`text-secondary mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'مناقشة أحدث اتجاهات الذكاء الاصطناعي في الأعمال الإماراتية'
                  : 'Discussing latest AI trends in UAE business'
                }
              </p>
              <button 
                onClick={() => openContactForm && openContactForm('general')}
                className={`text-primary-400 hover:text-primary-300 transition-colors ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                {language === 'ar' ? 'سجل الآن →' : 'Register Now →'}
              </button>
            </div>

            <div className="border border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <Calendar className="w-6 h-6 text-accent-400" />
                <div>
                  <h3 className={`font-medium text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'ورشة عمل التحول الرقمي' : 'Digital Transformation Workshop'}
                  </h3>
                  <p className={`text-sm text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? '15 يناير، 2:00 ظهراً' : 'January 15, 2:00 PM'}
                  </p>
                </div>
              </div>
              <p className={`text-secondary mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'ورشة عمل عملية لتطبيق الذكاء الاصطناعي في عملك'
                  : 'Hands-on workshop for implementing AI in your business'
                }
              </p>
              <button 
                onClick={() => openContactForm && openContactForm('general')}
                className={`text-accent-400 hover:text-accent-300 transition-colors ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                {language === 'ar' ? 'احجز مقعدك →' : 'Reserve Your Spot →'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;