import ProjectsSection from "@/components/sections/projects-section";
import ExperienceSection from "@/components/sections/experience-section";
import Image from "next/image";
import TechStackSection from "@/components/sections/tech-stack-section";

export default function Home() {
  return (
    <main className={"space-y-4"}>
      <section
        id={"home"}
        className={
          "w-full pb-4 flex flex-col md:flex-row md:justify-between md:items-center"
        }
      >
        <div>
          <div className={"w-full text-4xl md:text-5xl mb-2 relative"}>
            <p>Hello, I&#39;m Peter!</p>
          </div>

          <div className={"text-xl font-light text-muted-foreground"}>
            <p>Software Engineer</p>
            <p>Texas A&M University</p>
          </div>
        </div>

        <Image
          src={"/images/headshot.jpg"}
          className={
            "rounded-full self-center md:self-auto mt-4 md:mt-0 w-50 h-50"
          }
          alt={"Peter Phan"}
          width={500}
          height={500}
        />
      </section>

      <TechStackSection />

      <ExperienceSection />

      <ProjectsSection />

      {/* <AboutSection /> */}
    </main>
  );
}
