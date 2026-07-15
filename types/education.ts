export interface Education {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
  type: "education" | "achievement";
}
