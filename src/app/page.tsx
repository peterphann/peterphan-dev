import Image from "next/image";
import { ReactNode } from "react";
import Gallery from "@/components/gallery";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { TransitionLink } from "@/components/page-transition";
import { gallery } from "@/data/gallery";
import { EMAIL, GITHUB, LINKEDIN } from "@/lib/site";

function ContactButton({
  href,
  icon,
  children,
}: {
  href: string;
  icon: ReactNode;
  children: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 border border-rule px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-wash focus-visible:outline-2 focus-visible:outline-ink"
    >
      {icon}
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-start gap-8 pt-12 sm:flex-row sm:items-center sm:gap-10 lg:pt-24">
        <Image
          src="/images/headshot.jpg"
          width={800}
          height={800}
          alt="Portrait of Peter Phan"
          sizes="(min-width: 640px) 208px, 144px"
          priority
          className="size-36 shrink-0 rounded-full border border-rule object-cover sm:size-52"
        />
        <div className="flex min-w-0 flex-col gap-3.5">
          <h1 className="text-[clamp(44px,6vw,68px)] font-medium leading-none tracking-[-0.035em]">
            Peter Phan
          </h1>
          <p className="font-mono text-[13px] text-muted">
            SDE Intern @ Amazon
          </p>
          <p className="mt-3 max-w-[470px] font-serif text-xl leading-normal text-ink-soft">
            Welcome to my portfolio :)
          </p>
        </div>
      </section>

      <nav aria-label="Contact" className="mt-10 flex flex-wrap gap-3 lg:mt-12">
        <ContactButton href={`mailto:${EMAIL}`} icon={<MailIcon />}>
          Email
        </ContactButton>
        <ContactButton href={LINKEDIN} icon={<LinkedInIcon />}>
          LinkedIn
        </ContactButton>
        <ContactButton href={GITHUB} icon={<GitHubIcon />}>
          GitHub
        </ContactButton>
      </nav>

      <section aria-label="Photos" className="mt-12 pb-10 lg:mt-16">
        <Gallery rows={gallery} />
        <TransitionLink
          href="/about"
          className="mt-5 inline-block text-sm text-muted underline-offset-[3px] hover:text-ink hover:underline"
        >
          About me →
        </TransitionLink>
      </section>
    </>
  );
}
