import { ArrowLeft, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Error404 = () => {
  useCustomCursor();
  useScrollAnimation();
  const [signalStrength, setSignalStrength] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSignalStrength(Math.random() * 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="film-grain min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      {/* Background noise effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] opacity-30" />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_70%)]" />

      <div className="relative z-10 max-w-2xl px-6 text-center">
        {/* Signal indicator */}
        <div className="mb-8 flex items-center justify-center gap-3 font-mono text-[10px] uppercase text-muted-foreground">
          <Radio className="h-4 w-4" />
          <span>Signal Lost</span>
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-2 w-0.5 bg-muted-foreground/30"
                style={{
                  opacity: signalStrength > i * 25 ? 1 : 0.3,
                  transition: "opacity 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* 404 Code */}
        <div className="mb-6 font-display text-[clamp(6rem,20vw,12rem)] font-bold uppercase leading-none tracking-tighter">
          <span className="outline-type">404</span>
        </div>

        {/* Error message */}
        <h1 className="mb-4 font-display text-2xl font-bold uppercase md:text-3xl">
          Transmission Interrupted
        </h1>
        
        <p className="mb-12 max-w-md mx-auto text-sm leading-relaxed text-muted-foreground md:text-base">
          The coordinates you're searching for don't exist in this sector. 
          Signal lost in the void between stars.
        </p>

        {/* Technical details */}
        <div className="mb-12 rounded border border-border/30 bg-card/50 p-4 font-mono text-[10px] uppercase text-muted-foreground">
          <div className="grid grid-cols-2 gap-2 text-left">
            <span>Error Code:</span>
            <span className="text-right">ERR-404-NOT-FOUND</span>
            <span>Coordinates:</span>
            <span className="text-right">NULL</span>
            <span>Signal:</span>
            <span className="text-right">{signalStrength.toFixed(1)}%</span>
            <span>Status:</span>
            <span className="text-right text-destructive">OFFLINE</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button 
            asChild 
            size="lg" 
            className="h-14 rounded-none bg-foreground px-8 font-display text-xs font-bold uppercase text-background hover:bg-soft"
          >
            <a href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Base
            </a>
          </Button>
          <Button 
            onClick={() => window.history.back()}
            size="lg" 
            variant="outline" 
            className="h-14 rounded-none border-border px-8 font-display text-xs font-bold uppercase hover:bg-card hover:text-foreground"
          >
            Previous Coordinates
          </Button>
        </div>

        {/* Coordinates footer */}
        <div className="mt-16 font-mono text-[9px] uppercase text-muted-foreground/50">
          NGI-404 // DEPOK SECTOR // 6.4025° S // 106.8188° E
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-foreground/10 animate-float-up"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};