"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ExperienceItem } from "@/types/experience";
import TechCard from "@/components/tech-card";

interface ExperienceCardProps {
  experience: ExperienceItem;
  isOpen?: boolean;
  onClick?: () => void;
}

export default function ExperienceCard({
  experience,
  isOpen = false,
  onClick,
}: ExperienceCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    // Only trigger onClick if it's provided (touch devices only)
    if (onClick) {
      e.stopPropagation();
      onClick();
    }
  };

  return (
    <div
      className={cn(
        "group relative",
        "bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm",
        "border border-border/40 hover:border-border/80 rounded-xl p-4",
        "shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/30",
        "hover:scale-[1.02]",
        "transition-all duration-300 ease-in-out",
        "overflow-visible",
        "animate-in slide-in-from-right-4 fade-in",
        "hover:z-20",
        isOpen && "!border-border/80 !shadow-2xl !shadow-black/30 !scale-[1.02] !z-20",
        onClick && "cursor-pointer",
      )}
      style={{
        animationDuration: "800ms",
      }}
      onClick={handleClick}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl",
          isOpen && "!opacity-100"
        )}
      />

      <div
        className={cn(
          "absolute inset-0 rounded-xl bg-gradient-to-r from-rose-500/15 via-amber-100/10 to-slate-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out blur-sm -z-10",
          isOpen && "!opacity-100"
        )}
      />

      {/* Enhanced backdrop glow on hover */}
      <div
        className={cn(
          "absolute -inset-2 rounded-xl bg-gradient-to-r from-rose-500/20 via-amber-100/15 to-slate-700/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out blur-2xl -z-20",
          isOpen && "!opacity-100"
        )}
      />

      <div className="relative z-10">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div
              className={cn(
                "w-8 h-8 bg-muted/80 rounded-lg overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-in-out",
                isOpen && "!scale-110"
              )}
            >
              <Image
                src={experience.imageSrc}
                alt={`${experience.company} logo`}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            {/* Title and company */}
            <div className="mb-2 flex-1">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-card-foreground mb-1 leading-tight line-clamp-2">
                    {experience.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">{experience.company}</span>
                    {experience.companyType && (
                      <span className="text-xs text-muted-foreground/80 italic">
                        {" "}
                        ({experience.companyType})
                      </span>
                    )}
                  </p>
                </div>

                {/* Technology tags in top right */}
                {experience.technologies &&
                  experience.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 ml-2">
                      {experience.technologies.slice(0, 3).map((tech, idx) => (
                        <TechCard
                          key={idx}
                          technology={tech}
                          size={4}
                          className="hover:scale-110 transition-all duration-300 rounded-sm "
                        />
                      ))}
                      {experience.technologies.length > 3 && (
                        <div className="w-4 h-4 rounded-sm bg-muted/40 flex items-center justify-center">
                          <span className="text-[7px] font-bold text-muted-foreground">
                            +{experience.technologies.length - 3}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-muted-foreground/80 bg-muted/50 px-2 py-1 rounded-md">
                {experience.period}
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className={cn(
              "absolute left-0 right-0 top-3",
              "opacity-0 group-hover:opacity-100",
              "max-h-0 group-hover:max-h-96",
              "transition-all duration-300 ease-in-out",
              "pointer-events-none",
              isOpen && "!opacity-100 !max-h-96"
            )}
          >
            <div className="bg-gradient-to-br from-card to-card/98 backdrop-blur-lg border border-border/60 rounded-lg p-4 shadow-xl shadow-black/20">
              <div className="pt-2 border-t border-border/30">
                <ul className="text-xs text-card-foreground/80 leading-relaxed space-y-1.5">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1 h-1 bg-muted-foreground/60 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
