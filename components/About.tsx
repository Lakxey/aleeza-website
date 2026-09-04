import { about } from "@/app/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-28 sm:px-10 sm:py-36">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          01 / {about.heading}
        </span>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-3xl font-display text-3xl italic text-fg sm:text-5xl">
          {about.intro}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 space-y-6">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="max-w-4xl font-sans text-sm font-bold leading-relaxed text-fg-dim sm:text-base"
            >
              {p}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}