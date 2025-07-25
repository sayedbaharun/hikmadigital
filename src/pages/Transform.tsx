import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Users, 
  Target,
  BarChart3,
  Zap,
  Award,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TransformProps {
  openContactForm?: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const Transform: React.FC<TransformProps> = ({ openContactForm }) => {
  const { isRTL, language } = useLanguage();
  const [selectedMonth, setSelectedMonth] = useState(1);

  const transformationPhases = [
    {
      month: 1,
      title: language === 'ar' ? 'الاكتشاف والتقييم' : 'Discovery & Assessment',
      description: language === 'ar' ? 'تقييم جاهزية الذكاء الاصطناعي وتحديد الفرص' : 'AI readiness evaluation and opportunity identification',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      tasks: [
        language === 'ar' ? 'تقييم جاهزية الذكاء الاصطناعي' : 'AI readiness evaluation',
        language === 'ar' ? 'رسم خريطة قدرات الفريق' : 'Team capability mapping',
        language === 'ar' ? 'تقييم التوافق الثقافي' : 'Cultural fit assessment',
        language === 'ar' ? 'إعداد امتثال ميثاق الإمارات' : 'UAE Charter compliance setup'
      ],
      deliverables: [
        language === 'ar' ? 'تقرير التقييم الشامل' : 'Comprehensive assessment report',
        language === 'ar' ? 'خطة التحول المخصصة' : 'Customized transformation roadmap',
        language === 'ar' ? 'اختيار فريق الذكاء الاصطناعي والخبراء البشريين' : 'AI-Human team selection'
      ]
    },
    {
      month: 2,
      title: language === 'ar' ? 'التنفيذ والتدريب' : 'Implementation & Training',
      description: language === 'ar' ? 'نشر وكلاء الذكاء الاصطناعي وتدريب الفريق' : 'AI agent deployment and team training',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      tasks: [
        language === 'ar' ? 'نشر وكيل الذكاء الاصطناعي' : 'AI agent deployment',
        language === 'ar' ? 'إقران المدرب البشري' : 'Human coach pairing',
        language === 'ar' ? 'جلسات تدريب الموظفين' : 'Staff training sessions',
        language === 'ar' ? 'تكامل العمليات' : 'Process integration'
      ],
      deliverables: [
        language === 'ar' ? 'وكلاء ذكاء اصطناعي مدربون' : 'Trained AI agents',
        language === 'ar' ? 'فريق مدرب' : 'Trained team members',
        language === 'ar' ? 'عمليات متكاملة' : 'Integrated processes'
      ]
    },
    {
      month: 3,
      title: language === 'ar' ? 'التحسين والتوسع' : 'Optimization & Mastery',
      description: language === 'ar' ? 'مراقبة الأداء وتحسين الكفاءة وتفعيل الميزات المتقدمة' : 'Performance monitoring, efficiency improvements, and advanced features activation',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      tasks: [
        language === 'ar' ? 'مراقبة الأداء' : 'Performance monitoring',
        language === 'ar' ? 'تحسينات الكفاءة' : 'Efficiency improvements',
        language === 'ar' ? 'قياس العائد على الاستثمار' : 'ROI measurement',
        language === 'ar' ? 'تحسين الاستراتيجية' : 'Strategy refinement',
        language === 'ar' ? 'تفعيل الميزات المتقدمة' : 'Advanced features activation',
        language === 'ar' ? 'تخطيط التوسع' : 'Expansion planning',
        language === 'ar' ? 'احتفال بالنجاح' : 'Success celebration',
        language === 'ar' ? 'إعداد التحسين المستمر' : 'Continuous improvement setup'
      ],
      deliverables: [
        language === 'ar' ? 'تقرير تحسين الأداء' : 'Performance optimization report',
        language === 'ar' ? 'مقاييس العائد على الاستثمار' : 'ROI metrics',
        language === 'ar' ? 'استراتيجية محسنة' : 'Refined strategy',
        language === 'ar' ? 'منصة محسنة بالكامل' : 'Fully optimized platform',
        language === 'ar' ? 'خطة النمو' : 'Growth plan',
        language === 'ar' ? 'شهادة الإنجاز' : 'Completion certificate'
      ]
    }
  ];

  const successStories = [
    {
      business: language === 'ar' ? 'مطعم الأصالة' : 'Al-Asala Restaurant',
      industry: language === 'ar' ? 'المطاعم' : 'Restaurant',
      improvement: '40%',
      metric: language === 'ar' ? 'توفير الوقت خلال رمضان' : 'time savings during Ramadan',
      description: language === 'ar' 
        ? 'تحسين خدمة العملاء وإدارة الطلبات خلال ساعات الإفطار المزدحمة'
        : 'Improved customer service and order management during busy Iftar hours'
    },
    {
      business: language === 'ar' ? 'بوتيك دبي للأزياء' : 'Dubai Fashion Boutique',
      industry: language === 'ar' ? 'التجزئة' : 'Retail',
      improvement: '30%',
      metric: language === 'ar' ? 'تقليل التكاليف' : 'cost reduction',
      description: language === 'ar'
        ? 'تحسين إدارة المخزون والتنبؤ بالطلب لمهرجان دبي للتسوق'
        : 'Optimized inventory management and demand forecasting for Dubai Shopping Festival'
    },
    {
      business: language === 'ar' ? 'خدمات النقل السريع' : 'Express Logistics Services',
      industry: language === 'ar' ? 'اللوجستيات' : 'Logistics',
      improvement: '50%',
      metric: language === 'ar' ? 'تحسين سرعة الاستجابة' : 'faster response time',
      description: language === 'ar'
        ? 'أتمتة التواصل مع العملاء وتحسين مسارات التوصيل'
        : 'Automated customer communication and optimized delivery routes'
    }
  ];

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
            <h1 className={`text-2xl lg:text-3xl font-semibold tracking-tight mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              <span className="gradient-text font-bold">
                {language === 'ar' ? 'رحلة تحول عملك' : 'Your Business Transformation'}
              </span>
              <br />
              <span className="text-primary">
                {language === 'ar' ? 'خلال 90 يوماً' : 'Journey in 90 Days'}
              </span>
            </h1>
            <p className={`text-xl  text-secondary max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'من العمليات التقليدية إلى الكفاءة المعززة بالذكاء الاصطناعي - تتبع كل خطوة في تطور شركتك الصغيرة والمتوسطة'
                : 'From traditional operations to AI-enhanced efficiency - track every step of your SME evolution'
              }
            </p>
          </motion.div>
        </div>

        {/* Transformation Timeline */}
        <div className="mb-20">
          <h2 className={`text-xl font-semibold text-center mb-12 text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'مراحل التحول' : 'Transformation Phases'}
          </h2>

          {/* Month Selector */}
          <div className="flex justify-center mb-8">
            <div className="glass-card p-2 inline-flex space-x-2 rtl:space-x-reverse">
              {transformationPhases.map((phase) => (
                <button
                  key={phase.month}
                  onClick={() => setSelectedMonth(phase.month)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedMonth === phase.month
                      ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-primary'
                      : 'text-secondary hover:text-primary hover:bg-white/5'
                  } ${isRTL ? 'font-arabic' : 'font-inter'}`}
                >
                  {language === 'ar' ? `الشهر ${phase.month}` : `Month ${phase.month}`}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Phase Details */}
          {transformationPhases.map((phase) => (
            selectedMonth === phase.month && (
              <motion.div
                key={phase.month}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`p-4 bg-gradient-to-br ${phase.color} rounded-lg mr-4 rtl:ml-4 rtl:mr-0`}>
                        <phase.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-medium text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {phase.title}
                        </h3>
                        <p className={`text-secondary  ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {phase.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className={`text-lg font-medium text-primary mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'المهام الرئيسية' : 'Key Tasks'}
                      </h4>
                      <div className="space-y-3">
                        {phase.tasks.map((task, index) => (
                          <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                            <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                            <span className={`text-secondary  ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                              {task}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className={`text-lg font-medium text-primary mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'المخرجات المتوقعة' : 'Expected Deliverables'}
                    </h4>
                    <div className="space-y-4">
                      {phase.deliverables.map((deliverable, index) => (
                        <div key={index} className="glass-card p-4">
                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                              <span className="text-primary text-sm font-medium">{index + 1}</span>
                            </div>
                            <span className={`text-primary  ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                              {deliverable}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {language === 'ar' ? 'التقدم' : 'Progress'}
                        </span>
                        <span className="text-sm text-primary-400 font-medium">
                          {phase.month * 33}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${phase.month * 33}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className={`text-xl font-semibold tracking-tight mb-4 text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'قصص نجاح حقيقية' : 'Real Success Stories'}
            </h2>
            <p className={`text-lg  text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' 
                ? 'شركات صغيرة ومتوسطة في دبي حققت نتائج ملموسة'
                : 'Dubai SMEs achieving measurable results'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="text-2xl font-semibold gradient-text mb-2">
                    {story.improvement}
                  </div>
                  <div className={`text-sm text-gray-400  ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {story.metric}
                  </div>
                </div>

                <h3 className={`text-lg font-medium text-primary mb-2 text-center ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {story.business}
                </h3>
                
                <div className="text-center mb-4">
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">
                    {story.industry}
                  </span>
                </div>

                <p className={`text-secondary  text-center ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {story.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-12">
            <h2 className={`text-xl font-semibold tracking-tight mb-6 text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'هل أنت مستعد لبدء تحولك؟' : 'Ready to Start Your Transformation?'}
            </h2>
            <p className={`text-lg  text-secondary mb-8 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'انضم إلى مئات الشركات الصغيرة والمتوسطة في دبي التي تحولت بالفعل مع فريقنا من الذكاء الاصطناعي والخبراء البشريين'
                : 'Join hundreds of Dubai SMEs that have already transformed with our human-AI team'
              }
            </p>
            <motion.button
              onClick={() => openContactForm && openContactForm('general')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-primary font-medium rounded-lg glow-effect hover:shadow-xl transition-all duration-300 group ${isRTL ? 'font-arabic' : 'font-inter'}`}
            >
              <Calendar className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {language === 'ar' ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Transform;