import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import DatabaseDemo from '../components/DatabaseDemo';

interface DatabasePageProps {
  openContactForm?: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const DatabasePage: React.FC<DatabasePageProps> = ({ openContactForm }) => {
  const { language, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={`text-4xl lg:text-6xl font-extralight tracking-tight mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              <span className="gradient-text font-bold">
                {language === 'ar' ? 'قاعدة البيانات الإنتاجية' : 'Production Database'}
              </span>
              <br />
              <span className="text-white font-light">
                {language === 'ar' ? 'لحكمة ديجيتال' : 'for Hikma Digital'}
              </span>
            </h1>
            <p className={`text-xl font-light text-gray-300 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'نظام قاعدة بيانات شامل لإدارة العملاء وتتبع المحادثات وتحليل الأعمال'
                : 'Comprehensive database system for customer management, conversation tracking, and business analytics'
              }
            </p>
          </motion.div>
        </div>

        {/* Features Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Database,
              title: language === 'ar' ? 'إدارة العملاء' : 'Customer Management',
              description: language === 'ar' ? 'ملفات شاملة للشركات الصغيرة والمتوسطة' : 'Comprehensive SME profiles',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              icon: Server,
              title: language === 'ar' ? 'تتبع المحادثات' : 'Conversation Tracking',
              description: language === 'ar' ? 'جميع تفاعلات الذكاء الاصطناعي والبشر' : 'All AI and human interactions',
              color: 'from-purple-500 to-pink-500'
            },
            {
              icon: TrendingUp,
              title: language === 'ar' ? 'تحليل الأعمال' : 'Business Analytics',
              description: language === 'ar' ? 'مقاييس الأداء والعائد على الاستثمار' : 'Performance metrics and ROI',
              color: 'from-green-500 to-emerald-500'
            },
            {
              icon: Shield,
              title: language === 'ar' ? 'امتثال الإمارات' : 'UAE Compliance',
              description: language === 'ar' ? 'مراقبة ميثاق الإمارات' : 'UAE Charter monitoring',
              color: 'from-yellow-500 to-orange-500'
            }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center"
              >
                <div className={`p-4 bg-gradient-to-br ${feature.color} rounded-lg mx-auto mb-4 w-fit`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-lg font-medium text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {feature.title}
                </h3>
                <p className={`text-gray-300 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Database Demo */}
        <DatabaseDemo />
        
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
              {language === 'ar' ? 'هل تريد معرفة المزيد عن قاعدة البيانات؟' : 'Want to Learn More About Our Database?'}
            </h2>
            <p className={`text-lg font-light text-gray-300 mb-8 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'تواصل مع فريقنا للحصول على معلومات مفصلة حول كيفية تخزين ومعالجة البيانات بشكل آمن'
                : 'Contact our team for detailed information on how we securely store and process data'
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

export default DatabasePage;