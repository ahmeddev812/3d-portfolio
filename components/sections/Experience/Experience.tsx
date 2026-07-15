"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { experiences } from "@/lib/data/experience";
import { Briefcase } from "lucide-react";

function TimelineItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[number];
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex flex-col md:flex-row gap-6 md:gap-12 group"
    >
      <div className="hidden md:flex md:w-1/2 justify-end">
        {isLeft && (
          <GlassCard className="w-full p-6">
            <span className="text-xs font-medium text-accent-primary uppercase tracking-wider">
              {experience.period}
            </span>
            <h3 className="text-lg font-semibold text-primary mt-1">
              {experience.role}
            </h3>
            <p className="text-sm text-text-secondary font-medium">
              {experience.company}
            </p>
            <p className="text-sm text-text-secondary mt-3 leading-relaxed">
              {experience.description}
            </p>
            <ul className="mt-4 space-y-2">
              {experience.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="text-sm text-text-secondary flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-1.5 shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </GlassCard>
        )}
      </div>

      <div className="md:hidden w-full">
        <GlassCard className="w-full p-6">
          <span className="text-xs font-medium text-accent-primary uppercase tracking-wider">
            {experience.period}
          </span>
          <h3 className="text-lg font-semibold text-primary mt-1">
            {experience.role}
          </h3>
          <p className="text-sm text-text-secondary font-medium">
            {experience.company}
          </p>
          <p className="text-sm text-text-secondary mt-3 leading-relaxed">
            {experience.description}
          </p>
          <ul className="mt-4 space-y-2">
            {experience.highlights.map((highlight, i) => (
              <li
                key={i}
                className="text-sm text-text-secondary flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-1.5 shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>

      <div className="flex items-center justify-center relative z-10">
        <div className="w-10 h-10 rounded-full glass flex items-center justify-center border-2 border-accent-primary/30 group-hover:border-accent-primary transition-colors">
          <Briefcase className="w-4 h-4 text-accent-primary" />
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 md:justify-start">
        {!isLeft && (
          <GlassCard className="w-full p-6">
            <span className="text-xs font-medium text-accent-primary uppercase tracking-wider">
              {experience.period}
            </span>
            <h3 className="text-lg font-semibold text-primary mt-1">
              {experience.role}
            </h3>
            <p className="text-sm text-text-secondary font-medium">
              {experience.company}
            </p>
            <p className="text-sm text-text-secondary mt-3 leading-relaxed">
              {experience.description}
            </p>
            <ul className="mt-4 space-y-2">
              {experience.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="text-sm text-text-secondary flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-1.5 shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </GlassCard>
        )}
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/[0.02] to-transparent pointer-events-none" />
      <div className="section-container relative z-10">
        <SectionTitle
          title="Experience"
          subtitle="A journey of growth and innovation"
        />

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border-color md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.id} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
