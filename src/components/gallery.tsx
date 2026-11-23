import Image from "next/image";
import { GalleryPhoto } from "@/data/gallery";

/**
 * Phones are too narrow for wide rows, so there each landscape photo gets a
 * row of its own and portraits pair up side by side.
 */
function phoneRows(rows: GalleryPhoto[][]): GalleryPhoto[][] {
  const result: GalleryPhoto[][] = [];
  let portraits: GalleryPhoto[] = [];
  for (const photo of rows.flat()) {
    if (photo.width > photo.height) {
      result.push([photo]);
    } else {
      portraits.push(photo);
      if (portraits.length === 2) {
        result.push(portraits);
        portraits = [];
      }
    }
  }
  if (portraits.length) result.push(portraits);
  return result;
}

/**
 * Rows of photos at their own proportions. Each photo grows in proportion
 * to its aspect ratio, which gives every photo in a row the same height with
 * nothing cropped. Captioned photos darken and reveal their caption on hover,
 * and photos with an href link out.
 */
export default function Gallery({ rows }: { rows: GalleryPhoto[][] }) {
  return (
    <>
      <Rows rows={rows} className="hidden sm:flex" />
      <Rows rows={phoneRows(rows)} className="flex sm:hidden" />
    </>
  );
}

function Rows({
  rows,
  className,
}: {
  rows: GalleryPhoto[][];
  className: string;
}) {
  return (
    <div className={`flex-col gap-3 ${className}`}>
      {rows.map((row, r) => {
        const rowAspect = row.reduce((sum, p) => sum + p.width / p.height, 0);
        return (
          <div key={r} className="flex gap-3">
            {row.map((photo) => (
              <figure
                key={photo.src}
                className="group relative m-0 min-w-0 overflow-hidden bg-wash"
                style={{
                  flex: `${photo.width / photo.height} 1 0%`,
                  aspectRatio: `${photo.width} / ${photo.height}`,
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  // A zoomed photo is drawn larger, so it requests a bigger file.
                  sizes={`(min-width: 1024px) ${Math.round(
                    (870 * (photo.zoom ?? 1) * photo.width) /
                      photo.height /
                      rowAspect,
                  )}px, ${Math.round((100 * (photo.zoom ?? 1) * photo.width) / photo.height / rowAspect)}vw`}
                  className="object-cover"
                  style={
                    photo.zoom
                      ? {
                          transform: `scale(${photo.zoom})`,
                          transformOrigin: photo.focus ?? "center",
                        }
                      : undefined
                  }
                />

                {photo.title && (
                  // Always on a photo, so the overlay keeps fixed dark-on-light
                  // colors in both themes.
                  <figcaption className="absolute inset-0 flex flex-col justify-end gap-1 bg-gradient-to-t from-black/75 via-black/35 to-black/10 p-4 text-white opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100 motion-reduce:transition-none">
                    <span className="translate-y-1.5 text-base font-medium leading-tight tracking-[-0.01em] transition-transform duration-300 ease-out group-focus-within:translate-y-0 group-hover:translate-y-0 motion-reduce:transition-none">
                      {photo.title}
                      {photo.href && <span aria-hidden="true"> ↗</span>}
                    </span>
                    {photo.subtitle && (
                      <span className="translate-y-1.5 font-mono text-[11px] text-white/75 transition-transform delay-[40ms] duration-300 ease-out group-focus-within:translate-y-0 group-hover:translate-y-0 motion-reduce:transition-none">
                        {photo.subtitle}
                      </span>
                    )}
                  </figcaption>
                )}

                {photo.href && (
                  // Covers the whole photo so any point of it opens the link.
                  <a
                    href={photo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={photo.title ?? photo.alt}
                    className="absolute inset-0 outline-offset-[-3px] focus-visible:outline-2 focus-visible:outline-white"
                  />
                )}
              </figure>
            ))}
          </div>
        );
      })}
    </div>
  );
}
