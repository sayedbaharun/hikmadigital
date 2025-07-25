import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UAECharterSection from "@/components/UAECharterSection";
import TransformationJourney from "@/components/TransformationJourney";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import IndustriesSection from "@/components/IndustriesSection";
import BusinessValueSection from "@/components/BusinessValueSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content"  role="main"  aria-label="Main content">
      <Hero />
      <PerformanceMetrics />
      <BusinessValueSection />
      <TestimonialsSection />
      <FinalCTA />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
