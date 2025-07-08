import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import FullViewportHero from '../components/FullViewportHero';
import TrustStrip from '../components/TrustStrip';
import ProblemSection from '../components/ProblemSection';
import SolutionCards from '../components/SolutionCards';
import MetricsSection from '../components/MetricsSection';
import SuccessStories from '../components/SuccessStories';
// import AIAgentShowcase from '../components/AIAgentShowcase';
// import CTASection from '../components/CTASection';

interface HomepageProps {
  openContactForm: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const Homepage: React.FC<HomepageProps> = ({ openContactForm }) => {
  const { language } = useLanguage();

  return (
    <div className="relative">
      {/* Hero Section */}
      <FullViewportHero openContactForm={openContactForm} />
      
      {/* Trust Indicators */}
      <TrustStrip />
      
      {/* Problem Statement */}
      <ProblemSection />
      
      {/* Solution Cards */}
      <SolutionCards />
      
      {/* Metrics */}
      <MetricsSection />
      
      {/* Success Stories */}
      <div className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-16">
            {language === 'ar' ? 'قصص النجاح' : 'Success Stories'}
          </h2>
          <SuccessStories />
        </div>
      </div>
      
      {/* AI Agent Showcase - Coming Soon */}
      {/* <AIAgentShowcase /> */}
      
      {/* CTA Section - Coming Soon */}
      {/* <CTASection openContactForm={openContactForm} /> */}
    </div>
  );
};

export default Homepage;