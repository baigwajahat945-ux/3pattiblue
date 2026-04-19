"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** CSS class added to each *direct child* matching itemSelector when visible */
  itemSelector: string;
  /** Class to add when visible */
  addedClass: string;
  /** ms between each child */
  stagger?: number;
  className?: string;
}

export function AnimateOnScroll({
  children,
  itemSelector,
  addedClass,
  stagger = 100,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>(itemSelector).forEach((item, i) => {
            setTimeout(() => item.classList.add(addedClass), i * stagger);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -4% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [itemSelector, addedClass, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
