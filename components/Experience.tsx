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
               pinned to the bottom of the wrapper and stretched to fill it. */}
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

            {stairSteps.map((role, i) => {
              const stepHeight = BASE_HEIGHT + i * HEIGHT_STEP;
              const key = keyOf(role);
              const isActive = activeKey === key;
              const leftPct = (i / n) * 100;
              const widthPct = (1 / n) * 100;
              const labelBottomPct = ((stepHeight + LABEL_GAP) / wrapperHeight) * 100;
              const stepHeightPct = (stepHeight / wrapperHeight) * 100;

              return (
                <div key={key}>
                  {/* dates + title, sitting just above the step — fades out
                     while its own description is open */}
                  <button
                    onClick={() => setActiveKey(isActive ? null : key)}
                    className="absolute px-2 text-center transition-opacity"
                    style={{
                      left: `${leftPct}%`,
                      width: `${widthPct}%`,
                      bottom: `${labelBottomPct}%`,
                      opacity: isActive ? 0 : 1,
                      pointerEvents: isActive ? "none" : "auto",
                    }}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-widest text-fg-dim sm:text-xs">
                      {role.dates}
                    </p>
                    <p className="mt-1 font-display text-base italic leading-snug text-fg transition-colors hover:text-accent sm:text-xl">
                      {role.title}
                    </p>
                  </button>

                  {/* the description itself — sized and positioned to sit
                     exactly on top of this step's own colored block, right
                     inside the ladder rather than floating above it */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        key="card"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 flex flex-col overflow-y-auto rounded-t-lg border border-line bg-bg/92 p-2 text-left backdrop-blur-sm sm:p-4"
                        style={{
                          left: `${leftPct}%`,
                          width: `${widthPct}%`,
                          bottom: 0,
                          height: `${stepHeightPct}%`,
                        }}
                      >
                        <p className="font-mono text-[9px] uppercase tracking-widest text-accent sm:text-xs">
                          {role.dates}
                        </p>
                        <h3 className="mt-1 font-display text-sm italic leading-tight text-fg sm:text-lg">
                          {role.title}
                        </h3>
                        <ul className="mt-1 space-y-1 overflow-y-auto sm:mt-2 sm:space-y-1.5">
                          {role.points.map((point, j) => (
                            <li key={j} className="flex gap-1.5 text-[9px] leading-snug text-fg-dim sm:text-xs">
                              <span className="text-accent">—</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => setActiveKey(null)}
                          className="mt-auto self-start pt-1 font-mono text-[9px] uppercase tracking-widest text-fg-dim transition-colors hover:text-fg sm:text-[10px]"
                        >
                          ✕ Close
                        </button>
                      </motion.div>
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