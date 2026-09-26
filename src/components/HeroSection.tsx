import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="top" className="relative min-h-[52rem] h-[100svh] max-h-[72rem] overflow-hidden border-b border-border">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-[58%_center] opacity-50"
      >
        <source src="/video/spacevideo.webm" type="video/webm" />
      </video>
      <div className="hero-vignette absolute inset-0" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-x-0 top-20 bottom-0 mx-auto flex max-w-[100rem] flex-col justify-center px-5 pb-20 md:px-10 lg:px-14">
        <div className="mb-4 flex items-center gap-3 font-mono text-[8px] uppercase text-muted-foreground reveal-text sm:mb-6 sm:gap-4 sm:text-[9px]">
          <span>Transmission 001</span><span className="h-px w-8 bg-muted-foreground sm:w-10" /><span>Depok / ID</span>
        </div>
        <h1 className="max-w-6xl font-display text-[clamp(2.5rem,8vw,5rem)] sm:text-[clamp(3rem,9vw,6rem)] md:text-[clamp(3.6rem,10.5vw,10.5rem)] font-bold uppercase leading-[0.78] reveal-text">
          Ngide<br /><span className="outline-type">Interactive</span>
        </h1>
        <div className="mt-6 flex flex-col gap-6 md:mt-10 md:gap-8 md:flex-row md:items-end md:justify-between stagger-children">
          <p className="max-w-md text-xs leading-5 text-soft sm:text-sm sm:leading-6 md:text-base">Independent game studio building atmospheric worlds at the edge of signal and silence.</p>
          <Button asChild size="lg" className="h-12 w-full rounded-none bg-foreground px-6 font-display text-[10px] font-bold uppercase text-background hover:bg-soft reveal-text sm:h-14 sm:w-fit sm:px-8 sm:text-xs">
            <a href="#philosophy">Enter transmission <ArrowDown className="hidden sm:inline" /></a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 border-r border-t border-border px-4 py-3 font-mono text-[7px] uppercase text-muted-foreground md:px-6 md:py-4 md:text-[8px] lg:px-8 lg:py-5 lg:text-[9px]">
        NII // 6.4025° S<br />106.8188° E
      </div>
    </section>
  );
};