import { ExperienceItem } from "@/types/experience";
import {
  aws,
  flask,
  next,
  node,
  postgresql,
  python,
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
      "Migrated a catalog system serving 2,000+ employees to Vue.js, cutting bundle size by 32% and being featured in the company’s intern spotlight",
      "Automated deployment workflows with Terraform CI/CD pipelines, eliminating manual deployment steps",
      "Deployed AWS infrastructure (S3, CloudFront, DynamoDB) for consistent delivery across environments",
      "Improved responsiveness by replacing client-side searches with indexed server-side queries, reducing latency by 50%",
    ],
    technologies: [vue, aws, spring, terraform, node],
  },
  {
    title: "Founder",
    company: "AggieSeek",
    location: "College Station, TX",
    period: "Jan. '25 - Present",
    imageSrc: "/images/aggieseek-logo.png",
    description: [
      "Founded and led the creation of a full-stack course tracker and analytics platform serving 6,000+ active users",
      "Designed a Python-based microservice that ingests 100k+ records/min into PostgreSQL, integrating with AWS Lambda for event triggers and SNS for automated notifications",
      "Deployed the application with Docker and AWS EC2 while cutting costs by 66% through self-hosted optimizations",
      "Oversaw a 4-person team in Agile sprints and feature planning to ensure steady and collaborative development",
    ],
    technologies: [next, postgresql, aws, flask, python],
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
