// ---------------------------------------------------------------------------
// SITE CONTENT
// Edit everything below — nothing else in the codebase needs to change to
// update the words, links, or projects on the site.
// ---------------------------------------------------------------------------

export const site = {
  name: "Your Name",
  role: "What You Do",
  location: "Kathmandu, Nepal",
  email: "you@example.com",
  tagline: "A short, punchy line about what you make or do.",
  availability: "Available for new projects", // set to "" to hide the badge
};

export const about = {
  heading: "About",
  paragraphs: [
    "Write 2–3 sentences about who you are, what you focus on, and what makes your approach different. This is the first real thing people read after the hero — keep it human, not corporate.",
    "Add a second paragraph if you want — a bit of background, what you're currently exploring, or what you care about outside work.",
  ],
  facts: [
    { label: "Based in", value: "Kathmandu, NP" },
    { label: "Focus", value: "Your focus area" },
    { label: "Currently", value: "What you're doing now" },
  ],
};

export const skills = [
  "Skill One",
  "Skill Two",
  "Skill Three",
  "Skill Four",
  "Skill Five",
  "Skill Six",
];

export type Project = {
  title: string;
  year: string;
  description: string;
  tags: string[];
  link?: string;
  accent: string; // tailwind gradient classes for the placeholder art
};

export const projects: Project[] = [
  {
    title: "Project One",
    year: "2026",
    description: "One or two sentences on what this project is and the result you got.",
    tags: ["Tag", "Tag"],
    link: "#",
    accent: "from-[var(--accent)] to-transparent",
  },
  {
    title: "Project Two",
    year: "2025",
    description: "One or two sentences on what this project is and the result you got.",
    tags: ["Tag", "Tag"],
    link: "#",
    accent: "from-fuchsia-500 to-transparent",
  },
  {
    title: "Project Three",
    year: "2025",
    description: "One or two sentences on what this project is and the result you got.",
    tags: ["Tag", "Tag"],
    link: "#",
    accent: "from-sky-400 to-transparent",
  },
];

export const socials = [
  { label: "Email", href: "mailto:you@example.com" },
  { label: "GitHub", href: "https://github.com/yourname" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
  { label: "Twitter / X", href: "https://x.com/yourname" },
];
