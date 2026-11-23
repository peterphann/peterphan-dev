import type { Metadata } from "next";
import Chapter from "@/components/chapter";
import PartDivider from "@/components/part-divider";
import { chapterId } from "@/data/contents";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = { title: "Work Experience" };

export default function Experience() {
  return (
    <>
      <PartDivider id="experience" />
      {experiences.map((e, i) => {
        const number = `2.${i + 1}`;
        return (
          <Chapter
            key={number}
            id={chapterId(number)}
            number={number}
            title={e.company}
            logo={e.logo}
            logoDark={e.logoDark}
            meta={
              <>
                <ol className="flex flex-col gap-1">
                  {e.roles.map((role) => (
                    <li
                      key={role.title + role.period}
                      className="flex flex-wrap justify-center gap-x-2.5"
                    >
                      <span className="text-ink">{role.title}</span>
                      <span>{role.period}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-1">{e.location}</p>
              </>
            }
          >
            {e.summary.map((line) => (
              <p key={line}>{line}</p>
            ))}
            {e.stack.length > 0 && (
              <p className="mt-2 font-sans text-[13px] text-muted">
                {e.stack.join(", ")}
              </p>
            )}
          </Chapter>
        );
      })}
    </>
  );
}
