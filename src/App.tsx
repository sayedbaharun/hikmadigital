import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ContactFormModal from './components/ContactFormModal';
import { useContactForm } from './hooks/useContactForm';

// Lazy load all pages for better performance
const Homepage = lazy(() => import('./pages/Homepage'));
const Demo = lazy(() => import('./pages/Demo'));
const Team = lazy(() => import('./pages/Team'));
const Charter = lazy(() => import('./pages/Charter'));
const Transform = lazy(() => import('./pages/Transform'));
const Solutions = lazy(() => import('./pages/Solutions'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const DatabasePage = lazy(() => import('./pages/DatabasePage'));
const Assessment = lazy(() => import('./pages/Assessment'));
const LeadDashboard = lazy(() => import('./pages/LeadDashboard'));
const MobileApp = lazy(() => import('./components/MobileApp'));
const Licensing = lazy(() => import('./pages/Licensing'));
const Partnerships = lazy(() => import('./pages/Partnerships'));
const Legal = lazy(() => import('./pages/Legal'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const AIAgents = lazy(() => import('./pages/AIAgents'));
const Pricing = lazy(() => import('./pages/Pricing'));
const SuccessStoriesPage = lazy(() => import('./pages/SuccessStoriesPage'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

function App() {
  const { isModalOpen, formType, openContactForm, closeContactForm } = useContactForm();

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white text-primary-950 flex flex-col">
          <Navbar openContactForm={openContactForm} />
          <div className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Homepage />} />
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
            </Suspense>
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