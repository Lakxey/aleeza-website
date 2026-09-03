"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toolCategories } from "@/app/content";
import Reveal from "./Reveal";

export default function Tools() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? toolCategories[active] : null;

  return (
    <section id="tools" className="px-6 py-28 sm:px-10 sm:py-36">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          03 / Tools I Use
        </span>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-6 max-w-2xl text-lg text-fg-dim">
          A few things I spend a lot of time clicking around in. 💻✨
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <Reveal delay={0.1}>
          <ul className="divide-y divide-line border-t border-b border-line">
            {toolCategories.map((cat, i) => (
              <li key={cat.title}>
                <button
                  onClick={() => setActive(i)}
                  className={`flex w-full items-baseline gap-4 py-6 text-left transition-colors ${
                    active === i ? "text-fg" : "text-fg-dim hover:text-fg"
                  }`}
                >
                  <span className="font-mono text-sm text-accent">
                    0{i + 1}
                  </span>
                  <span className="font-display text-2xl italic sm:text-3xl">
                    {cat.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <AnimatePresence mode="wait">
            {current ? (
              <motion.div
                key={current.title}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-line bg-bg-soft p-8"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  {current.tools}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-fg-dim">
                  {current.description}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl border border-dashed border-line p-8 text-center font-mono text-xs uppercase tracking-widest text-fg-dim"
              >
                Click a category to see what&apos;s inside →
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}