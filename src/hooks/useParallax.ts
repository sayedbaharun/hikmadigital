import { useEffect, useState, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  offset?: number;
  disabled?: boolean;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const [translateY, setTranslateY] = useState(0);
  const elementRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>();
  
  const speed = options.speed || 0.5;
  const offset = options.offset || 0;

  useEffect(() => {
    if (options.disabled) return;

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!elementRef.current) return;

        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Calculate if element is in viewport
        const elementBottom = elementTop + elementHeight;
        const isInViewport = elementTop < windowHeight && elementBottom > 0;
        
        if (isInViewport) {
          // Calculate parallax offset based on scroll position
          const scrolled = window.pageYOffset;
          const yPos = -(scrolled * speed) + offset;
          setTranslateY(yPos);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed, offset, options.disabled]);

  return {
    ref: elementRef,
    style: {
      transform: `translateY(${translateY}px)`,
      willChange: 'transform',
    },
  };
};