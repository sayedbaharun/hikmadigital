import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CookieConsent: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [showConsent, setShowConsent] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show the banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    } else {
      setHasConsented(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
    setHasConsented(true);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
    setHasConsented(true);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="glass-card p-4 md:p-6 border border-gray-700 shadow-xl">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="p-3 bg-primary-500/20 rounded-full">
                  <Cookie className="w-6 h-6 text-primary-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className={`text-lg font-medium text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'نحن نستخدم ملفات تعريف الارتباط' : 'We use cookies'}
                  </h3>
                  <p className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' 
                      ? 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل حركة المرور وتخصيص المحتوى. باستخدام موقعنا، فإنك توافق على سياسة الخصوصية الخاصة بنا.'
                      : 'We use cookies to enhance your experience, analyze traffic, and personalize content. By using our site, you agree to our privacy policy.'
                    }
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={declineCookies}
                    className={`px-4 py-2 glass-card glass-card-hover text-gray-300 rounded-lg transition-all duration-300 text-sm ${isRTL ? 'font-arabic' : 'font-inter'}`}
                  >
                    {language === 'ar' ? 'رفض' : 'Decline'}
                  </button>
                  <button
                    onClick={acceptCookies}
                    className={`px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 text-sm ${isRTL ? 'font-arabic' : 'font-inter'}`}
                  >
                    {language === 'ar' ? 'قبول الكل' : 'Accept All'}
                  </button>
                </div>
                
                <button
                  onClick={() => setShowConsent(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Success notification after consent */}
      {hasConsented && !showConsent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="fixed bottom-4 right-4 z-50 bg-green-500/20 border border-green-500/30 rounded-lg p-3 shadow-lg"
        >
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className={`text-sm text-green-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'تم حفظ تفضيلاتك' : 'Preferences saved'}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;