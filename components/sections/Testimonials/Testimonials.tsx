"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { TestimonialCarousel } from "./TestimonialCarousel";

const headingWords = ["What", "People", "Say"];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium border-transparent bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 backdrop-blur-sm mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              Testimonials
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary"
          >
            {headingWords.map((word, i) => (
              <span key={word} className="inline-block overflow-hidden mr-[0.25em]">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>
        </div>

        <TestimonialCarousel />
      </div>
    </section>
  );
}
