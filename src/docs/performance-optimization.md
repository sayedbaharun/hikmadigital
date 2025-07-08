# Performance Optimization Guide

## Overview
This guide provides comprehensive performance optimization strategies for the Hikma Digital platform, focusing on achieving maximum impact with minimal load times.

## 1. Lazy Loading Implementation

### Component-Level Lazy Loading
```typescript
// Instead of direct imports
import AIChat from '../components/AIChat';

// Use lazy loading
const AIChat = lazy(() => import('../components/AIChat'));

// Wrap with Suspense
<Suspense fallback={<LoadingState variant="chat" />}>
  <AIChat />
</Suspense>
```

### Route-Level Code Splitting
```typescript
// In your router configuration
const Homepage = lazy(() => import('./pages/Homepage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Assessment = lazy(() => import('./pages/Assessment'));

// Wrap routes with Suspense
<Suspense fallback={<HeroLoadingState />}>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/assessment" element={<Assessment />} />
  </Routes>
</Suspense>
```

## 2. Image Optimization

### Lazy Loading Images
```typescript
const OptimizedImage: React.FC<ImageProps> = ({ src, alt, className }) => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe element
    const element = document.getElementById(`img-${src}`);
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [src]);
  
  return isInView ? <img src={src} alt={alt} className={className} /> : <Skeleton />;
};
```

### Image Format Recommendations
- Use WebP format for better compression
- Implement responsive images with srcset
- Lazy load images below the fold
- Use CDN for image delivery

## 3. Bundle Size Optimization

### Vite Configuration
```javascript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-slot'],
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
```

### Tree Shaking
```typescript
// Import only what you need
import { motion, AnimatePresence } from 'framer-motion';
// Not: import * as framerMotion from 'framer-motion';

// For icons
import { Bot, User, Send } from 'lucide-react';
// Not: import * as Icons from 'lucide-react';
```

## 4. Animation Performance

### GPU-Accelerated Animations
```css
/* Use transform and opacity for animations */
.animate-element {
  transform: translateX(0);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Avoid animating layout properties */
/* Bad: transition: width, height, padding */
/* Good: transition: transform, opacity */
```

### Framer Motion Optimization
```typescript
// Use layout animations sparingly
<motion.div layout="position" /> // Only animate position
<motion.div layout="size" />     // Only animate size

// Disable animations on low-end devices
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const animationVariants = prefersReducedMotion ? {} : {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};
```

## 5. State Management Optimization

### Minimize Re-renders
```typescript
// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Complex rendering */}</div>;
}, (prevProps, nextProps) => {
  // Custom comparison logic
  return prevProps.data.id === nextProps.data.id;
});

// Use useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return calculateExpensiveValue(data);
}, [data]);

// Use useCallback for stable function references
const handleClick = useCallback(() => {
  // Handle click
}, [dependency]);
```

## 6. Network Optimization

### API Request Caching
```typescript
// Implement request caching
const cache = new Map();

async function fetchWithCache(url: string, options?: RequestInit) {
  const cacheKey = `${url}-${JSON.stringify(options)}`;
  
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  
  const response = await fetch(url, options);
  const data = await response.json();
  
  cache.set(cacheKey, data);
  
  // Clear cache after 5 minutes
  setTimeout(() => cache.delete(cacheKey), 5 * 60 * 1000);
  
  return data;
}
```

### Debounce User Input
```typescript
// Debounce search input
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearchTerm = useDebounce(searchTerm, 500);

useEffect(() => {
  if (debouncedSearchTerm) {
    performSearch(debouncedSearchTerm);
  }
}, [debouncedSearchTerm]);
```

## 7. Critical CSS and Fonts

### Inline Critical CSS
```html
<!-- In index.html -->
<style>
  /* Critical CSS for above-the-fold content */
  .hero { min-height: 100vh; background: #000; }
  .glass-card { backdrop-filter: blur(10px); }
</style>
```

### Font Loading Strategy
```css
/* Use font-display: swap for better performance */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: swap;
}
```

## 8. Performance Monitoring

### Web Vitals Tracking
```typescript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric: any) {
  // Send to your analytics endpoint
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### Custom Performance Marks
```typescript
// Mark important milestones
performance.mark('hero-start');
// ... render hero
performance.mark('hero-end');

// Measure duration
performance.measure('hero-render', 'hero-start', 'hero-end');

// Get measurements
const measures = performance.getEntriesByType('measure');
console.log('Hero render time:', measures[0].duration);
```

## 9. Build Optimization

### Production Build Settings
```json
// package.json
{
  "scripts": {
    "build": "vite build --mode production",
    "build:analyze": "vite build --mode production && vite-bundle-visualizer"
  }
}
```

### Environment-Specific Optimizations
```typescript
// Only include dev tools in development
if (import.meta.env.DEV) {
  import('./devtools').then(({ enableDevTools }) => {
    enableDevTools();
  });
}
```

## 10. Caching Strategy

### Service Worker Implementation
```javascript
// sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/static/css/main.css',
        '/static/js/main.js',
        '/assets/logo.png'
      ]);
    })
  );
});
```

### HTTP Caching Headers
```typescript
// Configure in your server
app.use((req, res, next) => {
  // Cache static assets for 1 year
  if (req.url.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
  // Don't cache HTML
  else if (req.url.match(/\.html$/)) {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
  next();
});
```

## Performance Checklist

- [ ] Implement lazy loading for all heavy components
- [ ] Optimize images (format, size, lazy loading)
- [ ] Configure code splitting at route level
- [ ] Use GPU-accelerated animations
- [ ] Implement request caching and debouncing
- [ ] Inline critical CSS
- [ ] Configure font loading strategy
- [ ] Set up performance monitoring
- [ ] Optimize build configuration
- [ ] Implement caching strategy
- [ ] Test on slow 3G connection
- [ ] Run Lighthouse audit and fix issues
- [ ] Monitor bundle size with each deployment