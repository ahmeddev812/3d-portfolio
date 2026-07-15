export interface EducationItem {
  id: string;
  type: "education" | "achievement";
  period: string;
  title: string;
  institution: string;
  description: string;
  highlights: string[];
}

export const education: EducationItem[] = [
  {
    id: "edu-1",
    type: "education",
    period: "2016 — 2020",
    title: "B.Sc. in Computer Science",
    institution: "University of Sharjah",
    description:
      "Graduated with honors, focusing on software engineering, data structures, and web technologies. Led multiple capstone projects and participated in hackathons.",
    highlights: [
      "Graduated with Distinction (GPA: 3.7/4.0)",
      "Dean's List for 4 consecutive semesters",
    ],
  },
  {
    id: "edu-2",
    type: "achievement",
    period: "2022",
    title: "Full Stack Web Development Bootcamp",
    institution: "Le Wagon Dubai",
    description:
      "Intensive 12-week bootcamp covering Ruby on Rails, JavaScript, React, SQL, and deployment. Built and shipped 3 full-stack applications from scratch.",
    highlights: [
      "Top 5% of cohort — awarded 'Best Final Project'",
      "Built a real-time collaboration tool used by 200+ beta users",
    ],
  },
  {
    id: "edu-3",
    type: "achievement",
    period: "2023",
    title: "Open Source Contributor",
    institution: "GitHub Community",
    description:
      "Active contributor to several open-source projects including Next.js documentation, Tailwind CSS plugins, and accessibility-focused React component libraries.",
    highlights: [
      "Merged 15+ pull requests across 5 major repositories",
      "Recognized as 'Top Contributor' in the Next.js community",
    ],
  },
  {
    id: "edu-4",
    type: "education",
    period: "2024",
    title: "AWS Certified Solutions Architect",
    institution: "Amazon Web Services",
    description:
      "Earned the AWS Solutions Architect – Associate certification, demonstrating expertise in designing distributed systems, cloud infrastructure, and cost-optimized architectures.",
    highlights: [
      "Scored 920/1000 on the certification exam",
      "Designed a serverless architecture handling 50K+ daily requests",
    ],
  },
];
