import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ContactFormModal from './components/ContactFormModal';
import Homepage from './pages/Homepage';
import Demo from './pages/Demo';
import Team from './pages/Team';
import Charter from './pages/Charter';
import Transform from './pages/Transform';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';
import DatabasePage from './pages/DatabasePage';
import Assessment from './pages/Assessment';
import LeadDashboard from './pages/LeadDashboard';
import MobileApp from './components/MobileApp';
import Licensing from './pages/Licensing';
import Partnerships from './pages/Partnerships';
import Legal from './pages/Legal';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AIAgents from './pages/AIAgents';
import Pricing from './pages/Pricing';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import { useContactForm } from './hooks/useContactForm';

function App() {
  const { isModalOpen, formType, openContactForm, closeContactForm } = useContactForm();

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-black text-white flex flex-col">
          <Navbar openContactForm={openContactForm} />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Homepage openContactForm={openContactForm} />} />
              <Route path="/demo" element={<Demo openContactForm={openContactForm} />} />
              <Route path="/team" element={<Team openContactForm={openContactForm} />} />
              <Route path="/charter" element={<Charter openContactForm={openContactForm} />} />
              <Route path="/transform" element={<Transform openContactForm={openContactForm} />} />
              <Route path="/solutions" element={<Solutions openContactForm={openContactForm} />} />
              <Route path="/about" element={<About openContactForm={openContactForm} />} />
              <Route path="/contact" element={<Contact openContactForm={openContactForm} />} />
              <Route path="/database" element={<DatabasePage openContactForm={openContactForm} />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/admin/leads" element={<LeadDashboard />} />
              <Route path="/mobile" element={<MobileApp />} />
              <Route path="/licensing" element={<Licensing openContactForm={openContactForm} />} />
              <Route path="/partnerships" element={<Partnerships openContactForm={openContactForm} />} />
              <Route path="/legal" element={<Legal openContactForm={openContactForm} />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/ai-agents" element={<AIAgents openContactForm={openContactForm} />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/success-stories" element={<SuccessStoriesPage />} />
            </Routes>
          </div>
          <Footer openContactForm={openContactForm} />
          <CookieConsent />
          <ContactFormModal 
            isOpen={isModalOpen} 
            onClose={closeContactForm} 
            formType={formType} 
          />
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1f2937',
                color: '#fff',
                border: '1px solid #374151'
              }
            }}
          />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;