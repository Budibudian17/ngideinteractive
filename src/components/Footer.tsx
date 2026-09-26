import { Circle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-[100rem] gap-10 px-6 py-10 md:grid-cols-3 md:px-10 lg:px-14">
        <a href="#top" className="flex items-center">
          <img src="/ngideinteractiveblack.webp" alt="Ngide Interactive" className="h-20 w-auto" />
        </a>
        <div className="flex items-center gap-2 text-[10px] uppercase text-background/60 md:justify-center">
          <Circle className="size-2 fill-current" /> Status: connected
        </div>
        <div className="flex gap-6 text-[10px] uppercase md:justify-end">
          <a href="#project">Steam</a>
          <a href="#project">Itch.io</a>
          <a href="#top">X / Twitter</a>
        </div>
      </div>
      <div className="border-t border-background/20 px-6 py-4 text-center font-mono text-[8px] uppercase text-background/50">
        © 2026 Ngide Interactive / End of transmission
      </div>
    </footer>
  );
};