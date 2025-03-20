import Link from "next/link";
import { cn } from "@/lib/utils";
import { inter } from "@/util/fonts";
import { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function SidebarLink({ name, href, type="site" }: { name: string, href: string, type?: "external" | "site" }) {

  if (type === "site") {
    return <Link href={href} className={"self-start hover:opacity-70"}>
      {name}
    </Link>;
  }

  if (type === "external") {
    return <a href={href} target={"_blank"} rel={"noopener noreferrer"} className={"self-start hover:opacity-70"}>
      {name}
    </a>;
  }
}

function SidebarLinks({ children, title }: { children: ReactNode, title: string }) {
  return <Accordion type={"single"} defaultValue={"item"} collapsible className={"flex flex-col  text-neutral-700"}>
    <AccordionItem value={"item"}>
      <AccordionTrigger className={"text-neutral-400 p-0 tracking-widest mb-3 text-xs uppercase hover:cursor-pointer"}>
        {title}
      </AccordionTrigger>

      <AccordionContent className={"flex flex-col gap-y-2 pb-0"}>
        {children}
      </AccordionContent>
    </AccordionItem>
  </Accordion>;
}

function SidebarSection({ children }: { children: ReactNode }) {
  return <div className={cn("border-t-neutral-200 border-t-1 px-8 py-8 gap-y-8 flex flex-col text-sm", inter.className)}>
    {children}
  </div>;
}


export default function Sidebar({ className }: { className?: string }) {

  return <nav className={cn("w-68 h-full inline-flex flex-col border-r-gray-200 border-r-1", className)}>
    <div className={"px-8 py-8 flex flex-col gap-y-3 font-medium text-xl text-neutral-700"}>
      <Link href={"/"} className={"transition-transform duration-500 text-black text-3xl font-bold mb-2 hover:scale-105 origin-left"}>
        peter phan
      </Link>

      <Link href={"#experience"} className={"hover:opacity-70 self-start"}>
        experience
      </Link>

      <Link href={"#projects"} className={"hover:opacity-70 self-start"}>
        portfolio
      </Link>

      <Link href={"#about"} className={"hover:opacity-70 self-start"}>
        about
      </Link>

      <a href={"https://drive.google.com/file/d/1k1LUpu4hZubLqOY7UYrXXTML5EW0vLL3/view?usp=sharing"} rel={"noopener noreferrer"} target={"_blank"} className={"hover:opacity-70 self-start"}>
        resume
      </a>

    </div>

    <SidebarSection>
      <SidebarLinks title={"Projects"}>
        <SidebarLink name={"AggieSeek"} type={"external"} href={"https://github.com/peterphann/aggieseek-new"} />
        <SidebarLink name={"Flock"} type={"external"} href={"https://github.com/peterphann/tamuhack25"} />
        <SidebarLink name={"Arcadia"} type={"external"} href={"https://github.com/ericliu-12/hacktx24"} />
      </SidebarLinks>
    </SidebarSection>

    <SidebarSection>
      <SidebarLinks title={"Contact"}>
        <SidebarLink name={"Email"} type={"external"} href={"mailto:peterlephan@gmail.com"} />
        <SidebarLink name={"Linkedin"} type={"external"} href={"https://www.linkedin.com/in/peterlphan/"} />
        <SidebarLink name={"GitHub"} type={"external"} href={"https://github.com/peterphann"} />
      </SidebarLinks>
    </SidebarSection>
  </nav>;
}