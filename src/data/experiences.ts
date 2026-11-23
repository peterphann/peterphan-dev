export interface Role {
  title: string;
  period: string;
}

export interface Experience {
  company: string;
  /** Shorter or clarified name for the table of contents. */
  label?: string;
  /** Image path shown in place of the company name in the chapter heading. */
  logo?: string;
  /** Optional version of the logo for dark mode. */
  logoDark?: string;
  /** Newest role first. */
  roles: Role[];
  location: string;
  /** Short date shown beside the entry in the table of contents. */
  tocDate: string;
  summary: string[];
  stack: string[];
}

export const experiences: Experience[] = [
  {
    company: "Amazon",
    logo: "/images/amazon-wordmark.png",
    logoDark: "/images/amazon-wordmark-dark.png",
    roles: [
      // { title: "Software Development Engineer", period: "Incoming Mar. 2027" },
      { title: "Software Development Engineer Intern", period: "Sep. – Nov. 2026" },
    ],
    location: "Seattle, WA",
    tocDate: "2026–",
    summary: [
      "Intering on the L7 DDoS Protection team for AWS WAF.",
    ],
    stack: [],
  },
  {
    company: "Visa",
    logo: "/images/visa-wordmark.png",
    roles: [{ title: "Software Engineering Intern", period: "May – Aug. 2026" }],
    location: "Austin, TX",
    tocDate: "2026",
    summary: ["Worked on the Payment Products Development team."],
    stack: ["Go", "Angular", "TypeScript"],
  },
  {
    company: "State Farm",
    logo: "/images/state-farm-wordmark.png",
    roles: [{ title: "Software Engineering Intern", period: "May – Aug. 2025" }],
    location: "Bloomington, IL",
    tocDate: "2025",
    summary: [
      "Migrated a catalog system serving 2,000+ employees to Vue.js, cutting bundle size by 32% and being featured in the company’s intern spotlight.",
      "Automated deployment workflows with Terraform CI/CD pipelines, eliminating manual deployment steps.",
      "Deployed AWS infrastructure (S3, CloudFront, DynamoDB) for consistent delivery across environments.",
      "Improved responsiveness by replacing client-side searches with indexed server-side queries, reducing latency by 50%.",
    ],
    stack: ["Vue", "AWS", "Spring", "Terraform", "Node.js"],
  },
  // {
  //   company: "AggieSeek",
  //   label: "AggieSeek, founder",
  //   roles: [{ title: "Founder", period: "Jan. 2025 – Present" }],
  //   location: "College Station, TX",
  //   tocDate: "2025–",
  //   summary: [
  //     "Founded and led the creation of a full-stack course tracker and analytics platform serving 9,000+ active users.",
  //     "Designed a Python-based microservice that ingests 100k+ records/min into PostgreSQL, integrating with AWS Lambda for event triggers and SNS for automated notifications.",
  //     "Deployed the application with Docker and AWS EC2 while cutting costs by 66% through self-hosted optimizations.",
  //     "Oversaw a 4-person team in Agile sprints and feature planning to ensure steady and collaborative development.",
  //   ],
  //   stack: ["Next.js", "PostgreSQL", "AWS", "Flask", "Python"],
  // },
  // {
  //   company: "ENGR TA Organization",
  //   roles: [{ title: "Web Developer", period: "Nov. 2024 – Present" }],
  //   location: "College Station, TX",
  //   tocDate: "2024–",
  //   summary: [
  //     "Developed a course resource platform for 10,000+ engineering students using Next.js and Tailwind CSS.",
  //     "Communicated with other branches and professors to consolidate and integrate content for the website.",
  //   ],
  //   stack: ["Next.js", "Tailwind CSS", "React"],
  // },
];
