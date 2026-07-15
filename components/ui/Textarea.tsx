"use client";

import { forwardRef, useState, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const hasValue = props.value && String(props.value).length > 0;

    return (
      <div className="relative group">
        <motion.div
          className={cn(
            "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300",
            focused && "opacity-100"
          )}
          style={{
            background:
              "linear-gradient(135deg, rgba(108,99,255,0.1), rgba(255,107,157,0.1))",
          }}
        />
        <textarea
          ref={ref}
          id={id}
          onFocus={(e) => {
            setFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
          }}
          className={cn(
            "peer w-full bg-surface border rounded-xl px-4 pt-6 pb-2 text-primary placeholder-transparent transition-all duration-300 outline-none resize-none min-h-[120px]",
            "focus:border-accent-primary/50 focus:bg-elevated",
            error
              ? "border-red-500/50"
              : "border-border-color hover:border-text-muted",
            className
          )}
          placeholder={label}
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            "absolute left-4 transition-all duration-300 pointer-events-none",
            "peer-placeholder-shown:text-muted peer-placeholder-shown:top-4 peer-placeholder-shown:text-base",
            "peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-primary",
            (focused || hasValue) && "top-2 text-xs",
            hasValue && !focused ? "text-secondary" : "",
            error ? "text-red-400" : "text-muted"
          )}
        >
          {label}
        </label>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-xs mt-1 ml-1"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
export type { TextareaProps };
