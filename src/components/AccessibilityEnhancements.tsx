import { useEffect } from 'react';

const AccessibilityEnhancements = () => {
  useEffect(() => {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded';
    skipLink.style.transform = 'translateY(-100%)';
    skipLink.style.transition = 'transform 0.3s';
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.transform = 'translateY(0)';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.transform = 'translateY(-100%)';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Keyboard navigation for buttons and links
    const handleKeyboardNavigation = (e: KeyboardEvent) => {
      // Handle Enter key on buttons
      if (e.key === 'Enter' && e.target instanceof HTMLElement) {
        if (e.target.getAttribute('role') === 'button' || e.target.tagName === 'BUTTON') {
          e.target.click();
        }
      }

      // Handle Escape key to close modals/dialogs
      if (e.key === 'Escape') {
        const openDialog = document.querySelector('[data-state="open"]');
        if (openDialog) {
          const closeButton = openDialog.querySelector('button[aria-label*="close"], button[aria-label*="Close"]');
          if (closeButton instanceof HTMLElement) {
            closeButton.click();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyboardNavigation);

    // Focus management for modals
    const manageFocus = () => {
      const dialogs = document.querySelectorAll('[role="dialog"]');
      dialogs.forEach(dialog => {
        if (dialog.getAttribute('data-state') === 'open') {
          const firstFocusable = dialog.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
          if (firstFocusable instanceof HTMLElement) {
            firstFocusable.focus();
          }
        }
      });
    };

    const observer = new MutationObserver(manageFocus);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });

    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
      observer.disconnect();
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  return null;
};

export default AccessibilityEnhancements;