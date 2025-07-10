import { useLanguage } from '../contexts/LanguageContext';
import { BilingualText } from '../content/types';

// Import all content modules
import { homepageContent } from '../content/pages/homepage';
import { clientsContent } from '../content/site/clients';

// Content registry
const contentRegistry = {
  'homepage': homepageContent,
  'pages.homepage': homepageContent,
  'site.clients': clientsContent,
  // Add more pages here as they are created
};

// Type for accessing nested properties
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Get nested property value
function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Localize content based on current language
function localizeContent<T>(content: T, language: string): T {
  if (!content || typeof content !== 'object') {
    return content;
  }

  // Check if this is a bilingual text object
  if ('en' in content && 'ar' in content) {
    return (content as any)[language] || (content as any).en;
  }

  // If it's an array, localize each item
  if (Array.isArray(content)) {
    return content.map(item => localizeContent(item, language)) as any;
  }

  // If it's an object, localize each property
  const localized: any = {};
  for (const key in content) {
    if (content.hasOwnProperty(key)) {
      localized[key] = localizeContent((content as any)[key], language);
    }
  }
  return localized;
}

// Main hook for accessing content
export function useContent<T = any>(contentPath: string): T {
  const { language } = useLanguage();
  
  // Split the path to get registry key and nested path
  const [registryKey, ...nestedPath] = contentPath.split('.');
  
  // Get the content module
  const contentModule = contentRegistry[registryKey as keyof typeof contentRegistry];
  
  if (!contentModule) {
    console.warn(`Content not found for path: ${contentPath}`);
    return {} as T;
  }
  
  // Get the specific content if nested path exists
  let content = contentModule;
  if (nestedPath.length > 0) {
    content = getNestedValue(contentModule, nestedPath.join('.'));
  }
  
  // Localize the content
  return localizeContent(content, language) as T;
}

// Hook for getting a specific bilingual text
export function useText(contentPath: string): string {
  const { language } = useLanguage();
  const content = useContent<BilingualText | string>(contentPath);
  
  if (typeof content === 'string') {
    return content;
  }
  
  if (content && typeof content === 'object' && 'en' in content && 'ar' in content) {
    return content[language as keyof BilingualText] || content.en;
  }
  
  return '';
}

// Hook for content variants (A/B testing)
export function useContentVariant<T>(contentPath: string, variantId?: string): T {
  const content = useContent<any>(contentPath);
  
  // If content has variants
  if (content?.variants && Array.isArray(content.variants)) {
    // If specific variant requested
    if (variantId) {
      const variant = content.variants.find((v: any) => v.id === variantId);
      return variant?.content || content.variants[0]?.content || {} as T;
    }
    
    // Otherwise, select based on weights
    const random = Math.random() * 100;
    let accumulated = 0;
    
    for (const variant of content.variants) {
      accumulated += variant.weight || 0;
      if (random <= accumulated) {
        return variant.content;
      }
    }
    
    // Fallback to first variant
    return content.variants[0]?.content || {} as T;
  }
  
  return content as T;
}

// Hook for dynamic content updates (future CMS integration)
export function useEditableContent<T>(contentPath: string, onChange?: (content: T) => void): [T, (updates: Partial<T>) => void] {
  const content = useContent<T>(contentPath);
  
  const updateContent = (updates: Partial<T>) => {
    // In production, this would update the CMS
    // For now, just call the onChange callback
    if (onChange) {
      onChange({ ...content, ...updates });
    }
  };
  
  return [content, updateContent];
}