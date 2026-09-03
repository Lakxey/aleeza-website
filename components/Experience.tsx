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

export default function Experience() {
  const [active, setActive] = useState(0);
  const stairSteps = [...experience].reverse();

  const STEP_WIDTH = 180;
  const BASE_HEIGHT = 150;
  const HEIGHT_STEP = 85;
  const n = stairSteps.length;
  const svgWidth = STEP_WIDTH * n;
  const svgHeight = BASE_HEIGHT + (n - 1) * HEIGHT_STEP;

  return (
    <section id="work" className="relative px-6 py-28 sm:px-10 sm:py-36">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          04 / Work Experience
        </span>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-14 overflow-x-auto pb-2">
          <div className="mx-auto" style={{ width: svgWidth }}>
            {/* labels — each one sits directly above its own step */}
            <div className="flex" style={{ height: svgHeight * 0.55 }}>
              {stairSteps.map((role, i) => {
                const stepHeight = BASE_HEIGHT + i * HEIGHT_STEP;
                return (
                  <div
                    key={`label-${role.title}-${role.dates}`}
                    className="flex flex-col justify-end px-2 text-center"
                    style={{
                      width: STEP_WIDTH,
                      paddingBottom: svgHeight - stepHeight - svgHeight * 0.55 + 12,
                    }}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-widest text-fg-dim">
                      {role.dates}
                    </p>
                    <p className="mt-1 font-display text-base italic leading-snug text-fg sm:text-lg">
                      {role.title}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* one connected staircase shape, ascending left to right */}
            <svg
              width={svgWidth}
              height={svgHeight}
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
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
          </div>
        </div>
      </Reveal>

      <div className="mt-16 divide-y divide-line border-t border-b border-line">
        {experience.map((role, i) => {
          const isActive = active === i;
          return (
            <Reveal key={`${role.title}-${role.dates}`} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[minmax(0,280px)_1fr] sm:gap-8">
                <button
                  onClick={() => setActive(i)}
                  className="text-left"
                >
                  <span className="font-mono text-sm text-fg-dim">
                    0{i + 1}
                  </span>
                  <h3
                    className={`mt-2 font-display text-3xl italic transition-colors sm:text-4xl ${
                      isActive ? "text-accent" : "text-fg hover:text-accent"
                    }`}
                  >
                    {role.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-fg-dim">
                    {role.company}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-accent">
                    {role.dates}
                  </p>
                </button>

                <div className="min-h-[3rem]">
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.ul
                        key={`points-${i}`}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2"
                      >
                        {role.points.map((point, j) => (
                          <li key={j} className="flex gap-3 text-sm text-fg-dim">
                            <span className="mt-1 text-accent">—</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </motion.ul>
                    ) : (
                      <motion.button
                        key={`hint-${i}`}
                        onClick={() => setActive(i)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="font-mono text-xs uppercase tracking-widest text-fg-dim transition-colors hover:text-fg"
                      >
                        Click the title to view details →
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}