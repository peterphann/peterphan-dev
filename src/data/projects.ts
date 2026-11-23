export interface ProjectLink {
  label: string;
  url: string;
  note?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: { src: string; width: number; height: number };
  role: string;
  timeline: string;
  /** Event or short date shown beside the entry in the table of contents. */
  tocDate: string;
  award?: string;
  stack: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "zephyr",
    title: "Zephyr",
    description:
      "Get AI-powered flight guidance and gentle support, designed to make your flight experience a breeze.",
    image: { src: "/images/zephyr.png", width: 938, height: 635 },
    role: "Developer",
    timeline: "Jan 2026",
    tocDate: "TAMUhack '26",
    award: "Best Use of Gemini API, TAMUhack 2026",
    stack: ["Next.js", "MongoDB", "Gemini", "FastAPI", "Auth0", "Vultr"],
    links: [
      { label: "Live site", url: "https://zephyr-air.tech/" },
      { label: "GitHub", url: "https://github.com/peterphann/zephyr" },
      {
        label: "Devpost",
        url: "https://devpost.com/software/zephyr-x0rwqc",
        note: "Our submission to TAMUhack 2026.",
      },
    ],
  },
  {
    id: "flock",
    title: "Flock",
    description:
      "Transform flight delays and cancellations into exciting trips by generating itineraries and gaining access to hotel vouchers and car rentals near you.",
    image: { src: "/images/flock.png", width: 600, height: 400 },
    role: "Developer",
    timeline: "Jan 2025",
    tocDate: "TAMUhack '25",
    award: "2nd Place, TAMUhack 2025",
    stack: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS", "OpenAI", "Google Maps"],
    links: [
      { label: "Live site", url: "https://flockingawesome.tech/" },
      { label: "GitHub", url: "https://github.com/peterphann/tamuhack25" },
      {
        label: "Devpost",
        url: "https://devpost.com/software/flock-ayxf75",
        note: "Our submission to TAMUhack 2025.",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/posts/peterlphan_last-month-i-had-the-opportunity-to-participate-activity-7300253052811325443-vjxd",
        note: "A post about the experience.",
      },
    ],
  },
  {
    id: "arcadia",
    title: "Arcadia",
    description:
      "An online arcade that combines retro aesthetics with the technology of the future. Made for HackTX 2024.",
    image: { src: "/images/arcadia.png", width: 3024, height: 1666 },
    role: "Developer",
    timeline: "Nov 2024",
    tocDate: "HackTX '24",
    stack: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS", "Three.js", "MediaPipe", "Supabase"],
    links: [
      { label: "Live site", url: "https://www.arcadium.tech/" },
      { label: "GitHub", url: "https://github.com/ericliu-12/hacktx24" },
      {
        label: "Devpost",
        url: "https://devpost.com/software/arcadia-xgwt0s",
        note: "Our submission to HackTX 2024.",
      },
    ],
  },
  {
    id: "aggieseek",
    title: "AggieSeek",
    description:
      "A modern course discovery platform designed to help Texas A&M students find and explore courses with ease.",
    image: { src: "/images/aggieseek.png", width: 2000, height: 1400 },
    role: "Lead Developer, Project Manager",
    timeline: "Jan 2024 – Present",
    tocDate: "2024–",
    stack: ["React", "TypeScript", "Python", "PostgreSQL", "Tailwind CSS", "Docker", "AWS", "Nginx"],
    links: [
      { label: "Live site", url: "https://aggieseek.net" },
      { label: "GitHub", url: "https://github.com/aggieseek" },
      {
        label: "Battalion feature",
        url: "https://thebatt.com/life-arts/navigating-student-life-made-easy-by-the-aggie-coding-club/",
        note: "Student spotlight article about AggieSeek.",
      },
      {
        label: "Aggie Coding Club",
        url: "https://aggiecodingclub.com",
        note: "The organization where this project was born.",
      },
    ],
  },
];
