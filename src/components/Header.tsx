import { Menu } from "lucide-react";

const navItems = [
  ["Philosophy", "#philosophy"],
  ["Project", "#project"],
  ["Studio", "#studio"],
] as const;

export const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex h-20 items-center justify-between border-b border-border px-5 md:px-10 lg:px-14">
      <a href="#top" className="flex items-center">
        <img src="/ngideinteractive.webp" alt="Ngide Interactive" className="h-12 w-auto" />
      </a>
      <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={label} href={href} className="text-[11px] uppercase text-muted-foreground transition-colors hover:text-foreground duration-300 ease-in-out">{label}</a>
        ))}
      </nav>
      <div className="hidden items-center gap-3 font-mono text-[9px] uppercase text-muted-foreground sm:flex">
        <span className="status-pulse size-1.5 rounded-full bg-foreground" /> Signal online
      </div>
      <Menu className="size-5 md:hidden" aria-label="Navigation" />
    </header>
  );
};