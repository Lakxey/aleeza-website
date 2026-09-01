# Personal Website

A bold, one-page personal site built with Next.js, TypeScript, and Tailwind CSS. Dark theme, animated hero, scroll reveals, custom cursor, and a scrambling nav — all editable from a single content file.

## Editing content

Everything you see on the site — your name, tagline, about text, skills, projects, and social links — lives in one file:

```
app/content.ts
```

Open it, replace the placeholder text with your real information, save, and the site updates. You don't need to touch any other file to change the words on the page.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to vercel.com, click "New Project," and import that repository.
3. Vercel auto-detects Next.js — leave the defaults and click "Deploy."
4. You'll get a live URL (e.g. `your-site.vercel.app`). Every time you push a change to the `main` branch, Vercel automatically rebuilds and redeploys — the live site always reflects your latest commit.
5. Optional: add a custom domain under Project Settings → Domains.

## Structure

- `app/content.ts` — all editable copy (name, bio, projects, links)
- `app/page.tsx` — assembles the sections
- `components/` — Hero, About, Work, Contact, Nav, and small interaction pieces (custom cursor, magnetic button, scramble-text links)
- `app/globals.css` — color palette and animation keyframes
