import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "web-dev",
    icon: "Globe",
    title: "Web Development",
    description: "Full-stack web applications built with cutting-edge technologies for maximum performance and scalability.",
    features: ["React & Next.js", "TypeScript", "Node.js", "PostgreSQL", "GraphQL"],
  },
  {
    id: "mobile",
    icon: "Smartphone",
    title: "Mobile Apps",
    description: "Cross-platform mobile applications with native performance using React Native and Expo.",
    features: ["React Native", "Expo", "Firebase", "App Store Deploy"],
  },
  {
    id: "3d",
    icon: "Box",
    title: "3D Experiences",
    description: "Immersive 3D web experiences using Three.js and WebGL for interactive product showcases and games.",
    features: ["Three.js", "R3F", "WebGL", "Blender"],
  },
  {
    id: "ui-ux",
    icon: "Palette",
    title: "UI/UX Design",
    description: "User-centered interface design with a focus on accessibility, aesthetics, and seamless interactions.",
    features: ["Figma", "Prototyping", "Design Systems", "User Testing"],
  },
  {
    id: "backend",
    icon: "Server",
    title: "Backend Systems",
    description: "Scalable server architecture with RESTful and GraphQL APIs, cloud infrastructure, and DevOps.",
    features: ["AWS", "Docker", "CI/CD", "Microservices"],
  },
  {
    id: "consulting",
    icon: "Lightbulb",
    title: "Tech Consulting",
    description: "Strategic technical guidance for startups and enterprises looking to scale their digital products.",
    features: ["Architecture", "Code Review", "Mentoring", "Tech Strategy"],
  },
];
