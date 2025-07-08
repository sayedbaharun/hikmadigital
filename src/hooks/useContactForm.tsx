import { useState } from 'react';

export const useContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState<'general' | 'assessment' | 'partnership' | 'licensing'>('general');

  const openContactForm = (type: 'general' | 'assessment' | 'partnership' | 'licensing' = 'general') => {
    setFormType(type);
    setIsModalOpen(true);
  };

  const closeContactForm = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    formType,
    openContactForm,
    closeContactForm
  };
};