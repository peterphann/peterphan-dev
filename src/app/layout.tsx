import type { Metadata } from "next";
import { ReactNode } from "react";
import { mono, sans, serif } from "./fonts";
import { PageFade, TransitionProvider } from "@/components/page-transition";
import SiteHeader from "@/components/site-header";
import TableOfContents, {
  MobileContents,
} from "@/components/table-of-contents";
import { parts } from "@/data/contents";
import { REVISION } from "@/lib/site";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Peter Phan", template: "%s | Peter Phan" },
  description: "Personal website of Peter Phan",
};

// Applies a saved theme choice before first paint. With no saved choice the
// page follows the system setting through prefers-color-scheme.
const themeScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased pb-(--footer-height)">
        <TransitionProvider>
          <SiteHeader />

          <div className="mx-auto grid min-h-[calc(100vh-var(--header-height)-var(--footer-height))] max-w-[1240px] gap-16 px-6 lg:grid-cols-[260px_minmax(0,1fr)]">
            <aside className="hidden lg:block">
              <div className="sticky top-(--header-height) max-h-[calc(100vh-var(--header-height)-var(--footer-height))] overflow-y-auto pb-8 pt-16">
                <TableOfContents parts={parts} />
              </div>
            </aside>

            <main className="min-w-0">
              <MobileContents parts={parts} placement="before" />
              <PageFade>{children}</PageFade>
              <MobileContents parts={parts} placement="after" />
            </main>
          </div>

          {/* Pinned to the bottom of the screen; body padding keeps it from
              covering the end of the page. */}
          <footer className="fixed inset-x-0 bottom-0 z-10 border-t border-rule bg-paper pb-[env(safe-area-inset-bottom)]">
            <div className="mx-auto flex h-(--footer-height) max-w-[1240px] items-center justify-between gap-4 px-6 text-[13px] text-muted">
              <span className="font-serif text-base text-ink">Peter Phan</span>
              <span className="flex gap-5 font-mono text-[11px] text-faint">
                <span className="hidden sm:inline">Houston, TX</span>
                <span>rev. {REVISION}</span>
                <span>
                  inspired by{" "}
                  <a
                    href="https://www.notion.com/a-new-shape-for-work"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-rule underline-offset-2 hover:text-ink hover:decoration-ink"
                  >
                    Notion
                  </a>
                </span>
              </span>
            </div>
          </footer>
        </TransitionProvider>
      </body>
    </html>
  );
}
