"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/app/content";
import Reveal from "./Reveal";

// Builds one continuous polygon outline for all the steps together, so they
// render as a single connected staircase shape instead of separate bars.
function stairPolygon(n: number, stepWidth: number, baseHeight: number, heightStep: number) {
  const svgHeight = baseHeight + (n - 1) * heightStep;
  const points: [number, number][] = [[0, svgHeight]];
  for (let i = 0; i < n; i++) {
    const top = svgHeight - (baseHeight + i * heightStep);
    points.push([i * stepWidth, top]);
    points.push([(i + 1) * stepWidth, top]);
  }
  points.push([n * stepWidth, svgHeight]);
  return points.map((p) => p.join(",")).join(" ");
}

const keyOf = (role: { title: string; dates: string }) => `${role.title}-${role.dates}`;

export default function Experience() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const stairSteps = [...experience].reverse();

  // These are just proportional "units" now, not literal pixels — the whole
  // figure is sized fluidly (as a percentage of its container) so it can
  // grow to fill the available width instead of staying a fixed size.
  const STEP_WIDTH = 180;
  const BASE_HEIGHT = 150;
  const HEIGHT_STEP = 85;
  const n = stairSteps.length;
  const svgWidth = STEP_WIDTH * n;
  const svgHeight = BASE_HEIGHT + (n - 1) * HEIGHT_STEP;

  // Small, fixed gap between a step's tread and its label, plus enough
  // headroom above the tallest step for the label text itself.
  const LABEL_GAP = 14;
  const LABEL_ROOM = 90;
  const wrapperHeight = svgHeight + LABEL_GAP + LABEL_ROOM;

  return (
    <section id="work" className="relative px-6 py-28 sm:px-10 sm:py-36">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          04 / Work Experience
        </span>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-14">
          <div
            className="relative mx-auto w-full max-w-[1200px]"
            style={{ aspectRatio: `${svgWidth} / ${wrapperHeight}` }}
          >
            {/* one connected staircase shape, ascending left to right,
               pinned to the bottom of the wrapper and stretched to fill it.
               Stays visible at all times — nothing ever covers it. */}
            <svg
              className="pointer-events-none absolute bottom-0 left-0 w-full"
              style={{ height: `${(svgHeight / wrapperHeight) * 100}%` }}
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="stairGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="1" />
                </linearGradient>
              </defs>
              <polygon
                points={stairPolygon(n, STEP_WIDTH, BASE_HEIGHT, HEIGHT_STEP)}
                fill="url(#stairGradient)"
              />
              {/* riser lines between steps, and a light line along each tread */}
              {stairSteps.map((_, i) => {
                const top = svgHeight - (BASE_HEIGHT + i * HEIGHT_STEP);
                return (
                  <line
                    key={`tread-${i}`}
                    x1={i * STEP_WIDTH}
                    y1={top}
                    x2={(i + 1) * STEP_WIDTH}
                    y2={top}
                    stroke="var(--bg)"
                    strokeOpacity={0.35}
                    strokeWidth={2}
                  />
                );
              })}
            </svg>

            {/* each role sits a fixed, small gap above its own step. Click the
               title and its description expands right there, in place, on
               top of the ladder — the ladder itself never gets covered up. */}
            {stairSteps.map((role, i) => {
              const stepHeight = BASE_HEIGHT + i * HEIGHT_STEP;
              const key = keyOf(role);
              const isActive = activeKey === key;
              const centerPct = ((i + 0.5) / n) * 100;
              const bottomPct = ((stepHeight + LABEL_GAP) / wrapperHeight) * 100;
              return (
                <div
                  key={key}
                  className="absolute z-10 text-center"
                  style={{
                    left: `${centerPct}%`,
                    bottom: `${bottomPct}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isActive ? (
                      <motion.div
                        key="card"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="w-[85vw] max-w-[300px] rounded-xl border border-line bg-bg-soft/95 p-4 text-left shadow-lg backdrop-blur-sm sm:max-w-[320px]"
                      >
                        <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                          {role.dates}
                        </p>
                        <h3 className="mt-1 font-display text-lg italic text-fg sm:text-xl">
                          {role.title}
                        </h3>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-fg-dim">
                          {role.company}
                        </p>
                        <ul className="mt-3 space-y-2">
                          {role.points.map((point, j) => (
                            <li key={j} className="flex gap-2 text-xs text-fg-dim sm:text-sm">
                              <span className="mt-1 text-accent">—</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => setActiveKey(null)}
                          className="mt-3 font-mono text-[10px] uppercase tracking-widest text-fg-dim transition-colors hover:text-fg"
                        >
                          ✕ Close
                        </button>
                      </motion.div>
                    ) : (
                      <motion.button
                        key="label"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveKey(key)}
                        className="px-2"
                      >
                        <p className="font-mono text-[10px] uppercase tracking-widest text-fg-dim sm:text-xs">
                          {role.dates}
                        </p>
                        <p className="mt-1 font-display text-base italic leading-snug text-fg transition-colors hover:text-accent sm:text-xl">
                          {role.title}
                        </p>
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-center font-mono text-xs uppercase tracking-widest text-fg-dim">
            Click a role to see what it involved
          </p>
        </div>
      </Reveal>
    </section>
  );
}