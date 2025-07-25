// Mobile responsiveness testing utilities
export const viewportSizes = {
  mobile: { width: 375, height: 667 }, // iPhone SE
  mobileLarge: { width: 414, height: 896 }, // iPhone 11 Pro Max
  tablet: { width: 768, height: 1024 }, // iPad
  desktop: { width: 1200, height: 800 },
  desktopLarge: { width: 1920, height: 1080 }
};

export const testResponsiveness = () => {
  console.log('🔍 Testing Mobile Responsiveness...');
  
  // Test touch targets (minimum 44px)
  const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
  const smallTargets = Array.from(interactiveElements).filter(el => {
    const rect = el.getBoundingClientRect();
    return rect.width < 44 || rect.height < 44;
  });
  
  if (smallTargets.length > 0) {
    console.warn(`⚠️ Found ${smallTargets.length} touch targets smaller than 44px:`, smallTargets);
  } else {
    console.log('✅ All touch targets meet minimum size requirements');
  }
  
  // Test text readability
  const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
  const smallText = Array.from(textElements).filter(el => {
    const styles = window.getComputedStyle(el);
    const fontSize = parseInt(styles.fontSize);
    return fontSize < 16;
  });
  
  if (smallText.length > 0) {
    console.warn(`⚠️ Found ${smallText.length} text elements smaller than 16px:`, smallText);
  } else {
    console.log('✅ All text meets minimum readable size');
  }
  
  // Test horizontal scroll
  const hasHorizontalScroll = document.body.scrollWidth > window.innerWidth;
  if (hasHorizontalScroll) {
    console.warn('⚠️ Horizontal scroll detected on mobile');
  } else {
    console.log('✅ No horizontal scroll detected');
  }
  
  console.log('📱 Mobile responsiveness test complete');
};

export const testAnimations = () => {
  console.log('🎬 Testing Animations...');
  
  // Check for CSS animations
  const animatedElements = document.querySelectorAll('[class*="animate-"]');
  console.log(`Found ${animatedElements.length} elements with animations`);
  
  // Test hover states
  const hoverElements = document.querySelectorAll('[class*="hover:"]');
  console.log(`Found ${hoverElements.length} elements with hover states`);
  
  // Check for smooth scrolling
  const smoothScrollElements = document.querySelectorAll('[style*="scroll-behavior"]');
  console.log(`Found ${smoothScrollElements.length} elements with smooth scrolling`);
  
  console.log('✅ Animation test complete');
};

export const testAccessibility = () => {
  console.log('♿ Testing Accessibility...');
  
  // Check for alt text on images
  const images = document.querySelectorAll('img');
  const imagesWithoutAlt = Array.from(images).filter(img => !img.getAttribute('alt'));
  if (imagesWithoutAlt.length > 0) {
    console.warn(`⚠️ Found ${imagesWithoutAlt.length} images without alt text:`, imagesWithoutAlt);
  } else {
    console.log('✅ All images have alt text');
  }
  
  // Check for focus indicators
  const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
  console.log(`Found ${focusableElements.length} focusable elements`);
  
  // Check for ARIA labels
  const elementsWithAriaLabel = document.querySelectorAll('[aria-label], [aria-labelledby]');
  console.log(`Found ${elementsWithAriaLabel.length} elements with ARIA labels`);
  
  // Check color contrast (basic check)
  const lightElements = document.querySelectorAll('.text-white, .text-gray-100');
  const darkElements = document.querySelectorAll('.text-black, .text-gray-900');
  console.log(`Light text elements: ${lightElements.length}, Dark text elements: ${darkElements.length}`);
  
  console.log('✅ Accessibility test complete');
};

export const testKeyboardNavigation = () => {
  console.log('⌨️ Testing Keyboard Navigation...');
  
  // Test tab order
  const focusableElements = document.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  console.log(`Found ${focusableElements.length} keyboard focusable elements`);
  
  // Check for skip links
  const skipLinks = document.querySelectorAll('a[href="#main-content"], a[href^="#main"]');
  if (skipLinks.length > 0) {
    console.log('✅ Skip links found');
  } else {
    console.warn('⚠️ No skip links found');
  }
  
  console.log('✅ Keyboard navigation test complete');
};

export const runAllTests = () => {
  console.log('🧪 Running comprehensive UI tests...');
  testResponsiveness();
  testAnimations();
  testAccessibility();
  testKeyboardNavigation();
  console.log('🎉 All tests completed!');
};