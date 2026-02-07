"use client";

import Hero from "./_components/Hero";
import Journey from "./_components/Journey";
import Craft from "./_components/Craft";
import About from "./_components/About";
import Contact from "./_components/Contact";
import { useFullpageScroll } from "@/components/useFullpageScroll";

const SECTIONS_IDS = ["hero", "journey", "craft", "about", "contact"];

export default function Home() {
  useFullpageScroll(SECTIONS_IDS);

  return (
    <main className="main-scroll bg-bg-900 text-text-base relative min-h-screen overflow-hidden" id="page-root">
      {/* Ambient page-level glow — subtle violet top, blue-cyan bottom */}
      <div
        className="pointer-events-none fixed inset-0 -z-10
                   bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,_rgba(179,140,255,0.12),_transparent),radial-gradient(ellipse_50%_35%_at_50%_100%,_rgba(51,229,255,0.08),_transparent)]"
      />
      <Hero />
      <Journey />
      <Craft />
      <About />
      <Contact />
    </main>
  );
}
