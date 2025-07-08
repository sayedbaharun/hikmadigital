import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.demo': 'Live Demo',
    'nav.team': 'Our Team',
    'nav.charter': 'UAE Charter',
    'nav.transform': 'Transform',
    'nav.solutions': 'Solutions',
    'nav.resources': 'Resources',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Homepage
    'hero.title': 'Meet Your AI-Human Business Team',
    'hero.subtitle': 'The world\'s first UAE Charter-certified platform where AI agents work as equal partners with human coaches to transform Dubai\'s 557,000 SMEs.',
    'hero.cta': 'Start Your Transformation',
    'hero.demo': 'Try Live Demo',
    
    // AI Chat
    'chat.title': 'Chat with Hikma AI',
    'chat.placeholder': 'Ask me about your business challenges...',
    'chat.send': 'Send',
    'chat.greeting': 'مرحباً! I\'m Hikma, your AI business coach. How can I help transform your business today?',
    
    // Team
    'team.title': 'Your Transformation Team',
    'team.subtitle': '3 Human Coaches + 3 AI Agents Working Together',
    
    // Charter
    'charter.title': 'UAE Charter Certified',
    'charter.subtitle': 'First AI platform to meet all 12 UAE Charter principles',
    
    // Calculator
    'calc.title': 'Business Impact Calculator',
    'calc.business-type': 'Business Type',
    'calc.employees': 'Number of Employees',
    'calc.revenue': 'Monthly Revenue (AED)',
    'calc.calculate': 'Calculate ROI',
    
    // Business Types
    'business.restaurant': 'Restaurant',
    'business.retail': 'Retail',
    'business.logistics': 'Logistics',
    'business.realestate': 'Real Estate',
    'business.consulting': 'Consulting',
    'business.hospitality': 'Hospitality',
    
    // Demo Page
    'demo.title': 'Experience Live Human-AI Business Coaching',
    'demo.subtitle': 'Choose your Dubai business scenario and watch our certified team transform your operations in real-time',
    
    // Transform Page
    'transform.title': 'Your 30-Day Business Transformation Journey',
    'transform.subtitle': 'From traditional operations to AI-enhanced efficiency - track every step of your SME evolution',
    
    // Solutions Page
    'solutions.title': 'AI Solutions Tailored for Dubai\'s Business Landscape',
    'solutions.subtitle': 'Industry-specific transformations designed for UAE market dynamics and cultural context',
    
    // Resources Page
    'resources.title': 'Master AI-Driven Business Growth',
    'resources.subtitle': 'Comprehensive resources, guides, and insights for Dubai\'s AI-forward SME community',
    
    // About Page
    'about.title': 'Pioneering the Future of Human-AI Collaboration',
    'about.subtitle': 'Born in Dubai, built for the world - the story of how we\'re transforming business through ethical AI partnership',
    
    // Contact Page
    'contact.title': 'Ready to Transform Your Business?',
    'contact.subtitle': 'Multiple ways to connect with our human-AI team and begin your journey',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.demo': 'تجربة مباشرة',
    'nav.team': 'فريقنا',
    'nav.charter': 'ميثاق الإمارات',
    'nav.transform': 'التحول',
    'nav.solutions': 'الحلول',
    'nav.resources': 'الموارد',
    'nav.about': 'نبذة عنا',
    'nav.contact': 'اتصل بنا',
    
    // Homepage
    'hero.title': 'تعرف على فريق عملك من الذكاء الاصطناعي والخبراء البشريين',
    'hero.subtitle': 'أول منصة معتمدة من ميثاق الإمارات حيث يعمل وكلاء الذكاء الاصطناعي كشركاء متساوين مع المدربين البشريين لتحويل 557,000 شركة صغيرة ومتوسطة في دبي.',
    'hero.cta': 'ابدأ تحولك',
    'hero.demo': 'جرب العرض التوضيحي',
    
    // AI Chat
    'chat.title': 'تحدث مع حكمة الذكي',
    'chat.placeholder': 'اسألني عن تحديات عملك...',
    'chat.send': 'إرسال',
    'chat.greeting': 'Hello! أنا حكمة، مدربك في الأعمال بالذكاء الاصطناعي. كيف يمكنني مساعدتك في تحويل عملك اليوم؟',
    
    // Team
    'team.title': 'فريق التحول الخاص بك',
    'team.subtitle': '3 مدربين بشريين + 3 وكلاء ذكاء اصطناعي يعملون معاً',
    
    // Charter
    'charter.title': 'معتمد من ميثاق الإمارات',
    'charter.subtitle': 'أول منصة ذكاء اصطناعي تلبي جميع مبادئ ميثاق الإمارات الـ12',
    
    // Calculator
    'calc.title': 'حاسبة تأثير الأعمال',
    'calc.business-type': 'نوع العمل',
    'calc.employees': 'عدد الموظفين',
    'calc.revenue': 'الإيرادات الشهرية (درهم)',
    'calc.calculate': 'احسب العائد على الاستثمار',
    
    // Business Types
    'business.restaurant': 'مطعم',
    'business.retail': 'تجارة التجزئة',
    'business.logistics': 'اللوجستيات',
    'business.realestate': 'العقارات',
    'business.consulting': 'استشارات',
    'business.hospitality': 'الضيافة',
    
    // Demo Page
    'demo.title': 'اختبر التدريب المباشر للأعمال بالذكاء الاصطناعي والخبراء البشريين',
    'demo.subtitle': 'اختر سيناريو عملك في دبي وشاهد فريقنا المعتمد يحول عملياتك في الوقت الفعلي',
    
    // Transform Page
    'transform.title': 'رحلة تحول عملك خلال 30 يوماً',
    'transform.subtitle': 'من العمليات التقليدية إلى الكفاءة المعززة بالذكاء الاصطناعي - تتبع كل خطوة في تطور شركتك الصغيرة والمتوسطة',
    
    // Solutions Page
    'solutions.title': 'حلول الذكاء الاصطناعي المصممة لبيئة الأعمال في دبي',
    'solutions.subtitle': 'تحولات خاصة بالصناعة مصممة لديناميكيات السوق الإماراتي والسياق الثقافي',
    
    // Resources Page
    'resources.title': 'إتقان نمو الأعمال المدفوع بالذكاء الاصطناعي',
    'resources.subtitle': 'موارد شاملة وأدلة ورؤى لمجتمع الشركات الصغيرة والمتوسطة المتقدم في الذكاء الاصطناعي في دبي',
    
    // About Page
    'about.title': 'ريادة مستقبل التعاون بين الإنسان والذكاء الاصطناعي',
    'about.subtitle': 'وُلدت في دبي، بُنيت للعالم - قصة كيف نحول الأعمال من خلال شراكة الذكاء الاصطناعي الأخلاقية',
    
    // Contact Page
    'contact.title': 'هل أنت مستعد لتحويل عملك؟',
    'contact.subtitle': 'طرق متعددة للتواصل مع فريقنا من الذكاء الاصطناعي والخبراء البشريين وبدء رحلتك',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div className={isRTL ? 'rtl' : 'ltr'} dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};