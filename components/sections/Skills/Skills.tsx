"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { skillCategories } from "@/lib/data/skills";
import { cn } from "@/lib/utils/cn";
import { Code2, Server, Wrench, Palette } from "lucide-react";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Code2, Server, Wrench, Palette,
};

const ALL_TAB = { id: "all", name: "All Skills", icon: "Code2" };
const tabs = [ALL_TAB, ...skillCategories.map((c) => ({ id: c.id, name: c.name, icon: c.icon }))];

function SkillBarItem({ name, percentage, color, index }: { name: string; percentage: number; color: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="space-y-1.5"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-primary">{name}</span>
        <span className="text-xs text-text-muted">{percentage}%</span>
      </div>
      <div className="h-2 bg-surface rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}40` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.08 }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all"
    ? skillCategories.flatMap((c) => c.items)
    : skillCategories.find((c) => c.id === activeTab)?.items ?? [];

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/[0.02] via-transparent to-accent-secondary/[0.02] pointer-events-none" />
      <div className="section-container relative z-10">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies I work with daily"
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const Icon = iconMap[tab.icon] || Code2;
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                  isActive
                    ? "text-white"
                    : "text-text-secondary hover:text-primary"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="skillTabBg"
                    className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon className="relative z-10 w-4 h-4" />
                <span className="relative z-10">{tab.name}</span>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === "all" ? (
              <div className="grid md:grid-cols-2 gap-8">
                {skillCategories.map((category) => {
                  const Icon = iconMap[category.icon] || Code2;
                  return (
                    <GlassCard key={category.id} className="p-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-accent-primary" />
                        </div>
                        <h3 className="text-base font-semibold text-primary">{category.name}</h3>
                      </div>
                      <div className="space-y-3">
                        {category.items.map((item, i) => (
                          <SkillBarItem key={item.name} {...item} index={i} />
                        ))}
                      </div>
                    </GlassCard>
                  );
                })}
              </div>
            ) : (
              <div className="max-w-xl mx-auto">
                <GlassCard className="p-6">
                  {(() => {
                    const cat = skillCategories.find((c) => c.id === activeTab);
                    const Icon = cat ? iconMap[cat.icon] || Code2 : Code2;
                    return (
                      <>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-accent-primary" />
                          </div>
                          <h3 className="text-lg font-semibold text-primary">{cat?.name}</h3>
                        </div>
                        <div className="space-y-4">
                          {filtered.map((item, i) => (
                            <SkillBarItem key={item.name} {...item} index={i} />
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </GlassCard>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
