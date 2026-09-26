import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ProjectSection } from "@/components/ProjectSection";
import { StudioSection } from "@/components/StudioSection";
import { Footer } from "@/components/Footer";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ngide Interactive — Deep Space Echo" },
      { name: "description", content: "Ngide Interactive is an independent game studio creating atmospheric, systems-driven worlds from Depok, Indonesia." },
      { property: "og:title", content: "Ngide Interactive — Deep Space Echo" },
      { property: "og:description", content: "Enter the outer quiet. Discover Deep Space Echo, the first transmission from Ngide Interactive." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useCustomCursor();
  useScrollAnimation();

  return (
    <main className="film-grain min-h-screen overflow-hidden bg-background text-foreground selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)]">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <ProjectSection />
      <StudioSection />
      <Footer />
    </main>
  );
}