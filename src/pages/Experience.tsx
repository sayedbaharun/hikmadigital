import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className={`text-4xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            Live Platform Demo
          </h1>
          <p className={`text-xl text-gray-600 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            Experience the future of human-AI collaboration
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;