import { Technology } from "./technology";

export interface ProjectBadge {
  text: string;
  variant: "blue" | "green" | "award";
  icon?: "trophy";
}

export interface QuickLink {
  title: string;
  description: string;
  url: string;
  icon: "code" | "newspaper" | "building" | "linkedin";
  color: "blue" | "purple" | "yellow";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  heroImage: string;
  badges: ProjectBadge[];
  timeline: string;
  team: {
    count: number;
    members: any[]; // TeamMember[] from team-members
  };
  role: string;
  roleSubtitle?: string;
  githubLink: string;
  liveSiteLink?: string;
  technologies: Technology[];
  techGridCols: {
    mobile: number;
    desktop: number;
  };
  quickLinks?: QuickLink[];
  showAwardBadge?: {
    title: string;
    subtitle: string;
  };
}
