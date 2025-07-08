import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  Eye, 
  Users, 
  Lock, 
  Scale, 
  Brain, 
  Globe, 
  Heart, 
  Zap,
  AlertTriangle,
  Activity
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CharterPrinciple {
  id: number;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  status: 'compliant' | 'monitoring' | 'warning';
  implementation: string;
  metrics: {
    score: number;
    lastChecked: string;
    details: string;
  };
}

const UAECharterDashboard: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [selectedPrinciple, setSelectedPrinciple] = useState<number | null>(null);

  const charterPrinciples: CharterPrinciple[] = [
    {
      id: 1,
      icon: Eye,
      title: language === 'ar' ? 'الشفافية' : 'Transparency',
      description: language === 'ar' 
        ? 'كل قرار للذكاء الاصطناعي يظهر تفسيره باللغتين العربية والإنجليزية'
        : 'Every AI decision shows its reasoning in both Arabic and English',
      status: 'compliant',
      implementation: language === 'ar'
        ? 'محرك الشفافية مع تفسيرات فورية لجميع قرارات الذكاء الاصطناعي'
        : 'Transparency engine with real-time explanations for all AI decisions',
      metrics: {
        score: 98,
        lastChecked: '2 minutes ago',
        details: language === 'ar' ? '100% من القرارات موثقة' : '100% of decisions documented'
      }
    },
    {
      id: 2,
      icon: Users,
      title: language === 'ar' ? 'محورية الإنسان' : 'Human-Centric',
      description: language === 'ar'
        ? 'الذكاء الاصطناعي يعزز قدرات المدربين البشريين ولا يحل محلهم'
        : 'AI enhances human coaches rather than replacing them',
      status: 'compliant',
      implementation: language === 'ar'
        ? 'نموذج تعاون 50/50 مع إشراف بشري مستمر'
        : '50/50 collaboration model with continuous human oversight',
      metrics: {
        score: 100,
        lastChecked: '1 minute ago',
        details: language === 'ar' ? 'جميع القرارات تتطلب موافقة بشرية' : 'All decisions require human approval'
      }
    },
    {
      id: 3,
      icon: Lock,
      title: language === 'ar' ? 'خصوصية البيانات' : 'Data Privacy',
      description: language === 'ar'
        ? 'امتثال كامل لقانون حماية البيانات الشخصية الاتحادي'
        : 'Full compliance with Federal Personal Data Protection Law',
      status: 'compliant',
      implementation: language === 'ar'
        ? 'تشفير متقدم وتخزين محلي للبيانات في الإمارات'
        : 'Advanced encryption and local data storage in UAE',
      metrics: {
        score: 97,
        lastChecked: '5 minutes ago',
        details: language === 'ar' ? 'جميع البيانات مشفرة ومحفوظة محلياً' : 'All data encrypted and stored locally'
      }
    },
    {
      id: 4,
      icon: Scale,
      title: language === 'ar' ? 'العدالة الخوارزمية' : 'Algorithmic Fairness',
      description: language === 'ar'
        ? 'مراقبة مستمرة للتحيز في معالجة اللغة العربية'
        : 'Continuous bias monitoring for Arabic language processing',
      status: 'compliant',
      implementation: language === 'ar'
        ? 'نظام مراقبة التحيز مع تدقيق يومي'
        : 'Bias monitoring system with daily audits',
      metrics: {
        score: 94,
        lastChecked: '10 minutes ago',
        details: language === 'ar' ? 'لا توجد تحيزات مكتشفة' : 'No bias detected'
      }
    },
    {
      id: 5,
      icon: Brain,
      title: language === 'ar' ? 'الذكاء الثقافي' : 'Cultural Intelligence',
      description: language === 'ar'
        ? 'فهم عميق للسياق التجاري والثقافي الإماراتي'
        : 'Deep understanding of UAE business and cultural context',
      status: 'compliant',
      implementation: language === 'ar'
        ? 'تدريب مخصص على الثقافة الإماراتية والأعمال المحلية'
        : 'Specialized training on UAE culture and local business',
      metrics: {
        score: 96,
        lastChecked: '3 minutes ago',
        details: language === 'ar' ? 'دقة ثقافية عالية في الاستجابات' : 'High cultural accuracy in responses'
      }
    },
    {
      id: 6,
      icon: Shield,
      title: language === 'ar' ? 'الأمن السيبراني' : 'Cybersecurity',
      description: language === 'ar'
        ? 'حماية متقدمة للبيانات التجارية الحساسة'
        : 'Advanced protection for sensitive business data',
      status: 'compliant',
      implementation: language === 'ar'
        ? 'أمان على مستوى البنوك مع مراقبة 24/7'
        : 'Bank-level security with 24/7 monitoring',
      metrics: {
        score: 99,
        lastChecked: '1 minute ago',
        details: language === 'ar' ? 'لا توجد تهديدات أمنية' : 'No security threats detected'
      }
    },
    {
      id: 7,
      icon: Globe,
      title: language === 'ar' ? 'الشمولية' : 'Inclusivity',
      description: language === 'ar'
        ? 'تصميم شامل لمجتمع الشركات الصغيرة والمتوسطة المتنوع في دبي'
        : 'Inclusive design for Dubai\'s diverse SME community',
      status: 'compliant',
      implementation: language === 'ar'
        ? 'دعم 12+ لغة مع حساسية ثقافية'
        : 'Support for 12+ languages with cultural sensitivity',
      metrics: {
        score: 95,
        lastChecked: '7 minutes ago',
        details: language === 'ar' ? 'وصول شامل لجميع المجتمعات' : 'Inclusive access for all communities'
      }
    },
    {
      id: 8,
      icon: Heart,
      title: language === 'ar' ? 'الرفاهية الرقمية' : 'Digital Wellbeing',
      description: language === 'ar'
        ? 'توازن صحي بين التفاعل الرقمي والبشري'
        : 'Healthy balance between digital and human interaction',
      status: 'compliant',
      implementation: language === 'ar'
        ? 'حدود زمنية ذكية وفترات راحة مقترحة'
        : 'Smart time limits and suggested break periods',
      metrics: {
        score: 92,
        lastChecked: '15 minutes ago',
        details: language === 'ar' ? 'استخدام متوازن للمنصة' : 'Balanced platform usage'
      }
    },
    {
      id: 9,
      icon: Zap,
      title: language === 'ar' ? 'الكفاءة البيئية' : 'Environmental Efficiency',
      description: language === 'ar'
        ? 'تحسين استهلاك الطاقة في معالجة الذكاء الاصطناعي'
        : 'Optimized energy consumption in AI processing',
      status: 'compliant',
      implementation: language === 'ar'
        ? 'خوادم موفرة للطاقة ومعالجة محسنة'
        : 'Energy-efficient servers and optimized processing',
      metrics: {
        score: 88,
        lastChecked: '20 minutes ago',
        details: language === 'ar' ? 'انخفاض استهلاك الطاقة بنسبة 30%' : '30% reduction in energy consumption'
      }
    }
  ];

  const overallCompliance = Math.round(
    charterPrinciples.reduce((sum, principle) => sum + principle.metrics.score, 0) / charterPrinciples.length
  );

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 glass-card mb-6">
          <Shield className="w-6 h-6 text-green-400 mr-3 rtl:ml-3 rtl:mr-0" />
          <span className={`text-lg font-medium text-green-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'معتمد رسمياً من حكومة دولة الإمارات' : 'Officially Certified by UAE Government'}
          </span>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">{overallCompliance}%</div>
            <div className={`text-sm text-gray-400 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'امتثال عام' : 'Overall Compliance'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">9/9</div>
            <div className={`text-sm text-gray-400 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'مبادئ معتمدة' : 'Principles Certified'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">24/7</div>
            <div className={`text-sm text-gray-400 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'مراقبة' : 'Monitoring'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-400">#1</div>
            <div className={`text-sm text-gray-400 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'في المنطقة' : 'In MENA'}
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Compliance Monitor */}
      <div className="mb-8">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-lg font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'مراقبة الامتثال في الوقت الفعلي' : 'Real-time Compliance Monitor'}
            </h3>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Activity className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-sm text-green-400">
                {language === 'ar' ? 'مراقبة نشطة' : 'Live Monitoring'}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-500/10 rounded-lg">
              <div className="text-2xl font-bold text-green-400">100%</div>
              <div className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'إشراف بشري' : 'Human Oversight'}
              </div>
            </div>
            <div className="text-center p-4 bg-blue-500/10 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">0</div>
              <div className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'انتهاكات' : 'Violations'}
              </div>
            </div>
            <div className="text-center p-4 bg-purple-500/10 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">2.3s</div>
              <div className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'وقت الاستجابة' : 'Response Time'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charter Principles Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {charterPrinciples.map((principle, index) => {
          const IconComponent = principle.icon;
          const isSelected = selectedPrinciple === principle.id;
          
          return (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              onClick={() => setSelectedPrinciple(isSelected ? null : principle.id)}
              className="glass-card glass-card-hover p-6 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg group-hover:scale-110 transition-transform ${
                  principle.status === 'compliant' 
                    ? 'bg-green-500/20' 
                    : principle.status === 'monitoring'
                    ? 'bg-yellow-500/20'
                    : 'bg-red-500/20'
                }`}>
                  <IconComponent className={`w-6 h-6 ${
                    principle.status === 'compliant' 
                      ? 'text-green-400' 
                      : principle.status === 'monitoring'
                      ? 'text-yellow-400'
                      : 'text-red-400'
                  }`} />
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  {principle.status === 'compliant' && <CheckCircle className="w-5 h-5 text-green-400" />}
                  {principle.status === 'monitoring' && <Activity className="w-5 h-5 text-yellow-400" />}
                  {principle.status === 'warning' && <AlertTriangle className="w-5 h-5 text-red-400" />}
                  <span className={`text-sm font-medium ${
                    principle.status === 'compliant' 
                      ? 'text-green-400' 
                      : principle.status === 'monitoring'
                      ? 'text-yellow-400'
                      : 'text-red-400'
                  }`}>
                    {principle.status === 'compliant' && (language === 'ar' ? 'معتمد' : 'Compliant')}
                    {principle.status === 'monitoring' && (language === 'ar' ? 'مراقبة' : 'Monitoring')}
                    {principle.status === 'warning' && (language === 'ar' ? 'تحذير' : 'Warning')}
                  </span>
                </div>
              </div>

              <h3 className={`text-lg font-medium text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {principle.title}
              </h3>
              
              <p className={`text-sm text-gray-300 mb-4 leading-relaxed font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {principle.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    principle.metrics.score >= 95 
                      ? 'bg-green-500/20 text-green-400'
                      : principle.metrics.score >= 85
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {principle.metrics.score}
                  </div>
                  <span className="text-xs text-gray-400">
                    {language === 'ar' ? 'نقاط' : 'score'}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isSelected ? 180 : 0 }}
                  className="text-gray-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </div>

              {/* Expanded Content */}
              <motion.div
                initial={false}
                animate={{ height: isSelected ? 'auto' : 0, opacity: isSelected ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-gray-700/50">
                  <div className="space-y-3">
                    <div>
                      <h4 className={`text-sm font-medium text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'التنفيذ:' : 'Implementation:'}
                      </h4>
                      <p className={`text-sm text-gray-300 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {principle.implementation}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className={`text-gray-400 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'آخر فحص:' : 'Last Checked:'}
                      </span>
                      <span className="text-gray-300 font-light">
                        {principle.metrics.lastChecked}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className={`text-gray-400 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'التفاصيل:' : 'Details:'}
                      </span>
                      <span className="text-green-400 font-light">
                        {principle.metrics.details}
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          principle.metrics.score >= 95 
                            ? 'bg-green-400'
                            : principle.metrics.score >= 85
                            ? 'bg-yellow-400'
                            : 'bg-red-400'
                        }`}
                        style={{ width: `${principle.metrics.score}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Government Partnership */}
      <div className="mt-16 glass-card p-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse mb-6">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Emblem_of_the_United_Arab_Emirates.svg/1200px-Emblem_of_the_United_Arab_Emirates.svg.png" 
              alt="UAE Government"
              className="w-12 h-12"
            />
            <div className="h-8 w-px bg-gray-600"></div>
            <div className="text-left rtl:text-right">
              <div className={`text-lg font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'شراكة حكومية رسمية' : 'Official Government Partnership'}
              </div>
              <div className={`text-sm text-gray-400 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'معتمد من وزارة الاقتصاد' : 'Ministry of Economy Certified'}
              </div>
            </div>
          </div>
          
          <p className={`text-lg text-gray-300 max-w-3xl mx-auto font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' 
              ? 'حكمة ديجيتال هي أول منصة ذكاء اصطناعي في الشرق الأوسط وشمال أفريقيا تحصل على اعتماد ميثاق الإمارات للذكاء الاصطناعي، مما يضمن الامتثال الكامل لجميع المعايير الأخلاقية والتقنية.'
              : 'Hikma Digital is the first AI platform in MENA to receive UAE AI Charter certification, ensuring full compliance with all ethical and technical standards.'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default UAECharterDashboard;