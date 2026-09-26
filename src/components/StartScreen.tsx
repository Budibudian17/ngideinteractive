import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const StartScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);

  const fullText = "INITIALIZING TRANSMISSION...";

  useEffect(() => {
    // Show content after a brief delay
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    // Typewriter effect - slower
    let charIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setTypewriterText(prev => prev + fullText[charIndex]);
        charIndex++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 100);

    // Loading progress animation - slower
    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    // Hide body scroll when start screen is active
    document.body.classList.add('start-screen-active');

    return () => {
      clearTimeout(contentTimer);
      clearInterval(typewriterInterval);
      clearInterval(loadingInterval);
      document.body.classList.remove('start-screen-active');
    };
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    
    // Wait for exit animation to complete
    setTimeout(() => {
      document.body.classList.remove('start-screen-active');
      setIsVisible(false);
      
      // Emit event to trigger scroll animation re-setup
      window.dispatchEvent(new CustomEvent('start-screen-removed'));
    }, 800); // Match the transition duration
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center ${isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}
      style={{ transition: 'all 0.8s ease-in-out' }}
    >
      {/* Static noise overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] animate-pulse" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className={`relative z-10 text-center transition-all duration-1000 px-5 ${showContent && !isExiting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Transmission ID */}
        <div className="mb-6 font-mono text-[8px] uppercase text-muted-foreground tracking-widest sm:mb-8 sm:text-[10px]">
          <span>{typewriterText}</span>
          <span className="inline-block w-2 h-3 ml-1 bg-foreground animate-pulse sm:h-4" />
        </div>

        {/* Main Title */}
        <h1 className="mb-3 font-display text-[clamp(2rem,7vw,4rem)] font-bold uppercase leading-[0.85] sm:mb-4 sm:text-[clamp(2.5rem,8vw,6rem)]">
          Ngide<br /><span className="outline-type">Interactive</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-8 max-w-sm mx-auto text-xs text-soft leading-relaxed sm:mb-12 sm:max-w-md sm:text-sm">
          Independent game studio crafting atmospheric worlds from the edge of signal and silence
        </p>

        {/* Loading Bar */}
        <div className="mb-8 max-w-[200px] mx-auto sm:mb-12 sm:max-w-xs">
          <div className="h-px bg-border overflow-hidden">
            <div 
              className="h-full bg-foreground transition-all duration-100 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <div className="mt-2 font-mono text-[7px] uppercase text-muted-foreground text-right sm:text-[8px]">
            {loadingProgress}% COMPLETE
          </div>
        </div>

        {/* Enter Button */}
        {loadingProgress >= 100 && (
          <div className="animate-fade-in">
            <Button 
              onClick={handleEnter}
              size="lg"
              className="h-12 w-full rounded-none bg-foreground px-6 font-display text-[10px] font-bold uppercase text-background hover:bg-soft transition-all duration-300 sm:h-14 sm:w-fit sm:px-8 sm:text-xs"
            >
              Enter Transmission <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        )}

        {/* Coordinates */}
        <div className="mt-12 font-mono text-[7px] uppercase text-muted-foreground tracking-wider sm:mt-16 sm:text-[8px]">
          NII // 6.4025° S // 106.8188° E
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border opacity-30" />
      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border opacity-30" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border opacity-30" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border opacity-30" />
    </div>
  );
};