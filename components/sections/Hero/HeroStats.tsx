"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValueEvent } from "framer-motion";
import { siteConfig } from "@/lib/config/site";

function AnimatedValue({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useSpring(0, { stiffness: 80, damping: 20 });
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(count, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  useEffect(() => {
    if (isInView) count.set(value);
  }, [isInView, value, count]);

  return <span ref={ref}>{display}</span>;
}

const STATS = [
  { label: "Projects", value: siteConfig.stats.projects, suffix: "+" },
  { label: "Clients", value: siteConfig.stats.clients, suffix: "+" },
  { label: "Years Experience", value: siteConfig.stats.experience, suffix: "+" },
];

export function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.6, duration: 0.6 }}
      className="flex flex-wrap gap-8 md:gap-12 pt-8"
    >
      {STATS.map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-primary">
            <AnimatedValue value={stat.value} />{stat.suffix}
          </div>
          <div className="text-sm text-text-muted mt-1">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
}
