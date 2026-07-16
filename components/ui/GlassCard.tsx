"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  hover?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, glow, hover = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={
          hover
            ? { y: -8, boxShadow: "0 20px 40px rgba(59,130,246,0.12)", transition: { type: "spring", stiffness: 300, damping: 15 } }
            : undefined
        }
        className={cn(
          "glass rounded-2xl p-6 transition-colors duration-300",
          hover && "glass-hover",
          glow && "hover:shadow-glow-primary",
          className
        )}
        {...(props as React.ComponentProps<typeof motion.div>)}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
export type { GlassCardProps };
