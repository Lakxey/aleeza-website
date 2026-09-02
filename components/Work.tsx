"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/app/content";
import Reveal from "./Reveal";

export default function Work() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="projects" className="relative px-6 py-28 sm:px-10 sm:py-36">
  <Reveal>
    <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
      03 / Projects Done
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
              className={`group relative grid grid-cols-1 gap-3 py-8 sm:grid-cols-[minmax(0,280px)_1fr_minmax(0,220px)] sm:items-center sm:gap-8 ${
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

              <p className="text-sm text-fg-dim">{project.description}</p>

              <div className="flex flex-wrap items-center gap-4 sm:justify-end">
                <div className="flex flex-wrap gap-2">
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