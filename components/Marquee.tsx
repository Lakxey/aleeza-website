import { skills } from "@/app/content";

export default function Marquee() {
  const items = [...skills, ...skills];

  return (
    <div className="border-y border-line bg-bg-soft py-5">
      <div className="marquee-track">
        {items.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-6 pr-6 font-mono text-sm uppercase tracking-widest text-fg-dim"
          >
            {skill}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
