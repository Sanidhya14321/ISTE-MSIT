"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const particleColors = ["#ff007f", "#ff4500", "#ffcc00", "#9b30ff"];

export function AnimatedBackground() {
  const [particles, setParticles] = useState<
    {
      id: number;
      x: number;
      y: number;
      size: number;
      color: string;
      duration: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 120 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
      }));
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-background" />

      {/* Gradient Waves */}
      <div
        className={cn(
          "absolute -z-1 w-[200%] h-[200%] top-1/2 left-1/2",
          "bg-[radial-gradient(circle_farthest-side,rgba(155,48,255,0.2),rgba(255,255,255,0))]",
          "animate-[wave_15s_linear_infinite]"
        )}
      />
      <div
        className={cn(
          "absolute -z-1 w-[200%] h-[200%] top-1/2 left-1/2",
          "bg-[radial-gradient(circle_farthest-side,rgba(255,0,127,0.15),rgba(255,255,255,0))]",
          "animate-[wave_20s_linear_infinite_reverse]"
        )}
        style={{ animationDelay: '-5s' }}
      />
      <div
        className={cn(
          "absolute -z-1 w-[200%] h-[200%] top-1/2 left-1/2",
          "bg-[radial-gradient(circle_farthest-side,rgba(255,69,0,0.15),rgba(255,255,255,0))]",
          "animate-[wave_25s_linear_infinite]"
        )}
        style={{ animationDelay: '-10s' }}
      />

      {/* Overlay Particles */}
      <div className="absolute inset-0 z-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute animate-float"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              borderRadius: "50%",
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              boxShadow: `0 0 8px ${p.color}, 0 0 16px ${p.color}`,
              opacity: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
