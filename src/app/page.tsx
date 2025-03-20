import ProjectsSection from "@/components/sections/projects-section";
import StackSection from "@/components/sections/stack-section";
import ExperienceSection from "@/components/sections/experience-section";
import AboutSection from "@/components/sections/about-section";
import Image from "next/image";

export default function Home() {

  return <main className={"space-y-4"}>
    <section className={"w-full pb-4 flex flex-col md:flex-row md:justify-between md:items-center"}>
      <div>
        <p className={"w-full text-4xl md:text-5xl mb-2"}>
          Hello, I&#39;m Peter!
        </p>

        <div className={"text-xl font-light text-neutral-500"}>
          <p>Software Engineer</p>
          <p>Texas A&M University</p>
        </div>
      </div>

      <Image src={"/images/headshot.jpg"} className={"rounded-full self-center md:self-auto mt-4 md:mt-0 w-50 h-50"} alt={""} width={500} height={500} />
    </section>

    <ExperienceSection />

    <StackSection />

    <ProjectsSection />

    <AboutSection />

  </main>;
}
