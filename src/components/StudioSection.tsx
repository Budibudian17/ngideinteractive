import { ArrowUpRight } from "lucide-react";

export const StudioSection = () => {
  return (
    <section id="studio" className="mx-auto grid max-w-[100rem] border-x border-border lg:grid-cols-2 section-fade">
      <div className="border-b border-border p-5 py-12 md:p-10 md:py-16 lg:p-14 lg:border-b-0 lg:border-r lg:py-28 stagger-children">
        <p className="font-mono text-[8px] uppercase text-muted-foreground sm:text-[9px]">03 / Studio</p>
        <h2 className="mt-4 max-w-xl font-display text-2xl font-bold uppercase leading-none sm:mt-6 sm:text-3xl md:text-4xl md:mt-8 lg:text-6xl">Solo dev.<br />Distant worlds.</h2>
      </div>
      <div className="flex flex-col justify-between p-5 py-12 md:p-10 md:py-16 lg:p-14 lg:py-28 stagger-children">
        <p className="max-w-xl text-sm leading-6 text-soft sm:text-base sm:leading-7 md:text-lg md:leading-8">Based in Depok, Indonesia, Ngide Interactive is a one-person studio exploring solitude, strange machinery, and human choices through systems-driven games.</p>
        <a href="mailto:ngideinteractive" className="mt-8 flex items-center justify-between border-b border-foreground pb-3 font-display text-sm font-bold uppercase transition-opacity hover:opacity-60 sm:mt-12 sm:text-base sm:pb-4 md:mt-20 md:text-lg lg:text-2xl">
          ngideinteractive@gmail.com <ArrowUpRight className="ml-2" />
        </a>
      </div>
    </section>
  );
};