import { useState } from 'react';

const BilingualHoverText = ({ english, arabic, className = "" }: { english: string, arabic: string, className?: string }) => {
  const [showArabic, setShowArabic] = useState(false);

  return (
    <span 
      className={`inline-block transition-all duration-500 cursor-pointer ${className}`}
      onMouseEnter={() => setShowArabic(true)}
      onMouseLeave={() => setShowArabic(false)}
    >
      <span className={`transition-opacity duration-300 ${showArabic ? 'opacity-0' : 'opacity-100'}`}>
        {english}
      </span>
      <span className={`absolute transition-opacity duration-300 font-arabic text-right ${showArabic ? 'opacity-100' : 'opacity-0'}`}>
        {arabic}
      </span>
    </span>
  );
};

const ArabicCalligraphy = ({ text, className = "" }: { text: string, className?: string }) => {
  return (
    <div className={`font-arabic text-right leading-relaxed ${className}`}>
      {text}
    </div>
  );
};

const DubaiPattern = () => {
  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <pattern id="islamicPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M10,0 L20,10 L10,20 L0,10 Z" fill="currentColor" />
            <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#islamicPattern)" />
      </svg>
    </div>
  );
};

export { BilingualHoverText, ArabicCalligraphy, DubaiPattern };