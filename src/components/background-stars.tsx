"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadStarsPreset } from "@tsparticles/preset-stars";

export default function BackgroundStars() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      preset: "stars",
      fullScreen: { enable: false },
    }),
    [],
  );

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10 pointer-events-none"
      options={options}
    />
  );
}
