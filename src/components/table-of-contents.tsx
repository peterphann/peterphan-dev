"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/page-transition";
import { ContentsPart } from "@/data/contents";

/**
 * The rule under a contents heading. It draws from left to right when the
 * contents first mount, staggered by position; the sidebar stays mounted
 * across page changes, so this plays once per page load.
 */
function HeadingRule({ index }: { index: number }) {
  return (
    <span
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 h-px origin-left animate-rule-right bg-rule motion-reduce:animate-none"
      style={{ animationDelay: `${100 + index * 70}ms` }}
    />
  );
}

function Part({
  part,
  current,
  index,
}: {
  part: ContentsPart;
  current: boolean;
  index: number;
}) {
  return (
    <div>
      <h2 className="relative mb-2 pb-1.5 font-serif text-[17px] font-normal">
        <TransitionLink
          href={`/${part.id}`}
          aria-current={current ? "page" : undefined}
          className={`underline-offset-[3px] hover:underline ${
            current ? "text-ink" : "text-ink-soft"
          }`}
        >
          {part.numeral}. {part.title}
        </TransitionLink>
        <HeadingRule index={index} />
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
      <h2 className="relative pb-1.5 font-serif text-[17px] font-normal">
        <TransitionLink
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className={`underline-offset-[3px] hover:underline ${
            pathname === "/" ? "text-ink" : "text-ink-soft"
          }`}
        >
          Home
        </TransitionLink>
        <HeadingRule index={0} />
      </h2>
      {parts.map((part, i) => (
        <Part
          key={part.id}
          part={part}
          index={i + 1}
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
