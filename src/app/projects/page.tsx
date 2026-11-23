import type { Metadata } from "next";
import Image from "next/image";
import Chapter from "@/components/chapter";
import ExternalLink from "@/components/external-link";
import { chapterId, partLabel } from "@/data/contents";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  const part = partLabel("projects");
  return projects.map((p, i) => {
    const number = `3.${i + 1}`;
    return (
      <Chapter
        key={number}
        id={chapterId(number)}
        part={part}
        number={number}
        title={p.title}
        meta={`${p.role} · ${p.timeline}`}
        kicker={p.award}
        notes={p.links.map((link) => (
          <span key={link.url}>
            <ExternalLink href={link.url}>{link.label}</ExternalLink>
            {link.note && <>. {link.note}</>}
          </span>
        ))}
      >
        <p>{p.description}</p>
        <figure className="my-4 flex flex-col gap-2.5">
          <Image
            src={p.image.src}
            width={p.image.width}
            height={p.image.height}
            alt={`Screenshot of ${p.title}`}
            sizes="(min-width: 1024px) 644px, 100vw"
            className="h-auto w-full border border-rule"
          />
          <figcaption className="font-sans text-[13px] text-muted">
            <span className="mr-2 font-mono text-ink">Fig. {number}</span>
            {p.title}, {p.timeline}.
          </figcaption>
        </figure>
        <p className="font-sans text-[13px] text-muted">
          {p.stack.join(" · ")}
        </p>
      </Chapter>
    );
  });
}
