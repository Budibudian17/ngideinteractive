import { useState, useEffect } from 'react';

const animatedPhrases = [
  "CREATED WITH HEART,",
  "DRIVEN BY IDEALISM,",
  "FUELED BY ARTISTRY,",
  "SHAPED WITH VISION,",
  "CRAFTED BY REBELS,"
];

export const PhilosophySection = () => {
  const [animatedText, setAnimatedText] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setAnimatedText((prev) => (prev + 1) % animatedPhrases.length);
        setIsAnimating(false);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="philosophy" className="border-b border-border bg-foreground text-background section-fade">
      <div className="mx-auto grid max-w-[100rem] md:grid-cols-[12rem_1fr]">
        <div className="border-b border-background/20 p-6 md:border-b-0 md:border-r md:p-10">
          <p className="font-mono text-[9px] uppercase text-background/60">01 / Philosophy</p>
        </div>
        <div className="px-6 py-20 md:p-14 lg:px-20 lg:py-28">
          <p className="max-w-6xl font-display text-[clamp(2rem,4.6vw,5rem)] font-medium leading-[1.02] reveal-text">
            INDEPENDENT GAMES ARE <span className="text-background/40 inline-block transition-all duration-300 ease-in-out" style={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? 'translateY(20px)' : 'translateY(0)'
            }}>{animatedPhrases[animatedText]}</span> NOT PROFIT. EVERY PIXEL TELLS A STORY.
          </p>
        </div>
      </div>
    </section>
  );
};