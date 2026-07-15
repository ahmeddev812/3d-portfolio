"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectFilter, type FilterValue } from "./ProjectFilter";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/data/projects";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredProjects = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section id="work" className="section-padding">
      <div className="section-container">
        <SectionTitle
          title="Featured Work"
          subtitle="A selection of projects that showcase my skills and passion"
        />
        <ProjectFilter
          active={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
