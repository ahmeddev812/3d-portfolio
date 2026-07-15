"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { siteConfig } from "@/lib/config/site";
import { useTheme } from "./ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.body.style.touchAction = isOpen ? "none" : "";
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-primary/90 backdrop-blur-xl border-b border-border-color"
          : "bg-primary/95 backdrop-blur-lg border-b border-border-color/50 md:bg-transparent md:border-transparent"
      )}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => handleNavClick("#home")}
          className="text-xl font-bold tracking-wider active:scale-95 transition-transform"
        >
          <span className="gradient-text">AHMED</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "relative text-sm transition-colors group py-2",
                "text-text-secondary hover:text-primary"
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen((p) => !p)}
            className={cn(
              "w-11 h-11 rounded-xl glass flex items-center justify-center transition-colors active:scale-90",
              "text-primary"
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            style={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "w-full min-h-screen backdrop-blur-2xl flex flex-col items-center justify-start pt-16 gap-2 px-6",
                "bg-primary/98"
              )}
              style={{ overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }}
            >
              {siteConfig.navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "w-full text-center py-4 text-lg font-medium rounded-xl transition-all active:scale-95",
                    "text-text-secondary hover:text-primary hover:bg-primary/5"
                  )}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
