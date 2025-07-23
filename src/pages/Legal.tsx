import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Lock, 
  Award, 
  CheckCircle,
  Download,
  ArrowRight,
  AlertCircle,
  Globe,
  Scale,
  Gavel,
  Briefcase,
  FileCheck,
  FilePlus,
  FileSearch
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LegalProps {
  openContactForm?: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const Legal: React.FC<LegalProps> = ({ openContactForm }) => {
  const { isRTL, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('terms');

  const legalCategories = [
    {
      id: 'terms',
      name: language === 'ar' ? 'شروط الخدمة' : 'Terms of Service',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'privacy',
      name: language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy',
      icon: Lock,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ip',
      name: language === 'ar' ? 'إدارة الملكية الفكرية' : 'IP Management',
      icon: Award,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'compliance',
      name: language === 'ar' ? 'الامتثال التنظيمي' : 'Regulatory Compliance',
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const termsOfService = [
    {
      title: language === 'ar' ? 'ملكية الملكية الفكرية وحقوق الاستخدام' : 'IP Ownership & Usage Rights',
      content: language === 'ar'
        ? 'تحتفظ حكمة ديجيتال بملكية جميع حقوق الملكية الفكرية المتعلقة بمنصتها وتقنياتها. يتم منح العملاء ترخيصًا محدودًا وغير حصري وغير قابل للتحويل لاستخدام الخدمات وفقًا لاتفاقية الترخيص المحددة.'
        : 'Hikma Digital retains ownership of all intellectual property rights related to its platform and technologies. Customers are granted a limited, non-exclusive, non-transferable license to use the services according to the specific licensing agreement.',
      icon: Briefcase
    },
    {
      title: language === 'ar' ? 'حدود المسؤولية وإخلاء المسؤولية' : 'Liability Limitations & Disclaimers',
      content: language === 'ar'
        ? 'لا تتحمل حكمة ديجيتال المسؤولية عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية. يتم توفير الخدمات "كما هي" و"كما هي متاحة" دون أي ضمانات من أي نوع.'
        : 'Hikma Digital is not liable for any indirect, incidental, special, consequential, or punitive damages. Services are provided "as is" and "as available" without warranties of any kind.',
      icon: AlertCircle
    },
    {
      title: language === 'ar' ? 'الإنهاء وبنود الخرق' : 'Termination & Breach Clauses',
      content: language === 'ar'
        ? 'يجوز لحكمة ديجيتال إنهاء الخدمات في حالة انتهاك العميل لشروط الاستخدام. قد تشمل الانتهاكات الاستخدام غير المصرح به للملكية الفكرية أو عدم دفع الرسوم أو انتهاك قوانين الإمارات العربية المتحدة.'
        : 'Hikma Digital may terminate services in case of customer breach of terms. Breaches may include unauthorized use of intellectual property, non-payment of fees, or violation of UAE laws.',
      icon: Gavel
    },
    {
      title: language === 'ar' ? 'إجراءات حل النزاعات' : 'Dispute Resolution Procedures',
      content: language === 'ar'
        ? 'تخضع جميع النزاعات لقوانين دولة الإمارات العربية المتحدة وتحل من خلال التحكيم في دبي. يوافق الطرفان على محاولة حل النزاعات بشكل ودي قبل بدء الإجراءات القانونية.'
        : 'All disputes are subject to the laws of the United Arab Emirates and resolved through arbitration in Dubai. Parties agree to attempt to resolve disputes amicably before initiating legal proceedings.',
      icon: Scale
    }
  ];

  const privacyPolicy = [
    {
      title: language === 'ar' ? 'ممارسات جمع ومعالجة البيانات' : 'Data Collection & Processing Practices',
      content: language === 'ar'
        ? 'تجمع حكمة ديجيتال وتعالج البيانات الشخصية وبيانات الاستخدام لتقديم خدماتها. يشمل ذلك معلومات الاتصال والمعاملات وبيانات التفاعل وتفضيلات المستخدم.'
        : 'Hikma Digital collects and processes personal and usage data to provide its services. This includes contact information, transaction data, interaction data, and user preferences.',
      icon: FileSearch
    },
    {
      title: language === 'ar' ? 'امتثال إقامة البيانات في الإمارات' : 'UAE Data Residency Compliance',
      content: language === 'ar'
        ? 'تلتزم حكمة ديجيتال بالاحتفاظ بجميع بيانات العملاء داخل دولة الإمارات العربية المتحدة، وفقًا للوائح الإماراتية. تضمن بنيتنا التحتية السحابية المتوافقة مع الإمارات أن تظل البيانات محلية.'
        : 'Hikma Digital is committed to keeping all customer data within the UAE, in accordance with UAE regulations. Our UAE-compliant cloud infrastructure ensures data remains local.',
      icon: Globe
    },
    {
      title: language === 'ar' ? 'الامتثال للائحة العامة لحماية البيانات للعملاء الدوليين' : 'GDPR Compliance for International Clients',
      content: language === 'ar'
        ? 'بالنسبة للعملاء الدوليين، تلتزم حكمة ديجيتال بمتطلبات اللائحة العامة لحماية البيانات (GDPR). نحن نحمي حقوق الخصوصية ونوفر آليات لطلبات الوصول إلى البيانات وحذفها ونقلها.'
        : 'For international clients, Hikma Digital complies with GDPR requirements. We protect privacy rights and provide mechanisms for data access, deletion, and portability requests.',
      icon: FileCheck
    },
    {
      title: language === 'ar' ? 'تكاملات الجهات الخارجية ومشاركة البيانات' : 'Third-party Integrations & Data Sharing',
      content: language === 'ar'
        ? 'قد تشارك حكمة ديجيتال البيانات مع مزودي خدمات الجهات الخارجية المعتمدين لأغراض محددة. جميع الشركاء ملزمون باتفاقيات حماية البيانات وتدابير الأمان المناسبة.'
        : 'Hikma Digital may share data with approved third-party service providers for specific purposes. All partners are bound by data protection agreements and appropriate security measures.',
      icon: FilePlus
    }
  ];

  const ipManagement = [
    {
      title: language === 'ar' ? 'تسجيلات البراءات والعلامات التجارية' : 'Patent & Trademark Registrations',
      content: language === 'ar'
        ? 'تمتلك حكمة ديجيتال محفظة من براءات الاختراع والعلامات التجارية المسجلة في الإمارات العربية المتحدة ودوليًا. تغطي ملكيتنا الفكرية خوارزميات الذكاء الاصطناعي وتقنيات معالجة اللغة العربية وحلول محددة للصناعة.'
        : 'Hikma Digital maintains a portfolio of patents and trademarks registered in the UAE and internationally. Our IP covers AI algorithms, Arabic language processing technologies, and industry-specific solutions.',
      icon: Award
    },
    {
      title: language === 'ar' ? 'بيانات حماية حقوق الطبع والنشر' : 'Copyright Protection Statements',
      content: language === 'ar'
        ? 'جميع المحتويات والبرامج والوثائق والمواد الأخرى المقدمة كجزء من خدمات حكمة ديجيتال محمية بموجب قوانين حقوق الطبع والنشر. يحظر النسخ أو التوزيع أو الاستخدام غير المصرح به.'
        : 'All content, software, documentation, and other materials provided as part of Hikma Digital services are protected under copyright laws. Unauthorized copying, distribution, or use is prohibited.',
      icon: FileText
    },
    {
      title: language === 'ar' ? 'سياسات حماية الأسرار التجارية' : 'Trade Secret Protection Policies',
      content: language === 'ar'
        ? 'تحافظ حكمة ديجيتال على أسرار تجارية قيمة، بما في ذلك الخوارزميات الملكية وبيانات التدريب والعمليات الداخلية. يتم تنفيذ تدابير أمنية صارمة واتفاقيات عدم الإفصاح لحماية هذه الأصول.'
        : 'Hikma Digital maintains valuable trade secrets, including proprietary algorithms, training data, and internal processes. Strict security measures and non-disclosure agreements are implemented to protect these assets.',
      icon: Lock
    },
    {
      title: language === 'ar' ? 'إجراءات انتهاك الملكية الفكرية' : 'IP Infringement Procedures',
      content: language === 'ar'
        ? 'تتخذ حكمة ديجيتال انتهاكات الملكية الفكرية على محمل الجد. لدينا إجراءات لمعالجة الانتهاكات المزعومة، بما في ذلك إشعارات الإزالة والإجراءات القانونية عند الضرورة.'
        : 'Hikma Digital takes IP infringements seriously. We have procedures for addressing alleged violations, including takedown notices and legal actions when necessary.',
      icon: Gavel
    }
  ];

  const regulatoryCompliance = [
    {
      title: language === 'ar' ? 'معلومات رخصة الأعمال الإماراتية' : 'UAE Business License Information',
      content: language === 'ar'
        ? 'حكمة ديجيتال مرخصة بالكامل للعمل في دولة الإمارات العربية المتحدة، مع رخصة تجارية صادرة عن سلطة مدينة دبي للإنترنت. نحن نلتزم بجميع متطلبات الأعمال المحلية والتجديدات السنوية.'
        : 'Hikma Digital is fully licensed to operate in the UAE, with a commercial license issued by Dubai Internet City Authority. We comply with all local business requirements and annual renewals.',
      icon: Briefcase
    },
    {
      title: language === 'ar' ? 'شهادات خاصة بالصناعة' : 'Industry-specific Certifications',
      content: language === 'ar'
        ? 'تحافظ حكمة ديجيتال على الشهادات ذات الصلة بالصناعة، بما في ذلك ISO 27001 لأمن المعلومات وشهادة ميثاق الإمارات للذكاء الاصطناعي وشهادات الامتثال الخاصة بالصناعة.'
        : 'Hikma Digital maintains relevant industry certifications, including ISO 27001 for information security, UAE AI Charter certification, and industry-specific compliance certifications.',
      icon: Award
    },
    {
      title: language === 'ar' ? 'امتثال الخدمات المالية' : 'Financial Services Compliance',
      content: language === 'ar'
        ? 'لعملاء الخدمات المالية، تلتزم حكمة ديجيتال بلوائح سلطة دبي للخدمات المالية (DFSA) ومصرف الإمارات العربية المتحدة المركزي، مع ضمانات إضافية لحماية البيانات المالية الحساسة.'
        : 'For financial services clients, Hikma Digital complies with Dubai Financial Services Authority (DFSA) and UAE Central Bank regulations, with additional safeguards for sensitive financial data protection.',
      icon: Scale
    },
    {
      title: language === 'ar' ? 'حماية بيانات الرعاية الصحية' : 'Healthcare Data Protection',
      content: language === 'ar'
        ? 'تلتزم حكمة ديجيتال بلوائح حماية بيانات الرعاية الصحية في الإمارات العربية المتحدة، بما يعادل HIPAA، مع بروتوكولات صارمة لتأمين المعلومات الصحية الشخصية وإدارتها.'
        : 'Hikma Digital adheres to UAE healthcare data protection regulations, equivalent to HIPAA, with strict protocols for securing and managing personal health information.',
      icon: Shield
    }
  ];

  const selectedContent = {
    'terms': termsOfService,
    'privacy': privacyPolicy,
    'ip': ipManagement,
    'compliance': regulatoryCompliance
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
                <span className={`text-sm font-light text-uae-red ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  UAE Charter Certified
                </span>
              </div>
              <div className="flex items-center px-4 py-2 glass-card">
                <Award className="w-4 h-4 text-primary-400 mr-2 rtl:ml-2 rtl:mr-0" />
                <span className={`text-sm font-light text-primary-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  IP Protected & Licensed
                </span>
              </div>
            </div>

            <h1 className={`text-2xl lg:text-3xl font-extralight tracking-tight mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              <span className="gradient-text font-bold">
                {language === 'ar' ? 'القانونية والامتثال' : 'Legal & Compliance'}
              </span>
              <br />
              <span className="text-primary">
                {language === 'ar' ? 'إطار قانوني شامل لأعمال الملكية الفكرية' : 'Comprehensive Legal Framework for IP Business'}
              </span>
            </h1>
            <p className={`text-xl text-secondary max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'شروط الخدمة وسياسة الخصوصية وإدارة الملكية الفكرية والامتثال التنظيمي'
                : 'Terms of service, privacy policy, IP management, and regulatory compliance'
              }
            </p>
          </motion.div>
        </div>

        {/* Legal Categories */}
        <div className="mb-16">
          <h2 className={`text-2xl text-center mb-8 text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'الوثائق القانونية' : 'Legal Documentation'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalCategories.map((category) => {
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
          <div className="glass-card p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className={`text-2xl font-medium text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {legalCategories.find(c => c.id === selectedCategory)?.name}
              </h3>
              <motion.button
                onClick={() => openContactForm && openContactForm('general')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 glass-card glass-card-hover text-primary-400 transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                <Download className="w-4 h-4" />
                <span>{language === 'ar' ? 'تنزيل PDF' : 'Download PDF'}</span>
              </motion.button>
            </div>
            
            <div className="space-y-8">
              {selectedContent[selectedCategory].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="border-b border-gray-700 pb-8 last:border-0">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                      <div className="p-2 bg-primary-500/20 rounded-lg">
                        <IconComponent className="w-5 h-5 text-primary-400" />
                      </div>
                      <h4 className={`text-xl font-medium text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {item.title}
                      </h4>
                    </div>
                    <p className={`text-secondary leading-relaxed ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {item.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-12">
            <h2 className={`text-2xl tracking-tight mb-6 text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'هل تحتاج إلى مساعدة قانونية؟' : 'Need Legal Assistance?'}
            </h2>
            <p className={`text-lg text-secondary mb-8 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'فريقنا القانوني متاح للمساعدة في جميع الأمور المتعلقة بالامتثال والملكية الفكرية والترخيص'
                : 'Our legal team is available to assist with all compliance, IP, and licensing matters'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => openContactForm && openContactForm('general')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`btn-primary group ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                <FileText className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {language === 'ar' ? 'جدولة استشارة قانونية' : 'Schedule Legal Consultation'}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-8 py-4 glass-card glass-card-hover text-primary-400 font-medium rounded-lg transition-all duration-300 group ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                <Download className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {language === 'ar' ? 'تنزيل الوثائق القانونية' : 'Download Legal Documents'}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Legal;