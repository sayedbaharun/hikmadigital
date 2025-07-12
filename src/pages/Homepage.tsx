import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import FullViewportHero from '../components/FullViewportHero';
import TrustStrip from '../components/TrustStrip';
import ProblemSection from '../components/ProblemSection';
import SolutionCards from '../components/SolutionCards';
import MetricsSection from '../components/MetricsSection';
import SuccessStoriesGrid from '../components/SuccessStoriesGrid';
import ClientLogos from '../components/ClientLogos';
import TeamSection from '../components/TeamSection';

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
      
      {/* Client Logos */}
      <ClientLogos />
      
      {/* Success Stories */}
      <div className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-light text-center text-primary-950 mb-16">
            {language === 'ar' ? 'قصص النجاح' : 'Success Stories'}
          </h2>
          <SuccessStoriesGrid />
        </div>
      </div>
      
      {/* Team Section */}
      <TeamSection />
    </div>
  );
};

export default Homepage;