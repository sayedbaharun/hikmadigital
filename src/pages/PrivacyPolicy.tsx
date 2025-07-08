import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy: React.FC = () => {
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
                <Lock className="w-5 h-5 text-primary-400" />
              </div>
              <h1 className={`text-3xl font-light text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
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
                  ? 'تلتزم حكمة ديجيتال بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك الشخصية واستخدامها والكشف عنها عند استخدام منصتنا وخدماتنا.'
                  : 'Hikma Digital is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed when you use our platform and services.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '1. المعلومات التي نجمعها' : '1. Information We Collect'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'نجمع معلومات شخصية مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وتفاصيل شركتك. نجمع أيضًا معلومات غير شخصية مثل بيانات الاستخدام وإحصاءات الموقع.'
                  : 'We collect personal information such as your name, email address, phone number, and company details. We also collect non-personal information such as usage data and site statistics.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '2. كيف نستخدم معلوماتك' : '2. How We Use Your Information'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'نستخدم معلوماتك لتقديم خدماتنا وتحسينها، والتواصل معك، وتخصيص تجربتك، وتحليل استخدام المنصة، والامتثال للالتزامات القانونية.'
                  : 'We use your information to provide and improve our services, communicate with you, personalize your experience, analyze platform usage, and comply with legal obligations.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '3. مشاركة البيانات' : '3. Data Sharing'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'قد نشارك معلوماتك مع مزودي الخدمات الموثوقين الذين يساعدوننا في تشغيل منصتنا وتقديم خدماتنا. نحن لا نبيع معلوماتك الشخصية لأطراف ثالثة.'
                  : 'We may share your information with trusted service providers who help us operate our platform and deliver our services. We do not sell your personal information to third parties.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '4. أمان البيانات' : '4. Data Security'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'نحن نتخذ تدابير أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الاستخدام أو الكشف أو التعديل أو التدمير.'
                  : 'We take reasonable security measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '5. إقامة البيانات' : '5. Data Residency'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'يتم تخزين جميع البيانات ومعالجتها داخل دولة الإمارات العربية المتحدة، وفقًا للوائح المحلية وأفضل الممارسات.'
                  : 'All data is stored and processed within the United Arab Emirates, in accordance with local regulations and best practices.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '6. حقوقك' : '6. Your Rights'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها وحذفها وتقييد معالجتها والاعتراض على معالجتها وطلب نقل بياناتك.'
                  : 'You have the right to access, correct, delete, restrict processing of, object to processing of, and request the portability of your personal information.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '7. ملفات تعريف الارتباط' : '7. Cookies'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'نستخدم ملفات تعريف الارتباط وتقنيات مماثلة لتحسين تجربتك وجمع معلومات حول كيفية استخدامك لمنصتنا.'
                  : 'We use cookies and similar technologies to enhance your experience and collect information about how you use our platform.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '8. التغييرات على سياسة الخصوصية' : '8. Changes to Privacy Policy'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات جوهرية عن طريق نشر السياسة الجديدة على هذه الصفحة.'
                  : 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page.'
                }
              </p>

              <h2 className={`text-xl font-medium text-white mt-8 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '9. اتصل بنا' : '9. Contact Us'}
              </h2>
              <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على privacy@hikmadigital.com.'
                  : 'If you have any questions about this Privacy Policy, please contact us at privacy@hikmadigital.com.'
                }
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;