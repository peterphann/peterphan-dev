export interface Site {
  name: string;
  url: string;
  description: string;
}

export const sites: Site[] = [
  {
    name: "Duck Maths",
    url: "https://duck.peterphan.dev/",
    description:
      "A timed math drilling website. This was one of the first websites I ever made!",
  },
  {
    name: "meep world",
    url: "https://meepworld.peterphan.dev/",
    description:
      "A guessing game about finding all 56 hidden meeps, with a checklist of the ones you've found.",
  },
];
