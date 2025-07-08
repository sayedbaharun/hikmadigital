import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  MessageCircle, 
  Users, 
  Bot, 
  User, 
  Send, 
  Mic, 
  Video,
  BarChart3,
  CheckCircle,
  Download,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AutomationShowcase from '../components/AutomationShowcase';

interface DemoProps {
  openContactForm?: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const Demo: React.FC<DemoProps> = ({ openContactForm }) => {
  const { t, isRTL, language } = useLanguage();
  const [selectedBusiness, setSelectedBusiness] = useState('restaurant');
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [chatMessages, setChatMessages] = useState<Array<{id: number, sender: 'user' | 'ai' | 'human', message: string, timestamp: Date}>>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [demoStep, setDemoStep] = useState(0);

  const businessTypes = [
    { 
      id: 'restaurant', 
      name: language === 'ar' ? 'مطعم' : 'Restaurant',
      icon: '🍽️',
      color: 'from-orange-500 to-red-500'
    },
    { 
      id: 'retail', 
      name: language === 'ar' ? 'تجارة التجزئة' : 'Retail',
      icon: '🛍️',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'logistics', 
      name: language === 'ar' ? 'اللوجستيات' : 'Logistics',
      icon: '🚚',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'realestate', 
      name: language === 'ar' ? 'العقارات' : 'Real Estate',
      icon: '🏢',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      id: 'consulting', 
      name: language === 'ar' ? 'استشارات' : 'Consulting',
      icon: '💼',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const demoScenarios = {
    restaurant: {
      en: [
        {
          title: "Ahmed's Restaurant: Ramadan Optimization",
          description: "Help Ahmed optimize customer service during Ramadan peak hours",
          initialMessage: "كيف يمكنني تحسين خدمة العملاء خلال رمضان؟",
          aiResponse: "I understand you want to optimize customer service during Ramadan. Let me analyze your current operations and suggest improvements for Iftar rush hours.",
          humanResponse: "As someone who's worked with 50+ Dubai restaurants during Ramadan, I can add that cultural sensitivity in service timing is crucial. Let me share specific strategies.",
          metrics: { timeSaving: "35%", costReduction: "AED 12,000", satisfaction: "92%" }
        }
      ],
      ar: [
        {
          title: "مطعم أحمد: تحسين رمضان",
          description: "ساعد أحمد في تحسين خدمة العملاء خلال ساعات الذروة في رمضان",
          initialMessage: "كيف يمكنني تحسين خدمة العملاء خلال رمضان؟",
          aiResponse: "أفهم أنك تريد تحسين خدمة العملاء خلال رمضان. دعني أحلل عملياتك الحالية وأقترح تحسينات لساعات الذروة في الإفطار.",
          humanResponse: "كشخص عمل مع أكثر من 50 مطعماً في دبي خلال رمضان، يمكنني إضافة أن الحساسية الثقافية في توقيت الخدمة أمر بالغ الأهمية.",
          metrics: { timeSaving: "35%", costReduction: "12,000 درهم", satisfaction: "92%" }
        }
      ]
    },
    retail: {
      en: [
        {
          title: "Fatima's Boutique: Shopping Festival Prep",
          description: "Inventory optimization for Dubai Shopping Festival",
          initialMessage: "I need help with inventory management for the Dubai Shopping Festival",
          aiResponse: "I'll analyze your sales data from previous festivals and predict demand patterns. Here's a data-driven inventory strategy.",
          humanResponse: "From my experience with Dubai retail, I recommend focusing on these specific product categories that perform exceptionally well during DSF.",
          metrics: { timeSaving: "42%", costReduction: "AED 18,500", satisfaction: "89%" }
        }
      ],
      ar: [
        {
          title: "بوتيك فاطمة: التحضير لمهرجان التسوق",
          description: "تحسين المخزون لمهرجان دبي للتسوق",
          initialMessage: "أحتاج مساعدة في إدارة المخزون لمهرجان دبي للتسوق",
          aiResponse: "سأحلل بيانات مبيعاتك من المهرجانات السابقة وأتنبأ بأنماط الطلب. إليك استراتيجية مخزون مدفوعة بالبيانات.",
          humanResponse: "من خبرتي مع تجارة التجزئة في دبي، أنصح بالتركيز على فئات المنتجات المحددة هذه التي تحقق أداءً استثنائياً خلال مهرجان دبي للتسوق.",
          metrics: { timeSaving: "42%", costReduction: "18,500 درهم", satisfaction: "89%" }
        }
      ]
    }
  };

  const startDemo = (businessType: string, scenarioIndex: number) => {
    setSelectedBusiness(businessType);
    setSelectedScenario(scenarioIndex);
    setDemoStep(1);
    
    const scenario = demoScenarios[businessType][language][scenarioIndex];
    setChatMessages([
      {
        id: 1,
        sender: 'user',
        message: scenario.initialMessage,
        timestamp: new Date()
      }
    ]);

    // Simulate AI response
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        id: 2,
        sender: 'ai',
        message: scenario.aiResponse,
        timestamp: new Date()
      }]);
    }, 1500);

    // Simulate human coach joining
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        id: 3,
        sender: 'human',
        message: scenario.humanResponse,
        timestamp: new Date()
      }]);
    }, 3000);
  };

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
              <span className="gradient-text font-bold">{t('demo.title')}</span>
            </h1>
            <p className={`text-xl font-light text-gray-300 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {t('demo.subtitle')}
            </p>
          </motion.div>
        </div>

        {demoStep === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Business Type Selection */}
            <div className="mb-12">
              <h2 className={`text-2xl font-light text-center mb-8 text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'اختر نوع عملك' : 'Choose Your Business Type'}
              </h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {businessTypes.map((business) => (
                  <motion.button
                    key={business.id}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedBusiness(business.id)}
                    className={`glass-card glass-card-hover p-6 text-center transition-all duration-300 ${
                      selectedBusiness === business.id ? 'ring-2 ring-primary-500 bg-primary-500/10' : ''
                    }`}
                  >
                    <div className="text-4xl mb-3">{business.icon}</div>
                    <h3 className={`font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {business.name}
                    </h3>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Demo Scenarios */}
            {selectedBusiness && demoScenarios[selectedBusiness] && (
              <div className="mb-12">
                <h2 className={`text-2xl font-light text-center mb-8 text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'اختر السيناريو' : 'Choose Demo Scenario'}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {demoScenarios[selectedBusiness][language].map((scenario, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-card p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                      onClick={() => startDemo(selectedBusiness, index)}
                    >
                      <h3 className={`text-xl font-medium text-white mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {scenario.title}
                      </h3>
                      <p className={`text-gray-300 font-light mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {scenario.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse text-primary-400">
                          <Play className="w-4 h-4" />
                          <span className={`text-sm ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                            {language === 'ar' ? 'ابدأ العرض التوضيحي' : 'Start Demo'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          <Bot className="w-4 h-4 text-purple-400" />
                          <User className="w-4 h-4 text-blue-400" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {demoStep === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <div className="glass-card p-6 h-96">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'جلسة التدريب المباشرة' : 'Live Coaching Session'}
                  </h3>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-purple-400">AI Active</span>
                    </div>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-blue-400">Human Coach</span>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                  {chatMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'user' ? (isRTL ? 'justify-start' : 'justify-end') : (isRTL ? 'justify-end' : 'justify-start')}`}
                    >
                      <div className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white'
                          : msg.sender === 'ai'
                          ? 'bg-purple-500/20 border border-purple-500/30 text-purple-100'
                          : 'bg-blue-500/20 border border-blue-500/30 text-blue-100'
                      } ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse mb-1">
                          {msg.sender === 'ai' && <Bot className="w-3 h-3" />}
                          {msg.sender === 'human' && <User className="w-3 h-3" />}
                          <span className="text-xs opacity-75">
                            {msg.sender === 'ai' ? 'Hikma AI' : msg.sender === 'human' ? 'Human Coach' : 'You'}
                          </span>
                        </div>
                        <p className="text-sm font-light">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="flex space-x-2 rtl:space-x-reverse">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder={language === 'ar' ? 'اكتب رسالتك...' : 'Type your message...'}
                    className={`flex-1 px-4 py-2 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300">
                    <Send className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 glass-card glass-card-hover text-gray-300 rounded-lg">
                    <Mic className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="space-y-6">
              {/* Real-time Metrics */}
              <div className="glass-card p-6">
                <h4 className={`text-lg font-medium text-white mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'النتائج المتوقعة' : 'Projected Results'}
                </h4>
                {selectedBusiness && demoScenarios[selectedBusiness] && (
                  <div className="space-y-4">
                    {Object.entries(demoScenarios[selectedBusiness][language][selectedScenario].metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {key === 'timeSaving' ? (language === 'ar' ? 'توفير الوقت' : 'Time Saving') :
                           key === 'costReduction' ? (language === 'ar' ? 'تقليل التكاليف' : 'Cost Reduction') :
                           (language === 'ar' ? 'رضا العملاء' : 'Satisfaction')}
                        </span>
                        <span className="text-primary-400 font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* UAE Charter Compliance */}
              <div className="glass-card p-6">
                <h4 className={`text-lg font-medium text-white mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'امتثال ميثاق الإمارات' : 'UAE Charter Compliance'}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'الشفافية' : 'Transparency'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'الإشراف البشري' : 'Human Oversight'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'الذكاء الثقافي' : 'Cultural Intelligence'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Plan Download */}
              <motion.button
                onClick={() => openContactForm && openContactForm('general')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full flex items-center justify-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-lg glow-effect ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                <Download className="w-4 h-4" />
                <span>{language === 'ar' ? 'تحميل خطة العمل' : 'Download Action Plan'}</span>
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Automation Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className={`text-3xl lg:text-4xl font-extralight tracking-tight mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              <span className="gradient-text font-bold">
                {language === 'ar' ? 'عروض الأتمتة الحية' : 'Live Automation Demonstrations'}
              </span>
            </h2>
            <p className={`text-lg font-light text-gray-300 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' 
                ? 'شاهد كيف تعمل حلول الأتمتة الذكية لدينا في الوقت الفعلي مع احترام الثقافة والقيم المحلية'
                : 'Watch our intelligent automation solutions work in real-time with cultural awareness and local values'}
            </p>
          </div>
          
          <AutomationShowcase />
        </motion.div>
      </div>
    </div>
  );
};

export default Demo;