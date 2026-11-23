"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ComponentProps,
  MouseEvent,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const FADE_MS = 120;

const TransitionContext = createContext<{
  leaving: boolean;
  navigate: (href: string) => void;
}>({ leaving: false, navigate: () => {} });

/**
 * Fades the page content out before navigating to another route. The new
 * page first renders while `leaving` is still true, then fades in once its
 * pathname arrives.
 */
export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [leaving, setLeaving] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  // Set for navigations started here, so back/forward keep the browser's
  // own scroll restoration.
  const pendingScroll = useRef(false);

  useEffect(() => {
    setLeaving(false);
    if (!pendingScroll.current) return;
    pendingScroll.current = false;
    // Next's default scrolls the new segment into view, which lands partway
    // down this layout. Start at the top, or at the linked chapter.
    const target = window.location.hash
      ? document.getElementById(
          decodeURIComponent(window.location.hash.slice(1)),
        )
      : null;
    if (target) target.scrollIntoView({ behavior: "instant" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const navigate = useCallback(
    (href: string) => {
      const go = () => {
        pendingScroll.current = true;
        router.push(href, { scroll: false });
      };
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        go();
        return;
      }
      // Start loading the next page while the current one fades out.
      router.prefetch(href);
      setLeaving(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(go, FADE_MS);
    },
    [router],
  );

  return (
    <TransitionContext.Provider value={{ leaving, navigate }}>
      {children}
    </TransitionContext.Provider>
  );
}

/** Wraps the part of the page that fades between routes. */
export function PageFade({ children }: { children: ReactNode }) {
  const { leaving } = useContext(TransitionContext);
  const pathname = usePathname();
  // The outer layer only fades the old page out, then snaps back; the inner
  // one remounts per route so each new page fades in while rising slightly.
  return (
    <div
      className={
        leaving
          ? "opacity-0 transition-opacity duration-[120ms] motion-reduce:transition-none"
          : "opacity-100"
      }
    >
      <div
        key={pathname}
        className="animate-page-in motion-reduce:animate-none"
        // The home page settles in a little more slowly than the others.
        style={pathname === "/" ? { animationDuration: "550ms" } : undefined}
      >
        {children}
      </div>
    </div>
  );
}

/** A Link that fades the current page out when it leads to another route. */
export function TransitionLink({
  href,
  onClick,
  ...props
}: Omit<ComponentProps<typeof Link>, "href"> & { href: string }) {
  const { navigate } = useContext(TransitionContext);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    // Links within the current page just scroll; only route changes fade.
    const url = new URL(href, window.location.href);
    if (url.pathname === window.location.pathname) {
      // A link to the page itself scrolls back up to its heading.
      if (!url.hash) {
        event.preventDefault();
        window.history.replaceState(window.history.state, "", url.pathname);
        window.scrollTo({ top: 0 });
      }
      return;
    }
    event.preventDefault();
    navigate(href);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
