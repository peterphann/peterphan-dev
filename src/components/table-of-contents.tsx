"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/page-transition";
import { ContentsPart } from "@/data/contents";

function Part({ part, current }: { part: ContentsPart; current: boolean }) {
  return (
    <div>
      <h2 className="mb-2 border-b border-rule pb-1.5 font-serif text-[17px] font-normal">
        <TransitionLink
          href={`/${part.id}`}
          aria-current={current ? "page" : undefined}
          className={`underline-offset-[3px] hover:underline ${
            current ? "text-ink" : "text-ink-soft"
          }`}
        >
          {part.numeral}. {part.title}
        </TransitionLink>
      </h2>
      <ol>
        {part.entries.map((entry) => (
          <li key={entry.number}>
            <TransitionLink
              href={entry.href}
              className="group grid grid-cols-[minmax(0,1fr)_auto_32px] items-baseline gap-3 py-1 text-sm"
            >
              <span className="underline-offset-[3px] group-hover:underline">
                {entry.title}
              </span>
              <span className="text-xs text-faint">{entry.date}</span>
              <span className="text-right tabular-nums text-muted">
                {entry.number}
              </span>
            </TransitionLink>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function TableOfContents({ parts }: { parts: ContentsPart[] }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Contents" className="flex flex-col gap-8">
      <h2 className="border-b border-rule pb-1.5 font-serif text-[17px] font-normal">
        <TransitionLink
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className={`underline-offset-[3px] hover:underline ${
            pathname === "/" ? "text-ink" : "text-ink-soft"
          }`}
        >
          Home
        </TransitionLink>
      </h2>
      {parts.map((part) => (
        <Part
          key={part.id}
          part={part}
          current={pathname === `/${part.id}`}
        />
      ))}
    </nav>
  );
}

/**
 * Phones have no room for the sidebar: the home page lists the contents
 * after the intro, and other pages tuck them into a collapsed panel on top.
 */
export function MobileContents({
  parts,
  placement,
}: {
  parts: ContentsPart[];
  placement: "before" | "after";
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (placement === "after") {
    return isHome ? (
      <div className="mt-16 lg:hidden">
        <TableOfContents parts={parts} />
      </div>
    ) : null;
  }

  return isHome ? null : (
    <details key={pathname} className="mb-4 border-b border-rule lg:hidden">
      <summary className="cursor-pointer py-3 font-mono text-xs uppercase tracking-[0.04em] text-muted">
        Contents
      </summary>
      <div className="pb-6">
        <TableOfContents parts={parts} />
      </div>
    </details>
  );
}
