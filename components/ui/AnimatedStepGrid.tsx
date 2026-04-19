"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function AnimatedStepGrid({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = ref.current;
    if (!grid) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.classList.add("step-grid--in"); // for connector line
          grid.querySelectorAll<HTMLElement>(".step-card").forEach((card, i) => {
            setTimeout(() => card.classList.add("step-card--in"), i * 110);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -4% 0px" }
    );
    obs.observe(grid);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="step-grid">
      {children}
    </div>
  );
}
