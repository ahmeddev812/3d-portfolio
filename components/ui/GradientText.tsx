import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
}

export function GradientText({
  className,
  as: Component = "span",
  children,
  ...props
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#38BDF8]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
