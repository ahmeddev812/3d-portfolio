"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "3D", value: "3d" },
] as const;

export type FilterValue = (typeof FILTERS)[number]["value"];

interface ProjectFilterProps {
  active: FilterValue;
  onFilterChange: (value: FilterValue) => void;
}

export function ProjectFilter({ active, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {FILTERS.map((filter) => (
        <motion.button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
            active === filter.value
              ? "text-primary"
              : "text-text-secondary hover:text-primary"
          )}
        >
          {active === filter.value && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{filter.label}</span>
        </motion.button>
      ))}
    </div>
  );
}
