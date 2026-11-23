import type { Metadata } from "next";
import Chapter from "@/components/chapter";
import PartDivider from "@/components/part-divider";
import { chapterId } from "@/data/contents";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Tech Stack" };

const techStack = [
  ...new Set([...experiences, ...projects].flatMap((item) => item.stack)),
].sort((a, b) => a.localeCompare(b));

export default function TechStack() {
  return (
    <>
      <PartDivider id="tech-stack" />
      <Chapter
        id={chapterId("5.1")}
        number="5.1"
        title="Tools I've shipped with"
      >
        <p>
          Every language, framework and service from my work experience and
          projects.
        </p>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-1.5 font-sans text-sm sm:grid-cols-3">
          {techStack.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </Chapter>
    </>
  );
}
