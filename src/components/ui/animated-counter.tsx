"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
}

export function AnimatedCounter({ from, to }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(to);
    }
  }, [motionValue, inView, to]);

  useEffect(() => 
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
      }
    }),
    [springValue]
  );

  return <span ref={ref} />;
}
