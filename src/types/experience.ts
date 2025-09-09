import { Technology } from "./technology";

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  imageSrc: string;
  companyType?: string;
  technologies?: Technology[];
}
