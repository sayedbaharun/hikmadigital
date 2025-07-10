import React, { useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../hooks/useContent';
import { ClientLogo } from '../content/types';

const ClientLogos: React.FC = () => {
  const { language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollX = useRef(0);
  const content = useContent<{ clients: ClientLogo[] }>('site.clients');
  
  // Duplicate logos for seamless scrolling
  const logos = [...content.clients, ...content.clients];
  
  useAnimationFrame(() => {
    if (scrollRef.current) {
      scrollX.current += 0.5;
      const maxScroll = scrollRef.current.scrollWidth / 2;
      
      if (scrollX.current >= maxScroll) {
        scrollX.current = 0;
      }
      
      scrollRef.current.style.transform = `translateX(-${scrollX.current}px)`;
    }
  });
  
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-text-secondary mb-12"
        >
          {language === 'ar' ? 'موثوق به من قبل الشركات الرائدة في دبي' : 'Trusted by leading Dubai companies'}
        </motion.p>
        
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex items-center gap-16 py-8"
              style={{ width: 'max-content' }}
            >
              {logos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex items-center justify-center h-12 px-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt[language]}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;