import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Senior Full Stack Developer",
    company: "TechVision Inc.",
    period: "2023 - Present",
    description: "Leading development of scalable web applications and mentoring junior developers in best practices.",
    highlights: [
      "Architected microservices infrastructure serving 1M+ users",
      "Reduced deployment time by 60% with CI/CD pipeline",
      "Led team of 5 developers on flagship product",
    ],
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Digital Dynamics",
    period: "2021 - 2023",
    description: "Built and maintained multiple client-facing applications using modern web technologies.",
    highlights: [
      "Developed real-time analytics dashboard used by 200+ clients",
      "Implemented GraphQL API reducing data fetch time by 40%",
      "Integrated third-party APIs including Stripe, AWS, and Twilio",
    ],
  },
  {
    id: "3",
    role: "Frontend Developer",
    company: "InnovateLab",
    period: "2019 - 2021",
    description: "Created responsive, accessible web applications with focus on user experience and performance.",
    highlights: [
      "Built component library used across 4 product teams",
      "Improved Lighthouse scores from 65 to 95+",
      "Introduced TypeScript reducing production bugs by 45%",
    ],
  },
  {
    id: "4",
    role: "Junior Developer",
    company: "StartupX",
    period: "2018 - 2019",
    description: "Started career building web applications and learning modern development practices.",
    highlights: [
      "Developed MVP that secured $2M seed funding",
      "Built responsive landing pages with 99.9% uptime",
      "Collaborated on open-source projects in React ecosystem",
    ],
  },
];
