import type { Metadata } from "next";
import Chapter from "@/components/chapter";
import ExternalLink from "@/components/external-link";
import PartDivider from "@/components/part-divider";
import { chapterId } from "@/data/contents";

export const metadata: Metadata = { title: "Introduction" };

export default function About() {
  return (
    <>
      <PartDivider id="about" />
      <Chapter id={chapterId("1.1")} number="1.1" title="About me">
        <p>
          Hi, I&apos;m Peter! I was born and raised in Houston, TX, and earned
          my bachelor&apos;s in computer science from Texas A&amp;M University.
        </p>
        <p>
          I started programming when I was 9 through my failed attempts at making Minecraft mods, and
          I&apos;ve been developing things ever since. These days I love designing
          and building apps that can help in just about any situation. Anytime
          I run into a problem or get curious about something, my first
          instinct is to build a tool for it! Turning a passing curiosity into
          something that works, even if I&apos;m the only one who ever uses it,
          is one of the things I love most about software engineering.
        </p>
        <p>
          Outside of code, music is a big part of my life, whether I&apos;m
          composing, performing, or just listening. I&apos;m also a huge
          basketball fan and love to play video games in my freetime as well.
        </p>
      </Chapter>

      <Chapter
        id={chapterId("1.2")}
        number="1.2"
        title="What I'm working on now"
      >
        <p>
          I&apos;m currently working as an SDE Intern at Amazon. I'm on the{" "}
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
