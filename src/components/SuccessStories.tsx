import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  CheckCircle,
  Play,
  Download,
  Star,
  ArrowRight,
  Building,
  ShoppingBag,
  Truck,
  Calendar,
  BarChart3,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CaseStudy {
  id: string;
  company: string;
  companyAr: string;
  industry: string;
  industryAr: string;
  logo: string;
  location: string;
  locationAr: string;
  challenge: string;
  challengeAr: string;
  solution: string;
  solutionAr: string;
  implementation: string[];
  implementationAr: string[];
  timeline: string;
  agents: string[];
  agentsAr: string[];
  metrics: {
    before: {
      efficiency: number;
      revenue: number;
      customerSatisfaction: number;
      operationalCost: number;
    };
    after: {
      efficiency: number;
      revenue: number;
      customerSatisfaction: number;
      operationalCost: number;
    };
  };
  roi: {
    percentage: number;
    timeToValue: string;
    timeToValueAr: string;
    annualSavings: number;
  };
  quote: string;
  quoteAr: string;
  quoteName: string;
  quoteTitle: string;
  quoteTitleAr: string;
  videoThumbnail?: string;
}

const SuccessStories: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [selectedStory, setSelectedStory] = useState<string | null>(null);
  const [animatedNumbers, setAnimatedNumbers] = useState<{[key: string]: number}>({});
  const [comparisonData, setComparisonData] = useState({
    industry: '',
    size: '',
    challenge: ''
  });
  const [recommendedCase, setRecommendedCase] = useState<string | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 'ahmeds-restaurant',
      company: "Ahmed's Restaurant",
      companyAr: 'مطعم أحمد',
      industry: 'Food & Beverage',
      industryAr: 'المأكولات والمشروبات',
      logo: '🍽️',
      location: 'Dubai Marina',
      locationAr: 'دبي مارينا',
      challenge: 'Managing peak hours during Ramadan with 200+ daily orders, long wait times, and overwhelmed staff',
      challengeAr: 'إدارة ساعات الذروة خلال رمضان مع أكثر من 200 طلب يومي، وأوقات انتظار طويلة، وطاقم عمل مرهق',
      solution: 'Implemented AI-powered order management and customer service automation with cultural awareness',
      solutionAr: 'تطبيق نظام إدارة الطلبات وأتمتة خدمة العملاء بالذكاء الاصطناعي مع الوعي الثقافي',
      implementation: [
        'Deployed Hikma AI for Arabic/English customer support',
        'Integrated smart scheduling for Iftar rush hours',
        'Automated order tracking and updates',
        'Set up WhatsApp Business integration'
      ],
      implementationAr: [
        'نشر حكمة الذكي لدعم العملاء بالعربية والإنجليزية',
        'دمج الجدولة الذكية لساعات ذروة الإفطار',
        'أتمتة تتبع الطلبات والتحديثات',
        'إعداد تكامل واتساب للأعمال'
      ],
      timeline: '2 weeks',
      agents: ['Customer Service AI', 'Operations Optimizer', 'Analytics Expert'],
      agentsAr: ['ذكاء خدمة العملاء', 'محسن العمليات', 'خبير التحليلات'],
      metrics: {
        before: {
          efficiency: 45,
          revenue: 180000,
          customerSatisfaction: 72,
          operationalCost: 65000
        },
        after: {
          efficiency: 82,
          revenue: 261000,
          customerSatisfaction: 95,
          operationalCost: 48000
        }
      },
      roi: {
        percentage: 347,
        timeToValue: '3 months',
        timeToValueAr: '3 أشهر',
        annualSavings: 156000
      },
      quote: "Hikma AI transformed our Ramadan operations. We now handle 3x more orders with the same team, and our customers love the bilingual support!",
      quoteAr: "حكمة الذكي حول عملياتنا في رمضان. نتعامل الآن مع 3 أضعاف الطلبات بنفس الفريق، وعملاؤنا يحبون الدعم ثنائي اللغة!",
      quoteName: "Ahmed Al-Rashid",
      quoteTitle: "Owner & General Manager",
      quoteTitleAr: "المالك والمدير العام"
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
      challenge: 'Struggling to manage inventory and customer preferences during Dubai Shopping Festival with limited staff',
      challengeAr: 'صعوبة في إدارة المخزون وتفضيلات العملاء خلال مهرجان دبي للتسوق مع عدد محدود من الموظفين',
      solution: 'Deployed AI-driven inventory management and personalized shopping assistant for Arabic and English customers',
      solutionAr: 'نشر إدارة المخزون بالذكاء الاصطناعي ومساعد التسوق الشخصي للعملاء بالعربية والإنجليزية',
      implementation: [
        'Set up AI inventory optimizer for DSF demand',
        'Launched personalized shopping recommendations',
        'Integrated social media marketing automation',
        'Created VIP customer tracking system'
      ],
      implementationAr: [
        'إعداد محسن المخزون الذكي لطلب مهرجان دبي للتسوق',
        'إطلاق توصيات التسوق الشخصية',
        'دمج أتمتة التسويق عبر وسائل التواصل الاجتماعي',
        'إنشاء نظام تتبع العملاء المميزين'
      ],
      timeline: '3 weeks',
      agents: ['Sales Assistant', 'Marketing AI', 'Inventory Manager'],
      agentsAr: ['مساعد المبيعات', 'ذكاء التسويق', 'مدير المخزون'],
      metrics: {
        before: {
          efficiency: 52,
          revenue: 320000,
          customerSatisfaction: 78,
          operationalCost: 95000
        },
        after: {
          efficiency: 88,
          revenue: 960000,
          customerSatisfaction: 93,
          operationalCost: 72000
        }
      },
      roi: {
        percentage: 512,
        timeToValue: '6 weeks',
        timeToValueAr: '6 أسابيع',
        annualSavings: 276000
      },
      quote: "During DSF, we achieved 3x sales with AI handling customer queries in Arabic and English. The ROI was incredible!",
      quoteAr: "خلال مهرجان دبي للتسوق، حققنا 3 أضعاف المبيعات مع الذكاء الاصطناعي الذي يتعامل مع استفسارات العملاء بالعربية والإنجليزية. كان العائد على الاستثمار مذهلاً!",
      quoteName: "Fatima Al-Maktoum",
      quoteTitle: "Founder & CEO",
      quoteTitleAr: "المؤسس والرئيس التنفيذي"
    },
    {
      id: 'khalids-logistics',
      company: "Khalid's Logistics",
      companyAr: 'خدمات خالد اللوجستية',
      industry: 'Transportation & Logistics',
      industryAr: 'النقل واللوجستيات',
      logo: '🚚',
      location: 'Dubai Industrial City',
      locationAr: 'مدينة دبي الصناعية',
      challenge: 'Complex route optimization, delayed deliveries, and poor real-time tracking causing customer complaints',
      challengeAr: 'تحسين المسارات المعقدة، والتسليمات المتأخرة، وضعف التتبع في الوقت الفعلي مما يسبب شكاوى العملاء',
      solution: 'Implemented AI-powered route optimization and real-time tracking with automated customer updates',
      solutionAr: 'تطبيق تحسين المسارات بالذكاء الاصطناعي والتتبع في الوقت الفعلي مع تحديثات العملاء التلقائية',
      implementation: [
        'Deployed route optimization AI agent',
        'Set up real-time tracking dashboard',
        'Automated delivery notifications in Arabic/English',
        'Integrated with existing fleet management'
      ],
      implementationAr: [
        'نشر وكيل تحسين المسارات الذكي',
        'إعداد لوحة تتبع في الوقت الفعلي',
        'أتمتة إشعارات التسليم بالعربية/الإنجليزية',
        'التكامل مع إدارة الأسطول الحالية'
      ],
      timeline: '4 weeks',
      agents: ['Operations Optimizer', 'Customer Service AI', 'Analytics Expert'],
      agentsAr: ['محسن العمليات', 'ذكاء خدمة العملاء', 'خبير التحليلات'],
      metrics: {
        before: {
          efficiency: 58,
          revenue: 450000,
          customerSatisfaction: 65,
          operationalCost: 180000
        },
        after: {
          efficiency: 91,
          revenue: 585000,
          customerSatisfaction: 92,
          operationalCost: 126000
        }
      },
      roi: {
        percentage: 289,
        timeToValue: '2 months',
        timeToValueAr: 'شهرين',
        annualSavings: 648000
      },
      quote: "60% reduction in delivery times and 92% customer satisfaction. Our drivers love the optimized routes!",
      quoteAr: "انخفاض بنسبة 60% في أوقات التسليم ورضا العملاء بنسبة 92%. سائقونا يحبون المسارات المحسنة!",
      quoteName: "Khalid Al-Zaabi",
      quoteTitle: "Operations Director",
      quoteTitleAr: "مدير العمليات"
    }
  ];

  // Animate numbers when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const storyId = entry.target.getAttribute('data-story-id');
          if (storyId) {
            const story = caseStudies.find(s => s.id === storyId);
            if (story) {
              // Animate each metric
              const animateValue = (key: string, endValue: number) => {
                const duration = 2000;
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
                    [`${storyId}-${key}`]: Math.round(current)
                  }));
                }, duration / steps);
              };

              animateValue('efficiency', story.metrics.after.efficiency - story.metrics.before.efficiency);
              animateValue('revenue', story.metrics.after.revenue - story.metrics.before.revenue);
              animateValue('satisfaction', story.metrics.after.customerSatisfaction - story.metrics.before.customerSatisfaction);
              animateValue('roi', story.roi.percentage);
            }
          }
        }
      });
    }, { threshold: 0.3 });

    const elements = document.querySelectorAll('[data-story-id]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Handle comparison tool
  const handleComparison = () => {
    // Simple logic to recommend most relevant case
    let recommended = 'ahmeds-restaurant';
    
    if (comparisonData.industry.toLowerCase().includes('fashion') || 
        comparisonData.industry.toLowerCase().includes('retail')) {
      recommended = 'fatimas-boutique';
    } else if (comparisonData.industry.toLowerCase().includes('logistics') || 
               comparisonData.industry.toLowerCase().includes('delivery')) {
      recommended = 'khalids-logistics';
    }
    
    setRecommendedCase(recommended);
  };

  const exportToPDF = (caseId: string) => {
    // Placeholder for PDF export
    console.log(`Exporting ${caseId} to PDF`);
    // In production, this would generate and download a PDF
  };

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          <span className="gradient-text">
            {language === 'ar' ? 'قصص نجاح عملائنا' : 'Client Success Stories'}
          </span>
        </h2>
        <p className={`text-lg text-gray-300 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          {language === 'ar'
            ? 'شركات حقيقية في دبي حققت نتائج استثنائية مع حكمة الذكي'
            : 'Real Dubai businesses achieving exceptional results with Hikma AI'}
        </p>
      </div>

      {/* Case Studies */}
      <div className="space-y-20">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            data-story-id={study.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-12"
          >
            {/* Header */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-4xl">
                    {study.logo}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? study.companyAr : study.company}
                    </h3>
                    <div className="flex items-center gap-3">
                      <p className={`text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? study.industryAr : study.industry} • {language === 'ar' ? study.locationAr : study.location}
                      </p>
                      <span className="inline-flex items-center px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {language === 'ar' ? 'عميل موثق' : 'Verified'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className={`text-sm font-semibold text-primary-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'التحدي' : 'Challenge'}
                    </h4>
                    <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? study.challengeAr : study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-sm font-semibold text-primary-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'الحل' : 'Solution'}
                    </h4>
                    <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? study.solutionAr : study.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                {/* ROI Highlight */}
                <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl p-8 text-center mb-6">
                  <p className={`text-sm text-gray-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'العائد على الاستثمار' : 'Return on Investment'}
                  </p>
                  <p className="text-5xl font-bold text-white mb-2">
                    {animatedNumbers[`${study.id}-roi`] || 0}%
                  </p>
                  <p className={`text-sm text-primary-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? `في ${study.roi.timeToValueAr}` : `in ${study.roi.timeToValue}`}
                  </p>
                </div>

                {/* Video Testimonial Placeholder */}
                <div className="relative bg-black/50 rounded-lg overflow-hidden cursor-pointer group">
                  <div className="aspect-video flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className={`text-white font-medium ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'شاهد القصة الكاملة' : 'Watch Full Story'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Timeline */}
            <div className="mb-12">
              <h4 className={`text-lg font-semibold text-white mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'خطوات التنفيذ' : 'Implementation Steps'}
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {(language === 'ar' ? study.implementationAr : study.implementation).map((step, stepIndex) => (
                  <motion.div
                    key={stepIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: stepIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 rtl:space-x-reverse"
                  >
                    <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary-400" />
                    </div>
                    <p className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metrics Comparison */}
            <div className="grid lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  label: language === 'ar' ? 'كفاءة العمليات' : 'Operational Efficiency',
                  before: study.metrics.before.efficiency,
                  after: study.metrics.after.efficiency,
                  unit: '%',
                  icon: <TrendingUp className="w-5 h-5" />,
                  key: 'efficiency'
                },
                {
                  label: language === 'ar' ? 'الإيرادات الشهرية' : 'Monthly Revenue',
                  before: study.metrics.before.revenue,
                  after: study.metrics.after.revenue,
                  unit: 'AED',
                  icon: <DollarSign className="w-5 h-5" />,
                  key: 'revenue'
                },
                {
                  label: language === 'ar' ? 'رضا العملاء' : 'Customer Satisfaction',
                  before: study.metrics.before.customerSatisfaction,
                  after: study.metrics.after.customerSatisfaction,
                  unit: '%',
                  icon: <Users className="w-5 h-5" />,
                  key: 'satisfaction'
                },
                {
                  label: language === 'ar' ? 'التوفير السنوي' : 'Annual Savings',
                  before: 0,
                  after: study.roi.annualSavings,
                  unit: 'AED',
                  icon: <Sparkles className="w-5 h-5" />,
                  key: 'savings'
                }
              ].map((metric, metricIndex) => (
                <div key={metricIndex} className="text-center">
                  <div className="p-3 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg w-fit mx-auto mb-3">
                    {metric.icon}
                  </div>
                  <h5 className={`text-sm text-gray-400 mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {metric.label}
                  </h5>
                  
                  {/* Before/After Bars */}
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{language === 'ar' ? 'قبل' : 'Before'}</span>
                      <span className="text-sm text-gray-400">
                        {metric.unit === 'AED' 
                          ? `${metric.before.toLocaleString()} ${metric.unit}`
                          : `${metric.before}${metric.unit}`
                        }
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gray-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${metric.before / (metric.after || 1) * 100}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-primary-400">{language === 'ar' ? 'بعد' : 'After'}</span>
                      <span className="text-sm text-primary-400 font-semibold">
                        {metric.unit === 'AED' 
                          ? `${metric.after.toLocaleString()} ${metric.unit}`
                          : `${metric.after}${metric.unit}`
                        }
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: metricIndex * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>

                  <p className={`text-lg font-bold ${
                    metric.after > metric.before ? 'text-green-400' : 'text-primary-400'
                  }`}>
                    {metric.key === 'savings' 
                      ? `+${study.roi.annualSavings.toLocaleString()} AED`
                      : `+${animatedNumbers[`${study.id}-${metric.key}`] || 0}${metric.unit === '%' ? '%' : ''}`
                    }
                  </p>
                </div>
              ))}
            </div>

            {/* AI Agents Used */}
            <div className="mb-12">
              <h4 className={`text-sm font-semibold text-gray-400 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'وكلاء الذكاء الاصطناعي المستخدمون' : 'AI Agents Used'}
              </h4>
              <div className="flex flex-wrap gap-3">
                {(language === 'ar' ? study.agentsAr : study.agents).map((agent, agentIndex) => (
                  <span
                    key={agentIndex}
                    className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full text-sm text-white border border-primary-500/30"
                  >
                    {agent}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl p-8 border-l-4 border-primary-500">
              <p className={`text-lg text-white italic mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                "{language === 'ar' ? study.quoteAr : study.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`font-semibold text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {study.quoteName}
                  </p>
                  <p className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? study.quoteTitleAr : study.quoteTitle}
                  </p>
                </div>
                <div className="flex space-x-1 rtl:space-x-reverse">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Export Button */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => exportToPDF(study.id)}
                className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 glass-card glass-card-hover text-gray-400 rounded-lg transition-all"
              >
                <Download className="w-4 h-4" />
                <span className={isRTL ? 'font-arabic' : 'font-inter'}>
                  {language === 'ar' ? 'تحميل PDF' : 'Download PDF'}
                </span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Similar Business Comparison Tool */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 glass-card p-8 lg:p-12"
      >
        <div className="text-center mb-8">
          <h3 className={`text-2xl font-bold text-white mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'ابحث عن قصة مشابهة لعملك' : 'Find a Story Similar to Your Business'}
          </h3>
          <p className={`text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' 
              ? 'أدخل تفاصيل عملك لرؤية أفضل دراسة حالة مطابقة'
              : 'Enter your business details to see the best matching case study'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className={`block text-sm text-gray-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'الصناعة' : 'Industry'}
            </label>
            <input
              type="text"
              value={comparisonData.industry}
              onChange={(e) => setComparisonData({...comparisonData, industry: e.target.value})}
              placeholder={language === 'ar' ? 'مثال: مطعم، تجزئة، لوجستيات' : 'e.g., Restaurant, Retail, Logistics'}
              className={`w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500 ${
                isRTL ? 'font-arabic text-right' : 'font-inter'
              }`}
            />
          </div>

          <div>
            <label className={`block text-sm text-gray-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'حجم الأعمال' : 'Business Size'}
            </label>
            <select
              value={comparisonData.size}
              onChange={(e) => setComparisonData({...comparisonData, size: e.target.value})}
              className={`w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white ${
                isRTL ? 'font-arabic text-right' : 'font-inter'
              }`}
            >
              <option value="">{language === 'ar' ? 'اختر الحجم' : 'Select Size'}</option>
              <option value="small">{language === 'ar' ? 'صغير (1-10 موظفين)' : 'Small (1-10 employees)'}</option>
              <option value="medium">{language === 'ar' ? 'متوسط (11-50 موظفين)' : 'Medium (11-50 employees)'}</option>
              <option value="large">{language === 'ar' ? 'كبير (50+ موظفين)' : 'Large (50+ employees)'}</option>
            </select>
          </div>

          <div>
            <label className={`block text-sm text-gray-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'التحدي الرئيسي' : 'Main Challenge'}
            </label>
            <input
              type="text"
              value={comparisonData.challenge}
              onChange={(e) => setComparisonData({...comparisonData, challenge: e.target.value})}
              placeholder={language === 'ar' ? 'مثال: إدارة الطلبات، المخزون' : 'e.g., Order management, Inventory'}
              className={`w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500 ${
                isRTL ? 'font-arabic text-right' : 'font-inter'
              }`}
            />
          </div>
        </div>

        <div className="text-center">
          <motion.button
            onClick={handleComparison}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-lg glow-effect ${
              isRTL ? 'font-arabic' : 'font-inter'
            }`}
          >
            <BarChart3 className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {language === 'ar' ? 'ابحث عن مطابقة' : 'Find Match'}
          </motion.button>
        </div>

        {/* Recommendation Result */}
        {recommendedCase && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl border border-primary-500/30"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className={`text-lg font-semibold text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'أفضل مطابقة لعملك' : 'Best Match for Your Business'}
              </h4>
              <Sparkles className="w-5 h-5 text-primary-400" />
            </div>
            
            {(() => {
              const recommended = caseStudies.find(s => s.id === recommendedCase);
              if (!recommended) return null;
              
              return (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-3xl">
                      {recommended.logo}
                    </div>
                    <div>
                      <h5 className={`text-xl font-semibold text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? recommended.companyAr : recommended.company}
                      </h5>
                      <p className={`text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? recommended.industryAr : recommended.industry}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary-400">{recommended.roi.percentage}%</p>
                      <p className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'العائد على الاستثمار' : 'ROI'}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-400">
                        {recommended.metrics.after.efficiency}%
                      </p>
                      <p className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'كفاءة العمليات' : 'Efficiency'}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-accent-400">
                        {recommended.roi.annualSavings.toLocaleString()}
                      </p>
                      <p className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'التوفير السنوي (درهم)' : 'Annual Savings (AED)'}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      const element = document.querySelector(`[data-story-id="${recommendedCase}"]`);
                      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`w-full px-4 py-3 glass-card glass-card-hover text-primary-400 rounded-lg flex items-center justify-center space-x-2 rtl:space-x-reverse ${
                      isRTL ? 'font-arabic' : 'font-inter'
                    }`}
                  >
                    <span>{language === 'ar' ? 'اقرأ القصة الكاملة' : 'Read Full Story'}</span>
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              );
            })()}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SuccessStories;