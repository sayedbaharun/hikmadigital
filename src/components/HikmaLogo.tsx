import React from 'react';

interface HikmaLogoProps {
  className?: string;
  size?: number;
}

const HikmaLogo: React.FC<HikmaLogoProps> = ({ className, size = 40 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Brain left side */}
      <path
        d="M25 30 C 15 35, 15 45, 20 55 C 18 65, 25 70, 35 68 C 40 70, 45 65, 50 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Brain curves */}
      <path
        d="M30 35 C 25 40, 30 50, 35 45"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      <path
        d="M25 50 C 30 55, 35 50, 30 58"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Circuit board right side */}
      {/* Main vertical line */}
      <line
        x1="50"
        y1="30"
        x2="50"
        y2="70"
        stroke="currentColor"
        strokeWidth="3"
      />
      
      {/* Horizontal branches */}
      <line
        x1="50"
        y1="35"
        x2="65"
        y2="35"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      <line
        x1="50"
        y1="45"
        x2="70"
        y2="45"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      <line
        x1="50"
        y1="55"
        x2="68"
        y2="55"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Circuit nodes */}
      <circle cx="65" cy="35" r="3" fill="currentColor" />
      <circle cx="70" cy="45" r="3" fill="currentColor" />
      <circle cx="68" cy="55" r="3" fill="currentColor" />
      
      {/* Additional circuit paths */}
      <line
        x1="65"
        y1="35"
        x2="65"
        y2="28"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      <line
        x1="70"
        y1="45"
        x2="75"
        y2="40"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      <circle cx="65" cy="28" r="2" fill="currentColor" />
      <circle cx="75" cy="40" r="2" fill="currentColor" />
    </svg>
  );
};

export default HikmaLogo;