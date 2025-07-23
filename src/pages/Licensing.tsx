import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Package,
  Code,
  Building,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Download,
  Star,
  Award,
  Target,
  BarChart3,
  Cpu,
  Database,
  Network,
  Settings,
  Clock,
  DollarSign
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LicensingProps {
  openContactForm?: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const Licensing: React.FC<LicensingProps> = ({ openContactForm }) => {
  const { isRTL, language } = useLanguage();

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
                {language === 'ar' ? 'ترخيص تقنيتنا المثبتة' : 'License Our Proven AI Technology'}
              </span>
              <br />
              <span className="text-primary">
                {language === 'ar' ? 'نفس التقنية التي تدعم النجاح في Aivant Realty و GetMeToDubai و MyDubai' : 'The Same Technology Powering Success at Aivant Realty, GetMeToDubai, and MyDubai'}
              </span>
            </h1>
            <p className={`text-xl text-secondary max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'افتح الوصول إلى تقنية الذكاء الاصطناعي المتقدمة وراء المنصات الناجحة مثل Aivant Realty و GetMeToDubai و MyDubai. حلول الذكاء الاصطناعي الخاصة بنا مصممة خصيصًا للمحادثات العربية والرؤى الثقافية واحتياجات الأعمال الخاصة بالإمارات، وقد أثبتت فعاليتها من خلال التطبيقات في العالم الحقيقي.'
                : 'Unlock access to the advanced AI technology behind successful platforms like Aivant Realty, GetMeToDubai, and MyDubai. Our proprietary AI solutions are tailored specifically for Arabic conversations, cultural insights, and UAE-specific business needs, proven by real-world applications.'
              }
            </p>
          </motion.div>
        </div>

        {/* Technology Components */}
        <div className="mb-16">
          <h2 className={`text-2xl text-center mb-8 text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'حلول الذكاء الاصطناعي المثبتة المتاحة للترخيص' : 'Proven AI Solutions Available for Licensing'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="p-3 bg-primary-500/20 rounded-lg w-fit mb-4">
                <Globe className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className={`text-lg font-medium text-primary mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'محرك محادثة الذكاء الاصطناعي العربي' : 'Arabic AI Conversation Engine'}
              </h3>
              <p className={`text-secondary mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'محرك المحادثة الذي يدعم بنجاح استشارات العقارات في Aivant Realty وخدمات الكونسيرج في GetMeToDubai.'
                  : 'The AI conversation engine successfully powering Aivant Realty\'s property consultations and GetMeToDubai\'s concierge services.'
                }
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  <span className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'تواصل ثنائي اللغة سلس (العربية والإنجليزية)' : 'Fluent bilingual communication (Arabic & English)'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  <span className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'متخصص في اللهجات الخليجية والفروق الدقيقة' : 'Specialized in Gulf dialects and nuances'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  <span className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'مشاركة العملاء المتكاملة عبر واتساب' : 'Integrated WhatsApp customer engagement'}
                  </span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className={`text-lg font-medium text-primary mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'وحدات الذكاء الثقافي' : 'Cultural Intelligence Modules'}
              </h3>
              <p className={`text-secondary mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'الذكاء الثقافي الذي يمكّن MyDubai من التواصل بشكل أصيل مع الجماهير المحلية.'
                  : 'The cultural intelligence that enables MyDubai to resonate authentically with local audiences.'
                }
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  <span className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'التقويم الإسلامي والتعرف على الأحداث' : 'Islamic calendar and event recognition'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  <span className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'فهم عميق لآداب الأعمال والثقافة الإماراتية' : 'In-depth understanding of UAE cultural and business etiquette'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  <span className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'وحدات قابلة للتخصيص للأحداث الخاصة بالمنطقة' : 'Customizable modules for region-specific events'}
                  </span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
                <Building className="w-6 h-6 text-green-400" />
              </div>
              <h3 className={`text-lg font-medium text-primary mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'مكتبات سياق الأعمال الإماراتية' : 'UAE Business Context Libraries'}
              </h3>
              <p className={`text-secondary mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'مكتبات الأعمال الشاملة المستخدمة من قبل Aivant Realty و GetMeToDubai لتعزيز التميز التشغيلي.'
                  : 'Comprehensive business libraries used by Aivant Realty and GetMeToDubai to enhance operational excellence.'
                }
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  <span className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'رؤى غنية للسوق المحلي' : 'Rich local market insights'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  <span className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'مصطلحات الأعمال العربية والسياق القانوني الدقيق' : 'Precise Arabic business terminology and legal context'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  <span className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'قوالب مستندات خاصة بالصناعة' : 'Industry-specific document templates'}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Simple Pricing */}
        <div className="mb-16">
          <h2 className={`text-2xl text-center mb-12 text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'تسعير شفاف ومرن' : 'Transparent and Flexible Pricing'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-medium text-primary mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'أساسي' : 'Basic'}
                </h3>
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  AED 2,500
                </div>
                <p className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'شهرياً' : 'per month'}
                </p>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className={`text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'روبوت محادثة عربي (كما يستخدم في MyDubai)' : 'Arabic AI chatbot (as used by MyDubai)'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className={`text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'تفاعل العملاء عبر واتساب' : 'WhatsApp customer interaction'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className={`text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'دعم العملاء القياسي' : 'Standard customer support'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className={`text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'حتى 1,000 تفاعل/شهر' : 'Up to 1,000 interactions/month'}
                  </span>
                </div>
              </div>
              
              <motion.button
                onClick={() => openContactForm && openContactForm('licensing')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`btn-primary w-full ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 hover:bg-white/10 transition-all duration-300 relative"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                {language === 'ar' ? 'الأكثر شعبية' : 'MOST POPULAR'}
              </div>
              
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-medium text-primary mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'احترافي' : 'Professional'}
                </h3>
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  AED 5,000
                </div>
                <p className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'شهرياً' : 'per month'}
                </p>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className={`text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'كل ميزات الباقة الأساسية' : 'All Basic features'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className={`text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'وحدات الذكاء الثقافي المحسنة (تدعم GetMeToDubai)' : 'Enhanced cultural intelligence modules (powering GetMeToDubai)'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className={`text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'تكامل مخصص للصناعة (كما في Aivant Realty)' : 'Customized industry integration (as with Aivant Realty)'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className={`text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'حتى 5,000 تفاعل/شهر' : 'Up to 5,000 interactions/month'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className={`text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'دعم فني متميز على مدار الساعة' : '24/7 premium technical support'}
                  </span>
                </div>
              </div>
              
              <motion.button
                onClick={() => openContactForm && openContactForm('licensing')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`btn-primary w-full ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-medium text-primary mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'مؤسسة' : 'Enterprise'}
                </h3>
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {language === 'ar' ? 'اتصل بنا' : 'Custom Pricing'}
                </div>
                <p className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'حلول مخصصة' : 'Custom solutions'}
                </p>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className={`text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'كل ميزات الباقة الاحترافية' : 'All Professional features'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className={`text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'تطوير وتكامل ذكاء اصطناعي مخصص بالكامل' : 'Fully bespoke AI development and integration'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className={`text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'وصول كامل إلى API وتخصيص' : 'Complete API access and customization'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className={`text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'سعة استخدام غير محدودة' : 'Unlimited usage capacity'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className={`text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'إدارة حساب مخصصة واستشارات' : 'Dedicated account management and consultation'}
                  </span>
                </div>
              </div>
              
              <motion.button
                onClick={() => openContactForm && openContactForm('licensing')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`btn-primary w-full ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Real-World Proven Technology */}
        <div className="mb-16">
          <h2 className={`text-2xl text-center mb-12 text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'تقنية مثبتة في العالم الحقيقي' : 'Real-World Proven Technology'}
          </h2>
          
          <div className="glass-card p-8">
            <p className={`text-lg text-secondary mb-8 text-center ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'ذكاؤنا الاصطناعي ليس نظريًا - إنه يدعم بنجاح مشاريع مبتكرة مثل استشارات العقارات المدعومة بالذكاء الاصطناعي من Aivant Realty، ومنصة الكونسيرج المتميزة GetMeToDubai، ومحتوى وسائط MyDubai المؤثر.'
                : 'Our AI isn\'t theoretical—it\'s successfully powering innovative ventures such as Aivant Realty\'s AI-driven real estate consultancy, GetMeToDubai\'s premium concierge platform, and MyDubai\'s influential media content.'
              }
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="glass-card p-4">
                <h3 className={`text-lg font-medium text-white mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'مختبر في السوق' : 'Market Tested'}
                </h3>
                <p className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar'
                    ? 'أداء قوي مثبت عبر قطاعات العقارات الفاخرة والسفر الفاخر ووسائط نمط الحياة.'
                    : 'Robust performance demonstrated across luxury real estate, premium travel, and lifestyle media sectors.'
                  }
                </p>
              </div>
              
              <div className="glass-card p-4">
                <h3 className={`text-lg font-medium text-white mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'دقة ثقافية' : 'Cultural Accuracy'}
                </h3>
                <p className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar'
                    ? 'محركات ذكاء اصطناعي مصممة خصيصًا للمشاركة الثقافية والسوقية الحقيقية في الإمارات.'
                    : 'Specially crafted AI engines for genuine cultural and market engagement in the UAE.'
                  }
                </p>
              </div>
              
              <div className="glass-card p-4">
                <h3 className={`text-lg font-medium text-white mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'معتمد من ميثاق الإمارات' : 'UAE Charter Certified'}
                </h3>
                <p className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar'
                    ? 'متوافق تمامًا مع المعايير التنظيمية الإماراتية وبروتوكولات الذكاء الاصطناعي المعتمدة من الحكومة.'
                    : 'Fully compliant with UAE regulatory standards and government-approved AI protocols.'
                  }
                </p>
              </div>
              
              <div className="glass-card p-4">
                <h3 className={`text-lg font-medium text-white mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'نجاح موثق' : 'Documented Success'}
                </h3>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'عملاء نشطون' : 'Active Clients'}:
                    </span>
                    <span className="text-sm text-accent-400">200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'متوسط العائد' : 'Average ROI'}:
                    </span>
                    <span className="text-sm text-accent-400">347%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'رضا العملاء' : 'Client satisfaction'}:
                    </span>
                    <span className="text-sm text-accent-400">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'صناعات مخدومة' : 'Industries served'}:
                    </span>
                    <span className="text-sm text-accent-400">12+</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <motion.button
                onClick={() => openContactForm && openContactForm('licensing')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-lg transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                {language === 'ar' ? 'طلب عرض توضيحي' : 'Request Demo'}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-16"
        >
          <h2 className={`text-2xl font-medium text-primary text-center mb-8 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'جاهز لترخيص تقنية الذكاء الاصطناعي المثبتة؟' : 'Ready to License Proven AI Technology?'}
          </h2>
          <p className={`text-center text-secondary mb-8 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'تواصل معنا لمناقشة احتياجاتك' : 'Get in Touch to Discuss Your Needs'}
          </p>
          
          <div className="text-center">
            <motion.button
              onClick={() => openContactForm && openContactForm('licensing')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`btn-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}
            >
              {language === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Licensing;