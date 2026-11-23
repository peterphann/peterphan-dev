"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export default function StickyHeader({ children }: { children: ReactNode }) {
  const sentinel = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  // Watching a marker at the top of the page catches every way the page can
  // end up scrolled, including the browser restoring the position on refresh
  // without firing a scroll event.
  useEffect(() => {
    const marker = sentinel.current;
    if (!marker) return;
    const observer = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting),
    );
    observer.observe(marker);
    return () => observer.disconnect();
  }, []);

  // Publishes the header's height as --header-height so the sidebar sticks
  // right below it and anchor links clear it, even when the header wraps.
  useEffect(() => {
    const el = header.current;
    if (!el) return;
    const observer = new ResizeObserver(() =>
      document.documentElement.style.setProperty(
        "--header-height",
        `${el.offsetHeight}px`,
      ),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={sentinel}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-px w-px"
      />
      <header ref={header} className="sticky top-0 z-10 bg-paper">
        {children}
        {/* Fades only its opacity, so a theme change recolors it instantly. */}
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 bottom-0 h-px bg-rule transition-opacity duration-300 motion-reduce:transition-none ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </header>
    </>
  );
}
