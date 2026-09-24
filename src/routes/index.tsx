import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Asterisk, Crosshair, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ngide Interactive — Games from the Outer Quiet" },
      { name: "description", content: "Ngide Interactive is an independent game studio building atmospheric systems-driven worlds from the edge of the known." },
      { property: "og:title", content: "Ngide Interactive — Games from the Outer Quiet" },
      { property: "og:description", content: "Independent games built with restraint, wonder, and systems that reward curiosity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  ["01", "Transmission", "#transmission"],
  ["02", "Hangar", "#hangar"],
  ["03", "Crew", "#crew"],
] as const;

function Radar() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[25rem] overflow-hidden rounded-full border border-primary/30 bg-background/70" aria-label="Deep Space Echo radar telemetry">
      <div className="absolute inset-[8%] rounded-full border border-primary/20" />
      <div className="absolute inset-[25%] rounded-full border border-primary/20" />
      <div className="absolute inset-[42%] rounded-full border border-primary/30" />
      <div className="absolute inset-x-0 top-1/2 border-t border-primary/20" />
      <div className="absolute inset-y-0 left-1/2 border-l border-primary/20" />
      <div className="radar-sweep absolute inset-0 rounded-full opacity-70" />
      <span className="absolute left-[68%] top-[31%] h-2 w-2 border border-primary bg-primary/30" />
      <span className="absolute left-[34%] top-[66%] h-1.5 w-1.5 bg-muted-foreground" />
      <Crosshair className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 text-primary" strokeWidth={1} />
      <span className="absolute bottom-[8%] left-1/2 -translate-x-1/2 bg-background px-2 font-mono text-[9px] text-primary">RNG 04.73 AU</span>
    </div>
  );
}

function OrbitMap() {
  return (
    <svg viewBox="0 0 600 360" className="h-full w-full text-primary" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.35">
        <ellipse cx="315" cy="174" rx="242" ry="88" transform="rotate(-12 315 174)" />
        <ellipse cx="315" cy="174" rx="181" ry="60" transform="rotate(19 315 174)" />
        <path d="M38 277C173 173 343 78 576 81" strokeDasharray="4 9" />
        <path d="M85 45L532 319M59 184H554M302 21V340" opacity="0.22" />
        <path d="M114 86l18-10 17 9 25-14 22 9 24-20" opacity="0.5" />
      </g>
      <g fill="currentColor">
        <circle cx="315" cy="174" r="3" />
        <circle cx="170" cy="215" r="2" />
        <circle cx="462" cy="117" r="2" />
        <circle cx="132" cy="76" r="1.5" />
        <circle cx="149" cy="85" r="1.5" />
        <circle cx="174" cy="71" r="1.5" />
        <circle cx="196" cy="80" r="1.5" />
        <circle cx="220" cy="60" r="1.5" />
      </g>
      <g fill="currentColor" fontFamily="monospace" fontSize="8" opacity="0.6">
        <text x="324" y="168">N-011</text><text x="470" y="112">PERIAPSIS</text><text x="38" y="292">ORBITAL PLANE / 17.4°</text>
      </g>
    </svg>
  );
}

function Index() {
  return (
    <main className="star-field relative min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className="coordinate-grid pointer-events-none absolute inset-x-0 top-0 h-[54rem] opacity-25" />
      <header className="relative z-20 mx-auto flex w-full max-w-[90rem] items-center justify-between border-b border-border px-5 py-5 md:px-10 lg:px-14">
        <a href="#top" className="font-display text-base font-semibold uppercase tracking-normal text-foreground md:text-lg">Ngide<span className="text-primary">.</span>Interactive</a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map(([num, label, href]) => <a key={label} href={href} className="font-mono text-[10px] uppercase text-muted-foreground transition-colors hover:text-primary"><span className="mr-2 text-primary/60">{num}</span>{label}</a>)}
        </nav>
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase text-muted-foreground"><span className="size-1.5 bg-primary" />IDN / 07:43</div>
      </header>

      <section id="top" className="relative mx-auto grid min-h-[46rem] w-full max-w-[90rem] grid-cols-1 border-x border-border lg:grid-cols-[1fr_31rem]">
        <div className="flex flex-col justify-between px-5 pb-12 pt-16 md:px-10 md:pt-24 lg:px-14 lg:pb-16 lg:pt-28">
          <div>
            <div className="mb-10 flex items-center gap-3 font-mono text-[10px] uppercase text-primary"><span className="h-px w-9 bg-primary" />Independent signal / Bandung, ID</div>
            <h1 className="max-w-5xl font-display text-[clamp(3.3rem,7.3vw,7.4rem)] font-medium uppercase leading-[0.84] tracking-normal">
              We build worlds<br />for the <span className="text-primary">outer quiet.</span>
            </h1>
            <p className="mt-9 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">Ngide Interactive is a small independent game studio exploring solitude, distant signals, and the machinery we trust in the dark.</p>
            <Button asChild variant="hud" size="lg" className="mt-10 h-12 px-6">
              <a href="#hangar">Enter the hangar <ArrowDown /></a>
            </Button>
          </div>
          <div id="crew" className="mt-20 grid gap-6 border-t border-border pt-5 text-[10px] uppercase text-muted-foreground sm:grid-cols-3 lg:max-w-2xl">
            <div><span className="mb-2 block text-primary">Studio type</span>Independent / small crew</div>
            <div><span className="mb-2 block text-primary">Primary vector</span>Systems / atmosphere</div>
            <div><span className="mb-2 block text-primary">Operating from</span>Bandung / Indonesia</div>
          </div>
        </div>
        <div className="relative hidden border-l border-border lg:block">
          <OrbitMap />
          <div className="absolute bottom-6 left-6 right-6 flex justify-between border-t border-border pt-3 font-mono text-[9px] uppercase text-muted-foreground"><span>Chart / RA 18h 36m</span><span>Dec +38° 47′</span></div>
        </div>
      </section>

      <section id="transmission" className="border-y border-border bg-void-raised">
        <div className="mx-auto grid max-w-[90rem] md:grid-cols-[13rem_1fr]">
          <div className="border-b border-border p-5 md:border-b-0 md:border-r md:p-10"><div className="font-mono text-[10px] uppercase text-primary">Transmission / 001</div></div>
          <div className="p-5 md:p-10 lg:p-14"><blockquote className="max-w-4xl font-display text-2xl leading-snug text-foreground md:text-4xl">“The void is not empty. It is full of decisions, consequences, and the faint noise of something answering back.”</blockquote></div>
        </div>
      </section>

      <section id="hangar" className="mx-auto w-full max-w-[90rem] border-x border-border px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mb-10 flex items-end justify-between border-b border-border pb-5">
          <div><p className="mb-3 font-mono text-[10px] uppercase text-primary">Active projects / Hangar</p><h2 className="font-display text-4xl uppercase md:text-6xl">Builds in orbit</h2></div>
          <div className="hidden font-mono text-[9px] uppercase text-muted-foreground sm:block">1 active / 2 reserved</div>
        </div>
        <article className="grid overflow-hidden border border-primary/40 bg-card lg:grid-cols-[1fr_25rem]">
          <div className="flex min-h-[27rem] flex-col justify-between p-6 md:p-10 lg:p-12">
            <div className="flex items-center justify-between font-mono text-[9px] uppercase"><span className="text-primary">NII // Project 001</span><span className="text-muted-foreground">Development build</span></div>
            <div className="py-14">
              <p className="mb-5 font-mono text-[10px] uppercase text-muted-foreground">Code name</p>
              <h3 className="font-display text-[clamp(2.5rem,6vw,5.6rem)] font-medium uppercase leading-none">[Deep Space Echo]</h3>
              <p className="mt-7 max-w-xl text-sm leading-7 text-muted-foreground">A systems-driven deep-space odyssey about maintaining a failing listening station—and deciding whether every signal should be answered.</p>
            </div>
            <div className="grid grid-cols-2 gap-6 border-t border-border pt-5 font-mono text-[9px] uppercase text-muted-foreground sm:grid-cols-4">
              <div><span className="block text-primary">Phase</span>Pre-production</div><div><span className="block text-primary">Genre</span>Narrative systems</div><div><span className="block text-primary">Platform</span>PC</div><div><span className="block text-primary">Signal</span>Unannounced</div>
            </div>
          </div>
          <div className="flex min-h-[27rem] items-center border-t border-border bg-background/40 p-7 lg:border-l lg:border-t-0"><Radar /></div>
        </article>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {["DOCK 02 / RESERVED", "DOCK 03 / NO SIGNAL"].map((item, index) => <div key={item} className="flex h-24 items-center justify-between border border-border px-6 font-mono text-[10px] uppercase text-muted-foreground"><span>{item}</span><span>0{index + 2} / —</span></div>)}
        </div>
      </section>

      <footer className="border-t border-border bg-void-raised">
        <div className="mx-auto max-w-[90rem] border-x border-border">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-border p-6 md:border-r lg:border-b-0"><p className="mb-5 text-[9px] uppercase text-muted-foreground">Transmission status</p><div className="flex items-center gap-3 font-display text-lg uppercase text-primary"><Radio className="size-4" />Status: connected</div></div>
            <div className="border-b border-border p-6 lg:border-b-0 lg:border-r"><p className="mb-5 text-[9px] uppercase text-muted-foreground">Contact uplink</p><a href="mailto:hello@ngideinteractive.com" className="text-xs text-foreground transition-colors hover:text-primary">hello@ngideinteractive.com</a></div>
            <div className="border-b border-border p-6 md:border-r lg:border-b-0"><p className="mb-5 text-[9px] uppercase text-muted-foreground">Public channels</p><div className="flex gap-5 text-[10px] uppercase"><a href="#" className="hover:text-primary">Itch.io</a><a href="#" className="hover:text-primary">Steam</a><a href="#" className="hover:text-primary">X / Twitter</a></div></div>
            <div className="p-6"><p className="mb-5 text-[9px] uppercase text-muted-foreground">Telemetry</p><div className="flex justify-between text-[9px] uppercase text-muted-foreground"><span>LAT 6.9175° S</span><Asterisk className="size-3 text-primary" /></div></div>
          </div>
          <div className="flex flex-col gap-3 border-t border-border px-6 py-4 text-[9px] uppercase text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Ngide Interactive</span><span className="flex items-center gap-2">End of transmission <ArrowUpRight className="size-3" /></span></div>
        </div>
      </footer>
    </main>
  );
}