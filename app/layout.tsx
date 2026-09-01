import type { Metadata } from "next";

// Self-hosted fonts (Fontsource) — bundled at build time, no runtime fetch
// to Google's servers, so the site never depends on that network call.
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";

import "./globals.css";
import { site } from "./content";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <div className="grain" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
