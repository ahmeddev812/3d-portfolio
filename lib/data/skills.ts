export interface SkillItem {
  name: string;
  percentage: number;
  color: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: "Code2",
    items: [
      { name: "React / Next.js", percentage: 95, color: "#61DAFB" },
      { name: "TypeScript", percentage: 90, color: "#3178C6" },
      { name: "Tailwind CSS", percentage: 92, color: "#06B6D4" },
      { name: "Framer Motion", percentage: 85, color: "#0055FF" },
      { name: "Three.js / R3F", percentage: 78, color: "#0499DD" },
      { name: "HTML / CSS", percentage: 95, color: "#E34F26" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "Server",
    items: [
      { name: "Node.js / Express", percentage: 88, color: "#339933" },
      { name: "Python / Django", percentage: 75, color: "#3776AB" },
      { name: "PostgreSQL", percentage: 82, color: "#4169E1" },
      { name: "MongoDB", percentage: 78, color: "#47A248" },
      { name: "GraphQL", percentage: 72, color: "#E10098" },
      { name: "REST APIs", percentage: 90, color: "#FF6C37" },
    ],
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    icon: "Wrench",
    items: [
      { name: "Git / GitHub", percentage: 92, color: "#F05032" },
      { name: "Docker", percentage: 78, color: "#2496ED" },
      { name: "AWS", percentage: 75, color: "#FF9900" },
      { name: "CI/CD", percentage: 80, color: "#2088FF" },
      { name: "Figma", percentage: 70, color: "#F24E1E" },
      { name: "VS Code", percentage: 95, color: "#007ACC" },
    ],
  },
  {
    id: "design",
    name: "Design & Creative",
    icon: "Palette",
    items: [
      { name: "UI/UX Design", percentage: 80, color: "#FF4154" },
      { name: "Responsive Design", percentage: 92, color: "#61DAFB" },
      { name: "Animation", percentage: 85, color: "#FF6B6B" },
      { name: "Prototyping", percentage: 78, color: "#A855F7" },
      { name: "Design Systems", percentage: 82, color: "#10B981" },
      { name: "Accessibility (a11y)", percentage: 76, color: "#F59E0B" },
    ],
  },
];
