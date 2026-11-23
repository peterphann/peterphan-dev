import type { Metadata } from "next";
import Chapter from "@/components/chapter";
import ExternalLink from "@/components/external-link";
import { chapterId, partLabel } from "@/data/contents";

export const metadata: Metadata = { title: "Introduction" };

export default function About() {
  const part = partLabel("about");
  return (
    <>
      <Chapter id={chapterId("1.1")} part={part} number="1.1" title="About me">
        <p>
          I&apos;m Peter, a software engineer studying at Texas A&amp;M
          University. I like building products people actually use, from a
          course tracker for thousands of students to hackathon projects built
          over a weekend.
        </p>
        <p>
          This site is set out like an essay. Each job and project is a
          chapter, numbered in the contents.
        </p>
      </Chapter>

      <Chapter
        id={chapterId("1.2")}
        part={part}
        number="1.2"
        title="What I'm working on now"
      >
        <p>
          I&apos;m currently working as an SDE Intern at Amazon on the{" "}
          <ExternalLink
            accent
            href="https://aws.amazon.com/blogs/networking-and-content-delivery/introducing-the-aws-waf-application-layer-ddos-protection/"
          >
            L7 DDoS Protection
          </ExternalLink>{" "}
          team as part of{" "}
          <ExternalLink accent href="https://aws.amazon.com/waf/">
            AWS WAF
          </ExternalLink>{" "}
          (Web Application Firewall).
        </p>
      </Chapter>
    </>
  );
}
