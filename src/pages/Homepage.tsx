import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SimpleHero } from '@/components/ui/simple-hero';

interface HomepageProps {
  openContactForm: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const Homepage: React.FC<HomepageProps> = ({ openContactForm }) => {
  const { language } = useLanguage();

  return (
    <SimpleHero
      badge={language === 'ar' ? 'حكمة ديجيتال' : 'Hikma Digital'}
      title={language === 'ar' ? 'ذكاء اصطناعي للأعمال في دبي' : 'AI for Dubai Business'}
      subtitle={language === 'ar' ? 'تحويل العمليات في 30 يوماً' : 'Transform operations in 30 days'}
      description={language === 'ar' ? 'موثوق من قبل أكثر من 500 شركة في دبي' : 'Trusted by 500+ Dubai companies'}
      onStartClick={() => openContactForm('assessment')}
    />
  );
};

export default Homepage;