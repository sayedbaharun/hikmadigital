import { useEffect, useState, useRef } from 'react';

interface CountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
}

export const useCountUp = (options: CountUpOptions) => {
  const [count, setCount] = useState(options.start || 0);
  const [isAnimating, setIsAnimating] = useState(false);
  const countRef = useRef(options.start || 0);
  const rafRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const formatNumber = (num: number) => {
    const formatted = num.toFixed(options.decimals || 0);
    if (options.separator) {
      const parts = formatted.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, options.separator);
      return parts.join('.');
    }
    return formatted;
  };

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const progress = Math.min(
      (timestamp - startTimeRef.current) / (options.duration || 2000),
      1
    );

    // Ease out cubic function for smooth animation
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    
    const currentCount = (options.start || 0) + 
      (options.end - (options.start || 0)) * easeOutCubic;
    
    countRef.current = currentCount;
    setCount(currentCount);

    if (progress < 1) {
      rafRef.current = requestAnimationFrame(animate);
    } else {
      setIsAnimating(false);
    }
  };

  const startAnimation = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      startTimeRef.current = undefined;
      rafRef.current = requestAnimationFrame(animate);
    }
  };

  const resetAnimation = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    setCount(options.start || 0);
    countRef.current = options.start || 0;
    setIsAnimating(false);
    startTimeRef.current = undefined;
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const formattedCount = `${options.prefix || ''}${formatNumber(count)}${options.suffix || ''}`;

  return {
    count,
    formattedCount,
    startAnimation,
    resetAnimation,
    isAnimating,
  };
};