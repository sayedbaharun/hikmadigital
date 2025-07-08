import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const TermsAndConditions: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const lastUpdated = "January 15, 2025";

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8">
            <Link to="/legal" className={`inline-flex items-center text-gray-400 hover:text-primary-400 transition-colors mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              <ArrowLeft className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
              {language === 'ar' ? 'العودة إلى القانونية' : 'Back to Legal'}
            </Link>
            
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="p-2 bg-primary-500/20 rounded-lg">
                <FileText className="w-5 h-5 text-primary-400" />
              </div>
              <h1 className={`text-3xl font-light text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'الشروط والأحكام' : 'Terms and Conditions'}
              </h1>
            </div>
            
            <p className={`text-gray-400 text-sm ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? `آخر تحديث: ${lastUpdated}` : `Last updated: ${lastUpdated}`}
            </p>
          </div>

          {/* Content */}
          <div className="glass-card p-8">
            <div className="prose prose-invert max-w-none">
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' 
                  ? 'مرحبًا بك في حكمة ديجيتال. يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام منصتنا وخدماتنا.'
                  : 'Welcome to Hikma Digital. Please read these Terms and Conditions carefully before using our platform and services.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '1. قبول الشروط' : '1. Acceptance of Terms'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'باستخدام منصة حكمة ديجيتال، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، فيرجى عدم استخدام منصتنا أو خدماتنا.'
                  : 'By using the Hikma Digital platform, you agree to be bound by these Terms and Conditions. If you do not agree to any part of these terms, please do not use our platform or services.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '2. وصف الخدمات' : '2. Description of Services'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'توفر حكمة ديجيتال منصة ذكاء اصطناعي للشركات الصغيرة والمتوسطة في دولة الإمارات العربية المتحدة، مع التركيز على تحسين العمليات التجارية وتقديم رؤى مخصصة للسوق المحلي.'
                  : 'Hikma Digital provides an AI platform for small and medium enterprises in the United Arab Emirates, focusing on improving business operations and providing customized insights for the local market.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '3. حقوق الملكية الفكرية' : '3. Intellectual Property Rights'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'تحتفظ حكمة ديجيتال بجميع حقوق الملكية الفكرية المتعلقة بمنصتها وتقنياتها وخدماتها. يُمنح المستخدمون ترخيصًا محدودًا وغير حصري وغير قابل للتحويل لاستخدام المنصة وفقًا لهذه الشروط.'
                  : 'Hikma Digital retains all intellectual property rights related to its platform, technologies, and services. Users are granted a limited, non-exclusive, non-transferable license to use the platform in accordance with these terms.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '4. خصوصية البيانات' : '4. Data Privacy'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'تلتزم حكمة ديجيتال بحماية خصوصية بياناتك. يرجى الرجوع إلى سياسة الخصوصية الخاصة بنا للحصول على معلومات حول كيفية جمع بياناتك واستخدامها وحمايتها.'
                  : 'Hikma Digital is committed to protecting your data privacy. Please refer to our Privacy Policy for information on how your data is collected, used, and protected.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '5. حدود المسؤولية' : '5. Limitation of Liability'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'لن تكون حكمة ديجيتال مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية ناتجة عن استخدامك للمنصة أو الخدمات.'
                  : 'Hikma Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform or services.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '6. التعديلات على الشروط' : '6. Modifications to Terms'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'تحتفظ حكمة ديجيتال بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطار المستخدمين بالتغييرات الجوهرية، ويعتبر استمرار استخدامك للمنصة بعد هذه التغييرات قبولًا للشروط المعدلة.'
                  : 'Hikma Digital reserves the right to modify these terms at any time. Users will be notified of material changes, and your continued use of the platform after such changes constitutes acceptance of the modified terms.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '7. القانون الحاكم' : '7. Governing Law'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'تخضع هذه الشروط لقوانين دولة الإمارات العربية المتحدة وتفسر وفقًا لها، وتخضع أي نزاعات للاختصاص القضائي الحصري لمحاكم دبي.'
                  : 'These terms are governed by and construed in accordance with the laws of the United Arab Emirates, and any disputes are subject to the exclusive jurisdiction of the courts of Dubai.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '8. اتصل بنا' : '8. Contact Us'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'إذا كانت لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا على legal@hikmadigital.com.'
                  : 'If you have any questions about these terms, please contact us at legal@hikmadigital.com.'
                }
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;