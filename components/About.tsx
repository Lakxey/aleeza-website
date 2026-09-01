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

      <div className="mt-10 grid gap-12 lg:grid-cols-[2fr_1fr]">
        <Reveal delay={0.1}>
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="max-w-2xl font-display text-2xl italic leading-relaxed text-fg sm:text-3xl"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="space-y-6 border-l border-line pl-6">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs uppercase tracking-widest text-fg-dim">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-base text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
