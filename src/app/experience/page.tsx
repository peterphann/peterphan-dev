import type { Metadata } from "next";
import Chapter from "@/components/chapter";
import { chapterId, partLabel } from "@/data/contents";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = { title: "Work Experience" };

export default function Experience() {
  const part = partLabel("experience");
  return experiences.map((e, i) => {
    const number = `2.${i + 1}`;
    return (
      <Chapter
        key={number}
        id={chapterId(number)}
        part={part}
        number={number}
        title={e.company}
        logo={e.logo}
        logoDark={e.logoDark}
        meta={
          <>
            <ol className="flex flex-col gap-1">
              {e.roles.map((role) => (
                <li key={role.title + role.period}>
                  <span className="text-ink">{role.title}</span> ·{" "}
                  {role.period}
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
            {e.stack.join(" · ")}
          </p>
        )}
      </Chapter>
    );
  });
}
