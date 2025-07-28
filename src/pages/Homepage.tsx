import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PerformanceMetrics from '../components/PerformanceMetrics';
import BusinessValueSection from '../components/BusinessValueSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" role="main" aria-label="Main content">
        <Hero />
        <PerformanceMetrics />
        <BusinessValueSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;