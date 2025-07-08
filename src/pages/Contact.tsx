import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Video,
  Users,
  Building,
  Clock,
  Send,
  Bot,
  User,
  Globe,
  Shield
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';

interface ContactProps {
  openContactForm: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const Contact: React.FC<ContactProps> = ({ openContactForm }) => {
  const { isRTL, language } = useLanguage();
  const [selectedContactType, setSelectedContactType] = useState('immediate');

  const contactOptions = [
    {
      id: 'immediate',
      title: language === 'ar' ? 'الدعم الفوري' : 'Immediate Support',
      description: language === 'ar' ? 'احصل على مساعدة فورية من فريقنا' : 'Get instant help from our team',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const immediateSupport = [
    {
      type: 'ai-chat',
      title: language === 'ar' ? 'محادثة مع حكمة الذكي' : 'Chat with Hikma AI',
      description: language === 'ar' ? 'متاح 24/7 بالعربية والإنجليزية' : 'Available 24/7 in Arabic and English',
      action: language === 'ar' ? 'ابدأ المحادثة' : 'Start Chat',
      icon: Bot,
      status: 'online'
    },
    {
      type: 'whatsapp',
      title: language === 'ar' ? 'واتساب بزنس' : 'WhatsApp Business',
      description: language === 'ar' ? 'رسائل صوتية ونصية' : 'Voice and text messages',
      action: '+971-xxx-xxxx',
      icon: Phone,
      status: 'online'
    }
  ];

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
                {language === 'ar' ? 'هل أنت مستعد' : 'Ready to Transform'}
              </span>
              <br />
              <span className="text-white font-light">
                {language === 'ar' ? 'لتحويل عملك؟' : 'Your Business?'}
              </span>
            </h1>
            <p className={`text-xl font-light text-gray-300 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'طرق متعددة للتواصل مع فريقنا من الذكاء الاصطناعي والخبراء البشريين وبدء رحلتك'
                : 'Multiple ways to connect with our human-AI team and begin your journey'
              }
            </p>
          </motion.div>
        </div>

        {/* Contact Type Selector */}
        <div className="mb-16">
          <h2 className={`text-2xl font-light text-center mb-8 text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'اختر طريقة التواصل' : 'Choose Your Contact Method'}
          </h2>
          <div className="grid md:grid-cols-1 gap-6">
            {contactOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <motion.button
                  key={option.id}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedContactType(option.id)}
                  className={`glass-card glass-card-hover p-6 text-center transition-all duration-300 ${
                    selectedContactType === option.id ? 'ring-2 ring-primary-500 bg-primary-500/10' : ''
                  }`}
                >
                  <div className={`p-4 bg-gradient-to-br ${option.color} rounded-lg mx-auto mb-4 w-fit`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-lg font-medium text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {option.title}
                  </h3>
                  <p className={`text-gray-300 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {option.description}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Contact Content */}
        <motion.div
          key={selectedContactType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Main Content */}
          <div className="lg:col-span-2">
            {selectedContactType === 'immediate' && (
              <div className="space-y-6">
                <h3 className={`text-2xl font-medium text-white mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'خيارات الدعم الفوري' : 'Immediate Support Options'}
                </h3>
                
                {immediateSupport.map((support, index) => {
                  const IconComponent = support.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-card p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                          <div className="p-3 bg-primary-500/20 rounded-lg">
                            <IconComponent className="w-6 h-6 text-primary-400" />
                          </div>
                          <div>
                            <h4 className={`text-lg font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                              {support.title}
                            </h4>
                            <p className={`text-gray-300 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                              {support.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                          <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <div className={`w-2 h-2 rounded-full ${
                              support.status === 'online' ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'
                            }`}></div>
                            <span className="text-sm text-gray-400 capitalize">{support.status}</span>
                          </div>
                          <motion.button
                            onClick={() => openContactForm('general')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-lg transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}
                          >
                            {support.action}
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Office Information */}
            <div className="glass-card p-6">
              <h4 className={`text-lg font-medium text-white mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'معلومات المكتب' : 'Office Information'}
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <MapPin className="w-5 h-5 text-primary-400 mt-1" />
                  <div>
                    <p className={`text-white font-medium ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'واحة دبي للسيليكون' : 'Dubai Silicon Oasis'}
                    </p>
                    <p className={`text-gray-300 text-sm font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'تكنوهب 1،2، DDP A5، واحة دبي للسيليكون - دبي' : 'Technohub 1,2, DDP A5, Dubai Silicon Oasis - Dubai'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <Clock className="w-5 h-5 text-accent-400 mt-1" />
                  <div>
                    <p className={`text-white font-medium ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'ساعات العمل' : 'Office Hours'}
                    </p>
                    <p className={`text-gray-300 text-sm font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'الاثنين - السبت: 9:00 ص - 7:00 م' : 'Monday - Saturday: 9:00 AM - 7:00 PM'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <Globe className="w-5 h-5 text-green-400 mt-1" />
                  <div>
                    <p className={`text-white font-medium ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'اللغات' : 'Languages'}
                    </p>
                    <p className={`text-gray-300 text-sm font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'العربية، الإنجليزية' : 'Arabic, English'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass-card p-6">
              <h4 className={`text-lg font-medium text-white mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'إحصائيات سريعة' : 'Quick Stats'}
              </h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'متوسط وقت الاستجابة' : 'Average Response Time'}
                  </span>
                  <span className="text-primary-400 font-medium">{"< 5 min"}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'رضا العملاء' : 'Customer Satisfaction'}
                  </span>
                  <span className="text-accent-400 font-medium">98%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'الشركات المحولة' : 'Businesses Transformed'}
                  </span>
                  <span className="text-green-400 font-medium">500+</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h3 className={`text-2xl font-medium text-white mb-6 text-center ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'زرنا في واحة دبي للسيليكون' : 'Visit Us at Dubai Silicon Oasis'}
          </h3>
          
          <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'تكنوهب 1،2، DDP A5، واحة دبي للسيليكون - دبي' : 'Technohub 1,2, DDP A5, Dubai Silicon Oasis - Dubai'}
              </p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className={`text-gray-300 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'مواقف مجانية متاحة • وصول سهل بالمترو • مقهى في الموقع'
                : 'Free parking available • Easy metro access • On-site café'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;