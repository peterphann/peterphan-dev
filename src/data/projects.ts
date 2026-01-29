import { Project } from "@/types/project";
import {
  react,
  typescript,
  python,
  postgresql,
  tailwind,
  docker,
  aws,
  nginx,
  threejs,
  mediapipe,
  supabase,
  openai,
  googleMaps,
  next,
  mongodb,
  gemini,
  fastapi,
  auth0,
  vultr,
} from "./technologies";
import {
  aggieSeekTeam,
  arcadiaTeam,
  flockTeam,
  zephyrTeam,
} from "./team-members";

export const aggieseek: Project = {
  id: "aggieseek",
  title: "AggieSeek",
  description:
    "A modern course discovery platform designed to help Texas A&M students find and explore courses with ease",
  heroImage: "/images/aggieseek.png",
  badges: [
    { text: "Web Application", variant: "blue" },
    { text: "Active Development", variant: "green" },
  ],
  timeline: "Jan. 2024 – Present",
  team: {
    count: 4,
    members: aggieSeekTeam,
  },
  role: "Lead Developer",
  roleSubtitle: "Project Manager",
  githubLink: "https://github.com/aggieseek",
  liveSiteLink: "https://aggieseek.net",
  technologies: [
    react,
    typescript,
    python,
    postgresql,
    tailwind,
    docker,
    aws,
    nginx,
  ],
  techGridCols: {
    mobile: 4,
    desktop: 8,
  },
  quickLinks: [
    {
      title: "Battalion Feature",
      description: "Student spotlight article about AggieSeek",
      url: "https://thebatt.com/life-arts/navigating-student-life-made-easy-by-the-aggie-coding-club/",
      icon: "newspaper",
      color: "blue",
    },
    {
      title: "Aggie Coding Club",
      description: "The organization where this project was born",
      url: "https://aggiecodingclub.com",
      icon: "building",
      color: "purple",
    },
  ],
};

export const arcadia: Project = {
  id: "arcadia",
  title: "Arcadia",
  description:
    "An online arcade that combines retro aesthetics with the technology of the future. Made for HackTX 2024.",
  heroImage: "/images/arcadia.png",
  badges: [{ text: "Web Application", variant: "blue" }],
  timeline: "Nov. 2024",
  team: {
    count: 4,
    members: arcadiaTeam,
  },
  role: "Developer",
  githubLink: "https://github.com/ericliu-12/hacktx24",
  liveSiteLink: "https://www.arcadium.tech/",
  technologies: [
    react,
    typescript,
    postgresql,
    tailwind,
    threejs,
    mediapipe,
    supabase,
  ],
  techGridCols: {
    mobile: 4,
    desktop: 7,
  },
  quickLinks: [
    {
      title: "Devpost",
      description: "Our submission to HackTX 2024",
      url: "https://devpost.com/software/arcadia-xgwt0s",
      icon: "code",
      color: "blue",
    },
  ],
};

export const flock: Project = {
  id: "flock",
  title: "Flock",
  description:
    "Transform flight delays and cancellations into exciting trips by generating itineraries and gaining access to hotel vouchers and car rentals near you!",
  heroImage: "/images/flock.png",
  badges: [
    { text: "2nd Place, TAMUhack 2025", variant: "award", icon: "trophy" },
    { text: "Web Application", variant: "blue" },
  ],
  timeline: "Jan. 2025",
  team: {
    count: 4,
    members: flockTeam,
  },
  role: "Developer",
  githubLink: "https://github.com/peterphann/tamuhack25",
  liveSiteLink: "https://flockingawesome.tech/",
  technologies: [react, typescript, postgresql, tailwind, openai, googleMaps],
  techGridCols: {
    mobile: 4,
    desktop: 6,
  },
  quickLinks: [
    {
      title: "Devpost",
      description: "Our submission to TAMUhack 2025",
      url: "https://devpost.com/software/flock-ayxf75",
      icon: "code",
      color: "blue",
    },
    {
      title: "LinkedIn",
      description: "LinkedIn post about my experience!",
      url: "https://www.linkedin.com/posts/peterlphan_last-month-i-had-the-opportunity-to-participate-activity-7300253052811325443-vjxd",
      icon: "linkedin",
      color: "blue",
    },
  ],
  showAwardBadge: {
    title: "2nd Place",
    subtitle: "TAMUhack 2025",
  },
};

export const zephyr: Project = {
  id: "zephyr",
  title: "zephyr",
  description:
    "Get AI-powered flight guidance and gentle support, designed to make your flight experience a breeze.",
  heroImage: "/images/zephyr.png",
  badges: [
    {
      text: "Best Use of Gemini, TAMUhack 2026",
      variant: "award",
      icon: "trophy",
    },
    { text: "Web Application", variant: "blue" },
  ],
  timeline: "Jan. 2026",
  team: {
    count: 4,
    members: zephyrTeam,
  },
  role: "Developer",
  githubLink: "https://github.com/peterphann/zephyr",
  liveSiteLink: "https://zephyr-air.tech/",
  technologies: [next, mongodb, gemini, fastapi, auth0, vultr],
  techGridCols: {
    mobile: 4,
    desktop: 6,
  },
  quickLinks: [
    {
      title: "Devpost",
      description: "Our submission to TAMUhack 2026",
      url: "https://devpost.com/software/zephyr-x0rwqc",
      icon: "code",
      color: "blue",
    },
  ],
  showAwardBadge: {
    title: "Best Use of Gemini API",
    subtitle: "TAMUhack 2026",
  },
};

export const projects = {
  aggieseek,
  arcadia,
  flock,
  zephyr,
};
