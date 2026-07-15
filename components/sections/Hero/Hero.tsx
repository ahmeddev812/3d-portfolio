"use client";

import { HeroBadge } from "./HeroBadge";
import { HeroText } from "./HeroText";
import { HeroCTA } from "./HeroCTA";
import { HeroStats } from "./HeroStats";
import { HeroScene } from "@/components/3d/HeroScene";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <HeroScene />
      <div className="relative z-10 w-full section-container pt-32 pb-20">
        <HeroBadge />
        <HeroText />
        <HeroCTA />
        <HeroStats />
      </div>
    </section>
  );
}
