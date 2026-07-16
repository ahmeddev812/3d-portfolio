"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const TAG_COLORS: Record<string, string> = {
  "Next.js": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  TypeScript: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Stripe: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  PostgreSQL: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  Prisma: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "React Native": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  Expo: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
  Firebase: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  "Node.js": "bg-green-500/10 text-green-600 dark:text-green-400",
  "Three.js": "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  "React Three Fiber": "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  Blender: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  WebGL: "bg-red-500/10 text-red-600 dark:text-red-400",
  React: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  "D3.js": "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  GraphQL: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  AWS: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  "Socket.io": "bg-neutral-500/10 text-neutral-600 dark:text-neutral-400",
  MongoDB: "bg-lime-500/10 text-lime-600 dark:text-lime-400",
  Redis: "bg-red-500/10 text-red-600 dark:text-red-400",
  "AR.js": "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400",
  WebXR: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <GlassCard className="group h-full flex flex-col overflow-hidden p-0">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#3B82F6]/10 to-[#38BDF8]/10">
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={`text-xs px-2 py-1 rounded-full ${
                  TAG_COLORS[tag] || "bg-surface text-text-secondary"
                }`}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-surface text-text-secondary">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-primary mb-2 group-hover:gradient-text transition-all">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {project.description}
          </p>

          <div className="flex gap-2 mt-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(project.liveUrl, "_blank")}
              className="flex-1"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(project.githubUrl, "_blank")}
              className="flex-1"
            >
              <Github className="w-4 h-4" />
              Code
            </Button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
