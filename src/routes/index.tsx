import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ProjectSection } from "@/components/ProjectSection";
import { StudioSection } from "@/components/StudioSection";
import { Footer } from "@/components/Footer";
import { StartScreen } from "@/components/StartScreen";
import { InspectAlert } from "@/components/InspectAlert";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { usePreventInspect } from "@/hooks/usePreventInspect";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ngide Interactive - Deep Space Echo" },
      { name: "description", content: "Ngide Interactive is an independent game studio creating atmospheric, systems-driven worlds from Depok, Indonesia." },
      { property: "og:title", content: "Ngide Interactive - Deep Space Echo" },
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
  const { showAlert, setShowAlert } = usePreventInspect();
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const handleStartScreenRemoved = () => {
      setTimeout(() => {
        setIsContentVisible(true);
      }, 300);
    };

    window.addEventListener('start-screen-removed', handleStartScreenRemoved);
    return () => window.removeEventListener('start-screen-removed', handleStartScreenRemoved);
  }, []);

  return (
    <main className="film-grain min-h-screen overflow-hidden bg-background text-foreground selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)]">
      <InspectAlert show={showAlert} onClose={() => setShowAlert(false)} />
      <StartScreen />
      <div className={`transition-opacity duration-1000 ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <HeroSection />
        <PhilosophySection />
        <ProjectSection />
        <StudioSection />
        <Footer />
      </div>
    </main>
  );
}