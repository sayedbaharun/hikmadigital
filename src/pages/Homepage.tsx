import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Sparkles,
  BarChart3,
  Brain,
  Zap,
  ChevronDown,
  MessageSquare,
  Calendar,
  PieChart,
  Shield,
  Lightbulb,
  Headphones
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface HomepageProps {
  openContactForm: (type: 'demo' | 'contact') => void;
}

const Homepage: React.FC<HomepageProps> = ({ openContactForm }) => {
  const { language, isRTL } = useLanguage();
  const [animatedNumbers, setAnimatedNumbers] = useState({
    automation: 0,
    roi: 0,
    rating: 0,
    clients: 0,
    savings: 0,
    efficiency: 0
  });

  // Animate numbers on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === 'metrics-section') {
          // Animate each metric
          const animateValue = (key: string, endValue: number, duration: number = 2000) => {
            const steps = 60;
            const stepValue = endValue / steps;
            let current = 0;
            
            const interval = setInterval(() => {
              current += stepValue;
              if (current >= endValue) {
                current = endValue;
                clearInterval(interval);
              }
              setAnimatedNumbers(prev => ({
                ...prev,
                [key]: key === 'rating' ? Math.round(current * 10) / 10 : Math.round(current)
              }));
            }, duration / steps);
          };

          animateValue('automation', 80);
          animateValue('roi', 312);
          animateValue('rating', 4.9, 1500);
          animateValue('clients', 150);
          animateValue('savings', 2400000);
          animateValue('efficiency', 65);
        }
      });
    }, { threshold: 0.3 });

    const metricsSection = document.getElementById('metrics-section');
    if (metricsSection) {
      observer.observe(metricsSection);
    }

    return () => observer.disconnect();
  }, []);

  // Success stories data (subset from SuccessStories component)
  const featuredStories = [
    {
      id: 'ahmeds-restaurant',
      company: "Ahmed's Restaurant",
      companyAr: 'مطعم أحمد',
      industry: 'Food & Beverage',
      industryAr: 'المأكولات والمشروبات',
      logo: '🍽️',
      location: 'Dubai Marina',
      locationAr: 'دبي مارينا',
      challenge: 'Managing peak hours during Ramadan with 200+ daily orders',
      challengeAr: 'إدارة ساعات الذروة خلال رمضان مع أكثر من 200 طلب يومي',
      roi: 347,
      timeToValue: '3 months',
      timeToValueAr: '3 أشهر',
      efficiency: 82,
      quote: "Hikma AI transformed our Ramadan operations. We now handle 3x more orders!",
      quoteAr: "حكمة الذكي حول عملياتنا في رمضان. نتعامل الآن مع 3 أضعاف الطلبات!"
    },
    {
      id: 'fatimas-boutique',
      company: "Fatima's Fashion Boutique",
      companyAr: 'بوتيك فاطمة للأزياء',
      industry: 'Retail Fashion',
      industryAr: 'أزياء التجزئة',
      logo: '👗',
      location: 'Dubai Mall',
      locationAr: 'دبي مول',
      challenge: 'Managing inventory during Dubai Shopping Festival',
      challengeAr: 'إدارة المخزون خلال مهرجان دبي للتسوق',
      roi: 512,
      timeToValue: '6 weeks',
      timeToValueAr: '6 أسابيع',
      efficiency: 88,
      quote: "During DSF, we achieved 3x sales with AI handling customer queries!",
      quoteAr: "خلال مهرجان دبي للتسوق، حققنا 3 أضعاف المبيعات مع الذكاء الاصطناعي!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Dramatic Entrance */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-background to-accent-900/20" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Headline with Staggered Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={`text-5xl lg:text-7xl font-bold mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              <span className="block text-white">
                {language === 'ar' ? 'حول أعمالك في دبي' : 'Transform Your Dubai Business'}
              </span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block gradient-text mt-2"
              >
                {language === 'ar' ? 'مع قوة الذكاء الاصطناعي' : 'With The Power of AI'}
              </motion.span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={`text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}
          >
            {language === 'ar'
              ? 'الحل الوحيد المعتمد من ميثاق الإمارات الذي يجمع بين الذكاء الاصطناعي والخبراء البشريين لتحقيق نمو استثنائي'
              : 'The only UAE Charter-certified solution combining AI agents with human experts for exceptional growth'}
          </motion.p>

          {/* CTAs with Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              onClick={() => openContactForm('demo')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-lg glow-effect inline-flex items-center justify-center space-x-2 rtl:space-x-reverse ${
                isRTL ? 'font-arabic' : 'font-inter'
              }`}
            >
              <span>{language === 'ar' ? 'ابدأ التحول الآن' : 'Start Your Transformation'}</span>
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </motion.button>

            <Link
              to="/demo"
              className={`px-8 py-4 glass-card glass-card-hover text-primary-400 font-medium rounded-lg inline-flex items-center justify-center space-x-2 rtl:space-x-reverse ${
                isRTL ? 'font-arabic' : 'font-inter'
              }`}
            >
              <span>{language === 'ar' ? 'شاهد عرض توضيحي' : 'Watch Demo'}</span>
              <Zap className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Shield className="w-5 h-5 text-green-400" />
              <span className={isRTL ? 'font-arabic' : 'font-inter'}>
                {language === 'ar' ? 'معتمد من ميثاق الإمارات' : 'UAE Charter Certified'}
              </span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Users className="w-5 h-5 text-blue-400" />
              <span className={isRTL ? 'font-arabic' : 'font-inter'}>
                {language === 'ar' ? '150+ شركة نشطة' : '150+ Active Businesses'}
              </span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className={isRTL ? 'font-arabic' : 'font-inter'}>
                {language === 'ar' ? 'تقييم 4.9/5' : '4.9/5 Rating'}
              </span>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Problem Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl lg:text-4xl font-bold mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                <span className="text-red-400">
                  {language === 'ar' ? 'التحديات التي تواجهها' : 'The Challenges You Face'}
                </span>
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    icon: MessageSquare,
                    text: language === 'ar' 
                      ? 'فقدان العملاء بسبب بطء الاستجابة على واتساب'
                      : 'Losing customers due to slow WhatsApp responses',
                    stat: '73%',
                    statText: language === 'ar' ? 'من العملاء يتوقعون رد فوري' : 'of customers expect instant replies'
                  },
                  {
                    icon: Calendar,
                    text: language === 'ar'
                      ? 'إضاعة الوقت في المهام الإدارية المتكررة'
                      : 'Wasting time on repetitive administrative tasks',
                    stat: '5-7',
                    statText: language === 'ar' ? 'ساعات يومياً' : 'hours daily'
                  },
                  {
                    icon: PieChart,
                    text: language === 'ar'
                      ? 'عدم وضوح البيانات وصعوبة اتخاذ القرارات'
                      : 'Unclear data and difficult decision-making',
                    stat: '60%',
                    statText: language === 'ar' ? 'قرارات بدون بيانات' : 'decisions without data'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 border-red-900/20"
                  >
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <p className={`text-gray-200 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {item.text}
                        </p>
                        <div className="flex items-baseline space-x-2 rtl:space-x-reverse">
                          <span className="text-2xl font-bold text-red-400">{item.stat}</span>
                          <span className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                            {item.statText}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solution Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl lg:text-4xl font-bold mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                <span className="gradient-text">
                  {language === 'ar' ? 'الحل الذكي من حكمة' : 'The Smart Solution from Hikma'}
                </span>
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    icon: Brain,
                    title: language === 'ar' ? 'ذكاء اصطناعي متقدم' : 'Advanced AI Intelligence',
                    text: language === 'ar'
                      ? 'يفهم عملائك ويتحدث بلغتهم (العربية والإنجليزية)'
                      : 'Understands your customers and speaks their language (Arabic & English)',
                    color: 'primary'
                  },
                  {
                    icon: Headphones,
                    title: language === 'ar' ? 'دعم بشري متخصص' : 'Specialized Human Support',
                    text: language === 'ar'
                      ? 'خبراء محليون يفهمون سوق دبي وثقافة الأعمال'
                      : 'Local experts who understand Dubai market and business culture',
                    color: 'accent'
                  },
                  {
                    icon: Lightbulb,
                    title: language === 'ar' ? 'حلول مخصصة لكل قطاع' : 'Sector-Specific Solutions',
                    text: language === 'ar'
                      ? 'مصممة خصيصاً للمطاعم والتجزئة واللوجستيات وغيرها'
                      : 'Tailored for restaurants, retail, logistics, and more',
                    color: 'green'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 glass-card-hover"
                  >
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className={`w-12 h-12 bg-gradient-to-br ${
                        item.color === 'primary' ? 'from-primary-500/20 to-primary-600/20' :
                        item.color === 'accent' ? 'from-accent-500/20 to-accent-600/20' :
                        'from-green-500/20 to-emerald-600/20'
                      } rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`w-6 h-6 ${
                          item.color === 'primary' ? 'text-primary-400' :
                          item.color === 'accent' ? 'text-accent-400' :
                          'text-green-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {item.title}
                        </h3>
                        <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <button
                  onClick={() => openContactForm('demo')}
                  className={`px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-lg glow-effect inline-flex items-center space-x-2 rtl:space-x-reverse ${
                    isRTL ? 'font-arabic' : 'font-inter'
                  }`}
                >
                  <span>{language === 'ar' ? 'اكتشف كيف نساعدك' : 'Discover How We Help You'}</span>
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Metrics Section */}
      <section id="metrics-section" className="py-20 bg-gradient-to-b from-background-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              <span className="gradient-text">
                {language === 'ar' ? 'أرقام تتحدث عن النجاح' : 'Numbers That Speak Success'}
              </span>
            </h2>
            <p className={`text-lg text-gray-300 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'نتائج حقيقية من شركات دبي التي تثق بحكمة الذكي'
                : 'Real results from Dubai businesses that trust Hikma AI'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Automation Metric */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-primary-400" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                {animatedNumbers.automation}%
              </div>
              <h3 className={`text-lg font-semibold text-primary-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'أتمتة العمليات' : 'Process Automation'}
              </h3>
              <p className={`text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'من المهام اليومية المؤتمتة بالكامل'
                  : 'of daily tasks fully automated'}
              </p>
            </motion.div>

            {/* ROI Metric */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                {animatedNumbers.roi}%
              </div>
              <h3 className={`text-lg font-semibold text-green-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'العائد على الاستثمار' : 'Average ROI'}
              </h3>
              <p className={`text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'متوسط العائد في 6 أشهر'
                  : 'average return in 6 months'}
              </p>
            </motion.div>

            {/* Rating Metric */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                {animatedNumbers.rating}/5
              </div>
              <h3 className={`text-lg font-semibold text-yellow-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'تقييم العملاء' : 'Client Rating'}
              </h3>
              <p className={`text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'من أكثر من 150 عميل سعيد'
                  : 'from 150+ happy clients'}
              </p>
            </motion.div>

            {/* Additional Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                {animatedNumbers.clients}+
              </div>
              <h3 className={`text-lg font-semibold text-blue-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'شركات نشطة' : 'Active Businesses'}
              </h3>
              <p className={`text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'تستخدم حكمة الذكي يومياً'
                  : 'using Hikma AI daily'}
              </p>
            </motion.div>

            {/* Savings Metric */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {animatedNumbers.savings > 1000000 
                  ? `${(animatedNumbers.savings / 1000000).toFixed(1)}M`
                  : animatedNumbers.savings.toLocaleString()
                } AED
              </div>
              <h3 className={`text-lg font-semibold text-purple-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'إجمالي التوفير' : 'Total Savings'}
              </h3>
              <p className={`text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'وفرتها الشركات هذا العام'
                  : 'saved by businesses this year'}
              </p>
            </motion.div>

            {/* Efficiency Metric */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-teal-400" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                {animatedNumbers.efficiency}%
              </div>
              <h3 className={`text-lg font-semibold text-teal-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'توفير الوقت' : 'Time Saved'}
              </h3>
              <p className={`text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'في المهام الإدارية اليومية'
                  : 'on daily administrative tasks'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Story Preview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              <span className="gradient-text">
                {language === 'ar' ? 'قصص نجاح من دبي' : 'Success Stories from Dubai'}
              </span>
            </h2>
            <p className={`text-lg text-gray-300 max-w-2xl mx-auto mb-8 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'اكتشف كيف تحول الشركات المحلية أعمالها مع حكمة الذكي'
                : 'Discover how local businesses are transforming with Hikma AI'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <div className="flex items-start space-x-4 rtl:space-x-reverse mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    {story.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-white mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? story.companyAr : story.company}
                    </h3>
                    <p className={`text-gray-400 text-sm ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? story.industryAr : story.industry} • {language === 'ar' ? story.locationAr : story.location}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className={`text-sm font-semibold text-primary-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'التحدي' : 'Challenge'}
                  </h4>
                  <p className={`text-gray-300 text-sm ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? story.challengeAr : story.challenge}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-400">{story.roi}%</p>
                    <p className={`text-xs text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'العائد' : 'ROI'}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400">{story.efficiency}%</p>
                    <p className={`text-xs text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'كفاءة' : 'Efficiency'}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className={`text-2xl font-bold text-accent-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? story.timeToValueAr : story.timeToValue}
                    </p>
                    <p className={`text-xs text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'للنتائج' : 'To Results'}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <p className={`text-gray-300 italic mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    "{language === 'ar' ? story.quoteAr : story.quote}"
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1 rtl:space-x-reverse">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Link
                      to="/success-stories"
                      className={`text-primary-400 text-sm font-medium hover:text-primary-300 flex items-center space-x-1 rtl:space-x-reverse ${
                        isRTL ? 'font-arabic' : 'font-inter'
                      }`}
                    >
                      <span>{language === 'ar' ? 'اقرأ المزيد' : 'Read More'}</span>
                      <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/success-stories"
              className={`inline-flex items-center px-6 py-3 glass-card glass-card-hover text-primary-400 font-medium rounded-lg ${
                isRTL ? 'font-arabic' : 'font-inter'
              }`}
            >
              <span>{language === 'ar' ? 'جميع قصص النجاح' : 'View All Success Stories'}</span>
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 text-primary-400 mx-auto mb-6" />
              
              <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                <span className="gradient-text">
                  {language === 'ar' 
                    ? 'ابدأ رحلة التحول الرقمي اليوم' 
                    : 'Start Your Digital Transformation Today'}
                </span>
              </h2>
              
              <p className={`text-lg text-gray-300 mb-8 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'انضم إلى أكثر من 150 شركة في دبي تستخدم حكمة الذكي لتحقيق نمو استثنائي'
                  : 'Join 150+ Dubai businesses using Hikma AI to achieve exceptional growth'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.button
                  onClick={() => openContactForm('demo')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-lg glow-effect inline-flex items-center justify-center space-x-2 rtl:space-x-reverse ${
                    isRTL ? 'font-arabic' : 'font-inter'
                  }`}
                >
                  <span>{language === 'ar' ? 'احجز عرضاً توضيحياً مجانياً' : 'Book Free Demo'}</span>
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                </motion.button>

                <Link
                  to="/assessment"
                  className={`px-8 py-4 glass-card glass-card-hover text-primary-400 font-medium rounded-lg inline-flex items-center justify-center space-x-2 rtl:space-x-reverse ${
                    isRTL ? 'font-arabic' : 'font-inter'
                  }`}
                >
                  <span>{language === 'ar' ? 'تقييم مجاني لأعمالك' : 'Free Business Assessment'}</span>
                </Link>
              </div>

              <div className="flex items-center justify-center space-x-8 rtl:space-x-reverse text-sm text-gray-400">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className={isRTL ? 'font-arabic' : 'font-inter'}>
                    {language === 'ar' ? 'بدون بطاقة ائتمان' : 'No credit card required'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className={isRTL ? 'font-arabic' : 'font-inter'}>
                    {language === 'ar' ? 'إعداد في 24 ساعة' : 'Setup in 24 hours'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className={isRTL ? 'font-arabic' : 'font-inter'}>
                    {language === 'ar' ? 'دعم بالعربية' : 'Arabic support'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;