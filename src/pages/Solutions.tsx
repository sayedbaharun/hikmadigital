import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SolutionsProps {
  openContactForm?: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const Solutions: React.FC<SolutionsProps> = ({ openContactForm }) => {
  const { isRTL, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section">
        <div className="container-custom text-center">
          <div className="space-y-8">
            <h1 className={`text-3xl md:text-3xl font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'حلولنا' : 'Our Solutions'}
            </h1>
            
            <p className={`text-lg text-secondary max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' 
                ? 'حلول ذكاء اصطناعي مصممة للشركات في دبي'
                : 'AI solutions designed for Dubai businesses'}
            </p>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="space-y-8">
            <h2 className={`text-2xl font-semibold text-primary text-center ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'ما نقدمه' : 'What We Offer'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card p-6 text-center space-y-3">
                <h3 className={`font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'أتمتة العمليات' : 'Process Automation'}
                </h3>
                <p className={`text-secondary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'تقليل العمل اليدوي بنسبة 80%' : 'Reduce manual work by 80%'}
                </p>
              </div>
              
              <div className="card p-6 text-center space-y-3">
                <h3 className={`font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'تحليل البيانات' : 'Data Analytics'}
                </h3>
                <p className={`text-secondary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'رؤى ذكية لاتخاذ قرارات أفضل' : 'Smart insights for better decisions'}
                </p>
              </div>
              
              <div className="card p-6 text-center space-y-3">
                <h3 className={`font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'خدمة العملاء' : 'Customer Service'}
                </h3>
                <p className={`text-secondary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'دعم 24/7 بالعربية والإنجليزية' : '24/7 support in Arabic and English'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container-custom">
          <div className="space-y-8">
            <h2 className={`text-2xl font-semibold text-primary text-center ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'القطاعات التي نخدمها' : 'Industries We Serve'}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <h3 className={`font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'المطاعم' : 'Restaurants'}
                </h3>
                <p className={`text-secondary text-sm ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'إدارة الطلبات والحجوزات' : 'Order and reservation management'}
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <h3 className={`font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'التجارة' : 'Retail'}
                </h3>
                <p className={`text-secondary text-sm ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'إدارة المخزون والمبيعات' : 'Inventory and sales management'}
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <h3 className={`font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'الخدمات' : 'Services'}
                </h3>
                <p className={`text-secondary text-sm ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'جدولة المواعيد والعملاء' : 'Appointment and client scheduling'}
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <h3 className={`font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'العقارات' : 'Real Estate'}
                </h3>
                <p className={`text-secondary text-sm ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'إدارة العقارات والعملاء' : 'Property and client management'}
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <h3 className={`font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'الصحة' : 'Healthcare'}
                </h3>
                <p className={`text-secondary text-sm ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'إدارة المرضى والمواعيد' : 'Patient and appointment management'}
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <h3 className={`font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'اللوجستيات' : 'Logistics'}
                </h3>
                <p className={`text-secondary text-sm ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'تحسين النقل والتوصيل' : 'Transportation and delivery optimization'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-50">
        <div className="container-custom text-center">
          <div className="space-y-6">
            <h2 className={`text-2xl font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'ابدأ مع حلولنا' : 'Get Started with Our Solutions'}
            </h2>
            
            <p className={`text-lg text-secondary max-w-xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' 
                ? 'احجز استشارة مجانية لفهم كيف يمكن لحلولنا تحسين عملك'
                : 'Book a free consultation to understand how our solutions can improve your business'}
            </p>
            
            <div className="pt-4">
              <button
                onClick={() => openContactForm?.('assessment')}
                className="btn-primary focus-ring"
              >
                {language === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;