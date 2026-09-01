"use client";

import { site } from "@/app/content";
import ScrambleLink from "./ScrambleLink";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end gap-10 border-b border-line bg-bg/80 px-6 py-5 backdrop-blur-md sm:px-10">
      <nav className="hidden gap-8 sm:flex">
        {LINKS.map((link) => (
          <ScrambleLink
            key={link.href}
            href={link.href}
            className="font-mono text-xs uppercase tracking-widest text-fg-dim transition-colors hover:text-fg"
          >
            {link.label}
          </ScrambleLink>
        ))}
      </nav>

      {site.availability && (
        <div className="hidden items-center gap-2 font-mono text-xs uppercase tracking-widest text-fg-dim sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {site.availability}
        </div>
      )}
    </header>
  );
}