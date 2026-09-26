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
        <div className="mb-6 flex items-center gap-4 font-mono text-[9px] uppercase text-muted-foreground reveal-text">
          <span>Transmission 001</span><span className="h-px w-10 bg-muted-foreground" /><span>Depok / ID</span>
        </div>
        <h1 className="max-w-6xl font-display text-[clamp(3.6rem,10.5vw,10.5rem)] font-bold uppercase leading-[0.78] reveal-text">
          Ngide<br /><span className="outline-type">Interactive</span>
        </h1>
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between stagger-children">
          <p className="max-w-md text-sm leading-6 text-soft md:text-base">Independent game studio building atmospheric worlds at the edge of signal and silence.</p>
          <Button asChild size="lg" className="h-14 w-fit rounded-none bg-foreground px-8 font-display text-xs font-bold uppercase text-background hover:bg-soft reveal-text">
            <a href="#philosophy">Enter transmission <ArrowDown /></a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 hidden border-r border-t border-border px-8 py-5 font-mono text-[9px] uppercase text-muted-foreground lg:block">NII // 6.4025° S<br />106.8188° E</div>
    </section>
  );
};