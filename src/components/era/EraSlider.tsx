"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { ERAS, useEra, type Era } from "@/lib/era";

const eraIndex = (e: Era) => ERAS.indexOf(e);

const ERA_LABELS: Record<Era, string> = {
  "2000": "Эпоха .com",
  "2010": "WordPress эра",
  "2026": "Сейчас",
};

const ERA_HINTS: Record<Era, string> = {
  "2000": "Anonymous, /dev/, sage в полях. Услуги — как треды на форуме.",
  "2010": "Корпоративный WP-блог, синие глянцевые кнопки, сайдбар-виджеты.",
  "2026": "Glassmorphism, плавные ауры, минимализм 2026 года.",
};

export function EraSlider() {
  const { era, setEra } = useEra();
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el || typeof ResizeObserver === "undefined") {
      if (el) setWidth(el.clientWidth);
      return;
    }
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  // Sync thumb x to active era stop.
  useEffect(() => {
    if (width === 0) return;
    const target = (width / 2) * eraIndex(era);
    if (reduceMotion) {
      x.set(target);
      return;
    }
    const controls = animate(x, target, {
      type: "spring",
      stiffness: 320,
      damping: 30,
    });
    return () => controls.stop();
  }, [era, width, x, reduceMotion]);

  const commit = (px: number) => {
    if (width === 0) return;
    const ratio = Math.min(1, Math.max(0, px / width));
    const idx = Math.round(ratio * 2);
    const next = ERAS[idx];
    if (next && next !== era) setEra(next);
    else {
      // snap back to current era position
      const target = (width / 2) * eraIndex(era);
      animate(x, target, { type: "spring", stiffness: 320, damping: 30 });
    }
  };

  return (
    <section
      id="era-slider"
      className="era-slider-section"
      aria-label="Машина времени: переключатель эпох сайта"
    >
      <div className="era-slider-shell">
        <div className="era-slider-head">
          <span className="era-slider-eyebrow">/ Машина времени</span>
          <h2 className="era-slider-title">
            Как этот сайт выглядел бы{" "}
            <span className="era-slider-title-accent">в&nbsp;{era} году</span>
          </h2>
          <p className="era-slider-hint">{ERA_HINTS[era]}</p>
        </div>

        <div className="era-slider-track-wrap">
          <div className="era-slider-track" ref={trackRef}>
            <div className="era-slider-rail" aria-hidden />
            <div
              className="era-slider-fill"
              aria-hidden
              style={{ width: `${(eraIndex(era) / 2) * 100}%` }}
            />

            {ERAS.map((e, i) => (
              <button
                key={e}
                type="button"
                className={`era-slider-stop${era === e ? " is-active" : ""}`}
                style={{ left: `${(i / 2) * 100}%` }}
                onClick={() => setEra(e)}
                aria-label={`${e} год — ${ERA_LABELS[e]}`}
                aria-pressed={era === e}
              >
                <span className="era-slider-stop-dot" aria-hidden />
                <span className="era-slider-stop-year">{e}</span>
                <span className="era-slider-stop-sub">{ERA_LABELS[e]}</span>
              </button>
            ))}

            <motion.button
              type="button"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={2}
              aria-valuenow={eraIndex(era)}
              aria-valuetext={`${era} год`}
              aria-label="Бегунок выбора года"
              className="era-slider-thumb"
              drag="x"
              dragConstraints={{ left: 0, right: width }}
              dragElastic={0.05}
              dragMomentum={false}
              style={{ x }}
              onDragEnd={() => commit(x.get())}
              onKeyDown={(ev) => {
                const idx = eraIndex(era);
                if (ev.key === "ArrowLeft" && idx > 0) {
                  ev.preventDefault();
                  setEra(ERAS[idx - 1]);
                } else if (ev.key === "ArrowRight" && idx < 2) {
                  ev.preventDefault();
                  setEra(ERAS[idx + 1]);
                } else if (ev.key === "Home") {
                  ev.preventDefault();
                  setEra(ERAS[0]);
                } else if (ev.key === "End") {
                  ev.preventDefault();
                  setEra(ERAS[2]);
                }
              }}
              tabIndex={0}
            >
              <span className="era-slider-thumb-inner" aria-hidden />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
