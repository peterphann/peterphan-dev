import Image from "next/image";
import { ReactNode } from "react";

export interface ChapterProps {
  id: string;
  part: string;
  number: string;
  title: string;
  /** Image path shown in place of the title text; the title becomes its alt text. */
  logo?: string;
  /** Optional logo variant for dark mode. */
  logoDark?: string;
  meta?: ReactNode;
  kicker?: string;
  notes?: ReactNode[];
  /** Content for the margin column, shown above any notes. */
  margin?: ReactNode;
  children: ReactNode;
}

export default function Chapter({
  id,
  part,
  number,
  title,
  logo,
  logoDark,
  meta,
  kicker,
  notes = [],
  margin,
  children,
}: ChapterProps) {
  return (
    <article
      id={id}
      className="grid gap-10 py-12 lg:py-16 xl:grid-cols-[minmax(0,644px)_220px] xl:gap-12"
    >
      <div className="flex min-w-0 flex-col gap-5">
        <p className="font-mono text-xs uppercase tracking-[0.04em] text-muted">
          {part} — {number}
        </p>
        <h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.03em]">
          {logo ? (
            <>
              <Image
                src={logo}
                alt={title}
                width={0}
                height={0}
                sizes="160px"
                className={`h-9 w-auto ${logoDark ? "light-only" : ""}`}
              />
              {logoDark && (
                <Image
                  src={logoDark}
                  alt={title}
                  width={0}
                  height={0}
                  sizes="160px"
                  className="dark-only h-9 w-auto"
                />
              )}
            </>
          ) : (
            title
          )}
        </h2>
        {meta && <div className="text-sm text-muted">{meta}</div>}
        {kicker && (
          <p className="font-mono text-xs uppercase tracking-[0.04em] text-ink">
            {kicker}
          </p>
        )}
        <div className="mt-3 flex flex-col gap-5 font-serif text-[19px] leading-[1.6]">
          {children}
        </div>
      </div>

      {(margin || notes.length > 0) && (
        <aside className="flex min-w-0 flex-col gap-3.5 font-serif text-sm leading-normal text-ink-soft xl:pt-28">
          {margin}
          {notes.map((note, i) => (
            <div key={i} className="border-t border-rule pt-2.5">
              <span className="mr-1 font-mono text-[11px] text-ink">
                {i + 1}.
              </span>
              {note}
            </div>
          ))}
        </aside>
      )}
    </article>
  );
}
