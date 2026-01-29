import Image from "next/image";
import Link from "next/link";
import { Trophy, Users } from "lucide-react";

interface ProjectProps {
  href?: string;
  src: string;
  title: string;
  description: string;
  date: string;
  award?: string;
}

export default function ProjectCard({
  href = "",
  src,
  title,
  description,
  date,
  award,
}: ProjectProps) {
  return (
    <div className="group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]">
      <div className="relative overflow-hidden bg-muted/30 shadow-[0px_16px_28px_-12px_rgba(0,_0,_0,_0.1)] rounded-md transition-all duration-300 hover:shadow-[0px_20px_35px_-12px_rgba(0,_0,_0,_0.2)] hover:shadow-primary/20">
        <Link href={href} className="block relative">
          {/* Image with overlay effect */}
          <div className="relative overflow-hidden rounded-md">
            <Image
              className="w-full rounded-md h-auto transition-transform duration-500 group-hover:scale-105"
              src={src}
              alt={title}
              width={800}
              height={800}
            />

            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md" />

            {/* Animated border */}
            <div className="absolute inset-0 rounded-md border-2 border-transparent transition-all duration-300 group-hover:border-primary/30" />

            {/* Award indicator */}
            {award && (
              <div
                className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg border ${
                  award.toLowerCase().includes("winner") ||
                  award.toLowerCase().includes("place")
                    ? "bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-neutral-900 border-yellow-300"
                    : "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white border-blue-400"
                }`}
              >
                {award.toLowerCase().includes("user") ? (
                  <Users size={12} />
                ) : (
                  <Trophy size={12} />
                )}
                {award}
              </div>
            )}
          </div>
        </Link>
      </div>

      <div className="mt-4 flex justify-between items-start">
        <div className="text-xl font-medium">
          <p className="text-card-foreground transition-colors duration-200 group-hover:text-primary">
            {title}
          </p>
          {description && (
            <p className="text-muted-foreground transition-colors text-sm font-light duration-200 group-hover:text-muted-foreground/80">
              {description}
            </p>
          )}
        </div>

        <div className="text-muted-foreground font-light transition-all duration-200 group-hover:text-primary group-hover:transform group-hover:translate-x-1">
          {date}
        </div>
      </div>
    </div>
  );
}
