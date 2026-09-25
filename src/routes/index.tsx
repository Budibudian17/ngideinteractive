import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Circle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import keyArt from "@/assets/deep-space-echo-keyart.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ngide Interactive — Deep Space Echo" },
      { name: "description", content: "Ngide Interactive is an independent game studio creating atmospheric, systems-driven worlds from Bandung, Indonesia." },
      { property: "og:title", content: "Ngide Interactive — Deep Space Echo" },
      { property: "og:description", content: "Enter the outer quiet. Discover Deep Space Echo, the first transmission from Ngide Interactive." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  ["Manifesto", "#manifesto"],
  ["Project", "#project"],
  ["Studio", "#studio"],
] as const;

function Wordmark() {
  return (
    <a href="#top" className="font-display text-sm font-bold uppercase text-foreground">
      NGIDE<span className="text-muted-foreground">/</span>INTERACTIVE
    </a>
  );
}

function Index() {
  return (
    <main className="film-grain min-h-screen overflow-hidden bg-background text-foreground selection:bg-foreground selection:text-background">
      <header className="absolute inset-x-0 top-0 z-30 flex h-20 items-center justify-between border-b border-border px-5 md:px-10 lg:px-14">
        <Wordmark />
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-[11px] uppercase text-muted-foreground transition-colors hover:text-foreground">{label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 font-mono text-[9px] uppercase text-muted-foreground sm:flex">
          <span className="status-pulse size-1.5 rounded-full bg-foreground" /> Signal online
        </div>
        <Menu className="size-5 md:hidden" aria-label="Navigation" />
      </header>

      <section id="top" className="relative min-h-[52rem] h-[100svh] max-h-[72rem] overflow-hidden border-b border-border">
        <img src={keyArt} width={1920} height={1280} alt="A distant orbital station above the dark curve of an unknown planet" className="absolute inset-0 h-full w-full object-cover object-[58%_center] opacity-80" />
        <div className="hero-vignette absolute inset-0" />
        <div className="absolute inset-x-0 top-20 bottom-0 mx-auto flex max-w-[100rem] flex-col justify-center px-5 pb-20 md:px-10 lg:px-14">
          <div className="mb-6 flex items-center gap-4 font-mono text-[9px] uppercase text-muted-foreground">
            <span>Transmission 001</span><span className="h-px w-10 bg-muted-foreground" /><span>Bandung / ID</span>
          </div>
          <h1 className="max-w-6xl font-display text-[clamp(3.6rem,10.5vw,10.5rem)] font-bold uppercase leading-[0.78]">
            Ngide<br /><span className="outline-type">Interactive</span>
          </h1>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm leading-6 text-soft md:text-base">Independent game studio building atmospheric worlds at the edge of signal and silence.</p>
            <Button asChild size="lg" className="h-14 w-fit rounded-none bg-foreground px-8 font-display text-xs font-bold uppercase text-background hover:bg-soft">
              <a href="#project">Enter transmission <ArrowDown /></a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 hidden border-r border-t border-border px-8 py-5 font-mono text-[9px] uppercase text-muted-foreground lg:block">NII // 06.9175° S<br />107.6191° E</div>
      </section>

      <section id="manifesto" className="border-b border-border bg-foreground text-background">
        <div className="mx-auto grid max-w-[100rem] md:grid-cols-[12rem_1fr]">
          <div className="border-b border-background/20 p-6 md:border-b-0 md:border-r md:p-10">
            <p className="font-mono text-[9px] uppercase text-background/60">01 / Manifesto</p>
          </div>
          <div className="px-6 py-20 md:p-14 lg:px-20 lg:py-28">
            <p className="max-w-6xl font-display text-[clamp(2rem,4.6vw,5rem)] font-medium leading-[1.02]">
              THE VOID IS NOT EMPTY. IT IS FULL OF <span className="text-background/40">DECISIONS, CONSEQUENCES,</span> AND SOMETHING ANSWERING BACK.
            </p>
          </div>
        </div>
      </section>

      <section id="project" className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-[100rem] px-5 md:px-10 lg:px-14">
          <div className="mb-10 flex items-end justify-between border-b border-border pb-5">
            <div><p className="mb-3 font-mono text-[9px] uppercase text-muted-foreground">02 / Active project</p><h2 className="font-display text-4xl font-bold uppercase md:text-7xl">In development</h2></div>
            <span className="hidden font-mono text-[9px] uppercase text-muted-foreground sm:block">Build 0.0.17</span>
          </div>
          <article className="group grid border-b border-border lg:grid-cols-[1.35fr_0.65fr]">
            <div className="relative min-h-[28rem] overflow-hidden md:min-h-[42rem]">
              <img src={keyArt} loading="lazy" width={1920} height={1280} alt="Deep Space Echo planetary key art" className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-1000 group-hover:scale-[1.02]" />
              <div className="project-shade absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                <p className="mb-4 font-mono text-[9px] uppercase text-soft">Project 001 / Code name</p>
                <h3 className="font-display text-[clamp(2.8rem,7vw,7.5rem)] font-bold uppercase leading-[0.85]">Deep Space<br />Echo</h3>
              </div>
            </div>
            <div className="flex flex-col justify-between border-x border-border lg:border-l-0">
              <div className="p-7 md:p-10">
                <p className="font-mono text-[9px] uppercase text-muted-foreground">Mission brief</p>
                <p className="mt-8 text-lg leading-8 text-soft">Maintain a failing listening station beyond mapped space. Decode distant signals. Decide which voices deserve an answer.</p>
              </div>
              <dl className="grid grid-cols-2 border-t border-border text-xs">
                {[['Phase','Pre-production'],['Genre','Narrative systems'],['Platform','PC'],['Status','Unannounced']].map(([term, value]) => (
                  <div key={term} className="border-b border-r border-border p-5 last:border-b-0"><dt className="mb-2 font-mono text-[8px] uppercase text-muted-foreground">{term}</dt><dd>{value}</dd></div>
                ))}
              </dl>
            </div>
          </article>
        </div>
      </section>

      <section id="studio" className="mx-auto grid max-w-[100rem] border-x border-border lg:grid-cols-2">
        <div className="border-b border-border p-6 py-20 md:p-14 lg:border-b-0 lg:border-r lg:py-28">
          <p className="font-mono text-[9px] uppercase text-muted-foreground">03 / The studio</p>
          <h2 className="mt-8 max-w-xl font-display text-4xl font-bold uppercase leading-none md:text-6xl">Small crew.<br />Distant worlds.</h2>
        </div>
        <div className="flex flex-col justify-between p-6 py-20 md:p-14 lg:py-28">
          <p className="max-w-xl text-lg leading-8 text-soft">Based in Bandung, Indonesia, Ngide Interactive explores solitude, strange machinery, and human choices through systems-driven games.</p>
          <a href="mailto:hello@ngideinteractive.com" className="mt-20 flex items-center justify-between border-b border-foreground pb-4 font-display text-lg font-bold uppercase transition-opacity hover:opacity-60 md:text-2xl">hello@ngideinteractive.com <ArrowUpRight /></a>
        </div>
      </section>

      <footer className="border-t border-border bg-foreground text-background">
        <div className="mx-auto grid max-w-[100rem] gap-10 px-6 py-10 md:grid-cols-3 md:px-10 lg:px-14">
          <Wordmark />
          <div className="flex items-center gap-2 text-[10px] uppercase text-background/60 md:justify-center"><Circle className="size-2 fill-current" /> Status: connected</div>
          <div className="flex gap-6 text-[10px] uppercase md:justify-end"><a href="#project">Steam</a><a href="#project">Itch.io</a><a href="#top">X / Twitter</a></div>
        </div>
        <div className="border-t border-background/20 px-6 py-4 text-center font-mono text-[8px] uppercase text-background/50">© 2026 Ngide Interactive / End of transmission</div>
      </footer>
    </main>
  );
}