import { socials, contact } from "@/app/content";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

function LinkedInIcon() {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A66C2]">
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#fff">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </span>
  );
}

function MailIcon() {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
        <path d="M3 6.5l9 6.5 9-6.5" />
      </svg>
    </span>
  );
}

const ICONS: Record<string, () => React.ReactNode> = {
  Email: MailIcon,
  LinkedIn: LinkedInIcon,
};

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
        <div className="mt-12 flex flex-wrap items-center gap-6">
          {socials.map((s) => {
            const isEmail = s.label === "Email";
            const Icon = ICONS[s.label];
            return (
              <MagneticButton
                key={s.label}
                href={s.href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="inline-flex items-center transition-transform hover:scale-105"
              >
                {Icon ? <Icon /> : null}
              </MagneticButton>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}