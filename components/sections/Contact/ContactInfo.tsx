"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Award } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Let's Build Something{" "}
          <span className="gradient-text">Amazing</span>
        </h3>
        <p className="text-text-secondary text-lg leading-relaxed">
          Have a project in mind? Let's collaborate and create something
          extraordinary together.
        </p>
      </div>

      <div className="space-y-4">
        <a
          href={`mailto:${siteConfig.email}`}
          className="flex items-center gap-3 text-text-secondary hover:text-accent-primary transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:border-accent-primary/30 transition-colors">
            <Mail className="w-5 h-5" />
          </div>
          <span>{siteConfig.email}</span>
        </a>
        <div className="flex items-center gap-3 text-text-secondary">
          <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <span>{siteConfig.location}</span>
        </div>
      </div>

      <SocialLinks />

      <div className="flex items-center gap-3 glass rounded-full px-6 py-3 w-fit">
        <Award className="w-5 h-5 text-accent-tertiary" />
        <span className="text-sm text-text-secondary">
          Trusted by 50+ clients worldwide
        </span>
      </div>
    </motion.div>
  );
}
