"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function AnimatedFeatureGrid({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = ref.current;
    if (!grid) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.querySelectorAll<HTMLElement>(".feat-card").forEach((card, i) => {
            setTimeout(() => card.classList.add("feat-visible"), i * 80);
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
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 feat-grid">
      {children}
    </div>
  );
}
