import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../hooks/useContent';
import { ProblemContent } from '../content/types';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProblemSection: React.FC = () => {
  const { isRTL } = useLanguage();
  const content = useContent<ProblemContent>('homepage.problems');
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const { ref: sectionRef, isInView } = useScrollReveal({ once: false, threshold: 0.5 });
  const { ref: problemRef, isInView: problemInView } = useScrollReveal({ once: false, delay: 500 });
  const { ref: solutionRef, isInView: solutionInView } = useScrollReveal({ once: false, delay: 1500 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-32 text-center">
        {/* Initial Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className={`text-2xl md:text-3xl font-light text-primary mb-24 ${
            isRTL ? 'font-arabic' : ''
          }`}>
            {content?.intro || 'Every Dubai business faces the same challenge.'}
          </h2>
        </motion.div>

        {/* Problems Reveal */}
        <motion.div
          ref={problemRef}
          variants={containerVariants}
          initial="hidden"
          animate={problemInView ? "visible" : "hidden"}
          className="space-y-8 mb-32"
        >
          {(content?.problems || []).map((problem, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className={`text-lg md:text-xl text-text-primary font-light leading-relaxed ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              {problem}
            </motion.p>
          ))}
        </motion.div>

        {/* Solution Tease */}
        <motion.div
          ref={solutionRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={solutionInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-32"
        >
          <p className={`text-xl md:text-2xl font-light text-primary mb-6 ${
            isRTL ? 'font-arabic' : ''
          }`}>
            {content?.solution || 'What if AI could solve this?'}
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={solutionInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className={`text-lg md:text-xl font-light text-gold ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {content?.solutionSubtext || 'With a human touch?'}
          </motion.p>
        </motion.div>

        {/* Visual Interest - Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-3xl opacity-20"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-pink-100 to-yellow-100 rounded-full blur-3xl opacity-20"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;