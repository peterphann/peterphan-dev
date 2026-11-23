import { experiences } from "./experiences";
import { projects } from "./projects";

export interface ContentsEntry {
  number: string;
  title: string;
  href: string;
  date?: string;
}

export interface ContentsPart {
  /** Also the part's route: /{id}. */
  id: string;
  numeral: string;
  title: string;
  entries: ContentsEntry[];
}

/** Element id for a chapter, e.g. "2.3" → "ch-2-3". */
export const chapterId = (number: string) => `ch-${number.replace(".", "-")}`;

const entry = (
  partId: string,
  number: string,
  title: string,
  date?: string,
): ContentsEntry => ({
  number,
  title,
  date,
  href: `/${partId}#${chapterId(number)}`,
});

const allParts: ContentsPart[] = [
  {
    id: "about",
    numeral: "I",
    title: "Introduction",
    entries: [
      entry("about", "1.1", "About me"),
      entry("about", "1.2", "What I'm working on now"),
    ],
  },
  {
    id: "experience",
    numeral: "II",
    title: "Work Experience",
    entries: experiences.map((e, i) =>
      entry("experience", `2.${i + 1}`, e.label ?? e.company, e.tocDate),
    ),
  },
  {
    id: "projects",
    numeral: "III",
    title: "Projects",
    entries: projects.map((p, i) =>
      entry("projects", `3.${i + 1}`, p.title, p.tocDate),
    ),
  },
  {
    id: "small-sites",
    numeral: "IV",
    title: "Small Sites",
    entries: [entry("small-sites", "4.1", "Just for fun")],
  },
  {
    id: "tech-stack",
    numeral: "V",
    title: "Tech Stack",
    entries: [entry("tech-stack", "5.1", "Tools I've shipped with")],
  },
  {
    id: "contact",
    numeral: "VI",
    title: "Contact",
    entries: [entry("contact", "6.1", "Email, GitHub, LinkedIn")],
  },
];

// A part's first chapter opens its page, so linking to it shows the part
// heading rather than jumping past it.
export const parts: ContentsPart[] = allParts.map((part) => ({
  ...part,
  entries: part.entries.map((entry, i) =>
    i === 0 ? { ...entry, href: `/${part.id}` } : entry,
  ),
}));

export function getPart(id: string): ContentsPart {
  const part = parts.find((p) => p.id === id);
  if (!part) throw new Error(`Unknown part: ${id}`);
  return part;
}

/** Label shown above each chapter, e.g. "II. Work Experience". */
export const partLabel = (id: string) => {
  const part = getPart(id);
  return `${part.numeral}. ${part.title}`;
};
