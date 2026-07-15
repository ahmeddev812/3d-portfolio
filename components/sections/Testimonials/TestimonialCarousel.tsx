"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialCarousel() {
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 60,
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
