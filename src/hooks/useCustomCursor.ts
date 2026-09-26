import { useEffect } from 'react';

export const useCustomCursor = () => {
  useEffect(() => {
    // Check if device is mobile (touch device)
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Don't create custom cursor on mobile devices
    if (isMobile) {
      return;
    }

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border: 1px solid var(--color-foreground);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: width 0.2s, height 0.2s, background-color 0.2s;
    `;
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const getLuminance = (color: string): number => {
      if (color.startsWith('oklch')) {
        const match = color.match(/oklch\(([\d.]+)/);
        if (match && match[1]) {
          return parseFloat(match[1]);
        }
      }

      if (color.startsWith('oklab')) {
        const match = color.match(/oklab\(([\d.]+)/);
        if (match && match[1]) {
          return parseFloat(match[1]);
        }
      }

      const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (rgbMatch) {
        const r = parseInt(rgbMatch[1] || '0') / 255;
        const g = parseInt(rgbMatch[2] || '0') / 255;
        const b = parseInt(rgbMatch[3] || '0') / 255;
        return 0.299 * r + 0.587 * g + 0.114 * b;
      }

      const hexMatch = color.match(/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/);
      if (hexMatch) {
        const r = parseInt(hexMatch[1] || '00', 16) / 255;
        const g = parseInt(hexMatch[2] || '00', 16) / 255;
        const b = parseInt(hexMatch[3] || '00', 16) / 255;
        return 0.299 * r + 0.587 * g + 0.114 * b;
      }

      return 0;
    };

    const getActualBackgroundColor = (element: HTMLElement): string => {
      let currentElement: HTMLElement | null = element;
      let backgroundColor = '';

      while (currentElement) {
        const computedStyle = window.getComputedStyle(currentElement);
        const bg = computedStyle.backgroundColor;

        if (bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
          backgroundColor = bg;
          break;
        }

        currentElement = currentElement.parentElement;
      }

      if (!backgroundColor || backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
        const bodyStyle = window.getComputedStyle(document.body);
        backgroundColor = bodyStyle.backgroundColor;
      }

      return backgroundColor;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const backgroundColor = getActualBackgroundColor(target);
      const luminance = getLuminance(backgroundColor);
      const isLightBackground = luminance > 0.3;

      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.backgroundColor = isLightBackground ? '#000000' : 'var(--color-foreground)';
        cursor.style.opacity = '0.3';
      } else {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.backgroundColor = 'transparent';
        cursor.style.opacity = '1';
      }

      cursor.style.borderColor = isLightBackground ? '#000000' : 'var(--color-foreground)';
      document.documentElement.style.setProperty('--selection-bg', isLightBackground ? '#000000' : 'var(--color-foreground)');
      document.documentElement.style.setProperty('--selection-text', isLightBackground ? '#ffffff' : 'var(--color-background)');
    };

    document.documentElement.style.setProperty('--selection-bg', 'var(--color-foreground)');
    document.documentElement.style.setProperty('--selection-text', 'var(--color-background)');

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      cursor.remove();
      document.documentElement.style.removeProperty('--selection-bg');
      document.documentElement.style.removeProperty('--selection-text');
    };
  }, []);
};