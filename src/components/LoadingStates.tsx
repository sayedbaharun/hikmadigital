import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface LoadingStateProps {
  className?: string;
  variant?: 'default' | 'card' | 'text' | 'button' | 'image' | 'chart';
  lines?: number;
  showProgress?: boolean;
  progress?: number;
}

// Shimmer animation component
const Shimmer: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("relative overflow-hidden", className)}>
    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

// Skeleton loader base component
const Skeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("bg-gray-800 rounded opacity-70 relative overflow-hidden", className)}>
    <Shimmer className="absolute inset-0" />
  </div>
);

// Progress bar component
const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
    <motion.div
      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  </div>
);

// Loading dots animation
const LoadingDots: React.FC = () => (
  <div className="flex space-x-2">
    {[0, 1, 2].map((index) => (
      <div
        key={index}
        className={`w-2 h-2 bg-primary-400 rounded-full ${
          index === 0 ? 'opacity-100' : index === 1 ? 'opacity-75' : 'opacity-50'
        }`}
      />
    ))}
  </div>
);

// Main loading states component
export const LoadingState: React.FC<LoadingStateProps> = ({
  className,
  variant = 'default',
  lines = 3,
  showProgress = false,
  progress = 0,
}) => {
  const variants = {
    default: () => (
      <div className={cn("space-y-3", className)}>
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-full" style={{ width: `${100 - i * 20}%` }} />
        ))}
      </div>
    ),
    
    card: () => (
      <div className={cn("glass-card p-6 space-y-4", className)}>
        <Skeleton className="h-8 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
        <div className="flex gap-2 mt-4">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>
    ),
    
    text: () => (
      <div className={cn("space-y-2", className)}>
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton key={i} className="h-4" style={{ width: `${90 - Math.random() * 30}%` }} />
        ))}
      </div>
    ),
    
    button: () => (
      <Skeleton className={cn("h-10 w-32 rounded-lg", className)} />
    ),
    
    image: () => (
      <div className={cn("relative", className)}>
        <Skeleton className="w-full h-64 rounded-xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingDots />
        </div>
      </div>
    ),
    
    chart: () => (
      <div className={cn("glass-card p-6", className)}>
        <Skeleton className="h-6 w-48 mb-4" />
        <div className="flex items-end gap-2 h-48">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton
              key={i}
              className="flex-1"
              style={{ height: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </div>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {showProgress && (
        <div className="mb-4 space-y-2">
          <div className="flex justify-between text-sm text-gray-400">
            <span>Loading...</span>
            <span>{progress}%</span>
          </div>
          <ProgressBar progress={progress} />
        </div>
      )}
      {variants[variant]()}
    </motion.div>
  );
};

// Hero section loading state
export const HeroLoadingState: React.FC = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="container px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <Skeleton className="h-8 w-64 mx-auto rounded-full" />
        <div className="space-y-4">
          <Skeleton className="h-16 w-3/4 mx-auto" />
          <Skeleton className="h-16 w-2/3 mx-auto" />
          <Skeleton className="h-16 w-1/2 mx-auto" />
        </div>
        <Skeleton className="h-6 w-2/3 mx-auto" />
        <div className="flex gap-4 justify-center">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
        </div>
      </div>
    </div>
  </div>
);

// Business calculator loading state
export const CalculatorLoadingState: React.FC = () => (
  <div className="glass-card p-8">
    <Skeleton className="h-8 w-64 mb-6" />
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <Skeleton className="h-64 w-full rounded-xl" />
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
        </div>
      </div>
    </div>
  </div>
);

// Chat interface loading state
export const ChatLoadingState: React.FC = () => (
  <div className="glass-card p-6 h-96 flex flex-col">
    <Skeleton className="h-8 w-48 mb-4" />
    <div className="flex-1 space-y-4 overflow-hidden">
      <div className="flex gap-3">
        <Skeleton className="w-8 h-8 rounded-full flex-shrink-0" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <div className="flex gap-3 justify-end">
        <div className="space-y-2 flex-1 text-right">
          <Skeleton className="h-4 w-2/3 ml-auto" />
          <Skeleton className="h-4 w-1/2 ml-auto" />
        </div>
        <Skeleton className="w-8 h-8 rounded-full flex-shrink-0" />
      </div>
    </div>
    <div className="flex gap-2 mt-4">
      <Skeleton className="flex-1 h-10" />
      <Skeleton className="w-10 h-10" />
    </div>
  </div>
);

// Dashboard loading state
export const DashboardLoadingState: React.FC = () => (
  <div className="grid lg:grid-cols-3 gap-6">
    <div className="lg:col-span-2 space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="glass-card p-4">
            <Skeleton className="h-4 w-20 mb-2" />
            <Skeleton className="h-8 w-24" />
          </div>
        ))}
      </div>
      <LoadingState variant="chart" />
      <LoadingState variant="card" />
    </div>
    <div className="space-y-6">
      <LoadingState variant="card" />
      <div className="glass-card p-4">
        <Skeleton className="h-6 w-32 mb-4" />
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <Skeleton className="h-4 w-24 mb-1" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Form loading state
export const FormLoadingState: React.FC = () => (
  <div className="glass-card p-8 max-w-2xl mx-auto">
    <Skeleton className="h-8 w-64 mb-2" />
    <Skeleton className="h-4 w-96 mb-8" />
    <div className="space-y-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full" />
        </div>
      ))}
      <div className="flex gap-4 mt-8">
        <Skeleton className="h-12 w-32" />
        <Skeleton className="h-12 w-32" />
      </div>
    </div>
  </div>
);

// Table loading state
export const TableLoadingState: React.FC<{ rows?: number }> = ({ rows = 5 }) => (
  <div className="glass-card p-6">
    <div className="flex justify-between items-center mb-6">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-10 w-32" />
    </div>
    <div className="space-y-2">
      <div className="grid grid-cols-5 gap-4 p-3 border-b border-gray-800">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-4" />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="grid grid-cols-5 gap-4 p-3">
          {Array.from({ length: 5 }).map((_, j) => (
            <Skeleton key={j} className="h-4" style={{ width: `${80 + Math.random() * 20}%` }} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

// Add shimmer animation to CSS
const shimmerStyles = `
  @keyframes shimmer {
    to {
      transform: translateX(100%);
    }
  }
  
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = shimmerStyles;
  document.head.appendChild(style);
}

// Export all loading states
export default {
  LoadingState,
  HeroLoadingState,
  CalculatorLoadingState,
  ChatLoadingState,
  DashboardLoadingState,
  FormLoadingState,
  TableLoadingState,
};