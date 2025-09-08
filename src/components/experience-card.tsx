"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  imageSrc: string;
  companyType?: string;
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-lg hover:border-border/80 transition-all duration-300 cursor-pointer",
        "mb-4 group",
      )}
      onClick={toggleExpanded}
    >
      <div className="flex items-start gap-4">
        {/* Small icon */}
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
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
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-1">
                {experience.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">{experience.company}</span>
                {experience.companyType && (
                  <span className="text-sm text-muted-foreground/80 italic">
                    {" "}
                    ({experience.companyType})
                  </span>
                )}
                <span className="ml-2 text-muted-foreground/60">
                  {experience.location}
                </span>
              </p>
            </div>
            <div className="text-sm font-medium text-muted-foreground mt-1 md:mt-0 md:text-right">
              {experience.period}
            </div>
          </div>

          {/* Expandable description */}
          <div
            className={cn(
              "overflow-hidden transition-all duration-500",
              isExpanded ? "max-h-96" : "max-h-0",
            )}
          >
            <div className="mt-4 pt-3 border-t border-border/50">
              <ul className="space-y-2 text-sm text-card-foreground/90">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom expand arrow - appears on hover */}
      <div className="flex justify-center">
        <div
          className={cn(
            "opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-y-2 group-hover:translate-y-0",
            "flex items-center gap-2 text-xs text-muted-foreground/60 group-hover:text-muted-foreground",
          )}
        >
          <div className="h-px bg-border w-8 transition-all duration-500"></div>
          <div
            className={cn(
              "transition-transform duration-300 ease-in-out",
              isExpanded && "rotate-180",
            )}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L2 4h8L6 8z" />
            </svg>
          </div>
          <div className="h-px bg-border w-8 transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
}
