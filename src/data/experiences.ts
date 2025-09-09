import { ExperienceItem } from "@/types/experience";
import {
  aws,
  next,
  node,
  react,
  spring,
  tailwind,
  terraform,
  vue,
} from "./technologies";

export const experiences: ExperienceItem[] = [
  {
    title: "Software Engineering Intern",
    company: "State Farm",
    location: "Bloomington, IL",
    period: "May '25 - Aug '25",
    imageSrc: "/images/statefarm-logo.png",
    description: [
      "Migrated a dynamic form catalog from React to Vue.js, rewriting components and state management",
      "Built CI/CD pipelines to automate infrastructure provisioning and deployment",
      "Provisioned AWS infrastructure (S3, CloudFront, Route 53) using Terraform for scalable cloud deployments",
      "Maintained a Spring Boot REST API to serve dynamic PDF documents and employee-specific forms",
      "Collaborated in Agile development cycles, contributing to daily standups and sprint planning",
    ],
    technologies: [vue, aws, spring, terraform, node],
  },
  {
    title: "Web Developer",
    company: "ENGR TA Organization",
    location: "College Station, TX",
    period: "Nov. '24 - Present",
    imageSrc: "/images/tao-logo.png",
    description: [
      "Developed a course resource platform for 10,000+ engineering students using Next.js and Tailwind CSS",
      "Communicated with other branches and professors to consolidate and integrate content for the website",
    ],
    technologies: [next, tailwind, react],
  },
  {
    title: "Project Manager",
    company: "Aggie Coding Club",
    location: "College Station, TX",
    period: "Jan. '24 - Dec. '24",
    imageSrc: "/images/acc-logo.jpg",
    description: [
      "Directed a 10+ member team in the development of AggieSeek, a full-stack course tracker for Texas A&M",
      "Oversaw project planning and sprint execution using Agile workflows to ensure steady team collaboration",
      "Integrated Better Stack for monitoring and logging to enhance observability, uptime, and debugging efficiency",
      "Created developer documentation with MkDocs to improve project maintainability and onboarding",
    ],
    technologies: [react, next, tailwind],
  },
];
