import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Play, Volume2, VolumeX } from 'lucide-react';

interface FullViewportHeroProps {
  openContactForm: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const FullViewportHero: React.FC<FullViewportHeroProps> = ({ openContactForm }) => {
  const { language, isRTL } = useLanguage();
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  // Text animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // Apple's custom ease
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 1.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video/Gradient */}
      <div className="absolute inset-0 z-0">
        {showVideo ? (
          <video
            autoPlay
            loop
            muted={isVideoMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src="/videos/ai-visualization.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
        )}
        
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Logo/Brand */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2"
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className={`text-white/80 text-lg font-light tracking-wide ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {language === 'ar' ? 'حكمة ديجيتال' : 'Hikma Digital'}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className={`text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-tight ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {language === 'ar' ? (
              <>
                <span className="block">شريكك في الذكاء الاصطناعي.</span>
                <span className="block text-white/80">بلمسة إنسانية.</span>
              </>
            ) : (
              <>
                <span className="block">Your AI Partner.</span>
                <span className="block text-white/80">Human Touch.</span>
              </>
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className={`text-xl md:text-2xl lg:text-3xl text-white/70 font-light max-w-3xl mx-auto ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {language === 'ar'
              ? 'حوّل أعمالك في دبي خلال 30 يوماً'
              : 'Transform Dubai Business in 30 Days'}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <button
              onClick={() => setShowVideo(!showVideo)}
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white 
                         rounded-full border border-white/20 hover:bg-white/20 
                         transition-all duration-300 flex items-center gap-3"
            >
              <Play className="w-5 h-5" />
              <span className={isRTL ? 'font-arabic' : ''}>
                {language === 'ar' ? 'شاهد الفيديو' : 'Watch Film'}
              </span>
            </button>

            <button
              onClick={() => openContactForm('assessment')}
              className="group relative px-8 py-4 bg-white text-black rounded-full 
                         hover:bg-white/90 transition-all duration-300 
                         transform hover:scale-105 shadow-2xl"
            >
              <span className={`font-medium ${isRTL ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'ابدأ مجاناً' : 'Start Free'}
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