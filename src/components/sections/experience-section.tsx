"use client";

import { useState, useEffect, useRef } from "react";
import ExperienceCard from "@/components/mini-experience-card";
import { experiences } from "@/data/experiences";

export default function ExperienceSection() {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect if device supports touch
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          // @ts-ignore
          navigator.msMaxTouchPoints > 0
      );
    };

    checkTouchDevice();
  }, []);

  const handleCardClick = (index: number) => {
    // Only handle click on touch devices
    if (!isTouchDevice) return;
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isTouchDevice &&
        sectionRef.current &&
        !sectionRef.current.contains(event.target as Node)
      ) {
        setOpenCardIndex(null);
      }
    };

    if (openCardIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCardIndex, isTouchDevice]);

  return (
    <div
      ref={sectionRef}
      className="relative lg:absolute lg:right-0 lg:top-0 lg:w-1/2 mt-8 lg:mt-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/6 via-amber-100/4 to-slate-700/8 rounded-2xl blur-3xl" />

      <div className="relative space-y-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground/90 mb-2">
            Experience
          </h3>
          <p className="text-sm text-muted-foreground">
            {isTouchDevice ? "Tap to explore!" : "Hover to explore!"}
          </p>
        </div>

        <div className="space-y-3">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              isOpen={openCardIndex === index}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
