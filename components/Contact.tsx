import { site, socials, contact } from "@/app/content";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-[80vh] flex-col justify-center px-6 py-28 sm:px-10"
    >
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          05 / Contact
        </span>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-8 max-w-3xl font-display text-5xl italic leading-tight text-fg sm:text-7xl">
          {contact.heading}
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-12 flex flex-col items-start gap-10 sm:flex-row sm:items-center">
          <MagneticButton
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-mono text-sm tracking-widest text-bg"
          >
            {site.email}
            <span>↗</span>
          </MagneticButton>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {socials
              .filter((s) => s.label !== "Email")
              .map((s) => {
                return <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest text-fg-dim transition-colors hover:text-fg">{s.label}</a>;
              })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}