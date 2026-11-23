import { Inter_Tight, JetBrains_Mono, Newsreader } from "next/font/google";

export const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

export const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jetbrains-mono",
});
