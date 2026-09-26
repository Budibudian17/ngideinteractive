import { ArrowUpRight } from "lucide-react";

export const StudioSection = () => {
  return (
    <section id="studio" className="mx-auto grid max-w-[100rem] border-x border-border lg:grid-cols-2 section-fade">
      <div className="border-b border-border p-6 py-20 md:p-14 lg:border-b-0 lg:border-r lg:py-28 stagger-children">
        <p className="font-mono text-[9px] uppercase text-muted-foreground">03 / Studio</p>
        <h2 className="mt-8 max-w-xl font-display text-4xl font-bold uppercase leading-none md:text-6xl">Solo dev.<br />Distant worlds.</h2>
      </div>
      <div className="flex flex-col justify-between p-6 py-20 md:p-14 lg:py-28 stagger-children">
        <p className="max-w-xl text-lg leading-8 text-soft">Based in Depok, Indonesia, Ngide Interactive is a one-person studio exploring solitude, strange machinery, and human choices through systems-driven games.</p>
        <a href="mailto:ngideinteractive" className="mt-20 flex items-center justify-between border-b border-foreground pb-4 font-display text-lg font-bold uppercase transition-opacity hover:opacity-60 md:text-2xl">
          ngideinteractive@gmail.com <ArrowUpRight />
        </a>
      </div>
    </section>
  );
};