import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface AboutProps {
  openContactForm?: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const About: React.FC<AboutProps> = ({ openContactForm }) => {
  const { isRTL, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section">
        <div className="container-custom text-center">
          <div className="space-y-8">
            <h1 className={`text-3xl md:text-3xl font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'من نحن' : 'About Hikma Digital'}
            </h1>
            
            <p className={`text-lg text-secondary max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' 
                ? 'نحن منصة تعاون بين الذكاء الاصطناعي والخبراء البشريين لتحويل الأعمال في دبي'
                : 'We are a human-AI collaboration platform transforming businesses in Dubai'}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="space-y-8">
            <h2 className={`text-2xl font-semibold text-primary text-center ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'قصتنا' : 'Our Story'}
            </h2>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className={`text-secondary ${isRTL ? 'font-arabic' : ''}`}>
                {language === 'ar'
                  ? 'أسست حكمة ديجيتال في دبي عام 2025 برؤية واضحة: جعل الذكاء الاصطناعي شريكاً للإنسان، وليس بديلاً عنه.'
                  : 'Hikma Digital was founded in Dubai in 2025 with a clear vision: making AI a partner to humans, not a replacement.'
                }
              </p>
              
              <p className={`text-secondary ${isRTL ? 'font-arabic' : ''}`}>
                {language === 'ar'
                  ? 'نحن أول منصة معتمدة من ميثاق الإمارات للذكاء الاصطناعي، نخدم 557,000 شركة صغيرة ومتوسطة في دبي.'
                  : 'We are the first UAE AI Charter certified platform, serving 557,000 SMEs in Dubai.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section">
        <div className="container-custom">
          <div className="space-y-8">
            <h2 className={`text-2xl font-semibold text-primary text-center ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'ماذا نفعل' : 'What We Do'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <h3 className={`font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'أتمتة ذكية' : 'Smart Automation'}
                </h3>
                <p className={`text-secondary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'نخفض 80% من العمل اليدوي' : 'Reduce 80% of manual work'}
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <h3 className={`font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'تحليل البيانات' : 'Data Analysis'}
                </h3>
                <p className={`text-secondary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'قرارات أذكى مبنية على البيانات' : 'Smarter data-driven decisions'}
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <h3 className={`font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'دعم العملاء' : 'Customer Support'}
                </h3>
                <p className={`text-secondary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'خدمة عملاء متقدمة 24/7' : 'Advanced 24/7 customer service'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section bg-neutral-50">
        <div className="container-custom text-center">
          <div className="space-y-6">
            <h2 className={`text-2xl font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'مكتبنا في دبي' : 'Our Dubai Office'}
            </h2>
            
            <p className={`text-secondary ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' 
                ? 'مركز دبي للتكنولوجيا (DTEC) - قلب النظام التقني في الإمارات'
                : 'Dubai Technology Entrepreneur Campus (DTEC) - Heart of UAE tech ecosystem'}
            </p>
            
            <div className="pt-4">
              <button
                onClick={() => openContactForm?.('general')}
                className="btn-primary focus-ring"
              >
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;