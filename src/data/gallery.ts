export interface GalleryPhoto {
  /** Image path under /public, e.g. "/images/gallery/hiking.jpg". */
  src: string;
  /** The image file's pixel size. Photos in a row are sized from these so
   * each one shows uncropped at its own proportions. */
  width: number;
  height: number;
  alt: string;
  /** Shown over the photo on hover. Photos without a title have no overlay. */
  title?: string;
  /** A smaller line under the title, e.g. a place or date. */
  subtitle?: string;
  /** Makes the photo a link, opened in a new tab. */
  href?: string;
  /** Enlarges the photo inside its tile, e.g. 1.5, without changing the
   * tile's size. Pair with `focus` to choose what stays in view. */
  zoom?: number;
  /** The point to zoom in on, as CSS percentages like "50% 60%"
   * (left-right, top-bottom). Defaults to the center. */
  focus?: string;
}

/**
 * The gallery's rows, top to bottom. Every photo in a row is shown at the
 * same height, with widths following each photo's proportions. Two or three
 * photos per row works best; mixing tall and wide shots keeps rows lively.
 */
export const gallery: GalleryPhoto[][] = [
  [
    {
      src: "/images/gallery/rainier.jpg",
      width: 1536,
      height: 2048,
      alt: "Peter and a friend sitting on a boulder above the valleys at Mount Rainier",
      title: "Mount Rainier",
      subtitle: "Washington",
      zoom: 1.7,
      focus: "50% 62%",
    },
    {
      src: "/images/gallery/battalion.jpg",
      width: 800,
      height: 533,
      alt: "Peter and an AggieSeek teammate giving a thumbs up, holding the app on a phone",
      title: "AggieSeek in The Battalion",
      subtitle: "Texas A&M student newspaper",
      href: "https://thebatt.com/life-arts/navigating-student-life-made-easy-by-the-aggie-coding-club/",
    },
    {
      src: "/images/gallery/space-needle.jpg",
      width: 2160,
      height: 2880,
      alt: "The Space Needle lit up at night",
      title: "Space Needle",
      subtitle: "Seattle, Washington",
    },
  ],
];
