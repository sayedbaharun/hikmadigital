import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building,
  Globe,
  Shield,
  Award,
  Users,
  Database,
  Server,
  Cloud,
  Laptop,
  Smartphone,
  Briefcase,
  GraduationCap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Download,
  Target,
  Network,
  Handshake,
  FileText
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PartnershipsProps {
  openContactForm?: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const Partnerships: React.FC<PartnershipsProps> = ({ openContactForm }) => {
  const { isRTL, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('government');

  const partnershipCategories = [
    {
      id: 'government',
      name: language === 'ar' ? 'الشراكات الحكومية والتنظيمية' : 'Government & Regulatory',
      icon: Building,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'technology',
      name: language === 'ar' ? 'النظام البيئي التكنولوجي' : 'Technology Ecosystem',
      icon: Network,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'strategic',
      name: language === 'ar' ? 'التحالفات الاستراتيجية' : 'Strategic Alliances',
      icon: Handshake,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const governmentPartnerships = [
    {
      name: language === 'ar' ? 'شهادة ميثاق الإمارات' : 'UAE Charter Certification',
      description: language === 'ar' 
        ? 'تفاصيل شهادة ميثاق الإمارات وإطار الامتثال'
        : 'UAE Charter certification details and compliance framework',
      logo: '🇦🇪',
      features: [
        language === 'ar' ? 'امتثال كامل لجميع المبادئ الـ 12' : 'Full compliance with all 12 principles',
        language === 'ar' ? 'مراقبة مستمرة' : 'Continuous monitoring',
        language === 'ar' ? 'تقارير شفافية' : 'Transparency reporting',
        language === 'ar' ? 'مراجعات سنوية' : 'Annual reviews'
      ],
      status: language === 'ar' ? 'معتمد' : 'Certified',
      date: '2024'
    },
    {
      name: language === 'ar' ? 'شراكات التكنولوجيا الحكومية' : 'Government Technology Partnerships',
      description: language === 'ar'
        ? 'برامج تجريبية للتكنولوجيا الحكومية وشراكات'
        : 'Government technology pilot programs and partnerships',
      logo: '🏛️',
      features: [
        language === 'ar' ? 'مبادرات دبي الذكية' : 'Dubai Smart Initiatives',
        language === 'ar' ? 'برامج تجريبية' : 'Pilot programs',
        language === 'ar' ? 'تطوير التكنولوجيا' : 'Technology development',
        language === 'ar' ? 'مشاريع البحث والتطوير' : 'R&D projects'
      ],
      status: language === 'ar' ? 'نشط' : 'Active',
      date: '2024-2025'
    },
    {
      name: language === 'ar' ? 'المصادقات والشهادات التنظيمية' : 'Regulatory Endorsements & Certifications',
      description: language === 'ar'
        ? 'المصادقات من الهيئات التنظيمية والشهادات'
        : 'Endorsements from regulatory bodies and certifications',
      logo: '📜',
      features: [
        language === 'ar' ? 'شهادة حماية البيانات' : 'Data protection certification',
        language === 'ar' ? 'امتثال الأمن السيبراني' : 'Cybersecurity compliance',
        language === 'ar' ? 'معايير الصناعة' : 'Industry standards',
        language === 'ar' ? 'أفضل الممارسات' : 'Best practices'
      ],
      status: language === 'ar' ? 'معتمد' : 'Certified',
      date: '2024'
    },
    {
      name: language === 'ar' ? 'مواءمة الرؤية الوطنية' : 'National Vision Alignment',
      description: language === 'ar'
        ? 'المواءمة مع رؤية الإمارات 2071 ورؤية 2031'
        : 'Alignment with UAE Vision 2071 and Vision 2031',
      logo: '🔭',
      features: [
        language === 'ar' ? 'مبادرات الاقتصاد الرقمي' : 'Digital economy initiatives',
        language === 'ar' ? 'برامج الابتكار' : 'Innovation programs',
        language === 'ar' ? 'تنمية المواهب' : 'Talent development',
        language === 'ar' ? 'التنويع الاقتصادي' : 'Economic diversification'
      ],
      status: language === 'ar' ? 'متوافق' : 'Aligned',
      date: '2024-2031'
    }
  ];

  const technologyEcosystem = [
    {
      name: language === 'ar' ? 'البنية التحتية الأساسية' : 'Core Infrastructure',
      description: language === 'ar' 
        ? 'شراكات Bolt.new و Supabase و Netlify'
        : 'Bolt.new, Supabase, Netlify partnerships',
      logo: '⚡',
      partners: ['Bolt.new', 'Supabase', 'Netlify'],
      features: [
        language === 'ar' ? 'تطوير سريع' : 'Rapid development',
        language === 'ar' ? 'قواعد بيانات متطورة' : 'Advanced databases',
        language === 'ar' ? 'نشر سلس' : 'Seamless deployment',
        language === 'ar' ? 'أداء عالي' : 'High performance'
      ]
    },
    {
      name: language === 'ar' ? 'مزودو الذكاء الاصطناعي' : 'AI Providers',
      description: language === 'ar'
        ? 'شراكات تكامل OpenAI و ElevenLabs'
        : 'OpenAI, ElevenLabs integration partnerships',
      logo: '🤖',
      partners: ['OpenAI', 'ElevenLabs', 'Anthropic'],
      features: [
        language === 'ar' ? 'نماذج لغة متقدمة' : 'Advanced language models',
        language === 'ar' ? 'تخليق صوت واقعي' : 'Realistic voice synthesis',
        language === 'ar' ? 'معالجة اللغة العربية' : 'Arabic language processing',
        language === 'ar' ? 'تكامل متعدد النماذج' : 'Multi-model integration'
      ]
    },
    {
      name: language === 'ar' ? 'خدمات السحابة' : 'Cloud Services',
      description: language === 'ar'
        ? 'استضافة متوافقة مع الإمارات وإقامة البيانات'
        : 'UAE-compliant hosting and data residency',
      logo: '☁️',
      partners: ['AWS', 'Azure', 'Google Cloud'],
      features: [
        language === 'ar' ? 'إقامة البيانات المحلية' : 'Local data residency',
        language === 'ar' ? 'امتثال GDPR' : 'GDPR compliance',
        language === 'ar' ? 'أمان متقدم' : 'Advanced security',
        language === 'ar' ? 'قابلية التوسع' : 'Scalability'
      ]
    },
    {
      name: language === 'ar' ? 'تكاملات المؤسسات' : 'Enterprise Integrations',
      description: language === 'ar'
        ? 'شراكات SAP و Oracle و Microsoft'
        : 'SAP, Oracle, Microsoft partnerships',
      logo: '🏢',
      partners: ['SAP', 'Oracle', 'Microsoft'],
      features: [
        language === 'ar' ? 'تكامل ERP' : 'ERP integration',
        language === 'ar' ? 'تكامل CRM' : 'CRM integration',
        language === 'ar' ? 'تكامل Office 365' : 'Office 365 integration',
        language === 'ar' ? 'تكامل Dynamics' : 'Dynamics integration'
      ]
    },
    {
      name: language === 'ar' ? 'منصات الجوال' : 'Mobile Platforms',
      description: language === 'ar'
        ? 'شراكات تطوير iOS و Android'
        : 'iOS, Android development partnerships',
      logo: '📱',
      partners: ['Apple', 'Google', 'React Native'],
      features: [
        language === 'ar' ? 'تطوير iOS' : 'iOS development',
        language === 'ar' ? 'تطوير Android' : 'Android development',
        language === 'ar' ? 'تطبيقات متعددة المنصات' : 'Cross-platform apps',
        language === 'ar' ? 'تكامل PWA' : 'PWA integration'
      ]
    }
  ];

  const strategicAlliances = [
    {
      name: language === 'ar' ? 'شراكات المسرعات والحاضنات' : 'Accelerator & Incubator Partnerships',
      description: language === 'ar' 
        ? 'شراكات مع مسرعات وحاضنات الأعمال الرائدة'
        : 'Partnerships with leading business accelerators and incubators',
      logo: '🚀',
      partners: ['Dubai Future Accelerators', 'Hub71', 'DIFC FinTech Hive'],
      benefits: [
        language === 'ar' ? 'الوصول إلى المستثمرين' : 'Investor access',
        language === 'ar' ? 'برامج الإرشاد' : 'Mentorship programs',
        language === 'ar' ? 'فرص النمو' : 'Growth opportunities',
        language === 'ar' ? 'شبكة الشركات الناشئة' : 'Startup network'
      ]
    },
    {
      name: language === 'ar' ? 'تعاون البحوث الجامعية' : 'University Research Collaborations',
      description: language === 'ar'
        ? 'تعاون بحثي مع المؤسسات الأكاديمية الرائدة'
        : 'Research collaboration with leading academic institutions',
      logo: '🎓',
      partners: ['NYUAD', 'Khalifa University', 'AUS'],
      benefits: [
        language === 'ar' ? 'البحث والتطوير' : 'R&D',
        language === 'ar' ? 'المواهب الناشئة' : 'Emerging talent',
        language === 'ar' ? 'الابتكار المشترك' : 'Co-innovation',
        language === 'ar' ? 'المنشورات الأكاديمية' : 'Academic publications'
      ]
    },
    {
      name: language === 'ar' ? 'عضويات جمعيات الصناعة' : 'Industry Association Memberships',
      description: language === 'ar'
        ? 'عضويات في جمعيات الصناعة الرئيسية'
        : 'Memberships in key industry associations',
      logo: '🤝',
      partners: ['Dubai Chamber', 'UAE AI Society', 'DWTC'],
      benefits: [
        language === 'ar' ? 'التواصل' : 'Networking',
        language === 'ar' ? 'المعرفة الصناعية' : 'Industry knowledge',
        language === 'ar' ? 'الفعاليات' : 'Events',
        language === 'ar' ? 'فرص الأعمال' : 'Business opportunities'
      ]
    },
    {
      name: language === 'ar' ? 'شراكات التوسع الدولي' : 'International Expansion Partnerships',
      description: language === 'ar'
        ? 'شراكات استراتيجية للتوسع العالمي'
        : 'Strategic partnerships for global expansion',
      logo: '🌍',
      partners: ['Saudi MCIT', 'Qatar Digital', 'UK Tech'],
      benefits: [
        language === 'ar' ? 'دخول السوق' : 'Market entry',
        language === 'ar' ? 'المعرفة المحلية' : 'Local knowledge',
        language === 'ar' ? 'قنوات التوزيع' : 'Distribution channels',
        language === 'ar' ? 'التوسع الإقليمي' : 'Regional expansion'
      ]
    },
    {
      name: language === 'ar' ? 'علاقات الاستثمار والتمويل' : 'Investment & Funding Relationships',
      description: language === 'ar'
        ? 'شراكات مع المستثمرين وشركات رأس المال الاستثماري'
        : 'Partnerships with investors and venture capital firms',
      logo: '💰',
      partners: ['MBRIF', 'Dubai Angel Investors', 'Wamda Capital'],
      benefits: [
        language === 'ar' ? 'التمويل' : 'Funding',
        language === 'ar' ? 'الإرشاد الاستراتيجي' : 'Strategic guidance',
        language === 'ar' ? 'شبكة المستثمرين' : 'Investor network',
        language === 'ar' ? 'فرص النمو' : 'Growth opportunities'
      ]
    }
  ];

  const selectedContent = {
    'government': governmentPartnerships,
    'technology': technologyEcosystem,
    'strategic': strategicAlliances
  };

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
            <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse mb-6">
              <div className="flex items-center px-4 py-2 glass-card">
                <Shield className="w-4 h-4 text-uae-red mr-2 rtl:ml-2 rtl:mr-0" />
                <span className={`text-sm text-uae-red ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  UAE Charter Certified
                </span>
              </div>
              <div className="flex items-center px-4 py-2 glass-card">
                <Award className="w-4 h-4 text-primary-400 mr-2 rtl:ml-2 rtl:mr-0" />
                <span className={`text-sm text-primary-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  25+ Strategic Partnerships
                </span>
              </div>
            </div>

            <h1 className={`text-2xl lg:text-3xl font-extralight tracking-tight mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              <span className="gradient-text font-bold">
                {language === 'ar' ? 'الشراكات والتعاون' : 'Partnerships & Collaborations'}
              </span>
              <br />
              <span className="text-primary">
                {language === 'ar' ? 'شراكات استراتيجية ومواءمة حكومية' : 'Strategic Partnerships & Government Alignment'}
              </span>
            </h1>
            <p className={`text-xl text-secondary max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'شراكات حكومية وتنظيمية، نظام بيئي تكنولوجي، وتحالفات استراتيجية لتعزيز نمو وتأثير حكمة ديجيتال'
                : 'Government and regulatory partnerships, technology ecosystem, and strategic alliances to enhance Hikma Digital\'s growth and impact'
              }
            </p>
          </motion.div>
        </div>

        {/* Partnership Categories */}
        <div className="mb-16">
          <h2 className={`text-2xl text-center mb-8 text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'استكشف شراكاتنا' : 'Explore Our Partnerships'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {partnershipCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`glass-card glass-card-hover p-6 text-center transition-all duration-300 ${
                    selectedCategory === category.id ? 'ring-2 ring-primary-500 bg-primary-500/10' : ''
                  }`}
                >
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg mx-auto mb-3 w-fit`}>
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className={`font-medium text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {category.name}
                  </h3>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Content */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {selectedContent[selectedCategory].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                  <div className="text-4xl">{item.logo}</div>
                  <div>
                    <h3 className={`text-xl font-medium text-primary mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {item.name}
                    </h3>
                    <p className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {item.partners && (
                  <div className="mb-4">
                    <h4 className={`text-sm font-medium text-gray-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'الشركاء الرئيسيون' : 'Key Partners'}:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.partners.map((partner, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm"
                        >
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="space-y-2 mb-4">
                  <h4 className={`text-sm font-medium text-gray-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'الميزات الرئيسية' : 'Key Features'}:
                  </h4>
                  {(item.features || item.benefits)?.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-4 h-4 text-accent-400" />
                      <span className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {item.status && (
                  <div className="flex items-center justify-between">
                    <span className={`text-sm text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'الحالة' : 'Status'}:
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                      {item.status}
                    </span>
                  </div>
                )}
                
                {item.date && (
                  <div className="flex items-center justify-between">
                    <span className={`text-sm text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'التاريخ' : 'Date'}:
                    </span>
                    <span className="text-sm text-secondary">
                      {item.date}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Application */}
        <div className="mb-20">
          <h2 className={`text-2xl text-center mb-12 text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'تقديم طلب الشراكة' : 'Apply for Partnership'}
          </h2>
          
          <div className="glass-card p-8 text-center">
            <p className={`text-lg text-secondary mb-8 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'هل أنت مهتم بالشراكة مع حكمة ديجيتال؟ نحن نبحث دائمًا عن شركاء استراتيجيين لتوسيع نطاق تأثيرنا وتقديم قيمة أكبر لعملائنا.'
                : 'Interested in partnering with Hikma Digital? We\'re always looking for strategic partners to expand our impact and deliver greater value to our clients.'
              }
            </p>
            
            <motion.button
              onClick={() => openContactForm && openContactForm('partnership')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`btn-primary group ${isRTL ? 'font-arabic' : 'font-inter'}`}
            >
              <Handshake className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {language === 'ar' ? 'ابدأ الشراكة' : 'Start Partnership'}
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;