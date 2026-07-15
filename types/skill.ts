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

export interface SkillCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}
