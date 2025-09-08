import { backend, devops, frontend, languages } from "@/data/technologies";
import TechCard from "../tech-card";

export default function TechStackSection() {
  return (
    <section className={"w-full"}>
      <div className={"space-y-6"}>
        <div>
          <h3
            className={
              "text-sm font-medium text-muted-foreground mb-3 tracking-wider uppercase"
            }
          >
            Languages
          </h3>
          <div className={"flex flex-wrap gap-4 items-center"}>
            {languages.map((tech) => (
              <TechCard key={tech.name} technology={tech} />
            ))}
          </div>
        </div>
        {/* Frontend */}
        <div>
          <h3
            className={
              "text-sm font-medium text-muted-foreground mb-3 tracking-wider uppercase"
            }
          >
            Frontend
          </h3>
          <div className={"flex flex-wrap gap-4 items-center"}>
            {frontend.map((tech) => (
              <TechCard key={tech.name} technology={tech} />
            ))}
          </div>
        </div>
        <div>
          <h3
            className={
              "text-sm font-medium text-muted-foreground mb-3 tracking-wider uppercase"
            }
          >
            Backend
          </h3>
          <div className={"flex flex-wrap gap-4 items-center"}>
            {backend.map((tech) => (
              <TechCard key={tech.name} technology={tech} />
            ))}
          </div>
        </div>

        {/* DevOps */}
        <div>
          <h3
            className={
              "text-sm font-medium text-muted-foreground mb-3 tracking-wider uppercase"
            }
          >
            DevOps / Cloud
          </h3>
          <div className={"flex flex-wrap gap-4 items-center"}>
            {devops.map((tech) => (
              <TechCard key={tech.name} technology={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
