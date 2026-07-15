"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-6"
        animate={isPaused ? { x: undefined } : { x: ["0%", "-50%"] }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, i) => (
          <div
            key={`${testimonial.id}-${i}`}
            className="min-w-[280px] sm:min-w-[350px] w-[280px] sm:w-[350px] shrink-0"
          >
            <TestimonialCard testimonial={testimonial} index={i % testimonials.length} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
