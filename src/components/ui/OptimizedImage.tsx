import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ImageContent } from '@/content/types';
import { useLanguage } from '@/contexts/LanguageContext';

interface OptimizedImageProps extends Partial<ImageContent> {
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src = '',
  srcSet,
  alt,
  caption,
  loading = 'lazy',
  priority = false,
  placeholder,
  className = '',
  onLoad,
  onError,
}) => {
  const { language } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imageRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(imageRef, { once: true, margin: '50px' });

  // Determine alt text based on language
  const altText = alt ? (typeof alt === 'string' ? alt : alt[language as keyof typeof alt]) : '';
  const captionText = caption ? (typeof caption === 'string' ? caption : caption[language as keyof typeof caption]) : '';

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Preload priority images
  useEffect(() => {
    if (priority && src) {
      const img = new Image();
      img.src = src;
      if (srcSet) {
        img.srcset = srcSet;
      }
    }
  }, [src, srcSet, priority]);

  return (
    <figure ref={imageRef} className={`relative ${className}`}>
      {/* Placeholder/Skeleton */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-neutral-100 animate-pulse"
          style={{
            backgroundImage: placeholder ? `url(${placeholder})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: placeholder ? 'blur(20px)' : undefined,
          }}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
          <div className="text-center text-neutral-400">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      {(isInView || priority) && !hasError && (
        <motion.img
          src={src}
          srcSet={srcSet}
          alt={altText}
          loading={priority ? 'eager' : loading}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={`w-full h-full object-cover ${isLoaded ? '' : 'invisible'}`}
        />
      )}

      {/* Caption */}
      {captionText && isLoaded && (
        <figcaption className="mt-2 text-sm text-text-secondary text-center">
          {captionText}
        </figcaption>
      )}
    </figure>
  );
};

// WebP picture element wrapper
export const Picture: React.FC<{
  src: string;
  webpSrc?: string;
  alt: any;
  className?: string;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
}> = ({ src, webpSrc, alt, className, loading = 'lazy', priority = false }) => {
  const { language } = useLanguage();
  const altText = alt ? (typeof alt === 'string' ? alt : alt[language as keyof typeof alt]) : '';

  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img 
        src={src} 
        alt={altText} 
        className={className} 
        loading={priority ? 'eager' : loading}
      />
    </picture>
  );
};

export default OptimizedImage;