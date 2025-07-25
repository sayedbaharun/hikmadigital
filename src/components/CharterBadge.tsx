import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Eye, Users, Lock, Scale, Brain, Globe, Heart, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CharterBadge: React.FC = () => {
  const { isRTL, language } = useLanguage();
  const [activeCharter, setActiveCharter] = useState<number | null>(null);

  const charterPrinciples = [
    {
      id: 1,
      icon: Eye,
      title: language === 'ar' ? 'الشفافية' : 'Transparency',
      description: language === 'ar' 
        ? 'كل قرار للذكاء الاصطناعي يظهر تفسيره باللغتين العربية والإنجليزية'
        : 'Every AI decision shows its reasoning in both Arabic and English',
      status: 'verified',
      metric: '100%'
    },
    {
      id: 2,
      icon: Users,
      title: language === 'ar' ? 'محورية الإنسان' : 'Human-Centric',
      description: language === 'ar'
        ? 'الذكاء الاصطناعي يعزز قدرات المدربين البشريين ولا يحل محلهم'
        : 'AI enhances human coaches rather than replacing them',
      status: 'verified',
      metric: '50/50'
    },
    {
      id: 3,
      icon: Lock,
      title: language === 'ar' ? 'خصوصية البيانات' : 'Data Privacy',
      description: language === 'ar'
        ? 'امتثال كامل لقانون حماية البيانات الشخصية الاتحادي'
        : 'Full compliance with Federal Personal Data Protection Law',
      status: 'verified',
      metric: 'UAE Resident'
    },
    {
      id: 4,
      icon: Scale,
      title: language === 'ar' ? 'العدالة الخوارزمية' : 'Algorithmic Fairness',
      description: language === 'ar'
        ? 'مراقبة مستمرة للتحيز في معالجة اللغة العربية'
        : 'Continuous bias monitoring for Arabic language processing',
      status: 'verified',
      metric: '97% Accuracy'
    },
    {
      id: 5,
      icon: Brain,
      title: language === 'ar' ? 'الذكاء الثقافي' : 'Cultural Intelligence',
      description: language === 'ar'
        ? 'فهم عميق للسياق التجاري والثقافي الإماراتي'
        : 'Deep understanding of UAE business and cultural context',
      status: 'verified',
      metric: 'UAE-Trained'
    },
    {
      id: 6,
      icon: Shield,
      title: language === 'ar' ? 'الأمن السيبراني' : 'Cybersecurity',
      description: language === 'ar'
        ? 'حماية متقدمة للبيانات التجارية الحساسة'
        : 'Advanced protection for sensitive business data',
      status: 'verified',
      metric: 'Bank-Level'
    },
    {
      id: 7,
      icon: Globe,
      title: language === 'ar' ? 'الشمولية' : 'Inclusivity',
      description: language === 'ar'
        ? 'تصميم شامل لمجتمع الشركات الصغيرة والمتوسطة المتنوع في دبي'
        : 'Inclusive design for Dubai\'s diverse SME community',
      status: 'verified',
      metric: '12+ Languages'
    },
    {
      id: 8,
      icon: Heart,
      title: language === 'ar' ? 'الرفاهية الرقمية' : 'Digital Wellbeing',
      description: language === 'ar'
        ? 'توازن صحي بين التفاعل الرقمي والبشري'
        : 'Healthy balance between digital and human interaction',
      status: 'verified',
      metric: 'Balanced'
    },
    {
      id: 9,
      icon: Zap,
      title: language === 'ar' ? 'الكفاءة البيئية' : 'Environmental Efficiency',
      description: language === 'ar'
        ? 'تحسين استهلاك الطاقة في معالجة الذكاء الاصطناعي'
        : 'Optimized energy consumption in AI processing',
      status: 'verified',
      metric: 'Green AI'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 glass-card mb-6">
          <Shield className="w-6 h-6 text-uae-red mr-3 rtl:ml-3 rtl:mr-0" />
          <span className={`text-lg font-medium text-uae-red ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'معتمد رسمياً من حكومة دولة الإمارات' : 'Officially Certified by UAE Government'}
          </span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-uae-red">12/12</div>
            <div className={`text-sm text-gray-400 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'مبادئ معتمدة' : 'Principles Certified'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-400">100%</div>
            <div className={`text-sm text-gray-400 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'امتثال' : 'Compliance'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400">#1</div>
            <div className={`text-sm text-gray-400 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'في المنطقة' : 'In MENA'}
            </div>
          </div>
        </div>
      </div>

      {/* Charter Principles Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {charterPrinciples.map((principle, index) => {
          const IconComponent = principle.icon;
          return (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setActiveCharter(activeCharter === principle.id ? null : principle.id)}
              className="glass-card glass-card-hover p-6 hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary-400" />
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className="text-sm font-medium text-accent-400">
                    {language === 'ar' ? 'معتمد' : 'Verified'}
                  </span>
                </div>
              </div>

              <h3 className={`text-lg font-medium text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {principle.title}
              </h3>
              
              <p className={`text-sm text-gray-300 mb-4 leading-relaxed font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {principle.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="px-3 py-1 bg-primary-500/20 rounded-full">
                  <span className="text-sm font-medium text-primary-400">
                    {principle.metric}
                  </span>
                </div>
                <div
                  className={`text-gray-400 transition-transform ${
                    activeCharter === principle.id ? 'rotate-180' : ''
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeCharter === principle.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-4 mt-4 border-t border-gray-700/50">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className={`text-gray-400 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'حالة التنفيذ:' : 'Implementation Status:'}
                      </span>
                      <span className="text-accent-400 font-medium">
                        {language === 'ar' ? 'نشط' : 'Active'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className={`text-gray-400 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'آخر مراجعة:' : 'Last Reviewed:'}
                      </span>
                      <span className="text-gray-400 font-light">
                        {language === 'ar' ? 'اليوم' : 'Today'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                      <div className="bg-accent-400 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
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
                {language === 'ar' ? 'شراكة حكومية' : 'Government Partnership'}
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

export default CharterBadge;