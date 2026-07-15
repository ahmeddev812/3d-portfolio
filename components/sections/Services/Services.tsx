"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { services } from "@/lib/data/services";
import {
  Globe,
  Smartphone,
  Box,
  Palette,
  Server,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Box,
  Palette,
  Server,
  Lightbulb,
};

export function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/[0.02] via-transparent to-accent-secondary/[0.02] pointer-events-none" />
      <div className="section-container relative z-10">
        <SectionTitle
          title="Services"
          subtitle="Comprehensive solutions tailored to your needs"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <GlassCard className="p-6 h-full group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-accent-primary" />
                    </div>

                    <h3 className="text-lg font-semibold text-primary mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm text-text-secondary leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-2.5 py-1 rounded-full bg-accent-primary/5 text-accent-primary border border-accent-primary/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
