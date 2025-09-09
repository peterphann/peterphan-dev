"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { inter } from "@/util/fonts";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function SidebarLink({
  name,
  href,
  type = "site",
}: {
  name: string;
  href: string;
  type?: "external" | "site";
}) {
  if (type === "site") {
    return (
      <Link href={href} className={"self-start hover:opacity-70"}>
        {name}
      </Link>
    );
  }

  if (type === "external") {
    return (
      <a
        href={href}
        target={"_blank"}
        rel={"noopener noreferrer"}
        className={"self-start hover:opacity-70"}
      >
        {name}
      </a>
    );
  }
}

function SidebarLinks({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <Accordion
      type={"single"}
      defaultValue={"item"}
      collapsible
      className={"flex flex-col text-sidebar-foreground"}
    >
      <AccordionItem value={"item"}>
        <AccordionTrigger
          className={
            "text-muted-foreground p-0 tracking-widest mb-3 text-xs uppercase hover:cursor-pointer"
          }
        >
          {title}
        </AccordionTrigger>

        <AccordionContent className={"flex flex-col gap-y-2 pb-0"}>
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function SidebarSection({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        "border-t-sidebar-border border-t-1 px-8 py-8 gap-y-8 flex flex-col text-sm",
        inter.className,
      )}
    >
      {children}
    </div>
  );
}

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  const getNavigationProps = (section: string) => {
    const isHomePage = pathname === "/";

    if (isHomePage) {
      return {
        href: `#${section}`,
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
          handleScroll(e, section),
      };
    } else {
      return {
        href: `/#${section}`,
        onClick: undefined,
      };
    }
  };

  return (
    <nav
      className={cn(
        "w-68 h-full inline-flex flex-col border-r-sidebar-border border-r-1 bg-sidebar",
        className,
      )}
    >
      <div
        className={
          "px-8 py-8 flex flex-col gap-y-3 font-medium text-xl text-sidebar-foreground"
        }
      >
        <Link
          href={"/"}
          className={
            "group transition-all duration-700 ease-out text-sidebar-foreground text-3xl font-bold mb-2 hover:scale-105 origin-left relative"
          }
          onClick={
            pathname === "/" ? (e) => handleScroll(e, "home") : undefined
          }
        >
          <span className="group-hover:opacity-0 transition-opacity duration-700">
            peter phan
          </span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-rose-400 via-amber-100 to-slate-700 bg-clip-text text-transparent">
            peter phan
          </span>
        </Link>

        <Link
          {...getNavigationProps("projects")}
          className={"hover:opacity-70 self-start"}
        >
          portfolio
        </Link>

        {/* <Link
          {...getNavigationProps("about")}
          className={"hover:opacity-70 self-start"}
        >
          about
        </Link> */}

        <a
          href={
            "https://drive.google.com/file/d/1k1LUpu4hZubLqOY7UYrXXTML5EW0vLL3/view?usp=sharing"
          }
          rel={"noopener noreferrer"}
          target={"_blank"}
          className={"hover:opacity-70 self-start"}
        >
          resume
        </a>
      </div>

      <SidebarSection>
        <SidebarLinks title={"Projects"}>
          <SidebarLink
            name={"AggieSeek"}
            type={"external"}
            href={"https://github.com/peterphann/aggieseek-new"}
          />
          <SidebarLink
            name={"Flock"}
            type={"external"}
            href={"https://github.com/peterphann/tamuhack25"}
          />
          <SidebarLink
            name={"Arcadia"}
            type={"external"}
            href={"https://github.com/ericliu-12/hacktx24"}
          />
        </SidebarLinks>
      </SidebarSection>

      <SidebarSection>
        <SidebarLinks title={"Contact"}>
          <SidebarLink
            name={"Email"}
            type={"external"}
            href={"mailto:peterlephan@gmail.com"}
          />
          <SidebarLink
            name={"Linkedin"}
            type={"external"}
            href={"https://www.linkedin.com/in/peterlphan/"}
          />
          <SidebarLink
            name={"GitHub"}
            type={"external"}
            href={"https://github.com/peterphann"}
          />
        </SidebarLinks>
      </SidebarSection>
    </nav>
  );
}
