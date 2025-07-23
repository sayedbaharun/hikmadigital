import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import SuccessStories from '../components/SuccessStories';

const SuccessStoriesPage: React.FC = () => {
  const { isRTL, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SuccessStories />
      </div>
    </div>
  );
};

export default SuccessStoriesPage;