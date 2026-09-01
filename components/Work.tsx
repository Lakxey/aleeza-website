"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/app/content";
import Reveal from "./Reveal";

export default function Work() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="work" className="relative px-6 py-28 sm:px-10 sm:py-36">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          02 / Selected Work
        </span>
      </Reveal>

      <div className="mt-10 divide-y divide-line border-t border-b border-line">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.05}>
            <div
              role={project.link ? "link" : undefined}
              tabIndex={project.link ? 0 : undefined}
              onClick={() => {
                if (project.link) window.location.href = project.link;
              }}
              onKeyDown={(e) => {
                if (project.link && (e.key === "Enter" || e.key === " ")) {
                  window.location.href = project.link;
                }
              }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={`group relative flex flex-col justify-between gap-4 py-8 sm:flex-row sm:items-center ${
                project.link ? "cursor-pointer" : ""
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
              />

              <div className="flex items-baseline gap-6">
                <span className="font-mono text-sm text-fg-dim">
                  0{i + 1}
                </span>
                <h3 className="font-display text-3xl italic text-fg transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                  {project.title}
                </h3>
              </div>

              <p className="max-w-md text-sm text-fg-dim sm:mx-6">
                {project.description}
              </p>

              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-fg-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-sm text-fg-dim">
                  {project.year}
                </span>
                {project.link && (
                  <motion.span
                    animate={{ x: active === i ? 4 : 0 }}
                    className="font-mono text-accent"
                  >
                    →
                  </motion.span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
