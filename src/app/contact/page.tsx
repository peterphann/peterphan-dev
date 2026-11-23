import type { Metadata } from "next";
import Chapter from "@/components/chapter";
import ExternalLink from "@/components/external-link";
import { chapterId, partLabel } from "@/data/contents";
import { EMAIL, GITHUB, LINKEDIN, RESUME } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <Chapter
      id={chapterId("6.1")}
      part={partLabel("contact")}
      number="6.1"
      title="Get in touch"
    >
      <p>
        I&apos;d love to chat, whether it&apos;s about opportunities,
        collaborations, or just to say hello. Email me at{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="underline decoration-rule underline-offset-[3px] hover:decoration-ink"
        >
          {EMAIL}
        </a>
        .
      </p>
      <p>
        You can also find me on{" "}
        <ExternalLink href={LINKEDIN}>LinkedIn</ExternalLink> and{" "}
        <ExternalLink href={GITHUB}>GitHub</ExternalLink>, or read my{" "}
        <ExternalLink href={RESUME}>résumé</ExternalLink>.
      </p>
    </Chapter>
  );
}
