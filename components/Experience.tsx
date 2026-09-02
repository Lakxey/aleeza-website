import { experience } from "@/app/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="work" className="relative px-6 py-28 sm:px-10 sm:py-36">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          02 / Work Experience
        </span>
      </Reveal>

      <div className="mt-10 divide-y divide-line border-t border-b border-line">
        {experience.map((role, i) => (
          <Reveal key={`${role.title}-${role.dates}`} delay={i * 0.05}>
            <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[minmax(0,280px)_1fr] sm:gap-8">
              <div>
                <span className="font-mono text-sm text-fg-dim">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-3xl italic text-fg sm:text-4xl">
                  {role.title}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-fg-dim">
                  {role.company}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-accent">
                  {role.dates}
                </p>
              </div>

              <ul className="space-y-2">
                {role.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-sm text-fg-dim"
                  >
                    <span className="mt-1 text-accent">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}