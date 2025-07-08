import React from 'react';
import { EnhancedHero } from '../components/ui/enhanced-hero';
import { LoadingState, HeroLoadingState } from '../components/LoadingStates';
import dubaiSkyline from '../assets/Dubai_Skyline.jpeg';

/**
 * Example: Basic Enhanced Hero Usage
 */
export const BasicHeroExample = () => {
  return (
    <EnhancedHero
      backgroundImage={dubaiSkyline}
      overlayOpacity={0.7}
      gradient={true}
      subtitle="Transform your business with AI-powered insights"
      actions={[
        {
          label: "Get Started",
          href: "/assessment",
          variant: "default"
        },
        {
          label: "Learn More",
          href: "/about",
          variant: "outline"
        }
      ]}
    />
  );
};

/**
 * Example: Hero with Judge Mode Enabled
 */
export const HeroWithJudgeModeExample = () => {
  return (
    <EnhancedHero
      backgroundImage={dubaiSkyline}
      showJudgeMode={true}
      subtitle="Press Ctrl+Shift+J to toggle performance metrics"
      actions={[
        {
          label: "Start Free Trial",
          href: "/trial",
          variant: "default"
        }
      ]}
    />
  );
};

/**
 * Example: Loading States Usage
 */
export const LoadingStatesExample = () => {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Loading State Examples</h2>
      
      {/* Hero Loading */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Hero Loading State</h3>
        <HeroLoadingState />
      </div>
      
      {/* Card Loading */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Card Loading State</h3>
        <LoadingState variant="card" />
      </div>
      
      {/* Text Loading */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Text Loading State</h3>
        <LoadingState variant="text" lines={5} />
      </div>
      
      {/* Button Loading */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Button Loading State</h3>
        <LoadingState variant="button" />
      </div>
      
      {/* Image Loading */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Image Loading State</h3>
        <LoadingState variant="image" />
      </div>
      
      {/* Chart Loading */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Chart Loading State</h3>
        <LoadingState variant="chart" />
      </div>
      
      {/* Loading with Progress */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Loading with Progress</h3>
        <LoadingState variant="card" showProgress={true} progress={65} />
      </div>
    </div>
  );
};

/**
 * Example: Custom Hero Implementation
 */
export const CustomHeroExample = () => {
  return (
    <EnhancedHero
      className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900"
      gradient={false} // Disable default gradient since we're using custom
      title={
        <span>
          <span className="text-purple-400">AI-Powered</span>
          <br />
          <span className="text-white">Business Solutions</span>
        </span>
      }
      subtitle="Customized for your industry"
      titleClassName="text-6xl lg:text-8xl"
      subtitleClassName="text-2xl text-gray-300"
      actionsClassName="mt-12"
      actions={[
        {
          label: "Explore Solutions",
          href: "/solutions",
          variant: "default"
        },
        {
          label: "Book Demo",
          href: "/demo",
          variant: "outline"
        }
      ]}
    />
  );
};

/**
 * Example: Integrating Hero with Lazy Loading
 */
import { lazy, Suspense } from 'react';

const LazyHero = lazy(() => 
  import('../components/ui/enhanced-hero').then(module => ({
    default: module.EnhancedHero
  }))
);

export const LazyLoadedHeroExample = () => {
  return (
    <Suspense fallback={<HeroLoadingState />}>
      <LazyHero
        backgroundImage={dubaiSkyline}
        subtitle="This hero component is lazy loaded for better performance"
        actions={[
          {
            label: "Get Started",
            href: "/start",
            variant: "default"
          }
        ]}
      />
    </Suspense>
  );
};

/**
 * Example: Performance Monitoring Integration
 */
export const PerformanceMonitoredHero = () => {
  React.useEffect(() => {
    // Mark when hero starts rendering
    performance.mark('hero-render-start');
    
    return () => {
      // Mark when hero finishes rendering
      performance.mark('hero-render-end');
      
      // Measure the duration
      performance.measure('hero-render', 'hero-render-start', 'hero-render-end');
      
      // Log the measurement
      const measure = performance.getEntriesByName('hero-render')[0];
      console.log(`Hero rendered in ${measure.duration}ms`);
    };
  }, []);
  
  return (
    <EnhancedHero
      backgroundImage={dubaiSkyline}
      showJudgeMode={true}
      subtitle="This hero tracks its own render performance"
      actions={[
        {
          label: "View Metrics",
          href: "#metrics",
          variant: "default"
        }
      ]}
    />
  );
};