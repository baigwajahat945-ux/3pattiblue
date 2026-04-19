"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/** App / gameplay screenshots only — never include the standalone logo asset (used in hero & favicon). */
const SLIDE_ITEMS: { src: string; alt: string }[] = [
  {
    src: "/3-patti-blue.webp",
    alt: "3 Patti Blue Android app home screen with Teen Patti and real money games",
  },
  {
    src: "/3-patti-blue-login.webp",
    alt: "3 Patti Blue login screen for signing in with mobile number in Pakistan",
  },
  {
    src: "/3-patti-blue-spin-wheel.webp",
    alt: "3 Patti Blue daily spin wheel bonus and free rewards",
  },
  {
    src: "/3-patti-blue-customer-support.webp",
    alt: "3 Patti Blue customer support and help chat for Pakistani players",
  },
  {
    src: "/3-patti-blue-bonuses.webp",
    alt: "3 Patti Blue welcome bonus and promotional offers",
  },
  {
    src: "/3-patti-blue-refer.webp",
    alt: "3 Patti Blue refer and earn referral program rewards",
  },
  {
    src: "/3-patti-blue-withdraw.webp",
    alt: "3 Patti Blue withdrawal to JazzCash and EasyPaisa in Pakistan",
  },
  {
    src: "/3-patti-blue-games.webp",
    alt: "3 Patti Blue games lobby with Teen Patti slots and live tables",
  },
];

const LOGO_ASSET = "/3-patti-blue-logo.webp";
const SLIDES = SLIDE_ITEMS.filter((s) => s.src !== LOGO_ASSET);

const INTERVAL_MS = 5500;

export default function LandscapeImageSlider() {
  const [index, setIndex] = useState(0);

  const go = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((n) => (n + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section aria-roledescription="carousel" aria-label="3 Patti Blue app screenshots" className="w-full">
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-xl aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.4/1]">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100 z-[1]" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 70vw"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="absolute inset-y-0 left-0 z-[2] flex items-center pl-2 sm:pl-3">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-sm transition hover:bg-black/65 focus:outline-none focus:ring-2 focus:ring-white/80"
          >
            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 z-[2] flex items-center pr-2 sm:pr-3">
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-sm transition hover:bg-black/65 focus:outline-none focus:ring-2 focus:ring-white/80"
          >
            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="absolute bottom-3 left-0 right-0 z-[2] flex justify-center gap-2" role="tablist" aria-label="Slide indicators">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1} of ${SLIDES.length}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {SLIDES.length}: {SLIDES[index]?.alt}
      </p>
    </section>
  );
}
