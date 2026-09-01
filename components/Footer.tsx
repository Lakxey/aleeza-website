import { site } from "@/app/content";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-line px-6 py-8 font-mono text-xs uppercase tracking-widest text-fg-dim sm:flex-row sm:px-10">
      <span>
        © {new Date().getFullYear()} {site.name}
      </span>
      <a href="#top" className="transition-colors hover:text-fg">
        Back to top ↑
      </a>
    </footer>
  );
}
