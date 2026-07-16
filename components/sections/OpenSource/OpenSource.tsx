"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValueEvent } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Github, GitFork, Star, GitCommit, Code2 } from "lucide-react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useSpring(0, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(count, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  useEffect(() => {
    if (isInView) count.set(value);
  }, [isInView, value, count]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

const GITHUB_STATS = [
  { icon: Github, label: "Repositories", value: 25, suffix: "+", color: "#3B82F6" },
  { icon: Star, label: "Stars Earned", value: 120, suffix: "+", color: "#60A5FA" },
  { icon: GitCommit, label: "Contributions", value: 500, suffix: "+", color: "#38BDF8" },
  { icon: GitFork, label: "Forks", value: 45, suffix: "+", color: "#06B6D4" },
];

const LANGUAGES = [
  { name: "TypeScript", percentage: 40, color: "#3178C6" },
  { name: "JavaScript", percentage: 25, color: "#F7DF1E" },
  { name: "Python", percentage: 18, color: "#3776AB" },
  { name: "HTML/CSS", percentage: 12, color: "#E34F26" },
  { name: "Other", percentage: 5, color: "#6B7280" },
];

const REPOS = [
  {
    name: "r3f-starter",
    description: "Production-ready React Three Fiber starter with performance optimizations and post-processing.",
    stars: 340,
    language: "TypeScript",
    languageColor: "#3178C6",
  },
  {
    name: "next-motion",
    description: "Reusable animation components and hooks built on Framer Motion for Next.js projects.",
    stars: 180,
    language: "TypeScript",
    languageColor: "#3178C6",
  },
  {
    name: "ui-kit",
    description: "Accessible, themeable component library with dark/light mode and 30+ production-ready components.",
    stars: 95,
    language: "JavaScript",
    languageColor: "#F7DF1E",
  },
];

export function OpenSource() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/[0.02] to-transparent pointer-events-none" />
      <div className="section-container relative z-10">
        <SectionTitle
          title="Open Source"
          subtitle="Contributing to the developer community"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {GITHUB_STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <GlassCard className="p-5 text-center">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {REPOS.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <GlassCard className="p-5 h-full group">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-text-muted">
                    <Star className="w-3.5 h-3.5" />
                    {repo.stars}
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-primary mb-1 font-mono">
                  {repo.name}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed mb-3 line-clamp-2">
                  {repo.description}
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="text-xs text-text-muted">{repo.language}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
