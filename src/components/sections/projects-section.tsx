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
      description: "",
      date: "2024 –",
      award: "2000+ Users",
    },
    {
      src: "/images/flock.png",
      href: "/projects/flock",
      title: "Flock",
      description: "",
      date: "2025",
      award: "Hackathon Winner",
    },
    {
      src: "/images/arcadia.png",
      href: "/projects/arcadia",
      title: "Arcadia",
      description: "",
      date: "2024",
    },
  ];

  return (
    <section id={"projects"} className={"pt-4"}>
      <div className={"text-center"}>
        <h2
          className={cn(
            "text-neutral-400 tracking-widest mb-3 text-xl uppercase transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            inter.className,
          )}
        >
          Portfolio
        </h2>
      </div>

      {/* Mobile Layout */}
      <div className={"flex flex-col gap-y-5 md:hidden"}>
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
      <div className={"grid-cols-3 gap-x-5 hidden md:grid"}>
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={cn(
              "flex flex-col gap-y-5 transition-all duration-700 transform",
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
    </section>
  );
}
