import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const sequelSans = localFont({
  src: [
    { path: "../../public/fonts/Sequel Sans Light Disp.ttf", weight: "200", style: "normal" },
    { path: "../../public/fonts/Sequel Sans Book Disp.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/Sequel Sans Roman Disp.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Sequel Sans Medium Disp.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Sequel Sans Semi Bold Disp.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Sequel Sans Bold Disp.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Sequel Sans Heavy Disp.ttf", weight: "800", style: "normal" },
    { path: "../../public/fonts/Sequel Sans Black Disp.ttf", weight: "900", style: "normal" },
  ]
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});