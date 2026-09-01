import { skills } from "@/app/content";

export default function Marquee() {
  const items = [...skills, ...skills];

  return (
    <div className="border-y border-line bg-bg-soft py-7">
      <div className="mb-3 px-6 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          Skills &amp; Tools
        </span>
      </div>
      <div className="marquee-track">
        {items.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-6 pr-6 font-sans text-xl font-bold uppercase tracking-wide text-fg sm:text-2xl"
          >
            {skill}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}