import type { Metadata } from "next";
import Chapter from "@/components/chapter";
import ExternalLink from "@/components/external-link";
import PartDivider from "@/components/part-divider";
import { chapterId } from "@/data/contents";
import { EMAIL, GITHUB, LINKEDIN, RESUME } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <PartDivider id="contact" />
      <Chapter id={chapterId("6.1")} number="6.1" title="Get in touch">
        <p>
          I&apos;d love to chat, whether it&apos;s about opportunities,
          collaborations, or just to say hello. You can email me at{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-link underline decoration-link/40 underline-offset-[3px] hover:decoration-link"
          >
            {EMAIL}
          </a>
          .
        </p>
        <p>
          You can also find me on{" "}
          <ExternalLink accent href={LINKEDIN}>
            LinkedIn
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink accent href={GITHUB}>
            GitHub
          </ExternalLink>
          , or read my{" "}
          <ExternalLink accent href={RESUME}>
            résumé
          </ExternalLink>
          .
        </p>
      </Chapter>
    </>
  );
}
