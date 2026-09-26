import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  ["Philosophy", "#philosophy"],
  ["Project", "#project"],
  ["Studio", "#studio"],
] as const;

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30 flex h-20 items-center justify-between border-b border-border px-5 md:px-10 lg:px-14">
        <a href="#top" className="flex items-center">
          <img src="/ngideinteractive.webp" alt="Ngide Interactive" className="h-10 w-auto md:h-12" />
        </a>
        <nav className="hidden items-center gap-6 md:flex lg:gap-9" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-[10px] md:text-[11px] uppercase text-muted-foreground transition-colors hover:text-foreground duration-300 ease-in-out">{label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 font-mono text-[8px] md:text-[9px] uppercase text-muted-foreground sm:flex">
          <span className="status-pulse size-1.5 rounded-full bg-foreground" /> Signal online
        </div>
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </header>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map(([label, href]) => (
              <a 
                key={label} 
                href={href} 
                className="text-2xl font-display font-bold uppercase text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="flex items-center gap-3 font-mono text-[9px] uppercase text-muted-foreground mt-8">
              <span className="status-pulse size-1.5 rounded-full bg-foreground" /> Signal online
            </div>
          </nav>
        </div>
      )}
    </>
  );
};