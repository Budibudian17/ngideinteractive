import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Handle all animated elements the same way
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          
          // If it's a stagger container, animate children with delay
          if (element.classList.contains('stagger-children')) {
            const children = element.children;
            Array.from(children).forEach((child, index) => {
              const childElement = child as HTMLElement;
              setTimeout(() => {
                childElement.style.opacity = '1';
                childElement.style.transform = 'translateY(0)';
              }, index * 150);
            });
          }
        }
      });
    }, observerOptions);

    // Function to trigger animation on an element
    const triggerAnimation = (element: HTMLElement) => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      
      if (element.classList.contains('stagger-children')) {
        const children = element.children;
        Array.from(children).forEach((child, index) => {
          const childElement = child as HTMLElement;
          setTimeout(() => {
            childElement.style.opacity = '1';
            childElement.style.transform = 'translateY(0)';
          }, index * 150);
        });
      }
    };

    // Function to setup animations
    const setupAnimations = () => {
      // Setup section fade
      document.querySelectorAll('.section-fade').forEach(el => {
        const element = el as HTMLElement;
        // Only set initial state if not already animated
        if (element.style.opacity === '' || element.style.opacity === '0') {
          element.style.opacity = '0';
          element.style.transform = 'translateY(30px)';
          element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        }
        observer.observe(el);
      });

      // Setup individual text elements
      document.querySelectorAll('.reveal-text').forEach(el => {
        const element = el as HTMLElement;
        // Only set initial state if not already animated
        if (element.style.opacity === '' || element.style.opacity === '0') {
          element.style.opacity = '0';
          element.style.transform = 'translateY(20px)';
          element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        }
        observer.observe(el);
      });

      // Setup stagger containers
      document.querySelectorAll('.stagger-children').forEach(el => {
        const parent = el as HTMLElement;
        const children = parent.children;
        Array.from(children).forEach((child) => {
          const childElement = child as HTMLElement;
          // Only set initial state if not already animated
          if (childElement.style.opacity === '' || childElement.style.opacity === '0') {
            childElement.style.opacity = '0';
            childElement.style.transform = 'translateY(15px)';
            childElement.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
          }
        });
        observer.observe(parent);
      });
    };

    // Function to trigger animations for visible elements
    const triggerVisibleAnimations = () => {
      document.querySelectorAll('.section-fade, .reveal-text, .stagger-children').forEach(el => {
        const element = el as HTMLElement;
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          setTimeout(() => {
            triggerAnimation(element);
          }, 100);
        }
      });
    };

    // Initial setup with delay to ensure DOM is ready
    const initialSetup = setTimeout(() => {
      setupAnimations();
      // Trigger animations for elements that are already visible
      triggerVisibleAnimations();
    }, 100);

    // Use MutationObserver to watch for DOM changes
    const mutationObserver = new MutationObserver(() => {
      setupAnimations();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Re-setup animations when start screen is removed
    const handleStartScreenRemoved = () => {
      setTimeout(() => {
        setupAnimations();
        triggerVisibleAnimations();
      }, 300);
    };

    // Handle inspect alert closed - re-trigger animations
    const handleInspectAlertClosed = () => {
      setTimeout(() => {
        triggerVisibleAnimations();
      }, 100);
    };

    // Listen for custom events
    window.addEventListener('start-screen-removed', handleStartScreenRemoved);
    window.addEventListener('inspect-alert-closed', handleInspectAlertClosed);

    return () => {
      clearTimeout(initialSetup);
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('start-screen-removed', handleStartScreenRemoved);
      window.removeEventListener('inspect-alert-closed', handleInspectAlertClosed);
    };
  }, []);
};