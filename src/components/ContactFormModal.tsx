import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from './ContactForm';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType?: 'general' | 'assessment' | 'partnership' | 'licensing';
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ 
  isOpen, 
  onClose,
  formType = 'general'
}) => {
  const { language, isRTL } = useLanguage();
  
  // Close modal on escape key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const getFormTitle = () => {
    switch(formType) {
      case 'assessment':
        return language === 'ar' ? 'طلب تقييم مجاني' : 'Request Free Assessment';
      case 'partnership':
        return language === 'ar' ? 'استفسار الشراكة' : 'Partnership Inquiry';
      case 'licensing':
        return language === 'ar' ? 'استفسار الترخيص' : 'Licensing Inquiry';
      default:
        return language === 'ar' ? 'اتصل بنا' : 'Contact Us';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={onClose}
            ></motion.div>

            {/* Modal panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="inline-block w-full max-w-xl my-8 overflow-hidden text-left align-middle transition-all transform"
            >
              <div className="relative glass-card border border-gray-700 rounded-lg shadow-xl">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="p-6">
                  <h2 className={`text-xl font-medium text-white mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {getFormTitle()}
                  </h2>
                  <ContactForm formType={formType} onSubmit={() => {
                    setTimeout(() => onClose(), 1500);
                  }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;