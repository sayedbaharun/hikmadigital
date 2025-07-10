// Bilingual content type
export interface BilingualText {
  en: string;
  ar: string;
}

// Hero section content
export interface HeroContent {
  badge: BilingualText;
  headline: BilingualText;
  subheadline: BilingualText;
  cta: {
    primary: {
      label: BilingualText;
      action: string;
    };
    secondary: {
      label: BilingualText;
      action: string;
    };
  };
  video?: {
    url: string;
    poster?: string;
    autoplay?: boolean;
  };
  backgroundImage?: ImageContent;
  backgroundPattern?: PatternContent;
}

// Trust indicators
export interface TrustItem {
  icon: string;
  text: BilingualText;
  value?: string;
}

export interface TrustContent {
  items: TrustItem[];
}

// Problem section
export interface ProblemContent {
  intro: BilingualText;
  problems: BilingualText[];
  solution: BilingualText;
  solutionSubtext: BilingualText;
}

// Metric item
export interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  label: BilingualText;
  decimals?: number;
}

export interface MetricsContent {
  items: MetricItem[];
}

// Solution card
export interface SolutionCard {
  id: string;
  icon: string;
  title: BilingualText;
  description: BilingualText;
  link: string;
  gradient: string;
  illustration?: ImageContent;
}

export interface SolutionsContent {
  cards: SolutionCard[];
}

// Complete homepage content
export interface HomepageContent {
  hero: HeroContent;
  trust: TrustContent;
  problems: ProblemContent;
  solutions: SolutionsContent;
  metrics: MetricsContent;
  successStories?: {
    title: BilingualText;
    viewAll: BilingualText;
  };
}

// Site metadata
export interface SiteMetadata {
  title: BilingualText;
  description: BilingualText;
  keywords: string[];
  author: string;
  url: string;
  image: string;
}

// Navigation item
export interface NavItem {
  label: BilingualText;
  href: string;
  isExternal?: boolean;
  children?: NavItem[];
}

// Footer content
export interface FooterContent {
  company: {
    name: BilingualText;
    tagline: BilingualText;
    certification: BilingualText;
  };
  links: {
    title: BilingualText;
    items: NavItem[];
  };
  contact: {
    title: BilingualText;
    email: string;
    phone: string;
    address: BilingualText;
  };
  legal: NavItem[];
  copyright: BilingualText;
}

// Content variant for A/B testing
export interface ContentVariant<T> {
  id: string;
  weight: number; // 0-100 percentage
  content: T;
}

// Image content
export interface ImageContent {
  src: string;
  srcSet?: string; // Responsive images
  alt: BilingualText;
  caption?: BilingualText;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
  placeholder?: string; // Base64 blur placeholder
}

// Pattern/Background
export interface PatternContent {
  type: 'gradient' | 'pattern' | 'image';
  value: string; // CSS gradient, SVG path, or image URL
  opacity?: number;
  position?: string;
}

// Client logo
export interface ClientLogo {
  name: string;
  logo: string; // SVG or image path
  url?: string;
  featured?: boolean;
}

// Feature flags
export interface FeatureFlags {
  showVideo: boolean;
  enableChat: boolean;
  showSuccessStories: boolean;
  enableAnimations: boolean;
  useNewColors: boolean;
}