import { skills, tools } from "@/app/content";

export default function Marquee() {
  const skillItems = [...skills, ...skills];
  const toolItems = [...tools, ...tools];

  return (
    <div className="divide-y divide-line border-y border-line bg-bg-soft">
      <div className="overflow-hidden py-6">
        <div className="mb-3 px-6 sm:px-10">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Skills
          </span>
        </div>
        <div className="marquee-track">
          {skillItems.map((skill, i) => (
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

      <div className="overflow-hidden py-6">
        <div className="mb-3 px-6 sm:px-10">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Tools
          </span>
        </div>
        <div className="marquee-track-reverse">
          {toolItems.map((tool, i) => (
            <span
              key={i}
              className="flex items-center gap-6 pr-6 font-sans text-xl font-bold uppercase tracking-wide text-fg sm:text-2xl"
            >
              {tool}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}