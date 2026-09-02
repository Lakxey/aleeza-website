// ---------------------------------------------------------------------------
// SITE CONTENT
// Edit everything below — nothing else in the codebase needs to change to
// update the words, links, or projects on the site.
// ---------------------------------------------------------------------------

export const site = {
  name: "Aleeza Rai",
  role: "Senior Accounts Associate",
  location: "Lalitpur, Nepal",
  email: "raialeeza2017@gmail.com",
  tagline:
    "Keeping US-based clients' books accurate, compliant, and on time.",
  availability: "", // set to "" to hide the badge
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm a BBA graduate specializing in Finance, currently working as a Senior Accounts Associate at Koirala Advisors — managing bookkeeping and accounting for multiple US-based client companies, from transaction recording and bank reconciliations to financial reporting and month-end close.",
    "Before that, I worked as an Advisory Associate Intern, supporting company formation, legal documentation, and client-facing research. I'm QuickBooks Online certified (Level 1 & 2), and known for careful, detail-driven work and clear client communication.",
  ],
  facts: [
    { label: "Based in", value: "Lalitpur, Nepal" },
    { label: "Focus", value: "Accounting & Finance" },
    { label: "Currently", value: "Senior Accounts Associate, Koirala Advisors" },
    { label: "Certified in", value: "QuickBooks Online (Level 1 & 2)" },
  ],
};

export const skills = [
  "Accounting & Bookkeeping",
  "Bank Reconciliation",
  "Financial Reporting",
  "MySQL",
  "Client Handling",
  "Research & Analysis",
  "Attention to Detail",
];

export const tools = [
  "QuickBooks Online",
  "Salesforce",
  "ADP",
  "Gusto",
  "Paychex",
  "Intuit Link",
  "ProSeries",
];

export type ExperienceEntry = {
  company: string;
  title: string;
  dates: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Koirala Advisors",
    title: "Senior Accounts Associate",
    dates: "Apr 2026 — Present",
    points: [
      "Manage bookkeeping and accounting activities for multiple US-based client accounts, including reconciliations and month-end processes.",
      "Review client books for accuracy and tax compliance, ensuring records are properly maintained for year-end reporting.",
      "Prepare and assist with year-end tax returns, financial reports, and supporting schedules.",
      "Communicate directly with clients to clarify transactions, resolve discrepancies, and obtain required information.",
    ],
  },
  {
    company: "Koirala Advisors",
    title: "Accounts Associate",
    dates: "Oct 2025 — Apr 2026",
    points: [
      "Managed daily bookkeeping for multiple US-based client companies, including recording income and expenses, performing reconciliations, and supporting month-end financial statement preparation.",
      "Prepared financial reports and summaries for internal and client use.",
      "Maintained organized financial documents and accounting records while handling accurate data entry.",
    ],
  },
  {
    company: "Koirala Advisors",
    title: "Advisory Associate Intern",
    dates: "Jun 2025 — Oct 2025",
    points: [
      "Assisted with preparing US state-wise legal documents for company formation, organization, agreements, wills, and trust documents.",
      "Organized and maintained client documents and files, and supported client consultations by attending meetings and taking notes.",
      "Researched US state-specific requirements for establishing or amending client companies.",
    ],
  },
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
    title: "Risk & Return: FD vs. Stock Market",
    year: "2025",
    description:
      "Compared returns on bank fixed deposits and stocks using annual return, CAGR, standard deviation, and Sharpe ratio to guide investor decisions.",
    tags: ["Financial Research"],
    accent: "from-[var(--accent)] to-transparent",
  },
  {
    title: "E-commerce Case Study — Jeevee",
    year: "2025",
    description:
      "Analyzed a digital business model, UX, and operations through primary interviews, and gave strategic recommendations for growth and retention.",
    tags: ["Business Analysis"],
    accent: "from-fuchsia-500 to-transparent",
  },
  {
    title: "Organizational Information System Analysis",
    year: "2024",
    description:
      "Evaluated a business information system for efficiency, scalability, and security, and proposed ROI-linked improvements.",
    tags: ["Systems Analysis"],
    accent: "from-sky-400 to-transparent",
  },
  {
    title: "MySQL Database Lab Report",
    year: "2023",
    description:
      "Designed relational databases using DDL, DML, joins, and views, with clear documentation of structure and optimization.",
    tags: ["Database"],
    accent: "from-orange-400 to-transparent",
  },
];

export const socials = [
  { label: "Email", href: "mailto:raialeeza2017@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/aleeza-rai/" },
  { label: "Phone", href: "tel:+9779840522269" },
];

export const contact = {
  heading: "Let's make your books work for you.",
};