import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from 'react-hot-toast';

interface ContactFormProps {
  formType?: 'general' | 'assessment' | 'partnership' | 'licensing';
  className?: string;
  onSubmit?: (formData: any) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  formType = 'general',
  className = '',
  onSubmit
}) => {
  const { language, isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    interest: formType === 'assessment' ? 'ai_assessment' : 
              formType === 'partnership' ? 'partnership' : 
              formType === 'licensing' ? 'ai_licensing' : '',
    message: ''
  });

  const formTitle = {
    general: language === 'ar' ? 'اتصل بنا' : 'Contact Us',
    assessment: language === 'ar' ? 'طلب تقييم مجاني' : 'Request Free Assessment',
    partnership: language === 'ar' ? 'استفسار الشراكة' : 'Partnership Inquiry',
    licensing: language === 'ar' ? 'استفسار الترخيص' : 'Licensing Inquiry'
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      // Show success message
      toast.success(
        language === 'ar'
          ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.'
          : 'Your message has been sent successfully! We\'ll be in touch soon.'
      );
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        interest: formType === 'assessment' ? 'ai_assessment' : 
                  formType === 'partnership' ? 'partnership' : 
                  formType === 'licensing' ? 'ai_licensing' : '',
        message: ''
      });
    } catch (error) {
      toast.error(
        language === 'ar'
          ? 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.'
          : 'An error occurred while sending your message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${className}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className={`block text-sm font-medium text-gray-300 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'الاسم الكامل' : 'Full Name'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}
            placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
          />
        </div>
        
        <div>
          <label className={`block text-sm font-medium text-gray-300 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}
            placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
          />
        </div>
        
        <div>
          <label className={`block text-sm font-medium text-gray-300 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}
            placeholder={language === 'ar' ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
          />
        </div>
        
        <div>
          <label className={`block text-sm font-medium text-gray-300 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'اسم الشركة' : 'Company Name'}
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}
            placeholder={language === 'ar' ? 'أدخل اسم شركتك' : 'Enter your company name'}
          />
        </div>
        
        <div>
          <label className={`block text-sm font-medium text-gray-300 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'ما الذي تهتم به؟' : 'What are you interested in?'} <span className="text-red-500">*</span>
          </label>
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}
          >
            <option value="" disabled>
              {language === 'ar' ? 'اختر خيارًا' : 'Select an option'}
            </option>
            <option value="ai_assessment">
              {language === 'ar' ? 'تقييم جاهزية الذكاء الاصطناعي' : 'AI Readiness Assessment'}
            </option>
            <option value="business_transformation">
              {language === 'ar' ? 'تحول الأعمال' : 'Business Transformation'}
            </option>
            <option value="ai_licensing">
              {language === 'ar' ? 'ترخيص تقنية الذكاء الاصطناعي' : 'AI Technology Licensing'}
            </option>
            <option value="partnership">
              {language === 'ar' ? 'فرص الشراكة' : 'Partnership Opportunities'}
            </option>
            <option value="other">
              {language === 'ar' ? 'أخرى' : 'Other'}
            </option>
          </select>
        </div>
        
        <div>
          <label className={`block text-sm font-medium text-gray-300 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'رسالتك' : 'Your Message'}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}
            placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Type your message here...'}
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed ${isRTL ? 'font-arabic' : 'font-inter'}`}
        >
          {isSubmitting ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              <span>{language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>{language === 'ar' ? 'إرسال' : 'Send'}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;