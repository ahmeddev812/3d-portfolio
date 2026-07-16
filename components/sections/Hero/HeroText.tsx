"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const TITLE = ["Hi, I'm", "Ahmed"];

const SUBTITLE = [
  "Full Stack Developer",
  "Creative Problem Solver",
];

const DESCRIPTION =
  "I build fast, scalable and visually engaging web applications with modern technologies, transforming ideas into seamless digital experiences.";

function SplitText({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <span>{text}</span>;
  }

  return (
    <span className="inline-flex flex-wrap">
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: delay + index * 0.18,
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mr-3 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function TypewriterText({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <span>{text}</span>;
  }

  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + i * 0.03,
            duration: 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}

export function HeroText() {
  return (
    <div className="space-y-8">
      {/* Main Heading */}
      <div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.45)]">
          <SplitText text={TITLE[0]} delay={0.2} />
        </h1>

        <h1 className="mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#DBEAFE] via-[#93C5FD] to-[#3B82F6] drop-shadow-[0_8px_35px_rgba(59,130,246,0.25)]">
          <SplitText text={TITLE[1]} delay={0.6} />
        </h1>
      </div>

      {/* Subtitle */}
      <div className="space-y-2">
        {SUBTITLE.map((line, index) => (
          <motion.h2
            key={line}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2 + index * 0.3,
              duration: 0.6,
            }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white"
          >
            <TypewriterText
              text={line}
              delay={1.3 + index * 0.4}
            />
          </motion.h2>
        ))}
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2.2,
          duration: 0.7,
        }}
        className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-300"
      >
        {DESCRIPTION}
      </motion.p>
    </div>
  );
}