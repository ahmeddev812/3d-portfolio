"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { cn } from "@/lib/utils/cn";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border-color">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <button onClick={scrollToTop} className="text-xl font-bold tracking-wider mb-2">
              <span className="gradient-text">AHMED</span>
            </button>
            <p className="text-sm text-text-muted">
              Building exceptional digital experiences
            </p>
          </div>

          <SocialLinks />

          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} Ahmed. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center transition-colors text-primary"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
