import Image from "next/image";
import { ReactNode } from "react";

export interface ChapterProps {
  id: string;
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

// A centered opener (number, title, details) over a narrow reading column,
// with notes in the right margin on wide screens.
export default function Chapter({
  id,
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
    <article id={id} className="group/chapter py-8 lg:py-10">
      {/* A section break between chapters; the first one on a page follows
          the part divider instead. */}
      <div
        aria-hidden="true"
        className="mb-10 group-first-of-type/chapter:hidden lg:mb-12 xl:max-w-[620px]"
      >
        <span className="mx-auto block h-px w-12 bg-rule" />
      </div>

      <div className="grid gap-x-12 xl:grid-cols-[minmax(0,620px)_200px]">
        <header className="flex min-w-0 flex-col items-center gap-3 text-center">
          <p className="font-serif text-base italic tabular-nums text-muted">
            § {number}
          </p>
          <h2 className="text-[clamp(28px,3vw,40px)] font-medium leading-[1.1] tracking-[-0.03em]">
            {logo ? (
              <>
                <Image
                  src={logo}
                  alt={title}
                  width={0}
                  height={0}
                  sizes="240px"
                  className={`h-10 w-auto ${logoDark ? "light-only" : ""}`}
                />
                {logoDark && (
                  <Image
                    src={logoDark}
                    alt={title}
                    width={0}
                    height={0}
                    sizes="240px"
                    className="dark-only h-10 w-auto"
                  />
                )}
              </>
            ) : (
              title
            )}
          </h2>
          {meta && <div className="mt-1 text-sm text-muted">{meta}</div>}
          {kicker && (
            <p className="font-mono text-xs uppercase tracking-[0.04em] text-ink">
              {kicker}
            </p>
          )}
        </header>

        <div className="mt-8 flex min-w-0 flex-col gap-5 font-serif text-lg leading-[1.6] lg:mt-12 xl:col-start-1">
          {children}
        </div>

        {(margin || notes.length > 0) && (
          <aside className="mt-8 flex min-w-0 flex-col gap-4 text-[13px] leading-snug text-muted lg:mt-12 xl:col-start-2 xl:row-start-2">
            {margin}
            {notes.map((note, i) => (
              <p key={i}>
                {i + 1}. {note}
              </p>
            ))}
          </aside>
        )}
      </div>
    </article>
  );
}
