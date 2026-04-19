"use client";

import { useEffect, useRef } from "react";

interface MiniGame {
  icon: string;
  label: string;
}

export function AnimatedMiniGameGrid({ games }: { games: MiniGame[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = ref.current;
    if (!grid) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.querySelectorAll<HTMLElement>(".mg-card").forEach((card, i) => {
            setTimeout(() => card.classList.add("mg-in"), i * 45);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -3% 0px" }
    );
    obs.observe(grid);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
    >
      {games.map(({ icon, label }) => (
        <div key={label} className="mg-card">
          <div className="mg-icon-wrap">
            <span role="img" aria-label={label}>{icon}</span>
          </div>
          <span className="mg-label">{label}</span>
        </div>
      ))}
    </div>
  );
}
