import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../hooks/useContent';
import { HeroContent } from '../content/types';
import { isFeatureEnabled } from '../content/config/features';
import { Play, Volume2, VolumeX, Shield, Award } from 'lucide-react';

interface FullViewportHeroProps {
  openContactForm: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const FullViewportHero: React.FC<FullViewportHeroProps> = ({ openContactForm }) => {
  const { isRTL, language } = useLanguage();
  const content = useContent<HeroContent>('homepage.hero');
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const enableVideo = isFeatureEnabled('showVideo');

  // Simple fade-in animation
  const fadeInVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-950">
      {/* Background Pattern */}
      {content?.backgroundPattern && (
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${content.backgroundPattern.value})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: content.backgroundPattern.position || 'center',
            opacity: content.backgroundPattern.opacity || 0.05
          }}
        />
      )}
      
      {/* Background Video/Gradient */}
      <div className="absolute inset-0 z-0">
        {showVideo && enableVideo && content?.video ? (
          <video
            autoPlay
            loop
            muted={isVideoMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src={content.video.url} type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800" />
        )}
        
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo/Brand */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center space-x-2"
          >
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className={`text-white/80 text-lg font-light tracking-wide ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {content?.badge || 'Hikma Digital'}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className={`text-2xl md:text-3xl font-semibold text-white leading-tight ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {(content?.headline || 'Your AI Partner. Human Touch.').split('.').map((line, index) => (
              <span key={index} className={`block ${index === 1 ? 'text-gold-light' : ''}`}>
                {line}{index === 0 ? '.' : ''}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className={`text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {content?.subheadline || 'Transform Dubai Business in 30 Days'}
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 py-6"
          >
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="w-5 h-5 text-gold" />
              <span className={`text-sm ${isRTL ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'معتمد من ميثاق الإمارات' : 'UAE Charter Certified'}
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Award className="w-5 h-5 text-gold" />
              <span className={`text-sm ${isRTL ? 'font-arabic' : ''}`}>
                {language === 'ar' ? '500+ شركة في دبي' : '500+ Dubai Companies'}
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            {enableVideo && (
              <button
                onClick={() => setShowVideo(!showVideo)}
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white 
                           rounded-full border border-gold/30 hover:border-gold hover:bg-gold/10 
                           transition-all duration-300 flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                <span className={isRTL ? 'font-arabic' : ''}>
                  {content?.cta?.secondary?.label || 'Watch Film'}
                </span>
              </button>
            )}

            <button
              onClick={() => openContactForm(content?.cta?.primary?.action as any || 'assessment')}
              className="group relative px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-primary-950 
                         rounded-full hover:shadow-2xl hover:shadow-gold/25 
                         transition-all duration-300 transform hover:scale-105 font-medium"
            >
              <span className={isRTL ? 'font-arabic' : ''}>
                {content?.cta?.primary?.label || 'Start Free'}
              </span>
            </button>
          </motion.div>

          {/* Video Controls */}
          {showVideo && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsVideoMuted(!isVideoMuted)}
              className="absolute bottom-8 right-8 p-3 bg-white/10 backdrop-blur-sm 
                         rounded-full border border-white/20 hover:bg-white/20 
                         transition-all duration-300"
            >
              {isVideoMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </motion.button>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full mx-auto animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default FullViewportHero;