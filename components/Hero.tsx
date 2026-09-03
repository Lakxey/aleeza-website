"use client";

import { motion } from "framer-motion";
import { site } from "@/app/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-24 sm:px-10"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-24 left-6 font-display text-2xl italic text-accent sm:left-10 sm:text-3xl"
      >
        {site.welcome}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-fg-dim"
      >
        {site.role} · {site.location}
      </motion.p>

      <h1 className="mt-6 max-w-5xl text-[13vw] leading-[0.9] tracking-tight sm:text-[9vw] lg:text-[7.5vw]">
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="block font-sans font-medium"
        >
          {site.name.split(" ")[0]}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="block font-display italic text-accent"
        >
          {site.name.split(" ").slice(1).join(" ") || site.role}
        </motion.span>
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8 max-w-md text-lg text-fg-dim"
      >
        {site.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-10 left-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-fg-dim sm:left-10"
      >
        <span className="inline-block h-8 w-px animate-pulse bg-fg-dim" />
        Scroll
      </motion.div>
    </section>
  );
}