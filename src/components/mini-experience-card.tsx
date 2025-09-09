"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ExperienceItem } from "@/types/experience";
import TechCard from "@/components/tech-card";

interface MiniExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export default function MiniExperienceCard({
  experience,
  index,
}: MiniExperienceCardProps) {
  return (
    <div
      className={cn(
        "group relative",
        "bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm",
        "border border-border/40 rounded-xl p-4",
        "shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10",
        "hover:scale-105 hover:-translate-y-1",
        "transition-all duration-500 ease-out",
        "cursor-pointer overflow-hidden",
        "animate-in slide-in-from-right-4 fade-in",
      )}
      style={{
        animationDuration: "800ms",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose-500/15 via-amber-100/10 to-slate-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

      <div className="relative z-10">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-muted/80 rounded-lg overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

        <div
          className={cn(
            "mt-3 pt-2 border-t border-border/30",
            "grid transition-all duration-500 ease-out",
            "grid-rows-[0fr] group-hover:grid-rows-[1fr]",
          )}
        >
          <div className="overflow-hidden">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
              <ul className="text-xs text-card-foreground/80 leading-relaxed py-2 space-y-1">
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
  );
}
