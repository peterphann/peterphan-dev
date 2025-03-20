import ProjectsSection from "@/components/sections/projects-section";
import StackSection from "@/components/sections/stack-section";
import ExperienceSection from "@/components/sections/experience-section";
import AboutSection from "@/components/sections/about-section";

export default function Home() {

  return <main className={"space-y-4"}>
    <section className={"w-full pb-4"}>
      <p className={"w-full text-5xl mb-2"}>
        Hello, I&#39;m Peter!
      </p>

      <div className={"text-xl font-light text-neutral-500"}>
        <p>Software Engineer</p>
        <p>Texas A&M University</p>
      </div>
    </section>

    <ExperienceSection />

    <StackSection />

    <ProjectsSection />

    <AboutSection />

  </main>;
}
