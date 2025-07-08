import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HumanCoaches: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className={`text-4xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            Meet Our Human Experts
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HumanCoaches;