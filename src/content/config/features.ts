import { FeatureFlags } from '../types';

export const featureFlags: FeatureFlags = {
  // Video features
  showVideo: true,
  
  // Chat features
  enableChat: false, // Set to true when chat is ready
  
  // Content sections
  showSuccessStories: true,
  
  // Visual features
  enableAnimations: true,
  
  // Theme
  useNewColors: true // Use Dubai theme instead of minimal
};

// Helper function to check if a feature is enabled
export const isFeatureEnabled = (feature: keyof FeatureFlags): boolean => {
  return featureFlags[feature] ?? false;
};