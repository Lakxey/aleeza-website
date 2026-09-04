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
  const activeRole = experience.find((role) => keyOf(role) === activeKey) ?? null;

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
            {/* labels — each one sits a fixed, small gap above its own step,
               positioned by percentage so they track the figure as it scales */}
            {stairSteps.map((role, i) => {
              const stepHeight = BASE_HEIGHT + i * HEIGHT_STEP;
              const key = keyOf(role);
              const isActive = activeKey === key;
              const leftPct = (i / n) * 100;
              const widthPct = (1 / n) * 100;
              const bottomPct = ((stepHeight + LABEL_GAP) / wrapperHeight) * 100;
              return (
                <button
                  key={key}
                  onClick={() => setActiveKey((prev) => (prev === key ? null : key))}
                  className="absolute px-2 text-center"
                  style={{
                    left: `${leftPct}%`,
                    width: `${widthPct}%`,
                    bottom: `${bottomPct}%`,
                  }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-fg-dim sm:text-xs">
                    {role.dates}
                  </p>
                  <p
                    className={`mt-1 font-display text-base italic leading-snug transition-colors sm:text-xl ${
                      isActive ? "text-accent" : "text-fg hover:text-accent"
                    }`}
                  >
                    {role.title}
                  </p>
                </button>
              );
            })}

            {/* one connected staircase shape, ascending left to right,
               pinned to the bottom of the wrapper and stretched to fill it */}
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

            {/* clicking a title above pops its description up right here,
               inside the figure itself */}
            <AnimatePresence>
              {activeRole && (
                <motion.div
                  key={keyOf(activeRole)}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 z-10 flex flex-col justify-center gap-4 overflow-y-auto rounded-2xl border border-line bg-bg/95 p-6 backdrop-blur-sm sm:p-10"
                >
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-accent">
                      {activeRole.dates}
                    </p>
                    <h3 className="mt-1 font-display text-2xl italic text-fg sm:text-3xl">
                      {activeRole.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-widest text-fg-dim">
                      {activeRole.company}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {activeRole.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-sm text-fg-dim sm:text-base">
                        <span className="mt-1 text-accent">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setActiveKey(null)}
                    className="self-start font-mono text-xs uppercase tracking-widest text-fg-dim transition-colors hover:text-fg"
                  >
                    ← Back to the ladder
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p className="mt-6 text-center font-mono text-xs uppercase tracking-widest text-fg-dim">
            Click a role above to see what it involved
          </p>
        </div>
      </Reveal>
    </section>
  );
}