import keyArt from "@/assets/deep-space-echo-keyart.jpg";

export const ProjectSection = () => {
  const projectDetails = [
    ['Phase', 'Pre-production'],
    ['Genre', 'Narrative systems'],
    ['Platform', 'PC'],
    ['Status', 'Unannounced']
  ];

  return (
    <section id="project" className="border-b border-border py-12 md:py-20 lg:py-28 section-fade">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10 lg:px-14">
        <div className="mb-8 flex flex-col items-start gap-4 border-b border-border pb-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:pb-5 stagger-children">
          <div>
            <p className="mb-2 font-mono text-[8px] uppercase text-muted-foreground sm:mb-3 sm:text-[9px]">02 / Project</p>
            <h2 className="font-display text-2xl font-bold uppercase md:text-4xl lg:text-7xl">In development</h2>
          </div>
          <span className="font-mono text-[8px] uppercase text-muted-foreground sm:text-[9px]">Build 0.0.17</span>
        </div>
        <article className="group grid border-b border-border lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative min-h-[20rem] overflow-hidden sm:min-h-[28rem] md:min-h-[42rem]">
            <img
              src={keyArt}
              loading="lazy"
              width={1920}
              height={1280}
              alt="Deep Space Echo planetary key art"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-1000 group-hover:scale-[1.02]"
            />
            <div className="project-shade absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-10 stagger-children">
              <p className="mb-2 font-mono text-[8px] uppercase text-soft sm:mb-4 sm:text-[9px]">Project 001 / Code name</p>
              <h3 className="font-display text-[clamp(2rem,6vw,4rem)] font-bold uppercase leading-[0.85] sm:text-[clamp(2.8rem,7vw,7.5rem)]">Deep Space<br />Echo</h3>
            </div>
          </div>
          <div className="flex flex-col justify-between border-x border-border lg:border-l-0">
            <div className="p-5 sm:p-7 md:p-10 stagger-children">
              <p className="font-mono text-[8px] uppercase text-muted-foreground sm:text-[9px]">Mission brief</p>
              <p className="mt-4 text-sm leading-6 text-soft sm:mt-8 sm:text-lg sm:leading-8">Trapped in an abandoned spacecraft carrier shrouded in darkness. Your helmet damaged, vision failing-relying solely on emergency LIDAR sonar to navigate. Every radar pulse reveals wireframe holograms of the ship's metallic halls, but each signal broadcasts your presence to blind aliens hunting by frequency and damaged AI drones patrolling the void.</p>
            </div>
            <dl className="grid grid-cols-2 border-t border-border text-[10px] sm:text-xs">
              {projectDetails.map(([term, value]) => (
                <div key={term} className="border-b border-r border-border p-3 sm:p-5 last:border-b-0">
                  <dt className="mb-1 font-mono text-[7px] uppercase text-muted-foreground sm:mb-2 sm:text-[8px]">{term}</dt>
                  <dd className="text-[9px] sm:text-xs">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      </div>
    </section>
  );
};