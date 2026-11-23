export default function ExternalLink({
  href,
  children,
  accent = false,
}: {
  href: string;
  children: string;
  accent?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        accent
          ? "text-link underline decoration-link/40 underline-offset-[3px] hover:decoration-link"
          : "underline decoration-rule underline-offset-[3px] hover:decoration-ink"
      }
    >
      {children}
    </a>
  );
}
