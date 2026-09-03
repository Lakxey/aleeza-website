import { site } from "@/app/content";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 sm:px-10">
      <p className="text-center font-display text-xl italic text-fg-dim sm:text-2xl">
        {site.farewell}
      </p>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-fg-dim sm:flex-row">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <a href="#top" className="transition-colors hover:text-fg">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}