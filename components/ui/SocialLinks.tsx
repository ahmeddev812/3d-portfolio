"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ShoppingBag, Briefcase } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { useTheme } from "@/components/ThemeProvider";

const SOCIALS = [
  { icon: Github, href: siteConfig.social.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: ShoppingBag, href: siteConfig.social.fiverr, label: "Fiverr" },
  { icon: Briefcase, href: siteConfig.social.upwork, label: "Upwork" },
];

export function SocialLinks() {
  const { theme } = useTheme();

  return (
    <div className="flex gap-3">
      {SOCIALS.map((social) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center text-text-secondary hover:text-accent-primary transition-colors"
            aria-label={social.label}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        );
      })}
    </div>
  );
}
