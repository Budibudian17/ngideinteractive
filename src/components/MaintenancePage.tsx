import { Settings, Satellite, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const MaintenancePage = () => {
  useCustomCursor();
  useScrollAnimation();
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState(0);

  const tasks = [
    "Calibrating sensors...",
    "Aligning transmission arrays...",
    "Updating navigation systems...",
    "Optimizing quantum processors...",
    "Finalizing trajectory calculations..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + Math.random() * 5;
      });
    }, 500);

    const taskInterval = setInterval(() => {
      setCurrentTask((prev) => (prev + 1) % tasks.length);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(taskInterval);
    };
  }, []);

  return (
    <div className="film-grain min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      {/* Scanning line effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 h-[200%] animate-scan bg-gradient-to-b from-transparent via-foreground/5 to-transparent" />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_70%)]" />

      <div className="relative z-10 max-w-2xl px-6 text-center">
        {/* Status indicator */}
        <div className="mb-8 flex items-center justify-center gap-3 font-mono text-[10px] uppercase text-muted-foreground">
          <Settings className="h-4 w-4 animate-spin" />
          <span>System Maintenance</span>
          <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
        </div>

        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <Satellite className="h-24 w-24 text-foreground/80" />
            <div className="absolute inset-0 animate-ping opacity-20">
              <Satellite className="h-24 w-24 text-foreground" />
            </div>
          </div>
        </div>

        {/* Main message */}
        <h1 className="mb-4 font-display text-3xl font-bold uppercase md:text-4xl">
          Temporary Signal Loss
        </h1>
        
        <p className="mb-8 max-w-md mx-auto text-sm leading-relaxed text-muted-foreground md:text-base">
          Our station is currently undergoing essential maintenance. 
          We're recalibrating our systems to serve you better.
        </p>

        {/* Progress bar */}
        <div className="mb-6 max-w-md mx-auto">
          <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase text-muted-foreground">
            <span>{tasks[currentTask]}</span>
            <span>{Math.min(100, Math.round(progress))}%</span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-border">
            <div 
              className="h-full bg-foreground transition-all duration-300"
              style={{ width: `${Math.min(100, progress)}%` }}
            />
          </div>
        </div>

        {/* ETA */}
        <div className="mb-12 inline-flex items-center gap-2 rounded border border-border/30 bg-card/50 px-4 py-2 font-mono text-[10px] uppercase text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>Estimated Return: 2-4 hours</span>
        </div>

        {/* System status grid */}
        <div className="mb-12 rounded border border-border/30 bg-card/50 p-6">
          <h3 className="mb-4 font-display text-xs font-bold uppercase text-foreground">
            System Status
          </h3>
          <div className="grid grid-cols-2 gap-4 font-mono text-[10px] uppercase">
            <div className="flex items-center justify-between border-b border-border/20 pb-2">
              <span className="text-muted-foreground">Main Server</span>
              <span className="text-yellow-500">Maintenance</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/20 pb-2">
              <span className="text-muted-foreground">Database</span>
              <span className="text-green-500">Online</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/20 pb-2">
              <span className="text-muted-foreground">CDN</span>
              <span className="text-green-500">Online</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/20 pb-2">
              <span className="text-muted-foreground">API Gateway</span>
              <span className="text-yellow-500">Restarting</span>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="mb-8 text-sm text-muted-foreground">
          <p>Need immediate assistance?</p>
          <a 
            href="mailto:contact@ngideinteractive.com" 
            className="text-foreground hover:underline"
          >
            contact@ngideinteractive.com
          </a>
        </div>

        {/* Coordinates footer */}
        <div className="font-mono text-[9px] uppercase text-muted-foreground/50">
          NGI-MAINT // DEPOK SECTOR // 6.4025° S // 106.8188° E
        </div>
      </div>
    </div>
  );
};