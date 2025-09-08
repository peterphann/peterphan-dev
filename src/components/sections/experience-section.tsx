import { cn } from "@/lib/utils";
import { inter } from "@/util/fonts";
import ExperienceCard, { ExperienceItem } from "@/components/experience-card";

const experiences: ExperienceItem[] = [
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
  },
];

export default function ExperienceSection() {
  return (
    <section id={"experience"} className={"pt-4"}>
      <div className={"text-center mb-8"}>
        <h2
          className={cn(
            "text-neutral-400 tracking-widest mb-3 text-xl uppercase",
            inter.className,
          )}
        >
          Experience
        </h2>
      </div>

      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
}
