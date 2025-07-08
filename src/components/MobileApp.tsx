import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Download, 
  Star, 
  MessageCircle, 
  Mic, 
  Camera,
  Bell,
  Settings,
  User,
  BarChart3,
  CheckCircle,
  Play
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const MobileApp: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [activeScreen, setActiveScreen] = useState('home');
  const [isInstalling, setIsInstalling] = useState(false);

  // PWA Installation
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const installPWA = async () => {
    if (!deferredPrompt) return;
    
    setIsInstalling(true);
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
    setIsInstalling(false);
  };

  const mobileScreens = {
    home: {
      title: language === 'ar' ? 'الرئيسية' : 'Home',
      content: (
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg text-white">
            <div>
              <h3 className={`font-medium ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'مرحباً أحمد!' : 'Hello Ahmed!'}
              </h3>
              <p className={`text-sm opacity-90 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'مطعم الأصالة' : 'Al-Asala Restaurant'}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">94%</div>
              <div className="text-xs opacity-90">
                {language === 'ar' ? 'جاهزية الذكاء الاصطناعي' : 'AI Ready'}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 bg-white/10 rounded-lg text-center">
              <MessageCircle className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <span className={`text-sm text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'دردشة ذكية' : 'AI Chat'}
              </span>
            </button>
            <button className="p-4 bg-white/10 rounded-lg text-center">
              <Mic className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <span className={`text-sm text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'رسالة صوتية' : 'Voice Message'}
              </span>
            </button>
            <button className="p-4 bg-white/10 rounded-lg text-center">
              <BarChart3 className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <span className={`text-sm text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'التحليلات' : 'Analytics'}
              </span>
            </button>
            <button className="p-4 bg-white/10 rounded-lg text-center">
              <Camera className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <span className={`text-sm text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'مسح ضوئي' : 'Scan Menu'}
              </span>
            </button>
          </div>

          {/* Recent Activity */}
          <div className="space-y-3">
            <h4 className={`text-white font-medium ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'النشاط الأخير' : 'Recent Activity'}
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-white/5 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <div className="flex-1">
                  <p className={`text-sm text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'تم تحسين قائمة رمضان' : 'Ramadan menu optimized'}
                  </p>
                  <p className="text-xs text-gray-400">
                    {language === 'ar' ? 'منذ ساعتين' : '2 hours ago'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-white/5 rounded-lg">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <div className="flex-1">
                  <p className={`text-sm text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? '15 استفسار عميل جديد' : '15 new customer inquiries'}
                  </p>
                  <p className="text-xs text-gray-400">
                    {language === 'ar' ? 'منذ 30 دقيقة' : '30 minutes ago'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    chat: {
      title: language === 'ar' ? 'المحادثة' : 'Chat',
      content: (
        <div className="space-y-4">
          {/* Chat Header */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-white/10 rounded-lg">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className={`font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'حكمة الذكي' : 'Hikma AI'}
              </h3>
              <p className="text-xs text-green-400">
                {language === 'ar' ? 'متاح الآن' : 'Online now'}
              </p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="space-y-3 max-h-64 overflow-y-auto">
            <div className="flex justify-start">
              <div className="bg-white/10 p-3 rounded-lg max-w-xs">
                <p className={`text-sm text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' 
                    ? 'مرحباً أحمد! كيف يمكنني مساعدتك في تحسين مطعمك اليوم؟'
                    : 'Hello Ahmed! How can I help improve your restaurant today?'
                  }
                </p>
                <p className="text-xs text-gray-400 mt-1">2:30 PM</p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <div className="bg-primary-600 p-3 rounded-lg max-w-xs">
                <p className={`text-sm text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar'
                    ? 'أريد تحسين خدمة العملاء خلال رمضان'
                    : 'I want to improve customer service during Ramadan'
                  }
                </p>
                <p className="text-xs text-blue-200 mt-1">2:32 PM</p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-white/10 p-3 rounded-lg max-w-xs">
                <p className={`text-sm text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar'
                    ? 'ممتاز! إليك 3 استراتيجيات مخصصة لمطعمك خلال رمضان...'
                    : 'Excellent! Here are 3 customized strategies for your restaurant during Ramadan...'
                  }
                </p>
                <p className="text-xs text-gray-400 mt-1">2:33 PM</p>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <button className="p-2 bg-green-600 rounded-full">
              <Mic className="w-4 h-4 text-white" />
            </button>
            <input
              type="text"
              placeholder={language === 'ar' ? 'اكتب رسالة...' : 'Type a message...'}
              className={`flex-1 px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}
              dir="auto"
            />
            <button className="p-2 bg-primary-600 rounded-full">
              <MessageCircle className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )
    },
    analytics: {
      title: language === 'ar' ? 'التحليلات' : 'Analytics',
      content: (
        <div className="space-y-4">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-green-500/20 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">35%</div>
              <div className={`text-xs text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'توفير الوقت' : 'Time Saved'}
              </div>
            </div>
            <div className="p-4 bg-blue-500/20 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-400">AED 12K</div>
              <div className={`text-xs text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'توفير شهري' : 'Monthly Savings'}
              </div>
            </div>
            <div className="p-4 bg-purple-500/20 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-400">92%</div>
              <div className={`text-xs text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'رضا العملاء' : 'Customer Satisfaction'}
              </div>
            </div>
            <div className="p-4 bg-yellow-500/20 rounded-lg text-center">
              <div className="text-2xl font-bold text-yellow-400">156</div>
              <div className={`text-xs text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'طلبات اليوم' : 'Today\'s Orders'}
              </div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="p-4 bg-white/5 rounded-lg">
            <h4 className={`text-white font-medium mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'أداء هذا الأسبوع' : 'This Week\'s Performance'}
            </h4>
            <div className="h-32 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded flex items-end justify-around p-2">
              {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
                <div
                  key={index}
                  className="bg-primary-500 rounded-t"
                  style={{ height: `${height}%`, width: '10px' }}
                ></div>
              ))}
            </div>
          </div>

          {/* Recent Insights */}
          <div className="space-y-2">
            <h4 className={`text-white font-medium ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'رؤى ذكية' : 'AI Insights'}
            </h4>
            <div className="p-3 bg-white/5 rounded-lg">
              <p className={`text-sm text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'ذروة الطلبات متوقعة في الساعة 7:30 مساءً اليوم'
                  : 'Peak orders expected at 7:30 PM today'
                }
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {language === 'ar' ? 'بناءً على البيانات التاريخية' : 'Based on historical data'}
              </p>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={`text-4xl lg:text-6xl font-extralight tracking-tight mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              <span className="gradient-text font-bold">
                {language === 'ar' ? 'تطبيق حكمة ديجيتال' : 'Hikma Digital Mobile'}
              </span>
              <br />
              <span className="text-white font-light">
                {language === 'ar' ? 'للهواتف الذكية' : 'App Experience'}
              </span>
            </h1>
            <p className={`text-xl font-light text-gray-300 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'تجربة محسنة للهواتف المحمولة مع دعم الصوت بالعربية والتفاعل باللمس'
                : 'Optimized mobile experience with Arabic voice support and touch interactions'
              }
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mobile Preview */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[640px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-6 py-2 text-white text-sm">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-6 h-3 border border-white rounded-sm">
                        <div className="w-4 h-full bg-white rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-4 py-3 border-b border-gray-800">
                    <div className="flex items-center justify-between">
                      <h2 className={`text-lg font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {mobileScreens[activeScreen].title}
                      </h2>
                      <div className="flex items-center space-x-2">
                        <Bell className="w-5 h-5 text-gray-400" />
                        <Settings className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-4 h-[480px] overflow-y-auto">
                    {mobileScreens[activeScreen].content}
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md border-t border-gray-800">
                    <div className="flex items-center justify-around py-2">
                      <button
                        onClick={() => setActiveScreen('home')}
                        className={`p-3 rounded-lg transition-colors ${
                          activeScreen === 'home' ? 'bg-primary-500/20 text-primary-400' : 'text-gray-400'
                        }`}
                      >
                        <Smartphone className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setActiveScreen('chat')}
                        className={`p-3 rounded-lg transition-colors ${
                          activeScreen === 'chat' ? 'bg-primary-500/20 text-primary-400' : 'text-gray-400'
                        }`}
                      >
                        <MessageCircle className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setActiveScreen('analytics')}
                        className={`p-3 rounded-lg transition-colors ${
                          activeScreen === 'analytics' ? 'bg-primary-500/20 text-primary-400' : 'text-gray-400'
                        }`}
                      >
                        <BarChart3 className="w-5 h-5" />
                      </button>
                      <button className="p-3 rounded-lg text-gray-400">
                        <User className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Action Button */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -right-4 top-1/2 transform -translate-y-1/2"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Mic className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Features & Installation */}
          <div className="space-y-8">
            {/* Key Features */}
            <div>
              <h2 className={`text-2xl font-light mb-6 text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'الميزات الرئيسية' : 'Key Features'}
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Mic,
                    title: language === 'ar' ? 'رسائل صوتية بالعربية' : 'Arabic Voice Messages',
                    description: language === 'ar' 
                      ? 'تحدث بالعربية واحصل على ردود فورية من الذكاء الاصطناعي'
                      : 'Speak in Arabic and get instant AI responses'
                  },
                  {
                    icon: MessageCircle,
                    title: language === 'ar' ? 'دردشة ذكية' : 'Smart Chat',
                    description: language === 'ar'
                      ? 'محادثات ثنائية اللغة مع فهم السياق الثقافي'
                      : 'Bilingual conversations with cultural context understanding'
                  },
                  {
                    icon: BarChart3,
                    title: language === 'ar' ? 'تحليلات في الوقت الفعلي' : 'Real-time Analytics',
                    description: language === 'ar'
                      ? 'مراقبة أداء عملك وتلقي رؤى ذكية'
                      : 'Monitor your business performance and receive smart insights'
                  },
                  {
                    icon: Bell,
                    title: language === 'ar' ? 'إشعارات ذكية' : 'Smart Notifications',
                    description: language === 'ar'
                      ? 'تنبيهات مخصصة بناءً على أنماط عملك'
                      : 'Personalized alerts based on your business patterns'
                  }
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 rtl:space-x-reverse"
                    >
                      <div className="p-3 bg-primary-500/20 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <h3 className={`font-medium text-white mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {feature.title}
                        </h3>
                        <p className={`text-gray-300 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Installation */}
            <div className="glass-card p-6">
              <h3 className={`text-xl font-medium text-white mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'تثبيت التطبيق' : 'Install the App'}
              </h3>
              
              {isInstallable ? (
                <div className="space-y-4">
                  <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar'
                      ? 'ثبت تطبيق حكمة ديجيتال على هاتفك للحصول على تجربة أفضل'
                      : 'Install Hikma Digital app on your phone for the best experience'
                    }
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={installPWA}
                    disabled={isInstalling}
                    className={`w-full flex items-center justify-center space-x-3 rtl:space-x-reverse py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50 ${isRTL ? 'font-arabic' : 'font-inter'}`}
                  >
                    {isInstalling ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <Download className="w-5 h-5" />
                    )}
                    <span>
                      {isInstalling 
                        ? (language === 'ar' ? 'جاري التثبيت...' : 'Installing...')
                        : (language === 'ar' ? 'تثبيت التطبيق' : 'Install App')
                      }
                    </span>
                  </motion.button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <p className={`text-green-400 font-medium ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'التطبيق مثبت بالفعل!' : 'App already installed!'}
                  </p>
                </div>
              )}

              {/* App Store Badges */}
              <div className="mt-6 space-y-3">
                <p className={`text-sm text-gray-400 text-center ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'أو حمل من:' : 'Or download from:'}
                </p>
                <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-black rounded-lg border border-gray-700">
                    <Play className="w-5 h-5 text-green-400" />
                    <div className="text-left rtl:text-right">
                      <div className="text-xs text-gray-400">GET IT ON</div>
                      <div className="text-sm font-medium text-white">Google Play</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-black rounded-lg border border-gray-700">
                    <div className="w-5 h-5 bg-white rounded text-black flex items-center justify-center text-xs font-bold">
                      
                    </div>
                    <div className="text-left rtl:text-right">
                      <div className="text-xs text-gray-400">Download on the</div>
                      <div className="text-sm font-medium text-white">App Store</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="glass-card p-6">
              <h3 className={`text-xl font-medium text-white mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'آراء المستخدمين' : 'User Reviews'}
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: language === 'ar' ? 'أحمد محمد' : 'Ahmed Mohammed',
                    business: language === 'ar' ? 'مطعم الأصالة' : 'Al-Asala Restaurant',
                    rating: 5,
                    review: language === 'ar'
                      ? 'التطبيق ساعدني كثيراً في تحسين خدمة العملاء. الدعم بالعربية ممتاز!'
                      : 'The app helped me greatly improve customer service. Arabic support is excellent!'
                  },
                  {
                    name: language === 'ar' ? 'فاطمة الزهراء' : 'Fatima Al-Zahra',
                    business: language === 'ar' ? 'بوتيك الأناقة' : 'Elegance Boutique',
                    rating: 5,
                    review: language === 'ar'
                      ? 'سهل الاستخدام ونتائج سريعة. أنصح به لكل صاحب عمل في دبي.'
                      : 'Easy to use with quick results. I recommend it to every business owner in Dubai.'
                  }
                ].map((review, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className={`font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {review.name}
                        </h4>
                        <p className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {review.business}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {review.review}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;