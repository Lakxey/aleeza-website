"use client";

import { useRef } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#";

export default function ScrambleLink({
  href,
  children,
  className,
}: {
  href: string;
  children: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const frame = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = () => {
    const el = ref.current;
    if (!el) return;
    const original = children;
    let iteration = 0;

    if (frame.current) clearInterval(frame.current);
    frame.current = setInterval(() => {
      el.textContent = original
        .split("")
        .map((letter, index) => {
          if (letter === " ") return " ";
          if (index < iteration) return original[index];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      if (iteration >= original.length) {
        if (frame.current) clearInterval(frame.current);
      }
      iteration += 1 / 3;
    }, 30);
  };

  const reset = () => {
    if (frame.current) clearInterval(frame.current);
    if (ref.current) ref.current.textContent = children;
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseEnter={scramble}
      onMouseLeave={reset}
      className={className}
    >
      {children}
    </a>
  );
}
