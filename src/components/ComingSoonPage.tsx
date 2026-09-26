import { Rocket, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ComingSoonPage = () => {
  useCustomCursor();
  useScrollAnimation();
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="film-grain min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-foreground"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle 3s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_70%)]" />

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-3xl px-6 text-center">
        {/* Status badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/30 bg-card/50 px-4 py-2 font-mono text-[10px] uppercase text-muted-foreground">
          <Zap className="h-3 w-3 text-yellow-500" />
          <span>In Development</span>
        </div>

        {/* Main icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-ping opacity-20">
              <Rocket className="h-32 w-32 text-foreground" />
            </div>
            <Rocket className="relative h-32 w-32 text-foreground" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="mb-4 font-display text-4xl font-bold uppercase md:text-6xl">
          Something <span className="outline-type">Epic</span> Awaits
        </h1>
        
        <p className="mb-8 max-w-lg mx-auto text-base leading-relaxed text-muted-foreground md:text-lg">
          We're crafting something extraordinary in the depths of our studio. 
          A new experience that will push the boundaries of interactive storytelling.
        </p>

        {/* Feature highlights */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded border border-border/30 bg-card/30 p-4 text-left">
            <Star className="mb-2 h-5 w-5 text-foreground" />
            <h3 className="mb-1 font-display text-xs font-bold uppercase">Immersive World</h3>
            <p className="text-[10px] text-muted-foreground">Explore vast, atmospheric environments</p>
          </div>
          <div className="rounded border border-border/30 bg-card/30 p-4 text-left">
            <Zap className="mb-2 h-5 w-5 text-foreground" />
            <h3 className="mb-1 font-display text-xs font-bold uppercase">Dynamic Systems</h3>
            <p className="text-[10px] text-muted-foreground">Reactive gameplay that adapts to you</p>
          </div>
          <div className="rounded border border-border/30 bg-card/30 p-4 text-left">
            <Rocket className="mb-2 h-5 w-5 text-foreground" />
            <h3 className="mb-1 font-display text-xs font-bold uppercase">Deep Narrative</h3>
            <p className="text-[10px] text-muted-foreground">Stories that resonate and evolve</p>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mb-12 rounded border border-border/30 bg-card/50 p-6">
          <h3 className="mb-2 font-display text-sm font-bold uppercase">
            Get Early Access
          </h3>
          <p className="mb-4 text-xs text-muted-foreground">
            Be the first to know when we launch. No spam, just transmissions.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-none border border-border bg-background px-4 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
            />
            <Button className="h-10 rounded-none bg-foreground px-6 font-display text-xs font-bold uppercase text-background hover:bg-soft">
              Notify Me
            </Button>
          </div>
        </div>

        {/* Social links */}
        <div className="mb-8 flex justify-center gap-6">
          {['Twitter', 'Discord', 'Instagram'].map((social) => (
            <a
              key={social}
              href="#"
              className="font-mono text-[10px] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {social}
            </a>
          ))}
        </div>

        {/* Coordinates footer */}
        <div className="font-mono text-[9px] uppercase text-muted-foreground/50">
          NGI-SOON // DEPOK SECTOR // 6.4025° S // 106.8188° E
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-foreground/5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-up ${Math.random() * 10 + 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};