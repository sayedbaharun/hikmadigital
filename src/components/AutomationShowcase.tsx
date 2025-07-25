import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  Play,
  Pause,
  RefreshCw,
  MessageSquare,
  ShoppingBag,
  Package,
  TrendingUp,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Moon,
  Sun
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AutomationDemo {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: React.ReactNode;
  color: string;
  steps: Array<{
    title: string;
    titleAr: string;
    duration: number;
  }>;
  metrics: {
    timeSaved: string;
    efficiency: string;
    satisfaction: string;
    special?: { label: string; labelAr: string; value: string };
  };
}

const AutomationShowcase: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [demoProgress, setDemoProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const automations: AutomationDemo[] = [
    {
      id: 'prayer-scheduler',
      title: 'Prayer Time Meeting Scheduler',
      titleAr: 'جدولة الاجتماعات حسب أوقات الصلاة',
      description: 'Automatically schedules meetings while respecting prayer times',
      descriptionAr: 'يجدول الاجتماعات تلقائياً مع احترام أوقات الصلاة',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-purple-500 to-indigo-500',
      steps: [
        { title: 'Fetch Prayer Times', titleAr: 'جلب أوقات الصلاة', duration: 1000 },
        { title: 'Analyze Calendar', titleAr: 'تحليل التقويم', duration: 1500 },
        { title: 'Optimize Schedule', titleAr: 'تحسين الجدول', duration: 2000 },
        { title: 'Send Invitations', titleAr: 'إرسال الدعوات', duration: 1000 }
      ],
      metrics: {
        timeSaved: '45 min/day',
        efficiency: '+35%',
        satisfaction: '96%',
        special: { label: 'Conflicts Avoided', labelAr: 'تجنب التعارضات', value: '8/day' }
      }
    },
    {
      id: 'ramadan-campaign',
      title: 'Ramadan Campaign Generator',
      titleAr: 'مولد حملات رمضان',
      description: 'Creates culturally-aware content for Ramadan marketing',
      descriptionAr: 'ينشئ محتوى تسويقي مناسب ثقافياً لرمضان',
      icon: <Moon className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      steps: [
        { title: 'Analyze Brand Voice', titleAr: 'تحليل صوت العلامة', duration: 1500 },
        { title: 'Generate Content', titleAr: 'إنشاء المحتوى', duration: 2500 },
        { title: 'Cultural Adaptation', titleAr: 'التكيف الثقافي', duration: 2000 },
        { title: 'Schedule Posts', titleAr: 'جدولة المنشورات', duration: 1000 }
      ],
      metrics: {
        timeSaved: '20 hrs/month',
        efficiency: '+285%',
        satisfaction: '98%',
        special: { label: 'Engagement Boost', labelAr: 'زيادة التفاعل', value: '+180%' }
      }
    },
    {
      id: 'inventory-optimizer',
      title: 'Dubai Events Inventory Optimizer',
      titleAr: 'محسن المخزون لفعاليات دبي',
      description: 'Adjusts inventory based on Dubai shopping festivals and events',
      descriptionAr: 'يضبط المخزون بناءً على مهرجانات التسوق والفعاليات في دبي',
      icon: <Package className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      steps: [
        { title: 'Scan Upcoming Events', titleAr: 'مسح الفعاليات القادمة', duration: 1000 },
        { title: 'Analyze Sales Patterns', titleAr: 'تحليل أنماط المبيعات', duration: 2000 },
        { title: 'Calculate Demand', titleAr: 'حساب الطلب', duration: 1500 },
        { title: 'Update Inventory', titleAr: 'تحديث المخزون', duration: 1500 }
      ],
      metrics: {
        timeSaved: '30 hrs/event',
        efficiency: '+23%',
        satisfaction: '94%',
        special: { label: 'Waste Reduction', labelAr: 'تقليل الهدر', value: '-41%' }
      }
    }
  ];

  const runDemo = async (demoId: string) => {
    const demo = automations.find(a => a.id === demoId);
    if (!demo || isRunning) return;

    setActiveDemo(demoId);
    setIsRunning(true);
    setDemoProgress(0);

    // Run through each step
    for (let i = 0; i < demo.steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, demo.steps[i].duration));
      setDemoProgress((i + 1) / demo.steps.length * 100);
    }

    setIsRunning(false);
  };

  const resetDemo = () => {
    setActiveDemo(null);
    setDemoProgress(0);
    setIsRunning(false);
  };

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          <span className="gradient-text">
            {language === 'ar' ? 'عروض الأتمتة الحية' : 'Live Automation Demonstrations'}
          </span>
        </h2>
        <p className={`text-lg text-gray-300 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          {language === 'ar'
            ? 'شاهد كيف تعمل حلول الأتمتة لدينا في سيناريوهات الأعمال الحقيقية'
            : 'See how our automation solutions work in real business scenarios'}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {automations.map((automation, index) => (
          <motion.div
            key={automation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-card p-6 hover:bg-white/10 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className={`p-3 bg-gradient-to-r ${automation.color} rounded-lg`}>
                  {automation.icon}
                </div>
                <div>
                  <h3 className={`text-lg font-semibold text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? automation.titleAr : automation.title}
                  </h3>
                  <p className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? automation.descriptionAr : automation.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Representation */}
            <div className="relative mb-6 h-48 bg-black/50 rounded-lg overflow-hidden">
              {automation.id === 'prayer-scheduler' && (
                <div className="p-4">
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 text-xs">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                      <div key={i} className="text-center text-gray-500 font-medium">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 28 }, (_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.02 }}
                        className={`aspect-square flex items-center justify-center rounded text-xs ${
                          [5, 12, 19, 26].includes(i) ? 'bg-green-500/20 text-green-400' : 
                          [3, 10, 17, 24].includes(i) ? 'bg-red-500/20 text-red-400' : 
                          'bg-gray-800 text-gray-400'
                        }`}
                      >
                        {i + 1}
                      </motion.div>
                    ))}
                  </div>
                  {/* Prayer Time Indicators */}
                  <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs">
                    {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((prayer, i) => (
                      <div key={i} className="text-purple-400">
                        {prayer}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {automation.id === 'ramadan-campaign' && (
                <div className="p-4 space-y-2">
                  {/* Social Media Previews */}
                  {['Instagram', 'Twitter', 'LinkedIn'].map((platform, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                      className="bg-gray-800 p-3 rounded-lg flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-white">{platform}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3 text-green-400" />
                        <span className="text-xs text-green-400">+{180 + i * 20}%</span>
                      </div>
                    </motion.div>
                  ))}
                  <div className="text-center mt-4">
                    <Moon className="w-8 h-8 text-green-400 mx-auto animate-pulse" />
                    <p className="text-xs text-gray-400 mt-1">Ramadan Mubarak</p>
                  </div>
                </div>
              )}

              {automation.id === 'inventory-optimizer' && (
                <div className="p-4">
                  {/* Inventory Levels Chart */}
                  <div className="flex items-end justify-around h-32 mb-2">
                    {[60, 40, 80, 30, 90, 70, 85].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className={`w-8 rounded-t ${
                          i === 3 ? 'bg-yellow-500' : 
                          i === 4 ? 'bg-green-500' : 
                          'bg-blue-500'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-center space-y-1">
                    <div className="flex items-center justify-center space-x-4 text-xs">
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded mr-1" />
                        Normal
                      </span>
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded mr-1" />
                        DSF
                      </span>
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded mr-1" />
                        Expo
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Progress Overlay */}
              {activeDemo === automation.id && (
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${demoProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>

            {/* Steps */}
            <div className="space-y-2 mb-6">
              {automation.steps.map((step, stepIndex) => (
                <motion.div
                  key={stepIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: stepIndex * 0.1 }}
                  className={`flex items-center space-x-3 rtl:space-x-reverse p-2 rounded-lg transition-all ${
                    activeDemo === automation.id && demoProgress >= ((stepIndex + 1) / automation.steps.length * 100)
                      ? 'bg-primary-500/20 border border-primary-500/30'
                      : 'bg-gray-800/50'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    activeDemo === automation.id && demoProgress >= ((stepIndex + 1) / automation.steps.length * 100)
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {activeDemo === automation.id && demoProgress >= ((stepIndex + 1) / automation.steps.length * 100) ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      stepIndex + 1
                    )}
                  </div>
                  <span className={`text-sm ${
                    activeDemo === automation.id && demoProgress >= ((stepIndex + 1) / automation.steps.length * 100)
                      ? 'text-white'
                      : 'text-gray-400'
                  } ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? step.titleAr : step.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Metrics */}
            {activeDemo === automation.id && demoProgress === 100 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="mb-6 p-4 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg border border-primary-500/30"
              >
                <h4 className={`text-sm font-semibold text-white mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'النتائج المحققة' : 'Results Achieved'}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-gray-400">{language === 'ar' ? 'توفير الوقت' : 'Time Saved'}</p>
                    <p className="text-lg font-bold text-primary-400">{automation.metrics.timeSaved}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{language === 'ar' ? 'زيادة الكفاءة' : 'Efficiency'}</p>
                    <p className="text-lg font-bold text-green-400">{automation.metrics.efficiency}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{language === 'ar' ? 'رضا العملاء' : 'Satisfaction'}</p>
                    <p className="text-lg font-bold text-accent-400">{automation.metrics.satisfaction}</p>
                  </div>
                  {automation.metrics.special && (
                    <div>
                      <p className="text-xs text-gray-400">
                        {language === 'ar' ? automation.metrics.special.labelAr : automation.metrics.special.label}
                      </p>
                      <p className="text-lg font-bold text-yellow-400">{automation.metrics.special.value}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              {activeDemo === automation.id && isRunning ? (
                <button
                  onClick={() => setIsRunning(false)}
                  className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                >
                  <Pause className="w-4 h-4" />
                  <span className={isRTL ? 'font-arabic' : 'font-inter'}>
                    {language === 'ar' ? 'إيقاف' : 'Pause'}
                  </span>
                </button>
              ) : activeDemo === automation.id ? (
                <button
                  onClick={resetDemo}
                  className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 glass-card glass-card-hover text-gray-400 rounded-lg"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span className={isRTL ? 'font-arabic' : 'font-inter'}>
                    {language === 'ar' ? 'إعادة' : 'Reset'}
                  </span>
                </button>
              ) : (
                <button
                  onClick={() => runDemo(automation.id)}
                  className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                >
                  <Play className="w-4 h-4" />
                  <span className={isRTL ? 'font-arabic' : 'font-inter'}>
                    {language === 'ar' ? 'جربه' : 'Try It'}
                  </span>
                </button>
              )}
              
              <Sparkles className={`w-5 h-5 ${automation.color.includes('purple') ? 'text-purple-400' : 
                automation.color.includes('green') ? 'text-green-400' : 'text-yellow-400'}`} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AutomationShowcase;