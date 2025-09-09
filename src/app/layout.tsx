import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { sequelSans } from "@/util/fonts";
// import Sidebar from "@/components/sidebar";
import BackgroundStars from "@/components/background-stars";

export const metadata: Metadata = {
  title: "Peter Phan",
  description: "Personal website of Peter Phan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${sequelSans.className} antialiased flex animate-fade-in`}
      >
        <BackgroundStars />
        {/* <Sidebar className={"hidden md:block"} /> */}
        <div className={"p-8 lg:p-16 flex-1 overflow-y-auto"}>{children}</div>
      </body>
    </html>
  );
}
