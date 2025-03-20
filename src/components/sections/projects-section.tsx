import { cn } from "@/lib/utils";
import { inter } from "@/util/fonts";
import ProjectCard from "@/components/project-card";

export default function ProjectsSection() {
  return <section id={"projects"} className={"border-t border-t-neutral-200 pt-4"}>
    <div className={"text-center"}>
      <h2 className={cn("text-neutral-400 tracking-widest mb-3 text-xl uppercase", inter.className)}>Projects</h2>
    </div>

    <div className={"flex flex-col gap-y-5 md:hidden"}>
      <ProjectCard src={"/images/aggieseek.png"} href={"/projects/aggieseek"}
                   title={"AggieSeek"} description={""} date={"2024 –"}  />

      <ProjectCard src={"/images/flock.png"} href={"/projects/flock"}
                   title={"Flock"} description={""} date={"2025"} />

      <ProjectCard src={"/images/arcadia.png"} href={"/projects/arcadia"}
                   title={"Arcadia"} description={""} date={"2024"} />
    </div>

    <div className={"grid-cols-3 gap-x-5 hidden md:grid"}>
      <div className={"flex flex-col gap-y-5"}>
        <ProjectCard src={"/images/aggieseek.png"} href={"/projects/aggieseek"}
                     title={"AggieSeek"} description={""} date={"2024 –"}  />
      </div>

      <div className={"flex flex-col gap-y-5"}>
        <ProjectCard src={"/images/flock.png"} href={"/projects/flock"}
                     title={"Flock"} description={""} date={"2025"} />
      </div>

      <div className={"flex flex-col gap-y-5"}>
        <ProjectCard src={"/images/arcadia.png"} href={"/projects/arcadia"}
                     title={"Arcadia"} description={""} date={"2024"} />
      </div>
    </div>
  </section>;
}