"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/app/content";
import Reveal from "./Reveal";

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="px-6 py-28 sm:px-10 sm:py-36">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          02 / Services
        </span>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <Reveal delay={0.1}>
          <ul className="divide-y divide-line border-t border-b border-line">
            {services.map((service, i) => (
              <li key={service.title}>
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
                    {service.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-line bg-bg-soft p-8"
            >
              <p className="font-display text-xl italic text-fg sm:text-2xl">
                {current.title}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-fg-dim">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}