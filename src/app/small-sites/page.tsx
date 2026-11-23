import type { Metadata } from "next";
import Chapter from "@/components/chapter";
import { chapterId, partLabel } from "@/data/contents";
import { sites } from "@/data/sites";

export const metadata: Metadata = { title: "Small Sites" };

export default function SmallSites() {
  return (
    <Chapter
      id={chapterId("4.1")}
      part={partLabel("small-sites")}
      number="4.1"
      title="Just for fun"
    >
      <p>Small one-page sites I made on the side.</p>
      <ol className="border-t border-rule font-sans">
        {sites.map((site, i) => (
          <li key={site.url} className="border-b border-rule">
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[36px_minmax(0,1fr)] gap-x-4 gap-y-1 py-4 sm:grid-cols-[36px_minmax(0,1fr)_auto]"
            >
              <span className="font-mono text-xs leading-6 text-muted tabular-nums">
                4.1.{i + 1}
              </span>
              <span className="text-base font-medium leading-6 underline-offset-[3px] group-hover:underline">
                {site.name}
              </span>
              <span className="col-start-2 font-mono text-xs leading-6 text-faint sm:col-start-3 sm:row-start-1">
                {new URL(site.url).host}
              </span>
              <span className="col-start-2 font-serif text-base leading-normal text-ink-soft sm:col-[2/4]">
                {site.description}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </Chapter>
  );
}
