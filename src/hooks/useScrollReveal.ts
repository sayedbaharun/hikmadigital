import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options.once !== false,
    margin: options.rootMargin || '-100px',
    amount: options.threshold || 0.3,
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, options.delay || 0);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated, options.delay]);

  return {
    ref,
    isInView: options.once !== false ? hasAnimated : isInView,
    hasAnimated,
  };
};