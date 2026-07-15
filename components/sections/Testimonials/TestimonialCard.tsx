"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/types/testimonial";
import { cn } from "@/lib/utils/cn";
import { useTheme } from "@/components/ThemeProvider";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const { theme } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  const [glare, setGlare] = useState({ x: "50%", y: "50%" });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlare({ x: `${x}%`, y: `${y}%` });
    const rotX = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    const rotY = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    setRotate({ x: rotX, y: rotY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setGlare({ x: "50%", y: "50%" });
    setRotate({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group"
        style={{
          transformStyle: "preserve-3d",
          perspective: "800px",
        }}
      >
        <div
          style={{
            transform: `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
            transition: rotate.x === 0 ? "transform 0.5s cubic-bezier(0.25, 0.4, 0.25, 1)" : "none",
            backgroundImage: `radial-gradient(circle at ${glare.x} ${glare.y}, ${theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"} 0%, transparent 60%)`,
          }}
          className={cn(
            "rounded-2xl border transition-all duration-300 p-6 h-full",
            "border-border-color bg-primary/40 backdrop-blur-xl hover:border-accent-primary/30"
          )}
        >
          <div style={{ transform: "translateZ(20px)" }}>
            <Quote className="w-8 h-8 text-accent-primary/30 mb-4 group-hover:text-accent-primary/60 transition-colors" />
            <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-4">
              {testimonial.content}
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white font-bold text-sm shrink-0">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-primary">{testimonial.name}</p>
                <p className="text-xs text-text-muted">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
