"use client";

import { cn } from "@/lib/utils";
import { inter } from "@/util/fonts";
import ProjectCard from "@/components/project-card";
import { useEffect, useState } from "react";

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      src: "/images/aggieseek.png",
      href: "/projects/aggieseek",
      title: "AggieSeek",
      description: "Course tracking platform for Texas A&M University",
      date: "2024 -",
      award: "6000+ Users",
    },
    {
      src: "/images/zephyr.png",
      href: "/projects/zephyr",
      title: "Zephyr",
      description: "AI-powered flight guidance and support",
      date: "2026",
      award: "Hackathon Winner",
    },
    {
      src: "/images/flock.png",
      href: "/projects/flock",
      title: "Flock",
      description:
        "Transform flight delays and cancellations into exciting trips",
      date: "2025",
      award: "Hackathon Winner",
    },
    {
      src: "/images/arcadia.png",
      href: "/projects/arcadia",
      title: "Arcadia",
      description:
        "An online arcade that combines retro aesthetics with computer vision",
      date: "2024",
    },
  ];

  return (
    <section id={"projects"} className={"pt-32"}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={"text-center mb-12"}>
          <h2
            className={cn(
              "text-muted-foreground tracking-widest mb-3 text-xl uppercase transition-all duration-700 transform",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
              inter.className,
            )}
          >
            Portfolio
          </h2>
        </div>

        <div className={"flex flex-col gap-y-8 md:hidden"}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "transition-all duration-700 transform",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              )}
              style={{
                transitionDelay: `${(index + 1) * 150}ms`,
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div
          className={
            "grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 hidden md:grid"
          }
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "transition-all duration-700 transform",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              )}
              style={{
                transitionDelay: `${(index + 1) * 200}ms`,
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
