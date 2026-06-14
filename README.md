# Lakshman Arun P — Portfolio

Personal portfolio site for Lakshman Arun P, targeting full-stack developer and tech sales roles.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) for styling
- [Framer Motion](https://www.framer.com/motion/) for scroll animations
- [next-themes](https://github.com/pacocoursey/next-themes) for the dark/light theme toggle

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3003](http://localhost:3003) to view the site (the dev/start scripts are pinned to port 3003).

## Project Structure

- `src/app/` — pages for each route (`/`, `/experience`, `/projects`, `/skills`, `/contact`) plus shared layout, SEO files (`sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `icon.tsx`), and the 404 page
- `src/components/` — shared UI (Navbar, Footer, theme toggle, animated section wrapper, icons)
- `src/lib/data.ts` — all site content (profile, experience, projects, skills). Edit this file to update what's shown on the site
- `public/resume/` — downloadable resume PDF

## Deployment

Built for static/serverless hosting on [Vercel](https://vercel.com). After deploying:

1. Update the placeholder domain (`https://lakshmanarun.dev`) in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` to the real production URL.
2. Re-run `npm run build` to confirm everything still builds cleanly.

Built using **Claude Code**
