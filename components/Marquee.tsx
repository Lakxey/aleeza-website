import { highlights } from "@/app/content";

export default function Marquee() {
  const items = [...highlights, ...highlights];

  return (
    <div className="border-y border-line bg-bg-soft">
      <div className="overflow-hidden py-8">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 pr-6 font-sans text-xl font-bold uppercase tracking-wide text-fg sm:text-2xl"
            >
              {item}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}