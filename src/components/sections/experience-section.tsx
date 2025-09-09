"use client";

import MiniExperienceCard from "@/components/mini-experience-card";
import { experiences } from "@/data/experiences";

export default function ExperienceSection() {
  return (
    <div className="relative lg:absolute lg:right-0 lg:top-0 lg:w-1/2 mt-8 lg:mt-0">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/6 via-amber-100/4 to-slate-700/8 rounded-2xl blur-3xl" />

      <div className="relative space-y-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground/90 mb-2">
            Experience
          </h3>
          <p className="text-sm text-muted-foreground">Hover to explore!</p>
        </div>

        <div className="space-y-3">
          {experiences.map((experience, index) => (
            <MiniExperienceCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
