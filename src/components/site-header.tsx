import { ReactNode } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { TransitionLink } from "@/components/page-transition";
import StickyHeader from "@/components/sticky-header";
import ThemeToggle from "@/components/theme-toggle";
import { GITHUB, LINKEDIN } from "@/lib/site";

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-9 place-items-center rounded-full text-ink hover:bg-wash focus-visible:outline-2 focus-visible:outline-ink"
    >
      {children}
    </a>
  );
}

export default function SiteHeader() {
  return (
    <StickyHeader>
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-6 py-5 text-sm">
        <div className="flex flex-wrap gap-7">
          <TransitionLink
            href="/about"
            className="hover:underline underline-offset-[3px]"
          >
            About
          </TransitionLink>
          <TransitionLink
            href="/experience"
            className="hover:underline underline-offset-[3px]"
          >
            Experience
          </TransitionLink>
          <TransitionLink
            href="/projects"
            className="hover:underline underline-offset-[3px]"
          >
            Projects
          </TransitionLink>
        </div>
        <TransitionLink
          href="/"
          aria-label="Home"
          // The header stays mounted across pages, so this plays once per load.
          className="animate-rise-subtle font-serif text-[22px] italic tracking-[-0.01em] motion-reduce:animate-none"
        >
          peter phan
        </TransitionLink>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center">
            <ThemeToggle />
            <IconLink href={GITHUB} label="GitHub">
              <GitHubIcon />
            </IconLink>
            <IconLink href={LINKEDIN} label="LinkedIn">
              <LinkedInIcon />
            </IconLink>
          </div>
          <TransitionLink
            href="/contact"
            className="bg-wash px-3.5 py-2 font-medium"
          >
            Get in touch
          </TransitionLink>
        </div>
      </div>
    </StickyHeader>
  );
}
