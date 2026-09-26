import { Circle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-[100rem] gap-8 px-6 py-8 md:grid-cols-3 md:gap-10 md:px-10 md:py-10 lg:px-14">
        <a href="#top" className="flex items-center justify-center md:justify-start">
          <img src="/ngideinteractiveblack.webp" alt="Ngide Interactive" className="h-16 w-auto md:h-20" />
        </a>
        <div className="flex items-center justify-center gap-2 text-[9px] uppercase text-background/60 md:text-[10px]">
          <Circle className="size-2 fill-current" /> Status: connected
        </div>
        <div className="flex flex-col items-center gap-4 text-[9px] uppercase md:flex-row md:justify-end md:text-[10px]">
          <a href="#project" className="hover:text-background/80 transition-colors">Steam</a>
          <a href="#project" className="hover:text-background/80 transition-colors">Itch.io</a>
          <a href="#top" className="hover:text-background/80 transition-colors">X / Twitter</a>
        </div>
      </div>
      <div className="border-t border-background/20 px-6 py-3 text-center font-mono text-[7px] uppercase text-background/50 md:py-4 md:text-[8px]">
        © 2026 Ngide Interactive / End of transmission
      </div>
    </footer>
  );
};