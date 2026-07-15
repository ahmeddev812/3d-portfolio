"use client";

import { useRef } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { education } from "@/lib/data/education";
import { siteConfig } from "@/lib/config/site";
import { Download, GraduationCap, Award, Sparkles } from "lucide-react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useSpring(0, { stiffness: 60, damping: 20 });
  if (isInView) count.set(value);

  return (
    <span ref={ref}>
      {Math.round(count.get())}{suffix}
    </span>
  );
}

const STATS = [
  { label: "Projects Built", value: siteConfig.stats.projects, suffix: "+" },
  { label: "Happy Clients", value: siteConfig.stats.clients, suffix: "+" },
  { label: "Years Experience", value: siteConfig.stats.experience, suffix: "+" },
  { label: "Technologies", value: siteConfig.stats.technologies, suffix: "+" },
];

const EXPLORING = [
  "Advanced Animation Patterns",
  "WebGL & Shader Art",
  "AI-Powered Development Tools",
  "Edge Computing & CDN Strategies",
];

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/[0.02] to-transparent pointer-events-none" />
      <div className="section-container relative z-10">
        <SectionTitle
          title="About Me"
          subtitle="Developer, designer, and lifelong learner"
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Building the future,{" "}
              <span className="gradient-text">one line at a time</span>
            </h3>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Hi, I'm Ahmed — a Full Stack Developer and Creative Problem Solver based in Dubai. 
                For over 5 years, I've been helping startups, agencies, and enterprises transform 
                their digital presence through code that's as elegant as it is functional.
              </p>
              <p>
                My philosophy is simple: great software isn't just about choosing the right 
                framework or writing clean code. It's about understanding people — the users 
                who interact with your product and the team building it. I bridge the gap 
                between technical excellence and human-centered design.
              </p>
              <p>
                I specialize in React ecosystems, immersive 3D web experiences, and scalable 
                backend architecture. Every project I touch benefits from a holistic approach 
                that considers performance, accessibility, and long-term maintainability from 
                day one.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-primary" />
                Currently Exploring
              </h4>
              <div className="flex flex-wrap gap-2">
                {EXPLORING.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full bg-accent-primary/5 text-accent-primary border border-accent-primary/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Button variant="outline" className="group">
                Download CV
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="glass rounded-xl p-5 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-2 text-center">
            Journey & <span className="gradient-text">Achievements</span>
          </h3>
          <p className="text-text-secondary text-center mb-10">
            Milestones that shaped my career
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center shrink-0 mt-1">
                      {item.type === "education" ? (
                        <GraduationCap className="w-5 h-5 text-accent-primary" />
                      ) : (
                        <Award className="w-5 h-5 text-accent-tertiary" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-xs font-medium text-accent-primary uppercase tracking-wider">
                          {item.period}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent-primary/10 text-accent-primary uppercase tracking-wider">
                          {item.type === "education" ? "Education" : "Achievement"}
                        </span>
                      </div>
                      <h4 className="text-base font-semibold text-primary">
                        {item.title}
                      </h4>
                      <p className="text-sm text-text-secondary font-medium">
                        {item.institution}
                      </p>
                      <p className="text-sm text-text-muted mt-2 leading-relaxed">
                        {item.description}
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {item.highlights.slice(0, 2).map((h, j) => (
                          <li
                            key={j}
                            className="text-xs text-text-secondary flex items-start gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent-primary mt-1.5 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
