"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const TITLE = "Hi, I'm Ahmed";
const SUBTITLE = "Full Stack Developer & Creative Problem Solver";
const DESCRIPTION =
  "Building exceptional digital experiences that blend creativity with cutting-edge technology.";

function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <span>{text}</span>;
  }

  return (
    <span className="inline-flex flex-wrap">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 100, opacity: 0, rotateX: 20 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{
            delay: delay + i * 0.03,
            type: "spring",
            damping: 15,
            stiffness: 100,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <span>{text}</span>;
  }

  return (
    <span>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + i * 0.04, duration: 0.05 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1, delay: delay + text.length * 0.04 }}
        className="inline-block text-accent-primary ml-0.5"
      >
        |
      </motion.span>
    </span>
  );
}

export function HeroText() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight text-primary">
        <SplitText text={TITLE} delay={0.4} />
      </h1>

      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#FF6B9D]">
        <TypewriterText text={SUBTITLE} delay={1.5} />
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.6 }}
        className="text-text-secondary text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
      >
        {DESCRIPTION}
      </motion.p>
    </div>
  );
}
